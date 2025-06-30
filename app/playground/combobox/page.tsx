"use client"

import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { ChevronDown, ChevronUp, Search, X, Check, AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"

const comboboxComponentsUrlReference = [
  "https://spectrum.adobe.com/page/combo-box/",
  "https://developer.apple.com/design/human-interface-guidelines/combo-boxes",
  "https://polaris-react.shopify.com/components/selection-and-input/combobox",
  "https://design.visa.com/components/combobox/accessibility/#keyboard-controls",
  "https://playbook.ebay.com/design-system/components/combobox",
  "https://gestalt.pinterest.systems/web/combobox"
]

// Sample data for examples
const countries = [
  { value: "us", label: "United States", code: "🇺🇸" },
  { value: "ca", label: "Canada", code: "🇨🇦" },
  { value: "uk", label: "United Kingdom", code: "🇬🇧" },
  { value: "de", label: "Germany", code: "🇩🇪" },
  { value: "fr", label: "France", code: "🇫🇷" },
  { value: "jp", label: "Japan", code: "🇯🇵" },
  { value: "au", label: "Australia", code: "🇦🇺" },
  { value: "br", label: "Brazil", code: "🇧🇷" }
]

const tags = [
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "nextjs", label: "Next.js" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "nodejs", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "vue", label: "Vue.js" }
]

// Combobox Option Interface
interface ComboboxOption {
  value: string
  label: string
  code?: string
  disabled?: boolean
}

// Main Combobox Component
interface ComboboxProps {
  id?: string
  label?: string
  placeholder?: string
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  options: ComboboxOption[]
  disabled?: boolean
  required?: boolean
  error?: string
  success?: string
  description?: string
  allowMultiple?: boolean
  isLoading?: boolean
  emptyMessage?: string
  maxHeight?: string
  className?: string
}

function Combobox({
  id,
  label,
  placeholder = "Search...",
  value,
  onChange,
  options,
  disabled = false,
  required = false,
  error,
  success,
  description,
  allowMultiple = false,

  isLoading = false,
  emptyMessage = "No options found",
  maxHeight = "200px",
  className = ""
}: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [selectedValues, setSelectedValues] = useState<string[]>(
    allowMultiple 
      ? Array.isArray(value) ? value : []
      : typeof value === "string" ? [value] : []
  )

  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Filter options based on input value
  const filteredOptions = useMemo(() => {
    if (!inputValue) return options
    return options.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    )
  }, [options, inputValue])

  // Handle option selection
  const handleSelect = useCallback((option: ComboboxOption) => {
    if (option.disabled) return

    let newValues: string[]
    
    if (allowMultiple) {
      if (selectedValues.includes(option.value)) {
        newValues = selectedValues.filter(v => v !== option.value)
      } else {
        newValues = [...selectedValues, option.value]
      }
    } else {
      newValues = [option.value]
      setIsOpen(false)
      setInputValue(option.label)
    }

    setSelectedValues(newValues)
    onChange?.(allowMultiple ? newValues : newValues[0] || "")
  }, [allowMultiple, selectedValues, onChange])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setFocusedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          )
        }
        break
      case "ArrowUp":
        e.preventDefault()
        if (isOpen) {
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          )
        }
        break
      case "Enter":
        e.preventDefault()
        if (isOpen && focusedIndex >= 0) {
          handleSelect(filteredOptions[focusedIndex])
        } else if (!isOpen) {
          setIsOpen(true)
        }
        break
      case "Escape":
        e.preventDefault()
        setIsOpen(false)
        setFocusedIndex(-1)
        inputRef.current?.blur()
        break
      case "Tab":
        setIsOpen(false)
        setFocusedIndex(-1)
        break
    }
  }, [isOpen, focusedIndex, filteredOptions, handleSelect])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setFocusedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Remove selected value (for multi-select)
  const removeValue = useCallback((valueToRemove: string) => {
    const newValues = selectedValues.filter(v => v !== valueToRemove)
    setSelectedValues(newValues)
    onChange?.(allowMultiple ? newValues : "")
  }, [selectedValues, allowMultiple, onChange])

  const hasError = !!error
  const hasSuccess = !!success && !hasError

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label 
          htmlFor={id}
          className="block text-sm font-medium text-foreground mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Selected values display (multi-select) */}
      {allowMultiple && selectedValues.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {selectedValues.map(val => {
            const option = options.find(opt => opt.value === val)
            return (
              <span
                key={val}
                className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-sm"
              >
                {option?.code} {option?.label || val}
                <button
                  type="button"
                  onClick={() => removeValue(val)}
                  className="hover:bg-primary/20 rounded-sm p-0.5"
                  aria-label={`Remove ${option?.label || val}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )
          })}
        </div>
      )}

      {/* Input field */}
      <div className={`
        relative flex items-center border rounded-md transition-all duration-200
        ${hasError ? 'border-red-500 focus-within:border-red-500' : ''}
        ${hasSuccess ? 'border-green-500 focus-within:border-green-500' : ''}
        ${!hasError && !hasSuccess ? 'border-input focus-within:border-primary' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed bg-muted' : 'bg-background'}
        focus-within:ring-2 focus-within:ring-primary/20
      `}>
        <Search className="h-4 w-4 text-muted-foreground ml-3" />
        <input
          ref={inputRef}
          id={id}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            if (!isOpen) setIsOpen(true)
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          disabled={disabled}
          required={required}
          className="flex-1 px-3 py-2 bg-transparent border-none outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${id}-listbox`}
          aria-activedescendant={
            focusedIndex >= 0 ? `${id}-option-${focusedIndex}` : undefined
          }
          aria-describedby={
            [
              description ? `${id}-description` : '',
              error ? `${id}-error` : '',
              success ? `${id}-success` : ''
            ].filter(Boolean).join(' ') || undefined
          }
          aria-invalid={hasError}
        />
        
        {isLoading && <Loader2 className="h-4 w-4 text-muted-foreground animate-spin mr-2" />}
        
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
          className="flex items-center justify-center p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={isOpen ? "Close options" : "Open options"}
        >
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {hasError && (
          <div className="flex items-center justify-center text-red-500 mr-2">
            <AlertCircle className="h-4 w-4" />
          </div>
        )}

        {hasSuccess && (
          <div className="flex items-center justify-center text-green-500 mr-2">
            <CheckCircle2 className="h-4 w-4" />
          </div>
        )}
      </div>

      {/* Dropdown list */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border rounded-md shadow-lg">
          <ul
            ref={listRef}
            id={`${id}-listbox`}
            role="listbox"
            aria-multiselectable={allowMultiple}
            className="py-1"
            style={{ maxHeight }}
            tabIndex={-1}
          >
            {isLoading ? (
              <li className="px-3 py-2 text-center text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin mx-auto" />
                <span className="block mt-1">Loading...</span>
              </li>
            ) : filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  id={`${id}-option-${index}`}
                  role="option"
                  aria-selected={selectedValues.includes(option.value)}
                  onClick={() => handleSelect(option)}
                  className={`
                    px-3 py-2 cursor-pointer transition-colors flex items-center justify-between
                    ${index === focusedIndex ? 'bg-primary/10' : ''}
                    ${selectedValues.includes(option.value) ? 'bg-primary/5' : ''}
                    ${option.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-muted'}
                  `}
                >
                  <span className="flex items-center gap-2">
                    {option.code} {option.label}
                  </span>
                  {selectedValues.includes(option.value) && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-center text-muted-foreground">
                {emptyMessage}
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Help text */}
      {description && !error && !success && (
        <p id={`${id}-description`} className="text-sm text-muted-foreground mt-1">
          {description}
        </p>
      )}

      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600 flex items-center gap-1 mt-1">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}

      {success && (
        <p id={`${id}-success`} className="text-sm text-green-600 flex items-center gap-1 mt-1">
          <CheckCircle2 className="h-3 w-3" />
          {success}
        </p>
      )}
    </div>
  )
}

export default function ComboboxPage() {
  const { MobileWarning } = useMobileWarning()
  const [singleValue, setSingleValue] = useState("")
  const [countryValue, setCountryValue] = useState("")
  const [tagValues, setTagValues] = useState<string[]>([])
  const [loadingValue, setLoadingValue] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {MobileWarning}
      <div className="container max-w-5xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Combobox</h2>
            <EditButton filePath="app/playground/combobox/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            A combobox is an input control that combines a text field with a dropdown list, allowing users to either type to filter options or select from a predefined list. It provides an efficient way to handle large datasets while maintaining searchability and accessibility.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Searchable</Badge>
            <Badge>Accessible</Badge>
            <Badge>Keyboard Navigation</Badge>
            <Badge>Multi-select</Badge>
            <Badge>Customizable</Badge>
          </div>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>When to Use Combobox</CardTitle>
                <CardDescription>
                  Understanding the appropriate use cases for combobox components in your interface.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Primary Use Cases</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Large Option Sets:</strong> When you have many options ({">"}10) that benefit from search</li>
                      <li>• <strong>Predictive Search:</strong> Auto-complete functionality for known values</li>
                      <li>• <strong>Tagging Systems:</strong> Adding multiple tags or categories</li>
                      <li>• <strong>Data Entry:</strong> Forms with searchable reference data</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Combobox vs Alternatives</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Combobox When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Many options need filtering</li>
                          <li>• Users know what they&apos;re looking for</li>
                          <li>• Custom input is allowed</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200">Use Select When:</strong>
                        <ul className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                          <li>• Few options ({"<"}10)</li>
                          <li>• Users need to see all options</li>
                          <li>• No custom input needed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Basic Example</h4>
                  <div className="p-6 border rounded-lg space-y-4">
                    <Combobox
                      id="basic-combobox"
                      label="Select Country"
                      placeholder="Search countries..."
                      options={countries}
                      value={countryValue}
                      onChange={(value) => setCountryValue(value as string)}
                      description="Choose your country from the list"
                    />
                    {countryValue && (
                      <p className="text-sm text-muted-foreground">
                        Selected: {countries.find(c => c.value === countryValue)?.label}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Variants */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Combobox Variants</CardTitle>
                <CardDescription>
                  Different types and configurations of combobox components for various use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Single Selection</h4>
                    <div className="p-4 border rounded-lg">
                      <Combobox
                        id="single-select"
                        label="Technology"
                        placeholder="Choose a technology..."
                        options={tags}
                        value={singleValue}
                        onChange={(value) => setSingleValue(value as string)}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Multi-Selection</h4>
                    <div className="p-4 border rounded-lg">
                      <Combobox
                        id="multi-select"
                        label="Skills"
                        placeholder="Add your skills..."
                        options={tags}
                        value={tagValues}
                        onChange={(value) => setTagValues(value as string[])}
                        allowMultiple={true}
                        description="Select multiple technologies you're familiar with"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">With Loading State</h4>
                    <div className="p-4 border rounded-lg">
                      <Combobox
                        id="loading-combobox"
                        label="Remote Data"
                        placeholder="Search remote data..."
                        options={countries}
                        value={loadingValue}
                        onChange={(value) => setLoadingValue(value as string)}
                        isLoading={true}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Error State</h4>
                    <div className="p-4 border rounded-lg">
                      <Combobox
                        id="error-combobox"
                        label="Required Field"
                        placeholder="This field has an error..."
                        options={countries}
                        required={true}
                        error="Please select a valid option"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Success State</h4>
                    <div className="p-4 border rounded-lg">
                      <Combobox
                        id="success-combobox"
                        label="Validated Field"
                        placeholder="This field is validated..."
                        options={countries}
                        value="us"
                        success="Valid selection confirmed"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Disabled State</h4>
                    <div className="p-4 border rounded-lg">
                      <Combobox
                        id="disabled-combobox"
                        label="Disabled Field"
                        placeholder="This field is disabled..."
                        options={countries}
                        disabled={true}
                        description="This field is currently unavailable"
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
                <CardTitle>Interactive States</CardTitle>
                <CardDescription>
                  Understanding the different states and visual feedback for combobox interactions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Visual States</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Default:</strong> Ready for user interaction</li>
                      <li>• <strong>Focused:</strong> Active input with visible focus ring</li>
                      <li>• <strong>Open:</strong> Dropdown visible with options</li>
                      <li>• <strong>Filtered:</strong> Options filtered by search term</li>
                      <li>• <strong>Selected:</strong> Option(s) chosen by user</li>
                      <li>• <strong>Loading:</strong> Fetching options or data</li>
                      <li>• <strong>Error:</strong> Invalid input or selection</li>
                      <li>• <strong>Disabled:</strong> Interaction not allowed</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Interaction Feedback</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Hover:</strong> Highlight focusable options</li>
                      <li>• <strong>Keyboard Navigation:</strong> Arrow key highlighting</li>
                      <li>• <strong>Selection Indication:</strong> Checkmarks or highlighting</li>
                      <li>• <strong>Multi-select Tags:</strong> Visual chips for selected items</li>
                      <li>• <strong>Empty State:</strong> &ldquo;No results found&rdquo; message</li>
                      <li>• <strong>Loading Spinner:</strong> Activity indicator</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">State Transitions</h4>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm mb-3">
                      Combobox states should transition smoothly to provide clear feedback:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Closed → Open:</strong> Show dropdown with fade-in animation</li>
                      <li>• <strong>Typing → Filtering:</strong> Update options list in real-time</li>
                      <li>• <strong>Selection → Confirmation:</strong> Visual feedback and state update</li>
                      <li>• <strong>Loading → Results:</strong> Replace spinner with options</li>
                      <li>• <strong>Error → Valid:</strong> Clear error styling and messages</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Behavior */}
          <TabsContent value="behavior" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Interaction Behavior</CardTitle>
                <CardDescription>
                  How combobox components should behave during user interactions and edge cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Keyboard Navigation</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded">
                        <strong>Arrow Keys:</strong>
                        <p className="text-sm text-muted-foreground">Navigate through options</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Enter:</strong>
                        <p className="text-sm text-muted-foreground">Select focused option</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Escape:</strong>
                        <p className="text-sm text-muted-foreground">Close dropdown</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Tab:</strong>
                        <p className="text-sm text-muted-foreground">Move to next element</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Search Behavior</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded">
                        <strong>Real-time Filtering:</strong>
                        <p className="text-sm text-muted-foreground">Filter options as user types</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Case Insensitive:</strong>
                        <p className="text-sm text-muted-foreground">Match regardless of case</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Partial Matching:</strong>
                        <p className="text-sm text-muted-foreground">Match substrings within options</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Empty Results:</strong>
                        <p className="text-sm text-muted-foreground">Show helpful empty state message</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Best Practices</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do</h5>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Provide clear labels and instructions</li>
                        <li>• Show loading states for async operations</li>
                        <li>• Use consistent keyboard shortcuts</li>
                        <li>• Limit options to prevent overwhelming users</li>
                        <li>• Clear selection state when needed</li>
                      </ul>
                    </div>

                    <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                      <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don&apos;t</h5>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Use for simple selections with few options</li>
                        <li>• Forget to handle empty search results</li>
                        <li>• Make filtering too strict or confusing</li>
                        <li>• Ignore loading states for remote data</li>
                        <li>• Disable without explaining why</li>
                      </ul>
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
                  Essential accessibility features and ARIA patterns for combobox components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Attributes</h4>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 border rounded">
                        <strong>role=&ldquo;combobox&rdquo;:</strong>
                        <p className="text-muted-foreground">Identifies the input as a combobox</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>aria-expanded:</strong>
                        <p className="text-muted-foreground">Indicates if dropdown is open</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>aria-haspopup=&ldquo;listbox&rdquo;:</strong>
                        <p className="text-muted-foreground">Indicates popup type</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>aria-activedescendant:</strong>
                        <p className="text-muted-foreground">References focused option</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Screen Reader Support</h4>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 border rounded">
                        <strong>Label Association:</strong>
                        <p className="text-muted-foreground">Clear connection between label and input</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Status Announcements:</strong>
                        <p className="text-muted-foreground">Announce selection changes and errors</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Option Count:</strong>
                        <p className="text-muted-foreground">Announce number of available options</p>
                      </div>
                      <div className="p-3 border rounded">
                        <strong>Instructions:</strong>
                        <p className="text-muted-foreground">Provide usage instructions via aria-describedby</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Keyboard Support Requirements</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-3 text-left">Key</th>
                          <th className="border border-border p-3 text-left">Behavior</th>
                          <th className="border border-border p-3 text-left">Context</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="border border-border p-3 font-mono">Down Arrow</td>
                          <td className="border border-border p-3">Move focus to next option</td>
                          <td className="border border-border p-3">When dropdown is open</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-mono">Up Arrow</td>
                          <td className="border border-border p-3">Move focus to previous option</td>
                          <td className="border border-border p-3">When dropdown is open</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-mono">Enter</td>
                          <td className="border border-border p-3">Select focused option</td>
                          <td className="border border-border p-3">When option is focused</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-mono">Escape</td>
                          <td className="border border-border p-3">Close dropdown</td>
                          <td className="border border-border p-3">When dropdown is open</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-mono">Tab</td>
                          <td className="border border-border p-3">Move to next focusable element</td>
                          <td className="border border-border p-3">Always</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Implementation Code</h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      {`<!-- Accessible Combobox Structure -->
<div>
  <label for="combobox-input">Country</label>
  <input
    id="combobox-input"
    type="text"
    role="combobox"
    aria-expanded=&ldquo;false&rdquo;
    aria-haspopup=&ldquo;listbox&rdquo;
    aria-describedby=&ldquo;combobox-help&rdquo;
    placeholder=&ldquo;Search countries...&rdquo;
  />
  <ul role="listbox" hidden>
    <li role=&ldquo;option&rdquo; aria-selected=&ldquo;false&rdquo;>United States</li>
    <li role=&ldquo;option&rdquo; aria-selected=&ldquo;false&rdquo;>Canada</li>
  </ul>
  <div id="combobox-help">
    Type to search or use arrow keys to navigate
  </div>
</div>`}
                    </pre>
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
            description="Essential resources for combobox component implementation and accessibility."
            urls={comboboxComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Combo Box'
              if (url.includes('apple.com')) return 'Apple HIG - Combo Boxes'
              if (url.includes('polaris-react.shopify.com')) return 'Shopify Polaris - Combobox'
              if (url.includes('design.visa.com')) return 'Visa Design System - Combobox Accessibility'
              if (url.includes('playbook.ebay.com')) return 'eBay Design System - Combobox'
              if (url.includes('gestalt.pinterest.systems')) return 'Pinterest Gestalt - Combobox'
              return url
            }}
          />
        </div>
      </div>
    </div>
  )
} 