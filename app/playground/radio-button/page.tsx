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
  const [theme, setTheme] = useState("system")
  const [priority, setPriority] = useState("normal")
  const [frequency, setFrequency] = useState("")
  const [subscription, setSubscription] = useState("monthly")
  const [difficulty, setDifficulty] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Hero Section */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground tracking-tight">Radio Button</h1>
            </div>
            <EditButton filePath="app/playground/radio-button/page.tsx" />
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Radio buttons let users pick one option from a list. They are useful when only a single choice is allowed.
            </p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto">
            <TabsTrigger value="overview" className="text-xs md:text-sm">Overview</TabsTrigger>
            <TabsTrigger value="patterns" className="text-xs md:text-sm">Patterns</TabsTrigger>
            <TabsTrigger value="states" className="text-xs md:text-sm">States</TabsTrigger>
            <TabsTrigger value="layout" className="text-xs md:text-sm">Layout</TabsTrigger>
            <TabsTrigger value="accessibility" className="text-xs md:text-sm">A11y</TabsTrigger>
            <TabsTrigger value="code" className="text-xs md:text-sm">Code</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">When to Use Radio Buttons</CardTitle>
                </CardHeader>
              <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-sm">Mutually Exclusive Choices</strong>
                        <p className="text-sm text-muted-foreground">When users must choose exactly one option from multiple alternatives</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-sm">Limited Options (2-6)</strong>
                        <p className="text-sm text-muted-foreground">Small enough set that all options can be displayed at once</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-sm">Need for Comparison</strong>
                        <p className="text-sm text-muted-foreground">Users benefit from seeing all options to make informed decisions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Alternative Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800">
                      <strong className="text-blue-900 dark:text-blue-100 text-sm">Select Dropdown</strong>
                      <p className="text-xs text-blue-800 dark:text-blue-200 mt-1">Use for 7+ options or when space is limited</p>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-950/50 rounded-lg border border-purple-200 dark:border-purple-800">
                      <strong className="text-purple-900 dark:text-purple-100 text-sm">Checkboxes</strong>
                      <p className="text-xs text-purple-800 dark:text-purple-200 mt-1">Use for multiple selections or independent options</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950/50 rounded-lg border border-green-200 dark:border-green-800">
                      <strong className="text-green-900 dark:text-green-100 text-sm">Toggle/Switch</strong>
                      <p className="text-xs text-green-800 dark:text-green-200 mt-1">Use for simple on/off or binary choices</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Demo */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">Interactive Examples</CardTitle>
                <CardDescription>Try these common radio button patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Payment Method */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Payment Method</h4>
                      <p className="text-xs text-muted-foreground">Select your preferred payment option</p>
                    </div>
                    <div className="space-y-3">
                      {[
                        { id: "credit-card", label: "Credit Card", desc: "Visa, Mastercard, Amex" },
                        { id: "paypal", label: "PayPal", desc: "Fast and secure" },
                        { id: "apple-pay", label: "Apple Pay", desc: "Touch ID or Face ID" }
                      ].map((option) => (
                        <label key={option.id} className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                          <input 
                            type="radio" 
                            name="payment" 
                            value={option.id}
                            checked={paymentMethod === option.id}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300 mt-0.5"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-sm">{option.label}</div>
                            <div className="text-xs text-muted-foreground">{option.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Subscription Plan */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Subscription Plan</h4>
                      <p className="text-xs text-muted-foreground">Choose your billing frequency</p>
                    </div>
                    <div className="space-y-3">
                      {[
                        { id: "monthly", label: "Monthly", price: "$9.99/mo", popular: false },
                        { id: "yearly", label: "Yearly", price: "$99.99/yr", popular: true },
                        { id: "lifetime", label: "Lifetime", price: "$299.99", popular: false }
                      ].map((plan) => (
                        <label key={plan.id} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors relative">
                          <input 
                            type="radio" 
                            name="subscription" 
                            value={plan.id}
                            checked={subscription === plan.id}
                            onChange={(e) => setSubscription(e.target.value)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">{plan.label}</span>
                              {plan.popular && <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full font-medium">Popular</span>}
                            </div>
                            <div className="text-sm text-muted-foreground">{plan.price}</div>
                          </div>
                        </label>
                      ))}
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
                <CardTitle className="text-lg font-bold">Common Usage Patterns</CardTitle>
                <CardDescription>Real-world scenarios and best practices for radio button implementation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Settings Pattern */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Settings & Preferences</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Theme Preference</h4>
                        <div className="space-y-2">
                          {[
                            { id: "light", label: "☀️ Light", desc: "Clean and bright" },
                            { id: "dark", label: "🌙 Dark", desc: "Easy on the eyes" },
                            { id: "system", label: "🖥️ System", desc: "Match device setting" }
                          ].map((option) => (
                            <label key={option.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                              <input 
                                type="radio" 
                                name="theme" 
                                value={option.id}
                                checked={theme === option.id}
                                onChange={(e) => setTheme(e.target.value)}
                                className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                              />
                              <div>
                                <div className="text-sm font-medium">{option.label}</div>
                                <div className="text-xs text-muted-foreground">{option.desc}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Priority Level</h4>
                        <div className="space-y-2">
                          {[
                            { id: "low", label: "Low Priority", color: "green", desc: "Not urgent" },
                            { id: "normal", label: "Normal Priority", color: "blue", desc: "Standard timeline" },
                            { id: "high", label: "High Priority", color: "orange", desc: "Needs attention" },
                            { id: "urgent", label: "Urgent Priority", color: "red", desc: "Critical issue" }
                          ].map((option) => (
                            <label key={option.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                              <input 
                                type="radio" 
                                name="priority" 
                                value={option.id}
                                checked={priority === option.id}
                                onChange={(e) => setPriority(e.target.value)}
                                className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                              />
                              <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full bg-${option.color}-500`}></span>
                                <div>
                                  <div className="text-sm font-medium">{option.label}</div>
                                  <div className="text-xs text-muted-foreground">{option.desc}</div>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Patterns */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Form Patterns</h3>
                  <div className="grid gap-6">
                    <div className="p-4 border rounded-lg space-y-4">
                      <div>
                        <h4 className="font-medium">Survey Question Example</h4>
                        <p className="text-sm text-muted-foreground">How would you rate the difficulty of this task?</p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {[
                          { id: "very-easy", label: "Very Easy", emoji: "😊" },
                          { id: "easy", label: "Easy", emoji: "🙂" },
                          { id: "moderate", label: "Moderate", emoji: "😐" },
                          { id: "hard", label: "Hard", emoji: "😟" },
                          { id: "very-hard", label: "Very Hard", emoji: "😫" }
                        ].map((option) => (
                          <label key={option.id} className="flex flex-col items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors text-center">
                            <input 
                              type="radio" 
                              name="difficulty" 
                              value={option.id}
                              checked={difficulty === option.id}
                              onChange={(e) => setDifficulty(e.target.value)}
                              className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                            />
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-xs font-medium">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xs">✓</span>
                      Best Practices
                    </h4>
                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                      <li>• Use clear, descriptive labels</li>
                      <li>• Make entire label clickable</li>
                      <li>• Provide logical default selections</li>
                      <li>• Group related options together</li>
                      <li>• Use consistent visual styling</li>
                      <li>• Include helpful descriptions when needed</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 text-xs">×</span>
                      Common Mistakes
                    </h4>
                    <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                      <li>• Using for multiple selections</li>
                      <li>• Having only one radio button</li>
                      <li>• Using vague or unclear labels</li>
                      <li>• Mixing with other input types</li>
                      <li>• Having too many options (7+)</li>
                      <li>• Making labels too long or complex</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* States Tab */}
          <TabsContent value="states" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">Radio Button States</CardTitle>
                <CardDescription>Visual states and their proper implementation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Selection States */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Selection States</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <input 
                          type="radio" 
                          id="state-unselected" 
                          name="selection-states" 
                          className="w-5 h-5 text-primary border-gray-300"
                        />
                        <div>
                          <Label htmlFor="state-unselected" className="font-medium cursor-pointer">Unselected</Label>
                          <p className="text-sm text-muted-foreground">Default state, ready for selection</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <input 
                          type="radio" 
                          id="state-selected" 
                          name="selection-states" 
                          defaultChecked
                          className="w-5 h-5 text-primary border-gray-300"
                        />
                        <div>
                          <Label htmlFor="state-selected" className="font-medium cursor-pointer">Selected</Label>
                          <p className="text-sm text-muted-foreground">Active choice, clearly indicated</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive States */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Interactive States</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <input 
                          type="radio" 
                          id="state-hover" 
                          name="interactive-states" 
                          className="w-5 h-5 text-primary border-gray-300 hover:ring-2 hover:ring-primary/20"
                        />
                        <div>
                          <Label htmlFor="state-hover" className="font-medium cursor-pointer">Hover</Label>
                          <p className="text-sm text-muted-foreground">Subtle feedback on mouse over</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <input 
                          type="radio" 
                          id="state-focus" 
                          name="interactive-states" 
                          className="w-5 h-5 text-primary border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                        <div>
                          <Label htmlFor="state-focus" className="font-medium cursor-pointer">Focus</Label>
                          <p className="text-sm text-muted-foreground">Keyboard navigation indicator</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 border rounded-lg opacity-60">
                        <input 
                          type="radio" 
                          id="state-disabled" 
                          name="interactive-states" 
                          disabled
                          className="w-5 h-5 text-primary border-gray-300"
                        />
                        <div>
                          <Label htmlFor="state-disabled" className="font-medium">Disabled</Label>
                          <p className="text-sm text-muted-foreground">Not available for interaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Error States */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Validation States</h3>
                  <div className="grid gap-4">
                    <div className="p-4 border-2 border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/30">
                      <h4 className="font-medium text-red-900 dark:text-red-100 mb-3">Error State Example</h4>
                      <fieldset className="space-y-3">
                        <legend className="text-sm font-medium text-red-800 dark:text-red-200">Select a notification method *</legend>
                        <div className="space-y-2">
                          {["Email", "SMS", "Push Notification"].map((option) => (
                          <div key={option} className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              id={`error-${option.toLowerCase()}`}
                              name="error-demo" 
                              value={option.toLowerCase()}
                              checked={frequency === option.toLowerCase()}
                              onChange={(e) => setFrequency(e.target.value)}
                              className="w-4 h-4 text-red-600 border-red-300 focus:ring-red-500"
                            />
                            <Label htmlFor={`error-${option.toLowerCase()}`} className="text-sm font-medium cursor-pointer text-red-800 dark:text-red-200">
                              {option}
                            </Label>
                          </div>
                        ))}
                        </div>
                        {frequency === "" && (
                          <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                            <span className="text-red-500">⚠</span>
                            Please select a notification method to continue
                          </p>
                        )}
                      </fieldset>
                    </div>

                    <div className="p-4 border-2 border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/30">
                      <h4 className="font-medium text-green-900 dark:text-green-100 mb-3">Success State Example</h4>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          id="success-option" 
                          name="success-demo" 
                          defaultChecked
                          className="w-4 h-4 text-green-600 border-green-300 focus:ring-green-500"
                        />
                        <Label htmlFor="success-option" className="text-sm font-medium cursor-pointer text-green-800 dark:text-green-200">
                          Valid selection made
                        </Label>
                        <span className="text-green-500 text-sm">✓</span>
                      </div>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-2">Great! Your selection has been saved.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Layout Tab */}
          <TabsContent value="layout" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">Layout & Sizing</CardTitle>
                <CardDescription>Different arrangements and size variations for various use cases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Size Variations */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Size Variations</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium">Small</h4>
                      <p className="text-xs text-muted-foreground mb-3">Dense layouts, mobile interfaces</p>
                      <div className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          id="size-small" 
                          name="size-demo-small" 
                          className="w-3 h-3 text-primary border-gray-300"
                        />
                        <Label htmlFor="size-small" className="text-xs font-medium cursor-pointer">Small option</Label>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium">Medium (Default)</h4>
                      <p className="text-xs text-muted-foreground mb-3">Standard size for most interfaces</p>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          id="size-medium" 
                          name="size-demo-medium" 
                          className="w-4 h-4 text-primary border-gray-300"
                        />
                        <Label htmlFor="size-medium" className="text-sm font-medium cursor-pointer">Medium option</Label>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium">Large</h4>
                      <p className="text-xs text-muted-foreground mb-3">Touch-friendly, accessibility focused</p>
                      <div className="flex items-center gap-4">
                        <input 
                          type="radio" 
                          id="size-large" 
                          name="size-demo-large" 
                          className="w-5 h-5 text-primary border-gray-300"
                        />
                        <Label htmlFor="size-large" className="text-base font-medium cursor-pointer">Large option</Label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layout Patterns */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Layout Patterns</h3>
                  <div className="grid gap-6">
                    <div className="p-4 border rounded-lg space-y-4">
                      <h4 className="font-medium">Vertical Stack (Recommended)</h4>
                      <p className="text-sm text-muted-foreground">Best for readability and accessibility</p>
                      <div className="space-y-3">
                        {["Option One", "Option Two", "Option Three"].map((option) => (
                          <div key={option} className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              id={`vertical-${option.toLowerCase().replace(' ', '-')}`}
                              name="layout-vertical" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor={`vertical-${option.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium cursor-pointer">{option}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <h4 className="font-medium">Horizontal Layout</h4>
                      <p className="text-sm text-muted-foreground">Good for binary choices or when space is limited</p>
                      <div className="flex gap-8">
                        {["Yes", "No", "Maybe"].map((option) => (
                          <div key={option} className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              id={`horizontal-${option.toLowerCase()}`}
                              name="layout-horizontal" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor={`horizontal-${option.toLowerCase()}`} className="text-sm font-medium cursor-pointer">{option}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <h4 className="font-medium">Grid Layout</h4>
                      <p className="text-sm text-muted-foreground">Efficient use of space for multiple options</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["Option A", "Option B", "Option C", "Option D"].map((option) => (
                          <div key={option} className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              id={`grid-${option.toLowerCase().replace(' ', '-')}`}
                              name="layout-grid" 
                              className="w-4 h-4 text-primary border-gray-300"
                            />
                            <Label htmlFor={`grid-${option.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium cursor-pointer">{option}</Label>
                          </div>
                        ))}
                    </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <h4 className="font-medium">Card Layout</h4>
                      <p className="text-sm text-muted-foreground">For complex options with additional information</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { title: "Basic Plan", desc: "Perfect for individuals", price: "$9/mo" },
                          { title: "Pro Plan", desc: "Great for teams", price: "$19/mo" }
                        ].map((plan) => (
                          <label key={plan.title} className="block p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                            <div className="flex items-start gap-3">
                              <input 
                                type="radio" 
                                name="layout-cards" 
                                className="w-4 h-4 text-primary border-gray-300 mt-1"
                              />
                              <div className="flex-1">
                                <div className="font-medium text-sm">{plan.title}</div>
                                <div className="text-xs text-muted-foreground">{plan.desc}</div>
                                <div className="text-sm font-semibold mt-1">{plan.price}</div>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacing Guidelines */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Spacing Guidelines</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">Recommended Spacing</h4>
                      <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                        <li>• <strong>Between options:</strong> 12-16px minimum</li>
                        <li>• <strong>Radio to label:</strong> 8-12px gap</li>
                        <li>• <strong>Touch targets:</strong> 44x44px minimum</li>
                        <li>• <strong>Group margins:</strong> 24px from other elements</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-medium text-green-900 dark:text-green-100 mb-3">Alignment Tips</h4>
                      <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                        <li>• <strong>Vertical alignment:</strong> Align radio buttons to text baseline</li>
                        <li>• <strong>Multi-line labels:</strong> Radio button aligns to first line</li>
                        <li>• <strong>Consistent spacing:</strong> Use uniform gaps throughout</li>
                        <li>• <strong>Visual hierarchy:</strong> Group related options clearly</li>
                      </ul>
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
                <CardTitle className="text-xl font-bold">Accessibility Guidelines</CardTitle>
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

          {/* Code Tab */}
          <TabsContent value="code" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">Implementation Examples</CardTitle>
                <CardDescription>Code snippets and implementation patterns for different frameworks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">HTML & CSS Foundation</h3>
                    <div className="p-4 bg-muted rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`<!-- Basic Radio Button Group -->
<fieldset class="radio-group">
  <legend>Choose your plan</legend>
  <div class="radio-option">
    <input type="radio" id="basic" name="plan" value="basic">
    <label for="basic">Basic Plan</label>
  </div>
  <div class="radio-option">
    <input type="radio" id="pro" name="plan" value="pro">
    <label for="pro">Pro Plan</label>
  </div>
</fieldset>

/* CSS Styling */
.radio-group {
  border: none;
  padding: 0;
  margin: 0;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  cursor: pointer;
}

.radio-option:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

input[type="radio"] {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}

input[type="radio"]:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">React Implementation</h3>
                    <div className="p-4 bg-muted rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`import { useState } from 'react'

function RadioGroup({ options, value, onChange, name, label }) {
  return (
    <fieldset className="space-y-3">
      <legend className="font-medium text-sm">{label}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label 
            key={option.value}
            className="flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-50"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

// Usage
function App() {
  const [plan, setPlan] = useState('basic')
  
  const planOptions = [
    { value: 'basic', label: 'Basic Plan' },
    { value: 'pro', label: 'Pro Plan' },
    { value: 'enterprise', label: 'Enterprise Plan' }
  ]

  return (
    <RadioGroup
      options={planOptions}
      value={plan}
      onChange={setPlan}
      name="subscription-plan"
      label="Choose your subscription plan"
    />
  )
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Accessible Implementation</h3>
                    <div className="p-4 bg-muted rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`<!-- Fully Accessible Radio Group -->
<div role="radiogroup" aria-labelledby="payment-method-label" aria-describedby="payment-help">
  <h3 id="payment-method-label">Payment Method</h3>
  
  <div class="radio-option">
    <input 
      type="radio" 
      id="credit-card" 
      name="payment" 
      value="credit-card"
      aria-describedby="payment-help"
      required
    >
    <label for="credit-card">
      <span class="label-text">Credit Card</span>
      <span class="label-desc">Visa, Mastercard, Amex</span>
    </label>
  </div>
  
  <div class="radio-option">
    <input 
      type="radio" 
      id="paypal" 
      name="payment" 
      value="paypal"
      aria-describedby="payment-help"
    >
    <label for="paypal">
      <span class="label-text">PayPal</span>
      <span class="label-desc">Fast and secure</span>
    </label>
  </div>
  
  <p id="payment-help" class="help-text">
    Select your preferred payment method. This will be used for billing.
  </p>
  
  <div id="payment-error" class="error-message" role="alert" aria-live="polite">
    <!-- Error messages appear here -->
  </div>
</div>`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Validation Pattern</h3>
                    <div className="p-4 bg-muted rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`function ValidatedRadioGroup({ 
  options, 
  value, 
  onChange, 
  name, 
  label, 
  required = false,
  error 
}) {
  const hasError = Boolean(error)

  return (
    <fieldset className={cn("space-y-3", hasError && "border-red-300")}>
      <legend className="font-medium text-sm">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </legend>
      
      <div className="space-y-2">
        {options.map((option) => (
          <label 
            key={option.value}
            className={cn(
              "flex items-center gap-3 p-2 rounded cursor-pointer",
              "hover:bg-gray-50 transition-colors",
              hasError && "hover:bg-red-50"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              required={required}
              aria-describedby={error ? \`\${name}-error\` : undefined}
              className={cn(
                "w-4 h-4 focus:ring-2 focus:ring-offset-2",
                hasError 
                  ? "text-red-600 border-red-300 focus:ring-red-500" 
                  : "text-blue-600 border-gray-300 focus:ring-blue-500"
              )}
            />
            <span className="text-sm font-medium">{option.label}</span>
          </label>
        ))}
      </div>
      
      {error && (
        <p 
          id={\`\${name}-error\`}
          className="text-sm text-red-600 flex items-center gap-1"
          role="alert"
        >
          <ExclamationTriangleIcon className="w-4 h-4" />
          {error}
        </p>
      )}
    </fieldset>
  )
}`}</code>
                      </pre>
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