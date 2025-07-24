"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, Info, XCircle, Terminal, X, Shield, Lightbulb } from "lucide-react"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"

const alertComponentsUrlReference = [
  "https://wise.design/components/alert",
  "https://developer.apple.com/design/human-interface-guidelines/alerts",
  "https://spectrum.adobe.com/page/alert-banner/",
  "https://www.w3.org/WAI/ARIA/apg/patterns/alert/",
  "https://polaris-react.shopify.com/components/feedback-indicators/banner",
  "https://base.uber.com/6d2425e9f/p/199f68-banner",
  "https://design.visa.com/components/banner/accessibility/",
  "https://system.design.orange.com/0c1af118d/p/104317-alerts"
]

export default function AlertsPage() {
  const { MobileWarning } = useMobileWarning()

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Alerts</h2>
            <EditButton filePath="app/playground/alerts/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Alerts highlight important information, errors, or warnings that require user attention.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="types">Alert Types</TabsTrigger>
            <TabsTrigger value="banners">Banners</TabsTrigger>
            <TabsTrigger value="interaction">Interaction</TabsTrigger>
            <TabsTrigger value="placement">Placement & UX</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Overview of Alerts */}
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Purpose of Alerts</CardTitle>
                <CardDescription>
                  Understanding when and why to use alerts in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">System Feedback</h4>
                    <p className="text-sm text-muted-foreground">
                      Confirm actions and show status.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Error Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Inform about failures or issues.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Warnings & Context</h4>
                    <p className="text-sm text-muted-foreground">
                      Alert about potential problems or provide helpful tips.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Alert vs Alternatives</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-medium">Component</th>
                          <th className="text-left p-3 font-medium">Primary Use</th>
                          <th className="text-left p-3 font-medium">Interaction</th>
                          <th className="text-left p-3 font-medium">Visual Weight</th>
                          <th className="text-left p-3 font-medium">Example Context</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-3 font-medium">Alert</td>
                          <td className="p-3">System feedback, errors, warnings</td>
                          <td className="p-3">Minimal/optional</td>
                          <td className="p-3">Medium</td>
                          <td className="p-3">Validation, status, errors</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Toast/Snackbar</td>
                          <td className="p-3">Brief notifications</td>
                          <td className="p-3">Auto-dismiss, optional action</td>
                          <td className="p-3">Low</td>
                          <td className="p-3">Save confirmation, info</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Banner</td>
                          <td className="p-3">Global/section-wide info</td>
                          <td className="p-3">Persistent, dismissible</td>
                          <td className="p-3">High</td>
                          <td className="p-3">Site maintenance, outages</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                    <strong className="text-green-800 dark:text-green-200">Best for:</strong>
                    <ul className="text-sm mt-1 text-green-700 dark:text-green-300 list-disc list-inside">
                      <li>Important but non-blocking message</li>
                      <li>Temporary information</li>
                      <li>Context-specific feedback</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
                    <strong className="text-red-800 dark:text-red-200">Avoid when:</strong>
                    <ul className="text-sm mt-1 text-red-700 dark:text-red-300 list-disc list-inside">
                      <li>Message is not actionable or relevant</li>
                      <li>Information is not time-sensitive</li>
                      <li>Use banners for global/system-wide issues</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Example Scenarios (unchanged, but moved below) */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Alert Usage Scenarios</h4>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">
                    <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <strong>Error Alerts:</strong> Network failures, validation errors, system issues
                    <Alert className="mt-2 border-red-500/20 bg-red-500/10">
                      <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      <AlertDescription className="text-red-700 dark:text-red-300">
                        Unable to save changes. Please check your connection and try again.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                    <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <strong>Warning Alerts:</strong> Data loss warnings, irreversible actions
                    <Alert className="mt-2 border-yellow-500/20 bg-yellow-500/10">
                      <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                      <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                        You have unsaved changes. They will be lost if you leave this page.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Alert Types */}
          <TabsContent value="types" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Alert Types & Variants</CardTitle>
                <CardDescription>
                  Different alert types for various contexts and message urgency levels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Standard Alert Types</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-blue-800 dark:text-blue-200">Neutral/Info</h5>
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertTitle>Information</AlertTitle>
                          <AlertDescription>
                            This feature is currently in beta. Your feedback helps us improve.
                          </AlertDescription>
                        </Alert>
                        <p className="text-sm text-muted-foreground">Use for general information, tips, or neutral updates.</p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium text-green-800 dark:text-green-200">Success/Positive</h5>
                        <Alert className="border-green-500/20 bg-green-500/10">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <AlertTitle className="text-green-800 dark:text-green-200">Success</AlertTitle>
                          <AlertDescription className="text-green-700 dark:text-green-300">
                            Your payment has been processed successfully. Receipt sent to your email.
                          </AlertDescription>
                        </Alert>
                        <p className="text-sm text-muted-foreground">Use for confirmations and positive outcomes.</p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium text-yellow-800 dark:text-yellow-200">Warning</h5>
                        <Alert className="border-yellow-500/20 bg-yellow-500/10">
                          <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                          <AlertTitle className="text-yellow-800 dark:text-yellow-200">Warning</AlertTitle>
                          <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                            Your subscription expires in 3 days. Renew now to avoid service interruption.
                          </AlertDescription>
                        </Alert>
                        <p className="text-sm text-muted-foreground">Use for potential issues that need attention.</p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium text-red-800 dark:text-red-200">Error/Negative</h5>
                        <Alert className="border-red-500/20 bg-red-500/10">
                          <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                          <AlertTitle className="text-red-800 dark:text-red-200">Error</AlertTitle>
                          <AlertDescription className="text-red-700 dark:text-red-300">
                            Failed to upload file. The file size exceeds the 10MB limit.
                          </AlertDescription>
                        </Alert>
                        <p className="text-sm text-muted-foreground">Use for errors and failures that block progress.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Specialized Alert Variants</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-medium">System Updates</h5>
                        <Alert className="border-blue-500/20 bg-blue-500/10">
                          <Terminal className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <AlertTitle className="text-blue-800 dark:text-blue-200">System Maintenance</AlertTitle>
                          <AlertDescription className="text-blue-700 dark:text-blue-300">
                            Scheduled maintenance on Sunday, 2 AM - 4 AM EST. Service may be temporarily unavailable.
                          </AlertDescription>
                        </Alert>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium">Feature Announcements</h5>
                        <Alert className="border-purple-500/20 bg-purple-500/10">
                          <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          <AlertTitle className="text-purple-800 dark:text-purple-200">New Feature</AlertTitle>
                          <AlertDescription className="text-purple-700 dark:text-purple-300">
                            Try our new collaboration tools! Share projects with your team and work together in real-time.
                          </AlertDescription>
                        </Alert>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium">Security Alerts</h5>
                        <Alert className="border-orange-500/20 bg-orange-500/10">
                          <Shield className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                          <AlertTitle className="text-orange-800 dark:text-orange-200">Security Notice</AlertTitle>
                          <AlertDescription className="text-orange-700 dark:text-orange-300">
                            We noticed a login from a new device. If this wasn&apos;t you, please secure your account.
                          </AlertDescription>
                        </Alert>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium">Critical Banners (Global)</h5>
                        <Alert className="border-red-600/30 bg-red-600/15">
                          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                          <AlertTitle className="text-red-800 dark:text-red-200">Service Disruption</AlertTitle>
                          <AlertDescription className="text-red-700 dark:text-red-300">
                            Payment processing is temporarily unavailable. We&apos;re working to restore service.
                          </AlertDescription>
                        </Alert>
                        <p className="text-sm text-muted-foreground">
                          For site-wide issues affecting all users, typically placed above the main navigation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alert Hierarchy */}
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">Alert Hierarchy Guidelines</h4>
                  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• <strong>Critical/Error:</strong> Highest priority - blocks user progress</li>
                    <li>• <strong>Warning:</strong> High priority - requires attention soon</li>
                    <li>• <strong>Success:</strong> Medium priority - positive confirmation</li>
                    <li>• <strong>Info:</strong> Low priority - helpful but not critical</li>
                    <li>• Only show one alert per section to maintain hierarchy</li>
                    <li>• Critical banners should appear above global navigation</li>
                    <li>• Page-level alerts should be dismissible unless critical</li>
                  </ul>
                </div>

                {/* Design System Insights */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Design System Insights</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                    <div>
                      <strong>Shopify Polaris:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Focus on merchant workflows and actions</li>
                        <li>• Use banners for persistent conditions</li>
                        <li>• Place banners below page headers</li>
                        <li>• Include clear calls to action</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Orange & Visa Systems:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Emphasize accessibility and screen readers</li>
                        <li>• Support multiple languages and regions</li>
                        <li>• Consistent keyboard navigation patterns</li>
                        <li>• Clear focus management requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Banner Components */}
          <TabsContent value="banners" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Banner vs Alert Components</CardTitle>
                <CardDescription>
                  Understanding the distinction between alerts and banners, and when to use each pattern.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Key Differences</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3 text-blue-800 dark:text-blue-200">Alerts</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Contextual to specific actions or content</li>
                          <li>• Often temporary and auto-dismissible</li>
                          <li>• Inline with content flow</li>
                          <li>• Used for feedback and validation</li>
                          <li>• Lower visual prominence</li>
                        </ul>
                        <Alert className="mt-3">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <AlertDescription>
                            Your settings have been saved successfully.
                          </AlertDescription>
                        </Alert>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-3 text-purple-800 dark:text-purple-200">Banners</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Global or section-wide information</li>
                          <li>• Persistent until manually dismissed</li>
                          <li>• Prominent placement at top of page/section</li>
                          <li>• Used for announcements and status</li>
                          <li>• Higher visual prominence</li>
                        </ul>
                        <div className="mt-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                          <div className="flex items-start gap-3">
                            <Info className="h-4 w-4 text-purple-600 dark:text-purple-400 mt-0.5" />
                            <div className="text-sm">
                              <strong className="text-purple-800 dark:text-purple-200">New features available!</strong>
                              <p className="text-purple-700 dark:text-purple-300 mt-1">
                                Check out our latest dashboard updates and improved analytics.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Banner Types & Placement</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-medium">Site-wide Banners</h5>
                        <div className="p-4 bg-yellow-500/15 border border-yellow-500/30 rounded-lg">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                            <div className="flex-1">
                              <strong className="text-yellow-800 dark:text-yellow-200 text-sm">Service Maintenance Notice</strong>
                              <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                                Scheduled maintenance this Sunday from 2-4 AM EST. Some services may be temporarily unavailable.
                              </p>
                              <Button size="sm" variant="outline" className="mt-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50">
                                Learn More
                              </Button>
                            </div>
                            <Button size="sm" variant="ghost" className="text-yellow-700 hover:bg-yellow-100">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Placed above global navigation, affects entire site
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium">Page-level Banners</h5>
                        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <div className="flex items-start gap-3">
                            <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                            <div className="flex-1 text-sm">
                              <p className="text-blue-700 dark:text-blue-300">
                                You&apos;re viewing the beta version of this page. 
                                <Button variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-400 underline ml-1">
                                  Switch to classic view
                                </Button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Placed below page header, specific to current page context
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium">Section Banners</h5>
                        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <span className="text-green-700 dark:text-green-300">
                              Your integration is working correctly. Last sync: 2 minutes ago.
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Placed within specific sections, reduced visual weight
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Design System Examples */}
                <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Design System Patterns</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
                    <div>
                      <strong>Shopify Polaris Banners:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Focus on merchant workflows</li>
                        <li>• Include primary and secondary actions</li>
                        <li>• Use for important changes or conditions</li>
                        <li>• Always provide clear next steps</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Enterprise Guidelines:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Consistent placement across applications</li>
                        <li>• Respect information hierarchy</li>
                        <li>• Consider banner fatigue</li>
                        <li>• Test on mobile breakpoints</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interaction Patterns */}
          <TabsContent value="interaction" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Alert Interactions</CardTitle>
                <CardDescription>
                  How users can interact with alerts and when to make them actionable.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Non-Interactive Alerts</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Most alerts are informational and don&apos;t require user interaction.
                    </p>
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        Your changes have been automatically saved.
                      </AlertDescription>
                    </Alert>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Dismissible Alerts</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Allow users to dismiss non-critical alerts they&apos;ve acknowledged.
                    </p>
                    <Alert className="relative">
                      <Info className="h-4 w-4" />
                      <AlertDescription className="pr-8">
                        We&apos;ve updated our privacy policy. You can review the changes in your account settings.
                      </AlertDescription>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute right-2 top-2 h-6 w-6 p-0"
                        aria-label="Dismiss alert"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Alert>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Actionable Alerts</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Include actions when users need to resolve an issue or get more information.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Single Action</h5>
                        <Alert className="border-yellow-500/20 bg-yellow-500/10">
                          <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                          <div className="flex-1">
                            <AlertTitle className="text-yellow-800 dark:text-yellow-200">Verification Required</AlertTitle>
                            <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                              Please verify your email address to complete your account setup.
                            </AlertDescription>
                            <div className="mt-3">
                              <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                                Resend Verification Email
                              </Button>
                            </div>
                          </div>
                        </Alert>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Multiple Actions</h5>
                        <Alert className="border-red-500/20 bg-red-500/10">
                          <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                          <AlertTitle className="text-red-800 dark:text-red-200">Connection Lost</AlertTitle>
                          <AlertDescription className="text-red-700 dark:text-red-300 mb-3">
                            Unable to connect to the server. Your changes may not be saved.
                          </AlertDescription>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-red-500 text-red-700 hover:bg-red-50">
                              Retry
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-700 hover:bg-red-50">
                              Work Offline
                            </Button>
                          </div>
                        </Alert>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Link to More Information</h5>
                        <Alert className="border-blue-500/20 bg-blue-500/10">
                          <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <AlertDescription className="text-blue-700 dark:text-blue-300">
                            New security features are now available. 
                            <Button variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-400 underline ml-1">
                              Learn more about two-factor authentication
                            </Button>
                          </AlertDescription>
                        </Alert>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interaction Guidelines */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Interaction Guidelines</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Don&apos;t make alerts dismissible if the message is critical</li>
                    <li>• Use clear, action-oriented button text (not &quot;OK&quot; or &quot;Learn More&quot;)</li>
                    <li>• Limit to 1-2 actions to avoid overwhelming users</li>
                    <li>• Place primary action on the right (following UI conventions)</li>
                    <li>• Consider the impact of dismissing an alert on user workflow</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Placement & UX */}
          <TabsContent value="placement" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Placement & UX Guidelines</CardTitle>
                <CardDescription>
                  Best practices for alert positioning, timing, and responsive behavior.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Contextual Placement</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                          <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Good Placement</h5>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• Near the relevant content or action</li>
                            <li>• At the top of forms for validation errors</li>
                            <li>• In the main content area for page-level alerts</li>
                            <li>• Critical alerts above global navigation</li>
                            <li>• Banners below page headers (Polaris pattern)</li>
                            <li>• Consistent positioning across similar contexts</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 border rounded-lg">
                          <p className="text-sm mb-2 font-medium">Form Validation Example:</p>
                          <div className="space-y-2">
                            <Alert className="border-red-500/20 bg-red-500/10">
                              <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                              <AlertDescription className="text-red-700 dark:text-red-300">
                                Please fix the errors below before submitting.
                              </AlertDescription>
                            </Alert>
                            <div className="p-3 bg-muted rounded text-sm">Form fields would appear here...</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                          <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Poor Placement</h5>
                          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <li>• Far from the related content</li>
                            <li>• Blocking important interface elements</li>
                            <li>• In navigation areas for content-specific alerts</li>
                            <li>• Inconsistent positioning</li>
                          </ul>
                        </div>

                        <div className="p-3 border rounded-lg">
                          <p className="text-sm mb-2 font-medium">Page-level Alert Example:</p>
                          <Alert className="border-blue-500/20 bg-blue-500/10">
                            <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            <AlertDescription className="text-blue-700 dark:text-blue-300">
                              Your account has been upgraded to Pro. Enjoy the new features!
                            </AlertDescription>
                          </Alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Content Guidelines</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3 text-green-800 dark:text-green-200">✅ Good Alert Content</h5>
                        <div className="space-y-3">
                          <Alert className="border-green-500/20 bg-green-500/10">
                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <AlertDescription className="text-green-700 dark:text-green-300">
                              Invoice #2024-001 sent successfully to client@example.com
                            </AlertDescription>
                          </Alert>
                          <p className="text-sm text-muted-foreground">Specific, clear, actionable</p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3 text-red-800 dark:text-red-200">❌ Poor Alert Content</h5>
                        <div className="space-y-3">
                          <Alert className="border-gray-500/20 bg-gray-500/10">
                            <Info className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                            <AlertDescription className="text-gray-700 dark:text-gray-300">
                              Something happened. Please try again.
                            </AlertDescription>
                          </Alert>
                          <p className="text-sm text-muted-foreground">Vague, unhelpful, generic</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Content Best Practices</h5>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Be specific about what happened and why</li>
                        <li>• Use clear, conversational language</li>
                        <li>• Provide actionable next steps when possible</li>
                        <li>• Keep messages concise (1-2 sentences ideal)</li>
                        <li>• Match the tone to the alert type (professional for errors, friendly for tips)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Responsive Considerations</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Mobile Layout</h5>
                        <Alert className="mb-2">
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            This alert adapts to smaller screens with appropriate text wrapping and touch targets.
                          </AlertDescription>
                        </Alert>
                        <p className="text-sm text-muted-foreground">
                          Ensure adequate spacing and touch targets (minimum 44px) on mobile devices
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Desktop Layout</h5>
                        <Alert className="max-w-2xl">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <AlertDescription>
                            On larger screens, alerts can be wider but should still maintain readable line lengths (max 65-75 characters).
                          </AlertDescription>
                        </Alert>
                        <p className="text-sm text-muted-foreground mt-2">
                          Consider maximum width constraints for better readability
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Alert Accessibility (A11y)</CardTitle>
                <CardDescription>
                  Comprehensive accessibility guidelines for alerts following WCAG and WAI-ARIA standards.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Accessibility Requirements</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">ARIA Roles & Announcements</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>role=&quot;alert&quot;:</strong> For urgent messages (Visa recommendation)</li>
                          <li>• <strong>role=&quot;status&quot;:</strong> For non-urgent updates</li>
                          <li>• <strong>aria-live=&quot;polite&quot;:</strong> For non-interrupting alerts</li>
                          <li>• <strong>aria-live=&quot;assertive&quot;:</strong> For critical alerts</li>
                          <li>• <strong>aria-atomic=&quot;true&quot;:</strong> Read entire alert content</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Visual Accessibility</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Color contrast:</strong> Minimum 4.5:1 for text</li>
                          <li>• <strong>Icons:</strong> Don&apos;t rely solely on color</li>
                          <li>• <strong>Focus management:</strong> Clear focus indicators</li>
                          <li>• <strong>Text size:</strong> Responds to zoom up to 200%</li>
                          <li>• <strong>Never auto-focus:</strong> Avoid interrupting workflows</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Implementation Examples</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Error Alert (role=&quot;alert&quot;)</h5>
                        <Alert role="alert" className="border-red-500/20 bg-red-500/10">
                          <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                          <AlertDescription className="text-red-700 dark:text-red-300">
                            Form submission failed. Please check required fields and try again.
                          </AlertDescription>
                        </Alert>
                        <div className="mt-2 text-sm text-muted-foreground">
                          <code>role=&quot;alert&quot;</code> ensures immediate announcement to screen readers
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Status Update (aria-live=&quot;polite&quot;)</h5>
                        <Alert aria-live="polite" className="border-green-500/20 bg-green-500/10">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <AlertDescription className="text-green-700 dark:text-green-300">
                            Auto-save completed at 2:34 PM
                          </AlertDescription>
                        </Alert>
                        <div className="mt-2 text-sm text-muted-foreground">
                          <code>aria-live=&quot;polite&quot;</code> announces when current speech is finished
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Dismissible Alert with Proper Labeling</h5>
                        <Alert className="relative" aria-describedby="alert-help">
                          <Info className="h-4 w-4" />
                          <AlertDescription className="pr-8">
                            New collaboration features are available in your workspace.
                          </AlertDescription>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute right-2 top-2 h-6 w-6 p-0"
                            aria-label="Dismiss notification about new collaboration features"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Alert>
                        <div id="alert-help" className="mt-2 text-sm text-muted-foreground">
                          Descriptive aria-label for the dismiss button provides context
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Keyboard Navigation</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Navigation Requirements</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Tab:</strong> Move focus to actionable elements</li>
                          <li>• <strong>Enter/Space:</strong> Activate buttons and links</li>
                          <li>• <strong>Escape:</strong> Dismiss alert (if applicable)</li>
                          <li>• <strong>Focus visible:</strong> Clear visual indicators</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Focus Management</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Don&apos;t automatically focus on alerts</li>
                          <li>• Ensure dismiss buttons are keyboard accessible</li>
                          <li>• Maintain logical tab order</li>
                          <li>• Return focus appropriately after dismissal</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Common Accessibility Mistakes</h4>
                    <div className="space-y-4">
                      <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Avoid These Mistakes</h5>
                        <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                          <li>• Using color alone to convey alert type</li>
                          <li>• Missing or inappropriate ARIA roles</li>
                          <li>• Auto-dismissing critical alerts too quickly</li>
                          <li>• Insufficient color contrast</li>
                          <li>• Making alerts that can&apos;t be accessed via keyboard</li>
                          <li>• Not announcing dynamic alert content</li>
                        </ul>
                      </div>

                      <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Best Practices</h5>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Use semantic HTML with appropriate ARIA</li>
                          <li>• Include icons and text to convey meaning</li>
                          <li>• Test with screen readers and keyboard navigation</li>
                          <li>• Ensure sufficient contrast for all elements</li>
                          <li>• Provide clear, descriptive content</li>
                          <li>• Test alert timing and persistence</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Testing Your Alerts</h4>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Accessibility Testing Checklist</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                        <div>
                          <strong>Screen Reader Testing:</strong>
                          <ul className="mt-1 space-y-1">
                            <li>□ Alerts are announced appropriately</li>
                            <li>□ Content is read in logical order</li>
                            <li>□ Actions and dismissals are announced</li>
                            <li>□ Context is provided for all elements</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Keyboard Testing:</strong>
                          <ul className="mt-1 space-y-1">
                            <li>□ All interactive elements are focusable</li>
                            <li>□ Focus indicators are visible</li>
                            <li>□ Tab order is logical</li>
                            <li>□ Keyboard shortcuts work as expected</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Implementation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Accessibility Implementation</CardTitle>
                <CardDescription>Essential accessibility attributes and patterns for alerts.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    {`<!-- Error alert with immediate announcement -->
<div role="alert" class="border-red-500/20 bg-red-500/10">
  <svg aria-hidden="true">...</svg>
  <div>
    <h3>Error</h3>
    <p>Unable to save changes. Please try again.</p>
  </div>
</div>

<!-- Status update with polite announcement -->
<div aria-live="polite" class="border-green-500/20 bg-green-500/10">
  <svg aria-hidden="true">...</svg>
  <p>Your changes have been saved automatically.</p>
</div>

<!-- Dismissible alert with accessible close button -->
<div role="alert" aria-labelledby="alert-title">
  <svg aria-hidden="true">...</svg>
  <div>
    <h3 id="alert-title">New Features Available</h3>
    <p>Check out the latest updates to your dashboard.</p>
  </div>
  <button aria-label="Dismiss new features notification">
    <svg aria-hidden="true">...</svg>
  </button>
</div>

<!-- Alert with action button -->
<div role="alert">
  <svg aria-hidden="true">...</svg>
  <div>
    <h3>Verification Required</h3>
    <p>Please verify your email address.</p>
    <button type="button">Resend Verification Email</button>
  </div>
</div>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* References Section */}
        <div className="mt-6">
          <ComponentReferences
            title="References & Further Reading"
            description="Essential resources for alert component implementation and best practices."
            urls={alertComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('wise.design')) return 'Wise Design System - Alert Component'
              if (url.includes('apple.com')) return 'Apple Human Interface Guidelines - Alerts'
              if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Alert Banner'
              if (url.includes('w3.org')) return 'WAI-ARIA Authoring Practices - Alert Pattern'
              if (url.includes('polaris-react.shopify.com')) return 'Shopify Polaris - Banner Component'
              if (url.includes('base.uber.com')) return 'Uber Base Design System - Banner'
              if (url.includes('design.visa.com')) return 'Visa Design System - Banner Accessibility'
              if (url.includes('system.design.orange.com')) return 'Orange Design System - Alerts'
              return url
            }}
          />
        </div>
      </div>
    </div>
  )
} 