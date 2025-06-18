"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckIcon, MinusIcon, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"

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

export default function CheckboxesPage() {
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

  const handleSelectAll = (checked: boolean) => {
    setGroupState({
      selectAll: checked,
      item1: checked,
      item2: checked,
      item3: checked
    })
  }

  const handleIndividualCheck = (item: string, checked: boolean) => {
    const newState = { ...groupState, [item]: checked }
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
      <Header />
      
      <div className="container max-w-5xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Checkboxes</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Checkboxes allow users to select one or more options from a set. Unlike radio buttons, checkboxes are independent 
            and allow multiple selections. They&apos;re essential for forms, settings, and multi-selection interfaces.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Multi-Select</Badge>
            <Badge>Independent</Badge>
            <Badge>Accessible</Badge>
            <Badge>Form Control</Badge>
            <Badge>WCAG Compliant</Badge>
          </div>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
            <TabsTrigger value="sizes">Sizes & Layout</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose of Checkboxes */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Purpose of Checkboxes</CardTitle>
                <CardDescription>
                  Understanding when and why to use checkboxes in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Multi-Selection:</strong> Choose multiple options from a list</li>
                      <li>• <strong>Binary Choices:</strong> Enable/disable features or settings</li>
                      <li>• <strong>Agreement:</strong> Terms acceptance, consent forms</li>
                      <li>• <strong>Filtering:</strong> Apply multiple criteria simultaneously</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Checkbox vs Radio vs Switch</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Checkbox When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Multiple selections allowed</li>
                          <li>• Independent options</li>
                          <li>• Form submissions</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200">Use Radio When:</strong>
                        <ul className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                          <li>• Single selection only</li>
                          <li>• Mutually exclusive options</li>
                          <li>• Limited choices (2-6 items)</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                        <strong className="text-purple-800 dark:text-purple-200">Use Switch When:</strong>
                        <ul className="text-sm mt-1 text-purple-700 dark:text-purple-300">
                          <li>• Immediate state changes</li>
                          <li>• Settings and preferences</li>
                          <li>• Clear on/off states</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Checkbox Types by Function</h4>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="single-option" 
                          checked={singleCheck}
                          onCheckedChange={setSingleCheck}
                        />
                        <Label htmlFor="single-option">Single Option</Label>
                      </div>
                      <div>
                        <strong>Single Checkbox:</strong> Standalone binary choice
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="option1" 
                            checked={multipleChecks.option1}
                            onCheckedChange={(checked) => setMultipleChecks(prev => ({ ...prev, option1: checked }))}
                          />
                          <Label htmlFor="option1">Option 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="option2" 
                            checked={multipleChecks.option2}
                            onCheckedChange={(checked) => setMultipleChecks(prev => ({ ...prev, option2: checked }))}
                          />
                          <Label htmlFor="option2">Option 2</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="option3" 
                            checked={multipleChecks.option3}
                            onCheckedChange={(checked) => setMultipleChecks(prev => ({ ...prev, option3: checked }))}
                          />
                          <Label htmlFor="option3">Option 3</Label>
                        </div>
                      </div>
                      <div>
                        <strong>Checkbox Group:</strong> Multiple independent selections
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          {/* Checkbox States */}
          <TabsContent value="states" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Checkbox States</CardTitle>
                <CardDescription>
                  All possible states that checkboxes can have and their proper implementation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Basic States</h4>
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
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Interactive States</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Checkbox id="hover" className="hover:border-primary" />
                        <Label htmlFor="hover">Hover State</Label>
                        <span className="text-sm text-muted-foreground">Mouse over</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Checkbox id="focus" className="ring-2 ring-offset-2 ring-primary" />
                        <Label htmlFor="focus">Focus State</Label>
                        <span className="text-sm text-muted-foreground">Keyboard focus</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Checkbox id="disabled" disabled />
                        <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
                        <span className="text-sm text-muted-foreground">Not interactive</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Error & Validation States</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Checkbox id="error" className="border-red-500 aria-invalid:border-red-500" />
                        <Label htmlFor="error" className="text-red-700 dark:text-red-300">Required checkbox</Label>
                      </div>
                      <p className="text-sm text-red-600 dark:text-red-400">This field is required</p>
                    </div>
                    <div className="p-4 border border-green-200 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Checkbox id="valid" checked className="border-green-500" />
                        <Label htmlFor="valid" className="text-green-700 dark:text-green-300">Valid selection</Label>
                      </div>
                      <p className="text-sm text-green-600 dark:text-green-400">Selection confirmed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          {/* Sizes & Layout */}
          <TabsContent value="sizes" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Sizes & Layout Guidelines</CardTitle>
                <CardDescription>
                  Proper sizing and spacing for different contexts and accessibility requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Size Variations</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Checkbox id="small" className="h-3 w-3" />
                        <Label htmlFor="small" className="text-sm">Small (12px)</Label>
                        <span className="text-xs text-muted-foreground">Compact interfaces</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Checkbox id="medium" />
                        <Label htmlFor="medium">Medium (16px)</Label>
                        <span className="text-sm text-muted-foreground">Default size</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Checkbox id="large" className="h-5 w-5" />
                        <Label htmlFor="large" className="text-lg">Large (20px)</Label>
                        <span className="text-sm text-muted-foreground">Touch interfaces</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Layout Patterns</h4>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium mb-2">Vertical List</h5>
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
                      
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium mb-2">Horizontal Group</h5>
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
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Spacing Guidelines</h4>
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Minimum Touch Target:</strong> 44px x 44px
                      </div>
                      <div>
                        <strong>Label Spacing:</strong> 8px from checkbox
                      </div>
                      <div>
                        <strong>Vertical Spacing:</strong> 16px between options
                      </div>
                      <div>
                        <strong>Group Spacing:</strong> 24px between groups
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
                <CardTitle>Common Checkbox Patterns</CardTitle>
                <CardDescription>
                  Real-world implementation patterns and interactive examples.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Select All Pattern</h4>
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
                    <h4 className="font-semibold mb-3 text-lg">Filter Pattern</h4>
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

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Terms & Agreements</h4>
                    <div className="p-4 border rounded-lg">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="terms" className="mt-1" />
                          <Label htmlFor="terms" className="text-sm leading-relaxed">
                            I agree to the <Link href="#" className="text-primary underline">Terms of Service</Link> and <Link href="#" className="text-primary underline">Privacy Policy</Link>
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="newsletter" className="mt-1" />
                          <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                            Subscribe to our newsletter for updates and promotions (optional)
                          </Label>
                        </div>
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
                <CardTitle>Accessibility Guidelines</CardTitle>
                <CardDescription>
                  Ensuring checkboxes are accessible to all users, including those using assistive technologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Implementation</h4>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <code className="text-blue-800 dark:text-blue-200">role=&quot;checkbox&quot;</code>
                        <p className="mt-1 text-blue-700 dark:text-blue-300">Identifies the element as a checkbox</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <code className="text-blue-800 dark:text-blue-200">aria-checked=&quot;true|false|mixed&quot;</code>
                        <p className="mt-1 text-blue-700 dark:text-blue-300">Indicates checkbox state</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <code className="text-blue-800 dark:text-blue-200">aria-labelledby</code>
                        <p className="mt-1 text-blue-700 dark:text-blue-300">References label element</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <code className="text-blue-800 dark:text-blue-200">aria-describedby</code>
                        <p className="mt-1 text-blue-700 dark:text-blue-300">References help text</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Keyboard Navigation</h4>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 border rounded">
                        <strong>Space:</strong> Toggle checkbox state
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Tab:</strong> Move to next focusable element
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Shift + Tab:</strong> Move to previous element
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Arrow Keys:</strong> Navigate within checkbox groups
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Visual Accessibility</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Color Contrast</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Minimum 3:1 contrast ratio for checkbox borders</li>
                        <li>• Minimum 4.5:1 contrast for labels and text</li>
                        <li>• Don&apos;t rely solely on color to indicate state</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Focus Indicators</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Clear visual focus indicator (outline or ring)</li>
                        <li>• Minimum 2px focus indicator thickness</li>
                        <li>• High contrast focus colors</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Size & Spacing</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Minimum 44px x 44px touch target</li>
                        <li>• Adequate spacing between checkboxes</li>
                        <li>• Scalable with text size changes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Screen Reader Support</h4>
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>Announce Pattern:</strong> &quot;[Label], checkbox, [checked/unchecked/mixed]&quot;
                      </div>
                      <div>
                        <strong>Group Context:</strong> Provide fieldset with legend for related checkboxes
                      </div>
                      <div>
                        <strong>Error Messages:</strong> Associate error text with aria-describedby
                      </div>
                      <div>
                        <strong>Instructions:</strong> Provide clear instructions before checkbox groups
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Code Examples */}
            <Card>
              <CardHeader>
                <CardTitle>Implementation Examples</CardTitle>
                <CardDescription>
                  Code snippets showing proper accessibility implementation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Basic Accessible Checkbox</h4>
                  <div className="p-4 bg-muted rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`<div className="flex items-center space-x-2">
  <Checkbox 
    id="newsletter"
    aria-describedby="newsletter-help"
  />
  <Label htmlFor="newsletter">
    Subscribe to newsletter
  </Label>
</div>
<p id="newsletter-help" className="text-sm text-muted-foreground">
  Get weekly updates about new features
</p>`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Checkbox Group with Fieldset</h4>
                  <div className="p-4 bg-muted rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`<fieldset>
  <legend className="font-medium mb-3">
    Select your interests
  </legend>
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <Checkbox id="tech" name="interests" value="tech" />
      <Label htmlFor="tech">Technology</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="design" name="interests" value="design" />
      <Label htmlFor="design">Design</Label>
    </div>
  </div>
</fieldset>`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

          </TabsContent>
        </Tabs>

        {/* References */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>References & Resources</CardTitle>
            <CardDescription>
              External resources and design system references for checkbox components.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {checkboxComponentsUrlReference.map((url, index) => {
                const getTitle = (url: string) => {
                  if (url.includes('w3.org')) return 'W3C ARIA Checkbox Pattern'
                  if (url.includes('gestalt.pinterest')) return 'Pinterest Gestalt Design System'
                  if (url.includes('base.uber')) return 'Uber Base Design System'
                  if (url.includes('wise.design')) return 'Wise Design System'
                  if (url.includes('polaris.shopify')) return 'Shopify Polaris Design System'
                  if (url.includes('material.io')) return 'Material Design 3 Guidelines'
                  if (url.includes('atlassian.design')) return 'Atlassian Design System'
                  if (url.includes('spectrum.adobe')) return 'Adobe Spectrum Design System'
                  return url
                }

                return (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium">{getTitle(url)}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </Link>
                )
              })}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}