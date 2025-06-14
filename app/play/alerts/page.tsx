import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, Info, XCircle, Terminal } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function AlertsPage() {
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
            <Link href="/play/buttons" className="text-gray-500 hover:text-gray-700">Previous: Buttons</Link>
            <Link href="/play/cards" className="text-gray-500 hover:text-gray-700">Next: Cards</Link>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Alert Components</h1>
          <p className="text-xl text-gray-600 mb-6">
            Alerts provide important messages to users about system status, user actions, or other contextual information.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Feedback</Badge>
            <Badge>Accessible</Badge>
            <Badge>Contextual</Badge>
            <Badge>Non-intrusive</Badge>
          </div>
        </div>

        <Tabs defaultValue="variants" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="variants">Alert Types</TabsTrigger>
            <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>

          {/* Alert Variants */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Standard Alerts</CardTitle>
                <CardDescription>
                  Different alert types for various contexts and message urgency levels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>
                      This is an informational alert to provide helpful context or tips to users.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Success</AlertTitle>
                    <AlertDescription className="text-green-700">
                      Your changes have been saved successfully. The system has been updated.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-yellow-200 bg-yellow-50">
                    <AlertCircle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800">Warning</AlertTitle>
                    <AlertDescription className="text-yellow-700">
                      This action cannot be undone. Please make sure you want to proceed.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-red-200 bg-red-50">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <AlertTitle className="text-red-800">Error</AlertTitle>
                    <AlertDescription className="text-red-700">
                      Something went wrong. Please try again or contact support if the problem persists.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best Practices</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Use clear, concise language that users can understand</li>
                    <li>• Include actionable next steps when appropriate</li>
                    <li>• Use consistent colors and icons for each alert type</li>
                    <li>• Position alerts near the relevant content or action</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Specialized Alerts</CardTitle>
                <CardDescription>
                  Custom alert variations for specific use cases and contexts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Alert className="border-blue-200 bg-blue-50">
                    <Terminal className="h-4 w-4 text-blue-600" />
                    <AlertTitle className="text-blue-800">System Update</AlertTitle>
                    <AlertDescription className="text-blue-700">
                      A new version is available. 
                      <Button variant="link" className="p-0 h-auto text-blue-600 underline ml-1">
                        Update now
                      </Button>
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-purple-200 bg-purple-50">
                    <Info className="h-4 w-4 text-purple-600" />
                    <AlertTitle className="text-purple-800">Pro Tip</AlertTitle>
                    <AlertDescription className="text-purple-700">
                      You can use keyboard shortcuts to navigate faster. Press Ctrl+K to open the command palette.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Accessibility */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Accessibility</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Use appropriate ARIA roles and labels</li>
                    <li>• Ensure sufficient color contrast for all text</li>
                    <li>• Don&apos;t rely solely on color to convey meaning</li>
                    <li>• Provide dismissible alerts when appropriate</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Usage Guidelines */}
          <TabsContent value="usage" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>When to Use Alerts</CardTitle>
                <CardDescription>
                  Guidelines for choosing the right alert type and timing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-600">✓ Use alerts for:</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Confirming successful actions</li>
                      <li>• Warning about potential data loss</li>
                      <li>• Displaying system errors or failures</li>
                      <li>• Providing helpful tips or information</li>
                      <li>• Announcing system status changes</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-red-600">✗ Avoid alerts for:</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Marketing messages or promotions</li>
                      <li>• Non-essential feature announcements</li>
                      <li>• Repeatedly showing the same message</li>
                      <li>• Blocking critical user workflows</li>
                      <li>• Information that belongs in tooltips</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alert Hierarchy</CardTitle>
                <CardDescription>
                  Understanding the urgency and importance levels of different alerts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Error (Highest Priority)</h4>
                    <p className="text-sm text-gray-600">Critical failures that prevent task completion</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-600">Warning (High Priority)</h4>
                    <p className="text-sm text-gray-600">Potential issues that could cause problems</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-600">Success (Medium Priority)</h4>
                    <p className="text-sm text-gray-600">Confirmation of completed actions</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-600">Info (Low Priority)</h4>
                    <p className="text-sm text-gray-600">Helpful context or additional information</p>
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
                <CardDescription>Code examples for implementing alerts in your React application.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

function SuccessAlert() {
  return (
    <Alert className="border-green-200 bg-green-50">
      <CheckCircle className="h-4 w-4 text-green-600" />
      <AlertTitle className="text-green-800">Success</AlertTitle>
      <AlertDescription className="text-green-700">
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
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