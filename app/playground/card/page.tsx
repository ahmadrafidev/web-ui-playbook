"use client"

import { Heart, Star, Share2, Bookmark, MoreHorizontal, Calendar, User, MessageCircle, ArrowRight, CheckCircle, AlertCircle, FileImage, Video, ShoppingCart, Eye, Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"

const cardComponentsUrlReference = [
  "https://spectrum.adobe.com/page/cards/",
  "https://design.visa.com/components/content-card/accessibility/",
  "https://base.uber.com/6d2425e9f/p/02338d-card",
  "https://paste.twilio.design/components/card",
  "https://polaris-react.shopify.com/components/layout-and-structure/media-card",
  "https://blueprintjs.com/docs/#core/components/card",
  "https://carbondesignsystem.com/components/tile/usage/",
  "https://m3.material.io/components/cards/overview",
  "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/"
]

export default function CardPage() {
  const { MobileWarning } = useMobileWarning()

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Cards</h2>
            <EditButton filePath="app/playground/card/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Cards are flexible containers that group related content and actions. They serve as entry points to more detailed information 
            and provide a preview of content in a scannable format. Cards are one of the most versatile UI components.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Flexible</Badge>
            <Badge>Content Container</Badge>
            <Badge>Interactive</Badge>
            <Badge>Accessible</Badge>
            <Badge>Responsive</Badge>
            <Badge>Scannable</Badge>
          </div>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose of Cards */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Purpose & Usage of Cards</CardTitle>
                <CardDescription>
                  Understanding when and why to use cards effectively in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Content Grouping:</strong> Organize related information and actions</li>
                      <li>• <strong>Preview Gateway:</strong> Provide content previews that lead to details</li>
                      <li>• <strong>Scannable Format:</strong> Enable quick browsing and comparison</li>
                      <li>• <strong>Action Container:</strong> House interactive elements and controls</li>
                      <li>• <strong>Visual Hierarchy:</strong> Create clear content boundaries</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">When to Use Cards</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Cards When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Displaying collections of content</li>
                          <li>• Creating product/content previews</li>
                          <li>• Grouping mixed content types</li>
                          <li>• Building dashboard widgets</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                        <strong className="text-yellow-800 dark:text-yellow-200">Avoid Cards When:</strong>
                        <ul className="text-sm mt-1 text-yellow-700 dark:text-yellow-300">
                          <li>• Content is better in lists</li>
                          <li>• Information is purely textual</li>
                          <li>• Space is very limited</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Card Examples by Use Case</h4>
                  <div className="grid gap-4">
                    {/* Content Preview Card */}
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Content Preview Cards</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="max-w-sm">
                          <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-t-lg flex items-center justify-center">
                            <FileImage className="h-8 w-8 text-blue-600" />
                          </div>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">Design System Fundamentals</CardTitle>
                            <CardDescription className="text-sm">Learn the core principles of building scalable design systems.</CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                <span>Dec 15, 2024</span>
                              </div>
                              <Button size="sm" variant="outline">Read More</Button>
                            </div>
                          </CardContent>
                        </Card>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p><strong>Use Case:</strong> Blog posts, articles, tutorials</p>
                          <p><strong>Elements:</strong> Image, title, description, metadata, CTA</p>
                          <p><strong>Purpose:</strong> Quick content preview with clear next action</p>
                        </div>
                      </div>
                    </div>

                    {/* Product Card */}
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Product/E-commerce Cards</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="max-w-sm">
                          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 to-gray-700 rounded-t-lg flex items-center justify-center relative">
                            <ShoppingCart className="h-8 w-8 text-gray-600" />
                            <Badge className="absolute top-2 right-2 bg-red-500">Sale</Badge>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Wireless Headphones</CardTitle>
                            <CardDescription className="text-sm">Premium noise-canceling headphones</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold">$199</span>
                                <span className="text-sm text-muted-foreground line-through">$249</span>
                              </div>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star key={i} className={`h-3 w-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                                ))}
                                <span className="text-xs text-muted-foreground ml-1">(4.0)</span>
                              </div>
                            </div>
                            <Button className="w-full" size="sm">Add to Cart</Button>
                          </CardContent>
                        </Card>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p><strong>Use Case:</strong> E-commerce, marketplace listings</p>
                          <p><strong>Elements:</strong> Product image, name, price, ratings, CTA</p>
                          <p><strong>Purpose:</strong> Product discovery and quick purchase path</p>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Widget Card */}
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Dashboard Widget Cards</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="max-w-sm">
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              +12.5%
                            </Badge>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">$45,231.89</div>
                            <p className="text-xs text-muted-foreground">
                              +20.1% from last month
                            </p>
                            <div className="mt-4 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded opacity-20"></div>
                          </CardContent>
                        </Card>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p><strong>Use Case:</strong> Analytics, metrics, KPI display</p>
                          <p><strong>Elements:</strong> Metric value, trend indicator, visualization</p>
                          <p><strong>Purpose:</strong> Quick data insights and status monitoring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Card Anatomy */}
          <TabsContent value="anatomy" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Card Anatomy & Structure</CardTitle>
                <CardDescription>
                  Understanding the building blocks and components that make up effective cards.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Essential Elements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Container:</strong> Defines card boundaries and elevation</li>
                      <li>• <strong>Media Area:</strong> Images, videos, or visual content</li>
                      <li>• <strong>Header:</strong> Primary title and key information</li>
                      <li>• <strong>Body:</strong> Supporting content and descriptions</li>
                      <li>• <strong>Actions:</strong> Interactive elements and buttons</li>
                      <li>• <strong>Footer:</strong> Metadata, timestamps, secondary info</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Layout Principles</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Visual Hierarchy:</strong> Most important content first</li>
                      <li>• <strong>Consistent Spacing:</strong> Uniform padding and margins</li>
                      <li>• <strong>Clear Boundaries:</strong> Distinct separation from surroundings</li>
                      <li>• <strong>Logical Flow:</strong> Natural reading order</li>
                      <li>• <strong>Action Placement:</strong> CTAs in predictable locations</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Card Structure Examples</h4>
                  
                  {/* Basic Card Structure */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Basic Content Card Structure</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="max-w-sm">
                        <CardHeader className="space-y-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Card Title</CardTitle>
                            <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <CardDescription>
                            Supporting description that provides context
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Main content area with detailed information about the card subject.
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="secondary">Tag 1</Badge>
                            <Badge variant="secondary">Tag 2</Badge>
                          </div>
                        </CardContent>
                        <div className="px-6 pb-6">
                          <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-4">
                            <span>Updated 2 hours ago</span>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">View</Button>
                              <Button size="sm">Edit</Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 border rounded bg-blue-50 dark:bg-blue-900/20">
                          <strong>Header Section:</strong> Title, subtitle, and optional actions
                        </div>
                        <div className="p-3 border rounded bg-green-50 dark:bg-green-900/20">
                          <strong>Content Section:</strong> Main body content and supporting elements
                        </div>
                        <div className="p-3 border rounded bg-purple-50 dark:bg-purple-900/20">
                          <strong>Footer Section:</strong> Metadata and primary actions
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Media Card Structure */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Media-Rich Card Structure</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="max-w-sm overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center relative">
                          <Video className="h-8 w-8 text-white" />
                          <Button size="sm" variant="secondary" className="absolute bottom-2 right-2">
                            <Eye className="h-3 w-3 mr-1" />
                            Watch
                          </Button>
                        </div>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-base">Tutorial Video</CardTitle>
                              <CardDescription className="text-sm">5:24 duration</CardDescription>
                            </div>
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost">
                                <Bookmark className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">John Doe</p>
                              <p className="text-xs text-muted-foreground">2.1K subscribers</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 border rounded bg-red-50 dark:bg-red-900/20">
                          <strong>Media Area:</strong> Hero image/video with overlay actions
                        </div>
                        <div className="p-3 border rounded bg-blue-50 dark:bg-blue-900/20">
                          <strong>Content Header:</strong> Title with quick actions
                        </div>
                        <div className="p-3 border rounded bg-green-50 dark:bg-green-900/20">
                          <strong>Attribution:</strong> Author/source information
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacing and Sizing */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Spacing & Sizing Guidelines</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h6 className="font-medium mb-2">Recommended Spacing</h6>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Card Padding:</strong> 16-24px (1rem-1.5rem)</li>
                          <li>• <strong>Element Spacing:</strong> 8-16px (0.5rem-1rem)</li>
                          <li>• <strong>Section Breaks:</strong> 16-24px (1rem-1.5rem)</li>
                          <li>• <strong>Action Spacing:</strong> 8-12px (0.5rem-0.75rem)</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium mb-2">Common Dimensions</h6>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Minimum Width:</strong> 280px (mobile)</li>
                          <li>• <strong>Optimal Width:</strong> 320-400px (desktop)</li>
                          <li>• <strong>Touch Target:</strong> 44x44px minimum</li>
                          <li>• <strong>Border Radius:</strong> 8-12px for modern feel</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Card Variants */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Card Variants & Types</CardTitle>
                <CardDescription>
                  Different card styles and configurations for various use cases and content types.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  {/* Elevation Variants */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Elevation & Style Variants</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="shadow-none border">
                        <CardHeader>
                          <CardTitle className="text-base">Flat Card</CardTitle>
                          <CardDescription>No shadow, border only</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Clean, minimal appearance suitable for dense layouts.</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="shadow-md">
                        <CardHeader>
                          <CardTitle className="text-base">Elevated Card</CardTitle>
                          <CardDescription>Medium shadow elevation</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Standard elevation for most card implementations.</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="shadow-xl">
                        <CardHeader>
                          <CardTitle className="text-base">High Elevation</CardTitle>
                          <CardDescription>Strong shadow for emphasis</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">High prominence for important content or modal cards.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Interactive Variants */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Interactive Variants</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center justify-between">
                            Clickable Card
                            <ArrowRight className="h-4 w-4" />
                          </CardTitle>
                          <CardDescription>Entire card is interactive</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Hover to see elevation change. Acts as a single interactive element.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Action-Based Card</CardTitle>
                          <CardDescription>Specific interactive elements</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Individual buttons for specific actions.
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">Save</Button>
                            <Button size="sm">Share</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Content Type Variants */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Content-Specific Variants</h4>
                    <div className="grid gap-6">
                      
                      {/* Profile Card */}
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Profile/User Cards</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="max-w-sm">
                            <CardHeader className="text-center">
                              <Avatar className="h-16 w-16 mx-auto mb-3">
                                <AvatarImage src="/placeholder-avatar.jpg" />
                                <AvatarFallback>AD</AvatarFallback>
                              </Avatar>
                              <CardTitle className="text-lg">Alex Developer</CardTitle>
                              <CardDescription>Senior UI/UX Designer</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center space-y-3">
                              <div className="flex justify-center gap-4 text-sm">
                                <div>
                                  <div className="font-semibold">234</div>
                                  <div className="text-muted-foreground">Projects</div>
                                </div>
                                <div>
                                  <div className="font-semibold">1.2K</div>
                                  <div className="text-muted-foreground">Followers</div>
                                </div>
                              </div>
                              <div className="flex gap-2 justify-center">
                                <Button size="sm">Follow</Button>
                                <Button size="sm" variant="outline">Message</Button>
                              </div>
                            </CardContent>
                          </Card>
                          <div className="text-sm text-muted-foreground space-y-2">
                            <p><strong>Use Case:</strong> Team directories, social platforms, author bios</p>
                            <p><strong>Key Elements:</strong> Avatar, name, role, stats, actions</p>
                            <p><strong>Layout:</strong> Centered, symmetrical design</p>
                          </div>
                        </div>
                      </div>

                      {/* Notification Card */}
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Notification Cards</h5>
                        <div className="space-y-3">
                          <Card className="border-l-4 border-l-blue-500">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                  <MessageCircle className="h-4 w-4 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-sm">New message received</p>
                                  <p className="text-sm text-muted-foreground">John sent you a message about the project timeline.</p>
                                  <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
                                </div>
                                <Button size="sm" variant="ghost">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-l-4 border-l-green-500">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-sm">Task completed</p>
                                  <p className="text-sm text-muted-foreground">Design review has been successfully completed.</p>
                                  <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                                </div>
                                <Button size="sm" variant="ghost">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-l-4 border-l-red-500">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <div className="p-1 bg-red-100 dark:bg-red-900/30 rounded-full">
                                  <AlertCircle className="h-4 w-4 text-red-600" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-sm">Action required</p>
                                  <p className="text-sm text-muted-foreground">Your account verification is pending review.</p>
                                  <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
                                </div>
                                <Button size="sm" variant="ghost">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Statistics Card */}
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Statistics/Metrics Cards</h5>
                        <div className="grid md:grid-cols-3 gap-4">
                          <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                              <User className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">2,847</div>
                              <p className="text-xs text-muted-foreground">
                                +12% from last month
                              </p>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-medium">Downloads</CardTitle>
                              <Download className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">45,231</div>
                              <p className="text-xs text-muted-foreground">
                                +5% from last week
                              </p>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                              <Heart className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">89.3%</div>
                              <p className="text-xs text-muted-foreground">
                                +2.1% from yesterday
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Size Variants */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Size Variants</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <Card className="w-48 h-32">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Compact</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-xs text-muted-foreground">
                              Minimal content
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="w-64 h-40">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">Standard</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-sm text-muted-foreground">
                              Regular card size for most content
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="w-80 h-48">
                          <CardHeader>
                            <CardTitle className="text-lg">Extended</CardTitle>
                            <CardDescription>More detailed content</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Larger cards for rich content, detailed descriptions, and multiple actions.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Card Patterns */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Card Design Patterns & Layout</CardTitle>
                <CardDescription>
                  Common layout patterns, design principles, and best practices for organizing cards in your interface.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  {/* Grid Layouts */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Grid Layout Patterns</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Responsive Grid</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <Card key={i} className="h-24">
                              <CardContent className="p-4 flex items-center justify-center">
                                <span className="text-sm text-muted-foreground">Card {i + 1}</span>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Responsive grid that adapts from 1 column on mobile to 3 columns on desktop.
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Masonry Layout</h5>
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                          <Card className="break-inside-avoid">
                            <CardContent className="p-4 h-32 flex items-center justify-center">
                              <span className="text-sm text-muted-foreground">Tall Card</span>
                            </CardContent>
                          </Card>
                          <Card className="break-inside-avoid">
                            <CardContent className="p-4 h-20 flex items-center justify-center">
                              <span className="text-sm text-muted-foreground">Short</span>
                            </CardContent>
                          </Card>
                          <Card className="break-inside-avoid">
                            <CardContent className="p-4 h-28 flex items-center justify-center">
                              <span className="text-sm text-muted-foreground">Medium</span>
                            </CardContent>
                          </Card>
                          <Card className="break-inside-avoid">
                            <CardContent className="p-4 h-24 flex items-center justify-center">
                              <span className="text-sm text-muted-foreground">Regular</span>
                            </CardContent>
                          </Card>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                          Pinterest-style layout for cards with varying heights, ideal for content galleries.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Collections */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Card Collection Patterns</h4>
                    <div className="space-y-4">
                      
                      {/* Horizontal Scroll */}
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Horizontal Scroll Collection</h5>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Card key={i} className="min-w-64 flex-shrink-0">
                              <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg"></div>
                              <CardHeader className="pb-2">
                                <CardTitle className="text-sm">Featured Item {i + 1}</CardTitle>
                                <CardDescription className="text-xs">Quick preview description</CardDescription>
                              </CardHeader>
                            </Card>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Horizontal scrolling for featured content, recommendations, or categories.
                        </p>
                      </div>

                      {/* Stacked Cards */}
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Stacked Cards (Deck Pattern)</h5>
                        <div className="relative">
                          <Card className="relative z-30">
                            <CardHeader>
                              <CardTitle className="text-base">Active Card</CardTitle>
                              <CardDescription>Currently visible card in the stack</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">Previous</Button>
                                <Button size="sm">Next</Button>
                              </div>
                            </CardContent>
                          </Card>
                          <div className="absolute top-2 left-2 right-2 z-20 bg-muted rounded-lg h-20"></div>
                          <div className="absolute top-4 left-4 right-4 z-10 bg-muted/50 rounded-lg h-20"></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Card stack pattern for guided flows, tutorials, or progressive disclosure.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Patterns */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Interactive Patterns</h4>
                    <div className="space-y-4">
                      
                      {/* Expandable Cards */}
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Expandable Cards</h5>
                        <div className="space-y-3">
                          <Card className="transition-all duration-200">
                            <CardHeader className="cursor-pointer">
                              <div className="flex items-center justify-between">
                                <div>
                                  <CardTitle className="text-base">Project Alpha</CardTitle>
                                  <CardDescription>Click to expand details</CardDescription>
                                </div>
                                <ArrowRight className="h-4 w-4 transform transition-transform" />
                              </div>
                            </CardHeader>
                          </Card>
                          
                          <Card>
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <div>
                                  <CardTitle className="text-base">Project Beta</CardTitle>
                                  <CardDescription>Expanded view</CardDescription>
                                </div>
                                <ArrowRight className="h-4 w-4 transform rotate-90" />
                              </div>
                            </CardHeader>
                            <CardContent className="border-t pt-4">
                              <p className="text-sm text-muted-foreground mb-3">
                                Detailed information that becomes visible when the card is expanded.
                              </p>
                              <div className="flex gap-2">
                                <Badge variant="secondary">In Progress</Badge>
                                <Badge variant="outline">High Priority</Badge>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Accordion-style cards for showing/hiding detailed information.
                        </p>
                      </div>

                      {/* Flip Cards */}
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Flip Cards</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="perspective-1000">
                            <Card className="cursor-pointer transform transition-transform duration-500 hover:rotate-y-180 preserve-3d">
                              <CardContent className="p-6 text-center backface-hidden">
                                <User className="h-12 w-12 mx-auto mb-3 text-primary" />
                                <h6 className="font-medium">Hover to flip</h6>
                                <p className="text-sm text-muted-foreground">Front side content</p>
                              </CardContent>
                            </Card>
                          </div>
                          <div className="text-sm text-muted-foreground space-y-2">
                            <p><strong>Use Case:</strong> Interactive product showcases, team member profiles</p>
                            <p><strong>Implementation:</strong> CSS transforms with hover/click triggers</p>
                            <p><strong>Accessibility:</strong> Ensure keyboard navigation and screen reader support</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Patterns */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Content Organization Patterns</h4>
                    <div className="space-y-4">
                      
                      {/* Feature Comparison */}
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Feature Comparison Cards</h5>
                        <div className="grid md:grid-cols-3 gap-4">
                          <Card className="relative">
                            <CardHeader className="text-center">
                              <CardTitle className="text-lg">Basic</CardTitle>
                              <CardDescription>For individuals</CardDescription>
                              <div className="text-2xl font-bold mt-2">Free</div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <ul className="text-sm space-y-2">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>Up to 3 projects</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>Basic support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>1GB storage</span>
                                </li>
                              </ul>
                              <Button className="w-full" variant="outline">Get Started</Button>
                            </CardContent>
                          </Card>
                          
                          <Card className="relative border-primary shadow-lg scale-105">
                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">Popular</Badge>
                            <CardHeader className="text-center">
                              <CardTitle className="text-lg">Pro</CardTitle>
                              <CardDescription>For small teams</CardDescription>
                              <div className="text-2xl font-bold mt-2">$29/mo</div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <ul className="text-sm space-y-2">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>Unlimited projects</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>Priority support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>100GB storage</span>
                                </li>
                              </ul>
                              <Button className="w-full">Start Free Trial</Button>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="text-center">
                              <CardTitle className="text-lg">Enterprise</CardTitle>
                              <CardDescription>For large teams</CardDescription>
                              <div className="text-2xl font-bold mt-2">Custom</div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <ul className="text-sm space-y-2">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>Everything in Pro</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>Dedicated support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>Unlimited storage</span>
                                </li>
                              </ul>
                              <Button className="w-full" variant="outline">Contact Sales</Button>
                            </CardContent>
                          </Card>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                          Pricing or feature comparison layout with clear visual hierarchy and emphasis.
                        </p>
                      </div>

                      {/* Timeline Cards */}
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Timeline Pattern</h5>
                        <div className="space-y-4">
                          {[
                            { time: "2 hours ago", title: "Project started", status: "completed" },
                            { time: "1 hour ago", title: "Design phase", status: "completed" },
                            { time: "30 min ago", title: "Development", status: "active" },
                            { time: "Future", title: "Testing phase", status: "pending" }
                          ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className={`w-3 h-3 rounded-full ${
                                  item.status === 'completed' ? 'bg-green-500' : 
                                  item.status === 'active' ? 'bg-blue-500' : 'bg-gray-300'
                                }`}></div>
                                {i < 3 && <div className="w-px h-16 bg-gray-200 mt-2"></div>}
                              </div>
                              <Card className={`flex-1 ${item.status === 'active' ? 'border-blue-500' : ''}`}>
                                <CardContent className="p-4">
                                  <div className="flex items-center justify-between">
                                    <h6 className="font-medium">{item.title}</h6>
                                    <span className="text-xs text-muted-foreground">{item.time}</span>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                          Timeline or process flow using connected cards with status indicators.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Card Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Card Accessibility</CardTitle>
                <CardDescription>
                  Essential accessibility considerations for creating inclusive card components that work for all users.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  {/* Semantic Structure */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Semantic HTML Structure</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Proper HTML Elements</h5>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Container:</strong> Use <code>&lt;article&gt;</code> for independent content</li>
                          <li>• <strong>Headers:</strong> Use heading elements (h1-h6) for titles</li>
                          <li>• <strong>Content:</strong> Use semantic elements like <code>&lt;p&gt;</code>, <code>&lt;ul&gt;</code></li>
                          <li>• <strong>Actions:</strong> Use <code>&lt;button&gt;</code> for actions, <code>&lt;a&gt;</code> for links</li>
                          <li>• <strong>Images:</strong> Include descriptive alt text</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">ARIA Landmarks</h5>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>role="region":</strong> For card collections</li>
                          <li>• <strong>aria-label:</strong> Descriptive names for cards</li>
                          <li>• <strong>aria-labelledby:</strong> Reference to card title</li>
                          <li>• <strong>aria-describedby:</strong> Additional context</li>
                          <li>• <strong>aria-expanded:</strong> For expandable cards</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Keyboard Navigation */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Keyboard Navigation</h4>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Interactive Card Examples</h5>
                      <div className="space-y-4">
                        <Card 
                          tabIndex={0}
                          className="cursor-pointer focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
                          role="button"
                          aria-label="Product card for Wireless Headphones - click to view details"
                        >
                          <CardHeader>
                            <CardTitle>Wireless Headphones</CardTitle>
                            <CardDescription>Premium noise-canceling headphones</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                              Focus with Tab, activate with Enter or Space
                            </p>
                            <div className="flex gap-2">
                              <Badge>Focus Ring</Badge>
                              <Badge variant="outline">Keyboard Accessible</Badge>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Card with Multiple Actions</CardTitle>
                            <CardDescription>Each action is individually focusable</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                              Use Tab to navigate between interactive elements
                            </p>
                            <div className="flex gap-2">
                              <Button size="sm" aria-label="Save this item">Save</Button>
                              <Button size="sm" variant="outline" aria-label="Share this item">Share</Button>
                              <Button size="sm" variant="ghost" aria-label="More options for this item">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h6 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Keyboard Navigation Guidelines</h6>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                        <div>
                          <strong>Essential Keys:</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• <code>Tab</code> - Navigate forward</li>
                            <li>• <code>Shift + Tab</code> - Navigate backward</li>
                            <li>• <code>Enter</code> - Activate buttons/links</li>
                            <li>• <code>Space</code> - Activate buttons</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Implementation:</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• Visible focus indicators</li>
                            <li>• Logical tab order</li>
                            <li>• Skip links for collections</li>
                            <li>• No keyboard traps</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Screen Reader Support */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Screen Reader Support</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Content Structure for Screen Readers</h5>
                        <div className="space-y-3">
                          <Card>
                            <CardHeader>
                              <CardTitle id="card-title-1">Project Alpha</CardTitle>
                              <CardDescription>Due: December 15, 2024</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-3">
                                This card announces as: "Project Alpha, Due: December 15, 2024, Progress: 75% complete"
                              </p>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-blue-600 h-2 rounded-full w-3/4" aria-label="75% complete"></div>
                                </div>
                                <span className="text-sm font-medium">75%</span>
                              </div>
                              <Button 
                                size="sm" 
                                aria-describedby="card-title-1"
                                aria-label="View details for Project Alpha"
                              >
                                View Details
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Announcing Dynamic Content</h5>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-sm">Task completed</p>
                                <p className="text-sm text-muted-foreground">Your design review has been approved.</p>
                              </div>
                              <Button 
                                size="sm" 
                                variant="ghost"
                                aria-label="Dismiss notification: Task completed"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                            <div 
                              aria-live="polite" 
                              aria-atomic="true" 
                              className="sr-only"
                            >
                              Notification: Task completed. Your design review has been approved.
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Visual Accessibility */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Visual Accessibility</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Color and Contrast</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h6 className="font-medium mb-2">Good Contrast Examples</h6>
                            <div className="space-y-2">
                              <Card className="border-green-500 bg-green-50 dark:bg-green-900/20">
                                <CardContent className="p-3">
                                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                                    ✅ High contrast text (4.5:1 ratio)
                                  </p>
                                </CardContent>
                              </Card>
                              <Card>
                                <CardContent className="p-3">
                                  <p className="text-sm font-medium">
                                    ✅ Standard text meets contrast requirements
                                  </p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                          <div>
                            <h6 className="font-medium mb-2">Accessibility Features</h6>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>Focus indicators:</strong> 3:1 contrast minimum</li>
                              <li>• <strong>Status colors:</strong> Don't rely on color alone</li>
                              <li>• <strong>Text size:</strong> Minimum 16px (1rem)</li>
                              <li>• <strong>Touch targets:</strong> 44x44px minimum</li>
                              <li>• <strong>Hover states:</strong> Clear visual feedback</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3">Responsive and Zoom Support</h5>
                        <div className="space-y-3">
                          <Card className="max-w-sm">
                            <CardContent className="p-4">
                              <p className="text-sm">
                                This card maintains usability when zoomed to 200% and adapts to different screen sizes.
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                <Button size="sm">Primary</Button>
                                <Button size="sm" variant="outline">Secondary</Button>
                              </div>
                            </CardContent>
                          </Card>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Text remains readable at 200% zoom</li>
                            <li>• Interactive elements stay accessible</li>
                            <li>• Layout adapts without horizontal scrolling</li>
                            <li>• Touch targets remain 44px minimum</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Best Practices */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Implementation Best Practices</h4>
                    <div className="space-y-4">
                      <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do These Things</h5>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Use semantic HTML elements (article, section, header)</li>
                          <li>• Provide meaningful alternative text for images</li>
                          <li>• Include proper heading hierarchy</li>
                          <li>• Implement keyboard navigation support</li>
                          <li>• Use sufficient color contrast (4.5:1 for text)</li>
                          <li>• Add aria-labels for complex interactions</li>
                          <li>• Test with screen readers and keyboard only</li>
                          <li>• Ensure touch targets are at least 44x44px</li>
                        </ul>
                      </div>

                      <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Avoid These Mistakes</h5>
                        <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                          <li>• Using divs for interactive elements without proper roles</li>
                          <li>• Relying solely on color to convey information</li>
                          <li>• Missing focus indicators or poor contrast</li>
                          <li>• Non-descriptive link text like "Click here" or "Read more"</li>
                          <li>• Auto-playing media without user control</li>
                          <li>• Keyboard traps or inaccessible interactions</li>
                          <li>• Missing alt text or using filename as alt text</li>
                          <li>• Touch targets smaller than 44x44px</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Code Example */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Accessible Card Implementation</h4>
                    <Card>
                      <CardHeader>
                        <CardTitle>HTML Implementation Example</CardTitle>
                        <CardDescription>Semantic and accessible card structure</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm whitespace-pre-wrap">
{`<!-- Accessible Card Structure -->
<article role="region" aria-labelledby="card-title">
  <header>
    <h3 id="card-title">Project Dashboard</h3>
    <p>Track your project progress and milestones</p>
  </header>
  
  <div class="card-content">
    <img src="chart.png" alt="Progress chart showing 75% completion" />
    <p>Your project is 75% complete with 3 tasks remaining.</p>
    
    <!-- Progress indicator with proper labeling -->
    <div role="progressbar" 
         aria-valuenow="75" 
         aria-valuemin="0" 
         aria-valuemax="100"
         aria-label="Project completion progress">
      <div class="progress-fill" style="width: 75%"></div>
    </div>
  </div>
  
  <footer class="card-actions">
    <button type="button" aria-describedby="card-title">
      View Full Report
    </button>
    <button type="button" 
            aria-label="Share project dashboard"
            aria-describedby="card-title">
      Share
    </button>
  </footer>
</article>`}
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
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
            description="Essential references for card component implementation and best practices from leading design systems."
            urls={cardComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Cards'
              if (url.includes('design.visa.com')) return 'Visa Design System - Content Card'
              if (url.includes('base.uber.com')) return 'Uber Base Design System - Card'
              if (url.includes('paste.twilio.design')) return 'Twilio Paste - Card Component'
              if (url.includes('polaris-react.shopify.com')) return 'Shopify Polaris - Media Card'
              if (url.includes('blueprintjs.com')) return 'Blueprint.js - Card Component'
              if (url.includes('carbondesignsystem.com')) return 'IBM Carbon - Tile Component'
              if (url.includes('m3.material.io')) return 'Material Design 3 - Cards'
              if (url.includes('w3.org')) return 'WAI-ARIA Landmarks Pattern'
              return url
            }}
          />
        </div>
      </div>
    </div>
  )
} 