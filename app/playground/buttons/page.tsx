"use client"

import { Plus, Loader2, CheckCircle, AlertCircle, Settings, Users, Shield, Eye, Command, Menu as MenuIcon, Filter, Download, Upload, Search, X, Check, Star, Heart, Share, Trash2, Edit3, Copy, MoreHorizontal, Home, User, HelpCircle, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Buttons</h1>
              <p className="text-lg text-muted-foreground">
                Foundational interactive elements that enable user actions and workflow navigation.
              </p>
            </div>
            <EditButton filePath="app/playground/buttons/page.tsx" />
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="implementation">Code</TabsTrigger>
            <TabsTrigger value="accessibility">A11y</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Purpose of Buttons</CardTitle>
                <CardDescription>
                  Understanding the core purpose and benefits of button components in user interfaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Trigger Actions</h4>
                    <p className="text-sm text-muted-foreground">
                      Enable users to initiate functions, submit data, and perform operations with clear affordances.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Navigate Workflows</h4>
                    <p className="text-sm text-muted-foreground">
                      Guide users through processes, open dialogs, and control application state changes.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Provide Feedback</h4>
                    <p className="text-sm text-muted-foreground">
                      Communicate system states, loading progress, and action outcomes to users.
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
                          <strong className="text-sm">Form Submission:</strong>
                          <p className="text-xs text-muted-foreground">Submit forms, save data, and validate user input</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">State Management:</strong>
                          <p className="text-xs text-muted-foreground">Toggle features, switch modes, and control application state</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Navigation Control:</strong>
                          <p className="text-xs text-muted-foreground">Open overlays, navigate between views, and control user flow</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Process Control:</strong>
                          <p className="text-xs text-muted-foreground">Start, stop, pause operations and manage workflows</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">When to Use Buttons</CardTitle>
                <CardDescription>
                  Understanding the appropriate contexts for button components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <strong className="text-green-800 dark:text-green-200">Use Buttons When:</strong>
                      </div>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Performing actions (Save, Delete, Submit)</li>
                        <li>• State changes (Toggle features, switch modes)</li>
                        <li>• Process control (Start, stop, pause operations)</li>
                        <li>• Opening overlays (Modals, dialogs, popovers)</li>
                        <li>• Form submission and validation</li>
                        <li>• API calls and data operations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="flex items-center gap-2 mb-3">
                        <X className="h-5 w-5 text-red-600" />
                        <strong className="text-red-800 dark:text-red-200">Avoid Buttons When:</strong>
                      </div>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Navigation between pages or sections</li>
                        <li>• Opening external websites or resources</li>
                        <li>• Downloading content or files</li>
                        <li>• Jumping to page sections or anchors</li>
                        <li>• Inline content within text flows</li>
                        <li>• Reference links to documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Button vs Alternatives</h4>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Button vs Link:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use buttons for actions that change application state. Use links for navigation 
                          and accessing external resources.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Button vs Toggle/Switch:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use buttons for actions requiring confirmation. Use toggles for immediate 
                          state changes and settings that take effect instantly.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Button vs Menu Item:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use buttons for primary actions visible on the interface. Use menu items 
                          for secondary actions grouped within dropdowns or context menus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Primary</Badge>
                    Main Actions
                  </CardTitle>
                  <CardDescription>
                    Primary buttons for the most important actions users can take
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Button className="w-full">Save Changes</Button>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download File
                      </Button>
                      <Button className="w-full" disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Best for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Form submissions</li>
                      <li>• Primary CTAs</li>
                      <li>• Confirmation actions</li>
                      <li>• Workflow progression</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Secondary</Badge>
                    Supporting Actions
                  </CardTitle>
                  <CardDescription>
                    Secondary and tertiary buttons for supporting actions and alternatives
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full">Cancel</Button>
                      <Button variant="secondary" className="w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                      <Button variant="ghost" className="w-full">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Best for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Cancel actions</li>
                      <li>• Secondary options</li>
                      <li>• Subtle interactions</li>
                      <li>• Supporting workflows</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Button vs Alternatives Comparison</CardTitle>
                <CardDescription>
                  Understanding when to use buttons over other interactive components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Component</th>
                        <th className="text-left p-3 font-medium">Purpose</th>
                        <th className="text-left p-3 font-medium">Interaction</th>
                        <th className="text-left p-3 font-medium">Navigation</th>
                        <th className="text-left p-3 font-medium">Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3">
                          <Badge variant="default">Button</Badge>
                        </td>
                        <td className="p-3">Trigger actions</td>
                        <td className="p-3">✅ State change</td>
                        <td className="p-3">❌ No navigation</td>
                        <td className="p-3">Submit forms, toggle features</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="secondary">Link</Badge>
                        </td>
                        <td className="p-3">Navigate</td>
                        <td className="p-3">❌ No state change</td>
                        <td className="p-3">✅ Navigation</td>
                        <td className="p-3">Page navigation, external links</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="outline">Toggle</Badge>
                        </td>
                        <td className="p-3">Binary state</td>
                        <td className="p-3">✅ Immediate change</td>
                        <td className="p-3">❌ No navigation</td>
                        <td className="p-3">Settings, feature switches</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="outline">Menu Item</Badge>
                        </td>
                        <td className="p-3">Grouped actions</td>
                        <td className="p-3">✅ Context specific</td>
                        <td className="p-3">➡️ Optional</td>
                        <td className="p-3">Dropdown actions, context menus</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Design Principles</CardTitle>
                <CardDescription>
                  Core principles for effective button design and user experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold">Visual Hierarchy</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Establish clear action priority with consistent sizing, colors, and visual emphasis patterns.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold">Predictable Behavior</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ensure consistent interaction patterns and clear outcome expectations across the interface.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h4 className="font-semibold">Accessible Design</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Implement proper focus management, keyboard support, and screen reader compatibility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Button Anatomy */}
          <TabsContent value="anatomy" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Button Anatomy & Structure</CardTitle>
                <CardDescription>
                  Understanding the building blocks and visual design elements of effective buttons.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Essential Elements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Container:</strong> Defines button boundaries and click area</li>
                      <li>• <strong>Label:</strong> Clear, descriptive text indicating action</li>
                      <li>• <strong>Icon:</strong> Optional visual reinforcement of action</li>
                      <li>• <strong>State Indicators:</strong> Visual feedback for interaction</li>
                      <li>• <strong>Focus Ring:</strong> Keyboard navigation indicator</li>
                      <li>• <strong>Loading State:</strong> Progress feedback for async actions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Design Principles</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Touch Friendly:</strong> Minimum 44px touch target</li>
                      <li>• <strong>Clear Affordance:</strong> Obviously interactive appearance</li>
                      <li>• <strong>Consistent Spacing:</strong> Uniform padding and margins</li>
                      <li>• <strong>Semantic Color:</strong> Meaningful color associations</li>
                      <li>• <strong>Readable Text:</strong> High contrast and legible typography</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Button Structure Examples</h4>
                  
                  {/* Basic Button Structure */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Basic Button Elements</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 border-2 border-dashed rounded-lg">
                          <Button className="mb-2">Save Document</Button>
                          <div className="text-xs text-muted-foreground space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded"></div>
                              <span>Container with background</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-600 rounded"></div>
                              <span>Text label with action verb</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-600 rounded"></div>
                              <span>Consistent padding and spacing</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 border-2 border-dashed rounded-lg">
                          <Button className="mb-2">
                            <Download className="mr-2 h-4 w-4" />
                            Download Report
                          </Button>
                          <div className="text-xs text-muted-foreground space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded"></div>
                              <span>Icon for visual reinforcement</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-600 rounded"></div>
                              <span>Descriptive label with context</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-600 rounded"></div>
                              <span>Proper icon-text spacing</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 border-2 border-dashed rounded-lg">
                          <Button disabled className="mb-2">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </Button>
                          <div className="text-xs text-muted-foreground space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-amber-600 rounded"></div>
                              <span>Loading state indicator</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-600 rounded"></div>
                              <span>Disabled interaction state</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded"></div>
                              <span>Progressive status text</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 border-2 border-dashed rounded-lg">
                          <Button variant="outline" className="mb-2 ring-2 ring-offset-2 ring-primary">
                            Focused Button
                          </Button>
                          <div className="text-xs text-muted-foreground space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded"></div>
                              <span>Visible focus indicator</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-600 rounded"></div>
                              <span>High contrast focus ring</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-600 rounded"></div>
                              <span>Keyboard accessibility</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive State Anatomy */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Interactive State Anatomy</h5>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center space-y-2">
                        <Button>Default</Button>
                        <div className="text-xs text-muted-foreground">
                          <div>Base state</div>
                          <div>Ready for interaction</div>
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <Button className="hover:scale-105 transition-transform">Hover</Button>
                        <div className="text-xs text-muted-foreground">
                          <div>Feedback on pointer</div>
                          <div>Invites interaction</div>
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <Button className="ring-2 ring-offset-2 ring-primary">Focus</Button>
                        <div className="text-xs text-muted-foreground">
                          <div>Keyboard navigation</div>
                          <div>Clear focus indicator</div>
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <Button className="active:scale-95 transition-transform">Active</Button>
                        <div className="text-xs text-muted-foreground">
                          <div>Being pressed</div>
                          <div>Immediate feedback</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sizing and Spacing */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Sizing & Spacing Guidelines</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h6 className="font-medium mb-2">Touch Target Requirements</h6>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Minimum Size:</strong> 44×44px for touch interfaces</li>
                          <li>• <strong>Desktop Minimum:</strong> 32×32px for mouse interfaces</li>
                          <li>• <strong>Icon Buttons:</strong> Square dimensions for consistency</li>
                          <li>• <strong>Text Buttons:</strong> Auto width with min-width constraints</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium mb-2">Spacing Standards</h6>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Internal Padding:</strong> 8-16px vertical, 12-24px horizontal</li>
                          <li>• <strong>Button Groups:</strong> 8-12px spacing between buttons</li>
                          <li>• <strong>Icon Spacing:</strong> 8px between icon and text</li>
                          <li>• <strong>Form Spacing:</strong> 16-24px from form fields</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center gap-3 flex-wrap">
                      <Button size="sm">Small (32px)</Button>
                      <Button>Medium (40px)</Button>
                      <Button size="lg">Large (48px)</Button>
                      <span className="text-sm text-muted-foreground">Standard sizing options</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Button Variants */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
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

          {/* Button Patterns */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Button Patterns</CardTitle>
                <CardDescription>
                  Common patterns and best practices for button usage across different contexts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Loading States & UX Patterns</h4>
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
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Implementation */}
          <TabsContent value="implementation" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Button Implementation</CardTitle>
                <CardDescription>
                  Essential attributes and patterns for button HTML and CSS.
                </CardDescription>
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
