import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Home, Settings, User, Search, Menu } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function NavigationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Navigation Components</h1>
          <p className="text-xl text-gray-600 mb-6">
            Navigation components help users move through your application and understand their current location.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Wayfinding</Badge>
            <Badge>Interactive</Badge>
            <Badge>Hierarchical</Badge>
            <Badge>Responsive</Badge>
          </div>
        </div>

        <Tabs defaultValue="patterns" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="patterns">Navigation Patterns</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>

          {/* Navigation Patterns */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Navigation</CardTitle>
                <CardDescription>
                  Main navigation systems for your application&apos;s core sections.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Horizontal Nav */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Horizontal Navigation Bar</h4>
                  <div className="bg-white border rounded-lg p-4">
                    <nav className="flex items-center space-x-8">
                      <div className="flex items-center space-x-2">
                        <div className="h-6 w-6 bg-blue-600 rounded"></div>
                        <span className="font-semibold">Brand</span>
                      </div>
                      <div className="flex space-x-6">
                        <a href="#" className="text-blue-600 font-medium">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                      </div>
                    </nav>
                  </div>
                </div>

                {/* Vertical Sidebar */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Vertical Sidebar</h4>
                  <div className="bg-white border rounded-lg overflow-hidden">
                    <div className="flex">
                      <nav className="w-64 bg-gray-50 border-r p-4">
                        <div className="space-y-2">
                          <a href="#" className="flex items-center space-x-3 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg">
                            <Home className="h-4 w-4" />
                            <span>Dashboard</span>
                          </a>
                          <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <User className="h-4 w-4" />
                            <span>Profile</span>
                          </a>
                          <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Settings className="h-4 w-4" />
                            <span>Settings</span>
                          </a>
                        </div>
                      </nav>
                      <div className="flex-1 p-4">
                        <p className="text-gray-500">Main content area</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best Practices</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Keep navigation simple and intuitive</li>
                    <li>• Use clear, descriptive labels</li>
                    <li>• Maintain consistent navigation across pages</li>
                    <li>• Provide visual feedback for current location</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary Navigation</CardTitle>
                <CardDescription>
                  Supporting navigation elements like breadcrumbs, tabs, and pagination.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Breadcrumbs */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Breadcrumbs</h4>
                  <div className="bg-white border rounded-lg p-4">
                    <nav className="flex items-center space-x-2 text-sm">
                      <a href="#" className="text-blue-600 hover:text-blue-700">Home</a>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                      <a href="#" className="text-blue-600 hover:text-blue-700">Products</a>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-500">Category</span>
                    </nav>
                  </div>
                </div>

                {/* Tabs */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Tab Navigation</h4>
                  <div className="bg-white border rounded-lg p-4">
                    <div className="border-b">
                      <nav className="flex space-x-8">
                        <a href="#" className="border-b-2 border-blue-600 text-blue-600 pb-4 px-1">Overview</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700 pb-4 px-1">Details</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700 pb-4 px-1">Reviews</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700 pb-4 px-1">Support</a>
                      </nav>
                    </div>
                    <div className="pt-4">
                      <p className="text-gray-500">Tab content goes here</p>
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Pagination</h4>
                  <div className="bg-white border rounded-lg p-4">
                    <nav className="flex items-center justify-between">
                      <Button variant="outline" size="sm" disabled>Previous</Button>
                      <div className="flex items-center space-x-2">
                        <Button variant="default" size="sm" className="w-8 h-8 p-0">1</Button>
                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">2</Button>
                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">3</Button>
                        <span className="text-gray-500">...</span>
                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">10</Button>
                      </div>
                      <Button variant="outline" size="sm">Next</Button>
                    </nav>
                  </div>
                </div>

                {/* Accessibility */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Accessibility</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Use semantic HTML navigation elements</li>
                    <li>• Provide skip links for keyboard users</li>
                    <li>• Use ARIA labels and landmarks</li>
                    <li>• Ensure sufficient focus indicators</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components */}
          <TabsContent value="components" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Mobile Navigation</CardTitle>
                <CardDescription>
                  Responsive navigation patterns for mobile devices.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Mobile Menu */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Hamburger Menu</h4>
                  <div className="bg-white border rounded-lg overflow-hidden max-w-sm">
                    <div className="flex items-center justify-between p-4 border-b">
                      <span className="font-semibold">App Name</span>
                      <Button variant="ghost" size="sm">
                        <Menu className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        <a href="#" className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-lg">Home</a>
                        <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Products</a>
                        <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">About</a>
                        <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Contact</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Bottom Navigation Bar</h4>
                  <div className="bg-white border rounded-lg overflow-hidden max-w-sm">
                    <div className="h-32 bg-gray-50 flex items-center justify-center">
                      <p className="text-gray-500">Main Content</p>
                    </div>
                    <div className="border-t bg-white">
                      <nav className="flex">
                        <a href="#" className="flex-1 py-3 px-2 text-center text-blue-600">
                          <Home className="h-5 w-5 mx-auto mb-1" />
                          <span className="text-xs">Home</span>
                        </a>
                        <a href="#" className="flex-1 py-3 px-2 text-center text-gray-400">
                          <Search className="h-5 w-5 mx-auto mb-1" />
                          <span className="text-xs">Search</span>
                        </a>
                        <a href="#" className="flex-1 py-3 px-2 text-center text-gray-400">
                          <User className="h-5 w-5 mx-auto mb-1" />
                          <span className="text-xs">Profile</span>
                        </a>
                        <a href="#" className="flex-1 py-3 px-2 text-center text-gray-400">
                          <Settings className="h-5 w-5 mx-auto mb-1" />
                          <span className="text-xs">Settings</span>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Implementation */}
          <TabsContent value="implementation" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>React Implementation</CardTitle>
                <CardDescription>Code examples for implementing navigation components.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="font-bold">Brand</span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <a href="#" className="block py-2 text-gray-600">Home</a>
            <a href="#" className="block py-2 text-gray-600">About</a>
            <a href="#" className="block py-2 text-gray-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Built by Rafi</p>
        </div>
      </footer>
    </div>
  )
} 