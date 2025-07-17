"use client"

import { HelpCircle, Info, MousePointer, Keyboard, Eye, Settings, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"  

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
  const { MobileWarning } = useMobileWarning()

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Tooltips</h2>
            <EditButton filePath="app/playground/tooltips/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Tooltips are small pop-up elements that provide contextual information about interface elements when users 
            hover over or focus on them. They enhance usability without cluttering the interface, offering just-in-time 
            information that helps users understand functionality.
          </p>
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
                        <strong>Icon Clarification:</strong> Explaining what an icon does when its meaning isn&apos;t immediately clear
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
                    <li>• Touch-only interfaces where hover doesn&apos;t exist</li>
                    <li>• Repetitive information that&apos;s already visible on screen</li>
                    <li>• Navigation or primary actions (use clear labels instead)</li>
                  </ul>
                </div>

                <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Good Tooltip Practices:</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Keep content concise and scannable</li>
                    <li>• Use for progressive disclosure of secondary information</li>
                    <li>• Provide value beyond what&apos;s already visible</li>
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
                    <li>• Don&apos;t end with periods unless multiple sentences</li>
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
                    <li>• Ensure tooltips don&apos;t interfere with clicking or selection</li>
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
                  Strategic positioning, collision detection, and user experience guidelines for effective tooltip implementation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Basic Positioning Options */}
                  <div>
                  <h4 className="font-semibold mb-4 text-lg">Core Positioning Options</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-medium mb-3 text-base">Primary Positions</h5>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg text-center">
                          <div className="relative inline-block group mb-2">
                            <Button size="sm" variant="outline">Top (Default)</Button>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                              Preferred position - doesn't block content
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                          <p className="text-xs text-muted-foreground">Most common choice - keeps content visible</p>
                      </div>

                        <div className="flex justify-between items-center gap-4">
                          <div className="relative group flex-1 text-center">
                            <Button size="sm" variant="outline" className="w-full">Left</Button>
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                              Side placement
                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                          </div>
                            <p className="text-xs text-muted-foreground mt-1">Right-aligned content</p>
                        </div>
                          <div className="relative group flex-1 text-center">
                            <Button size="sm" variant="outline" className="w-full">Right</Button>
                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                              Side placement
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                          </div>
                            <p className="text-xs text-muted-foreground mt-1">Left-aligned content</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg text-center">
                          <div className="relative inline-block group mb-2">
                          <Button size="sm" variant="outline">Bottom</Button>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                              Fallback position when top is blocked
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
                          </div>
                        </div>
                          <p className="text-xs text-muted-foreground">Secondary choice for constrained spaces</p>
                      </div>
                    </div>
                  </div>

                  <div>
                      <h5 className="font-medium mb-3 text-base">Alignment Variations</h5>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                          <strong className="block mb-2 text-sm">Center Alignment (Default)</strong>
                          <div className="flex justify-center">
                            <div className="relative group">
                              <Button size="sm" variant="outline">Center</Button>
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-blue-600 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Centered on trigger
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-blue-600"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 border rounded-lg">
                          <strong className="block mb-2 text-sm">Start Alignment</strong>
                          <div className="flex justify-start">
                            <div className="relative group">
                              <Button size="sm" variant="outline">Start</Button>
                              <div className="absolute bottom-full left-0 mb-2 px-3 py-1 bg-green-600 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Aligned to start edge
                                <div className="absolute top-full left-4 border-4 border-transparent border-t-green-600"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 border rounded-lg">
                          <strong className="block mb-2 text-sm">End Alignment</strong>
                          <div className="flex justify-end">
                            <div className="relative group">
                              <Button size="sm" variant="outline">End</Button>
                              <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-purple-600 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Aligned to end edge
                                <div className="absolute top-full right-4 border-4 border-transparent border-t-purple-600"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Smart Positioning & Collision Detection */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Smart Positioning & Collision Detection</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-3">Automatic Adjustments</h5>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <strong className="block mb-2 text-sm">Viewport Boundaries</strong>
                        <ul className="text-sm space-y-1">
                            <li>• Flip to opposite side when blocked</li>
                            <li>• Slide within bounds when partially cut off</li>
                            <li>• Maintain minimum distance from edges (8px)</li>
                          <li>• Respect safe areas on mobile devices</li>
                        </ul>
                      </div>

                      <div className="p-3 border rounded-lg">
                          <strong className="block mb-2 text-sm">Container Constraints</strong>
                          <ul className="text-sm space-y-1">
                            <li>• Consider scrollable parent boundaries</li>
                            <li>• Respect modal and dialog boundaries</li>
                            <li>• Account for overflow: hidden containers</li>
                            <li>• Handle fixed and sticky positioned elements</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-3">Priority Fallback Order</h5>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
                          <strong className="block mb-2 text-sm text-blue-800 dark:text-blue-200">Vertical Preferences</strong>
                          <ol className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                            <li>1. <strong>Top:</strong> Primary choice (doesn't block content)</li>
                            <li>2. <strong>Bottom:</strong> Secondary (when top is blocked)</li>
                            <li>3. <strong>Top-start/end:</strong> Adjusted alignment</li>
                            <li>4. <strong>Bottom-start/end:</strong> Last resort vertical</li>
                        </ol>
                      </div>

                        <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-900/20">
                          <strong className="block mb-2 text-sm text-green-800 dark:text-green-200">Horizontal Preferences</strong>
                          <ol className="text-sm space-y-1 text-green-700 dark:text-green-300">
                            <li>1. <strong>Right:</strong> For left-aligned content</li>
                            <li>2. <strong>Left:</strong> For right-aligned content</li>
                            <li>3. <strong>Right-start/end:</strong> Adjusted alignment</li>
                            <li>4. <strong>Left-start/end:</strong> Final horizontal option</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacing & Visual Design */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Spacing & Visual Design</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2 text-sm">Distance from Trigger</h5>
                        <ul className="text-sm space-y-1">
                        <li>• <strong>Minimum:</strong> 4px (very tight spaces)</li>
                        <li>• <strong>Standard:</strong> 8px (recommended)</li>
                        <li>• <strong>Comfortable:</strong> 12px (spacious layouts)</li>
                        <li>• <strong>Maximum:</strong> 16px (avoid larger gaps)</li>
                        </ul>
                      </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2 text-sm">Visual Depth</h5>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Shadow:</strong> 0 4px 12px rgba(0,0,0,0.15)</li>
                        <li>• <strong>Border:</strong> 1px solid for light themes</li>
                        <li>• <strong>Z-index:</strong> Higher than page content</li>
                        <li>• <strong>Background:</strong> Solid color, never transparent</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2 text-sm">Arrow Indicators</h5>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Size:</strong> 6-8px triangle</li>
                        <li>• <strong>Position:</strong> Centered on trigger</li>
                        <li>• <strong>Color:</strong> Match tooltip background</li>
                        <li>• <strong>Border:</strong> Include border if tooltip has one</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Context-Specific Placement */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Context-Specific Placement Strategies</h4>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3 text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Toolbar & Navigation
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>• Top position for header toolbars</li>
                          <li>• Bottom position for footer toolbars</li>
                          <li>• Side positions for vertical navigation</li>
                          <li>• Consider dropdown menu overlaps</li>
                      </ul>
                        <div className="mt-3 text-center">
                          <div className="relative group inline-block">
                            <Button size="sm" variant="outline">
                              <Settings className="h-4 w-4" />
                            </Button>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                              Settings
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3 text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Form Elements
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>• Right position for input field help</li>
                          <li>• Top position for field labels</li>
                          <li>• Avoid blocking form validation messages</li>
                          <li>• Consider multi-column form layouts</li>
                      </ul>
                        <div className="mt-3">
                          <div className="flex items-center gap-2">
                            <input 
                              type="text" 
                              placeholder="Username" 
                              className="px-3 py-2 border rounded text-sm flex-1"
                            />
                            <div className="relative group">
                              <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-48">
                                Username must be 3-20 characters, letters and numbers only
                                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                              </div>
                            </div>
                    </div>
                  </div>
                </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3 text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          Data Tables
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>• Top position for column headers</li>
                          <li>• Dynamic positioning for cell content</li>
                          <li>• Consider horizontal scrolling</li>
                          <li>• Handle sticky headers and columns</li>
                        </ul>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3 text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          Cards & Lists
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>• Avoid covering action buttons</li>
                          <li>• Consider card boundaries and spacing</li>
                          <li>• Handle grid and masonry layouts</li>
                          <li>• Account for card hover states</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* UX Best Practices */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">UX Best Practices & Common Pitfalls</h4>
                  <div className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <h5 className="font-medium mb-3 text-green-800 dark:text-green-200">✅ Effective Practices</h5>
                        <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
                          <li>• <strong>Predictable positioning:</strong> Use consistent placement patterns</li>
                          <li>• <strong>Contextual awareness:</strong> Consider surrounding UI elements</li>
                          <li>• <strong>Performance:</strong> Cache position calculations when possible</li>
                          <li>• <strong>Graceful degradation:</strong> Ensure functionality without tooltips</li>
                          <li>• <strong>Cross-device testing:</strong> Verify on different screen sizes</li>
                          <li>• <strong>Z-index management:</strong> Maintain proper stacking order</li>
                        </ul>
                      </div>

                      <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <h5 className="font-medium mb-3 text-red-800 dark:text-red-200">❌ Common Mistakes</h5>
                        <ul className="text-sm space-y-2 text-red-700 dark:text-red-300">
                          <li>• <strong>Blocking interactions:</strong> Tooltips covering clickable elements</li>
                          <li>• <strong>Edge overflow:</strong> Content cut off at viewport boundaries</li>
                          <li>• <strong>Tooltip storms:</strong> Multiple tooltips appearing simultaneously</li>
                          <li>• <strong>Poor timing:</strong> Tooltips appearing too quickly or slowly</li>
                          <li>• <strong>Inconsistent behavior:</strong> Different positioning logic per component</li>
                          <li>• <strong>Mobile neglect:</strong> Not adapting for touch devices</li>
                        </ul>
                      </div>
                    </div>

                    {/* Performance Considerations */}
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Performance Optimization</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                        <div>
                          <strong>Position Calculation:</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• Debounce scroll and resize events</li>
                            <li>• Use requestAnimationFrame for smooth updates</li>
                            <li>• Cache element dimensions when possible</li>
                            <li>• Avoid forced synchronous layouts</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Rendering Optimization:</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• Use transform for positioning (GPU acceleration)</li>
                            <li>• Minimize DOM manipulations</li>
                            <li>• Implement tooltip pooling for large lists</li>
                            <li>• Use CSS containment when appropriate</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile & Touch Considerations */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">Mobile & Touch Device Adaptations</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2 text-purple-700 dark:text-purple-300">Touch-Specific Behaviors</h5>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• <strong>Tap to show:</strong> Single tap reveals tooltip</li>
                        <li>• <strong>Tap outside to hide:</strong> Touch anywhere else to dismiss</li>
                        <li>• <strong>Auto-dismissal:</strong> Hide after 3-5 seconds automatically</li>
                        <li>• <strong>Larger touch targets:</strong> Ensure 44px minimum size</li>
                        <li>• <strong>Thumb-friendly zones:</strong> Consider reachability on large screens</li>
                  </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-purple-700 dark:text-purple-300">Alternative Approaches</h5>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• <strong>Expand on tap:</strong> Show additional details inline</li>
                        <li>• <strong>Modal dialogs:</strong> For complex information</li>
                        <li>• <strong>Bottom sheets:</strong> Native mobile pattern</li>
                        <li>• <strong>Progressive disclosure:</strong> Show info by default when critical</li>
                        <li>• <strong>Icon labels:</strong> Always visible text alternatives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            {/* Core Accessibility Fundamentals */}
            <Card>
              <CardHeader>
                <CardTitle>Tooltip Accessibility Fundamentals</CardTitle>
                <CardDescription>
                  Essential ARIA patterns, keyboard navigation, and assistive technology support for inclusive tooltip design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* ARIA Implementation */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">ARIA Implementation & Semantic Markup</h4>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Eye className="h-4 w-4 text-blue-600" />
                          <strong className="text-blue-800 dark:text-blue-200">aria-describedby</strong>
                        </div>
                        <p className="text-sm mb-3 text-blue-700 dark:text-blue-300">
                          Creates semantic relationship between trigger and tooltip content
                        </p>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono">
                          {`<button aria-describedby="help-tooltip">
  <HelpIcon aria-hidden="true" />
  Help
</button>
<div role="tooltip" id="help-tooltip">
  Get help with this feature
</div>`}
                        </div>
                        <div className="mt-3">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            aria-describedby="demo-tooltip-1"
                            className="focus:ring-2 focus:ring-blue-500"
                          >
                            <HelpCircle className="h-4 w-4 mr-2" aria-hidden="true" />
                            Demo Button
                          </Button>
                          <div 
                            role="tooltip" 
                            id="demo-tooltip-1"
                            className="sr-only group-hover:not-sr-only group-focus:not-sr-only"
                          >
                            This button provides helpful information
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Eye className="h-4 w-4 text-green-600" />
                          <strong className="text-green-800 dark:text-green-200">role="tooltip"</strong>
                        </div>
                        <p className="text-sm mb-3 text-green-700 dark:text-green-300">
                          Explicitly identifies element as tooltip for assistive technologies
                        </p>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono">
                          {`<div 
  role="tooltip" 
  id="status-tooltip"
  aria-live="polite"
>
  System status: Online
</div>`}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Keyboard className="h-4 w-4 text-purple-600" />
                          <strong className="text-purple-800 dark:text-purple-200">Icon-Only Buttons</strong>
                        </div>
                        <p className="text-sm mb-3 text-purple-700 dark:text-purple-300">
                          Require both aria-label and aria-describedby for complete accessibility
                        </p>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono">
                          {`<button 
  aria-label="Add to favorites"
  aria-describedby="fav-tooltip"
>
  <StarIcon aria-hidden="true" />
</button>
<div role="tooltip" id="fav-tooltip">
  Click to save this item
</div>`}
                        </div>
                        <div className="mt-3 flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            aria-label="Add to favorites"
                            aria-describedby="demo-tooltip-2"
                            className="focus:ring-2 focus:ring-purple-500"
                          >
                            <Star className="h-4 w-4" aria-hidden="true" />
                          </Button>
                          <div className="relative group">
                            <Button 
                              size="sm" 
                              variant="outline"
                              aria-describedby="demo-tooltip-3"
                              className="focus:ring-2 focus:ring-purple-500"
                            >
                              <Settings className="h-4 w-4" aria-hidden="true" />
                            </Button>
                            <div 
                              role="tooltip" 
                              id="demo-tooltip-3"
                              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50"
                            >
                              Open settings panel
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Info className="h-4 w-4 text-orange-600" />
                          <strong className="text-orange-800 dark:text-orange-200">Dynamic Content</strong>
                        </div>
                        <p className="text-sm mb-3 text-orange-700 dark:text-orange-300">
                          Use aria-live for content that updates dynamically
                        </p>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono">
                          {`<div 
  role="tooltip" 
  aria-live="polite"
  aria-atomic="true"
>
  Last saved: {timestamp}
</div>`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keyboard Navigation */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Keyboard Navigation & Focus Management</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-3 text-base">Essential Keyboard Behaviors</h5>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Keyboard className="h-4 w-4" />
                            <strong className="text-sm">Tab Navigation</strong>
                          </div>
                          <ul className="text-sm space-y-1 ml-6">
                            <li>• All tooltip triggers must be reachable via Tab key</li>
                            <li>• Maintain logical tab order (left-to-right, top-to-bottom)</li>
                            <li>• Skip hidden or disabled tooltip triggers</li>
                            <li>• Ensure visible focus indicators</li>
                          </ul>
                        </div>

                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Eye className="h-4 w-4" />
                            <strong className="text-sm">Focus Behavior</strong>
                          </div>
                          <ul className="text-sm space-y-1 ml-6">
                            <li>• Show tooltip immediately on focus (no delay)</li>
                            <li>• Hide tooltip when focus moves away (blur)</li>
                            <li>• Never trap focus inside tooltips</li>
                            <li>• Support both mouse and keyboard equally</li>
                          </ul>
                        </div>

                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Keyboard className="h-4 w-4" />
                            <strong className="text-sm">Escape Key</strong>
                          </div>
                          <ul className="text-sm space-y-1 ml-6">
                            <li>• Hide all visible tooltips when Escape is pressed</li>
                            <li>• Return focus to previously focused element</li>
                            <li>• Work consistently across all tooltip instances</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-3 text-base">Interactive Demonstration</h5>
                      <div className="p-4 border-2 border-dashed rounded-lg">
                        <p className="text-sm mb-3 text-muted-foreground">
                          Try using Tab key to navigate through these buttons:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="relative group">
                              <Button 
                                size="sm" 
                                variant="outline"
                                aria-describedby={`keyboard-demo-${num}`}
                                className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              >
                                Button {num}
                              </Button>
                              <div 
                                role="tooltip" 
                                id={`keyboard-demo-${num}`}
                                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50"
                              >
                                Tooltip for button {num}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Notice how tooltips appear on focus and keyboard navigation works seamlessly.
                        </p>
                      </div>

                      <div className="mt-4 p-3 border rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                        <h6 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Important Notes</h6>
                        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                          <li>• Tooltips themselves should never receive focus</li>
                          <li>• Content should be descriptive, not interactive</li>
                          <li>• Use popovers for interactive content instead</li>
                          <li>• Test with keyboard-only navigation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen Reader Support */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Screen Reader Support & Content Guidelines</h4>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Announcement Patterns
                        </h5>
                        <div className="space-y-3">
                          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="flex items-center gap-3 mb-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                aria-describedby="sr-example-1"
                              >
                                Save Document
                              </Button>
                              <div id="sr-example-1" className="sr-only">
                                Save your current work to prevent data loss
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              <strong>Screen reader announces:</strong><br />
                              "Save Document, button, Save your current work to prevent data loss"
                            </p>
                          </div>

                          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="flex items-center gap-3 mb-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                aria-label="Close dialog"
                                aria-describedby="sr-example-2"
                              >
                                <span aria-hidden="true">×</span>
                              </Button>
                              <div id="sr-example-2" className="sr-only">
                                Press to close this dialog and return to previous page
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              <strong>Screen reader announces:</strong><br />
                              "Close dialog, button, Press to close this dialog and return to previous page"
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Content Writing Guidelines
                        </h5>
                        <div className="space-y-2">
                          <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded">
                            <strong className="text-green-800 dark:text-green-200 text-sm">✅ Good:</strong>
                            <p className="text-sm text-green-700 dark:text-green-300">"Save your current work to prevent data loss"</p>
                          </div>
                          <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded">
                            <strong className="text-red-800 dark:text-red-200 text-sm">❌ Poor:</strong>
                            <p className="text-sm text-red-700 dark:text-red-300">"Click here to save"</p>
                          </div>
                          <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded">
                            <strong className="text-green-800 dark:text-green-200 text-sm">✅ Good:</strong>
                            <p className="text-sm text-green-700 dark:text-green-300">"Upload files up to 10MB in size"</p>
                          </div>
                          <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded">
                            <strong className="text-red-800 dark:text-red-200 text-sm">❌ Poor:</strong>
                            <p className="text-sm text-red-700 dark:text-red-300">"Upload files"</p>
                          </div>
                        </div>
                        
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                          <h6 className="font-medium text-blue-800 dark:text-blue-200 text-sm mb-2">Writing Checklist:</h6>
                          <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                            <li>• Use action-oriented, specific language</li>
                            <li>• Include context and constraints when relevant</li>
                            <li>• Avoid redundant information already visible</li>
                            <li>• Keep under 125 characters when possible</li>
                            <li>• Test pronunciation with screen readers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Accessibility */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Visual Accessibility & Inclusive Design</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Color & Contrast
                      </h5>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>AA Standard:</strong> 4.5:1 contrast ratio minimum</li>
                        <li>• <strong>AAA Standard:</strong> 7:1 ratio for enhanced accessibility</li>
                        <li>• <strong>Large Text:</strong> 3:1 ratio for 18pt+ or 14pt+ bold</li>
                        <li>• <strong>Color Independence:</strong> Never rely solely on color</li>
                      </ul>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gray-900 rounded"></div>
                          <div className="w-4 h-4 bg-white border rounded"></div>
                          <span className="text-xs">15.8:1 (Excellent)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-blue-600 rounded"></div>
                          <div className="w-4 h-4 bg-white rounded"></div>
                          <span className="text-xs">5.9:1 (Good)</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Motion & Animation
                      </h5>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Respect prefers-reduced-motion</strong></li>
                        <li>• <strong>Subtle transitions:</strong> 150-300ms duration</li>
                        <li>• <strong>No autoplay:</strong> User-initiated only</li>
                        <li>• <strong>Pause controls:</strong> For longer animations</li>
                      </ul>
                      <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <code className="text-xs">
                          {`@media (prefers-reduced-motion) {
  .tooltip { transition: none; }
}`}
                        </code>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        Typography & Sizing
                      </h5>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Minimum 16px:</strong> Base font size</li>
                        <li>• <strong>44px touch targets:</strong> Mobile minimum</li>
                        <li>• <strong>Readable fonts:</strong> Avoid decorative typefaces</li>
                        <li>• <strong>Zoom support:</strong> Up to 200% zoom</li>
                      </ul>
                      <div className="mt-3 flex flex-col gap-1">
                        <div className="text-xs p-1 bg-gray-100 dark:bg-gray-800 rounded">12px - Too small</div>
                        <div className="text-sm p-1 bg-green-100 dark:bg-green-900/20 rounded">14px - Minimum</div>
                        <div className="text-base p-1 bg-green-100 dark:bg-green-900/20 rounded">16px - Recommended</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Mistakes & Best Practices */}
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Mistakes & Best Practices</CardTitle>
                <CardDescription>
                  Learn from common accessibility pitfalls and implement proven solutions for inclusive tooltip design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="p-6 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
                      <span className="text-xl">❌</span>
                      Critical Accessibility Mistakes
                    </h5>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-red-700 dark:text-red-300 text-sm">Essential Information in Tooltips</strong>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          Never put information users need to complete tasks in tooltips only
                        </p>
                      </div>
                      <div>
                        <strong className="text-red-700 dark:text-red-300 text-sm">Missing ARIA Connections</strong>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          Forgetting aria-describedby breaks screen reader functionality
                        </p>
                      </div>
                      <div>
                        <strong className="text-red-700 dark:text-red-300 text-sm">Focusable Tooltips</strong>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          Making tooltips focusable disrupts keyboard navigation flow
                        </p>
                      </div>
                      <div>
                        <strong className="text-red-700 dark:text-red-300 text-sm">Hover-Only Functionality</strong>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          Excluding keyboard users by requiring hover interactions
                        </p>
                      </div>
                      <div>
                        <strong className="text-red-700 dark:text-red-300 text-sm">Poor Color Contrast</strong>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          Using insufficient contrast ratios makes content unreadable
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                    <h5 className="font-medium text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                      <span className="text-xl">✅</span>
                      Accessibility Best Practices
                    </h5>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-green-700 dark:text-green-300 text-sm">Progressive Enhancement</strong>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                          Interface works completely without tooltips, enhanced with them
                        </p>
                      </div>
                      <div>
                        <strong className="text-green-700 dark:text-green-300 text-sm">Semantic HTML + ARIA</strong>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                          Use proper roles, attributes, and relationships consistently
                        </p>
                      </div>
                      <div>
                        <strong className="text-green-700 dark:text-green-300 text-sm">Multi-Modal Access</strong>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                          Support mouse, keyboard, touch, and assistive technologies equally
                        </p>
                      </div>
                      <div>
                        <strong className="text-green-700 dark:text-green-300 text-sm">Clear Content Strategy</strong>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                          Write concise, actionable descriptions that add real value
                        </p>
                      </div>
                      <div>
                        <strong className="text-green-700 dark:text-green-300 text-sm">Comprehensive Testing</strong>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                          Test with real users and multiple assistive technologies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testing Framework */}
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h5 className="font-medium mb-4 text-blue-800 dark:text-blue-200">
                    Comprehensive Accessibility Testing Framework
                  </h5>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h6 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Automated Testing</h6>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>□ Run axe-core accessibility tests</li>
                        <li>□ Check WAVE browser extension</li>
                        <li>□ Validate HTML semantics</li>
                        <li>□ Test color contrast ratios</li>
                        <li>□ Verify ARIA attributes</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Manual Testing</h6>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>□ Navigate using only keyboard</li>
                        <li>□ Test with screen reader (NVDA/JAWS)</li>
                        <li>□ Verify focus indicators visible</li>
                        <li>□ Check tooltip announcements</li>
                        <li>□ Test at 200% browser zoom</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-medium text-blue-700 dark:text-blue-300 mb-2">User Testing</h6>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>□ Test with actual disabled users</li>
                        <li>□ Gather feedback on content clarity</li>
                        <li>□ Observe navigation patterns</li>
                        <li>□ Document pain points</li>
                        <li>□ Iterate based on real usage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Code Examples */}
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Implementation Examples</CardTitle>
                <CardDescription>
                  Copy-paste ready code examples with proper ARIA attributes and accessibility patterns.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div>
                    <h5 className="font-medium mb-3">Basic Tooltip Implementation</h5>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        <code>{`<!-- Basic accessible tooltip -->
<button 
  aria-describedby="tooltip-basic"
  class="focus:ring-2 focus:ring-blue-500"
>
  <svg aria-hidden="true"><!-- icon --></svg>
  Help
</button>
<div 
  role="tooltip" 
  id="tooltip-basic"
  class="sr-only group-hover:not-sr-only group-focus:not-sr-only"
>
  Get help with this feature
</div>

<!-- Icon-only button with comprehensive labeling -->
<button 
  aria-label="Add to favorites"
  aria-describedby="tooltip-icon"
  class="focus:ring-2 focus:ring-offset-2"
>
  <svg aria-hidden="true"><!-- star icon --></svg>
</button>
<div role="tooltip" id="tooltip-icon">
  Click to save this item to your favorites list
</div>

<!-- Status indicator with live updates -->
<div 
  aria-describedby="tooltip-status"
  role="status"
  aria-live="polite"
>
  <span>Connection Status</span>
  <span aria-hidden="true" class="status-indicator">🟢</span>
</div>
<div 
  role="tooltip" 
  id="tooltip-status"
  aria-live="polite"
  aria-atomic="true"
>
  Connected to server. Last sync: 2 minutes ago
</div>

<!-- Disabled element with explanation -->
<div class="tooltip-wrapper">
  <button 
    disabled 
    aria-describedby="tooltip-disabled"
    class="opacity-50 cursor-not-allowed"
  >
    Upload File
  </button>
  <div role="tooltip" id="tooltip-disabled">
    File upload is disabled. 
    <a href="/upgrade">Upgrade your plan</a> to enable this feature.
  </div>
</div>

<!-- Form field with contextual help -->
<div class="form-field">
  <label for="username">Username</label>
  <input 
    type="text" 
    id="username"
    aria-describedby="username-help username-requirements"
    class="focus:ring-2 focus:ring-blue-500"
  />
  <button 
    type="button"
    aria-describedby="username-help"
    class="help-button"
  >
    <svg aria-hidden="true"><!-- help icon --></svg>
    <span class="sr-only">Help with username requirements</span>
  </button>
  <div role="tooltip" id="username-help">
    Username must be 3-20 characters, letters and numbers only
  </div>
</div>`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-3">CSS for Accessible Animations</h5>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        <code>{`/* Respect user motion preferences */
.tooltip {
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 200ms ease, transform 200ms ease;
  pointer-events: none;
}

.tooltip.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .tooltip {
    transition: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .tooltip {
    border: 2px solid;
    background: Canvas;
    color: CanvasText;
  }
}

/* Focus indicators */
.tooltip-trigger:focus {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.tooltip-trigger:focus-visible {
  outline-style: solid;
}

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-3">JavaScript Accessibility Helpers</h5>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        <code>{`// Keyboard event handling
function handleKeyboardEvents(event) {
  switch(event.key) {
    case 'Escape':
      hideAllTooltips();
      break;
    case 'Tab':
      // Let browser handle focus, tooltip follows automatically
      break;
  }
}

// Generate unique IDs for ARIA relationships
function generateTooltipId(trigger) {
  return \`tooltip-\${trigger.id || Math.random().toString(36).substr(2, 9)}\`;
}

// Screen reader announcement helper
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Check if user prefers reduced motion
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Accessibility validation
function validateTooltipAccessibility(trigger, tooltip) {
  const issues = [];
  
  if (!trigger.getAttribute('aria-describedby')) {
    issues.push('Missing aria-describedby attribute');
  }
  
  if (!tooltip.getAttribute('role') === 'tooltip') {
    issues.push('Missing role="tooltip" attribute');
  }
  
  if (!tooltip.id) {
    issues.push('Tooltip missing required ID');
  }
  
  return issues;
}`}</code>
                      </pre>
                    </div>
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
            description="Comprehensive resources for tooltip component implementation and accessibility."
            urls={tooltipComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('w3.org')) return 'WAI-ARIA Authoring Practices - Tooltip Pattern'
              if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Tooltip Component'
              if (url.includes('atlassian.design')) return 'Atlassian Design System - Tooltip Examples'
              if (url.includes('blueprintjs.com')) return 'Blueprint.js - Tooltip Component'
              if (url.includes('base.uber.com')) return 'Uber Base Design - Tooltip Component'
              if (url.includes('vercel.com')) return 'Vercel Geist Design System - Tooltip'
              if (url.includes('radix-ui.com')) return 'Radix UI - Tooltip Primitive'
              return url
            }}
          />
        </div>
      </div>
    </div>
  )
} 