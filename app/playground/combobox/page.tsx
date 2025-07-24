"use client"

import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { ChevronDown, ChevronUp, Search, X, Check, AlertCircle, CheckCircle2, Loader2, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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

const countries = [
  { value: "us", label: "United States", code: "🇺🇸" },
  { value: "ca", label: "Canada", code: "🇨🇦" },
  { value: "uk", label: "United Kingdom", code: "🇬🇧" },
  { value: "de", label: "Germany", code: "🇩🇪" },
  { value: "fr", label: "France", code: "🇫🇷" },
  { value: "jp", label: "Japan", code: "🇯🇵" },
  { value: "au", label: "Australia", code: "🇦🇺" },
  { value: "br", label: "Brazil", code: "🇧🇷" },
  { value: "in", label: "India", code: "🇮🇳" },
  { value: "cn", label: "China", code: "🇨🇳" }
]

const technologies = [
  { value: "react", label: "React", category: "Frontend" },
  { value: "typescript", label: "TypeScript", category: "Language" },
  { value: "javascript", label: "JavaScript", category: "Language" },
  { value: "nextjs", label: "Next.js", category: "Framework" },
  { value: "tailwind", label: "Tailwind CSS", category: "Styling" },
  { value: "nodejs", label: "Node.js", category: "Backend" },
  { value: "python", label: "Python", category: "Language" },
  { value: "vue", label: "Vue.js", category: "Frontend" },
  { value: "angular", label: "Angular", category: "Frontend" },
  { value: "svelte", label: "Svelte", category: "Frontend" }
]

const users = [
  { value: "john", label: "John Doe", email: "john@example.com", role: "Admin" },
  { value: "jane", label: "Jane Smith", email: "jane@example.com", role: "User" },
  { value: "bob", label: "Bob Johnson", email: "bob@example.com", role: "Editor" },
  { value: "alice", label: "Alice Brown", email: "alice@example.com", role: "User" },
  { value: "charlie", label: "Charlie Wilson", email: "charlie@example.com", role: "Admin" }
]

// Combobox Option Interface
interface ComboboxOption {
  value: string
  label: string
  code?: string
  category?: string
  email?: string
  role?: string
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
  variant?: "default" | "search" | "tags"
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
  className = "",
  variant = "default"
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
      option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      option.category?.toLowerCase().includes(inputValue.toLowerCase()) ||
      option.email?.toLowerCase().includes(inputValue.toLowerCase())
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

  // Variant styles
  const variantStyles = {
    default: "border-input",
    search: "border-input bg-muted/30",
    tags: "border-dashed border-2"
  }

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
        ${!hasError && !hasSuccess ? `${variantStyles[variant]} focus-within:border-primary` : ''}
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
            className="py-1 overflow-y-auto"
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
                    px-3 py-2 cursor-pointer transition-colors
                    ${index === focusedIndex ? 'bg-primary/10' : ''}
                    ${selectedValues.includes(option.value) ? 'bg-primary/5' : ''}
                    ${option.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-muted'}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      {option.code && <span className="flex-shrink-0">{option.code}</span>}
                      <span className="truncate">{option.label}</span>
                      {option.category && (
                        <Badge variant="secondary" className="text-xs flex-shrink-0">
                          {option.category}
                        </Badge>
                      )}
                      {option.email && (
                        <span className="text-xs text-muted-foreground truncate">
                          {option.email}
                        </span>
                      )}
                    </div>
                    {selectedValues.includes(option.value) && (
                      <Check className="h-4 w-4 text-primary flex-shrink-0 ml-2" />
                    )}
                  </div>
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
  const [userValue, setUserValue] = useState("")
  const [loadingValue, setLoadingValue] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Combobox</h1>
              <p className="text-xl text-muted-foreground">
                Searchable select component for efficient option selection
              </p>
            </div>
            <EditButton filePath="app/playground/combobox/page.tsx" />
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Purpose of Comboboxes</CardTitle>
                <CardDescription>
                  Understanding the core purpose and benefits of combobox components in user interfaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Efficient Search</h4>
                    <p className="text-sm text-muted-foreground">
                      Enable users to quickly find options from large datasets through real-time filtering and search.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Flexible Input</h4>
                    <p className="text-sm text-muted-foreground">
                      Combine the benefits of free text input with the convenience of predefined selection options.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Space Efficiency</h4>
                    <p className="text-sm text-muted-foreground">
                      Provide access to many options without consuming interface space until activated.
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
                          <strong className="text-sm">Filter Large Lists:</strong>
                          <p className="text-xs text-muted-foreground">Help users navigate through extensive option sets with instant search filtering</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Enable Multi-Selection:</strong>
                          <p className="text-xs text-muted-foreground">Support selecting multiple values with visual tag representation</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Provide Suggestions:</strong>
                          <p className="text-xs text-muted-foreground">Offer autocomplete and predictive options to speed up data entry</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-sm">Maintain Context:</strong>
                          <p className="text-xs text-muted-foreground">Keep users in their current workflow while providing rich selection options</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">When to Use Comboboxes</CardTitle>
                <CardDescription>
                  Understanding the appropriate contexts for combobox components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <strong className="text-green-800 dark:text-green-200">Use Comboboxes When:</strong>
                      </div>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• You have 10+ options that benefit from search</li>
                        <li>• Users need to find specific items quickly</li>
                        <li>• Supporting both selection and free text input</li>
                        <li>• Implementing tagging or multi-selection</li>
                        <li>• Working with dynamic or remote data</li>
                        <li>• Users are familiar with the option set</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="flex items-center gap-2 mb-3">
                        <X className="h-5 w-5 text-red-600" />
                        <strong className="text-red-800 dark:text-red-200">Avoid Comboboxes When:</strong>
                      </div>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• You have fewer than 5-7 simple options</li>
                        <li>• Users need to see all options at once</li>
                        <li>• Options are unfamiliar to users</li>
                        <li>• No search functionality is needed</li>
                        <li>• Mobile-first interfaces with limited space</li>
                        <li>• Simple yes/no or on/off selections</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Combobox vs Alternatives</h4>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Combobox vs Select Dropdown:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use comboboxes for searchable large lists (10+). Use select dropdowns for 
                          small, well-known option sets where users benefit from seeing all choices.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Combobox vs Autocomplete:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use comboboxes for structured selection from known options. Use autocomplete 
                          for free-form input with helpful suggestions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <strong>Combobox vs Radio/Checkbox Groups:</strong>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use comboboxes for large option sets requiring search. Use radio/checkbox groups 
                          for small sets where all options should be visible simultaneously.
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
                    <Badge variant="secondary">Single Select</Badge>
                    Choose One Option
                  </CardTitle>
                  <CardDescription>
                    Standard combobox for selecting a single value from a searchable list
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Combobox
                      id="country-select"
                      label="Country"
                      placeholder="Search countries..."
                      options={countries}
                      value={countryValue}
                      onChange={(value) => setCountryValue(value as string)}
                      description="Select your country from the list"
                    />
                    {countryValue && (
                      <div className="p-3 bg-muted/50 rounded border">
                        <p className="text-sm">
                          Selected: <strong>{countries.find(c => c.value === countryValue)?.label}</strong>
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Best for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Country/region selection</li>
                      <li>• Category selection</li>
                      <li>• User assignment</li>
                      <li>• Status selection</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Multi Select</Badge>
                    Choose Multiple Options
                  </CardTitle>
                  <CardDescription>
                    Tag-based combobox for selecting multiple values with visual feedback
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Combobox
                      id="tech-select"
                      label="Technologies"
                      placeholder="Add technologies..."
                      options={technologies}
                      value={tagValues}
                      onChange={(value) => setTagValues(value as string[])}
                      allowMultiple={true}
                      variant="tags"
                      description="Select multiple technologies you work with"
                    />
                    {tagValues.length > 0 && (
                      <div className="p-3 bg-muted/50 rounded border">
                        <p className="text-sm">
                          Selected {tagValues.length} technolog{tagValues.length === 1 ? 'y' : 'ies'}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Best for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Skills and tags</li>
                      <li>• Category filtering</li>
                      <li>• Permission assignment</li>
                      <li>• Multi-criteria selection</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Combobox vs Alternatives</CardTitle>
                <CardDescription>
                  Understanding when to use combobox over other input components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Component</th>
                        <th className="text-left p-3 font-medium">Options Count</th>
                        <th className="text-left p-3 font-medium">Search</th>
                        <th className="text-left p-3 font-medium">Custom Input</th>
                        <th className="text-left p-3 font-medium">Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3">
                          <Badge variant="default">Combobox</Badge>
                        </td>
                        <td className="p-3">10+ options</td>
                        <td className="p-3">✅ Yes</td>
                        <td className="p-3">✅ Optional</td>
                        <td className="p-3">Large datasets, search required</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="secondary">Select</Badge>
                        </td>
                        <td className="p-3">2-10 options</td>
                        <td className="p-3">❌ No</td>
                        <td className="p-3">❌ No</td>
                        <td className="p-3">Fixed options, clear choices</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="outline">Autocomplete</Badge>
                        </td>
                        <td className="p-3">Any</td>
                        <td className="p-3">✅ Yes</td>
                        <td className="p-3">✅ Yes</td>
                        <td className="p-3">Free text with suggestions</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="outline">Radio Group</Badge>
                        </td>
                        <td className="p-3">2-5 options</td>
                        <td className="p-3">❌ No</td>
                        <td className="p-3">❌ No</td>
                        <td className="p-3">Always visible options</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Core Features</CardTitle>
                <CardDescription>
                  Essential functionality and interaction patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold">Real-time Search</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Filter options instantly as users type, with case-insensitive matching across multiple fields.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <ChevronDown className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold">Keyboard Navigation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Full keyboard support with arrow keys, Enter selection, and Escape to close for accessibility.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Tag className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h4 className="font-semibold">Multi-selection</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Support for multiple value selection with visual tag representation and easy removal.
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
                <CardTitle className="text-xl font-bold">Combobox Variants</CardTitle>
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
                        options={technologies}
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
                        options={technologies}
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

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">User Selection with Rich Content</h4>
                    <div className="p-4 border rounded-lg">
                      <Combobox
                        id="user-rich-content"
                        label="Assign User"
                        placeholder="Search users..."
                        options={users}
                        value={userValue}
                        onChange={(value) => setUserValue(value as string)}
                        description="Select a user to assign this task"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Options with Categories</h4>
                    <div className="p-4 border rounded-lg">
                      <Combobox
                        id="categorized-options"
                        label="Technology Stack"
                        placeholder="Search technologies..."
                        options={technologies}
                        description="Technologies are grouped by category"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Options with Icons</h4>
                    <div className="p-4 border rounded-lg">
                      <Combobox
                        id="icon-options"
                        label="Country Selection"
                        placeholder="Search countries..."
                        options={countries}
                        description="Countries display with flag icons"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Visual Style Variants</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Default</h5>
                        <Combobox
                          id="default-variant"
                          placeholder="Default style..."
                          options={technologies.slice(0, 4)}
                          variant="default"
                        />
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Search</h5>
                        <Combobox
                          id="search-variant"
                          placeholder="Search style..."
                          options={technologies.slice(0, 4)}
                          variant="search"
                        />
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Tags</h5>
                        <Combobox
                          id="tags-variant"
                          placeholder="Tag style..."
                          options={technologies.slice(0, 4)}
                          variant="tags"
                          allowMultiple={true}
                        />
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
                  <CardTitle>Search Patterns</CardTitle>
                  <CardDescription>
                    Common search and filtering implementations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Global Search</h5>
                      <Combobox
                        id="global-search"
                        placeholder="Search everything..."
                        options={[
                          ...countries.map(c => ({ ...c, category: "Countries" })),
                          ...technologies.slice(0, 5)
                        ]}
                        variant="search"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Search across multiple data types and categories
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Quick Filter</h5>
                      <Combobox
                        id="quick-filter"
                        placeholder="Filter by technology..."
                        options={technologies}
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Instant filtering for data tables or lists
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Command Palette Style</h5>
                      <Combobox
                        id="command-palette"
                        placeholder="Type a command..."
                        options={[
                          { value: "create", label: "Create new project", category: "Actions" },
                          { value: "settings", label: "Open settings", category: "Actions" },
                          { value: "help", label: "View help", category: "Support" }
                        ]}
                        variant="search"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Command palette for quick actions and navigation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selection Patterns</CardTitle>
                  <CardDescription>
                    Different approaches to value selection and management
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Tag Management</h5>
                      <Combobox
                        id="tag-management"
                        placeholder="Add tags..."
                        options={technologies}
                        allowMultiple={true}
                        variant="tags"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Multi-select with visual tag representation
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Hierarchical Selection</h5>
                      <Combobox
                        id="hierarchical"
                        placeholder="Select category..."
                        options={technologies}
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Organized by categories for better navigation
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Recent Items</h5>
                      <Combobox
                        id="recent-items"
                        placeholder="Search or select recent..."
                        options={[
                          { value: "recent1", label: "Recently used item 1", category: "Recent" },
                          { value: "recent2", label: "Recently used item 2", category: "Recent" },
                          ...technologies.slice(0, 3)
                        ]}
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Prioritize recently used items for efficiency
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Patterns</CardTitle>
                <CardDescription>
                  Sophisticated combobox implementations for complex use cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Async Data Loading</h4>
                    <div className="p-4 border rounded-lg space-y-3">
                      <Combobox
                        id="async-loading"
                        placeholder="Search remote data..."
                        options={countries}
                        isLoading={false}
                      />
                      <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                        <strong>Implementation:</strong> Debounce search input, fetch data on query change, 
                        show loading state while fetching, handle empty states gracefully.
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Form Integration</h4>
                    <div className="p-4 border rounded-lg space-y-3">
                      <Combobox
                        id="form-integration"
                        label="Required Selection"
                        placeholder="Select an option..."
                        options={technologies.slice(0, 5)}
                        required={true}
                        description="This field is required for form submission"
                      />
                      <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                        <strong>Features:</strong> Form validation, error handling, required field indicators, 
                        accessible labels and descriptions.
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Custom Rendering</h4>
                    <div className="p-4 border rounded-lg space-y-3">
                      <Combobox
                        id="custom-rendering"
                        placeholder="Rich option display..."
                        options={users}
                      />
                      <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                        <strong>Customization:</strong> Custom option templates, avatar images, 
                        additional metadata display, grouping and sections.
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Keyboard Shortcuts</h4>
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Open/Close</span>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">↓ / Esc</kbd>
                        </div>
                        <div className="flex justify-between">
                          <span>Navigate</span>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">↑ ↓</kbd>
                        </div>
                        <div className="flex justify-between">
                          <span>Select</span>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>
                        </div>
                        <div className="flex justify-between">
                          <span>Clear Search</span>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Cmd + A</kbd>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guidelines */}
          <TabsContent value="guidelines" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">✅ Best Practices</CardTitle>
                  <CardDescription>
                    Follow these guidelines for effective combobox implementation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Use for large datasets</strong> - Implement comboboxes when you have 10+ options that benefit from search
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Provide immediate feedback</strong> - Show filtered results as users type without delays
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Support keyboard navigation</strong> - Ensure full functionality with arrow keys, Enter, and Escape
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Handle empty states gracefully</strong> - Show helpful messages when no options match the search
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Use clear labeling</strong> - Provide descriptive labels and placeholder text
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Implement proper ARIA</strong> - Use correct roles and attributes for screen readers
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">❌ Common Pitfalls</CardTitle>
                  <CardDescription>
                    Avoid these mistakes when designing combobox interfaces
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't use for simple selections</strong> - Avoid comboboxes for fewer than 5-7 options
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't make filtering too strict</strong> - Allow partial matches and fuzzy search
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't ignore loading states</strong> - Always provide feedback during async operations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't forget error handling</strong> - Plan for network failures and invalid states
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't disable without explanation</strong> - Always provide context for disabled states
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't overwhelm with options</strong> - Consider pagination or grouping for very large datasets
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility Implementation</CardTitle>
                <CardDescription>
                  Essential accessibility requirements and ARIA patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Required ARIA Attributes</h4>
                    <div className="space-y-2 text-sm">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-primary">role="combobox"</code>
                        <p className="text-muted-foreground text-xs mt-1">Identifies the input as a combobox</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-primary">aria-expanded</code>
                        <p className="text-muted-foreground text-xs mt-1">Indicates if dropdown is open</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-primary">aria-haspopup="listbox"</code>
                        <p className="text-muted-foreground text-xs mt-1">Indicates popup type</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-primary">aria-activedescendant</code>
                        <p className="text-muted-foreground text-xs mt-1">References focused option</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Keyboard Support</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <span>Open dropdown</span>
                        <div className="flex gap-1">
                          <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">↓</kbd>
                          <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">Space</kbd>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <span>Navigate options</span>
                        <div className="flex gap-1">
                          <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">↑</kbd>
                          <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">↓</kbd>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <span>Select option</span>
                        <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">Enter</kbd>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <span>Close dropdown</span>
                        <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">Esc</kbd>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Screen Reader Support</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <strong className="text-blue-800 dark:text-blue-200">Announcements</strong>
                      <ul className="text-sm mt-2 text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Option count when dropdown opens</li>
                        <li>• Current selection state</li>
                        <li>• Filter results as user types</li>
                        <li>• Error and success messages</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <strong className="text-green-800 dark:text-green-200">Labels & Context</strong>
                      <ul className="text-sm mt-2 text-green-700 dark:text-green-300 space-y-1">
                        <li>• Clear, descriptive labels</li>
                        <li>• Help text and instructions</li>
                        <li>• Required field indicators</li>
                        <li>• Error descriptions and fixes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Testing Checklist</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h5 className="font-medium">Keyboard Testing</h5>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="h-4 w-4" />
                          <span>All functionality available via keyboard</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="h-4 w-4" />
                          <span>Focus indicators clearly visible</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="h-4 w-4" />
                          <span>Tab order is logical</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="h-4 w-4" />
                          <span>No keyboard traps</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium">Screen Reader Testing</h5>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="h-4 w-4" />
                          <span>Purpose clearly announced</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="h-4 w-4" />
                          <span>States communicated accurately</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="h-4 w-4" />
                          <span>Selection changes announced</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <input type="checkbox" className="h-4 w-4" />
                          <span>Error messages descriptive</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Guidelines</CardTitle>
                <CardDescription>
                  Optimizing combobox performance for better user experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Search Optimization</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Debounce search input to avoid excessive API calls</li>
                      <li>• Cache search results for frequently accessed data</li>
                      <li>• Implement client-side filtering for small datasets</li>
                      <li>• Use pagination for very large result sets</li>
                      <li>• Consider search indexing for complex datasets</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Rendering Performance</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Virtualize long option lists for smooth scrolling</li>
                      <li>• Lazy load option content when possible</li>
                      <li>• Minimize re-renders with proper memoization</li>
                      <li>• Use CSS transforms for animations</li>
                      <li>• Implement proper cleanup for event listeners</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h5 className="font-medium mb-2">Implementation Example</h5>
                  <div className="text-xs bg-gray-900 text-gray-100 p-3 rounded font-mono overflow-x-auto">
                    <pre>{`// Debounced search with caching
const useDebounceSearch = (query: string, delay: number = 300) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query)
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), delay)
    return () => clearTimeout(timer)
  }, [query, delay])
  
  return debouncedQuery
}`}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* References Section */}
        <div className="mt-6">
          <ComponentReferences
            title="References & Resources"
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