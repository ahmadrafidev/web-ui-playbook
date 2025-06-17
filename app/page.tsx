"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComponentSection, getStatusConfig } from "@/types/component"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const componentSections: ComponentSection[] = [
    {
      name: "Buttons",
      href: "/playground/buttons",
      description: "Primary, secondary, and action buttons",
      status: "In Progress",
      preview: (
        <div className="flex gap-2 flex-wrap">
          <Button size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="outline" size="sm">Outline</Button>
        </div>
      ),
    },
    {
      name: "Alerts",
      href: "/playground/alerts",
      description: "Success, warning, error, and info alerts",
      status: "In Progress",
      preview: (
        <div className="space-y-1">
          <div className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded">Success</div>
          <div className="text-xs bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded">Warning</div>
          <div className="text-xs bg-red-500/10 text-red-600 dark:text-red-400 px-2 py-1 rounded">Error</div>
        </div>
      ),
    },
    {
      name: "Cards",
      href: "/playground/cards",
      description: "Content containers and layout cards",
      status: "In Progress",
      preview: (
        <div className="bg-card p-2 rounded border shadow-sm">
          <div className="text-xs font-medium mb-1 text-card-foreground">Card Title</div>
          <div className="text-xs text-muted-foreground">Card content preview</div>
        </div>
      ),
    },
    {
      name: "Forms",
      href: "/playground/forms",
      description: "Input fields and form components",
      status: "In Progress",
      preview: (
        <div className="space-y-1">
          <input className="w-full text-xs px-2 py-1 border rounded" placeholder="Input field" />
          <select className="w-full text-xs px-2 py-1 border rounded">
            <option>Select option</option>
          </select>
        </div>
      ),
    },
    {
      name: "Modals",
      href: "/playground/modals",
      description: "Dialogs, popups, and overlays",
      status: "In Progress",
      preview: (
        <div className="bg-popover border rounded p-2 shadow-lg text-xs">
          <div className="font-medium mb-1 text-popover-foreground">Modal</div>
          <div className="text-muted-foreground text-xs">Dialog content</div>
        </div>
      ),
    },
    {
      name: "Tooltips",
      href: "/playground/tooltips",
      description: "Hover information and help text",
      status: "In Progress",
      preview: (
        <div className="relative">
          <div className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Tooltip</div>
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
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
      <Header />

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
                  placeholder="Find components..."
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
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
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
      <Footer />
    </div>
  )
}
