"use client"

import { Plus, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"  

const buttonComponentsUrlReference = [
  "https://spectrum.adobe.com/page/button/",
  "https://atlassian.design/components/button/",
  "https://m3.material.io/components/all-buttons",
  "https://carbondesignsystem.com/components/button/accessibility/",
  "https://gestalt.pinterest.systems/web/button",
  "https://polaris.shopify.com/components/actions/button",
  "https://design.visa.com/components/button",
  "https://base.uber.com/6d2425e9f/p/756216-button/b/336373/t/27f872",
  "https://developer.apple.com/design/human-interface-guidelines/buttons",
  "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button",
  "https://www.w3.org/WAI/ARIA/apg/patterns/button/"
]

export default function ButtonsPage() {
  const { MobileWarning } = useMobileWarning()

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning} 
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Buttons</h2>
            <EditButton filePath="app/playground/buttons/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Buttons are foundational interactive elements that enable users to trigger actions, submit data, and navigate through interfaces. 
            Buttons serve as the primary mechanism for user interaction, providing clear affordances and predictable behavior across all platforms.
          </p>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
            <TabsTrigger value="shapes">Shapes</TabsTrigger>
            <TabsTrigger value="layout">Layout & UX</TabsTrigger>
            <TabsTrigger value="tokens">Design Tokens</TabsTrigger>
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
              <CardContent className="space-y-8">
                {/* Core Purpose Section */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Core Purpose of Buttons</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="mb-2">
                        <Button size="sm">Save</Button>
                      </div>
                      <h5 className="font-medium mb-1">Trigger Actions</h5>
                      <p className="text-xs text-muted-foreground">Submit forms, save data, create items</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="mb-2">
                        <Button size="sm" variant="outline">Open Modal</Button>
                      </div>
                      <h5 className="font-medium mb-1">Navigation Control</h5>
                      <p className="text-xs text-muted-foreground">Open dialogs, modals, or panels</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="mb-2">
                        <Button size="sm" variant="outline">🔇 Toggle</Button>
                      </div>
                      <h5 className="font-medium mb-1">State Changes</h5>
                      <p className="text-xs text-muted-foreground">Toggle features, switch modes</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="mb-2">
                        <Button size="sm" variant="secondary">Start</Button>
                      </div>
                      <h5 className="font-medium mb-1">Process Control</h5>
                      <p className="text-xs text-muted-foreground">Start, stop, pause operations</p>
                    </div>
                  </div>
                </div>

                {/* Button vs Link Section */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Button vs Link: Semantic HTML Matters</h4>
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg mb-6">
                    <h5 className="font-medium mb-2 text-amber-800 dark:text-amber-200">Why This Distinction Matters</h5>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Following Polaris and Atlassian guidelines, the HTML that renders carries semantic meaning. 
                      Using the correct element ensures better accessibility for assistive technology users, 
                      more cohesive visual experiences, and products that are easier to maintain at scale.
                    </p>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Button size="sm">Action</Button>
                        <strong className="text-green-800 dark:text-green-200">Use Button When:</strong>
                      </div>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• <strong>Performing actions:</strong> Save, Delete, Submit, Add</li>
                        <li>• <strong>State changes:</strong> Toggle features, switch modes</li>
                        <li>• <strong>Process control:</strong> Start, stop, pause operations</li>
                        <li>• <strong>Opening overlays:</strong> Modals, dialogs, popovers</li>
                        <li>• <strong>Form submission:</strong> Submit, reset, validate</li>
                        <li>• <strong>API calls:</strong> Create, update, delete operations</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Button variant="link" size="sm">Link</Button>
                        <strong className="text-blue-800 dark:text-blue-200">Use Link When:</strong>
                      </div>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• <strong>Navigation:</strong> Between pages or sections</li>
                        <li>• <strong>External resources:</strong> Opening new websites</li>
                        <li>• <strong>Downloadable content:</strong> PDFs, documents, files</li>
                        <li>• <strong>Anchor links:</strong> Jumping to page sections</li>
                        <li>• <strong>Inline content:</strong> Within paragraphs or sentences</li>
                        <li>• <strong>Reference links:</strong> Documentation, help articles</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h5 className="font-medium mb-2 text-red-800 dark:text-red-200">❌ Common Mistakes to Avoid</h5>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Using buttons for navigation (breaks browser history)</li>
                        <li>• Using links for form submission (requires JavaScript)</li>
                        <li>• Styling links as buttons without proper roles</li>
                        <li>• Using generic onClick handlers on div elements</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                      <h5 className="font-medium mb-2">Accessibility Impact</h5>
                      <p className="text-sm text-muted-foreground">
                        Screen readers announce buttons and links differently. Buttons are expected to perform actions, 
                        links are expected to navigate. Users who rely on keyboard navigation have different expectations 
                        for these elements (Space vs Enter keys, for example).
                      </p>
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
                  <h4 className="font-semibold text-lg">Loading States & UX Patterns</h4>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg mb-4">
                    <h5 className="font-medium mb-2 text-indigo-800 dark:text-indigo-200">Polaris & Gestalt Loading Principles</h5>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">
                      Following Shopify Polaris and Pinterest Gestalt guidelines, loading states should clearly communicate 
                      progress, maintain user confidence, and provide appropriate feedback during asynchronous operations.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-3">Loading Button Patterns</h5>
                      <div className="space-y-4">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Button disabled>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Saving...
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground"><strong>Inline Loading:</strong> Shows progress with spinner and descriptive text</p>
                        </div>

                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Button disabled className="min-w-[120px]">
                              <Loader2 className="h-4 w-4 animate-spin" />
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground"><strong>Icon Only Loading:</strong> Maintains button size, focuses on progress indicator</p>
                        </div>

                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Button disabled className="opacity-50">
                              Processing...
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground"><strong>Text Only:</strong> Simple text change for quick operations</p>
                        </div>

                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Button disabled className="bg-green-600 hover:bg-green-600">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Saved!
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground"><strong>Success State:</strong> Confirms completion with positive feedback</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-3">UX Guidelines</h5>
                      <div className="space-y-4">
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <h6 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Loading State Best Practices</h6>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• Keep buttons disabled during loading to prevent double-submission</li>
                            <li>• Maintain button size to prevent layout shift</li>
                            <li>• Use descriptive loading text ("Saving..." not "Loading...")</li>
                            <li>• Show success feedback briefly before reverting</li>
                            <li>• Provide immediate feedback (≤100ms perceived delay)</li>
                            <li>• Use skeleton screens for longer operations (&gt;1 second)</li>
                          </ul>
                        </div>

                        <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                          <h6 className="font-medium text-amber-800 dark:text-amber-200 mb-2">⚠️ Timing Considerations</h6>
                          <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                            <li>• <strong>Instant (0-100ms):</strong> No loading state needed</li>
                            <li>• <strong>Quick (100ms-1s):</strong> Spinner or text change</li>
                            <li>• <strong>Medium (1-10s):</strong> Progress indicators if possible</li>
                            <li>• <strong>Long (10s+):</strong> Progress bars, cancel options</li>
                          </ul>
                        </div>

                        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                          <h6 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Common Mistakes</h6>
                          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <li>• Not disabling buttons during async operations</li>
                            <li>• Using generic "Loading..." text</li>
                            <li>• Layout shifts when content changes</li>
                            <li>• No feedback for very quick operations</li>
                            <li>• Loading states that persist too long</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Implementation Example</h5>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                      <pre>{`// Loading state management
const [isLoading, setIsLoading] = useState(false)
const [isSuccess, setIsSuccess] = useState(false)

const handleSave = async () => {
  setIsLoading(true)
  try {
    await saveData()
    setIsSuccess(true)
    setTimeout(() => setIsSuccess(false), 2000) // Reset after 2s
  } catch (error) {
    // Handle error state
  } finally {
    setIsLoading(false)
  }
}

// Button render
<Button 
  onClick={handleSave} 
  disabled={isLoading || isSuccess}
  className={isSuccess ? "bg-green-600" : ""}
>
  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
  {isSuccess && <CheckCircle className="mr-2 h-4 w-4" />}
  {isLoading ? "Saving..." : isSuccess ? "Saved!" : "Save Changes"}
</Button>`}</pre>
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
                    <h4 className="font-semibold mb-3 text-lg">Content & Writing Guidelines</h4>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg mb-4">
                      <h5 className="font-medium mb-2 text-indigo-800 dark:text-indigo-200">Polaris Writing Principles</h5>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">
                        Following Shopify Polaris guidelines, button text should be clear, predictable, and help users 
                        understand exactly what will happen when they interact with the button.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-medium mb-3 text-green-800 dark:text-green-200">✅ Good Button Text</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Button>Save Changes</Button>
                            <span className="text-sm">Action + object (when context needed)</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button>Add Product</Button>
                            <span className="text-sm">Verb + specific noun</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button>Continue to Checkout</Button>
                            <span className="text-sm">Clear next step</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="destructive">Delete Account</Button>
                            <span className="text-sm">Specific destructive action</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline">Edit</Button>
                            <span className="text-sm">Simple verb when context is clear</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3 text-red-800 dark:text-red-200">❌ Avoid These Patterns</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Button variant="outline">Click Here</Button>
                            <span className="text-sm">Too generic, no outcome</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline">Submit</Button>
                            <span className="text-sm">What are you submitting?</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline">OK</Button>
                            <span className="text-sm">Doesn't describe action</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline">Learn More</Button>
                            <span className="text-sm">Learn more about what?</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline">Get Started</Button>
                            <span className="text-sm">Start what process?</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Writing Best Practices</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                          <div>
                            <strong>Content Structure:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Use strong action verbs (Save, Delete, Create)</li>
                              <li>• Include object when needed (Add Product vs Add)</li>
                              <li>• Be specific about outcomes</li>
                              <li>• Match user's mental model</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Formatting:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Use sentence case (not Title Case or ALL CAPS)</li>
                              <li>• Keep to 1-3 words when possible</li>
                              <li>• No periods or punctuation</li>
                              <li>• Avoid articles (a, an, the)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h5 className="font-medium mb-2 text-green-800 dark:text-green-200">Context-Specific Guidelines</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700 dark:text-green-300">
                          <div>
                            <strong>Forms:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• "Save Settings" (not "Submit")</li>
                              <li>• "Create Account" (not "Register")</li>
                              <li>• "Update Profile" (not "Save")</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Commerce:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• "Add to Cart" (not "Buy Now" unless instant)</li>
                              <li>• "Complete Purchase" (final step)</li>
                              <li>• "Continue Shopping" (not "Continue")</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                        <h5 className="font-medium mb-2 text-amber-800 dark:text-amber-200">Voice & Tone</h5>
                        <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
                          Following industry content guidelines, button text should match your product's voice while remaining clear and actionable.
                        </p>
                        <div className="text-sm text-amber-700 dark:text-amber-300">
                          <strong>Examples by tone:</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• <strong>Professional:</strong> "Submit Application", "Review Details"</li>
                            <li>• <strong>Friendly:</strong> "Let's Get Started", "Join the Team"</li>
                            <li>• <strong>Direct:</strong> "Delete", "Cancel", "Save"</li>
                          </ul>
                        </div>
                      </div>
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

          {/* Design Tokens & Theming */}
          <TabsContent value="tokens" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Design Tokens & Theming</CardTitle>
                <CardDescription>
                  Design token approach inspired by Visa Product Design System and Base (Uber) for scalable, 
                  consistent button styling across products and platforms.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
                    <h4 className="font-semibold mb-2 text-violet-800 dark:text-violet-200">What Are Design Tokens?</h4>
                    <p className="text-sm text-violet-700 dark:text-violet-300">
                      Design tokens are the fundamental building blocks of a design system. They store design decisions 
                      like colors, typography, and spacing in a centralized, reusable format that can be shared between 
                      design and development tools.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Button Tokens</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Color Tokens</h5>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="w-4 h-4 bg-blue-600 rounded"></div>
                            <code>--button-primary-bg</code>
                            <span className="text-muted-foreground">#3b82f6</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="w-4 h-4 bg-blue-700 rounded"></div>
                            <code>--button-primary-bg-hover</code>
                            <span className="text-muted-foreground">#1d4ed8</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="w-4 h-4 bg-white border rounded"></div>
                            <code>--button-primary-text</code>
                            <span className="text-muted-foreground">#ffffff</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Spacing & Size Tokens</h5>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="w-4 h-2 bg-gray-400 rounded"></div>
                            <code>--button-padding-x</code>
                            <span className="text-muted-foreground">16px</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="w-2 h-4 bg-gray-400 rounded"></div>
                            <code>--button-padding-y</code>
                            <span className="text-muted-foreground">8px</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="w-4 h-4 border-2 bg-transparent rounded"></div>
                            <code>--button-border-radius</code>
                            <span className="text-muted-foreground">6px</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Theming & Customization</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h5 className="font-medium mb-2 text-green-800 dark:text-green-200">Benefits of Token-Based Design</h5>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• <strong>Consistency:</strong> Same values used across all platforms</li>
                          <li>• <strong>Scalability:</strong> Easy to update globally</li>
                          <li>• <strong>Theming:</strong> Support light/dark modes and brand variations</li>
                          <li>• <strong>Collaboration:</strong> Shared language between design and engineering</li>
                          <li>• <strong>Maintenance:</strong> Update once, changes everywhere</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Theme Examples</h5>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-white border rounded-lg">
                            <h6 className="text-sm font-medium mb-2">Light Theme</h6>
                            <div className="space-y-2">
                              <Button className="w-full">Primary Action</Button>
                              <Button variant="outline" className="w-full">Secondary</Button>
                            </div>
                          </div>
                          <div className="p-4 bg-gray-900 text-white border rounded-lg">
                            <h6 className="text-sm font-medium mb-2">Dark Theme</h6>
                            <div className="space-y-2">
                              <Button className="w-full bg-blue-500 hover:bg-blue-600">Primary Action</Button>
                              <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">Secondary</Button>
                            </div>
                          </div>
                          <div className="p-4 bg-purple-50 border rounded-lg">
                            <h6 className="text-sm font-medium mb-2">Brand Theme</h6>
                            <div className="space-y-2">
                              <Button className="w-full bg-purple-600 hover:bg-purple-700">Primary Action</Button>
                              <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">Secondary</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Token Categories</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Global Tokens</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Foundation tokens that define your design system's core values.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <strong>Color Palette:</strong> Primary, secondary, neutral colors
                          </div>
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <strong>Typography:</strong> Font families, sizes, weights
                          </div>
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <strong>Spacing Scale:</strong> 4px, 8px, 12px, 16px, etc.
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Component Tokens</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Specific tokens that reference global tokens but are scoped to button components.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <strong>Button Colors:</strong> Primary, secondary, destructive
                          </div>
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <strong>Button Sizes:</strong> Small, medium, large
                          </div>
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <strong>Button States:</strong> Default, hover, active, disabled
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Implementation Example</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        {`/* CSS Custom Properties (Design Tokens) */
:root {
  /* Global Color Tokens */
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  
  /* Button Component Tokens */
  --button-primary-bg: var(--color-primary-500);
  --button-primary-bg-hover: var(--color-primary-600);
  --button-primary-bg-active: var(--color-primary-700);
  --button-primary-text: #ffffff;
  
  /* Spacing Tokens */
  --space-2: 8px;
  --space-4: 16px;
  --radius-md: 6px;
}

/* Button Implementation */
.button-primary {
  background-color: var(--button-primary-bg);
  color: var(--button-primary-text);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
}

.button-primary:hover {
  background-color: var(--button-primary-bg-hover);
}

/* Dark Theme Override */
[data-theme="dark"] {
  --button-primary-bg: #60a5fa;
  --button-primary-bg-hover: #3b82f6;
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Design Token Tools & Resources</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                      <div>
                        <strong>Design Tools:</strong>
                        <ul className="mt-1 space-y-1">
                          <li>• Figma Variables & Tokens</li>
                          <li>• Adobe XD Design Tokens</li>
                          <li>• Sketch Symbols & Styles</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Development:</strong>
                        <ul className="mt-1 space-y-1">
                          <li>• Style Dictionary (Amazon)</li>
                          <li>• Theo (Salesforce)</li>
                          <li>• CSS Custom Properties</li>
                        </ul>
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
                  Comprehensive accessibility guidelines following WCAG 2.2 AA standards, Visa Global Accessibility Requirements (VGAR), 
                  Carbon Design System accessibility standards, and Polaris accessibility guidelines.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">WCAG 2.2 AA Compliance</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Our button guidelines meet the latest Web Content Accessibility Guidelines (WCAG) 2.2 Level AA requirements, 
                      ensuring compliance with global accessibility standards including the Americans with Disabilities Act (ADA), 
                      European Accessibility Act, and other regional regulations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Accessibility Requirements</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Keyboard Navigation</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Tab:</strong> Move focus to button</li>
                          <li>• <strong>Space/Enter:</strong> Activate button</li>
                          <li>• <strong>Focus visible:</strong> Clear visual indicator (3:1 contrast minimum)</li>
                          <li>• <strong>Tab order:</strong> Logical sequence following content flow</li>
                          <li>• <strong>Focus management:</strong> Predictable focus behavior</li>
                          <li>• <strong>No keyboard traps:</strong> Users can navigate away</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Screen Reader Support</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Role:</strong> Announced as &quot;button&quot;</li>
                          <li>• <strong>Name:</strong> Clear, descriptive label</li>
                          <li>• <strong>State:</strong> Pressed, disabled, expanded, etc.</li>
                          <li>• <strong>Context:</strong> Purpose and outcome</li>
                          <li>• <strong>Changes:</strong> State updates announced</li>
                          <li>• <strong>Instructions:</strong> How to interact when custom</li>
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
                    <h4 className="font-semibold mb-3 text-lg">Touch Target Accessibility</h4>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg mb-4">
                      <h5 className="font-medium mb-2 text-orange-800 dark:text-orange-200">WCAG 2.2 Target Size Requirements</h5>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        Following Gestalt (Pinterest) and industry standards, touch targets must meet minimum size requirements 
                        for accessibility compliance and usability across devices.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Size Requirements</h5>
                        <ul className="text-sm space-y-2">
                          <li>• <strong>Minimum:</strong> 44×44px (iOS), 48×48dp (Android)</li>
                          <li>• <strong>WCAG 2.2:</strong> 24×24px minimum for AA compliance</li>
                          <li>• <strong>Recommended:</strong> 48×48px for optimal usability</li>
                          <li>• <strong>Spacing:</strong> 8px minimum between interactive elements</li>
                          <li>• <strong>Finger-friendly:</strong> Consider average finger size (57×57px)</li>
                        </ul>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center gap-2">
                            <Button className="min-w-[48px] min-h-[48px] bg-green-600">✓</Button>
                            <span className="text-sm">48×48px - Optimal</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button className="min-w-[44px] min-h-[44px]">✓</Button>
                            <span className="text-sm">44×44px - Minimum</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" className="min-w-[24px] min-h-[24px] text-xs">?</Button>
                            <span className="text-sm text-red-600">24×24px - WCAG AA (borderline)</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Mobile Considerations</h5>
                        <ul className="text-sm space-y-2">
                          <li>• <strong>Thumb zones:</strong> Consider reachable areas</li>
                          <li>• <strong>Edge spacing:</strong> 16px from screen edges</li>
                          <li>• <strong>Button groups:</strong> 8px spacing minimum</li>
                          <li>• <strong>Dense interfaces:</strong> Increase spacing to 12px+</li>
                          <li>• <strong>One-handed use:</strong> Place primary actions in thumb reach</li>
                        </ul>
                        <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-800 rounded">
                          <div className="text-xs font-medium mb-2">Button Group Example:</div>
                          <div className="flex gap-2">
                            <Button size="sm" className="min-w-[44px] min-h-[44px]">Save</Button>
                            <Button size="sm" variant="outline" className="min-w-[44px] min-h-[44px]">Cancel</Button>
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
                          <li>• <strong>Text contrast:</strong> 4.5:1 minimum (7:1 for AAA)</li>
                          <li>• <strong>Focus indicators:</strong> 3:1 contrast minimum</li>
                          <li>• <strong>Color independence:</strong> Don&apos;t rely solely on color</li>
                          <li>• <strong>State indicators:</strong> Multiple visual cues</li>
                          <li>• <strong>High contrast mode:</strong> System preference support</li>
                        </ul>
                        <div className="mt-2 flex gap-2">
                          <Button className="bg-blue-600 hover:bg-blue-700">Good Contrast</Button>
                          <Button className="bg-gray-300 text-gray-400 cursor-not-allowed">Poor Contrast</Button>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Responsive & Zoom Support</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Zoom support:</strong> Up to 200% without horizontal scroll</li>
                          <li>• <strong>Text scaling:</strong> Respect system font size preferences</li>
                          <li>• <strong>Reflow:</strong> Content adapts to narrow viewports</li>
                          <li>• <strong>Focus indicators:</strong> Scale with content</li>
                          <li>• <strong>Interactive spacing:</strong> Maintains touch targets when zoomed</li>
                        </ul>
                        <div className="mt-2 space-y-2">
                          <Button className="min-w-[44px] min-h-[44px]">Accessible Size</Button>
                          <Button size="sm" className="text-xs px-1 py-0 opacity-50">Avoid This</Button>
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

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">International & Global Considerations</h4>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg mb-4">
                      <h5 className="font-medium mb-2 text-purple-800 dark:text-purple-200">Visa Global Accessibility Requirements (VGAR)</h5>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Following Visa's approach to global accessibility, consider international users, different languages, 
                        cultural contexts, and varying accessibility regulations across regions.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Language & Localization</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Text expansion:</strong> Allow 200-300% space for translations</li>
                          <li>• <strong>Right-to-left (RTL):</strong> Support Arabic, Hebrew layouts</li>
                          <li>• <strong>Character encoding:</strong> UTF-8 for international characters</li>
                          <li>• <strong>Font support:</strong> Include language-specific fonts</li>
                          <li>• <strong>Cultural context:</strong> Avoid culture-specific icons/colors</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Regional Compliance</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>WCAG 2.2 AA:</strong> Global standard baseline</li>
                          <li>• <strong>ADA (USA):</strong> Americans with Disabilities Act</li>
                          <li>• <strong>EN 301 549 (EU):</strong> European accessibility standard</li>
                          <li>• <strong>DDA (Australia):</strong> Disability Discrimination Act</li>
                          <li>• <strong>JIS X 8341 (Japan):</strong> Japanese accessibility guidelines</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded">
                      <h6 className="font-medium mb-2 text-sm">Example: Multi-language Button Labels</h6>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <Button size="sm">Save (English)</Button>
                        <Button size="sm">Guardar (Spanish)</Button>
                        <Button size="sm">Enregistrer (French)</Button>
                        <Button size="sm">保存 (Chinese)</Button>
                        <Button size="sm">حفظ (Arabic)</Button>
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
        <div className="mt-6">
          <ComponentReferences
            title="References & Further Reading"
            description="Essential references for button component implementation and best practices from leading design systems."
            urls={buttonComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Button Component'
              if (url.includes('atlassian.design')) return 'Atlassian Design System - Button'
              if (url.includes('material.io')) return 'Material Design - All Buttons'
              if (url.includes('carbondesignsystem.com')) return 'Carbon Design System - Button Accessibility'
              if (url.includes('gestalt.pinterest.systems')) return 'Pinterest Gestalt - Button'
              if (url.includes('polaris.shopify.com')) return 'Shopify Polaris - Button'
              if (url.includes('design.visa.com')) return 'Visa Product Design System - Button'
              if (url.includes('base.uber.com')) return 'Uber Base Design System - Button'
              if (url.includes('apple.com')) return 'Apple Human Interface Guidelines - Buttons'
              if (url.includes('mozilla.org')) return 'MDN Web Docs - HTML Button Element'
              if (url.includes('w3.org')) return 'WAI-ARIA Authoring Practices - Button Pattern'
              return url
            }}
          />
        </div>
      </div>
    </div>
  )
}
