import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, AlertCircle, Clock, Star, Zap, Crown } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function BadgesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Badge Components</h1>
          <p className="text-xl text-gray-600 mb-6">
            Badges are small status indicators used to label, categorize, or provide additional context to content.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Status</Badge>
            <Badge>Labels</Badge>
            <Badge>Indicators</Badge>
            <Badge>Compact</Badge>
          </div>
        </div>

        <Tabs defaultValue="variants" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="variants">Badge Variants</TabsTrigger>
            <TabsTrigger value="usage">Usage Examples</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>

          {/* Badge Variants */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Badge Styles</CardTitle>
                <CardDescription>
                  Different visual styles for badges to match various contexts and emphasis levels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  {/* Default Badges */}
                  <div>
                    <h4 className="font-semibold mb-3">Primary Badges</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </div>

                  {/* Color Variations */}
                  <div>
                    <h4 className="font-semibold mb-3">Status Colors</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-green-600 hover:bg-green-700">Success</Badge>
                      <Badge className="bg-yellow-600 hover:bg-yellow-700">Warning</Badge>
                      <Badge className="bg-red-600 hover:bg-red-700">Error</Badge>
                      <Badge className="bg-blue-600 hover:bg-blue-700">Info</Badge>
                      <Badge className="bg-purple-600 hover:bg-purple-700">Purple</Badge>
                      <Badge className="bg-orange-600 hover:bg-orange-700">Orange</Badge>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h4 className="font-semibold mb-3">Badge Sizes</h4>
                    <div className="flex items-center gap-3">
                      <Badge className="text-xs px-2 py-0.5">Small</Badge>
                      <Badge>Default</Badge>
                      <Badge className="text-sm px-3 py-1">Large</Badge>
                    </div>
                  </div>

                  {/* With Icons */}
                  <div>
                    <h4 className="font-semibold mb-3">Badges with Icons</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                      <Badge variant="destructive">
                        <XCircle className="h-3 w-3 mr-1" />
                        Failed
                      </Badge>
                      <Badge className="bg-yellow-600">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Warning
                      </Badge>
                      <Badge variant="secondary">
                        <Clock className="h-3 w-3 mr-1" />
                        Pending
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best Practices</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Use consistent colors for similar states across your app</li>
                    <li>• Keep badge text short and descriptive</li>
                    <li>• Don&apos;t overuse badges - they lose impact</li>
                    <li>• Consider cultural color associations (red = danger, green = success)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Specialized Badges</CardTitle>
                <CardDescription>
                  Custom badge designs for specific use cases and contexts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  {/* Notification Badges */}
                  <div>
                    <h4 className="font-semibold mb-3">Notification Badges</h4>
                    <div className="flex flex-wrap gap-4">
                      <div className="relative">
                        <Button variant="outline">Messages</Button>
                        <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs bg-red-600">3</Badge>
                      </div>
                      <div className="relative">
                        <Button variant="outline">Notifications</Button>
                        <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs bg-red-600">12</Badge>
                      </div>
                      <div className="relative">
                        <Button variant="outline">Updates</Button>
                        <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Premium Badges */}
                  <div>
                    <h4 className="font-semibold mb-3">Premium/Special Badges</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900">
                        <Crown className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                      <Badge className="bg-gradient-to-r from-purple-400 to-purple-600">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge className="bg-gradient-to-r from-blue-400 to-blue-600">
                        <Zap className="h-3 w-3 mr-1" />
                        Pro
                      </Badge>
                    </div>
                  </div>

                  {/* Pill Badges */}
                  <div>
                    <h4 className="font-semibold mb-3">Tag/Category Pills</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="rounded-full">React</Badge>
                      <Badge variant="outline" className="rounded-full">TypeScript</Badge>
                      <Badge variant="outline" className="rounded-full">Next.js</Badge>
                      <Badge variant="outline" className="rounded-full">UI/UX</Badge>
                      <Badge variant="outline" className="rounded-full">Frontend</Badge>
                    </div>
                  </div>

                  {/* Interactive Badges */}
                  <div>
                    <h4 className="font-semibold mb-3">Interactive Badges</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge 
                        variant="outline" 
                        className="cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        Clickable Tag ×
                      </Badge>
                      <Badge 
                        variant="secondary" 
                        className="cursor-pointer hover:bg-gray-300 transition-colors"
                      >
                        Filter Option ×
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Accessibility */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Accessibility</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Ensure sufficient color contrast for text readability</li>
                    <li>• Don&apos;t rely solely on color to convey meaning</li>
                    <li>• Provide proper ARIA labels for screen readers</li>
                    <li>• Make interactive badges keyboard accessible</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Usage Examples */}
          <TabsContent value="usage" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Common Use Cases</CardTitle>
                <CardDescription>
                  Real-world examples of how badges are used in different contexts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-8">
                  {/* User Profile */}
                  <div>
                    <h4 className="font-semibold mb-4">User Profile Cards</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                            <div>
                              <div className="font-medium">John Smith</div>
                              <div className="text-sm text-gray-500">Software Engineer</div>
                            </div>
                          </div>
                          <Badge className="bg-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">React</Badge>
                          <Badge variant="outline">TypeScript</Badge>
                          <Badge className="bg-purple-600">
                            <Crown className="h-3 w-3 mr-1" />
                            Pro
                          </Badge>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                            <div>
                              <div className="font-medium">Sarah Wilson</div>
                              <div className="text-sm text-gray-500">Product Designer</div>
                            </div>
                          </div>
                          <Badge variant="secondary">
                            <Clock className="h-3 w-3 mr-1" />
                            Away
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">Figma</Badge>
                          <Badge variant="outline">UI/UX</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* E-commerce Product */}
                  <div>
                    <h4 className="font-semibold mb-4">Product Listings</h4>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h5 className="font-medium">Wireless Headphones</h5>
                          <p className="text-gray-600">Premium noise-cancelling headphones</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-red-600">Sale</Badge>
                          <Badge className="bg-green-600">In Stock</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant="outline">Electronics</Badge>
                          <Badge variant="outline">Audio</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-yellow-600">
                            <Star className="h-3 w-3 mr-1" />
                            4.8
                          </Badge>
                          <span className="text-sm text-gray-500">(124 reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status Dashboard */}
                  <div>
                    <h4 className="font-semibold mb-4">Status Dashboard</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">API Status</span>
                          <Badge className="bg-green-600">Operational</Badge>
                        </div>
                        <div className="text-sm text-gray-500">All systems running normally</div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Database</span>
                          <Badge className="bg-yellow-600">Degraded</Badge>
                        </div>
                        <div className="text-sm text-gray-500">Experiencing minor delays</div>
                      </div>
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
                <CardDescription>Code examples for implementing badge components.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`import { Badge } from "@/components/ui/badge"
import { CheckCircle, Crown } from "lucide-react"

// Basic Badge
function StatusBadge({ status }) {
  const variants = {
    active: { className: "bg-green-600", label: "Active" },
    inactive: { className: "bg-gray-600", label: "Inactive" },
    pending: { className: "bg-yellow-600", label: "Pending" }
  }
  
  const variant = variants[status] || variants.inactive
  
  return (
    <Badge className={variant.className}>
      {variant.label}
    </Badge>
  )
}

// Badge with Icon
function VerifiedBadge({ isVerified }) {
  if (!isVerified) return null
  
  return (
    <Badge className="bg-green-600">
      <CheckCircle className="h-3 w-3 mr-1" />
      Verified
    </Badge>
  )
}

// Notification Badge
function NotificationBadge({ count }) {
  if (count === 0) return null
  
  return (
    <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs bg-red-600">
      {count > 99 ? "99+" : count}
    </Badge>
  )
}

// Usage Example
function UserCard({ user }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={user.avatar} className="h-10 w-10 rounded-full" />
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-500">{user.role}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <StatusBadge status={user.status} />
          <VerifiedBadge isVerified={user.verified} />
          {user.isPremium && (
            <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600">
              <Crown className="h-3 w-3 mr-1" />
              Premium
            </Badge>
          )}
        </div>
      </div>
    </div>
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