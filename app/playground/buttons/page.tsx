import Link from "next/link"
import { Plus, Loader2, CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"  
import { Footer } from "@/components/footer"

const buttonComponentsUrlReference = [
  "https://developer.apple.com/design/human-interface-guidelines/buttons",
  "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button",
  "https://www.w3.org/WAI/ARIA/apg/patterns/button/"
]

export default function ButtonsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Buttons</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Buttons are interactive elements that enable users to trigger actions or events, such as submitting forms, 
            opening dialogs, canceling actions, or performing operations. They are the primary way users interact with interfaces.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Interactive</Badge>
            <Badge>Accessible</Badge>
            <Badge>Responsive</Badge>
            <Badge>Semantic</Badge>
            <Badge>Keyboard Navigable</Badge>
          </div>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
            <TabsTrigger value="shapes">Shapes</TabsTrigger>
            <TabsTrigger value="layout">Layout & UX</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose of Buttons */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Purpose of Buttons</CardTitle>
                <CardDescription>
                  Understanding when and why to use buttons in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Trigger Actions:</strong> Submit forms, save data, create items</li>
                      <li>• <strong>Navigation Control:</strong> Open dialogs, modals, or panels</li>
                      <li>• <strong>State Changes:</strong> Toggle features, switch modes</li>
                      <li>• <strong>Process Control:</strong> Start, stop, pause operations</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Button vs Link</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Button When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Performing an action</li>
                          <li>• Submitting data</li>
                          <li>• Opening overlays</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200">Use Link When:</strong>
                        <ul className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                          <li>• Navigating to pages</li>
                          <li>• Linking to content</li>
                          <li>• External resources</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Button Types by Function</h4>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Button>Submit Form</Button>
                      <div>
                        <strong>Command Button:</strong> Performs a single action
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Button variant="outline" className="bg-blue-50">
                        <span className="mr-2">🔇</span> Muted
                      </Button>
                      <div>
                        <strong>Toggle Button:</strong> Switches between two states
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Button variant="outline">
                        Menu <span className="ml-2">▼</span>
                      </Button>
                      <div>
                        <strong>Menu Button:</strong> Opens a menu of options
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          {/* Button States */}
          <TabsContent value="states" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Button States</CardTitle>
                <CardDescription>
                  Common interactive states that buttons can have and how to implement them properly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Interactive States</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Button>Normal</Button>
                        <span className="text-sm">Default state</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Button className="hover:bg-primary/90">Hover</Button>
                        <span className="text-sm">Mouse over state</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Button className="ring-2 ring-offset-2 ring-primary">Focus</Button>
                        <span className="text-sm">Keyboard focus</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Button className="active:scale-95">Active</Button>
                        <span className="text-sm">Being pressed</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Functional States</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Button disabled>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Loading
                        </Button>
                        <span className="text-sm">Processing action</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Button disabled>Disabled</Button>
                        <span className="text-sm">Action unavailable</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Button variant="outline" className="bg-green-50 border-green-500">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Success
                        </Button>
                        <span className="text-sm">Action completed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Toggle States</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-4 mb-3">
                        <Button variant="outline" className="bg-red-50 border-red-500">
                          🔇 Muted
                        </Button>
                        <Button variant="outline">
                          🔊 Unmuted
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>aria-pressed=&quot;true&quot;</strong> for pressed state, <strong>&quot;false&quot;</strong> for unpressed
                      </p>
                    </div>
                  </div>
                </div>

                {/* State Implementation Guidelines */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Implementation Guidelines</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Always provide visual feedback for all interactive states</li>
                    <li>• Use <code>aria-disabled=&quot;true&quot;</code> instead of <code>disabled</code> when context is needed</li>
                    <li>• Announce state changes to screen readers using aria-live regions</li>
                    <li>• Maintain sufficient color contrast (4.5:1) in all states</li>
                    <li>• Ensure focus indicators are visible and have 3:1 contrast ratio</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          {/* Button Shapes */}
          <TabsContent value="shapes" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Button Shapes & Variants</CardTitle>
                <CardDescription>
                  Common button shapes, sizes, and visual styles for different use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Size Variants</h4>
                    <div className="flex items-center gap-4 flex-wrap">
                      <Button size="sm">Small</Button>
                      <Button>Medium (Default)</Button>
                      <Button size="lg">Large</Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Minimum touch target: 44×44px for mobile accessibility
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Visual Styles</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Primary Hierarchy</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Button>Primary</Button>
                            <span className="text-sm">Main action</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="secondary">Secondary</Button>
                            <span className="text-sm">Secondary action</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline">Outline</Button>
                            <span className="text-sm">Tertiary action</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="ghost">Ghost</Button>
                            <span className="text-sm">Subtle action</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Specialized Styles</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Button variant="destructive">Destructive</Button>
                            <span className="text-sm">Delete/remove actions</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="link">Link Style</Button>
                            <span className="text-sm">Inline actions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Button with Icons</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Icon + Text</h5>
                        <div className="space-y-3">
                          <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Item
                          </Button>
                          <Button variant="outline">
                            Download
                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Icon Only</h5>
                        <div className="space-y-3">
                          <Button size="sm" aria-label="Close">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </Button>
                          <Button variant="ghost" size="sm" aria-label="Settings">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Always include aria-label for icon-only buttons
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shape Guidelines */}
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">Shape & Style Guidelines</h4>
                  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Use only one primary button per section to maintain hierarchy</li>
                    <li>• Keep button shapes consistent across your application</li>
                    <li>• Ensure adequate spacing between buttons (minimum 8px)</li>
                    <li>• Consider rounded corners for friendlier appearance</li>
                    <li>• Icon-only buttons should be square or circular for better recognition</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Layout & UX Guidelines */}
          <TabsContent value="layout" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Layout & UX Guidelines</CardTitle>
                <CardDescription>
                  Best practices for button positioning, spacing, and responsive behavior.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Button Placement Do&apos;s and Don&apos;ts</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                          <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do</h5>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• Place primary actions on the right in dialogs</li>
                            <li>• Group related buttons together</li>
                            <li>• Use consistent positioning across your app</li>
                            <li>• Put destructive actions away from safe actions</li>
                            <li>• Maintain 44px minimum touch targets</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 border rounded-lg">
                          <p className="text-sm mb-2 font-medium">Good Example:</p>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save Changes</Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                          <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don&apos;t</h5>
                          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <li>• Place multiple primary buttons in same area</li>
                            <li>• Use inconsistent spacing between buttons</li>
                            <li>• Make buttons too small for touch interfaces</li>
                            <li>• Put delete next to save buttons</li>
                            <li>• Use more than 3-4 actions in a group</li>
                          </ul>
                        </div>

                        <div className="p-3 border rounded-lg">
                          <p className="text-sm mb-2 font-medium">Avoid:</p>
                          <div className="flex justify-start gap-1">
                            <Button size="sm">Save</Button>
                            <Button size="sm">Delete</Button>
                            <Button size="sm">Edit</Button>
                            <Button size="sm">Copy</Button>
                            <Button size="sm">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Text Guidelines</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3 text-green-800 dark:text-green-200">✅ Good Button Text</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Button>Save Changes</Button>
                            <span className="text-sm">Action-specific</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button>Download Report</Button>
                            <span className="text-sm">Clear outcome</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button>Add to Cart</Button>
                            <span className="text-sm">Descriptive</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3 text-red-800 dark:text-red-200">❌ Avoid</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Button variant="outline">Click Here</Button>
                            <span className="text-sm">Too generic</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline">Submit</Button>
                            <span className="text-sm">Unclear action</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline">OK</Button>
                            <span className="text-sm">Ambiguous</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Text Best Practices</h5>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Use action verbs (Save, Delete, Create, Cancel)</li>
                        <li>• Keep text concise (1-3 words ideal)</li>
                        <li>• Be specific about the outcome</li>
                        <li>• Use sentence case, not ALL CAPS</li>
                        <li>• Avoid technical jargon</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Responsive Considerations</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Mobile Layout</h5>
                        <div className="space-y-2">
                          <Button className="w-full">Full Width Button</Button>
                          <div className="flex gap-2">
                            <Button className="flex-1" variant="outline">Cancel</Button>
                            <Button className="flex-1">Continue</Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Stack buttons vertically on small screens or use equal-width buttons
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Desktop Layout</h5>
                        <div className="flex justify-between items-center">
                          <Button variant="destructive">Delete Account</Button>
                          <div className="flex gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save Settings</Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Separate destructive actions from primary flows
                        </p>
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
                <CardTitle>Button Accessibility (A11y)</CardTitle>
                <CardDescription>
                  Comprehensive accessibility guidelines for buttons following WCAG and WAI-ARIA standards.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Accessibility Requirements</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Keyboard Navigation</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Tab:</strong> Move focus to button</li>
                          <li>• <strong>Space/Enter:</strong> Activate button</li>
                          <li>• <strong>Focus visible:</strong> Clear visual indicator</li>
                          <li>• <strong>Tab order:</strong> Logical sequence</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Screen Reader Support</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Role:</strong> Announced as &quot;button&quot;</li>
                          <li>• <strong>Name:</strong> Clear, descriptive label</li>
                          <li>• <strong>State:</strong> Pressed, disabled, etc.</li>
                          <li>• <strong>Context:</strong> Purpose and outcome</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Attributes</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Essential ARIA Attributes</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><code>aria-label</code> - For icon-only buttons</p>
                            <Button size="sm" aria-label="Close notification">
                              ✕
                            </Button>
                          </div>
                          <div>
                            <p><code>aria-pressed</code> - For toggle buttons</p>
                            <Button variant="outline" aria-pressed="false">
                              🔇 Muted
                            </Button>
                          </div>
                          <div>
                            <p><code>aria-expanded</code> - For menu buttons</p>
                            <Button variant="outline" aria-expanded="false">
                              Options ▼
                            </Button>
                          </div>
                          <div>
                            <p><code>aria-describedby</code> - Additional context</p>
                            <Button aria-describedby="delete-help">
                              Delete
                            </Button>
                            <p id="delete-help" className="text-xs text-muted-foreground">Cannot be undone</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Visual Accessibility</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Color & Contrast</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Minimum 4.5:1 contrast ratio for text</li>
                          <li>• 3:1 contrast for focus indicators</li>
                          <li>• Don&apos;t rely solely on color for meaning</li>
                          <li>• Provide visual state indicators</li>
                        </ul>
                        <div className="mt-2 flex gap-2">
                          <Button className="bg-blue-600 hover:bg-blue-700">Good Contrast</Button>
                          <Button className="bg-gray-300 text-gray-400 cursor-not-allowed">Poor Contrast</Button>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Size & Spacing</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Minimum 44×44px touch target</li>
                          <li>• Adequate spacing between buttons</li>
                          <li>• Clear focus indicators</li>
                          <li>• Responsive to zoom (up to 200%)</li>
                        </ul>
                        <div className="mt-2 space-y-2">
                          <Button className="min-w-[44px] min-h-[44px]">Good Size</Button>
                          <Button size="sm" className="text-xs px-1 py-0">Too Small</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Common Accessibility Mistakes</h4>
                    <div className="space-y-4">
                      <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Avoid These Mistakes</h5>
                        <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                          <li>• Using <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> as buttons without proper roles</li>
                          <li>• Missing aria-label on icon-only buttons</li>
                          <li>• Using <code>disabled</code> without explaining why</li>
                          <li>• Poor color contrast or missing focus indicators</li>
                          <li>• Buttons that are too small for touch interfaces</li>
                          <li>• Generic text like &quot;Click here&quot; or &quot;Read more&quot;</li>
                        </ul>
                      </div>

                      <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Best Practices</h5>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Always use semantic <code>&lt;button&gt;</code> elements</li>
                          <li>• Provide clear, descriptive labels</li>
                          <li>• Implement proper keyboard navigation</li>
                          <li>• Use ARIA attributes appropriately</li>
                          <li>• Test with screen readers and keyboard only</li>
                          <li>• Maintain consistent behavior across your app</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Testing Your Buttons</h4>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Accessibility Testing Checklist</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                        <div>
                          <strong>Keyboard Testing:</strong>
                          <ul className="mt-1 space-y-1">
                            <li>□ Can reach all buttons via Tab</li>
                            <li>□ Space/Enter activates buttons</li>
                            <li>□ Focus indicators are visible</li>
                            <li>□ Tab order is logical</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Screen Reader Testing:</strong>
                          <ul className="mt-1 space-y-1">
                            <li>□ Role announced as &quot;button&quot;</li>
                            <li>□ Labels are descriptive</li>
                            <li>□ States are announced</li>
                            <li>□ Context is provided</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Implementation */}
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Implementation</CardTitle>
                <CardDescription>Essential accessibility attributes and patterns for buttons.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    {`<!-- Basic button with semantic HTML -->
<button type="button">
  Save Changes
</button>

<!-- Icon-only button with accessible name -->
<button type="button" aria-label="Close dialog">
  <svg>...</svg>
</button>

<!-- Toggle button -->
<button type="button" aria-pressed="false">
  Mute
</button>

<!-- Button with description -->
<button type="button" aria-describedby="help-text">
  Delete Account
</button>
<div id="help-text">This action cannot be undone</div>

<!-- Disabled button with context -->
<button type="button" aria-disabled="true" aria-describedby="why-disabled">
  Submit
</button>
<div id="why-disabled">Please fill in all required fields</div>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* References Section */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                References & Further Reading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {buttonComponentsUrlReference.map((url, index) => {
                  const getTitle = (url: string) => {
                    if (url.includes('apple.com')) return 'Apple Human Interface Guidelines - Buttons'
                    if (url.includes('mozilla.org')) return 'MDN Web Docs - HTML Button Element'
                    if (url.includes('w3.org')) return 'WAI-ARIA Authoring Practices - Button Pattern'
                    return url
                  }

                  return (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <div className="flex-1">
                        <Link 
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {getTitle(url)}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">{url}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
