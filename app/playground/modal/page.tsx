"use client"

import React, { useState } from "react"
import { X, AlertTriangle, Info, XCircle, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  size?: 'small' | 'medium' | 'large'
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
    small: 'max-w-md',
    medium: 'max-w-lg',
    large: 'max-w-2xl'
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
            ${className}
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
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
          <div className="p-6">
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
  variant?: 'destructive' | 'warning' | 'info'
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
    info: <Info className="h-6 w-6 text-blue-600" />
  }

  const buttonVariants = {
    destructive: 'destructive' as const,
    warning: 'default' as const,
    info: 'default' as const
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

export default function ModalPage() {
  const { MobileWarning } = useMobileWarning()
  
  // Modal states
  const [basicModalOpen, setBasicModalOpen] = useState(false)
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [alertModalOpen, setAlertModalOpen] = useState(false)
  const [destructiveModalOpen, setDestructiveModalOpen] = useState(false)
  const [scrollModalOpen, setScrollModalOpen] = useState(false)
  const [nestedModalOpen, setNestedModalOpen] = useState(false)
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Modal</h2>
            <EditButton filePath="app/playground/modal/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Modals are overlaid windows that focus user attention on specific tasks or information 
            while preserving the context of the underlying page. They require user interaction to dismiss.
          </p>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="types">Modal Types</TabsTrigger>
            <TabsTrigger value="interaction">Interaction</TabsTrigger>
            <TabsTrigger value="behavior">Behavior & UX</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose of Modals */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Purpose of Modals</CardTitle>
                <CardDescription>
                  Understanding when and why to use modals in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Focus Attention:</strong> Direct user attention to critical information</li>
                      <li>• <strong>Confirm Actions:</strong> Get explicit user confirmation for important actions</li>
                      <li>• <strong>Collect Input:</strong> Gather information without leaving the current context</li>
                      <li>• <strong>Display Content:</strong> Show additional details or media</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Modal vs Other Components</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Modal When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Requiring immediate user decision</li>
                          <li>• Critical information to display</li>
                          <li>• Quick form input needed</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200">Use Drawer/Sidebar When:</strong>
                        <ul className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                          <li>• Lengthy content or forms</li>
                          <li>• Secondary navigation</li>
                          <li>• Non-blocking interactions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Modal Usage Examples</h4>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Button onClick={() => setBasicModalOpen(true)}>
                        Open Basic Modal
                      </Button>
                      <div>
                        <strong>Information Modal:</strong> Display additional details or content
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Button onClick={() => setFormModalOpen(true)}>
                        Open Form Modal
                      </Button>
                      <div>
                        <strong>Form Modal:</strong> Collect user input without navigation
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Button onClick={() => setAlertModalOpen(true)}>
                        Open Alert Dialog
                      </Button>
                      <div>
                        <strong>Alert Dialog:</strong> Get user confirmation for actions
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Modal Types */}
          <TabsContent value="types" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Modal Types & Variants</CardTitle>
                <CardDescription>
                  Different modal types for various contexts and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Standard Modal Sizes</h4>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <Button
                          variant="outline"
                          onClick={() => setBasicModalOpen(true)}
                        >
                          Small Modal
                        </Button>
                        <div className="flex-1">
                          <strong>Small (max-w-md):</strong> Simple confirmations, alerts, or minimal content
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <Button
                          variant="outline"
                          onClick={() => setFormModalOpen(true)}
                        >
                          Medium Modal
                        </Button>
                        <div className="flex-1">
                          <strong>Medium (max-w-lg):</strong> Forms, settings, or moderate content (default)
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <Button
                          variant="outline"
                          onClick={() => setScrollModalOpen(true)}
                        >
                          Large Modal
                        </Button>
                        <div className="flex-1">
                          <strong>Large (max-w-2xl):</strong> Complex forms, tables, or extensive content
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Modal Types by Function</h4>
                    <div className="grid gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <Info className="h-5 w-5 text-blue-600" />
                          <strong>Information Modal</strong>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Used to display additional information, help content, or details about an item.
                        </p>
                        <Button size="sm" onClick={() => setBasicModalOpen(true)}>
                          View Example
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <Settings className="h-5 w-5 text-gray-600" />
                          <strong>Form Modal</strong>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Contains forms for data input, settings configuration, or content creation.
                        </p>
                        <Button size="sm" onClick={() => setSettingsModalOpen(true)}>
                          View Example
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <AlertTriangle className="h-5 w-5 text-amber-600" />
                          <strong>Alert Dialog</strong>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Interrupts user workflow to communicate important information or get confirmation.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => setAlertModalOpen(true)}>
                            Info Alert
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => setDestructiveModalOpen(true)}>
                            Destructive Alert
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interaction */}
          <TabsContent value="interaction" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Modal Interaction Patterns</CardTitle>
                <CardDescription>
                  How users interact with modals and best practices for user experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Opening Modals</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Button Click:</strong> Primary action buttons</li>
                      <li>• <strong>Link Activation:</strong> Help links, info icons</li>
                      <li>• <strong>Automatic:</strong> Error states, onboarding flows</li>
                      <li>• <strong>Context Menu:</strong> Right-click actions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Closing Modals</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Close Button:</strong> X button in header (always present)</li>
                      <li>• <strong>Cancel Action:</strong> Cancel or Close button in content</li>
                      <li>• <strong>Escape Key:</strong> Keyboard shortcut (when appropriate)</li>
                      <li>• <strong>Backdrop Click:</strong> Click outside modal (when safe)</li>
                      <li>• <strong>Completion:</strong> After successful action</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Interactive Examples</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Close Methods Demo</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        Try different ways to close the modal: X button, Cancel button, Escape key, or backdrop click.
                      </p>
                      <Button onClick={() => setBasicModalOpen(true)}>
                        Test Close Methods
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Nested Modal Example</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        Demonstrates proper focus management when opening modals from within modals.
                      </p>
                      <Button onClick={() => setNestedModalOpen(true)}>
                        Open Nested Modal
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Scrolling Content</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        Shows how modals handle content that exceeds viewport height.
                      </p>
                      <Button onClick={() => setScrollModalOpen(true)}>
                        Open Scrolling Modal
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Behavior & UX */}
          <TabsContent value="behavior" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Modal Behavior & UX Guidelines</CardTitle>
                <CardDescription>
                  Best practices for modal behavior, positioning, and user experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Positioning & Layout</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Centered:</strong> Horizontally and vertically in viewport</li>
                      <li>• <strong>Responsive:</strong> Adapts to screen size and orientation</li>
                      <li>• <strong>Backdrop:</strong> Semi-transparent overlay behind modal</li>
                      <li>• <strong>Z-index:</strong> Above all other content</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Animation & Transitions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Fade In:</strong> Backdrop appears with opacity transition</li>
                      <li>• <strong>Scale Up:</strong> Modal scales from 95% to 100%</li>
                      <li>• <strong>Duration:</strong> 200ms for smooth, responsive feel</li>
                      <li>• <strong>Easing:</strong> Ease-out for natural motion</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Content Guidelines</h4>
                  <div className="grid gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <strong className="text-green-800 dark:text-green-200">Do:</strong>
                      <ul className="text-sm mt-2 text-green-700 dark:text-green-300 space-y-1">
                        <li>• Keep content focused and concise</li>
                        <li>• Use clear, actionable language</li>
                        <li>• Provide obvious ways to close</li>
                        <li>• Make primary action prominent</li>
                        <li>• Test with keyboard navigation</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <strong className="text-red-800 dark:text-red-200">Don&apos;t:</strong>
                      <ul className="text-sm mt-2 text-red-700 dark:text-red-300 space-y-1">
                        <li>• Use modals for lengthy content</li>
                        <li>• Stack multiple modals unnecessarily</li>
                        <li>• Auto-close critical confirmations</li>
                        <li>• Use for primary navigation</li>
                        <li>• Disable backdrop click without warning</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Mobile Considerations</h4>
                  <div className="p-4 border rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Full-width:</strong> Use most of screen width on mobile</li>
                      <li>• <strong>Touch Targets:</strong> Ensure buttons are at least 44px</li>
                      <li>• <strong>Scrolling:</strong> Allow content scrolling when needed</li>
                      <li>• <strong>Keyboard:</strong> Consider virtual keyboard impact</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Modal Accessibility</CardTitle>
                <CardDescription>
                  ARIA guidelines and accessibility best practices for modal dialogs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <code>role=&quot;dialog&quot;</code> on modal container</li>
                      <li>• <code>aria-modal=&quot;true&quot;</code> for modal behavior</li>
                      <li>• <code>aria-labelledby</code> referencing title</li>
                      <li>• <code>aria-describedby</code> for description (optional)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Focus Management</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Initial Focus:</strong> Move to modal title or first control</li>
                      <li>• <strong>Focus Trap:</strong> Keep focus within modal</li>
                      <li>• <strong>Return Focus:</strong> Back to triggering element</li>
                      <li>• <strong>Tab Order:</strong> Logical progression through controls</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Keyboard Support</h4>
                  <div className="p-4 border rounded-lg">
                    <div className="grid gap-3">
                      <div className="flex justify-between items-center">
                        <code className="bg-muted px-2 py-1 rounded text-sm">Escape</code>
                        <span className="text-sm">Close modal (when appropriate)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <code className="bg-muted px-2 py-1 rounded text-sm">Tab</code>
                        <span className="text-sm">Move to next focusable element</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <code className="bg-muted px-2 py-1 rounded text-sm">Shift + Tab</code>
                        <span className="text-sm">Move to previous focusable element</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <code className="bg-muted px-2 py-1 rounded text-sm">Enter</code>
                        <span className="text-sm">Activate focused button</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Screen Reader Support</h4>
                  <div className="p-4 border rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li>• Modal announcement when opened</li>
                      <li>• Clear button labels and purposes</li>
                      <li>• Descriptive error messages</li>
                      <li>• Proper heading structure</li>
                      <li>• Form label associations</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Testing Accessibility</h4>
                  <div className="p-4 border rounded-lg">
                    <Button onClick={() => setFormModalOpen(true)}>
                      Test Modal Accessibility
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      Try navigating this modal with keyboard only (Tab, Shift+Tab, Enter, Escape)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Component References */}
        <ComponentReferences
          title="References & Further Reading"
          description="Essential references for modal component implementation and accessibility best practices."
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

        {/* Modal Examples */}
        
        {/* Basic Modal */}
        <Modal
          isOpen={basicModalOpen}
          onClose={() => setBasicModalOpen(false)}
          title="Information Modal"
          size="medium"
        >
          <div className="space-y-4">
            <p className="text-muted-foreground">
              This is a basic information modal. It demonstrates proper focus management, 
              keyboard navigation, and accessibility features.
            </p>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-blue-800 dark:text-blue-200">Pro Tip:</strong>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  You can close this modal by clicking the X button, pressing Escape, 
                  or clicking outside the modal area.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setBasicModalOpen(false)}>
                Close
              </Button>
              <Button onClick={() => setNestedModalOpen(true)}>
                Open Nested Modal
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
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input 
                id="project-name" 
                placeholder="Enter project name"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-description">Description</Label>
              <Textarea 
                id="project-description"
                placeholder="Enter project description"
                rows={3}
                className="w-full"
              />
            </div>
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
            <div className="flex justify-end gap-2 pt-4">
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
          title="User Settings"
          size="large"
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Profile Settings</h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="display-name">Display Name</Label>
                    <Input id="display-name" placeholder="Your display name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Preferences</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <input
                      id="notifications"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="marketing">Marketing Emails</Label>
                    <input
                      id="marketing"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={() => setSettingsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setSettingsModalOpen(false)}>
                Save Changes
              </Button>
            </div>
          </div>
        </Modal>

        {/* Scrolling Content Modal */}
        <Modal
          isOpen={scrollModalOpen}
          onClose={() => setScrollModalOpen(false)}
          title="Terms and Conditions"
          size="large"
        >
          <div className="space-y-4 max-h-96 overflow-y-auto">
            <div className="prose prose-sm dark:prose-invert">
              <h3>1. Introduction</h3>
              <p>
                Welcome to our service. These terms and conditions outline the rules and regulations 
                for the use of our website and services. By accessing this website, we assume you 
                accept these terms and conditions.
              </p>
              
              <h3>2. User Accounts</h3>
              <p>
                When you create an account with us, you must provide information that is accurate, 
                complete, and current at all times. You are responsible for safeguarding the password 
                and for maintaining the confidentiality of your account.
              </p>
              
              <h3>3. Privacy Policy</h3>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, 
                and protect your information when you use our service. By using our service, you 
                agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
              
              <h3>4. Content Guidelines</h3>
              <p>
                Users are expected to follow our community guidelines when posting content. 
                Content that violates our guidelines may be removed without notice. Repeated 
                violations may result in account suspension or termination.
              </p>
              
              <h3>5. Limitation of Liability</h3>
              <p>
                In no event shall our company, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, 
                consequential, or punitive damages.
              </p>
              
              <h3>6. Changes to Terms</h3>
              <p>
                We reserve the right to modify or replace these terms at any time. If a revision 
                is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={() => setScrollModalOpen(false)}>
              Decline
            </Button>
            <Button onClick={() => setScrollModalOpen(false)}>
              Accept Terms
            </Button>
          </div>
        </Modal>

        {/* Nested Modal */}
        <Modal
          isOpen={nestedModalOpen}
          onClose={() => setNestedModalOpen(false)}
          title="Nested Modal Example"
          size="small"
        >
          <div className="space-y-4">
            <p className="text-muted-foreground">
              This demonstrates proper focus management when modals are opened from within other modals.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setNestedModalOpen(false)}>
                Close
              </Button>
              <Button onClick={() => setAlertModalOpen(true)}>
                Open Alert
              </Button>
            </div>
          </div>
        </Modal>

        {/* Alert Dialogs */}
        <AlertDialog
          isOpen={alertModalOpen}
          onClose={() => setAlertModalOpen(false)}
          onConfirm={() => {
            setAlertModalOpen(false)
            // Handle confirmation
          }}
          title="Confirm Action"
          description="Are you sure you want to proceed with this action? This will update your settings."
          confirmText="Continue"
          cancelText="Cancel"
          variant="info"
        />

        <AlertDialog
          isOpen={destructiveModalOpen}
          onClose={() => setDestructiveModalOpen(false)}
          onConfirm={() => {
            setDestructiveModalOpen(false)
            // Handle deletion
          }}
          title="Delete Item"
          description="This action cannot be undone. This will permanently delete the item and remove all associated data."
          confirmText="Delete"
          cancelText="Cancel"
          variant="destructive"
        />
      </div>
    </div>
  )
}

ModalPage.displayName = "ModalPage" 