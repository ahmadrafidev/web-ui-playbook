"use client"

import React, { useState } from "react"
import { X, AlertTriangle, Info, XCircle, Settings, Code2, Eye, Zap, CheckCircle, HelpCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"

const modalComponentsUrlReference = [
  "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
  "https://spectrum.adobe.com/page/alert-dialog/",
  "https://design.gitlab.com/components/modal/",
  "https://carbondesignsystem.com/components/modal/usage/",
  "https://gestalt.pinterest.systems/web/modal",
  "https://polaris-react.shopify.com/components/deprecated/modal",
  "https://base.uber.com/6d2425e9f/p/81b842-modal-full-screen"
]

// Modal Component
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'full'
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  className?: string
}

function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = ''
}: ModalProps) {
  const sizeClasses = {
    small: 'max-w-sm',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
    full: 'max-w-4xl'
  }

  // Handle escape key
  React.useEffect(() => {
    if (!isOpen || !closeOnEscape) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEscape, onClose])

  // Focus management
  React.useEffect(() => {
    if (!isOpen) return

    const modalElement = document.querySelector('[role="dialog"]') as HTMLElement
    if (modalElement) {
      const titleElement = modalElement.querySelector('h2')
      if (titleElement) {
        titleElement.focus()
      }
    }

    // Trap focus within modal
    const focusableElements = modalElement?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements?.[0] as HTMLElement
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-200"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className={`
            bg-background border rounded-lg shadow-2xl w-full ${sizeClasses[size]} 
            transform transition-all duration-200 scale-100 opacity-100
            max-h-[90vh] flex flex-col
            ${className}
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b flex-shrink-0">
            <h2 
              id="modal-title" 
              className="text-lg font-semibold text-foreground"
              tabIndex={-1}
            >
              {title}
            </h2>
            {showCloseButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-6 w-6 p-0 hover:bg-accent"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          {/* Content */}
          <div className="p-6 overflow-y-auto flex-1">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

// Alert Dialog Component
interface AlertDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmText?: string
  cancelText?: string
  variant?: 'destructive' | 'warning' | 'info' | 'success'
}

function AlertDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'info'
}: AlertDialogProps) {
  const icons = {
    destructive: <XCircle className="h-6 w-6 text-red-600" />,
    warning: <AlertTriangle className="h-6 w-6 text-amber-600" />,
    info: <Info className="h-6 w-6 text-blue-600" />,
    success: <CheckCircle className="h-6 w-6 text-green-600" />
  }

  const buttonVariants = {
    destructive: 'destructive' as const,
    warning: 'default' as const,
    info: 'default' as const,
    success: 'default' as const
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      size="small"
      showCloseButton={false}
      closeOnOverlayClick={false}
    >
      <div className="text-center">
        <div className="flex justify-center mb-4">
          {icons[variant]}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={onClose}>
            {cancelText}
          </Button>
          <Button variant={buttonVariants[variant]} onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

// Confirmation Dialog
interface ConfirmationDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmText?: string
  cancelText?: string
}

function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel'
}: ConfirmationDialogProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="small"
      closeOnOverlayClick={false}
    >
      <div className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            {cancelText}
          </Button>
          <Button onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default function ModalPage() {
  const { MobileWarning } = useMobileWarning()
  
  // Modal states
  const [basicModalOpen, setBasicModalOpen] = useState(false)
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [alertModalOpen, setAlertModalOpen] = useState(false)
  const [destructiveModalOpen, setDestructiveModalOpen] = useState(false)
  const [warningModalOpen, setWarningModalOpen] = useState(false)
  const [successModalOpen, setSuccessModalOpen] = useState(false)
  const [scrollModalOpen, setScrollModalOpen] = useState(false)
  const [nestedModalOpen, setNestedModalOpen] = useState(false)
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false)
  const [fullSizeModalOpen, setFullSizeModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Modal</h1>
              <p className="text-lg text-muted-foreground">
                Overlay dialogs that focus attention and require user interaction.
              </p>
            </div>
            <EditButton filePath="app/playground/modal/page.tsx" />
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="implementation">Code</TabsTrigger>
            <TabsTrigger value="accessibility">A11y</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Purpose of Modals</CardTitle>
                <CardDescription>
                  Understanding the core purpose and benefits of modal dialogs in user interfaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Focus Attention</h4>
                    <p className="text-sm text-muted-foreground">
                      Direct user focus to critical information, decisions, or actions that require immediate attention.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Interrupt Workflow</h4>
                    <p className="text-sm text-muted-foreground">
                      Pause the current user flow to handle important tasks, confirmations, or collect input.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Preserve Context</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintain the underlying page context while handling secondary tasks or displaying information.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Core Functions</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Confirm Actions:</strong>
                          <p className="text-xs text-muted-foreground">Get explicit user confirmation before destructive or important actions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Collect Input:</strong>
                          <p className="text-xs text-muted-foreground">Gather information through forms without leaving the current context</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Display Details:</strong>
                          <p className="text-xs text-muted-foreground">Show additional information, media, or content without navigation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Alert Users:</strong>
                          <p className="text-xs text-muted-foreground">Communicate critical information, errors, or system status updates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">When to Use Modals</CardTitle>
                <CardDescription>
                  Understanding the appropriate contexts for modal dialogs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <strong className="text-green-800 dark:text-green-200">Use Modals When:</strong>
                      </div>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Requiring immediate user attention</li>
                        <li>• Confirming destructive actions</li>
                        <li>• Collecting focused input</li>
                        <li>• Displaying critical alerts</li>
                        <li>• Showing contextual help or details</li>
                        <li>• Creating/editing items inline</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <strong className="text-red-800 dark:text-red-200">Avoid Modals When:</strong>
                      </div>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Displaying lengthy content</li>
                        <li>• For primary navigation</li>
                        <li>• Complex multi-step workflows</li>
                        <li>• Non-critical information</li>
                        <li>• Frequent repetitive actions</li>
                        <li>• Mobile-heavy interfaces</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Modal vs Alternatives</h4>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Modal vs Drawer/Sidebar:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use modals for focused, immediate decisions. Use drawers for secondary content, 
                          settings, or when users need to reference main content.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Modal vs Page Navigation:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use modals for quick tasks that don't warrant full page navigation. 
                          Use pages for complex workflows or primary content.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Modal vs Tooltip/Popover:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use modals for actions requiring user response. Use tooltips/popovers 
                          for supplementary information or simple controls.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Design Principles</CardTitle>
                <CardDescription>
                  Core principles for effective modal design and user experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-base">User Experience</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Clear Purpose:</strong> Make the modal's intent immediately obvious</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Focused Content:</strong> Include only essential information and actions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Easy Exit:</strong> Provide clear, accessible ways to close</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Quick Completion:</strong> Design for efficiency and speed</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-base">Technical Implementation</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Focus Management:</strong> Proper focus trapping and restoration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Keyboard Support:</strong> Full keyboard navigation support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Screen Readers:</strong> Proper ARIA attributes and announcements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Responsive Design:</strong> Adapts to all screen sizes gracefully</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Modal Types */}
          <TabsContent value="types" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Modal Types & Variants</CardTitle>
                <CardDescription>
                  Different modal types for various contexts and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Info className="h-5 w-5 text-blue-600" />
                        <strong className="text-sm">Information</strong>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        Display details, help content, or additional information
                      </p>
                      <Button size="sm" variant="outline" onClick={() => setBasicModalOpen(true)}>
                        View Example
                      </Button>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Settings className="h-5 w-5 text-gray-600" />
                        <strong className="text-sm">Form</strong>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        Collect user input, create items, or configure settings
                      </p>
                      <Button size="sm" variant="outline" onClick={() => setFormModalOpen(true)}>
                        View Example
                      </Button>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                        <strong className="text-sm">Alert</strong>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        Communicate important information or warnings
                      </p>
                      <Button size="sm" variant="outline" onClick={() => setWarningModalOpen(true)}>
                        View Example
                      </Button>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <HelpCircle className="h-5 w-5 text-purple-600" />
                        <strong className="text-sm">Confirmation</strong>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        Get user confirmation before critical actions
                      </p>
                      <Button size="sm" variant="outline" onClick={() => setConfirmationModalOpen(true)}>
                        View Example
                      </Button>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Modal Sizes</h4>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <strong className="text-sm">Small (384px)</strong>
                          <p className="text-xs text-muted-foreground">Confirmations, alerts, simple forms</p>
                        </div>
                        <Button size="sm" onClick={() => setAlertModalOpen(true)}>
                          Demo Small
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <strong className="text-sm">Medium (512px)</strong>
                          <p className="text-xs text-muted-foreground">Standard forms, moderate content (default)</p>
                        </div>
                        <Button size="sm" onClick={() => setFormModalOpen(true)}>
                          Demo Medium
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <strong className="text-sm">Large (672px)</strong>
                          <p className="text-xs text-muted-foreground">Complex forms, tables, detailed content</p>
                        </div>
                        <Button size="sm" onClick={() => setSettingsModalOpen(true)}>
                          Demo Large
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <strong className="text-sm">Full (896px)</strong>
                          <p className="text-xs text-muted-foreground">Rich content, dashboards, complex workflows</p>
                        </div>
                        <Button size="sm" onClick={() => setFullSizeModalOpen(true)}>
                          Demo Full
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples */}
          <TabsContent value="examples" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Interactive Examples</CardTitle>
                <CardDescription>
                  Explore different modal implementations and behaviors.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Basic Modal Types</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Information Modal</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Display additional details without navigation.
                        </p>
                        <Button onClick={() => setBasicModalOpen(true)}>
                          Open Info Modal
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Form Modal</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Collect user input in a focused interface.
                        </p>
                        <Button onClick={() => setFormModalOpen(true)}>
                          Open Form Modal
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Settings Modal</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Configure options and preferences.
                        </p>
                        <Button onClick={() => setSettingsModalOpen(true)}>
                          Open Settings
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Scrolling Content</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Handle longer content with proper scrolling.
                        </p>
                        <Button onClick={() => setScrollModalOpen(true)}>
                          Open Scrolling Modal
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Alert Dialogs</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 border rounded-lg text-center">
                        <Info className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h5 className="font-medium mb-2">Information</h5>
                        <Button size="sm" onClick={() => setAlertModalOpen(true)}>
                          Show Info
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg text-center">
                        <AlertTriangle className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                        <h5 className="font-medium mb-2">Warning</h5>
                        <Button size="sm" onClick={() => setWarningModalOpen(true)}>
                          Show Warning
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg text-center">
                        <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                        <h5 className="font-medium mb-2">Destructive</h5>
                        <Button size="sm" onClick={() => setDestructiveModalOpen(true)}>
                          Show Error
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg text-center">
                        <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h5 className="font-medium mb-2">Success</h5>
                        <Button size="sm" onClick={() => setSuccessModalOpen(true)}>
                          Show Success
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Advanced Behaviors</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Nested Modal</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Demonstrates proper focus management with nested modals.
                        </p>
                        <Button onClick={() => setNestedModalOpen(true)}>
                          Open Nested Example
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Confirmation Dialog</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Standard confirmation pattern for user actions.
                        </p>
                        <Button onClick={() => setConfirmationModalOpen(true)}>
                          Show Confirmation
                        </Button>
                      </div>
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
                <CardTitle className="text-xl font-bold">Modal Design Patterns</CardTitle>
                <CardDescription>
                  Best practices for modal behavior, interaction, and user experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Opening Patterns</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Primary Actions:</strong> Main action buttons (Create, Edit, Settings)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Contextual Links:</strong> Help icons, info buttons, "Learn more" links
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>System Triggered:</strong> Error states, warnings, onboarding flows
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Context Menus:</strong> Right-click actions, overflow menu items
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Closing Patterns</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Close Button:</strong> Always visible X button in header
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Action Completion:</strong> After successful save/submit
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Cancel Button:</strong> Explicit cancel action in content
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Escape Key:</strong> Keyboard shortcut (when safe)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Backdrop Click:</strong> Click outside (when safe)
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Content Organization</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Header Structure</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Clear, descriptive title</li>
                        <li>• Close button aligned to right</li>
                        <li>• Optional subtitle or context</li>
                        <li>• Consistent height and spacing</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Body Content</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Focused, scannable content</li>
                        <li>• Logical reading order</li>
                        <li>• Proper spacing and hierarchy</li>
                        <li>• Scrollable when needed</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Footer Actions</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Primary action on right</li>
                        <li>• Secondary/cancel on left</li>
                        <li>• Consistent button sizing</li>
                        <li>• Clear action hierarchy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Animation & Motion Design</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Entry Animations</h5>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Fade In:</strong> Backdrop opacity 0 → 50% (200ms)</li>
                        <li>• <strong>Scale Up:</strong> Modal scale 95% → 100% (200ms)</li>
                        <li>• <strong>Slide In:</strong> From center for focus (150ms)</li>
                        <li>• <strong>Easing:</strong> ease-out for natural feel</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Exit Animations</h5>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Fade Out:</strong> Backdrop opacity 50% → 0 (150ms)</li>
                        <li>• <strong>Scale Down:</strong> Modal scale 100% → 98% (150ms)</li>
                        <li>• <strong>Quick Exit:</strong> Faster than entry for responsiveness</li>
                        <li>• <strong>Easing:</strong> ease-in for departure</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Timing Guidelines</h5>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Duration:</strong> 150-250ms for modal transitions</li>
                        <li>• <strong>Stagger:</strong> Backdrop first, then modal content</li>
                        <li>• <strong>Performance:</strong> Use transform over layout properties</li>
                        <li>• <strong>Reduced Motion:</strong> Respect user preferences</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">CSS Implementation</h5>
                      <div className="text-xs bg-muted p-2 rounded font-mono">
                        <div>transition: all 200ms ease-out;</div>
                        <div>transform: scale(0.95);</div>
                        <div>opacity: 0;</div>
                        <div className="mt-1 text-green-600">/* Open state */</div>
                        <div>transform: scale(1);</div>
                        <div>opacity: 1;</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Mobile Considerations</h4>
                  <div className="p-4 border rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Touch Targets:</strong> Minimum 44px for touch interactions</li>
                      <li>• <strong>Full Width:</strong> Use most available screen width</li>
                      <li>• <strong>Keyboard Aware:</strong> Adjust for virtual keyboard</li>
                      <li>• <strong>Swipe Gestures:</strong> Consider swipe-to-dismiss patterns</li>
                      <li>• <strong>Bottom Sheets:</strong> Alternative pattern for mobile</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Implementation */}
          <TabsContent value="implementation" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Implementation Guide</CardTitle>
                <CardDescription>
                  Code examples and technical implementation details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    Basic Modal Component
                  </h4>
                  <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    <pre>{`interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true
}: ModalProps) {
  // Focus management and keyboard handling
  useEffect(() => {
    if (!isOpen) return
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEscape, onClose])

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className={\`bg-white rounded-lg shadow-xl w-full \${sizeClasses[size]}\`}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <h2 id="modal-title">{title}</h2>
            {showCloseButton && (
              <button onClick={onClose} aria-label="Close modal">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </>
  )
}`}</pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Essential Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Focus Management</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Focus trapping within modal</li>
                        <li>• Return focus to trigger element</li>
                        <li>• Initial focus on title or first input</li>
                        <li>• Tab cycling within modal bounds</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">ARIA Attributes</h5>
                      <ul className="text-sm space-y-1">
                        <li>• <code>role="dialog"</code> on container</li>
                        <li>• <code>aria-modal="true"</code></li>
                        <li>• <code>aria-labelledby</code> for title</li>
                        <li>• <code>aria-describedby</code> for description</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Keyboard Support</h5>
                      <ul className="text-sm space-y-1">
                        <li>• <kbd>Escape</kbd> to close (when safe)</li>
                        <li>• <kbd>Tab</kbd> for navigation</li>
                        <li>• <kbd>Enter</kbd> for primary action</li>
                        <li>• Focus indicators visible</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Visual Design</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Semi-transparent backdrop</li>
                        <li>• Smooth enter/exit animations</li>
                        <li>• Consistent spacing and typography</li>
                        <li>• High contrast for readability</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Usage Examples</h4>
                  <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    <pre>{`// Basic information modal
<Modal
  isOpen={showInfo}
  onClose={() => setShowInfo(false)}
  title="User Details"
  size="medium"
>
  <UserProfile user={selectedUser} />
</Modal>

// Confirmation dialog
<Modal
  isOpen={showConfirm}
  onClose={() => setShowConfirm(false)}
  title="Confirm Deletion"
  size="small"
  closeOnOverlayClick={false}
>
  <div className="text-center">
    <p>Are you sure you want to delete this item?</p>
    <div className="flex gap-2 justify-center mt-4">
      <Button variant="outline" onClick={() => setShowConfirm(false)}>
        Cancel
      </Button>
      <Button variant="destructive" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  </div>
</Modal>`}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Accessibility Requirements</CardTitle>
                <CardDescription>
                  WCAG compliance and accessibility best practices for modal dialogs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">ARIA Requirements</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded">
                        <code className="text-sm bg-muted px-2 py-1 rounded">role="dialog"</code>
                        <p className="text-sm text-muted-foreground mt-1">
                          Identifies the element as a dialog container
                        </p>
                      </div>
                      <div className="p-3 border rounded">
                        <code className="text-sm bg-muted px-2 py-1 rounded">aria-modal="true"</code>
                        <p className="text-sm text-muted-foreground mt-1">
                          Indicates the dialog is modal and blocks interaction with other content
                        </p>
                      </div>
                      <div className="p-3 border rounded">
                        <code className="text-sm bg-muted px-2 py-1 rounded">aria-labelledby</code>
                        <p className="text-sm text-muted-foreground mt-1">
                          References the dialog title for screen readers
                        </p>
                      </div>
                      <div className="p-3 border rounded">
                        <code className="text-sm bg-muted px-2 py-1 rounded">aria-describedby</code>
                        <p className="text-sm text-muted-foreground mt-1">
                          References additional descriptive content (optional)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Focus Management</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Initial Focus:</strong> Move focus to modal title or first interactive element
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Focus Trap:</strong> Keep focus within modal boundaries using Tab and Shift+Tab
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Focus Return:</strong> Return focus to triggering element when modal closes
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Visible Indicators:</strong> Ensure focus indicators are clearly visible
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Keyboard Navigation</h4>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted px-4 py-2 border-b">
                      <strong className="text-sm">Keyboard Shortcuts</strong>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <kbd className="bg-muted px-3 py-1 rounded text-sm">Escape</kbd>
                        <span className="text-sm">Close modal (when safe to do so)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <kbd className="bg-muted px-3 py-1 rounded text-sm">Tab</kbd>
                        <span className="text-sm">Move to next focusable element</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <kbd className="bg-muted px-3 py-1 rounded text-sm">Shift + Tab</kbd>
                        <span className="text-sm">Move to previous focusable element</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <kbd className="bg-muted px-3 py-1 rounded text-sm">Enter</kbd>
                        <span className="text-sm">Activate focused button or submit form</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <kbd className="bg-muted px-3 py-1 rounded text-sm">Space</kbd>
                        <span className="text-sm">Activate focused button or checkbox</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Screen Reader Support</h4>
                  <div className="grid gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <strong className="text-blue-800 dark:text-blue-200">Announcements</strong>
                      <ul className="text-sm mt-2 text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Modal opening is announced to screen readers</li>
                        <li>• Dialog role and title are communicated</li>
                        <li>• Form errors and validation messages are announced</li>
                        <li>• Success and completion messages are communicated</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <strong className="text-green-800 dark:text-green-200">Content Structure</strong>
                      <ul className="text-sm mt-2 text-green-700 dark:text-green-300 space-y-1">
                        <li>• Proper heading hierarchy within modal</li>
                        <li>• Form labels properly associated with inputs</li>
                        <li>• Button purposes clearly described</li>
                        <li>• Error messages linked to relevant fields</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Testing Checklist</h4>
                  <div className="p-4 border rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>Navigate entire modal using only keyboard</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>Test with screen reader (NVDA, JAWS, VoiceOver)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>Verify focus indicators are visible</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>Confirm focus returns to trigger element</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>Test color contrast meets WCAG standards</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>Verify modal works without mouse</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <Button onClick={() => setFormModalOpen(true)} className="mr-4">
                    Test Modal Accessibility
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Try navigating this modal with keyboard only and screen reader
                  </span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Component References */}
        <div className="mt-6">
          <ComponentReferences
            title="References & Resources"
            description="Comprehensive resources for modal implementation, accessibility guidelines, and design patterns."
            urls={modalComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('w3.org')) return 'W3C WAI-ARIA Dialog (Modal) Pattern'
              if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Alert Dialog'
              if (url.includes('design.gitlab.com')) return 'GitLab Pajamas - Modal'
              if (url.includes('carbondesignsystem.com')) return 'Carbon Design System - Modal'
              if (url.includes('gestalt.pinterest.systems')) return 'Pinterest Gestalt - Modal'
              if (url.includes('polaris-react.shopify.com')) return 'Shopify Polaris - Modal'
              if (url.includes('base.uber.com')) return 'Uber Base - Modal Full Screen'
              return url
            }}
          />
        </div>

        {/* Modal Examples */}
        
        {/* Basic Modal */}
        <Modal
          isOpen={basicModalOpen}
          onClose={() => setBasicModalOpen(false)}
          title="Product Information"
          size="medium"
        >
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Premium Wireless Headphones</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  High-quality wireless headphones with active noise cancellation, 
                  premium sound quality, and long-lasting battery life.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-medium">$299.99</span>
                  <span className="text-green-600">In Stock</span>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Features</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Active noise cancellation technology</li>
                <li>• 30-hour battery life with quick charge</li>
                <li>• Premium leather ear cushions</li>
                <li>• Bluetooth 5.0 connectivity</li>
              </ul>
            </div>
            
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setBasicModalOpen(false)}>
                Close
              </Button>
              <Button onClick={() => setNestedModalOpen(true)}>
                Add to Cart
              </Button>
            </div>
          </div>
        </Modal>

        {/* Form Modal */}
        <Modal
          isOpen={formModalOpen}
          onClose={() => setFormModalOpen(false)}
          title="Create New Project"
          size="medium"
        >
          <div className="space-y-6">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name *</Label>
                <Input 
                  id="project-name" 
                  placeholder="e.g., Mobile App Redesign"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="project-description">Description</Label>
                <Textarea 
                  id="project-description"
                  placeholder="Brief description of the project goals and scope..."
                  rows={3}
                  className="w-full"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type</Label>
                  <select 
                    id="project-type"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                  >
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>Desktop Application</option>
                    <option>API Service</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <select 
                    id="priority"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="due-date">Due Date</Label>
                <Input 
                  id="due-date" 
                  type="date"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="outline" onClick={() => setFormModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setFormModalOpen(false)}>
                Create Project
              </Button>
            </div>
          </div>
        </Modal>

        {/* Settings Modal */}
        <Modal
          isOpen={settingsModalOpen}
          onClose={() => setSettingsModalOpen(false)}
          title="Account Settings"
          size="large"
        >
          <div className="space-y-6">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="space-y-4 mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself..." rows={3} />
                </div>
              </TabsContent>
              
              <TabsContent value="preferences" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
                    </div>
                    <input id="notifications" type="checkbox" className="h-4 w-4" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing">Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">Receive promotional emails and product updates</p>
                    </div>
                    <input id="marketing" type="checkbox" className="h-4 w-4" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select id="timezone" className="w-full px-3 py-2 border rounded-md">
                      <option>Pacific Standard Time (PST)</option>
                      <option>Eastern Standard Time (EST)</option>
                      <option>Central European Time (CET)</option>
                    </select>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                    <Button size="sm" variant="outline">Enable</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end gap-3 pt-6 border-t">
              <Button variant="outline" onClick={() => setSettingsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setSettingsModalOpen(false)}>
                Save Changes
              </Button>
            </div>
          </div>
        </Modal>

        {/* Full Size Modal */}
        <Modal
          isOpen={fullSizeModalOpen}
          onClose={() => setFullSizeModalOpen(false)}
          title="Project Dashboard"
          size="full"
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Active Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-sm text-muted-foreground">+3 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-sm text-muted-foreground">+12 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Team Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-sm text-muted-foreground">2 new this month</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Task "User Authentication" completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm">New team member added: Sarah Johnson</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-sm">Deployment scheduled for Friday</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">API Documentation</span>
                    <span className="text-xs text-muted-foreground">2 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Design Review</span>
                    <span className="text-xs text-muted-foreground">5 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Beta Release</span>
                    <span className="text-xs text-muted-foreground">1 week</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-end gap-3 pt-6 border-t">
              <Button variant="outline" onClick={() => setFullSizeModalOpen(false)}>
                Close
              </Button>
              <Button>Export Data</Button>
            </div>
          </div>
        </Modal>

        {/* Scrolling Content Modal */}
        <Modal
          isOpen={scrollModalOpen}
          onClose={() => setScrollModalOpen(false)}
          title="Privacy Policy & Terms"
          size="large"
        >
          <div className="space-y-6">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h3>1. Introduction & Acceptance</h3>
              <p>
                Welcome to our comprehensive service platform. These terms and conditions, 
                along with our privacy policy, constitute a legally binding agreement between 
                you and our company. By accessing, browsing, or using our website or services, 
                you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
              
              <h3>2. User Account Management</h3>
              <p>
                When creating an account with our service, you must provide accurate, complete, 
                and current information. You are solely responsible for maintaining the 
                confidentiality of your account credentials and for all activities that occur 
                under your account. You must immediately notify us of any unauthorized use of 
                your account or any other security breach.
              </p>
              
              <h3>3. Data Privacy & Protection</h3>
              <p>
                Your privacy is of paramount importance to us. We collect, process, and store 
                your personal information in accordance with applicable data protection laws, 
                including GDPR and CCPA. Our detailed Privacy Policy explains what information 
                we collect, how we use it, and your rights regarding your personal data.
              </p>
              
              <h3>4. Service Usage Guidelines</h3>
              <p>
                Our platform is designed to facilitate productive collaboration and content creation. 
                Users are expected to engage respectfully and constructively with our community. 
                Content that violates our community guidelines, including harassment, spam, or 
                inappropriate material, may be removed without notice.
              </p>
              
              <h3>5. Intellectual Property Rights</h3>
              <p>
                All content, features, and functionality of our service, including but not limited 
                to text, graphics, logos, images, and software, are owned by our company or our 
                licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3>6. Payment & Subscription Terms</h3>
              <p>
                Subscription fees are billed in advance on a monthly or annual basis, depending on 
                the plan you select. All fees are non-refundable except as required by law. We 
                reserve the right to modify our pricing with 30 days advance notice to existing subscribers.
              </p>
              
              <h3>7. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, our company, its directors, employees, 
                partners, agents, suppliers, or affiliates shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including loss of profits, 
                data, use, goodwill, or other intangible losses.
              </p>
              
              <h3>8. Termination & Account Suspension</h3>
              <p>
                We reserve the right to terminate or suspend your account and access to our services 
                immediately, without prior notice or liability, for any reason, including if you 
                breach these terms or engage in conduct that we determine to be harmful to our 
                platform or other users.
              </p>
              
              <h3>9. Changes to Terms</h3>
              <p>
                We reserve the right to modify or replace these terms at any time at our sole discretion. 
                If a revision is material, we will provide at least 30 days notice before any new terms 
                take effect. Your continued use of our service after such changes constitutes acceptance 
                of the new terms.
              </p>
              
              <h3>10. Contact & Legal Information</h3>
              <p>
                If you have questions about these terms or our services, please contact our support 
                team. These terms are governed by and construed in accordance with the laws of our 
                jurisdiction, and any disputes will be resolved through binding arbitration.
              </p>
            </div>
            
            <div className="flex justify-end gap-3 pt-6 border-t">
              <Button variant="outline" onClick={() => setScrollModalOpen(false)}>
                Decline
              </Button>
              <Button onClick={() => setScrollModalOpen(false)}>
                Accept & Continue
              </Button>
            </div>
          </div>
        </Modal>

        {/* Nested Modal */}
        <Modal
          isOpen={nestedModalOpen}
          onClose={() => setNestedModalOpen(false)}
          title="Confirm Add to Cart"
          size="small"
        >
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Are you sure you want to add this item to your cart?
            </p>
            <div className="p-3 bg-muted rounded border">
              <div className="text-sm font-medium">Premium Wireless Headphones</div>
              <div className="text-sm text-muted-foreground">Price: $299.99</div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setNestedModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                setNestedModalOpen(false)
                setSuccessModalOpen(true)
              }}>
                Add to Cart
              </Button>
            </div>
          </div>
        </Modal>

        {/* Confirmation Modal */}
        <ConfirmationDialog
          isOpen={confirmationModalOpen}
          onClose={() => setConfirmationModalOpen(false)}
          onConfirm={() => {
            setConfirmationModalOpen(false)
            // Handle confirmation logic
          }}
          title="Confirm Action"
          description="This action will update your profile settings and send a confirmation email to your registered address."
          confirmText="Proceed"
          cancelText="Cancel"
        />

        {/* Alert Dialogs */}
        <AlertDialog
          isOpen={alertModalOpen}
          onClose={() => setAlertModalOpen(false)}
          onConfirm={() => setAlertModalOpen(false)}
          title="Information"
          description="Your changes have been saved successfully. You can continue working or close this dialog."
          confirmText="Continue"
          cancelText="Close"
          variant="info"
        />

        <AlertDialog
          isOpen={warningModalOpen}
          onClose={() => setWarningModalOpen(false)}
          onConfirm={() => setWarningModalOpen(false)}
          title="Warning"
          description="Your session will expire in 5 minutes. Please save your work to avoid losing any changes."
          confirmText="Extend Session"
          cancelText="Save & Logout"
          variant="warning"
        />

        <AlertDialog
          isOpen={destructiveModalOpen}
          onClose={() => setDestructiveModalOpen(false)}
          onConfirm={() => setDestructiveModalOpen(false)}
          title="Delete Account"
          description="This action cannot be undone. All your data, projects, and settings will be permanently deleted."
          confirmText="Delete Account"
          cancelText="Cancel"
          variant="destructive"
        />

        <AlertDialog
          isOpen={successModalOpen}
          onClose={() => setSuccessModalOpen(false)}
          onConfirm={() => setSuccessModalOpen(false)}
          title="Success!"
          description="Item has been successfully added to your cart. You can continue shopping or proceed to checkout."
          confirmText="View Cart"
          cancelText="Continue Shopping"
          variant="success"
        />
      </div>
    </div>
  )
}

ModalPage.displayName = "ModalPage" 