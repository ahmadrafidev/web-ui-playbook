"use client"

import { useState } from "react"
import { Eye, EyeOff, Search, X, AlertCircle, CheckCircle2, User, Mail, Lock, Phone, CreditCard, Calendar, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"

const textInputComponentsUrlReference = [
  "https://wise.design/components/text-input",
  "https://design.visa.com/components/input/usage/",
  "https://www.w3.org/WAI/tutorials/forms/",
  "https://playbook.ebay.com/design-system/components/text-field",
  "https://spectrum.adobe.com/page/text-field/",
  "https://developer.apple.com/design/human-interface-guidelines/text-fields",
  "https://primer.style/product/components/text-input/accessibility/",
  "https://m3.material.io/components/text-fields/accessibility",
  "https://polaris-react.shopify.com/components/selection-and-input/text-field",
  "https://base.uber.com/6d2425e9f/p/51073e-text-field"
]

// Custom Text Input Component 
interface TextInputProps {
  id?: string
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: "text" | "email" | "password" | "tel" | "search" | "url" | "number"
  disabled?: boolean
  required?: boolean
  error?: string
  success?: string
  description?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClear?: () => void
  autoComplete?: string
  maxLength?: number
  size?: "sm" | "md" | "lg"
  variant?: "default" | "filled" | "outline"
  className?: string
}

function TextInput({
  id,
  label,
  placeholder,
  value = "",
  onChange,
  type = "text",
  disabled = false,
  required = false,
  error,
  success,
  description,
  leftIcon,
  rightIcon,
  onClear,
  autoComplete,
  maxLength,
  size = "md",
  variant = "default",
  className = "",
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  
  const hasError = !!error
  const hasSuccess = !!success && !hasError
  const showClearButton = value && onClear && !disabled && isFocused
  const inputType = type === "password" && showPassword ? "text" : type
  
  const sizeClasses = {
    sm: "h-8 text-sm px-3",
    md: "h-10 text-sm px-3", 
    lg: "h-12 text-base px-4"
  }
  
  const variantClasses = {
    default: "border-input bg-background",
    filled: "border-transparent bg-muted",
    outline: "border-2 border-input bg-background"
  }
  
  const containerClass = `
    relative flex items-center
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${hasError ? 'border-red-500 focus-within:border-red-500' : ''}
    ${hasSuccess ? 'border-green-500 focus-within:border-green-500' : ''}
    ${!hasError && !hasSuccess ? 'focus-within:border-primary' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    rounded-md border transition-all duration-200
    focus-within:ring-2 focus-within:ring-primary/20
    ${className}
  `.trim()
  
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className={containerClass}>
        {leftIcon && (
          <div className="flex items-center justify-center text-muted-foreground mr-2">
            {leftIcon}
          </div>
        )}
        
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          maxLength={maxLength}
          className="flex-1 bg-transparent border-none outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
          aria-describedby={
            [
              description ? `${id}-description` : '',
              error ? `${id}-error` : '',
              success ? `${id}-success` : ''
            ].filter(Boolean).join(' ') || undefined
          }
          aria-invalid={hasError}
        />
        
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors p-1 ml-1"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
        
        {showClearButton && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors p-1 ml-1"
            aria-label="Clear input"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        
        {rightIcon && !showClearButton && type !== "password" && (
          <div className="flex items-center justify-center text-muted-foreground ml-2">
            {rightIcon}
          </div>
        )}
        
        {hasError && (
          <div className="flex items-center justify-center text-red-500 ml-2">
            <AlertCircle className="h-4 w-4" />
          </div>
        )}
        
        {hasSuccess && (
          <div className="flex items-center justify-center text-green-500 ml-2">
            <CheckCircle2 className="h-4 w-4" />
          </div>
        )}
      </div>
      
      {description && !error && !success && (
        <p id={`${id}-description`} className="text-sm text-muted-foreground">
          {description}
        </p>
      )}
      
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
      
      {success && (
        <p id={`${id}-success`} className="text-sm text-green-600 flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" />
          {success}
        </p>
      )}
    </div>
  )
}

export default function TextInputPage() {
  const { MobileWarning } = useMobileWarning()
  
  // Demo state
  const [basicInput, setBasicInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [phoneInput, setPhoneInput] = useState("")
  const [cardInput, setCardInput] = useState("")
  const [errorInput, setErrorInput] = useState("")
  const [successInput, setSuccessInput] = useState("Valid input")
  const [accessibleEmailInput, setAccessibleEmailInput] = useState("")
  const [accessiblePasswordInput, setAccessiblePasswordInput] = useState("")
  const [accessibleFormData, setAccessibleFormData] = useState({
    firstName: "",
    lastName: "",
    username: ""
  })
  
  const getTitleFunction = (url: string): string => {
    const urlMap: Record<string, string> = {
      "https://wise.design/components/text-input": "Wise Design - Text Input",
      "https://design.visa.com/components/input/usage/": "Visa Design - Input Usage",
      "https://www.w3.org/WAI/tutorials/forms/": "W3C WAI - Forms Tutorial",
      "https://playbook.ebay.com/design-system/components/text-field": "eBay Playbook - Text Field",
      "https://spectrum.adobe.com/page/text-field/": "Adobe Spectrum - Text Field",
      "https://developer.apple.com/design/human-interface-guidelines/text-fields": "Apple HIG - Text Fields",
      "https://primer.style/product/components/text-input/accessibility/": "GitHub Primer - Text Input Accessibility",
      "https://m3.material.io/components/text-fields/accessibility": "Material Design - Text Fields",
      "https://polaris-react.shopify.com/components/selection-and-input/text-field": "Shopify Polaris - Text Field",
      "https://base.uber.com/6d2425e9f/p/51073e-text-field": "Uber Base - Text Field"
    }
    return urlMap[url] || url
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Text Input</h2>
            <EditButton filePath="app/playground/text-input/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Text inputs allow users to enter and edit single-line text content. They are fundamental form elements that provide accessible, 
            flexible data entry with proper validation, states, and user feedback mechanisms.
          </p>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">When to Use Text Input</CardTitle>
                <CardDescription>
                  Understanding the appropriate use cases for text input components in your interface.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Use Text Input When:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Free-form text entry:</strong> Names, messages, descriptions</li>
                      <li>• <strong>Single-line data:</strong> Email addresses, phone numbers</li>
                      <li>• <strong>Search functionality:</strong> Query input and filtering</li>
                      <li>• <strong>Unique information:</strong> Cannot be selected from a predefined list</li>
                      <li>• <strong>User-generated content:</strong> Comments, titles, usernames</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Don&apos;t Use When:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Multi-line text:</strong> Use textarea instead</li>
                      <li>• <strong>Predefined options:</strong> Use select or radio buttons</li>
                      <li>• <strong>Binary choices:</strong> Use checkbox or switch</li>
                      <li>• <strong>Date selection:</strong> Use date picker</li>
                      <li>• <strong>Numeric ranges:</strong> Use slider or stepper</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Basic Examples</h4>
                  <div className="grid gap-6">
                    <div className="space-y-4">
                      <TextInput
                        id="basic-input"
                        label="Full Name"
                        placeholder="Enter your full name"
                        value={basicInput}
                        onChange={setBasicInput}
                        required
                        description="Please enter your first and last name"
                      />
                      
                      <TextInput
                        id="email-input"
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        value={emailInput}
                        onChange={setEmailInput}
                        leftIcon={<Mail className="h-4 w-4" />}
                        required
                        autoComplete="email"
                      />
                      
                      <TextInput
                        id="search-input"
                        type="search"
                        placeholder="Search components..."
                        value={searchInput}
                        onChange={setSearchInput}
                        onClear={() => setSearchInput("")}
                        leftIcon={<Search className="h-4 w-4" />}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Variants */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Input Variants & Sizes</CardTitle>
                <CardDescription>
                  Different visual styles and sizes to match your design requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Visual Variants</h4>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Default (Outlined)</label>
                        <TextInput
                          variant="default"
                          placeholder="Default variant"
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Filled</label>
                        <TextInput
                          variant="filled"
                          placeholder="Filled variant"
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Outline</label>
                        <TextInput
                          variant="outline"
                          placeholder="Outline variant"
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Size Options</h4>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Small</label>
                        <TextInput
                          size="sm"
                          placeholder="Small size"
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Medium (Default)</label>
                        <TextInput
                          size="md"
                          placeholder="Medium size"
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Large</label>
                        <TextInput
                          size="lg"
                          placeholder="Large size"
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Input Types</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <TextInput
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        value={passwordInput}
                        onChange={setPasswordInput}
                        leftIcon={<Lock className="h-4 w-4" />}
                      />
                      <TextInput
                        label="Phone Number"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={phoneInput}
                        onChange={setPhoneInput}
                        leftIcon={<Phone className="h-4 w-4" />}
                        autoComplete="tel"
                      />
                      <TextInput
                        label="Card Number"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardInput}
                        onChange={setCardInput}
                        leftIcon={<CreditCard className="h-4 w-4" />}
                        maxLength={19}
                      />
                      <TextInput
                        label="Website"
                        type="url"
                        placeholder="https://example.com"
                        value=""
                        onChange={() => {}}
                        autoComplete="url"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* States */}
          <TabsContent value="states" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Input States</CardTitle>
                <CardDescription>
                  Various states that text inputs can have for better user feedback and accessibility.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Validation States</h4>
                    <div className="space-y-4">
                      <TextInput
                        label="Error State"
                        placeholder="Enter valid email"
                        value={errorInput}
                        onChange={setErrorInput}
                        error="Please enter a valid email address"
                        leftIcon={<Mail className="h-4 w-4" />}
                      />
                      
                      <TextInput
                        label="Success State"
                        placeholder="Enter valid data"
                        value={successInput}
                        onChange={setSuccessInput}
                        success="Email format is valid"
                        leftIcon={<Mail className="h-4 w-4" />}
                      />
                      
                      <TextInput
                        label="Disabled State"
                        placeholder="This field is disabled"
                        value="Cannot be edited"
                        onChange={() => {}}
                        disabled
                        leftIcon={<User className="h-4 w-4" />}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Interactive Features</h4>
                    <div className="space-y-4">
                      <TextInput
                        label="With Clear Button"
                        placeholder="Type to see clear button"
                        value={searchInput}
                        onChange={setSearchInput}
                        onClear={() => setSearchInput("")}
                        description="Clear button appears when focused and has content"
                      />
                      
                      <TextInput
                        label="Character Limit"
                        placeholder="Max 20 characters"
                        value=""
                        onChange={() => {}}
                        maxLength={20}
                        description="Limited to 20 characters"
                      />
                      
                      <TextInput
                        label="Required Field"
                        placeholder="This field is required"
                        value=""
                        onChange={() => {}}
                        required
                        description="Required fields are marked with an asterisk"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Focus & Interaction States</h4>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <div className="space-y-3 text-sm">
                      <div><strong>Default:</strong> Normal appearance with subtle border</div>
                      <div><strong>Hover:</strong> Slightly darker border on mouse over</div>
                      <div><strong>Focus:</strong> Primary color border with ring for keyboard navigation</div>
                      <div><strong>Active:</strong> Pressed state with visual feedback</div>
                      <div><strong>Filled:</strong> Shows content with appropriate validation state</div>
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
                <CardTitle className="text-xl font-bold">Common Input Patterns</CardTitle>
                <CardDescription>
                  Real-world examples and patterns for implementing text inputs effectively.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Form Groups</h4>
                    <div className="grid md:grid-cols-2 gap-4 p-4 border rounded-lg">
                      <TextInput
                        label="First Name"
                        placeholder="John"
                        value=""
                        onChange={() => {}}
                        required
                      />
                      <TextInput
                        label="Last Name"
                        placeholder="Doe"
                        value=""
                        onChange={() => {}}
                        required
                      />
                      <TextInput
                        label="Email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value=""
                        onChange={() => {}}
                        leftIcon={<Mail className="h-4 w-4" />}
                        required
                      />
                      <TextInput
                        label="Phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value=""
                        onChange={() => {}}
                        leftIcon={<Phone className="h-4 w-4" />}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Payment Form</h4>
                    <div className="space-y-4 p-4 border rounded-lg">
                      <TextInput
                        label="Card Number"
                        placeholder="1234 5678 9012 3456"
                        value=""
                        onChange={() => {}}
                        leftIcon={<CreditCard className="h-4 w-4" />}
                        maxLength={19}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <TextInput
                          label="Expiry Date"
                          placeholder="MM/YY"
                          value=""
                          onChange={() => {}}
                          leftIcon={<Calendar className="h-4 w-4" />}
                          maxLength={5}
                        />
                        <TextInput
                          label="CVV"
                          type="password"
                          placeholder="123"
                          value=""
                          onChange={() => {}}
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Search & Filter</h4>
                    <div className="space-y-4">
                      <TextInput
                        type="search"
                        placeholder="Search products, categories, or brands..."
                        value={searchInput}
                        onChange={setSearchInput}
                        onClear={() => setSearchInput("")}
                        leftIcon={<Search className="h-4 w-4" />}
                        size="lg"
                      />
                      <div className="grid md:grid-cols-3 gap-4">
                        <TextInput
                          label="Min Price"
                          type="number"
                          placeholder="0"
                          value=""
                          onChange={() => {}}
                          leftIcon={<DollarSign className="h-4 w-4" />}
                        />
                        <TextInput
                          label="Max Price"
                          type="number"
                          placeholder="1000"
                          value=""
                          onChange={() => {}}
                          leftIcon={<DollarSign className="h-4 w-4" />}
                        />
                        <TextInput
                          label="Brand"
                          placeholder="Enter brand name"
                          value=""
                          onChange={() => {}}
                        />
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
                <CardTitle className="text-xl font-bold">Accessibility Guidelines</CardTitle>
                <CardDescription>
                  Ensuring text inputs are accessible to all users with proper ARIA support and keyboard navigation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Support</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>aria-label:</strong> Descriptive label for screen readers</li>
                      <li>• <strong>aria-describedby:</strong> Links to help text and errors</li>
                      <li>• <strong>aria-invalid:</strong> Indicates validation state</li>
                      <li>• <strong>aria-required:</strong> Marks required fields</li>
                      <li>• <strong>role=&quot;textbox&quot;:</strong> Semantic role for inputs</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Keyboard Navigation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Tab:</strong> Navigate between form fields</li>
                      <li>• <strong>Shift + Tab:</strong> Navigate backwards</li>
                      <li>• <strong>Enter:</strong> Submit form or activate buttons</li>
                      <li>• <strong>Escape:</strong> Clear field or close suggestions</li>
                      <li>• <strong>Arrow keys:</strong> Navigate within the text</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Best Practices</h4>
                  <div className="grid gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✓ Do</h5>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Provide clear, concise labels for every input</li>
                        <li>• Use appropriate input types (email, tel, password)</li>
                        <li>• Include helpful descriptions and error messages</li>
                        <li>• Ensure sufficient color contrast (4.5:1 minimum)</li>
                        <li>• Make clickable areas at least 44px for touch devices</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">✗ Don&apos;t</h5>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Use placeholder text as the only label</li>
                        <li>• Rely solely on color to indicate states</li>
                        <li>• Make inputs too small for easy interaction</li>
                        <li>• Use vague or technical error messages</li>
                        <li>• Auto-focus inputs without user intention</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-semibold text-lg">Interactive Accessible Examples</h4>
                  
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg bg-muted/20">
                      <h5 className="font-medium mb-3">Complete Accessible Email Input</h5>
                      <TextInput
                        id="accessible-email"
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email address"
                        value={accessibleEmailInput}
                        onChange={setAccessibleEmailInput}
                        onClear={() => setAccessibleEmailInput("")}
                        leftIcon={<Mail className="h-4 w-4" />}
                        required
                        autoComplete="email"
                        description="We'll use this to send you important account updates and notifications"
                        error={accessibleEmailInput && !accessibleEmailInput.includes("@") ? "Please enter a valid email address" : undefined}
                        success={accessibleEmailInput.includes("@") && accessibleEmailInput.includes(".") ? "Email format looks good" : undefined}
                      />
                      <div className="mt-3 text-sm text-muted-foreground">
                        <p><strong>Accessibility Features:</strong> Proper labeling, semantic input type, ARIA descriptions, validation feedback, keyboard navigation, and screen reader support.</p>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-muted/20">
                      <h5 className="font-medium mb-3">Accessible Password Input</h5>
                      <TextInput
                        id="accessible-password"
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={accessiblePasswordInput}
                        onChange={setAccessiblePasswordInput}
                        leftIcon={<Lock className="h-4 w-4" />}
                        required
                        autoComplete="current-password"
                        description="Password must be at least 8 characters long"
                        error={accessiblePasswordInput && accessiblePasswordInput.length < 8 ? "Password must be at least 8 characters" : undefined}
                        success={accessiblePasswordInput.length >= 8 ? "Password length is good" : undefined}
                      />
                      <div className="mt-3 text-sm text-muted-foreground">
                        <p><strong>Features:</strong> Password visibility toggle, length validation, secure autocomplete, and clear error messaging.</p>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-muted/20">
                      <h5 className="font-medium mb-3">Accessible Form Group</h5>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <TextInput
                            id="accessible-first-name"
                            label="First Name"
                            placeholder="Enter your first name"
                            value={accessibleFormData.firstName}
                            onChange={(value) => setAccessibleFormData(prev => ({ ...prev, firstName: value }))}
                            required
                            autoComplete="given-name"
                            leftIcon={<User className="h-4 w-4" />}
                          />
                          <TextInput
                            id="accessible-last-name"
                            label="Last Name"
                            placeholder="Enter your last name"
                            value={accessibleFormData.lastName}
                            onChange={(value) => setAccessibleFormData(prev => ({ ...prev, lastName: value }))}
                            required
                            autoComplete="family-name"
                            leftIcon={<User className="h-4 w-4" />}
                          />
                        </div>
                        <TextInput
                          id="accessible-username"
                          label="Username"
                          placeholder="Choose a unique username"
                          value={accessibleFormData.username}
                          onChange={(value) => setAccessibleFormData(prev => ({ ...prev, username: value }))}
                          onClear={() => setAccessibleFormData(prev => ({ ...prev, username: "" }))}
                          required
                          autoComplete="username"
                          description="Username must be 3-20 characters, letters and numbers only"
                          maxLength={20}
                          error={accessibleFormData.username && accessibleFormData.username.length < 3 ? "Username must be at least 3 characters" : undefined}
                          success={accessibleFormData.username.length >= 3 && accessibleFormData.username.length <= 20 ? "Username is available" : undefined}
                        />
                      </div>
                      <div className="mt-3 text-sm text-muted-foreground">
                        <p><strong>Features:</strong> Logical tab order, proper field grouping, consistent labeling, and coordinated validation states.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Screen Reader Announcements</h4>
                  <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                    <div className="space-y-3 text-sm">
                      <div><strong>Field Focus:</strong> "Email Address, required, edit text, Enter your email address"</div>
                      <div><strong>Error State:</strong> "Email Address, required, invalid entry, Please enter a valid email address"</div>
                      <div><strong>Success State:</strong> "Email Address, required, Email format looks good"</div>
                      <div><strong>Description:</strong> "We'll use this to send you important account updates"</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">WCAG 2.1 Compliance</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Level AA Requirements</h5>
                      <ul className="text-sm space-y-1">
                        <li>✓ Color contrast ratio ≥ 4.5:1</li>
                        <li>✓ Keyboard accessible navigation</li>
                        <li>✓ Focus indicators visible</li>
                        <li>✓ Error identification and description</li>
                        <li>✓ Labels and instructions provided</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Enhanced Features</h5>
                      <ul className="text-sm space-y-1">
                        <li>✓ Touch target size ≥ 44px</li>
                        <li>✓ Consistent interaction patterns</li>
                        <li>✓ Clear visual hierarchy</li>
                        <li>✓ Meaningful error messages</li>
                        <li>✓ Progressive enhancement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </TabsContent>
        </Tabs>

        {/* References Section */}
        <div className="mt-6">
          <ComponentReferences
            title="References & Further Reading"
            description="Essential references for text input component implementation and best practices."
            urls={textInputComponentsUrlReference}
            getTitleFunction={getTitleFunction}
          />
        </div>
      </div>
    </div>
  )
} 