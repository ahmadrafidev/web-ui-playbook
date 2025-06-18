import Link from "next/link"
import { HelpCircle, Info, ExternalLink, MousePointer, Keyboard, Eye, Settings, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const tooltipComponentsUrlReference = [
  "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",
  "https://spectrum.adobe.com/page/tooltip/",
  "https://atlassian.design/components/tooltip/examples",
  "https://blueprintjs.com/docs/#core/components/tooltip",
  "https://base.uber.com/6d2425e9f/p/63fdd3-tooltip",
  "https://vercel.com/geist/tooltip",
  "https://www.radix-ui.com/primitives/docs/components/tooltip"
]

export default function TooltipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-5xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Tooltips</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Tooltips are small pop-up elements that provide contextual information about interface elements when users 
            hover over or focus on them. They enhance usability without cluttering the interface, offering just-in-time 
            information that helps users understand functionality.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Contextual</Badge>
            <Badge>Non-intrusive</Badge>
            <Badge>Accessible</Badge>
            <Badge>Progressive Enhancement</Badge>
            <Badge>Responsive</Badge>
          </div>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="types">Types & Variants</TabsTrigger>
            <TabsTrigger value="interaction">Interaction</TabsTrigger>
            <TabsTrigger value="placement">Placement & UX</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose of Tooltips */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Purpose of Tooltips</CardTitle>
                <CardDescription>
                  Understanding when and why to use tooltips in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Clarification:</strong> Explain unfamiliar icons or abbreviations</li>
                      <li>• <strong>Additional Context:</strong> Provide helpful details without cluttering UI</li>
                      <li>• <strong>Status Information:</strong> Show current state or values</li>
                      <li>• <strong>Guidance:</strong> Offer hints and tips for complex interactions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Tooltip vs Other Components</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Tooltip When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Brief, supplementary information</li>
                          <li>• Clarifying icons or controls</li>
                          <li>• Non-critical contextual details</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200">Use Popover When:</strong>
                        <ul className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                          <li>• Rich content with formatting</li>
                          <li>• Interactive elements inside</li>
                          <li>• Longer explanations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Tooltip Usage Scenarios</h4>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="relative group">
                        <Button variant="outline" size="sm">
                          <HelpCircle className="h-4 w-4" />
                        </Button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          Get help and support
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                      <div>
                        <strong>Icon Clarification:</strong> Explaining what an icon does when its meaning isn't immediately clear
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="relative group">
                        <Button variant="outline" size="sm" disabled>
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </Button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          Upgrade to premium to access settings
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                      <div>
                        <strong>Disabled State Context:</strong> Explaining why an element is disabled and how to enable it
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="relative group">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm cursor-help">
                          API Key: abc123...
                        </span>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          Full key: abc123def456ghi789
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                      <div>
                        <strong>Truncated Information:</strong> Showing full content when space is limited
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>When NOT to Use Tooltips</CardTitle>
                <CardDescription>
                  Important guidelines for avoiding tooltip overuse and misuse.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Avoid Tooltips For:</h4>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Essential information that users need to complete tasks</li>
                    <li>• Error messages or critical feedback</li>
                    <li>• Complex content that requires interaction or formatting</li>
                    <li>• Touch-only interfaces where hover doesn't exist</li>
                    <li>• Repetitive information that's already visible on screen</li>
                    <li>• Navigation or primary actions (use clear labels instead)</li>
                  </ul>
                </div>

                <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Good Tooltip Practices:</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Keep content concise and scannable</li>
                    <li>• Use for progressive disclosure of secondary information</li>
                    <li>• Provide value beyond what's already visible</li>
                    <li>• Make the interface work without tooltips</li>
                    <li>• Ensure content is accessible via keyboard</li>
                    <li>• Use consistent timing and positioning</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          {/* Tooltip Types */}
          <TabsContent value="types" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Tooltip Types & Variants</CardTitle>
                <CardDescription>
                  Different tooltip styles and behaviors for various use cases and content types.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Basic Tooltip Types</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-blue-800 dark:text-blue-200">Simple Text Tooltip</h5>
                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="relative group">
                            <Button variant="outline" size="sm">
                              <Heart className="h-4 w-4" />
                            </Button>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                              Add to favorites
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">Basic tooltip with concise label</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium text-green-800 dark:text-green-200">Descriptive Tooltip</h5>
                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="relative group">
                            <Button variant="outline" size="sm">
                              <Star className="h-4 w-4" />
                            </Button>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-48">
                              Rate this item from 1-5 stars to help other users
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">Longer explanation with additional context</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium text-purple-800 dark:text-purple-200">Status Tooltip</h5>
                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="relative group">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-sm">Connected</span>
                            </div>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                              Last synced: 2 minutes ago
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">Shows current status or last update</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Visual Variants</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Size Variants</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="relative group">
                              <Button size="sm" variant="outline">Small</Button>
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Small tooltip
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                            <span className="text-sm">Compact tooltip for small triggers</span>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="relative group">
                              <Button variant="outline">Medium</Button>
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Standard tooltip
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                            <span className="text-sm">Default size for most use cases</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="relative group">
                              <Button size="lg" variant="outline">Large</Button>
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-base rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Large tooltip with more content
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-6 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                            <span className="text-sm">Larger tooltip for detailed information</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Theme Variants</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="relative group">
                              <Button variant="outline">Dark</Button>
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Dark theme tooltip
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                            <span className="text-sm">Default dark background</span>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="relative group">
                              <Button variant="outline">Light</Button>
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-gray-900 text-sm rounded border shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Light theme tooltip
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                              </div>
                            </div>
                            <span className="text-sm">Light background with border</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="relative group">
                              <Button variant="outline">Branded</Button>
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-blue-600 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Brand color tooltip
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-blue-600"></div>
                              </div>
                            </div>
                            <span className="text-sm">Using brand colors</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tooltip Content Guidelines */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Content Guidelines</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Keep text under 8-10 words when possible</li>
                    <li>• Use sentence case, not title case</li>
                    <li>• Avoid redundant information already visible on screen</li>
                    <li>• Write in active voice and be specific</li>
                    <li>• Don't end with periods unless multiple sentences</li>
                    <li>• Use consistent terminology across your application</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          {/* Interaction Patterns */}
          <TabsContent value="interaction" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Tooltip Interaction Patterns</CardTitle>
                <CardDescription>
                  How tooltips should behave in response to user interactions across different devices and contexts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Trigger Methods</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <MousePointer className="h-4 w-4" />
                          <strong>Mouse Hover</strong>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Show after 500ms delay (default)</li>
                          <li>• Hide immediately on mouse leave</li>
                          <li>• Stay visible when hovering tooltip content</li>
                        </ul>
                        <div className="mt-2 relative group">
                          <Button size="sm" variant="outline">Hover me</Button>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity delay-500 pointer-events-none whitespace-nowrap">
                            Appears after 500ms delay
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Keyboard className="h-4 w-4" />
                          <strong>Keyboard Focus</strong>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Show immediately on focus</li>
                          <li>• Hide when focus moves away</li>
                          <li>• Work with Tab navigation</li>
                        </ul>
                        <div className="mt-2 relative group">
                          <Button size="sm" variant="outline" className="focus:ring-2 focus:ring-blue-500">Focus me</Button>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Visible on keyboard focus
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <MousePointer className="h-4 w-4" />
                          <strong>Touch Devices</strong>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Show on tap, hide on second tap</li>
                          <li>• Auto-hide after 3-5 seconds</li>
                          <li>• Consider alternative approaches</li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-2">
                          Note: Touch interactions are limited - consider showing critical info by default
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Timing Patterns</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <strong className="block mb-2">Show Delay</strong>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Immediate (0ms):</strong> Critical info, keyboard focus</li>
                          <li>• <strong>Short (300ms):</strong> Frequently used tooltips</li>
                          <li>• <strong>Medium (500ms):</strong> Standard delay (recommended)</li>
                          <li>• <strong>Long (700ms+):</strong> Secondary information</li>
                        </ul>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <strong className="block mb-2">Hide Behavior</strong>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Mouse leave:</strong> Hide immediately</li>
                          <li>• <strong>ESC key:</strong> Hide all visible tooltips</li>
                          <li>• <strong>Touch:</strong> Auto-hide after 3-5 seconds</li>
                          <li>• <strong>New tooltip:</strong> Hide previous, show new</li>
                        </ul>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <strong className="block mb-2">Transition Effects</strong>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Opacity:</strong> Fade in/out (150-300ms)</li>
                          <li>• <strong>Scale:</strong> Subtle grow effect</li>
                          <li>• <strong>Transform:</strong> Slide from trigger direction</li>
                          <li>• <strong>Avoid:</strong> Bouncy or distracting animations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Interactive Examples</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Immediate vs Delayed</h5>
                      <div className="flex gap-4">
                        <div className="relative group">
                          <Button size="sm" variant="outline">Immediate</Button>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            No delay - shows instantly
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                        <div className="relative group">
                          <Button size="sm" variant="outline">Delayed</Button>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity delay-700 pointer-events-none whitespace-nowrap">
                            700ms delay before showing
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Persistent vs Auto-hide</h5>
                      <div className="flex gap-4">
                        <div className="relative group">
                          <Button size="sm" variant="outline">Persistent</Button>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto whitespace-nowrap">
                            Stays while hovering tooltip
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground flex items-center">
                          Try hovering the tooltip content itself
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interaction Guidelines */}
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">Interaction Best Practices</h4>
                  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Never prevent users from completing tasks without tooltips</li>
                    <li>• Ensure tooltips don't interfere with clicking or selection</li>
                    <li>• Use consistent timing patterns across your application</li>
                    <li>• Test on both desktop and mobile devices</li>
                    <li>• Provide keyboard alternatives for all tooltip triggers</li>
                    <li>• Consider users with motor disabilities who may have difficulty with precise hover</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          {/* Placement & UX */}
          <TabsContent value="placement" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Tooltip Placement & UX Considerations</CardTitle>
                <CardDescription>
                  Strategic positioning and user experience guidelines for effective tooltip implementation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Positioning Options</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg text-center">
                        <div className="relative inline-block group">
                          <Button size="sm" variant="outline">Top</Button>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Tooltip above
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Default position when space allows</p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="relative group">
                          <Button size="sm" variant="outline">Left</Button>
                          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Tooltip left
                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                          </div>
                        </div>
                        <div className="relative group">
                          <Button size="sm" variant="outline">Right</Button>
                          <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Tooltip right
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg text-center">
                        <div className="relative inline-block group">
                          <Button size="sm" variant="outline">Bottom</Button>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Tooltip below
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Fallback when top is blocked</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Smart Positioning</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <strong className="block mb-2">Collision Detection</strong>
                        <ul className="text-sm space-y-1">
                          <li>• Automatically flip to opposite side when blocked</li>
                          <li>• Adjust alignment to stay within viewport</li>
                          <li>• Respect safe areas on mobile devices</li>
                          <li>• Consider scrollable container boundaries</li>
                        </ul>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <strong className="block mb-2">Priority Order</strong>
                        <ol className="text-sm space-y-1">
                          <li>1. <strong>Top:</strong> Most common, doesn't block content</li>
                          <li>2. <strong>Bottom:</strong> Good alternative to top</li>
                          <li>3. <strong>Right:</strong> For left-aligned content</li>
                          <li>4. <strong>Left:</strong> For right-aligned content</li>
                        </ol>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <strong className="block mb-2">Alignment Options</strong>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Center:</strong> Default alignment</li>
                          <li>• <strong>Start:</strong> Align with trigger start</li>
                          <li>• <strong>End:</strong> Align with trigger end</li>
                          <li>• <strong>Auto:</strong> Best fit for content</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">UX Best Practices</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3 text-green-800 dark:text-green-200">✅ Good Practices</h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-400">•</span>
                          <span><strong>Consistent spacing:</strong> Maintain 8-12px distance from trigger</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-400">•</span>
                          <span><strong>Visual hierarchy:</strong> Use subtle shadows or borders for depth</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-400">•</span>
                          <span><strong>Responsive behavior:</strong> Adapt to different screen sizes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-400">•</span>
                          <span><strong>Progressive disclosure:</strong> Show only when needed</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3 text-red-800 dark:text-red-200">❌ Avoid These Issues</h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">•</span>
                          <span><strong>Covering content:</strong> Never block important UI elements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">•</span>
                          <span><strong>Edge cutoff:</strong> Ensure tooltips fit within viewport</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">•</span>
                          <span><strong>Tooltip storms:</strong> Multiple tooltips appearing simultaneously</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">•</span>
                          <span><strong>Poor timing:</strong> Too fast or too slow interactions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mobile Considerations */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">Mobile & Touch Considerations</h4>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Consider touch target sizes (minimum 44px)</li>
                    <li>• Implement tap-to-show, tap-outside-to-hide behavior</li>
                    <li>• Provide alternative information display methods</li>
                    <li>• Test on various screen sizes and orientations</li>
                    <li>• Consider thumb reach zones for mobile interfaces</li>
                    <li>• Avoid hover-dependent functionality on touch devices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          {/* Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Tooltip Accessibility</CardTitle>
                <CardDescription>
                  Essential accessibility patterns and best practices for inclusive tooltip design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Implementation</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Eye className="h-4 w-4" />
                          <strong>aria-describedby</strong>
                        </div>
                        <p className="text-sm mb-2">Links trigger to tooltip content</p>
                        <div className="bg-gray-900 text-gray-100 p-2 rounded text-xs">
                          {`<button aria-describedby="tooltip-1">
  Save
</button>
<div role="tooltip" id="tooltip-1">
  Save your changes
</div>`}
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Eye className="h-4 w-4" />
                          <strong>role="tooltip"</strong>
                        </div>
                        <p className="text-sm mb-2">Identifies element as tooltip</p>
                        <div className="relative group">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            aria-describedby="accessible-tooltip"
                          >
                            <Info className="h-4 w-4 mr-2" />
                            Info
                          </Button>
                          <div 
                            role="tooltip" 
                            id="accessible-tooltip"
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                          >
                            Additional information about this feature
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Keyboard Navigation</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <strong className="block mb-2">Focus Management</strong>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Tab:</strong> Navigate to tooltip triggers</li>
                          <li>• <strong>Focus:</strong> Show tooltip immediately</li>
                          <li>• <strong>Blur:</strong> Hide tooltip when focus leaves</li>
                          <li>• <strong>Escape:</strong> Hide visible tooltips</li>
                        </ul>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <strong className="block mb-2">Interactive Elements</strong>
                        <ul className="text-sm space-y-1">
                          <li>• Tooltips themselves should not receive focus</li>
                          <li>• Content should be announcement-only</li>
                          <li>• Use popovers for interactive content</li>
                          <li>• Maintain logical tab order</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Screen Reader Support</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Announcement Patterns</h5>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Button 
                            size="sm" 
                            variant="outline"
                            aria-describedby="sr-tooltip-1"
                          >
                            Save Document
                          </Button>
                          <div className="text-sm">
                            <strong>Announced as:</strong> "Save Document, button, Save your current work to prevent data loss"
                          </div>
                          <div id="sr-tooltip-1" className="sr-only">
                            Save your current work to prevent data loss
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Content Guidelines</h5>
                      <ul className="text-sm space-y-2">
                        <li>• Write clear, concise descriptions</li>
                        <li>• Avoid redundant information</li>
                        <li>• Use plain language</li>
                        <li>• Include context when necessary</li>
                        <li>• Test with actual screen readers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Visual Accessibility</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Color & Contrast</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Minimum 4.5:1 contrast ratio for text</li>
                        <li>• Don't rely solely on color for meaning</li>
                        <li>• Support high contrast mode</li>
                        <li>• Test with color blindness simulators</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Motion & Animation</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Respect prefers-reduced-motion</li>
                        <li>• Keep animations subtle and purposeful</li>
                        <li>• Provide option to disable animations</li>
                        <li>• Avoid flashing or strobing effects</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Common Accessibility Mistakes</h4>
                  <div className="space-y-4">
                    <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                      <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Avoid These Mistakes</h5>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Using tooltips for essential information</li>
                        <li>• Missing aria-describedby connections</li>
                        <li>• Making tooltips focusable</li>
                        <li>• Poor color contrast</li>
                        <li>• Hover-only functionality on touch devices</li>
                        <li>• Tooltips that interfere with keyboard navigation</li>
                      </ul>
                    </div>

                    <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Best Practices</h5>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Use semantic HTML with proper ARIA</li>
                        <li>• Test with keyboard-only navigation</li>
                        <li>• Verify screen reader announcements</li>
                        <li>• Ensure sufficient color contrast</li>
                        <li>• Provide alternative access methods</li>
                        <li>• Test across different assistive technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Testing Your Tooltips</h4>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Accessibility Testing Checklist</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                      <div>
                        <strong>Keyboard Testing:</strong>
                        <ul className="mt-1 space-y-1">
                          <li>□ Can reach all triggers via Tab</li>
                          <li>□ Tooltips show on focus</li>
                          <li>□ ESC dismisses tooltips</li>
                          <li>□ Focus indicators are visible</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Screen Reader Testing:</strong>
                        <ul className="mt-1 space-y-1">
                          <li>□ Content is announced with trigger</li>
                          <li>□ Role is identified correctly</li>
                          <li>□ No redundant information</li>
                          <li>□ Clear, understandable descriptions</li>
                        </ul>
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
                <CardDescription>Essential accessibility attributes and patterns for tooltips.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    {`<!-- Basic accessible tooltip -->
<button aria-describedby="tooltip-1">
  <svg aria-hidden="true">...</svg>
  Help
</button>
<div role="tooltip" id="tooltip-1">
  Get help with this feature
</div>

<!-- Icon-only button with tooltip -->
<button aria-label="Add to favorites" aria-describedby="tooltip-2">
  <svg aria-hidden="true">...</svg>
</button>
<div role="tooltip" id="tooltip-2">
  Click to add this item to your favorites list
</div>

<!-- Complex trigger with status -->
<div aria-describedby="tooltip-3">
  <span>Connection Status</span>
  <div aria-hidden="true">🟢</div>
</div>
<div role="tooltip" id="tooltip-3">
  Connected to server. Last sync: 2 minutes ago
</div>

<!-- Disabled element with explanation -->
<button disabled aria-describedby="tooltip-4">
  Upload File
</button>
<div role="tooltip" id="tooltip-4">
  File upload is disabled. Upgrade your plan to enable this feature.
</div>`}
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
                {tooltipComponentsUrlReference.map((url, index) => {
                  const getTitle = (url: string) => {
                    if (url.includes('w3.org')) return 'WAI-ARIA Authoring Practices - Tooltip Pattern'
                    if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Tooltip Component'
                    if (url.includes('atlassian.design')) return 'Atlassian Design System - Tooltip Examples'
                    if (url.includes('blueprintjs.com')) return 'Blueprint.js - Tooltip Component'
                    if (url.includes('base.uber.com')) return 'Uber Base Design - Tooltip Component'
                    if (url.includes('vercel.com')) return 'Vercel Geist Design System - Tooltip'
                    if (url.includes('radix-ui.com')) return 'Radix UI - Tooltip Primitive'
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