"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Code2, Eye, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const componentSections = [
    {
      name: "Buttons",
      href: "/playground/buttons",
      description: "Primary, secondary, and action buttons",
      status: "Complete",
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
      status: "Complete",
      preview: (
        <div className="space-y-1">
          <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Success</div>
          <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Warning</div>
          <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Error</div>
        </div>
      ),
    },
    {
      name: "Cards",
      href: "/playground/cards",
      description: "Content containers and layout cards",
      status: "Complete",
      preview: (
        <div className="bg-white p-2 rounded border shadow-sm">
          <div className="text-xs font-medium mb-1">Card Title</div>
          <div className="text-xs text-gray-500">Card content preview</div>
        </div>
      ),
    },
    {
      name: "Forms",
      href: "/playground/forms",
      description: "Input fields and form components",
      status: "Complete",
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
      name: "Navigation",
      href: "/playground/navigation",
      description: "Menus, tabs, and navigation elements",
      status: "Complete",
      preview: (
        <div className="flex text-xs gap-2">
          <div className="text-blue-600 border-b border-blue-600 pb-1">Active</div>
          <div className="text-gray-500">Tab</div>
          <div className="text-gray-500">Tab</div>
        </div>
      ),
    },
    {
      name: "Modals",
      href: "/playground/modals",
      description: "Dialogs, popups, and overlays",
      status: "Complete",
      preview: (
        <div className="bg-white border rounded p-2 shadow-lg text-xs">
          <div className="font-medium mb-1">Modal</div>
          <div className="text-gray-500 text-xs">Dialog content</div>
        </div>
      ),
    },
    {
      name: "Badges",
      href: "/playground/badges",
      description: "Status indicators and labels",
      status: "Complete",
      preview: (
        <div className="flex gap-1 flex-wrap">
          <Badge variant="default" className="text-xs">Default</Badge>
          <Badge variant="secondary" className="text-xs">Secondary</Badge>
          <Badge variant="outline" className="text-xs">Outline</Badge>
        </div>
      ),
    },
    {
      name: "Tooltips",
      href: "/playground/tooltips",
      description: "Hover information and help text",
      status: "Complete",
      preview: (
        <div className="relative">
          <div className="text-xs bg-gray-900 text-white px-2 py-1 rounded">Tooltip</div>
        </div>
      ),
    },
  ]

  // Filter components based on search query
  const filteredComponents = componentSections.filter((section) =>
    section.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="my-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">The Complete UI Component Guide You Need</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-wrap">
            A manual guide for creating consistent, accessible, and user-friendly UI components.
          </p>

          {/* Enhanced Search */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative group">
              {/* Glassmorphism container */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-lg shadow-lg border border-white/20 transition-all duration-300 group-focus-within:shadow-xl group-focus-within:bg-white/80 group-focus-within:scale-[1.02] ring-1 group-focus-within:ring-2 ring-zinc-300">
              </div>
              
              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-gray-500" />
                <Input
                  placeholder="Find components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="relative bg-transparent border-none shadow-none pl-16 pr-16 py-6 text-xl placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-3xl min-h-[55px]"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200 p-2 rounded-full hover:bg-gray-100 hover:scale-110"
                  >
                    <X className="h-6 w-6" />
                  </button>
                )}
              </div>
              
              {/* Search results indicator */}
              {searchQuery && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-base font-medium animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg">
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
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No components found</h3>
              <p className="text-gray-600 mb-4">
                Try searching for different keywords or browse all components below.
              </p>
              <Button onClick={handleClearSearch} variant="outline">
                Clear search
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
              {filteredComponents.map((section, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group animate-in fade-in slide-in-from-bottom-4 rounded-lg"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-xl">
                        {section.name}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">{section.status}</Badge>
                    </div>
                    <CardDescription className="text-sm">{section.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Component Preview */}
                    <div className="bg-gray-50 rounded-lg p-4 min-h-[80px] flex items-center justify-center">
                      {section.preview}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link href={section.href} className="flex items-center justify-center gap-2">
                          <Eye className="h-4 w-4" />
                          View Details
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={section.href} className="flex items-center gap-1">
                          <Code2 className="h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
