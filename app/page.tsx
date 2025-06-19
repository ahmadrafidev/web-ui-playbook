"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ComponentSection, getStatusConfig } from "@/types/component"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const componentSections: ComponentSection[] = [
    {
      name: "Buttons",
      href: "/playground/buttons",
      description: "Interactive elements that enable users to trigger actions and navigate interfaces",
      status: "In Progress",
      preview: (
        <div className="space-y-2">
          <div className="flex gap-1 flex-wrap">
            <Button size="sm">Primary</Button>
            <Button variant="secondary" size="sm">Secondary</Button>
            <Button variant="outline" size="sm">Outline</Button>
          </div>
        </div>
      ),
    },
    {
      name: "Alerts",
      href: "/playground/alerts",
      description: "Contextual feedback messages with proper semantics",
      status: "In Progress",
      preview: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1.5 rounded border border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Success Alert</span>
          </div>
          <div className="flex items-center gap-2 text-xs bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-2 py-1.5 rounded border border-yellow-500/20">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span>Warning Alert</span>
          </div>
        </div>
      ),
    },
    {
      name: "Tooltips",
      href: "/playground/tooltips",
      description: "Contextual information that appears on hover or focus",
      status: "In Progress",  
      preview: (
        <div className="relative flex flex-col items-center justify-center h-16 gap-2">
          <Button size="sm" variant="outline" className="relative">
            Help
          </Button>
          <div className="px-3 py-1.5 bg-gray-900 text-white text-xs rounded shadow-lg whitespace-nowrap relative">
            Get help and support
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
          </div>
        </div>
      ),
    },
    {
      name: "Checkbox",
      href: "/playground/checkbox",
      description: "Multi-selection controls for forms and interactive lists",
      status: "In Progress",
      preview: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-primary bg-primary rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-[1px]"></div>
            </div>
            <span className="text-xs">Selected option</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded-sm"></div>
            <span className="text-xs text-muted-foreground">Unselected option</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-primary bg-primary rounded-sm flex items-center justify-center">
              <div className="w-2 h-1 bg-white rounded-[1px]"></div>
            </div>
            <span className="text-xs">Indeterminate</span>
          </div>
        </div>
      ),
    },
    {
      name: "Switch",
      href: "/playground/switch",
      description: "Binary toggle controls for instant state changes and settings",
      status: "In Progress",
      preview: (
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs">Notifications</span>
            <div className="relative">
              <div className="w-8 h-[18px] bg-primary rounded-full flex items-center">
                <div className="w-4 h-4 bg-white rounded-full shadow-sm translate-x-[18px] transition-transform"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground">Dark Mode</span>
            <div className="relative">
              <div className="w-8 h-[18px] bg-gray-300 dark:bg-gray-600 rounded-full flex items-center">
                <div className="w-4 h-4 bg-white rounded-full shadow-sm translate-x-0 transition-transform"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs">Auto-sync</span>
            <div className="relative">
              <div className="w-8 h-[18px] bg-primary rounded-full flex items-center">
                <div className="w-4 h-4 bg-white rounded-full shadow-sm translate-x-[18px] transition-transform"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Tabs",
      href: "/playground/tabs",
      description: "Organize related content into sections with easy navigation",
      status: "In Progress",
      preview: (
        <div className="space-y-2 w-full">
          <div className="flex border-b border-gray-300 dark:border-gray-600">
            <div className="px-3 py-1.5 border-b-2 border-primary bg-background text-primary text-xs font-medium">
              Active
            </div>
            <div className="px-3 py-1.5 text-xs text-muted-foreground">
              Inactive
            </div>
            <div className="px-3 py-1.5 text-xs text-muted-foreground">
              Another
            </div>
          </div>
          <div className="p-3 bg-background rounded text-xs text-muted-foreground">
            Tab content area with organized information
          </div>
        </div>
      ),
    },
  ]

  const filteredComponents = componentSections.filter((section) =>
    section.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen max-w-5xl mx-auto bg-gradient-to-br from-background to-secondary/10">

      {/* Hero Section */}
      <section className="my-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">The Complete UI Component Guide You Need</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-wrap">
            A manual guide for creating consistent, accessible, and user-friendly UI components.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative group">

              <div className="absolute inset-0 bg-background/80 backdrop-blur-md rounded-2xl shadow-lg border border-border/20 transition-all duration-300 group-focus-within:shadow-xl group-focus-within:bg-background/90 group-focus-within:border-primary/50 group-focus-within:shadow-primary/10 dark:bg-card/50 dark:border-border/30 dark:group-focus-within:bg-card/70 dark:group-focus-within:border-primary/60 dark:group-focus-within:shadow-primary/20">
              </div>
              
              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 transition-colors group-focus-within:text-primary" />
                <Input
                  placeholder="Find a component..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="relative bg-transparent border-none shadow-none pl-16 pr-16 py-6 text-xl placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-2xl min-h-[55px] text-foreground"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-all duration-200 p-2 rounded-full hover:bg-accent hover:scale-110"
                  >
                    <X className="h-6 w-6" />
                  </button>
                )}
              </div>
              
              {/* Search results indicator */}
              {searchQuery && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-base font-medium animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg border border-primary/20 dark:bg-primary/20 dark:border-primary/30">
                    {filteredComponents.length} result{filteredComponents.length !== 1 ? 's' : ''} found
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Component Grid */}
      <section className="px-4">
        <div className="container mx-auto">
          {filteredComponents.length === 0 && searchQuery ? (
            // No results state
            <div className="text-center py-16">
              <div className="bg-muted rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No components found</h3>
              <p className="text-muted-foreground mb-4">
                Try searching for different keywords or browse all components below.
              </p>
              <Button onClick={handleClearSearch} variant="outline">
                Clear search
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {filteredComponents.map((section, index) => (
                <Link key={index} href={section.href}>
                  <Card 
                    className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group animate-in fade-in slide-in-from-bottom-4 rounded-lg h-full"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <CardTitle className="text-xl">
                          {section.name}
                        </CardTitle>
                        <Badge 
                          variant={getStatusConfig(section.status).variant} 
                          className={`text-xs ${getStatusConfig(section.status).className}`}
                        >
                          {section.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">{section.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      {/* Component Preview */}
                      <div className="bg-muted rounded-lg p-4 min-h-[80px] flex items-center justify-center">
                        {section.preview}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

HomePage.displayName = "HomePage"
