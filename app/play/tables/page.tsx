import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, ArrowUpDown, Filter, Download } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function TablesPage() {
  const sampleData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "User", status: "Inactive" },
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", role: "Editor", status: "Active" },
  ]

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
            <Link href="/play/modals" className="text-gray-500 hover:text-gray-700">Previous: Modals</Link>
            <Link href="/play/badges" className="text-gray-500 hover:text-gray-700">Next: Badges</Link>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Table Components</h1>
          <p className="text-xl text-gray-600 mb-6">
            Tables organize and display data in rows and columns, making information easy to scan and compare.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Data Display</Badge>
            <Badge>Sortable</Badge>
            <Badge>Filterable</Badge>
            <Badge>Responsive</Badge>
          </div>
        </div>

        <Tabs defaultValue="basic" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic Tables</TabsTrigger>
            <TabsTrigger value="features">Table Features</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>

          {/* Basic Tables */}
          <TabsContent value="basic" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Standard Table</CardTitle>
                <CardDescription>
                  Basic table layout with headers, rows, and cells for displaying structured data.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleData.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best Practices</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Use clear, descriptive column headers</li>
                    <li>• Align numerical data to the right</li>
                    <li>• Provide zebra striping for long tables</li>
                    <li>• Keep row heights consistent</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compact Table</CardTitle>
                <CardDescription>
                  Dense table layout for displaying more data in limited space.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="h-10">
                        <TableHead className="px-3 py-2 text-xs">Product</TableHead>
                        <TableHead className="px-3 py-2 text-xs">SKU</TableHead>
                        <TableHead className="px-3 py-2 text-xs text-right">Price</TableHead>
                        <TableHead className="px-3 py-2 text-xs text-right">Stock</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="h-8">
                        <TableCell className="px-3 py-1 text-sm">Wireless Headphones</TableCell>
                        <TableCell className="px-3 py-1 text-sm text-gray-500">WH-001</TableCell>
                        <TableCell className="px-3 py-1 text-sm text-right">$99.99</TableCell>
                        <TableCell className="px-3 py-1 text-sm text-right">24</TableCell>
                      </TableRow>
                      <TableRow className="h-8">
                        <TableCell className="px-3 py-1 text-sm">Bluetooth Speaker</TableCell>
                        <TableCell className="px-3 py-1 text-sm text-gray-500">BS-002</TableCell>
                        <TableCell className="px-3 py-1 text-sm text-right">$149.99</TableCell>
                        <TableCell className="px-3 py-1 text-sm text-right">12</TableCell>
                      </TableRow>
                      <TableRow className="h-8">
                        <TableCell className="px-3 py-1 text-sm">USB Cable</TableCell>
                        <TableCell className="px-3 py-1 text-sm text-gray-500">UC-003</TableCell>
                        <TableCell className="px-3 py-1 text-sm text-right">$19.99</TableCell>
                        <TableCell className="px-3 py-1 text-sm text-right">156</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Accessibility */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Accessibility</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Use semantic table elements (thead, tbody, th, td)</li>
                    <li>• Provide scope attributes for complex tables</li>
                    <li>• Ensure sufficient color contrast</li>
                    <li>• Include table captions when helpful</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Table Features */}
          <TabsContent value="features" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Enhanced Table Features</CardTitle>
                <CardDescription>
                  Advanced table functionality including sorting, filtering, and actions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Table Toolbar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">4 of 4 rows</span>
                  </div>
                </div>

                {/* Sortable Table */}
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          <Button variant="ghost" className="h-auto p-0 font-semibold">
                            Name
                            <ArrowUpDown className="ml-2 h-3 w-3" />
                          </Button>
                        </TableHead>
                        <TableHead>
                          <Button variant="ghost" className="h-auto p-0 font-semibold">
                            Email
                            <ArrowUpDown className="ml-2 h-3 w-3" />
                          </Button>
                        </TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>
                          <Button variant="ghost" className="h-auto p-0 font-semibold">
                            Status
                            <ArrowUpDown className="ml-2 h-3 w-3" />
                          </Button>
                        </TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleData.map((user) => (
                        <TableRow key={user.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{user.role}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Showing 1 to 4 of 4 results
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-blue-600 text-white">
                      1
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsive Table Patterns</CardTitle>
                <CardDescription>
                  Strategies for making tables work well on different screen sizes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Mobile Card Layout */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Mobile Card Layout</h4>
                  <div className="space-y-3 md:hidden">
                    {sampleData.slice(0, 2).map((user) => (
                      <div key={user.id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{user.name}</div>
                          <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                            {user.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{user.role}</Badge>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm text-gray-500">
                      This layout is hidden on larger screens. Resize your browser to see the mobile card layout.
                    </p>
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
                <CardDescription>Code examples for implementing table components.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function DataTable({ data }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>
                <Badge variant={item.status === "Active" ? "default" : "secondary"}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  Actions
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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