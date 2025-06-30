"use client"

import React, { useState } from "react"
import Image from "next/image"
import { User, Check, Star, Building2, Bot, Crown, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"

const avatarComponentsUrlReference = [
  "https://spectrum.adobe.com/page/avatar/",
  "https://atlassian.design/components/avatar/usage",
  "https://polaris-react.shopify.com/components/images-and-icons/avatar",
  "https://base.uber.com/6d2425e9f/p/572f13-avatar",
  "https://design.visa.com/components/avatar/accessibility/#best-practices",
  "https://wise.design/components/avatar"
]

// Avatar Component
interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  initials?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'circular' | 'rounded' | 'square'
  status?: 'online' | 'offline' | 'away' | 'busy' | 'none'
  interactive?: boolean
  selected?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  fallbackIcon?: React.ReactNode
  className?: string
  onClick?: () => void
  onError?: () => void
}

function Avatar({
  src,
  alt,
  name,
  initials,
  size = 'md',
  variant = 'circular',
  status = 'none',
  interactive = false,
  selected = false,
  disabled = false,
  icon,
  fallbackIcon = <User className="h-1/2 w-1/2" />,
  className = '',
  onClick,
  onError
}: AvatarProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg'
  }

  const variantClasses = {
    circular: 'rounded-full',
    rounded: 'rounded-md',
    square: 'rounded-none'
  }

  const statusClasses = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
    none: ''
  }

  const statusSizes = {
    xs: 'h-2 w-2',
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-3 w-3',
    xl: 'h-4 w-4'
  }

  const getInitials = () => {
    if (initials) return initials
    if (name) {
      return name
        .split(' ')
        .map(word => word.charAt(0))
        .slice(0, 2)
        .join('')
        .toUpperCase()
    }
    return ''
  }

  const handleImageError = () => {
    setImageError(true)
    onError?.()
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const avatarContent = () => {
    if (icon) {
      return <div className="flex items-center justify-center w-full h-full">{icon}</div>
    }

    if (src && !imageError) {
      return (
        <Image
          src={src}
          alt={alt || name || 'Avatar'}
          width={100}
          height={100}
          className={`w-full h-full object-cover ${variantClasses[variant]}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      )
    }

    const displayInitials = getInitials()
    if (displayInitials) {
      return (
        <span className="font-medium text-foreground select-none">
          {displayInitials}
        </span>
      )
    }

    return <div className="flex items-center justify-center w-full h-full text-muted-foreground">{fallbackIcon}</div>
  }

  const Component = interactive || onClick ? 'button' : 'div'

  return (
    <div className="relative inline-block">
      <Component
        className={`
          ${sizeClasses[size]} ${variantClasses[variant]}
          bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900
          border-2 border-transparent
          flex items-center justify-center overflow-hidden
          transition-all duration-200
          ${interactive ? 'hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2' : ''}
          ${selected ? 'ring-2 ring-primary ring-offset-2 bg-primary/10' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${onClick ? 'cursor-pointer' : ''}
          ${className}
        `}
        onClick={onClick}
        disabled={disabled}
        role={Component === 'button' ? 'button' : 'img'}
        aria-label={alt || name || 'Avatar'}
        tabIndex={interactive || onClick ? 0 : undefined}
      >
        {avatarContent()}
      </Component>

      {/* Status indicator */}
      {status !== 'none' && (
        <div 
          className={`
            absolute -bottom-0.5 -right-0.5 ${statusSizes[size]} ${statusClasses[status]}
            rounded-full border-2 border-background
          `}
          aria-label={`Status: ${status}`}
        />
      )}

      {/* Selected indicator */}
      {selected && !status && (
        <div className={`
          absolute -bottom-0.5 -right-0.5 ${statusSizes[size]}
          bg-primary rounded-full border-2 border-background
          flex items-center justify-center
        `}>
          <Check className="h-2 w-2 text-primary-foreground" />
        </div>
      )}
    </div>
  )
}

// Avatar Group Component
interface AvatarGroupProps {
  avatars: Array<Pick<AvatarProps, 'src' | 'name' | 'initials' | 'alt'>>
  max?: number
  size?: AvatarProps['size']
  variant?: AvatarProps['variant']
  className?: string
}

function AvatarGroup({ avatars, max = 3, size = 'md', variant = 'circular', className = '' }: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, max)
  const remainingCount = Math.max(0, avatars.length - max)

  const overlapClasses = {
    xs: '-ml-2',
    sm: '-ml-2',
    md: '-ml-3',
    lg: '-ml-3',
    xl: '-ml-4'
  }

  return (
    <div className={`flex items-center ${className}`} role="group" aria-label={`Avatar group of ${avatars.length} people`}>
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className={`relative ${index > 0 ? overlapClasses[size] : ''}`}
          style={{ zIndex: visibleAvatars.length - index }}
        >
          <Avatar
            {...avatar}
            size={size}
            variant={variant}
            className="ring-2 ring-background"
          />
        </div>
      ))}
      
      {remainingCount > 0 && (
        <div
          className={`${overlapClasses[size]} relative`}
          style={{ zIndex: 0 }}
        >
          <Avatar
            initials={`+${remainingCount}`}
            size={size}
            variant={variant}
            className="ring-2 ring-background bg-muted"
          />
        </div>
      )}
    </div>
  )
}

export default function AvatarPage() {
  const { MobileWarning } = useMobileWarning()
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null)

  const sampleAvatars = [
    { name: 'John Doe', initials: 'JD' },
    { name: 'Jane Smith', initials: 'JS' },
    { name: 'Alice Johnson', initials: 'AJ' },
    { name: 'Bob Wilson', initials: 'BW' },
    { name: 'Carol Brown', initials: 'CB' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-5xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Avatar</h2>
            <EditButton filePath="app/playground/avatar/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Avatars are visual representations of users, entities, or objects. They provide a quick way to identify 
            individuals and add personality to interfaces through images, initials, or icons.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Accessible</Badge>
            <Badge>Responsive</Badge>
            <Badge>Customizable</Badge>
            <Badge>Interactive</Badge>
            <Badge>Status Indicators</Badge>
          </div>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="sizes">Sizes</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Purpose and Usage</CardTitle>
                <CardDescription>
                  Understanding when and how to use avatars effectively in your interface.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Identity:</strong> Represent users, customers, or entities</li>
                      <li>• <strong>Recognition:</strong> Quick visual identification</li>
                      <li>• <strong>Personalization:</strong> Add human touch to interfaces</li>
                      <li>• <strong>Status:</strong> Show online/offline states</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Best Practices</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Always provide meaningful alt text</li>
                      <li>• Use consistent sizing within contexts</li>
                      <li>• Implement graceful fallbacks</li>
                      <li>• Consider cultural sensitivities</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Avatar Types</h4>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" name="Profile Avatar" />
                      <div>
                        <strong>Profile Avatar:</strong> User profile pictures
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Avatar name="John Doe" />
                      <div>
                        <strong>Initial Avatar:</strong> Text-based fallback using initials
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Avatar icon={<Building2 className="h-1/2 w-1/2" />} />
                      <div>
                        <strong>Icon Avatar:</strong> Symbolic representation
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Content Guidelines</CardTitle>
                <CardDescription>
                  Proper alt text and accessibility guidelines for avatar implementation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Alt Text Guidelines</h4>
                  <p className="text-sm text-muted-foreground">
                    Any time you use an image to communicate a concept, it&apos;s important to use descriptive alt text. 
                    This is essential for accessibility because it allows screen readers to describe what&apos;s in the image 
                    to people who may not be able to see it.
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">For avatars, we recommend using this format:</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>alt=&quot;Person&apos;s name&quot;</strong> if the avatar represents a person</li>
                        <li>• <strong>alt=&quot;Business&apos;s name&quot;</strong> if the avatar represents a business</li>
                        <li>• <strong>alt=&quot;&quot;</strong> if the name of the person/business appears next to the avatar as text</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-medium">Examples</h5>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <div className="flex items-center gap-3 mb-2">
                          <Avatar name="Sarah Johnson" alt="Sarah Johnson" />
                          <code className="text-xs">alt=&quot;Sarah Johnson&quot;</code>
                        </div>
                        <p className="text-xs text-green-700 dark:text-green-300">
                          Good: Person&apos;s name when used standalone
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <div className="flex items-center gap-3 mb-2">
                          <Avatar name="Acme Corp" alt="" />
                          <span className="text-sm">Acme Corporation</span>
                          <code className="text-xs">alt=&quot;&quot;</code>
                        </div>
                        <p className="text-xs text-green-700 dark:text-green-300">
                          Good: Empty alt when name appears as text
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sizes */}
          <TabsContent value="sizes" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Avatar Sizes</CardTitle>
                <CardDescription>
                  Different sizes for various use cases and layout requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Size Variants</h4>
                    <div className="flex items-end gap-6 p-6 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <Avatar size="xs" name="XS" />
                        <p className="text-xs mt-2">Extra Small<br/>24px</p>
                      </div>
                      <div className="text-center">
                        <Avatar size="sm" name="SM" />
                        <p className="text-xs mt-2">Small<br/>32px</p>
                      </div>
                      <div className="text-center">
                        <Avatar size="md" name="MD" />
                        <p className="text-xs mt-2">Medium<br/>40px</p>
                      </div>
                      <div className="text-center">
                        <Avatar size="lg" name="LG" />
                        <p className="text-xs mt-2">Large<br/>48px</p>
                      </div>
                      <div className="text-center">
                        <Avatar size="xl" name="XL" />
                        <p className="text-xs mt-2">Extra Large<br/>64px</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">When to Use Each Size</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <Avatar size="xs" name="XS" />
                          <span><strong>XS:</strong> Inline mentions, compact lists</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar size="sm" name="SM" />
                          <span><strong>SM:</strong> Navigation, small cards</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar size="md" name="MD" />
                          <span><strong>MD:</strong> Default size, general use</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar size="lg" name="LG" />
                          <span><strong>LG:</strong> User profiles, emphasis</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar size="xl" name="XL" />
                          <span><strong>XL:</strong> Hero sections, large profiles</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Context Examples</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                          <div className="flex items-center gap-2 mb-2">
                            <Avatar size="sm" name="JS" />
                            <span className="text-sm">Comment by John Smith</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Small avatars in comment threads</p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                          <div className="flex items-center gap-3 mb-2">
                            <Avatar size="lg" name="AD" />
                            <div>
                              <p className="font-medium">Alice Doe</p>
                              <p className="text-sm text-muted-foreground">Senior Designer</p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">Large avatars in profile cards</p>
                        </div>
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
                <CardTitle>Avatar Variants</CardTitle>
                <CardDescription>
                  Different shapes and styles for various design contexts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Shape Variants</h4>
                    <div className="flex items-center gap-6 p-6 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <Avatar variant="circular" name="JD" />
                        <p className="text-xs mt-2">Circular</p>
                      </div>
                      <div className="text-center">
                        <Avatar variant="rounded" name="JS" />
                        <p className="text-xs mt-2">Rounded</p>
                      </div>
                      <div className="text-center">
                        <Avatar variant="square" name="AJ" />
                        <p className="text-xs mt-2">Square</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Content Types</h4>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <Avatar 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                          name="Image Avatar" 
                        />
                        <div>
                          <strong>Image Avatar:</strong> Profile photos and pictures
                          <p className="text-sm text-muted-foreground">Best for personal identification</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <Avatar name="Initials Avatar" />
                        <div>
                          <strong>Initials Avatar:</strong> Generated from names
                          <p className="text-sm text-muted-foreground">Fallback when no image available</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <Avatar icon={<Bot className="h-1/2 w-1/2" />} />
                        <div>
                          <strong>Icon Avatar:</strong> Symbolic representations
                          <p className="text-sm text-muted-foreground">For bots, systems, or categories</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Special Types</h4>
                    <div className="flex items-center gap-6 p-6 bg-muted/50 rounded-lg">
                      <Avatar icon={<Building2 className="h-1/2 w-1/2" />} />
                      <Avatar icon={<Bot className="h-1/2 w-1/2 text-blue-600" />} />
                      <Avatar icon={<Crown className="h-1/2 w-1/2 text-yellow-600" />} />
                      <Avatar icon={<Star className="h-1/2 w-1/2 text-purple-600" />} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Organization, Bot, Admin, and Featured user avatars
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* States */}
          <TabsContent value="states" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Avatar States</CardTitle>
                <CardDescription>
                  Interactive states and status indicators for avatars.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Status Indicators</h4>
                    <div className="flex items-center gap-6 p-6 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <Avatar name="ON" status="online" />
                        <p className="text-xs mt-2">Online</p>
                      </div>
                      <div className="text-center">
                        <Avatar name="AW" status="away" />
                        <p className="text-xs mt-2">Away</p>
                      </div>
                      <div className="text-center">
                        <Avatar name="BS" status="busy" />
                        <p className="text-xs mt-2">Busy</p>
                      </div>
                      <div className="text-center">
                        <Avatar name="OF" status="offline" />
                        <p className="text-xs mt-2">Offline</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Interactive States</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <Avatar name="DF" />
                        <Avatar name="HV" interactive className="hover:scale-105" />
                        <Avatar name="SL" interactive selected />
                        <Avatar name="DS" disabled />
                        <div>
                          <p><strong>States:</strong> Default, Hover, Selected, Disabled</p>
                          <p className="text-sm text-muted-foreground">Interactive avatars respond to user actions</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Selectable Avatars</h4>
                    <div className="grid grid-cols-5 gap-4 p-6 bg-muted/50 rounded-lg">
                      {['Travel', 'Food', 'Work', 'Health', 'Fun'].map((category) => (
                        <div key={category} className="text-center">
                          <Avatar
                            name={category.slice(0, 2)}
                            interactive
                            selected={selectedAvatar === category}
                            onClick={() => setSelectedAvatar(selectedAvatar === category ? null : category)}
                            className="cursor-pointer"
                          />
                          <p className="text-xs mt-2">{category}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Click avatars to select/deselect categories
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Loading and Error States</h4>
                    <div className="flex items-center gap-6 p-6 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <Avatar src="invalid-url" name="Error" />
                        <p className="text-xs mt-2">Fallback</p>
                      </div>
                      <div className="text-center">
                        <Avatar name="" />
                        <p className="text-xs mt-2">No Name</p>
                      </div>
                      <div className="text-center">
                        <Avatar name="Loading" className="animate-pulse" />
                        <p className="text-xs mt-2">Loading</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Groups */}
          <TabsContent value="groups" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Avatar Groups</CardTitle>
                <CardDescription>
                  Displaying multiple avatars together to represent teams or collections.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Basic Avatar Group</h4>
                    <div className="space-y-4">
                      <AvatarGroup avatars={sampleAvatars.slice(0, 3)} />
                      <p className="text-sm text-muted-foreground">
                        Simple group of 3 team members
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Group with Overflow</h4>
                    <div className="space-y-4">
                      <AvatarGroup avatars={sampleAvatars} max={4} />
                      <p className="text-sm text-muted-foreground">
                        Shows first 4 avatars with +1 indicator for remaining
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Different Sizes</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-6">
                        <AvatarGroup avatars={sampleAvatars.slice(0, 3)} size="sm" />
                        <span className="text-sm">Small</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <AvatarGroup avatars={sampleAvatars.slice(0, 3)} size="md" />
                        <span className="text-sm">Medium</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <AvatarGroup avatars={sampleAvatars.slice(0, 3)} size="lg" />
                        <span className="text-sm">Large</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Use Cases</h4>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <AvatarGroup avatars={sampleAvatars.slice(0, 2)} size="sm" />
                        <div>
                          <strong>Project Collaborators</strong>
                          <p className="text-sm text-muted-foreground">Show who&apos;s working on a project</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <AvatarGroup avatars={sampleAvatars} max={3} size="md" />
                        <div>
                          <strong>Meeting Attendees</strong>
                          <p className="text-sm text-muted-foreground">Display participants in a meeting</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <AvatarGroup avatars={sampleAvatars.slice(0, 4)} size="xs" />
                        <div>
                          <strong>File Shared With</strong>
                          <p className="text-sm text-muted-foreground">Compact view for sharing indicators</p>
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
                <CardTitle>Accessibility</CardTitle>
                <CardDescription>
                  Ensuring avatars are accessible to all users, including those using assistive technologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Guidelines</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Alt Text:</strong> Provide meaningful descriptions</li>
                      <li>• <strong>Role:</strong> Use role=&quot;img&quot; for decorative avatars</li>
                      <li>• <strong>Labels:</strong> Include aria-label for screen readers</li>
                      <li>• <strong>Focus:</strong> Ensure keyboard accessibility</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Best Practices</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Never use avatars without context</li>
                      <li>• Provide fallbacks for failed image loads</li>
                      <li>• Use sufficient color contrast</li>
                      <li>• Support keyboard navigation</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Implementation Examples</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-800 dark:text-green-200">Good Example</span>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar name="Sarah Connor" alt="Sarah Connor, Project Manager" />
                        <span className="text-sm">Sarah Connor</span>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Avatar with proper alt text and visible name context
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <X className="h-5 w-5 text-red-600" />
                        <span className="font-medium text-red-800 dark:text-red-200">Poor Example</span>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar name="SC" />
                      </div>
                      <p className="text-sm text-red-700 dark:text-red-300">
                        Avatar without context or meaningful alt text
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-medium">Status Indicators</h5>
                    <div className="flex items-center gap-6 p-4 border rounded-lg">
                      <Avatar name="Alex" status="online" />
                      <div className="text-sm">
                        <p><strong>Alex Johnson</strong></p>
                        <p className="text-green-600">● Online</p>
                        <p className="text-muted-foreground">Status is communicated both visually and textually</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-medium">Keyboard Navigation</h5>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Avatar 
                        name="Interactive" 
                        interactive 
                        onClick={() => alert('Avatar clicked!')}
                        className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                      <div className="text-sm">
                        <p><strong>Interactive Avatar</strong></p>
                        <p className="text-muted-foreground">Focusable with Tab key, activatable with Enter/Space</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Accessibility Checklist</h5>
                  <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                    <li>✓ Meaningful alt text for all avatar images</li>
                    <li>✓ Proper ARIA labels and roles</li>
                    <li>✓ Keyboard navigation support</li>
                    <li>✓ Sufficient color contrast (4.5:1 minimum)</li>
                    <li>✓ Focus indicators for interactive avatars</li>
                    <li>✓ Screen reader friendly status indicators</li>
                    <li>✓ Fallback content for failed image loads</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

        {/* Component References */}
        <div className="mt-12">
          <ComponentReferences
            title="References & Further Reading"
            description="Essential references for avatar component implementation and best practices from leading design systems."
            urls={avatarComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Avatar Component'
              if (url.includes('atlassian.design')) return 'Atlassian Design - Avatar Usage'
              if (url.includes('polaris-react.shopify.com')) return 'Shopify Polaris - Avatar Component'
              if (url.includes('base.uber.com')) return 'Uber Base Design - Avatar'
              if (url.includes('design.visa.com')) return 'Visa Design - Avatar Accessibility'
              if (url.includes('wise.design')) return 'Wise Design - Avatar Component'
              if (url.includes('w3.org')) return 'WAI-ARIA Authoring Practices - Image Pattern'
              return url
            }}
          />
        </div>
      </div>
    </div>
  )
} 