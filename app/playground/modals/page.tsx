import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ModalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Modal & Dialog Components</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Modals and dialogs interrupt user flow to capture attention and require user interaction.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Overlay</Badge>
            <Badge>Interactive</Badge>
            <Badge>Focused</Badge>
            <Badge>Accessible</Badge>
          </div>
        </div>

        <Tabs defaultValue="types" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="types">Modal Types</TabsTrigger>
            <TabsTrigger value="patterns">Usage Patterns</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>

          {/* Modal Types */}
          <TabsContent value="types" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Modal Examples</CardTitle>
                <CardDescription>
                  Visual examples of different modal patterns and styles.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Standard Modal Preview */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Standard Modal</h4>
                    <div className="bg-black/50 p-4 rounded-lg">
                      <div className="bg-popover rounded-lg shadow-lg max-w-md mx-auto">
                        <div className="p-6">
                          <h3 className="text-lg font-semibold mb-2 text-popover-foreground">Modal Title</h3>
                          <p className="text-muted-foreground mb-4">
                            This is a standard modal dialog. It can contain any content you need to display.
                          </p>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">Cancel</Button>
                            <Button size="sm">Confirm</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alert Dialog Preview */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Alert Dialog</h4>
                    <div className="bg-black/50 p-4 rounded-lg">
                      <div className="bg-popover rounded-lg shadow-lg max-w-md mx-auto">
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                            <h3 className="text-lg font-semibold text-popover-foreground">Delete Item</h3>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            This action cannot be undone. Are you sure you want to delete this item?
                          </p>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">Cancel</Button>
                            <Button variant="destructive" size="sm">Delete</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Sizes */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Modal Sizes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-gray-900/50 p-2 rounded-lg mb-2">
                        <div className="bg-white rounded shadow-lg mx-auto max-w-[200px]">
                          <div className="p-3">
                            <div className="text-xs font-medium mb-1">Small Modal</div>
                            <div className="text-xs text-gray-500">Quick actions</div>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">Small (max-w-sm)</span>
                    </div>

                    <div className="text-center">
                      <div className="bg-gray-900/50 p-2 rounded-lg mb-2">
                        <div className="bg-white rounded shadow-lg mx-auto max-w-[300px]">
                          <div className="p-4">
                            <div className="text-sm font-medium mb-1">Medium Modal</div>
                            <div className="text-xs text-gray-500">Forms and content</div>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">Medium (max-w-md)</span>
                    </div>

                    <div className="text-center">
                      <div className="bg-gray-900/50 p-2 rounded-lg mb-2">
                        <div className="bg-white rounded shadow-lg mx-auto max-w-[400px]">
                          <div className="p-4">
                            <div className="text-sm font-medium mb-1">Large Modal</div>
                            <div className="text-xs text-gray-500">Complex content</div>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">Large (max-w-2xl)</span>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Best Practices</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Use modals sparingly to avoid interrupting user flow</li>
                    <li>• Provide clear actions and cancel options</li>
                    <li>• Keep modal content focused and concise</li>
                    <li>• Use appropriate modal sizes for your content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Usage Patterns */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>When to Use Modals</CardTitle>
                <CardDescription>
                  Guidelines for choosing between modals and other UI patterns.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-600">✓ Use modals for:</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Critical confirmations (delete, logout)</li>
                      <li>• Quick forms or data entry</li>
                      <li>• Urgent alerts or notifications</li>
                      <li>• Media previews (images, videos)</li>
                      <li>• Focused tasks requiring attention</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-red-600">✗ Avoid modals for:</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Complex workflows or multi-step processes</li>
                      <li>• Content that users might want to reference</li>
                      <li>• Non-essential information or tips</li>
                      <li>• Mobile-heavy applications (use bottom sheets)</li>
                      <li>• Frequent or repetitive actions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modal vs Alternatives</CardTitle>
                <CardDescription>
                  Comparison with other overlay patterns and when to use each.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-600">Modal Dialog</h4>
                    <p className="text-sm text-gray-600">Best for critical actions requiring immediate attention</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-600">Popover/Tooltip</h4>
                    <p className="text-sm text-gray-600">Best for contextual information and simple interactions</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-600">Side Panel</h4>
                    <p className="text-sm text-gray-600">Best for detailed forms while maintaining context</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-600">Bottom Sheet</h4>
                    <p className="text-sm text-gray-600">Best for mobile actions and quick selections</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Implementation */}
          <TabsContent value="implementation" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>React Implementation</CardTitle>
                <CardDescription>Code examples for implementing modal components.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`import { useState } from 'react'
import { Button } from "@/components/ui/button"

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">{title}</h2>
          {children}
          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose}>
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Usage
function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>
        Open Modal
      </Button>
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        title="Confirm Action"
      >
        <p>Are you sure you want to perform this action?</p>
      </Modal>
    </div>
  )
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
} 