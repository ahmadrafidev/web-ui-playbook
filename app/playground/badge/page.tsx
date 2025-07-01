"use client"

import React, { useState } from "react"
import { X, Check, AlertTriangle, Info, Star, Crown, Zap, Heart, Shield, Bell, Clock, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"

const badgeComponentsUrlReference = [
  "https://design.visa.com/components/badge/accessibility/",
  "https://polaris-react.shopify.com/components/feedback-indicators/badge",
  "https://gestalt.pinterest.systems/web/badge",
  "https://playbook.ebay.com/design-system/components/badge",
  "https://atlassian.design/components/badge/examples",
  "https://spectrum.adobe.com/page/badge/"
]

interface CustomBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'purple' | 'yellow'
  size?: 'sm' | 'md' | 'lg'
  progress?: 'incomplete' | 'partiallyComplete' | 'complete'
  icon?: React.ReactNode
  removable?: boolean
  interactive?: boolean
  position?: 'top' | 'middle'
  className?: string
  onRemove?: () => void
  onClick?: () => void
  'aria-label'?: string
}

function CustomBadge({
  children,
  variant = 'default',
  size = 'md',
  progress,
  icon,
  removable = false,
  interactive = false,
  position = 'middle',
  className = '',
  onRemove,
  onClick,
  'aria-label': ariaLabel,
  ...props
}: CustomBadgeProps) {
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    neutral: 'bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
    yellow: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100'
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  }

  const progressClasses = {
    incomplete: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
    partiallyComplete: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    complete: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  }

  const positionClasses = {
    top: 'align-top',
    middle: 'align-middle'
  }

  const baseClasses = `
    inline-flex items-center gap-1 font-medium rounded-full
    transition-all duration-200 ease-in-out
    ${sizeClasses[size]}
    ${progress ? progressClasses[progress] : variantClasses[variant]}
    ${positionClasses[position]}
    ${interactive || onClick ? 'hover:shadow-md cursor-pointer hover:scale-105' : ''}
    ${className}
  `

  const Component = onClick ? 'button' : 'span'

  return (
    <Component
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      role={onClick ? 'button' : 'status'}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {removable && onRemove && (
        <button
          type="button"
          className="flex-shrink-0 ml-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors"
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          aria-label={`Remove ${typeof children === 'string' ? children : 'badge'}`}
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </Component>
  )
}

// Badge Group Component
interface BadgeGroupProps {
  badges: Array<{
    id: string
    label: string
    variant?: CustomBadgeProps['variant']
    icon?: React.ReactNode
    removable?: boolean
  }>
  onRemove?: (id: string) => void
  className?: string
}

function BadgeGroup({ badges, onRemove, className = '' }: BadgeGroupProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {badges.map((badge) => (
        <CustomBadge
          key={badge.id}
          variant={badge.variant}
          icon={badge.icon}
          removable={badge.removable}
          onRemove={() => onRemove?.(badge.id)}
        >
          {badge.label}
        </CustomBadge>
      ))}
    </div>
  )
}

// Notification Badge Component
interface NotificationBadgeProps {
  count?: number
  max?: number
  showZero?: boolean
  dot?: boolean
  children: React.ReactNode
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  className?: string
}

function NotificationBadge({
  count = 0,
  max = 99,
  showZero = false,
  dot = false,
  children,
  position = 'top-right',
  className = ''
}: NotificationBadgeProps) {
  const shouldShow = count > 0 || showZero
  const displayCount = count > max ? `${max}+` : count.toString()

  const positionClasses = {
    'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
    'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
  }

  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      {shouldShow && (
        <span
          className={`
            absolute ${positionClasses[position]}
            bg-red-500 text-white text-xs font-semibold
            flex items-center justify-center
            ${dot ? 'h-2 w-2' : 'min-w-[1.25rem] h-5 px-1'}
            rounded-full
          `}
          aria-label={`${count} notifications`}
        >
          {!dot && displayCount}
        </span>
      )}
    </div>
  )
}

export default function BadgePage() {
  const { MobileWarning } = useMobileWarning()
  const [removableBadges, setRemovableBadges] = useState([
    { id: '1', label: 'React', variant: 'info' as const, removable: true },
    { id: '2', label: 'TypeScript', variant: 'purple' as const, removable: true },
    { id: '3', label: 'Next.js', variant: 'default' as const, removable: true },
    { id: '4', label: 'Tailwind', variant: 'success' as const, removable: true }
  ])

  const handleRemoveBadge = (id: string) => {
    setRemovableBadges(badges => badges.filter(badge => badge.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      {MobileWarning}
      <div className="container max-w-5xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Badge</h2>
            <EditButton filePath="app/playground/badge/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Badges are visual indicators that communicate the status, category, or attribute of an object or element. 
            They provide quick recognition and help users understand the state or importance of information at a glance.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Visual Indicator</Badge>
            <Badge>Status Communication</Badge>
            <Badge>Accessible</Badge>
            <Badge>Semantic</Badge>
            <Badge>Contextual</Badge>
          </div>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="interactions">Interactions</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Purpose of Badges</CardTitle>
                <CardDescription>
                  Understanding when and why to use badges in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Status Communication:</strong> Show completion, approval, or progress states</li>
                      <li>• <strong>Categorization:</strong> Label content types, topics, or groups</li>
                      <li>• <strong>Notification:</strong> Indicate count or presence of updates</li>
                      <li>• <strong>Qualification:</strong> Show attributes like {'"New"'}, {'"Featured"'}, {'"Premium"'}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Badge vs Other Components</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Badge When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Showing status or state</li>
                          <li>• Labeling categories</li>
                          <li>• Indicating counts</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200">Use Chip/Tag When:</strong>
                        <ul className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                          <li>• Filtering content</li>
                          <li>• User input/selection</li>
                          <li>• Interactive removal</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Badge Types by Function</h4>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <CustomBadge variant="success" icon={<Check className="h-3 w-3" />}>
                        Completed
                      </CustomBadge>
                      <div>
                        <strong>Status Badge:</strong> Shows completion or progress state
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <CustomBadge variant="info">
                        Documentation
                      </CustomBadge>
                      <div>
                        <strong>Category Badge:</strong> Labels content type or classification
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <NotificationBadge count={3}>
                        <Bell className="h-6 w-6" />
                      </NotificationBadge>
                      <div>
                        <strong>Notification Badge:</strong> Shows count of pending items
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Variants */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Badge Variants & States</CardTitle>
                <CardDescription>
                  Different visual styles and semantic meanings for badges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Semantic Variants</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CustomBadge variant="default">Default</CustomBadge>
                        <span className="text-sm">Neutral information</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CustomBadge variant="success" icon={<Check className="h-3 w-3" />}>Success</CustomBadge>
                        <span className="text-sm">Positive outcome</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CustomBadge variant="warning" icon={<AlertTriangle className="h-3 w-3" />}>Warning</CustomBadge>
                        <span className="text-sm">Caution required</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CustomBadge variant="error" icon={<X className="h-3 w-3" />}>Error</CustomBadge>
                        <span className="text-sm">Problem or failure</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CustomBadge variant="info" icon={<Info className="h-3 w-3" />}>Information</CustomBadge>
                        <span className="text-sm">Additional context</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CustomBadge variant="neutral">Neutral</CustomBadge>
                        <span className="text-sm">Subdued information</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CustomBadge variant="purple" icon={<Crown className="h-3 w-3" />}>Premium</CustomBadge>
                        <span className="text-sm">Special status</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CustomBadge variant="yellow" icon={<Star className="h-3 w-3" />}>Featured</CustomBadge>
                        <span className="text-sm">Highlighted content</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Progress States</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CustomBadge progress="incomplete">Incomplete</CustomBadge>
                      <span className="text-sm">Not started or missing requirements</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CustomBadge progress="partiallyComplete">Partially Complete</CustomBadge>
                      <span className="text-sm">In progress or partially fulfilled</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CustomBadge progress="complete" icon={<Check className="h-3 w-3" />}>Complete</CustomBadge>
                      <span className="text-sm">Fully finished or fulfilled</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Sizes</h4>
                  <div className="flex items-center gap-4">
                    <CustomBadge size="sm">Small</CustomBadge>
                    <CustomBadge size="md">Medium</CustomBadge>
                    <CustomBadge size="lg">Large</CustomBadge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">With Icons</h4>
                  <div className="flex flex-wrap gap-2">
                    <CustomBadge variant="success" icon={<Shield className="h-3 w-3" />}>Verified</CustomBadge>
                    <CustomBadge variant="warning" icon={<Clock className="h-3 w-3" />}>Pending</CustomBadge>
                    <CustomBadge variant="info" icon={<User className="h-3 w-3" />}>Author</CustomBadge>
                    <CustomBadge variant="purple" icon={<Zap className="h-3 w-3" />}>Pro</CustomBadge>
                    <CustomBadge variant="error" icon={<Heart className="h-3 w-3" />}>Loved</CustomBadge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interactions */}
          <TabsContent value="interactions" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Badges</CardTitle>
                <CardDescription>
                  Badges can be interactive when they need to trigger actions or be removed.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Removable Badges</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Try removing badges by clicking the X button:
                  </p>
                  <BadgeGroup
                    badges={removableBadges}
                    onRemove={handleRemoveBadge}
                  />
                  {removableBadges.length === 0 && (
                    <div className="text-center py-4 text-muted-foreground">
                      All badges removed! 
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="ml-2"
                        onClick={() => setRemovableBadges([
                          { id: '1', label: 'React', variant: 'info', removable: true },
                          { id: '2', label: 'TypeScript', variant: 'purple', removable: true },
                          { id: '3', label: 'Next.js', variant: 'default', removable: true },
                          { id: '4', label: 'Tailwind', variant: 'success', removable: true }
                        ])}
                      >
                        Reset
                      </Button>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Clickable Badges</h4>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <CustomBadge 
                        variant="info" 
                        interactive 
                        onClick={() => alert('Badge clicked!')}
                      >
                        Clickable Badge
                      </CustomBadge>
                      <CustomBadge 
                        variant="success" 
                        interactive 
                        icon={<Star className="h-3 w-3" />}
                        onClick={() => alert('Starred!')}
                      >
                        Star
                      </CustomBadge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      These badges respond to clicks and show hover effects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Badges</CardTitle>
                <CardDescription>
                  Badges that show counts or status on other elements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Count Badges</h4>
                    <div className="flex flex-wrap gap-4">
                      <NotificationBadge count={3}>
                        <Bell className="h-8 w-8" />
                      </NotificationBadge>
                      <NotificationBadge count={15}>
                        <User className="h-8 w-8" />
                      </NotificationBadge>
                      <NotificationBadge count={150} max={99}>
                        <Heart className="h-8 w-8" />
                      </NotificationBadge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Dot Indicators</h4>
                    <div className="flex flex-wrap gap-4">
                      <NotificationBadge dot count={1}>
                        <Shield className="h-8 w-8" />
                      </NotificationBadge>
                      <NotificationBadge dot count={1} position="top-left">
                        <Clock className="h-8 w-8" />
                      </NotificationBadge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Usage Patterns</CardTitle>
                <CardDescription>
                  Common patterns and best practices for using badges effectively.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Content Guidelines</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do</h5>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Use single words when possible</li>
                          <li>• Write in past tense for status ({'"Completed"'})</li>
                          <li>• Be concise and clear</li>
                          <li>• Use consistent language</li>
                          <li>• Consider accessibility</li>
                        </ul>
                        <div className="mt-3 flex gap-2">
                          <CustomBadge variant="success">Completed</CustomBadge>
                          <CustomBadge variant="warning">Pending</CustomBadge>
                          <CustomBadge variant="info">Draft</CustomBadge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Avoid</h5>
                        <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                          <li>• Long text or sentences</li>
                          <li>• Conflicting semantic meanings</li>
                          <li>• Too many badges on one item</li>
                          <li>• Using badges for interactive content</li>
                          <li>• Relying only on color for meaning</li>
                        </ul>
                        <div className="mt-3 flex gap-2">
                          <CustomBadge variant="error" className="opacity-50">This is way too long</CustomBadge>
                          <CustomBadge variant="success" className="opacity-50">Error Success</CustomBadge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Layout Patterns</h4>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Inline with Text</h5>
                      <p className="text-sm mb-2">
                        Ads & Campaigns <CustomBadge variant="yellow" position="top">New</CustomBadge>
                      </p>
                      <p className="text-lg mb-2">
                        Enterprise Dashboard <CustomBadge variant="purple" position="top">Beta</CustomBadge>
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">In Lists or Cards</h5>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded">
                          <span>Project Alpha</span>
                          <CustomBadge variant="success">Active</CustomBadge>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded">
                          <span>Project Beta</span>
                          <CustomBadge progress="partiallyComplete">In Progress</CustomBadge>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded">
                          <span>Project Gamma</span>
                          <CustomBadge progress="incomplete">Not Started</CustomBadge>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Badge Groups</h5>
                      <div className="space-y-3">
                        <div>
                          <strong className="text-sm">Technologies:</strong>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <CustomBadge variant="info" size="sm">React</CustomBadge>
                            <CustomBadge variant="purple" size="sm">TypeScript</CustomBadge>
                            <CustomBadge variant="success" size="sm">Node.js</CustomBadge>
                            <CustomBadge variant="warning" size="sm">MongoDB</CustomBadge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Guidelines</CardTitle>
                <CardDescription>
                  Ensuring badges are accessible to all users, including those using assistive technologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Screen Reader Support</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-3">ARIA Labels</h5>
                      <div className="space-y-3">
                        <div className="p-3 border rounded">
                          <CustomBadge variant="success" aria-label="Order status: completed">
                            Completed
                          </CustomBadge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {`aria-label="Order status: completed"`}
                          </p>
                        </div>
                        <div className="p-3 border rounded">
                          <CustomBadge variant="warning" icon={<AlertTriangle className="h-3 w-3" />} aria-label="Attention required">
                            Warning
                          </CustomBadge>
                          <p className="text-xs text-muted-foreground mt-1">
                            Icon badges need descriptive labels
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-3">Semantic Roles</h5>
                      <div className="space-y-3">
                        <div className="p-3 border rounded">
                          <CustomBadge variant="info">
                            Status Update
                          </CustomBadge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {`role="status"`} for status badges
                          </p>
                        </div>
                        <div className="p-3 border rounded">
                          <CustomBadge variant="default" onClick={() => {}} interactive>
                            Clickable
                          </CustomBadge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {`role="button"`} for interactive badges
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Color and Contrast</h4>
                  <div className="space-y-4">
                    <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Best Practices</h5>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Maintain 4.5:1 contrast ratio for text</li>
                        <li>• {"Don't"} rely solely on color for meaning</li>
                        <li>• Use icons or text to supplement color</li>
                        <li>• Test with color blindness simulators</li>
                        <li>• Provide alternative text for icon badges</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium">Examples with Good Contrast:</h5>
                      <div className="flex flex-wrap gap-2">
                        <CustomBadge variant="success" icon={<Check className="h-3 w-3" />}>Success</CustomBadge>
                        <CustomBadge variant="warning" icon={<AlertTriangle className="h-3 w-3" />}>Warning</CustomBadge>
                        <CustomBadge variant="error" icon={<X className="h-3 w-3" />}>Error</CustomBadge>
                        <CustomBadge variant="info" icon={<Info className="h-3 w-3" />}>Info</CustomBadge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Keyboard Navigation</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Interactive badges should be keyboard accessible:
                    </p>
                    <div className="flex gap-4">
                      <CustomBadge 
                        variant="info" 
                        interactive 
                        onClick={() => alert('Focused badge activated!')}
                        className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Tab to Focus
                      </CustomBadge>
                      <CustomBadge 
                        variant="warning" 
                        removable 
                        onRemove={() => alert('Removed via keyboard!')}
                      >
                        Removable
                      </CustomBadge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Use Tab to focus, Enter/Space to activate, and focus indicators are visible.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Implementation Guidelines</h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`<!-- Status badge with semantic role -->
<span role="status" aria-label="Order status: completed">
  <Badge variant="success">Completed</Badge>
</span>

<!-- Icon badge with accessible name -->
<Badge variant="warning" aria-label="Attention required">
  <AlertIcon />
  Warning
</Badge>

<!-- Interactive badge -->
<button
  type="button"
  className="badge"
  aria-label="Remove React tag"
  onClick={handleRemove}
>
  React <XIcon />
</button>

<!-- Notification badge -->
<div className="relative">
  <Bell />
  <span 
    className="notification-badge"
    aria-label="3 unread notifications"
  >
    3
  </span>
</div>`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* References Section */}
        <div className="mt-8">
          <ComponentReferences
            title="References & Further Reading"
            description="Essential references for badge component implementation and best practices from leading design systems."
            urls={badgeComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('visa.com')) return 'Visa Design System - Badge Accessibility'
              if (url.includes('shopify.com')) return 'Shopify Polaris - Badge Component'
              if (url.includes('gestalt.pinterest.systems')) return 'Pinterest Gestalt - Badge'
              if (url.includes('ebay.com')) return 'eBay Design System - Badge'
              if (url.includes('atlassian.design')) return 'Atlassian Design System - Badge'
              if (url.includes('adobe.com')) return 'Adobe Spectrum - Badge'
              return url
            }}
          />
        </div>
      </div>
    </div>
  )
} 