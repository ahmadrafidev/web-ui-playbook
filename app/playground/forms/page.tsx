"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowRight, AlertCircle, CheckCircle, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/header"

export default function FormsPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Forms</h2>
          <p className="text-xl text-gray-600 mb-6">
            Forms are critical for user interaction and data collection. They should be intuitive, accessible, and
            provide clear feedback to users throughout the input process.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>User Input</Badge>
            <Badge>Validation</Badge>
            <Badge>Accessible</Badge>
            <Badge>Responsive</Badge>
          </div>
        </div>

        <Tabs defaultValue="inputs" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inputs">Input Components</TabsTrigger>
            <TabsTrigger value="validation">Validation & Feedback</TabsTrigger>
            <TabsTrigger value="layouts">Form Layouts</TabsTrigger>
          </TabsList>

          {/* Input Fields */}
          <TabsContent value="inputs" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Text Inputs</CardTitle>
                <CardDescription>Basic text input fields for various types of user data.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" aria-describedby="email-help" />
                    <p id="email-help" className="text-sm text-gray-500">
                      We&apos;ll never share your email with anyone else.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message here..." rows={4} />
                </div>

                {/* Best Practices */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best Practices</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Use appropriate input types (email, tel, url) for mobile keyboards</li>
                    <li>• Provide helpful placeholder text and descriptions</li>
                    <li>• Use autocomplete attributes for better UX</li>
                    <li>• Group related fields logically</li>
                  </ul>
                </div>

                {/* Accessibility */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Accessibility</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Always associate labels with inputs using htmlFor/id</li>
                    <li>• Use aria-describedby for help text and instructions</li>
                    <li>• Provide clear error messages with aria-invalid</li>
                    <li>• Ensure sufficient color contrast for all states</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Selection Controls</CardTitle>
                <CardDescription>Dropdowns, checkboxes, and radio buttons for user selections.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Preferred Contact Method</Label>
                    <RadioGroup defaultValue="email">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="contact-phone" />
                        <Label htmlFor="contact-phone">Phone</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sms" id="contact-sms" />
                        <Label htmlFor="contact-sms">SMS</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Interests (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-tech" />
                      <Label htmlFor="interest-tech">Technology</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-design" />
                      <Label htmlFor="interest-design">Design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-business" />
                      <Label htmlFor="interest-business">Business</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-marketing" />
                      <Label htmlFor="interest-marketing">Marketing</Label>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best Practices</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Use radio buttons for single selection, checkboxes for multiple</li>
                    <li>• Provide clear labels and group related options</li>
                    <li>• Consider default selections for common choices</li>
                    <li>• Use fieldsets and legends for grouped controls</li>
                  </ul>
                </div>

                {/* Accessibility */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Accessibility</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Use fieldset and legend for radio button groups</li>
                    <li>• Ensure all controls are keyboard accessible</li>
                    <li>• Provide clear instructions for multi-select options</li>
                    <li>• Use appropriate ARIA attributes for custom controls</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Validation */}
          <TabsContent value="validation" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Form Validation</CardTitle>
                <CardDescription>
                  Proper validation provides immediate feedback and guides users to successful form completion.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="valid-email">Email (Valid)</Label>
                    <Input
                      id="valid-email"
                      type="email"
                      value="user@example.com"
                      className="border-green-500 focus:ring-green-500"
                      readOnly
                    />
                    <p className="text-sm text-green-600 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Valid email address
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="invalid-email">Email (Invalid)</Label>
                    <Input
                      id="invalid-email"
                      type="email"
                      value="invalid-email"
                      className="border-red-500 focus:ring-red-500"
                      readOnly
                    />
                    <p className="text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Please enter a valid email address
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="required-field">Required Field</Label>
                    <Input id="required-field" placeholder="This field is required" required aria-required="true" />
                    <p className="text-sm text-gray-500">* Required field</p>
                  </div>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Validation Best Practices:</strong>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Validate on blur, not on every keystroke</li>
                      <li>Show success states for completed fields</li>
                      <li>Use clear, actionable error messages</li>
                      <li>Indicate required fields clearly</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-time Validation Example</CardTitle>
                <CardDescription>Interactive form with live validation feedback.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Enter username (min 3 characters)" minLength={3} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirm your password" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Form Layouts */}
          <TabsContent value="layouts" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Single Column Layout</CardTitle>
                <CardDescription>Ideal for simple forms and mobile-first design.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="single-name">Full Name</Label>
                    <Input id="single-name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="single-email">Email</Label>
                    <Input id="single-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="single-phone">Phone</Label>
                    <Input id="single-phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two Column Layout</CardTitle>
                <CardDescription>Efficient use of space for longer forms on desktop.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="First name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="ZIP code" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Street address" />
                  </div>

                  <Button type="submit">Save Information</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Form Accessibility</CardTitle>
                <CardDescription>Essential practices for making forms accessible to all users.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Labels and Associations</h4>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <code className="text-sm">
                      {`<!-- Always associate labels with inputs -->`}
                      <br />
                      {`<label for="email">Email Address</label>`}
                      <br />
                      {`<input id="email" type="email" name="email" />`}
                      <br />
                      <br />
                      {`<!-- Or use implicit association -->`}
                      <br />
                      {`<label>`}
                      <br />
                      {`  Email Address`}
                      <br />
                      {`  <input type="email" name="email" />`}
                      <br />
                      {`</label>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Error Handling</h4>
                  <div className="space-y-2">
                    <Label htmlFor="accessible-email">Email Address</Label>
                    <Input
                      id="accessible-email"
                      type="email"
                      aria-describedby="email-error"
                      aria-invalid="true"
                      className="border-red-500"
                    />
                    <p id="email-error" className="text-sm text-red-600" role="alert">
                      Please enter a valid email address
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Fieldsets and Legends</h4>
                  <fieldset className="border border-gray-300 rounded-lg p-4">
                    <legend className="px-2 font-semibold">Contact Preferences</legend>
                    <RadioGroup defaultValue="email">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="pref-email" />
                        <Label htmlFor="pref-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="pref-phone" />
                        <Label htmlFor="pref-phone">Phone</Label>
                      </div>
                    </RadioGroup>
                  </fieldset>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>WCAG Guidelines:</strong>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Provide clear instructions and labels</li>
                      <li>Use appropriate ARIA attributes</li>
                      <li>Ensure keyboard navigation works</li>
                      <li>Provide error identification and suggestions</li>
                      <li>Allow users to review and correct submissions</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link href="/buttons" className="text-blue-600 hover:text-blue-700 transition-colors">
            ← Previous: Buttons
          </Link>
          <Link href="/navigation" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
            Next: Navigation <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
