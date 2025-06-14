import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share, Star, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/play" className="text-blue-600 hover:text-blue-700 transition-colors">
            ← Back to Playground
          </Link>
          <div className="flex gap-4 text-sm">
            <Link href="/play/alerts" className="text-gray-500 hover:text-gray-700">Previous: Alerts</Link>
            <Link href="/play/forms" className="text-gray-500 hover:text-gray-700">Next: Forms</Link>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Card Components</h1>
          <p className="text-xl text-gray-600 mb-6">
            Cards are flexible containers that group related content and actions together in a structured way.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Container</Badge>
            <Badge>Flexible</Badge>
            <Badge>Structured</Badge>
            <Badge>Interactive</Badge>
          </div>
        </div>

        <Tabs defaultValue="variants" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="variants">Card Types</TabsTrigger>
            <TabsTrigger value="layout">Layout Patterns</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>

          {/* Card Variants */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Cards</CardTitle>
                <CardDescription>
                  Simple card layouts for displaying content and actions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Simple Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Simple Card</CardTitle>
                      <CardDescription>Basic card with title and description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        This is a simple card component that can be used to display basic information.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Card with Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Card with Actions</CardTitle>
                      <CardDescription>Card including action buttons</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Cards can include action buttons to allow user interaction.
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button size="sm">Primary</Button>
                      <Button variant="outline" size="sm">Secondary</Button>
                    </CardFooter>
                  </Card>

                  {/* Status Card */}
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-green-800">Status Card</CardTitle>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <CardDescription className="text-green-700">
                        Cards can have different states and visual indicators
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-green-600">
                        This card shows a success/active state with appropriate colors.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best Practices</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Keep card content focused and related</li>
                    <li>• Use consistent spacing and typography</li>
                    <li>• Provide clear visual hierarchy</li>
                    <li>• Make interactive cards clearly clickable</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Cards</CardTitle>
                <CardDescription>
                  Cards designed for specific content types like profiles, products, or articles.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Profile Card */}
                  <Card>
                    <CardHeader className="text-center">
                      <Avatar className="mx-auto mb-4 h-16 w-16">
                        <AvatarImage src="/api/placeholder/64/64" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <CardTitle>John Doe</CardTitle>
                      <CardDescription>Senior Developer</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Passionate about creating beautiful and functional user interfaces.
                      </p>
                      <div className="flex justify-center gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">UI/UX</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Profile</Button>
                    </CardFooter>
                  </Card>

                  {/* Article Card */}
                  <Card>
                    <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">Technology</Badge>
                        <span className="text-sm text-gray-500">5 min read</span>
                      </div>
                      <CardTitle className="line-clamp-2">
                        Building Better User Interfaces with Modern Design Systems
                      </CardTitle>
                      <CardDescription>
                        Learn how to create consistent and scalable UI components using modern design principles.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          24
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          8
                        </span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Share className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Accessibility */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Accessibility</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Use semantic HTML structure within cards</li>
                    <li>• Provide proper focus management for interactive cards</li>
                    <li>• Include alternative text for images</li>
                    <li>• Ensure sufficient color contrast for all text</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Layout Patterns */}
          <TabsContent value="layout" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Card Layouts</CardTitle>
                <CardDescription>
                  Different ways to organize and display cards in your interface.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-8">
                  {/* Grid Layout */}
                  <div>
                    <h4 className="font-semibold mb-4">Grid Layout</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="bg-blue-50">
                        <CardContent className="p-4 text-center">
                          <div className="h-12 w-12 bg-blue-200 rounded-lg mx-auto mb-2"></div>
                          <h5 className="font-medium">Feature 1</h5>
                          <p className="text-sm text-gray-600">Description here</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-green-50">
                        <CardContent className="p-4 text-center">
                          <div className="h-12 w-12 bg-green-200 rounded-lg mx-auto mb-2"></div>
                          <h5 className="font-medium">Feature 2</h5>
                          <p className="text-sm text-gray-600">Description here</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-purple-50">
                        <CardContent className="p-4 text-center">
                          <div className="h-12 w-12 bg-purple-200 rounded-lg mx-auto mb-2"></div>
                          <h5 className="font-medium">Feature 3</h5>
                          <p className="text-sm text-gray-600">Description here</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* List Layout */}
                  <div>
                    <h4 className="font-semibold mb-4">List Layout</h4>
                    <div className="space-y-3">
                      <Card>
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
                            <div>
                              <h5 className="font-medium">List Item 1</h5>
                              <p className="text-sm text-gray-500">Subtitle or description</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
                            <div>
                              <h5 className="font-medium">List Item 2</h5>
                              <p className="text-sm text-gray-500">Subtitle or description</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
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
                <CardDescription>Code examples for implementing cards in your React application.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function ProductCard({ product }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{product.price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
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