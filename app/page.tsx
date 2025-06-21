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
        <div className="space-y-2 w-full">
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
            <span className="text-xs font-medium">Primary Actions</span>
            <div className="flex gap-2">
              <Button size="sm" className="shadow-sm hover:shadow-md transition-all duration-200 text-xs px-3 py-1">
                Save
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-accent/50 transition-all duration-200 text-xs px-3 py-1">
                Cancel
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
            <span className="text-xs font-medium">Secondary Actions</span>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" className="text-xs px-3 py-1 shadow-sm">
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-accent/80 transition-all duration-200 text-xs px-3 py-1">
                View
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
            <span className="text-xs font-medium">Destructive Action</span>
            <Button size="sm" variant="destructive" className="text-xs px-3 py-1 shadow-sm">
              Delete Item
            </Button>
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
        <div className="space-y-2 w-full">
          <div className="flex items-start gap-3 text-xs bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-2.5 rounded-md border border-green-500/20 shadow-sm">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <div className="font-medium">Successfully saved!</div>
              <div className="text-green-600/80 dark:text-green-400/80 mt-0.5">Your changes have been saved.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 text-xs bg-amber-500/10 text-amber-700 dark:text-amber-400 px-3 py-2.5 rounded-md border border-amber-500/20 shadow-sm">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <div className="font-medium">Action required</div>
              <div className="text-amber-600/80 dark:text-amber-400/80 mt-0.5">Please review your settings.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 text-xs bg-red-500/10 text-red-700 dark:text-red-400 px-3 py-2.5 rounded-md border border-red-500/20 shadow-sm">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <div className="font-medium">Error occurred</div>
              <div className="text-red-600/80 dark:text-red-400/80 mt-0.5">Failed to process request.</div>
            </div>
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
        <div className="relative flex justify-center items-center w-full min-h-[120px] gap-4">
          <div className="relative group">
            <Button size="sm" variant="outline" className="relative transition-all duration-200 hover:bg-accent/50">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Help
            </Button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-100 transition-all duration-200">
              <div className="px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-md shadow-lg whitespace-nowrap">
                Get help and support
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Button size="sm" variant="ghost" className="relative transition-all duration-200">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Info
            </Button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-100 transition-all duration-200">
              <div className="px-3 py-2 bg-primary text-primary-foreground text-xs rounded-md shadow-lg whitespace-nowrap">
                Additional information
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-primary"></div>
              </div>
            </div>
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
        <div className="space-y-2 w-full">
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
            <div className="relative w-4 h-4 border-2 border-primary bg-primary rounded-sm flex items-center justify-center shadow-sm">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs font-medium">Enable notifications</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
            <div className="w-4 h-4 border-2 border-muted-foreground/30 rounded-sm shadow-sm hover:border-muted-foreground/50 transition-colors"></div>
            <span className="text-xs text-muted-foreground">Marketing emails</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
            <div className="relative w-4 h-4 border-2 border-primary bg-primary rounded-sm flex items-center justify-center shadow-sm">
              <div className="w-2 h-0.5 bg-white rounded-full"></div>
            </div>
            <span className="text-xs font-medium">Select all items</span>
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
        <div className="space-y-2 w-full">
          <div className="flex items-center justify-between gap-4 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium">Push notifications</span>
            </div>
            <div className="relative">
              <div className="w-9 h-5 bg-primary rounded-full flex items-center shadow-inner">
                <div className="w-4 h-4 bg-white rounded-full shadow-md translate-x-[18px] transition-all duration-200 ease-in-out"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/40"></div>
              <span className="text-xs text-muted-foreground">Email alerts</span>
            </div>
            <div className="relative">
              <div className="w-9 h-5 bg-muted-foreground/20 rounded-full flex items-center shadow-inner">
                <div className="w-4 h-4 bg-white rounded-full shadow-md translate-x-0.5 transition-all duration-200 ease-in-out"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs font-medium">Auto-sync data</span>
            </div>
            <div className="relative">
              <div className="w-9 h-5 bg-primary rounded-full flex items-center shadow-inner">
                <div className="w-4 h-4 bg-white rounded-full shadow-md translate-x-[18px] transition-all duration-200 ease-in-out"></div>
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
        <div className="space-y-3 w-full">
          <div className="flex border-b border-border/50">
            <div className="relative px-4 py-2 border-b-2 border-primary bg-background text-primary text-xs font-semibold transition-all duration-200">
              Overview
              <div className="absolute inset-0 bg-primary/5"></div>
            </div>
            <div className="px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-t-md transition-all duration-200 cursor-pointer">
              Analytics
            </div>
            <div className="px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-t-md transition-all duration-200 cursor-pointer">
              Settings
            </div>
          </div>
          <div className="p-4 bg-accent/20 rounded-md border border-border/30">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-xs font-medium">Dashboard Overview</span>
            </div>
            <div className="text-xs text-muted-foreground leading-relaxed">
              Key metrics and insights for your project
            </div>
          </div>
        </div>
      ),
    },
  ]

  const filteredComponents = componentSections.filter((section) =>
    section.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  )

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen max-w-5xl mx-auto bg-gradient-to-br from-background to-secondary/10">

      {/* Hero Section */}
      <section className="my-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2">
            The documented web interfaces patterns
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-wrap px-4 sm:px-0">
            Essential patterns for building scalable and accessible web interfaces.
          </p>

          {/* Search bar */}
          <div className="max-w-sm sm:max-w-md md:max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
            <div className="relative group">

              <div className="absolute inset-0 bg-background/80 backdrop-blur-md rounded-lg sm:rounded-xl shadow-lg border border-border/80 transition-all duration-200 group-focus-within:shadow-2xl group-focus-within:bg-background/90 group-focus-within:border-primary/50 group-focus-within:shadow-primary/20 dark:bg-card/50 dark:border-border/30 dark:group-focus-within:bg-card/70 dark:group-focus-within:border-primary/60 dark:group-focus-within:shadow-primary/30">
              </div>
              
              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5 transition-colors group-focus-within:text-primary" />
                <Input
                  placeholder="Find a component..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="relative bg-transparent border-none shadow-none pl-10 sm:pl-12 md:pl-16 pr-10 sm:pr-12 md:pr-16 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-xl placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg sm:rounded-xl md:rounded-2xl min-h-[45px] sm:min-h-[50px] md:min-h-[55px] text-foreground"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-3 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-all duration-200 p-1.5 sm:p-2 rounded-full hover:bg-accent hover:scale-110"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </button>
                )}
              </div>
              
              {/* Search results indicator */}
              {searchQuery && (
                <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg border border-primary/20 dark:bg-primary/20 dark:border-primary/30 whitespace-nowrap">
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
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg md:text-xl font-semibold">
                          {section.name}
                        </CardTitle>
                        <Badge 
                          variant={getStatusConfig(section.status).variant} 
                          className={`text-xs ${getStatusConfig(section.status).className}`}
                        >
                          {section.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{section.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      {/* Component Preview */}
                      <div className="rounded-lg p-4 min-h-[80px] flex items-center justify-center bg-foreground/5 dark:bg-foreground/5">
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

HomePage.displayName = "HomePage"

