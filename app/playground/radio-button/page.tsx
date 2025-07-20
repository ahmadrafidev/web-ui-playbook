"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"

const radioButtonComponentsUrlReference = [
  "https://spectrum.adobe.com/page/radio-group/",
  "https://atlassian.design/components/radio/usage",
  "https://playbook.ebay.com/design-system/components/radio-button",
  "https://carbondesignsystem.com/components/radio-button/usage/",
  "https://gestalt.pinterest.systems/web/radiogroup",
  "https://polaris-react.shopify.com/components/selection-and-input/radio-button",
  "https://wise.design/components/radio",
  "https://www.w3.org/WAI/ARIA/apg/patterns/radio/"
]

export default function RadioButtonPage() {
  const { MobileWarning } = useMobileWarning()
  
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [contactPreference, setContactPreference] = useState("email")
  const [theme, setTheme] = useState("system")
  const [size, setSize] = useState("medium")
  const [priority, setPriority] = useState("normal")
  const [frequency, setFrequency] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Radio Button</h2>
            <EditButton filePath="app/playground/radio-button/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Radio buttons allow users to select one option from a set of mutually exclusive choices. They work in groups where 
            only one option can be selected at a time. When a user selects a new option, the previous selection is automatically deselected.
          </p>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
            <TabsTrigger value="sizes">Sizes & Layout</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose of Radio Buttons */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Purpose of Radio Buttons</CardTitle>
                <CardDescription>
                  Understanding when and why to use radio buttons in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Single Selection:</strong> Choose one option from multiple choices</li>
                      <li>• <strong>Mutually Exclusive:</strong> Selecting one deselects others</li>
                      <li>• <strong>Visible Options:</strong> All choices are visible at once</li>
                      <li>• <strong>Default Selection:</strong> Can have a pre-selected default option</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Radio vs Checkbox vs Select</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Radio When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• 2-6 mutually exclusive options</li>
                          <li>• All options should be visible</li>
                          <li>• Need to compare options easily</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200">Use Checkbox When:</strong>
                        <ul className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                          <li>• Multiple selections allowed</li>
                          <li>• Independent options</li>
                          <li>• Binary choices (on/off)</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                        <strong className="text-purple-800 dark:text-purple-200">Use Select When:</strong>
                        <ul className="text-sm mt-1 text-purple-700 dark:text-purple-300">
                          <li>• 7+ options available</li>
                          <li>• Space is limited</li>
                          <li>• Options are familiar</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Interactive Radio Button Examples</h4>
                  <div className="grid gap-6">
                    {/* Payment Method Example */}
                    <div className="p-4 border rounded-lg space-y-4">
                      <h5 className="font-medium">Payment Method Selection</h5>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="credit-card" 
                            name="payment" 
                            value="credit-card"
                            checked={paymentMethod === "credit-card"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <Label htmlFor="credit-card" className="text-sm font-medium cursor-pointer">
                            💳 Credit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="paypal" 
                            name="payment" 
                            value="paypal"
                            checked={paymentMethod === "paypal"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <Label htmlFor="paypal" className="text-sm font-medium cursor-pointer">
                            🅿️ PayPal
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="apple-pay" 
                            name="payment" 
                            value="apple-pay"
                            checked={paymentMethod === "apple-pay"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <Label htmlFor="apple-pay" className="text-sm font-medium cursor-pointer">
                            🍎 Apple Pay
                          </Label>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Selected: {paymentMethod}
                      </p>
                    </div>

                    {/* Contact Preference Example */}
                    <div className="p-4 border rounded-lg space-y-4">
                      <h5 className="font-medium">How should we contact you?</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="email" 
                            name="contact" 
                            value="email"
                            checked={contactPreference === "email"}
                            onChange={(e) => setContactPreference(e.target.value)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <Label htmlFor="email" className="text-sm font-medium cursor-pointer">
                            Email
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="phone" 
                            name="contact" 
                            value="phone"
                            checked={contactPreference === "phone"}
                            onChange={(e) => setContactPreference(e.target.value)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <Label htmlFor="phone" className="text-sm font-medium cursor-pointer">
                            Phone
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="sms" 
                            name="contact" 
                            value="sms"
                            checked={contactPreference === "sms"}
                            onChange={(e) => setContactPreference(e.target.value)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <Label htmlFor="sms" className="text-sm font-medium cursor-pointer">
                            SMS
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* States Tab */}
          <TabsContent value="states" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Radio Button States</CardTitle>
                <CardDescription>
                  Different states that radio buttons can have and how to implement them properly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Selection States</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <input 
                          type="radio" 
                          id="unselected" 
                          name="selection-demo" 
                          className="w-4 h-4 text-primary border-gray-300"
                        />
                        <Label htmlFor="unselected" className="text-sm font-medium cursor-pointer">
                          Unselected
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <input 
                          type="radio" 
                          id="selected" 
                          name="selection-demo" 
                          defaultChecked
                          className="w-4 h-4 text-primary border-gray-300"
                        />
                        <Label htmlFor="selected" className="text-sm font-medium cursor-pointer">
                          Selected
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Interactive States</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <input 
                          type="radio" 
                          id="hover" 
                          name="interactive-demo" 
                          className="w-4 h-4 text-primary border-gray-300 hover:ring-2 hover:ring-primary/20"
                        />
                        <Label htmlFor="hover" className="text-sm font-medium cursor-pointer">
                          Hover (hover to see effect)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <input 
                          type="radio" 
                          id="focus" 
                          name="interactive-demo" 
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                        <Label htmlFor="focus" className="text-sm font-medium cursor-pointer">
                          Focus (click to focus)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg opacity-50">
                        <input 
                          type="radio" 
                          id="disabled" 
                          name="interactive-demo" 
                          disabled
                          className="w-4 h-4 text-primary border-gray-300"
                        />
                        <Label htmlFor="disabled" className="text-sm font-medium">
                          Disabled
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Error and Validation States</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/20">
                      <h5 className="font-medium text-red-800 dark:text-red-200 mb-3">
                        Required Selection (Error State)
                      </h5>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="option-a" 
                            name="error-demo" 
                            value="a"
                            checked={frequency === "a"}
                            onChange={(e) => setFrequency(e.target.value)}
                            className="w-4 h-4 text-red-600 border-red-300 focus:ring-red-500"
                          />
                          <Label htmlFor="option-a" className="text-sm font-medium cursor-pointer">
                            Option A
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="option-b" 
                            name="error-demo" 
                            value="b"
                            checked={frequency === "b"}
                            onChange={(e) => setFrequency(e.target.value)}
                            className="w-4 h-4 text-red-600 border-red-300 focus:ring-red-500"
                          />
                          <Label htmlFor="option-b" className="text-sm font-medium cursor-pointer">
                            Option B
                          </Label>
                        </div>
                        {frequency === "" && (
                          <p className="text-sm text-red-600 dark:text-red-400">
                            Please select an option to continue
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sizes & Layout Tab */}
          <TabsContent value="sizes" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Sizes & Layout Options</CardTitle>
                <CardDescription>
                  Different size variations and layout patterns for radio buttons.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Size Variations</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg space-y-3">
                        <h5 className="font-medium">Small (Mobile Dense)</h5>
                        <div className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            id="small-1" 
                            name="size-small" 
                            value="small"
                            checked={size === "small"}
                            onChange={(e) => setSize(e.target.value)}
                            className="w-3 h-3 text-primary border-gray-300"
                          />
                          <Label htmlFor="small-1" className="text-xs font-medium cursor-pointer">
                            Small option
                          </Label>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg space-y-3">
                        <h5 className="font-medium">Medium (Default)</h5>
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="medium-1" 
                            name="size-medium" 
                            value="medium"
                            checked={size === "medium"}
                            onChange={(e) => setSize(e.target.value)}
                            className="w-4 h-4 text-primary border-gray-300"
                          />
                          <Label htmlFor="medium-1" className="text-sm font-medium cursor-pointer">
                            Medium option
                          </Label>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg space-y-3">
                        <h5 className="font-medium">Large (Touch Friendly)</h5>
                        <div className="flex items-center space-x-4">
                          <input 
                            type="radio" 
                            id="large-1" 
                            name="size-large" 
                            value="large"
                            checked={size === "large"}
                            onChange={(e) => setSize(e.target.value)}
                            className="w-5 h-5 text-primary border-gray-300"
                          />
                          <Label htmlFor="large-1" className="text-base font-medium cursor-pointer">
                            Large option
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Layout Patterns</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg space-y-3">
                        <h5 className="font-medium">Vertical (Recommended)</h5>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <input 
                              type="radio" 
                              id="vertical-1" 
                              name="layout-vertical" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="vertical-1" className="text-sm font-medium cursor-pointer">
                              Option 1
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <input 
                              type="radio" 
                              id="vertical-2" 
                              name="layout-vertical" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="vertical-2" className="text-sm font-medium cursor-pointer">
                              Option 2
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg space-y-3">
                        <h5 className="font-medium">Horizontal (Space Constrained)</h5>
                        <div className="flex space-x-6">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="horizontal-1" 
                              name="layout-horizontal" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="horizontal-1" className="text-sm font-medium cursor-pointer">
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="horizontal-2" 
                              name="layout-horizontal" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="horizontal-2" className="text-sm font-medium cursor-pointer">
                              No
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg space-y-3">
                        <h5 className="font-medium">Grid Layout</h5>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="grid-1" 
                              name="layout-grid" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="grid-1" className="text-sm font-medium cursor-pointer">
                              Option A
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="grid-2" 
                              name="layout-grid" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="grid-2" className="text-sm font-medium cursor-pointer">
                              Option B
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="grid-3" 
                              name="layout-grid" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="grid-3" className="text-sm font-medium cursor-pointer">
                              Option C
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="grid-4" 
                              name="layout-grid" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="grid-4" className="text-sm font-medium cursor-pointer">
                              Option D
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Label Positioning</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg space-y-3">
                      <h5 className="font-medium">Standard (Label Right)</h5>
                      <div className="flex items-center space-x-3">
                        <input 
                          type="radio" 
                          id="label-right" 
                          name="label-position-1" 
                          className="w-4 h-4 text-primary border-gray-300"
                        />
                        <Label htmlFor="label-right" className="text-sm font-medium cursor-pointer">
                          Label appears to the right (standard)
                        </Label>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h5 className="font-medium">Multi-line Labels</h5>
                      <div className="flex items-start space-x-3">
                        <input 
                          type="radio" 
                          id="multi-line" 
                          name="label-position-2" 
                          className="w-4 h-4 text-primary border-gray-300 mt-1"
                        />
                        <Label htmlFor="multi-line" className="text-sm font-medium cursor-pointer leading-relaxed">
                          This is a longer label that demonstrates how text wraps 
                          and the radio button stays aligned to the top
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Common Usage Patterns</CardTitle>
                <CardDescription>
                  Real-world patterns and best practices for implementing radio buttons.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Form Patterns</h4>
                    <div className="grid gap-6">
                      {/* Priority Selection */}
                      <div className="p-4 border rounded-lg space-y-4">
                        <div>
                          <h5 className="font-medium">Task Priority</h5>
                          <p className="text-sm text-muted-foreground">Choose the priority level for this task</p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <input 
                              type="radio" 
                              id="low" 
                              name="priority" 
                              value="low"
                              checked={priority === "low"}
                              onChange={(e) => setPriority(e.target.value)}
                              className="w-4 h-4 text-green-600 border-gray-300"
                            />
                            <Label htmlFor="low" className="text-sm font-medium cursor-pointer flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              Low Priority
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <input 
                              type="radio" 
                              id="normal" 
                              name="priority" 
                              value="normal"
                              checked={priority === "normal"}
                              onChange={(e) => setPriority(e.target.value)}
                              className="w-4 h-4 text-blue-600 border-gray-300"
                            />
                            <Label htmlFor="normal" className="text-sm font-medium cursor-pointer flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                              Normal Priority
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <input 
                              type="radio" 
                              id="high" 
                              name="priority" 
                              value="high"
                              checked={priority === "high"}
                              onChange={(e) => setPriority(e.target.value)}
                              className="w-4 h-4 text-red-600 border-gray-300"
                            />
                            <Label htmlFor="high" className="text-sm font-medium cursor-pointer flex items-center">
                              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                              High Priority
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <input 
                              type="radio" 
                              id="urgent" 
                              name="priority" 
                              value="urgent"
                              checked={priority === "urgent"}
                              onChange={(e) => setPriority(e.target.value)}
                              className="w-4 h-4 text-orange-600 border-gray-300"
                            />
                            <Label htmlFor="urgent" className="text-sm font-medium cursor-pointer flex items-center">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                              Urgent Priority
                            </Label>
                          </div>
                        </div>
                      </div>

                      {/* Theme Selection */}
                      <div className="p-4 border rounded-lg space-y-4">
                        <div>
                          <h5 className="font-medium">App Theme</h5>
                          <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="flex items-center space-x-3 p-3 border rounded-lg">
                            <input 
                              type="radio" 
                              id="light-theme" 
                              name="theme" 
                              value="light"
                              checked={theme === "light"}
                              onChange={(e) => setTheme(e.target.value)}
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="light-theme" className="text-sm font-medium cursor-pointer flex items-center">
                              ☀️ Light
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-lg">
                            <input 
                              type="radio" 
                              id="dark-theme" 
                              name="theme" 
                              value="dark"
                              checked={theme === "dark"}
                              onChange={(e) => setTheme(e.target.value)}
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="dark-theme" className="text-sm font-medium cursor-pointer flex items-center">
                              🌙 Dark
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-lg">
                            <input 
                              type="radio" 
                              id="system-theme" 
                              name="theme" 
                              value="system"
                              checked={theme === "system"}
                              onChange={(e) => setTheme(e.target.value)}
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor="system-theme" className="text-sm font-medium cursor-pointer flex items-center">
                              🖥️ System
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Best Practices</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                          <strong className="text-green-800 dark:text-green-200 block mb-2">✅ Do:</strong>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• Use 2-6 options in a group</li>
                            <li>• Provide clear, concise labels</li>
                            <li>• Make the entire label clickable</li>
                            <li>• Group related options logically</li>
                            <li>• Consider default selections</li>
                            <li>• Use consistent sizing</li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                          <strong className="text-red-800 dark:text-red-200 block mb-2">❌ Don&apos;t:</strong>
                          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <li>• Use for multiple selections</li>
                            <li>• Have only one radio button</li>
                            <li>• Use vague or unclear labels</li>
                            <li>• Mix radio buttons with checkboxes</li>
                            <li>• Use too many options (7+)</li>
                            <li>• Make labels too long</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">When to Use Radio Buttons vs Alternatives</h4>
                    <div className="grid gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-medium text-green-600 mb-2">✅ Radio Buttons</h5>
                            <ul className="text-sm space-y-1">
                              <li>• 2-6 mutually exclusive options</li>
                              <li>• Users need to see all options</li>
                              <li>• Options are easily comparable</li>
                              <li>• Form submissions</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-600 mb-2">📋 Select Dropdown</h5>
                            <ul className="text-sm space-y-1">
                              <li>• 7+ options available</li>
                              <li>• Space is constrained</li>
                              <li>• Options are familiar (countries, states)</li>
                              <li>• Default selection is common</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-600 mb-2">🎛️ Segmented Control</h5>
                            <ul className="text-sm space-y-1">
                              <li>• 2-4 options</li>
                              <li>• Immediate state changes</li>
                              <li>• View or filter controls</li>
                              <li>• iOS-style interfaces</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility Tab */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Guidelines</CardTitle>
                <CardDescription>
                  Ensuring radio buttons are accessible to all users, including those using assistive technologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">WCAG Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Keyboard Navigation:</strong> Use arrow keys to navigate between options</li>
                      <li>• <strong>Focus Management:</strong> Clear focus indicators and logical tab order</li>
                      <li>• <strong>Screen Reader Support:</strong> Proper labeling and group context</li>
                      <li>• <strong>Color Independence:</strong> Don&apos;t rely solely on color for state</li>
                      <li>• <strong>Touch Targets:</strong> Minimum 44x44px clickable area</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Attributes</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <code className="text-sm">role=&quot;radiogroup&quot;</code>
                        <p className="text-xs mt-1 text-muted-foreground">Groups related radio buttons</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <code className="text-sm">aria-labelledby</code>
                        <p className="text-xs mt-1 text-muted-foreground">References group label</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <code className="text-sm">aria-describedby</code>
                        <p className="text-xs mt-1 text-muted-foreground">Links to help text or errors</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Keyboard Navigation Demo</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Try using keyboard navigation: Tab to focus the group, then use Arrow keys to select options
                    </p>
                    <fieldset className="space-y-3">
                      <legend className="font-medium text-sm">Delivery Method (Accessible)</legend>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="standard-delivery" 
                            name="delivery-accessible" 
                            value="standard"
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            aria-describedby="delivery-help"
                          />
                          <Label htmlFor="standard-delivery" className="text-sm font-medium cursor-pointer">
                            Standard Delivery (3-5 days)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="express-delivery" 
                            name="delivery-accessible" 
                            value="express"
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            aria-describedby="delivery-help"
                          />
                          <Label htmlFor="express-delivery" className="text-sm font-medium cursor-pointer">
                            Express Delivery (1-2 days)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="overnight-delivery" 
                            name="delivery-accessible" 
                            value="overnight"
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            aria-describedby="delivery-help"
                          />
                          <Label htmlFor="overnight-delivery" className="text-sm font-medium cursor-pointer">
                            Overnight Delivery
                          </Label>
                        </div>
                      </div>
                      <p id="delivery-help" className="text-xs text-muted-foreground">
                        Choose your preferred delivery speed. Additional charges may apply.
                      </p>
                    </fieldset>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Implementation Checklist</h4>
                  <div className="grid gap-3">
                    <div className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center mt-0.5">
                        <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                      </div>
                      <div>
                        <strong className="text-sm">Semantic HTML</strong>
                        <p className="text-xs text-muted-foreground">Use proper input[type=&quot;radio&quot;] elements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center mt-0.5">
                        <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                      </div>
                      <div>
                        <strong className="text-sm">Labels & Fieldsets</strong>
                        <p className="text-xs text-muted-foreground">Associate labels with inputs, use fieldset for grouping</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center mt-0.5">
                        <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                      </div>
                      <div>
                        <strong className="text-sm">Focus Indicators</strong>
                        <p className="text-xs text-muted-foreground">Visible focus rings that meet contrast requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center mt-0.5">
                        <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                      </div>
                      <div>
                        <strong className="text-sm">Error Handling</strong>
                        <p className="text-xs text-muted-foreground">Clear error messages linked with aria-describedby</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center mt-0.5">
                        <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                      </div>
                      <div>
                        <strong className="text-sm">Touch Targets</strong>
                        <p className="text-xs text-muted-foreground">Minimum 44px clickable area including label</p>
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
            description="External resources and design system references for radio button components."
            urls={radioButtonComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum Design System'
              if (url.includes('atlassian.design')) return 'Atlassian Design System'
              if (url.includes('playbook.ebay.com')) return 'eBay Design System Playbook'
              if (url.includes('carbondesignsystem.com')) return 'IBM Carbon Design System'
              if (url.includes('gestalt.pinterest')) return 'Pinterest Gestalt Design System'
              if (url.includes('polaris-react.shopify')) return 'Shopify Polaris Design System'
              if (url.includes('wise.design')) return 'Wise Design System'
              if (url.includes('w3.org')) return 'W3C ARIA Radio Pattern'
              return url
            }}
          />
        </div>
      </div>
    </div>
  )
} 