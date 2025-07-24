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
                        <th className="text-left p-2 font-medium">Component</th>
                        <th className="text-left p-2 font-medium">Primary Use</th>
                        <th className="text-left p-2 font-medium">Action Type</th>
                        <th className="text-left p-2 font-medium">Visual Weight</th>
                        <th className="text-left p-2 font-medium">Example Context</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-2 font-medium">Button</td>
                        <td className="p-2">Actions & State Changes</td>
                        <td className="p-2">Immediate execution</td>
                        <td className="p-2">High visibility</td>
                        <td className="p-2">Submit, Save, Delete</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Link</td>
                        <td className="p-2">Navigation & References</td>
                        <td className="p-2">Page transition</td>
                        <td className="p-2">Text-integrated</td>
                        <td className="p-2">Go to page, Open docs</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Toggle</td>
                        <td className="p-2">Binary State Control</td>
                        <td className="p-2">Instant toggle</td>
                        <td className="p-2">Focused utility</td>
                        <td className="p-2">Dark mode, Notifications</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Icon Button</td>
                        <td className="p-2">Space-constrained Actions</td>
                        <td className="p-2">Quick actions</td>
                        <td className="p-2">Minimal footprint</td>
                        <td className="p-2">Close, Edit, More options</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Menu Item</td>
                        <td className="p-2">Grouped Actions</td>
                        <td className="p-2">Contextual actions</td>
                        <td className="p-2">Hidden until revealed</td>
                        <td className="p-2">Dropdown options, Context menus</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Tab</td>
                        <td className="p-2">View Switching</td>
                        <td className="p-2">Content filtering</td>
                        <td className="p-2">Persistent navigation</td>
                        <td className="p-2">Overview, Details, Settings</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Design Principles</CardTitle>
                  <CardDescription>
                    Core principles that guide effective button design
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-sm">Clear Affordance:</strong>
                        <p className="text-xs text-muted-foreground">Buttons should look clickable and indicate their interactive nature through visual design</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-sm">Predictable Behavior:</strong>
                        <p className="text-xs text-muted-foreground">Users should be able to predict what will happen when they click a button</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-sm">Appropriate Hierarchy:</strong>
                        <p className="text-xs text-muted-foreground">Visual weight should match the importance of the action</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-sm">Contextual Relevance:</strong>
                        <p className="text-xs text-muted-foreground">Button labels and styling should match the current context and user goals</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage Metrics</CardTitle>
                  <CardDescription>
                    Key metrics to consider when implementing buttons
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Click-through Rate</span>
                      <Badge variant="outline">85-95%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Touch Target Size</span>
                      <Badge variant="outline">44px min</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Loading State Duration</span>
                      <Badge variant="outline">&lt; 3 seconds</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Error Recovery Time</span>
                      <Badge variant="outline">&lt; 5 seconds</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

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
                        <th className="text-left p-2 font-medium">Component</th>
                        <th className="text-left p-2 font-medium">Primary Use</th>
                        <th className="text-left p-2 font-medium">Action Type</th>
                        <th className="text-left p-2 font-medium">Visual Weight</th>
                        <th className="text-left p-2 font-medium">Example Context</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-2 font-medium">Button</td>
                        <td className="p-2">Actions & State Changes</td>
                        <td className="p-2">Immediate execution</td>
                        <td className="p-2">High visibility</td>
                        <td className="p-2">Submit, Save, Delete</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Link</td>
                        <td className="p-2">Navigation & References</td>
                        <td className="p-2">Page transition</td>
                        <td className="p-2">Text-integrated</td>
                        <td className="p-2">Go to page, Open docs</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Toggle</td>
                        <td className="p-2">Binary State Control</td>
                        <td className="p-2">Instant toggle</td>
                        <td className="p-2">Focused utility</td>
                        <td className="p-2">Dark mode, Notifications</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Icon Button</td>
                        <td className="p-2">Space-constrained Actions</td>
                        <td className="p-2">Quick actions</td>
                        <td className="p-2">Minimal footprint</td>
                        <td className="p-2">Close, Edit, More options</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Menu Item</td>
                        <td className="p-2">Grouped Actions</td>
                        <td className="p-2">Contextual actions</td>
                        <td className="p-2">Hidden until revealed</td>
                        <td className="p-2">Dropdown options, Context menus</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Tab</td>
                        <td className="p-2">View Switching</td>
                        <td className="p-2">Content filtering</td>
                        <td className="p-2">Persistent navigation</td>
                        <td className="p-2">Overview, Details, Settings</td>
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
                  Core principles that guide effective button design
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-sm">Clear Affordance:</strong>
                      <p className="text-xs text-muted-foreground">Buttons should look clickable and indicate their interactive nature through visual design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-sm">Predictable Behavior:</strong>
                      <p className="text-xs text-muted-foreground">Users should be able to predict what will happen when they click a button</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-sm">Appropriate Hierarchy:</strong>
                      <p className="text-xs text-muted-foreground">Visual weight should match the importance of the action</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-sm">Contextual Relevance:</strong>
                      <p className="text-xs text-muted-foreground">Button labels and styling should match the current context and user goals</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage Metrics</CardTitle>
                <CardDescription>
                  Key metrics to consider when implementing buttons
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Click-through Rate</span>
                    <Badge variant="outline">85-95%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Touch Target Size</span>
                    <Badge variant="outline">44px min</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Loading State Duration</span>
                    <Badge variant="outline">&lt; 3 seconds</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Error Recovery Time</span>
                    <Badge variant="outline">&lt; 5 seconds</Badge>
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
                <CardTitle>Common Button Patterns</CardTitle>
                <CardDescription>
                  Proven patterns and best practices for button usage across different contexts and workflows.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Form Actions</CardTitle>
                      <CardDescription>Standard patterns for form submission and cancellation</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-4 border rounded-lg">
                          <h5 className="font-medium mb-3">Primary + Secondary</h5>
                          <div className="flex gap-2">
                            <Button>Save Changes</Button>
                            <Button variant="outline">Cancel</Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">Most common form pattern</p>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <h5 className="font-medium mb-3">Multi-step Forms</h5>
                          <div className="flex justify-between gap-2">
                            <Button variant="outline">← Back</Button>
                            <div className="flex gap-2">
                              <Button variant="ghost">Save Draft</Button>
                              <Button>Continue →</Button>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">Wizard navigation pattern</p>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <h5 className="font-medium mb-3">Critical Actions</h5>
                          <div className="flex gap-2">
                            <Button variant="destructive">Delete Account</Button>
                            <Button variant="outline">Keep Account</Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">Destructive action pattern</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Loading & States</CardTitle>
                      <CardDescription>Managing async operations and user feedback</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-4 border rounded-lg">
                          <h5 className="font-medium mb-3">Loading State</h5>
                          <Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </Button>
                          <p className="text-xs text-muted-foreground mt-2">Prevents double-submission</p>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <h5 className="font-medium mb-3">Success Feedback</h5>
                          <Button className="bg-green-600 hover:bg-green-600">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Saved!
                          </Button>
                          <p className="text-xs text-muted-foreground mt-2">Temporary success state</p>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <h5 className="font-medium mb-3">Error Recovery</h5>
                          <div className="space-y-2">
                            <Button variant="destructive" className="w-full">
                              <AlertCircle className="mr-2 h-4 w-4" />
                              Failed to Save
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              Try Again
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">Error state with recovery</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Action Groups & Hierarchies</CardTitle>
                    <CardDescription>Organizing multiple actions with clear visual hierarchy</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <h5 className="font-medium">Toolbar Actions</h5>
                        <div className="flex gap-1 p-2 border rounded-lg">
                          <Button variant="ghost" size="sm">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit3 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">Icon-only for space efficiency</p>
                      </div>
                      
                      <div className="space-y-4">
                        <h5 className="font-medium">Card Actions</h5>
                        <div className="p-4 border rounded-lg space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-medium">Project Alpha</h6>
                              <p className="text-sm text-muted-foreground">Status: In Progress</p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button size="sm">Edit</Button>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Primary + secondary actions</p>
                      </div>
                      
                      <div className="space-y-4">
                        <h5 className="font-medium">Modal Actions</h5>
                        <div className="p-4 border rounded-lg space-y-4">
                          <div className="space-y-2">
                            <h6 className="font-medium">Delete Item?</h6>
                            <p className="text-sm text-muted-foreground">This action cannot be undone.</p>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">Cancel</Button>
                            <Button variant="destructive" size="sm">Delete</Button>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Critical confirmation dialog</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Interactive Button States</CardTitle>
                    <CardDescription>Demonstrating different states and user feedback patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h5 className="font-medium mb-3">Standard States</h5>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Button>Default</Button>
                              <span className="text-sm text-muted-foreground">Normal state</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button className="hover:bg-primary/90">Hover</Button>
                              <span className="text-sm text-muted-foreground">Mouse over state</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button className="focus:ring-2 focus:ring-ring">Focus</Button>
                              <span className="text-sm text-muted-foreground">Keyboard focus state</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button disabled>Disabled</Button>
                              <span className="text-sm text-muted-foreground">Non-interactive state</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium mb-3">Toggle States</h5>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Button variant="outline">
                                <Star className="mr-2 h-4 w-4" />
                                Favorite
                              </Button>
                              <span className="text-sm text-muted-foreground">Inactive toggle</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button>
                                <Star className="mr-2 h-4 w-4 fill-current" />
                                Favorited
                              </Button>
                              <span className="text-sm text-muted-foreground">Active toggle</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h5 className="font-medium mb-3">Progress States</h5>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Button>
                                <Upload className="mr-2 h-4 w-4" />
                                Upload File
                              </Button>
                              <span className="text-sm text-muted-foreground">Ready state</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Uploading...
                              </Button>
                              <span className="text-sm text-muted-foreground">In progress</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button className="bg-green-600 hover:bg-green-600">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Uploaded!
                              </Button>
                              <span className="text-sm text-muted-foreground">Completed</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium mb-3">Context-Aware States</h5>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Button variant="secondary">
                                <Download className="mr-2 h-4 w-4" />
                                Download (2.4 MB)
                              </Button>
                              <span className="text-sm text-muted-foreground">With context info</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button>
                                <Users className="mr-2 h-4 w-4" />
                                Invite Team (3)
                              </Button>
                              <span className="text-sm text-muted-foreground">With count badge</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pattern Guidelines</CardTitle>
                    <CardDescription>Best practices for implementing button patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do</h5>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• Use consistent patterns across your application</li>
                            <li>• Group related actions together</li>
                            <li>• Provide clear feedback for all user actions</li>
                            <li>• Maintain visual hierarchy with appropriate variants</li>
                            <li>• Include loading states for async operations</li>
                            <li>• Use descriptive labels that indicate the outcome</li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                          <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don't</h5>
                          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <li>• Mix different button patterns inconsistently</li>
                            <li>• Use multiple primary buttons in the same context</li>
                            <li>• Forget to handle loading and error states</li>
                            <li>• Place destructive actions too prominently</li>
                            <li>• Use vague labels like "Submit" or "OK"</li>
                            <li>• Allow double-submission of forms</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                <CardTitle>Button Accessibility Standards</CardTitle>
                <CardDescription>
                  Comprehensive accessibility guidelines following WCAG 2.2 AA standards, ensuring universal access and compliance with global accessibility regulations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Keyboard Navigation</CardTitle>
                      <CardDescription>Essential keyboard interaction patterns</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium mb-2">Tab Navigation</h5>
                          <div className="space-y-2">
                            <Button className="mr-2">First</Button>
                            <Button className="mr-2">Second</Button>
                            <Button>Third</Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">Use Tab to move between buttons</p>
                        </div>
                        
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium mb-2">Activation</h5>
                          <Button>Press Space or Enter</Button>
                          <p className="text-xs text-muted-foreground mt-2">Both keys should activate buttons</p>
                        </div>
                        
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium mb-2">Focus Indicators</h5>
                          <Button className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Visible Focus
                          </Button>
                          <p className="text-xs text-muted-foreground mt-2">3:1 contrast ratio minimum</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Screen Reader Support</CardTitle>
                      <CardDescription>Semantic markup and ARIA attributes</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium mb-2">Descriptive Labels</h5>
                          <Button aria-label="Save document to cloud storage">
                            <Upload className="mr-2 h-4 w-4" />
                            Save
                          </Button>
                          <p className="text-xs text-muted-foreground mt-2">Clear, descriptive purpose</p>
                        </div>
                        
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium mb-2">State Announcements</h5>
                          <Button aria-pressed="false" variant="outline">
                            <Star className="mr-2 h-4 w-4" />
                            Favorite
                          </Button>
                          <p className="text-xs text-muted-foreground mt-2">Toggle states announced</p>
                        </div>
                        
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium mb-2">Context Information</h5>
                          <Button aria-describedby="delete-help" variant="destructive">
                            Delete Account
                          </Button>
                          <p id="delete-help" className="text-xs text-muted-foreground mt-2">
                            This action cannot be undone
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">ARIA Attributes Reference</CardTitle>
                    <CardDescription>Complete guide to ARIA attributes for button accessibility</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3 font-medium">Attribute</th>
                            <th className="text-left p-3 font-medium">Purpose</th>
                            <th className="text-left p-3 font-medium">Example</th>
                            <th className="text-left p-3 font-medium">Use Case</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-3 font-mono text-xs">aria-label</td>
                            <td className="p-3">Accessible name when text isn't descriptive</td>
                            <td className="p-3">
                              <Button size="sm" aria-label="Close dialog">
                                <X className="h-4 w-4" />
                              </Button>
                            </td>
                            <td className="p-3">Icon-only buttons</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-mono text-xs">aria-pressed</td>
                            <td className="p-3">Toggle button state</td>
                            <td className="p-3">
                              <Button variant="outline" aria-pressed="false" size="sm">
                                Mute
                              </Button>
                            </td>
                            <td className="p-3">Toggle controls</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-mono text-xs">aria-expanded</td>
                            <td className="p-3">Collapsible content state</td>
                            <td className="p-3">
                              <Button variant="outline" aria-expanded="false" size="sm">
                                Menu
                              </Button>
                            </td>
                            <td className="p-3">Dropdown triggers</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-mono text-xs">aria-describedby</td>
                            <td className="p-3">Reference to description</td>
                            <td className="p-3">
                              <Button variant="destructive" size="sm">
                                Delete
                              </Button>
                            </td>
                            <td className="p-3">Additional context</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-mono text-xs">aria-disabled</td>
                            <td className="p-3">Disabled but focusable</td>
                            <td className="p-3">
                              <Button variant="outline" aria-disabled="true" size="sm">
                                Submit
                              </Button>
                            </td>
                            <td className="p-3">Form validation</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Touch Target Guidelines</CardTitle>
                      <CardDescription>WCAG 2.2 compliant sizing and spacing</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Optimal Sizes</h5>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <Button className="min-w-[48px] min-h-[48px]">48px</Button>
                              <span className="text-sm">Recommended minimum</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button className="min-w-[44px] min-h-[44px]" size="sm">44px</Button>
                              <span className="text-sm">Mobile minimum</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button className="min-w-[24px] min-h-[24px]" size="sm">24px</Button>
                              <span className="text-sm">WCAG 2.2 minimum</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Spacing Requirements</h5>
                          <div className="flex gap-2 items-center">
                            <Button size="sm">Button 1</Button>
                            <div className="text-xs text-muted-foreground">8px</div>
                            <Button size="sm">Button 2</Button>
                          </div>
                          <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
                            Minimum 8px spacing between interactive elements
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Color & Contrast</CardTitle>
                      <CardDescription>Visual accessibility requirements</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h5 className="font-medium mb-2">Contrast Ratios</h5>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <Button className="bg-blue-600 text-white">4.5:1 AA</Button>
                              <span className="text-sm">Normal text minimum</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button className="bg-blue-800 text-white">7:1 AAA</Button>
                              <span className="text-sm">Enhanced contrast</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button className="ring-2 ring-blue-500 ring-offset-2">3:1</Button>
                              <span className="text-sm">Focus indicator minimum</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                          <h5 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Color Independence</h5>
                          <div className="space-y-2">
                            <Button variant="destructive" size="sm">
                              <X className="mr-2 h-4 w-4" />
                              Delete
                            </Button>
                            <p className="text-xs text-amber-700 dark:text-amber-300">
                              Use icons + text, not just color
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Accessibility Testing Checklist</CardTitle>
                    <CardDescription>Comprehensive testing framework for button accessibility</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h5 className="font-medium">Keyboard Testing</h5>
                          <div className="space-y-2 text-sm">
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>All buttons reachable via Tab navigation</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Space and Enter keys activate buttons</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Focus indicators visible (3:1 contrast)</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Tab order follows logical sequence</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>No keyboard traps present</span>
                            </label>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h5 className="font-medium">Screen Reader Testing</h5>
                          <div className="space-y-2 text-sm">
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Button role announced correctly</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Descriptive labels provided</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>State changes announced</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Context and purpose clear</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>No misleading information</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h5 className="font-medium">Visual Testing</h5>
                          <div className="space-y-2 text-sm">
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Text contrast meets 4.5:1 ratio</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Button states visually distinct</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Touch targets meet 44px minimum</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>High contrast mode support</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>200% zoom support maintained</span>
                            </label>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h5 className="font-medium">Mobile Testing</h5>
                          <div className="space-y-2 text-sm">
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Touch targets meet platform guidelines</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Adequate spacing between buttons</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>One-handed operation possible</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Voice control compatibility</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" />
                              <span>Switch control navigation</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Testing Tools</CardTitle>
                      <CardDescription>Recommended tools for accessibility testing</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium">Automated Testing</h5>
                          <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                            <li>• axe DevTools (Browser extension)</li>
                            <li>• Lighthouse Accessibility Audit</li>
                            <li>• WAVE Web Accessibility Evaluator</li>
                            <li>• Pa11y Command Line Tool</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium">Manual Testing</h5>
                          <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                            <li>• Keyboard-only navigation</li>
                            <li>• Screen reader testing (NVDA, JAWS, VoiceOver)</li>
                            <li>• Color contrast analyzers</li>
                            <li>• Mobile assistive technology</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Common Issues</CardTitle>
                      <CardDescription>Frequent accessibility problems to avoid</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">Critical Issues</h5>
                        <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                          <li>• Non-semantic HTML (div/span as buttons)</li>
                          <li>• Missing accessible names</li>
                          <li>• Insufficient color contrast</li>
                          <li>• Too-small touch targets</li>
                          <li>• Missing keyboard support</li>
                          <li>• Unclear focus indicators</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Quick Fixes</h5>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Use semantic &lt;button&gt; elements</li>
                          <li>• Add aria-label for icon buttons</li>
                          <li>• Test with keyboard navigation</li>
                          <li>• Verify color contrast ratios</li>
                          <li>• Include clear focus indicators</li>
                          <li>• Test with screen readers</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
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
