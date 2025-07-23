"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"
import { Check, X, CheckCircle2, AlertCircle, Settings, Filter, Users, Shield } from "lucide-react"

const checkboxComponentsUrlReference = [
  "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",
  "https://gestalt.pinterest.systems/web/checkbox",
  "https://base.uber.com/6d2425e9f/p/83ffb9-check",
  "https://wise.design/components/checkbox",
  "https://polaris.shopify.com/components/selection-and-input/checkbox",
  "https://m3.material.io/components/checkbox/guidelines",
  "https://atlassian.design/components/checkbox/examples",
  "https://spectrum.adobe.com/page/checkbox/"
]

export default function CheckboxPage() {
  const { MobileWarning } = useMobileWarning()
  const [singleCheck, setSingleCheck] = useState(false)
  const [multipleChecks, setMultipleChecks] = useState({
    option1: false,
    option2: true,
    option3: false
  })
  const [groupState, setGroupState] = useState({
    selectAll: false,
    item1: false,
    item2: true,
    item3: false
  })
  const [preferencesState, setPreferencesState] = useState({
    notifications: true,
    marketing: false,
    analytics: true,
    newsletter: false
  })
  const [permissionsState, setPermissionsState] = useState({
    read: true,
    write: false,
    delete: false,
    admin: false
  })

  const handleSelectAll = (checked: boolean | "indeterminate") => {
    const isChecked = checked === true
    setGroupState({
      selectAll: isChecked,
      item1: isChecked,
      item2: isChecked,
      item3: isChecked
    })
  }

  const handleIndividualCheck = (item: string, checked: boolean | "indeterminate") => {
    const isChecked = checked === true
    const newState = { ...groupState, [item]: isChecked }
    const checkedItems = Object.entries(newState).filter(([key, value]) => key !== 'selectAll' && value).length
    const totalItems = 3
    
    newState.selectAll = checkedItems === totalItems
    setGroupState(newState)
  }

  const getSelectAllState = () => {
    const checkedItems = [groupState.item1, groupState.item2, groupState.item3].filter(Boolean).length
    if (checkedItems === 0) return false
    if (checkedItems === 3) return true
    return 'indeterminate'
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Checkbox</h1>
              <p className="text-lg text-muted-foreground">
                Binary selection controls for forms, settings, and multi-selection interfaces.
              </p>
            </div>
            <EditButton filePath="app/playground/checkbox/page.tsx" />
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="implementation">Code</TabsTrigger>
            <TabsTrigger value="accessibility">A11y</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Purpose of Checkboxes</CardTitle>
                <CardDescription>
                  Understanding the core purpose and benefits of checkbox components in user interfaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Multi-Selection</h4>
                    <p className="text-sm text-muted-foreground">
                      Enable users to select multiple independent options from a list without mutual exclusion.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Binary Choices</h4>
                    <p className="text-sm text-muted-foreground">
                      Provide clear on/off controls for settings, preferences, and feature toggles.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Agreement & Consent</h4>
                    <p className="text-sm text-muted-foreground">
                      Collect explicit user consent for terms, conditions, and privacy policies.
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
                          <strong className="text-sm">Independent Selection:</strong>
                          <p className="text-xs text-muted-foreground">Allow multiple options to be selected simultaneously without affecting others</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Form Validation:</strong>
                          <p className="text-xs text-muted-foreground">Enable validation of required selections and user agreements</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Settings Control:</strong>
                          <p className="text-xs text-muted-foreground">Manage user preferences and application configuration options</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Filtering & Search:</strong>
                          <p className="text-xs text-muted-foreground">Apply multiple filter criteria to refine content and search results</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">When to Use Checkboxes</CardTitle>
                <CardDescription>
                  Understanding the appropriate contexts for checkbox components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <strong className="text-green-800 dark:text-green-200">Use Checkboxes When:</strong>
                      </div>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Multiple selections are allowed</li>
                        <li>• Options are independent of each other</li>
                        <li>• Users need to confirm agreements</li>
                        <li>• Enabling/disabling features or settings</li>
                        <li>• Filtering or categorizing content</li>
                        <li>• Collecting user preferences</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="flex items-center gap-2 mb-3">
                        <X className="h-5 w-5 text-red-600" />
                        <strong className="text-red-800 dark:text-red-200">Avoid Checkboxes When:</strong>
                      </div>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Only one selection is allowed</li>
                        <li>• Options are mutually exclusive</li>
                        <li>• Immediate state changes are needed</li>
                        <li>• Simple yes/no questions suffice</li>
                        <li>• Users shouldn't see all options at once</li>
                        <li>• Options require explanation or context</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Checkbox vs Alternatives</h4>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Checkbox vs Radio Button:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use checkboxes for multiple selections, radio buttons for single selection from mutually exclusive options.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Checkbox vs Switch/Toggle:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use checkboxes for form submissions and agreements, switches for immediate state changes and settings.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Checkbox vs Select Multiple:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use checkboxes when all options should be visible, select multiple for space-constrained layouts.
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
                    <Badge variant="secondary">Single</Badge>
                    Binary Selection
                  </CardTitle>
                  <CardDescription>
                    Individual checkbox for standalone binary choices and agreements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="single-option" 
                        checked={singleCheck}
                        onCheckedChange={(checked) => setSingleCheck(checked === true)}
                      />
                      <Label htmlFor="single-option">I agree to the terms and conditions</Label>
                    </div>
                    {singleCheck && (
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                        <p className="text-sm text-green-700 dark:text-green-300">
                          ✓ Agreement confirmed
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Best for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Terms of service acceptance</li>
                      <li>• Privacy policy agreements</li>
                      <li>• Newsletter subscriptions</li>
                      <li>• Feature toggles</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Multiple</Badge>
                    Multi-Selection Group
                  </CardTitle>
                  <CardDescription>
                    Checkbox groups for selecting multiple independent options
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="option1" 
                          checked={multipleChecks.option1}
                          onCheckedChange={(checked) => setMultipleChecks(prev => ({ ...prev, option1: checked === true }))}
                        />
                        <Label htmlFor="option1">Email notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="option2" 
                          checked={multipleChecks.option2}
                          onCheckedChange={(checked) => setMultipleChecks(prev => ({ ...prev, option2: checked === true }))}
                        />
                        <Label htmlFor="option2">Push notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="option3" 
                          checked={multipleChecks.option3}
                          onCheckedChange={(checked) => setMultipleChecks(prev => ({ ...prev, option3: checked === true }))}
                        />
                        <Label htmlFor="option3">SMS notifications</Label>
                      </div>
                    </div>
                    {Object.values(multipleChecks).some(Boolean) && (
                      <div className="p-3 bg-muted/50 rounded border">
                        <p className="text-sm">
                          Selected: {Object.values(multipleChecks).filter(Boolean).length} option(s)
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Best for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Notification preferences</li>
                      <li>• Feature selections</li>
                      <li>• Filter criteria</li>
                      <li>• Permission settings</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Checkbox vs Alternatives Comparison</CardTitle>
                <CardDescription>
                  Understanding when to use checkbox over other input components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Component</th>
                        <th className="text-left p-3 font-medium">Selection Type</th>
                        <th className="text-left p-3 font-medium">Independence</th>
                        <th className="text-left p-3 font-medium">Immediate Effect</th>
                        <th className="text-left p-3 font-medium">Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3">
                          <Badge variant="default">Checkbox</Badge>
                        </td>
                        <td className="p-3">Multiple/Single</td>
                        <td className="p-3">✅ Independent</td>
                        <td className="p-3">❌ On submit</td>
                        <td className="p-3">Forms, agreements, multi-select</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="secondary">Radio Button</Badge>
                        </td>
                        <td className="p-3">Single only</td>
                        <td className="p-3">❌ Exclusive</td>
                        <td className="p-3">❌ On submit</td>
                        <td className="p-3">Mutually exclusive options</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="outline">Switch</Badge>
                        </td>
                        <td className="p-3">Single only</td>
                        <td className="p-3">✅ Independent</td>
                        <td className="p-3">✅ Immediate</td>
                        <td className="p-3">Settings, feature toggles</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="outline">Select Multiple</Badge>
                        </td>
                        <td className="p-3">Multiple</td>
                        <td className="p-3">✅ Independent</td>
                        <td className="p-3">❌ On submit</td>
                        <td className="p-3">Space-constrained multi-select</td>
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
                  Core principles for effective checkbox design and user experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold">Clear States</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Provide visually distinct checked, unchecked, and indeterminate states with sufficient contrast.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold">Accessible Design</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ensure proper labeling, keyboard navigation, and screen reader compatibility for all users.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Settings className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h4 className="font-semibold">Logical Grouping</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Organize related checkboxes with clear hierarchy and meaningful labels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components */}
          <TabsContent value="components" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Checkbox Variants & States</CardTitle>
                <CardDescription>
                  Different types and configurations of checkbox components for various use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Basic States</h4>
                    <div className="p-4 border rounded-lg">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 border rounded-lg">
                            <Checkbox id="unchecked" />
                            <Label htmlFor="unchecked">Unchecked</Label>
                            <span className="text-sm text-muted-foreground">Default state</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 border rounded-lg">
                            <Checkbox id="checked" checked />
                            <Label htmlFor="checked">Checked</Label>
                            <span className="text-sm text-muted-foreground">Selected state</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 border rounded-lg">
                            <Checkbox id="indeterminate" checked="indeterminate" />
                            <Label htmlFor="indeterminate">Indeterminate</Label>
                            <span className="text-sm text-muted-foreground">Partial selection</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 border rounded-lg">
                            <Checkbox id="disabled" disabled />
                            <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
                            <span className="text-sm text-muted-foreground">Not interactive</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 border rounded-lg">
                            <Checkbox id="disabled-checked" disabled checked />
                            <Label htmlFor="disabled-checked" className="text-muted-foreground">Disabled Checked</Label>
                            <span className="text-sm text-muted-foreground">Pre-selected, locked</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 border rounded-lg">
                            <Checkbox id="focus" className="ring-2 ring-offset-2 ring-primary" />
                            <Label htmlFor="focus">Focus State</Label>
                            <span className="text-sm text-muted-foreground">Keyboard focus</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Validation States</h4>
                    <div className="grid gap-4">
                      <div className="p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <Checkbox id="error" className="border-red-500 aria-invalid:border-red-500" />
                          <Label htmlFor="error" className="text-red-700 dark:text-red-300">Required agreement</Label>
                        </div>
                        <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          You must accept the terms to continue
                        </p>
                      </div>
                      <div className="p-4 border border-green-200 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <Checkbox id="valid" checked className="border-green-500" />
                          <Label htmlFor="valid" className="text-green-700 dark:text-green-300">Terms accepted</Label>
                        </div>
                        <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Agreement confirmed successfully
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Size Variations</h4>
                    <div className="p-4 border rounded-lg">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Checkbox id="small" className="h-3 w-3" />
                          <Label htmlFor="small" className="text-sm">Small (12px)</Label>
                          <span className="text-xs text-muted-foreground">Compact interfaces</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Checkbox id="medium" />
                          <Label htmlFor="medium">Medium (16px)</Label>
                          <span className="text-sm text-muted-foreground">Default size</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Checkbox id="large" className="h-5 w-5" />
                          <Label htmlFor="large" className="text-lg">Large (20px)</Label>
                          <span className="text-sm text-muted-foreground">Touch interfaces</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Layout Patterns</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Vertical List</h5>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="v1" />
                            <Label htmlFor="v1">Option 1</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="v2" />
                            <Label htmlFor="v2">Option 2</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="v3" />
                            <Label htmlFor="v3">Option 3</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Horizontal Group</h5>
                        <div className="flex gap-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="h1" />
                            <Label htmlFor="h1">Small</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="h2" />
                            <Label htmlFor="h2">Medium</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="h3" />
                            <Label htmlFor="h3">Large</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Rich Content Checkboxes</h4>
                    <div className="space-y-3">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start space-x-3">
                          <Checkbox id="rich-1" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="rich-1" className="font-medium">Premium Plan Features</Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Includes advanced analytics, priority support, and extended storage capacity.
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="secondary">$29/month</Badge>
                              <Badge variant="outline">Most Popular</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start space-x-3">
                          <Checkbox id="rich-2" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="rich-2" className="font-medium">Email Marketing Integration</Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Connect with Mailchimp, SendGrid, and other email platforms for automated campaigns.
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="secondary">Add-on</Badge>
                              <Badge variant="outline">+$10/month</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns */}
          <TabsContent value="patterns" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Selection Patterns
                  </CardTitle>
                  <CardDescription>
                    Common checkbox patterns for selection and filtering interfaces
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Select All Pattern</h4>
                      <div className="p-4 border rounded-lg">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 border-b pb-2">
                            <Checkbox 
                              id="select-all" 
                              checked={getSelectAllState()}
                              onCheckedChange={handleSelectAll}
                            />
                            <Label htmlFor="select-all" className="font-medium">Select All Items</Label>
                          </div>
                          <div className="ml-6 space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="item1" 
                                checked={groupState.item1}
                                onCheckedChange={(checked) => handleIndividualCheck('item1', checked)}
                              />
                              <Label htmlFor="item1">Item 1</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="item2" 
                                checked={groupState.item2}
                                onCheckedChange={(checked) => handleIndividualCheck('item2', checked)}
                              />
                              <Label htmlFor="item2">Item 2</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="item3" 
                                checked={groupState.item3}
                                onCheckedChange={(checked) => handleIndividualCheck('item3', checked)}
                              />
                              <Label htmlFor="item3">Item 3</Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Filter Categories</h4>
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Filter by Category</h5>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="electronics" />
                            <Label htmlFor="electronics">Electronics</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="clothing" />
                            <Label htmlFor="clothing">Clothing</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="books" />
                            <Label htmlFor="books">Books</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="home" />
                            <Label htmlFor="home">Home & Garden</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Settings & Preferences
                  </CardTitle>
                  <CardDescription>
                    Checkbox patterns for configuration and user preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Notification Preferences</h4>
                      <div className="p-4 border rounded-lg">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="email-notifications" 
                                checked={preferencesState.notifications}
                                onCheckedChange={(checked) => setPreferencesState(prev => ({ ...prev, notifications: checked === true }))}
                              />
                              <Label htmlFor="email-notifications">Email notifications</Label>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="marketing-emails" 
                                checked={preferencesState.marketing}
                                onCheckedChange={(checked) => setPreferencesState(prev => ({ ...prev, marketing: checked === true }))}
                              />
                              <Label htmlFor="marketing-emails">Marketing emails</Label>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="analytics" 
                                checked={preferencesState.analytics}
                                onCheckedChange={(checked) => setPreferencesState(prev => ({ ...prev, analytics: checked === true }))}
                              />
                              <Label htmlFor="analytics">Usage analytics</Label>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="newsletter" 
                                checked={preferencesState.newsletter}
                                onCheckedChange={(checked) => setPreferencesState(prev => ({ ...prev, newsletter: checked === true }))}
                              />
                              <Label htmlFor="newsletter">Weekly newsletter</Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Permission Settings</h4>
                      <div className="p-4 border rounded-lg">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="read-permission" 
                                checked={permissionsState.read}
                                onCheckedChange={(checked) => setPermissionsState(prev => ({ ...prev, read: checked === true }))}
                              />
                              <Label htmlFor="read-permission">Read access</Label>
                            </div>
                            <Badge variant="secondary">Basic</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="write-permission" 
                                checked={permissionsState.write}
                                onCheckedChange={(checked) => setPermissionsState(prev => ({ ...prev, write: checked === true }))}
                              />
                              <Label htmlFor="write-permission">Write access</Label>
                            </div>
                            <Badge variant="outline">Standard</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="delete-permission" 
                                checked={permissionsState.delete}
                                onCheckedChange={(checked) => setPermissionsState(prev => ({ ...prev, delete: checked === true }))}
                              />
                              <Label htmlFor="delete-permission">Delete access</Label>
                            </div>
                            <Badge variant="destructive">Advanced</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="admin-permission" 
                                checked={permissionsState.admin}
                                onCheckedChange={(checked) => setPermissionsState(prev => ({ ...prev, admin: checked === true }))}
                              />
                              <Label htmlFor="admin-permission">Admin privileges</Label>
                            </div>
                            <Badge variant="destructive">Admin</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Agreement & Consent Patterns</CardTitle>
                <CardDescription>Common patterns for collecting user agreements and consent</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Terms & Conditions</h4>
                      <div className="p-4 border rounded-lg">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <Checkbox id="terms" className="mt-1" />
                            <Label htmlFor="terms" className="text-sm leading-relaxed">
                              I agree to the <Link href="#" className="text-primary underline">Terms of Service</Link> and <Link href="#" className="text-primary underline">Privacy Policy</Link>
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox id="age-verification" className="mt-1" />
                            <Label htmlFor="age-verification" className="text-sm leading-relaxed">
                              I confirm that I am at least 18 years old
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox id="newsletter-opt-in" className="mt-1" />
                            <Label htmlFor="newsletter-opt-in" className="text-sm leading-relaxed">
                              Subscribe to our newsletter for updates and promotions (optional)
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Data Processing Consent</h4>
                      <div className="p-4 border rounded-lg">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <Checkbox id="data-processing" className="mt-1" />
                            <Label htmlFor="data-processing" className="text-sm leading-relaxed">
                              I consent to the processing of my personal data for account management
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox id="marketing-consent" className="mt-1" />
                            <Label htmlFor="marketing-consent" className="text-sm leading-relaxed">
                              I consent to receiving marketing communications (you can withdraw this at any time)
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox id="cookies-consent" className="mt-1" />
                            <Label htmlFor="cookies-consent" className="text-sm leading-relaxed">
                              I accept the use of cookies for website functionality and analytics
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h5 className="font-medium mb-2">Best Practices for Consent</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Use clear, plain language without legal jargon</li>
                    <li>• Separate optional consents from required agreements</li>
                    <li>• Provide easy access to full terms and privacy policies</li>
                    <li>• Make it easy to withdraw consent later</li>
                    <li>• Consider using separate checkboxes for different types of consent</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Integration Patterns</CardTitle>
                <CardDescription>How to effectively integrate checkboxes into forms and workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Grouped by Purpose</h4>
                      <div className="p-4 border rounded-lg space-y-4">
                        <fieldset className="space-y-3">
                          <legend className="font-medium text-sm">Communication Preferences</legend>
                          <div className="space-y-2 ml-4">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="email-updates" />
                              <Label htmlFor="email-updates">Email updates</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sms-alerts" />
                              <Label htmlFor="sms-alerts">SMS alerts</Label>
                            </div>
                          </div>
                        </fieldset>
                        
                        <fieldset className="space-y-3">
                          <legend className="font-medium text-sm">Account Features</legend>
                          <div className="space-y-2 ml-4">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="two-factor" />
                              <Label htmlFor="two-factor">Two-factor authentication</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="backup-codes" />
                              <Label htmlFor="backup-codes">Generate backup codes</Label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Progressive Disclosure</h4>
                      <div className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="advanced-settings" />
                          <Label htmlFor="advanced-settings">Enable advanced settings</Label>
                        </div>
                        <div className="ml-6 space-y-2 opacity-50">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="debug-mode" disabled />
                            <Label htmlFor="debug-mode" className="text-muted-foreground">Debug mode</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="experimental" disabled />
                            <Label htmlFor="experimental" className="text-muted-foreground">Experimental features</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="developer-tools" disabled />
                            <Label htmlFor="developer-tools" className="text-muted-foreground">Developer tools</Label>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Additional options become available when advanced settings are enabled
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Error Handling</h4>
                    <div className="space-y-4">
                      <div className="p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="required-terms" className="border-red-500" />
                            <Label htmlFor="required-terms" className="text-red-700 dark:text-red-300">
                              I accept the required terms and conditions *
                            </Label>
                          </div>
                          <p className="text-sm text-red-600">
                            This field is required to continue with registration
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-amber-200 rounded-lg bg-amber-50 dark:bg-amber-900/20">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="optional-marketing" />
                            <Label htmlFor="optional-marketing" className="text-amber-700 dark:text-amber-300">
                              Receive marketing emails (optional)
                            </Label>
                          </div>
                          <p className="text-sm text-amber-600">
                            You can change this preference later in your account settings
                          </p>
                        </div>
                      </div>
                    </div>
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
                  Code examples and technical implementation details for checkbox components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Basic Checkbox Implementation</h4>
                  <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    <pre>{`// Basic checkbox with label
<div className="flex items-center space-x-2">
  <Checkbox 
    id="example-checkbox"
    checked={isChecked}
    onCheckedChange={(checked) => setIsChecked(checked === true)}
  />
  <Label htmlFor="example-checkbox">
    I agree to the terms and conditions
  </Label>
</div>

// Checkbox with description
<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <Checkbox id="newsletter" />
    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
  </div>
  <p className="text-sm text-muted-foreground ml-6">
    Get weekly updates about new features and releases
  </p>
</div>`}</pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Select All Pattern</h4>
                  <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    <pre>{`const [groupState, setGroupState] = useState({
  selectAll: false,
  item1: false,
  item2: false,
  item3: false
})

const handleSelectAll = (checked) => {
  const isChecked = checked === true
  setGroupState({
    selectAll: isChecked,
    item1: isChecked,
    item2: isChecked,
    item3: isChecked
  })
}

const handleIndividualCheck = (item, checked) => {
  const isChecked = checked === true
  const newState = { ...groupState, [item]: isChecked }
  const checkedItems = Object.entries(newState)
    .filter(([key, value]) => key !== 'selectAll' && value).length
  const totalItems = 3
  
  newState.selectAll = checkedItems === totalItems
  setGroupState(newState)
}

const getSelectAllState = () => {
  const checkedItems = [groupState.item1, groupState.item2, groupState.item3]
    .filter(Boolean).length
  if (checkedItems === 0) return false
  if (checkedItems === 3) return true
  return 'indeterminate'
}`}</pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Form Integration</h4>
                  <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    <pre>{`// Using with react-hook-form
import { useForm, Controller } from 'react-hook-form'

const { control, handleSubmit, formState: { errors } } = useForm()

<Controller
  name="terms"
  control={control}
  rules={{ required: 'You must accept the terms to continue' }}
  render={({ field }) => (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={field.value}
          onCheckedChange={field.onChange}
          className={errors.terms ? 'border-red-500' : ''}
        />
        <Label htmlFor="terms">I accept the terms and conditions</Label>
      </div>
      {errors.terms && (
        <p className="text-sm text-red-600">{errors.terms.message}</p>
      )}
    </div>
  )}
/>`}</pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Essential Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Required Attributes</h5>
                      <ul className="text-sm space-y-1">
                        <li>• <code>id</code> for label association</li>
                        <li>• <code>checked</code> state management</li>
                        <li>• <code>onCheckedChange</code> handler</li>
                        <li>• <code>aria-describedby</code> for help text</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Optional Enhancements</h5>
                      <ul className="text-sm space-y-1">
                        <li>• <code>disabled</code> state</li>
                        <li>• <code>indeterminate</code> for partial selection</li>
                        <li>• <code>required</code> for validation</li>
                        <li>• <code>aria-invalid</code> for errors</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Keyboard Support</h5>
                      <ul className="text-sm space-y-1">
                        <li>• <kbd>Space</kbd> to toggle state</li>
                        <li>• <kbd>Tab</kbd> for navigation</li>
                        <li>• Focus indicators visible</li>
                        <li>• Proper tab order</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Visual Design</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Clear checked/unchecked states</li>
                        <li>• Sufficient color contrast</li>
                        <li>• Touch-friendly sizing (44px min)</li>
                        <li>• Consistent styling</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Advanced Examples</h4>
                  <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    <pre>{`// Checkbox with rich content
<div className="p-4 border rounded-lg">
  <div className="flex items-start space-x-3">
    <Checkbox id="premium-plan" className="mt-1" />
    <div className="flex-1">
      <Label htmlFor="premium-plan" className="font-medium">
        Premium Plan Features
      </Label>
      <p className="text-sm text-muted-foreground mt-1">
        Includes advanced analytics, priority support, 
        and extended storage capacity.
      </p>
      <div className="flex items-center gap-2 mt-2">
        <Badge variant="secondary">$29/month</Badge>
        <Badge variant="outline">Most Popular</Badge>
      </div>
    </div>
  </div>
</div>

// Grouped checkboxes with fieldset
<fieldset className="space-y-3">
  <legend className="font-medium">Communication Preferences</legend>
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <Checkbox id="email" />
      <Label htmlFor="email">Email notifications</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="sms" />
      <Label htmlFor="sms">SMS notifications</Label>
    </div>
  </div>
</fieldset>`}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Accessibility Requirements
                </CardTitle>
                <CardDescription>
                  WCAG compliance and accessibility best practices for checkbox components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">ARIA Requirements</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded">
                        <code className="text-sm bg-muted px-2 py-1 rounded">role="checkbox"</code>
                        <p className="text-sm text-muted-foreground mt-1">
                          Identifies the element as a checkbox (implicit in HTML)
                        </p>
                      </div>
                      <div className="p-3 border rounded">
                        <code className="text-sm bg-muted px-2 py-1 rounded">aria-checked</code>
                        <p className="text-sm text-muted-foreground mt-1">
                          Indicates checked state: true, false, or mixed
                        </p>
                      </div>
                      <div className="p-3 border rounded">
                        <code className="text-sm bg-muted px-2 py-1 rounded">aria-labelledby</code>
                        <p className="text-sm text-muted-foreground mt-1">
                          References the checkbox label element
                        </p>
                      </div>
                      <div className="p-3 border rounded">
                        <code className="text-sm bg-muted px-2 py-1 rounded">aria-describedby</code>
                        <p className="text-sm text-muted-foreground mt-1">
                          References help text or error messages
                        </p>
                      </div>
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
                          <kbd className="bg-muted px-3 py-1 rounded text-sm">Space</kbd>
                          <span className="text-sm">Toggle checkbox state</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <kbd className="bg-muted px-3 py-1 rounded text-sm">Tab</kbd>
                          <span className="text-sm">Move to next focusable element</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <kbd className="bg-muted px-3 py-1 rounded text-sm">Shift + Tab</kbd>
                          <span className="text-sm">Move to previous element</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <kbd className="bg-muted px-3 py-1 rounded text-sm">Arrow Keys</kbd>
                          <span className="text-sm">Navigate within checkbox groups</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Visual Accessibility</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Color & Contrast</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Minimum 3:1 contrast ratio for checkbox borders and focus indicators</li>
                        <li>• Minimum 4.5:1 contrast for labels and text content</li>
                        <li>• Don&apos;t rely solely on color to indicate state changes</li>
                        <li>• Use visual indicators (checkmark, indeterminate symbol) for state</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Focus Indicators</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Clear visual focus indicator (outline or ring)</li>
                        <li>• Minimum 2px focus indicator thickness</li>
                        <li>• High contrast focus colors distinct from other states</li>
                        <li>• Focus indicator should surround the entire checkbox</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Size & Spacing</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Minimum 44px x 44px touch target for mobile interfaces</li>
                        <li>• Adequate spacing between checkboxes (minimum 16px vertically)</li>
                        <li>• Checkbox should scale appropriately with text size changes</li>
                        <li>• Labels should be positioned consistently and close to checkboxes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Screen Reader Support</h4>
                  <div className="grid gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <strong className="text-blue-800 dark:text-blue-200">Announcements</strong>
                      <ul className="text-sm mt-2 text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• State changes are announced when toggled</li>
                        <li>• Group context is provided for related checkboxes</li>
                        <li>• Error messages are announced when validation fails</li>
                        <li>• Help text is associated and announced when focused</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <strong className="text-green-800 dark:text-green-200">Content Structure</strong>
                      <ul className="text-sm mt-2 text-green-700 dark:text-green-300 space-y-1">
                        <li>• Use fieldset and legend for related checkbox groups</li>
                        <li>• Provide clear, descriptive labels for each checkbox</li>
                        <li>• Include instructions before complex checkbox groups</li>
                        <li>• Associate error messages with relevant checkboxes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Implementation Examples</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-3">Basic Accessible Checkbox</h5>
                      <div className="p-4 bg-muted rounded-lg">
                        <pre className="text-sm overflow-x-auto">{`<div className="flex items-center space-x-2">
  <Checkbox 
    id="newsletter"
    aria-describedby="newsletter-help"
    checked={isSubscribed}
    onCheckedChange={setIsSubscribed}
  />
  <Label htmlFor="newsletter">
    Subscribe to newsletter
  </Label>
</div>
<p id="newsletter-help" className="text-sm text-muted-foreground mt-1">
  Get weekly updates about new features and releases
</p>`}</pre>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-3">Checkbox Group with Fieldset</h5>
                      <div className="p-4 bg-muted rounded-lg">
                        <pre className="text-sm overflow-x-auto">{`<fieldset>
  <legend className="font-medium mb-3">
    Select your notification preferences
  </legend>
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="email" 
        name="notifications" 
        value="email"
        checked={preferences.email}
        onCheckedChange={(checked) => 
          setPreferences(prev => ({...prev, email: checked}))
        }
      />
      <Label htmlFor="email">Email notifications</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="sms" 
        name="notifications" 
        value="sms"
        checked={preferences.sms}
        onCheckedChange={(checked) => 
          setPreferences(prev => ({...prev, sms: checked}))
        }
      />
      <Label htmlFor="sms">SMS notifications</Label>
    </div>
  </div>
</fieldset>`}</pre>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-3">Error State with Aria</h5>
                      <div className="p-4 bg-muted rounded-lg">
                        <pre className="text-sm overflow-x-auto">{`<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <Checkbox 
      id="terms"
      required
      aria-invalid={hasError}
      aria-describedby="terms-error"
      checked={agreedToTerms}
      onCheckedChange={setAgreedToTerms}
      className={hasError ? 'border-red-500' : ''}
    />
    <Label htmlFor="terms">
      I agree to the terms and conditions *
    </Label>
  </div>
  {hasError && (
    <p 
      id="terms-error" 
      className="text-sm text-red-600"
      role="alert"
    >
      You must accept the terms to continue
    </p>
  )}
</div>`}</pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Testing Checklist</h4>
                  <div className="p-4 border rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h5 className="font-medium">Keyboard Testing</h5>
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-2">
                            <input type="checkbox" className="h-4 w-4" />
                            <span>All checkboxes accessible via keyboard</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <input type="checkbox" className="h-4 w-4" />
                            <span>Focus indicators clearly visible</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <input type="checkbox" className="h-4 w-4" />
                            <span>Tab order is logical and predictable</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <input type="checkbox" className="h-4 w-4" />
                            <span>Space key toggles checkbox state</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium">Screen Reader Testing</h5>
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-2">
                            <input type="checkbox" className="h-4 w-4" />
                            <span>Labels and purposes clearly announced</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <input type="checkbox" className="h-4 w-4" />
                            <span>State changes communicated accurately</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <input type="checkbox" className="h-4 w-4" />
                            <span>Group context provided for related items</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <input type="checkbox" className="h-4 w-4" />
                            <span>Error messages descriptive and helpful</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* References */}
        <div className="mt-6">
          <ComponentReferences
            title="References & Resources"
            description="Essential resources for checkbox component implementation, accessibility guidelines, and design patterns."
            urls={checkboxComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('w3.org')) return 'W3C WAI-ARIA Checkbox Pattern'
              if (url.includes('gestalt.pinterest')) return 'Pinterest Gestalt Design System'
              if (url.includes('base.uber')) return 'Uber Base Design System'
              if (url.includes('wise.design')) return 'Wise Design System'
              if (url.includes('polaris.shopify')) return 'Shopify Polaris Design System'
              if (url.includes('material.io')) return 'Material Design 3 Guidelines'
              if (url.includes('atlassian.design')) return 'Atlassian Design System'
              if (url.includes('spectrum.adobe')) return 'Adobe Spectrum Design System'
              return url
            }}
          />
        </div>

      </div>
    </div>
  )
}