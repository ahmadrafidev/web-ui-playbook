import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, Info, XCircle, Terminal } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Alert Components</h1>
          <p className="text-xl text-muted-foreground mb-6">
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

                  <Alert className="border-green-500/20 bg-green-500/10">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertTitle className="text-green-800 dark:text-green-200">Success</AlertTitle>
                    <AlertDescription className="text-green-700 dark:text-green-300">
                      Your changes have been saved successfully. The system has been updated.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-yellow-500/20 bg-yellow-500/10">
                    <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    <AlertTitle className="text-yellow-800 dark:text-yellow-200">Warning</AlertTitle>
                    <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                      This action cannot be undone. Please make sure you want to proceed.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-red-500/20 bg-red-500/10">
                    <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertTitle className="text-red-800 dark:text-red-200">Error</AlertTitle>
                    <AlertDescription className="text-red-700 dark:text-red-300">
                      Something went wrong. Please try again or contact support if the problem persists.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Best Practices</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
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
                  <Alert className="border-blue-500/20 bg-blue-500/10">
                    <Terminal className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <AlertTitle className="text-blue-800 dark:text-blue-200">System Update</AlertTitle>
                    <AlertDescription className="text-blue-700 dark:text-blue-300">
                      A new version is available. 
                      <Button variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-400 underline ml-1">
                        Update now
                      </Button>
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-purple-500/20 bg-purple-500/10">
                    <Info className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <AlertTitle className="text-purple-800 dark:text-purple-200">Pro Tip</AlertTitle>
                    <AlertDescription className="text-purple-700 dark:text-purple-300">
                      You can use keyboard shortcuts to navigate faster. Press Ctrl+K to open the command palette.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Accessibility */}
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">Accessibility</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
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
                    <h4 className="font-semibold text-green-600 dark:text-green-400">✓ Use alerts for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Confirming successful actions</li>
                      <li>• Warning about potential data loss</li>
                      <li>• Displaying system errors or failures</li>
                      <li>• Providing helpful tips or information</li>
                      <li>• Announcing system status changes</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-red-600 dark:text-red-400">✗ Avoid alerts for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
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
                    <h4 className="font-semibold text-red-600 dark:text-red-400">Error (Highest Priority)</h4>
                    <p className="text-sm text-muted-foreground">Critical failures that prevent task completion</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-600 dark:text-yellow-400">Warning (High Priority)</h4>
                    <p className="text-sm text-muted-foreground">Potential issues that could cause problems</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-600 dark:text-green-400">Success (Medium Priority)</h4>
                    <p className="text-sm text-muted-foreground">Confirmation of completed actions</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">Info (Low Priority)</h4>
                    <p className="text-sm text-muted-foreground">Helpful context or additional information</p>
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
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

function SuccessAlert() {
  return (
    <Alert className="border-green-500/20 bg-green-500/10">
      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
      <AlertTitle className="text-green-800 dark:text-green-200">Success</AlertTitle>
      <AlertDescription className="text-green-700 dark:text-green-300">
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

      <Footer />
    </div>
  )
} 