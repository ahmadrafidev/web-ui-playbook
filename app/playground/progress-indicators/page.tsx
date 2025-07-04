"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"
import { Loader2, CheckCircle, AlertTriangle, Upload, Download, Wifi, Cpu } from "lucide-react"

const progressIndicatorsUrlReference = [
  "https://base.uber.com/6d2425e9f/p/6945cd-progress-circle",
  "https://m3.material.io/components/progress-indicators/overview",
  "https://m3.material.io/components/progress-indicators/accessibility",
  "https://spectrum.adobe.com/page/progress-circle/",
  "https://developer.apple.com/design/human-interface-guidelines/progress-indicators",
  "https://canvas.workday.com/components/indicators/loading-dots/"
]

function getProgressUrlTitle(url: string): string {
  if (url.includes('base.uber.com')) return 'Uber Base Design System - Progress Circle'
  if (url.includes('m3.material.io/overview')) return 'Material Design 3 - Progress Indicators Overview'
  if (url.includes('m3.material.io/accessibility')) return 'Material Design 3 - Progress Indicators Accessibility'
  if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Progress Circle Guidelines'
  if (url.includes('developer.apple.com')) return 'Apple Human Interface Guidelines - Progress Indicators'
  if (url.includes('canvas.workday.com')) return 'Workday Canvas - Loading Dots Component'
  return 'Design System Reference'
}

// Custom Loading Dots Component
function LoadingDots({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2", 
    lg: "w-3 h-3"
  }
  
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} bg-primary rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1.4s'
          }}
        />
      ))}
    </div>
  )
}

// Custom Circular Progress Component
function CircularProgress({ 
  value = 0, 
  size = 60, 
  strokeWidth = 6,
  className = "",
  showValue = false
}: { 
  value?: number; 
  size?: number; 
  strokeWidth?: number;
  className?: string;
  showValue?: boolean;
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted-foreground/20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-primary transition-all duration-300 ease-in-out"
        />
      </svg>
      {showValue && (
        <span className="absolute text-sm font-medium">
          {Math.round(value)}%
        </span>
      )}
    </div>
  )
}

// Indeterminate Progress Bar Component
function IndeterminateProgress({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full bg-primary/20 rounded-full h-2 overflow-hidden ${className}`}>
      <div 
        className="h-full bg-primary rounded-full w-1/3"
        style={{
          animation: 'indeterminateSlide 2s infinite ease-in-out'
        }}
      />
      <style jsx>{`
        @keyframes indeterminateSlide {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(200%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}

export default function ProgressIndicatorsPage() {
  const { MobileWarning } = useMobileWarning()
  
  // State for various progress examples
  const [uploadProgress, setUploadProgress] = useState(0)
  const downloadProgress = 45
  const [circularProgress, setCircularProgress] = useState(75)
  const [stepProgress, setStepProgress] = useState(2)
  const [isLoading, setIsLoading] = useState(false)

  // Simulate upload progress
  const simulateUpload = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
  }

  // Simulate loading with timeout
  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  // Auto-increment circular progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCircularProgress(prev => (prev >= 100 ? 0 : prev + 1))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Progress Indicators</h2>
            <EditButton filePath="app/playground/progress-indicators/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Progress indicators communicate the progress of system processes such as downloading, uploading, 
            loading data, or multi-step user flows. They provide visual feedback to users about the current 
            state of operations and help set appropriate expectations for completion time.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Visual Feedback</Badge>
            <Badge>Accessibility</Badge>
            <Badge>Performance</Badge>
            <Badge>User Experience</Badge>
            <Badge>ARIA Compliant</Badge>
          </div>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="patterns">Usage Patterns</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose Tab */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Purpose of Progress Indicators</CardTitle>
                <CardDescription>
                  Understanding when and why to use progress indicators in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>System Feedback:</strong> Show ongoing system processes</li>
                      <li>• <strong>Time Estimation:</strong> Help users understand wait times</li>
                      <li>• <strong>Process Status:</strong> Indicate completion percentage</li>
                      <li>• <strong>User Guidance:</strong> Show progress in multi-step flows</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Progress Types</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Determinate:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Known duration or completion percentage</li>
                          <li>• File uploads, downloads, installations</li>
                          <li>• Multi-step forms or wizards</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200">Indeterminate:</strong>
                        <ul className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                          <li>• Unknown duration or progress</li>
                          <li>• Data processing, API calls</li>
                          <li>• System initialization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Common Use Cases</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <Upload className="h-5 w-5 text-blue-500" />
                        <Label className="text-base font-medium">File Upload Progress</Label>
                        <span className="text-sm text-muted-foreground ml-auto">{Math.round(uploadProgress)}%</span>
                      </div>
                      <Progress value={uploadProgress} className="w-full" />
                      <Button onClick={simulateUpload} variant="outline" size="sm">
                        Simulate Upload
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <Download className="h-5 w-5 text-green-500" />
                        <Label className="text-base font-medium">Download Progress</Label>
                        <span className="text-sm text-muted-foreground ml-auto">{downloadProgress}%</span>
                      </div>
                      <Progress value={downloadProgress} className="w-full" />
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <Loader2 className="h-5 w-5 text-orange-500 animate-spin" />
                        <Label className="text-base font-medium">Processing Data</Label>
                      </div>
                      <LoadingDots size="md" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Linear Progress Indicators</CardTitle>
                <CardDescription>
                  Horizontal progress bars for showing completion percentage or ongoing processes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Determinate Linear Progress</Label>
                    <div className="space-y-2">
                      <Progress value={33} className="w-full" />
                      <Progress value={66} className="w-full" />
                      <Progress value={100} className="w-full" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Shows specific completion percentage with precise progress indication.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-medium">Different Sizes</Label>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-muted-foreground">Small (1px height)</span>
                        <Progress value={75} className="w-full h-1" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Default (8px height)</span>
                        <Progress value={75} className="w-full" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Large (12px height)</span>
                        <Progress value={75} className="w-full h-3" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-medium">With Status Indicators</Label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Progress value={25} className="flex-1" />
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">25% - Warning</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={75} className="flex-1" />
                        <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
                        <span className="text-sm">75% - Processing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={100} className="flex-1" />
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">100% - Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Circular Progress Indicators</CardTitle>
                <CardDescription>
                  Compact circular progress indicators for space-constrained interfaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3 text-center">
                    <Label className="text-base font-medium">Small (40px)</Label>
                    <div className="flex justify-center">
                      <CircularProgress value={circularProgress} size={40} strokeWidth={4} />
                    </div>
                    <p className="text-sm text-muted-foreground">Compact size for tight spaces</p>
                  </div>

                  <div className="space-y-3 text-center">
                    <Label className="text-base font-medium">Medium (60px)</Label>
                    <div className="flex justify-center">
                      <CircularProgress value={circularProgress} size={60} strokeWidth={6} showValue />
                    </div>
                    <p className="text-sm text-muted-foreground">Standard size with percentage</p>
                  </div>

                  <div className="space-y-3 text-center">
                    <Label className="text-base font-medium">Large (80px)</Label>
                    <div className="flex justify-center">
                      <CircularProgress value={circularProgress} size={80} strokeWidth={8} showValue />
                    </div>
                    <p className="text-sm text-muted-foreground">Prominent display size</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">Circular Progress with Context</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg flex items-center gap-4">
                      <CircularProgress value={85} size={50} strokeWidth={5} />
                      <div>
                        <p className="font-medium">System Update</p>
                        <p className="text-sm text-muted-foreground">Installing security patches...</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center gap-4">
                      <CircularProgress value={60} size={50} strokeWidth={5} />
                      <div>
                        <p className="font-medium">Backup Process</p>
                        <p className="text-sm text-muted-foreground">Syncing files to cloud...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loading Indicators</CardTitle>
                <CardDescription>
                  Indeterminate progress indicators for unknown duration processes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3 text-center">
                    <Label className="text-base font-medium">Loading Dots</Label>
                    <div className="flex justify-center py-4">
                      <LoadingDots size="lg" />
                    </div>
                    <p className="text-sm text-muted-foreground">Subtle pulsing animation</p>
                  </div>

                  <div className="space-y-3 text-center">
                    <Label className="text-base font-medium">Spinning Icon</Label>
                    <div className="flex justify-center py-4">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Classic spinning loader</p>
                  </div>

                  <div className="space-y-3 text-center">
                    <Label className="text-base font-medium">Indeterminate Bar</Label>
                    <div className="py-4">
                      <IndeterminateProgress />
                    </div>
                    <p className="text-sm text-muted-foreground">Continuous sliding animation</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">Loading States in Context</Label>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Wifi className="h-5 w-5 text-blue-500" />
                        <span className="font-medium">Connecting to server...</span>
                        <LoadingDots size="sm" className="ml-auto" />
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Cpu className="h-5 w-5 text-purple-500" />
                        <span className="font-medium">Processing data...</span>
                        <Loader2 className="h-4 w-4 animate-spin ml-auto" />
                      </div>
                    </div>

                    <Button 
                      onClick={simulateLoading} 
                      disabled={isLoading}
                      className="w-full"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        'Start Loading Process'
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Variants Tab */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Step Progress Indicators</CardTitle>
                <CardDescription>
                  Multi-step progress indicators for wizards, forms, and sequential processes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-base font-medium">Horizontal Step Progress</Label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4].map((step, index) => (
                      <div key={step} className="flex items-center">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                            step <= stepProgress 
                              ? 'bg-primary text-primary-foreground border-primary' 
                              : step === stepProgress + 1
                              ? 'border-primary text-primary bg-background'
                              : 'border-muted text-muted-foreground bg-muted'
                          }`}
                        >
                          {step < stepProgress ? <CheckCircle className="w-4 h-4" /> : step}
                        </div>
                        {index < 3 && (
                          <div 
                            className={`w-12 h-0.5 ${
                              step < stepProgress ? 'bg-primary' : 'bg-muted'
                            }`} 
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Account</span>
                    <span>Profile</span>
                    <span>Preferences</span>
                    <span>Complete</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setStepProgress(Math.max(1, stepProgress - 1))}
                      disabled={stepProgress <= 1}
                    >
                      Previous
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => setStepProgress(Math.min(4, stepProgress + 1))}
                      disabled={stepProgress >= 4}
                    >
                      Next
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">Vertical Step Progress</Label>
                  <div className="space-y-4">
                    {['Personal Info', 'Contact Details', 'Verification', 'Complete'].map((label, index) => {
                      const stepNum = index + 1
                      const isCompleted = stepNum < stepProgress
                      const isCurrent = stepNum === stepProgress
                      
                      return (
                        <div key={stepNum} className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div 
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                                isCompleted
                                  ? 'bg-primary text-primary-foreground border-primary' 
                                  : isCurrent
                                  ? 'border-primary text-primary bg-background'
                                  : 'border-muted text-muted-foreground bg-muted'
                              }`}
                            >
                              {isCompleted ? <CheckCircle className="w-4 h-4" /> : stepNum}
                            </div>
                            {index < 3 && (
                              <div 
                                className={`w-0.5 h-8 ${
                                  isCompleted ? 'bg-primary' : 'bg-muted'
                                }`} 
                              />
                            )}
                          </div>
                          <div className="flex-1 pt-1">
                            <h4 className={`font-medium ${isCurrent ? 'text-primary' : ''}`}>
                              {label}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {isCompleted ? 'Completed' : isCurrent ? 'In Progress' : 'Pending'}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Specialized Progress Variants</CardTitle>
                <CardDescription>
                  Custom progress indicators for specific use cases and contexts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label className="text-base font-medium">Segmented Progress</Label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((segment) => (
                        <div 
                          key={segment}
                          className={`h-2 flex-1 rounded ${
                            segment <= 3 ? 'bg-primary' : 'bg-muted'
                          }`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">3 of 5 tasks completed</p>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-medium">Ring Progress</Label>
                    <div className="flex justify-center">
                      <div className="relative">
                        <CircularProgress value={70} size={60} strokeWidth={8} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-medium">70%</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">Storage usage indicator</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">Multi-Progress Indicators</Label>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>CPU Usage</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="w-full h-1" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Memory</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="w-full h-1" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Storage</span>
                        <span>32%</span>
                      </div>
                      <Progress value={32} className="w-full h-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">Progress with Milestones</Label>
                  <div className="relative">
                    <Progress value={65} className="w-full" />
                    <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-primary rounded-full -mt-0.5" />
                      <span className="text-xs text-muted-foreground absolute -bottom-5 -left-4">25%</span>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-primary rounded-full -mt-0.5" />
                      <span className="text-xs text-muted-foreground absolute -bottom-5 -left-4">50%</span>
                    </div>
                    <div className="absolute top-0 left-3/4 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-muted rounded-full -mt-0.5" />
                      <span className="text-xs text-muted-foreground absolute -bottom-5 -left-4">75%</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6">Project milestone tracking</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Common Usage Patterns</CardTitle>
                <CardDescription>
                  Real-world examples of progress indicators in different contexts and applications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">File Operations</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center gap-3">
                          <Upload className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">Uploading file.pdf</span>
                          <span className="text-sm text-muted-foreground ml-auto">
                            {Math.round(uploadProgress)}%
                          </span>
                        </div>
                        <Progress value={uploadProgress} className="w-full h-1" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>2.3 MB / 5.1 MB</span>
                          <span>45 seconds remaining</span>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center gap-3">
                          <Download className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium">Downloading update</span>
                          <Loader2 className="h-4 w-4 animate-spin ml-auto" />
                        </div>
                        <IndeterminateProgress className="h-1" />
                        <p className="text-xs text-muted-foreground">Calculating time remaining...</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">System Status</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium">Memory Usage</span>
                          <span className="text-sm text-muted-foreground">6.2 GB / 8 GB</span>
                        </div>
                        <Progress value={78} className="w-full h-2" />
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium">Storage Space</span>
                          <span className="text-sm text-muted-foreground">455 GB / 1 TB</span>
                        </div>
                        <Progress value={45} className="w-full h-2" />
                      </div>
                      
                      <div className="p-4 border rounded-lg text-center">
                        <div className="flex justify-center mb-2">
                          <CircularProgress value={92} size={50} strokeWidth={4} showValue />
                        </div>
                        <p className="text-sm font-medium">CPU Usage</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Multi-Step Processes</h4>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="font-medium">Account Setup</h5>
                        <span className="text-sm text-muted-foreground">Step {stepProgress} of 4</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-4">
                        {[1, 2, 3, 4].map((step, index) => (
                          <div key={step} className="flex items-center">
                            <div 
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium border ${
                                step <= stepProgress 
                                  ? 'bg-primary text-primary-foreground border-primary' 
                                  : 'border-muted text-muted-foreground bg-muted'
                              }`}
                            >
                              {step < stepProgress ? '✓' : step}
                            </div>
                            {index < 3 && (
                              <div 
                                className={`w-8 h-0.5 ${
                                  step < stepProgress ? 'bg-primary' : 'bg-muted'
                                }`} 
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        {stepProgress === 1 && "Enter your personal information"}
                        {stepProgress === 2 && "Verify your email address"}
                        {stepProgress === 3 && "Set up your preferences"}
                        {stepProgress === 4 && "Review and complete setup"}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Loading States</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg text-center space-y-3">
                      <LoadingDots size="md" className="justify-center" />
                      <p className="text-sm text-muted-foreground">Loading content...</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg text-center space-y-3">
                      <Loader2 className="h-6 w-6 animate-spin mx-auto text-primary" />
                      <p className="text-sm text-muted-foreground">Processing request...</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg text-center space-y-3">
                      <div className="flex justify-center">
                        <CircularProgress value={0} size={40} strokeWidth={4} />
                      </div>
                      <p className="text-sm text-muted-foreground">Initializing...</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Practices</CardTitle>
                <CardDescription>
                  Guidelines for implementing effective progress indicators.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-green-600">✅ Do</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Provide accurate progress information when possible</li>
                      <li>• Use appropriate indicators for the context</li>
                      <li>• Include time estimates for long operations</li>
                      <li>• Show progress immediately when operations begin</li>
                      <li>• Use consistent visual styling across your app</li>
                      <li>• Provide clear completion states</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-red-600">❌ Don&apos;t</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Show progress bars for very quick operations (&lt; 1s)</li>
                      <li>• Use determinate progress without accurate data</li>
                      <li>• Forget to handle error states</li>
                      <li>• Make progress bars too small to see clearly</li>
                      <li>• Use only color to convey progress state</li>
                      <li>• Leave users without feedback during long operations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility Tab */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Requirements</CardTitle>
                <CardDescription>
                  Essential accessibility considerations for progress indicators to ensure inclusive design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Support</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>role=&quot;progressbar&quot;:</strong> Identifies the element as a progress indicator</li>
                      <li>• <strong>aria-valuenow:</strong> Current progress value</li>
                      <li>• <strong>aria-valuemin:</strong> Minimum value (usually 0)</li>
                      <li>• <strong>aria-valuemax:</strong> Maximum value (usually 100)</li>
                      <li>• <strong>aria-label:</strong> Descriptive label for screen readers</li>
                      <li>• <strong>aria-describedby:</strong> Reference to detailed description</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Visual Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Color Contrast:</strong> Minimum 3:1 ratio for progress vs background</li>
                      <li>• <strong>Size:</strong> Minimum 44px touch target for interactive elements</li>
                      <li>• <strong>Focus Indicators:</strong> Clear visual focus states</li>
                      <li>• <strong>High Contrast Mode:</strong> Visible in Windows High Contrast</li>
                      <li>• <strong>Reduced Motion:</strong> Respect prefers-reduced-motion</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Screen Reader Announcements</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">
                        Live Regions for Dynamic Updates
                      </h5>
                      <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                        <p>• Use <code>aria-live=&quot;polite&quot;</code> for non-urgent progress updates</p>
                        <p>• Use <code>aria-live=&quot;assertive&quot;</code> for critical progress states</p>
                        <p>• Announce completion and error states clearly</p>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <Label className="font-medium mb-2 block">Accessible Progress Example</Label>
                      <div className="space-y-3">
                        <Progress 
                          value={downloadProgress} 
                          className="w-full"
                          aria-label={`Download progress: ${downloadProgress}% complete`}
                        />
                        <div 
                          aria-live="polite" 
                          aria-atomic="true"
                          className="sr-only"
                        >
                          Download {downloadProgress}% complete
                        </div>
                        <p className="text-sm text-muted-foreground">
                          This progress bar includes proper ARIA attributes and live region updates.
                        </p>
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
                        <li>• <strong>Tab:</strong> Move focus to interactive progress elements</li>
                        <li>• <strong>Enter/Space:</strong> Activate controls (if interactive)</li>
                        <li>• <strong>Arrow Keys:</strong> Adjust values in step progresss</li>
                        <li>• <strong>Escape:</strong> Cancel operations (if applicable)</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-3">Focus Management</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Progress indicators should be focusable if interactive</li>
                        <li>• Non-interactive progress should not receive focus</li>
                        <li>• Clear visual focus indicators are required</li>
                        <li>• Focus should move logically through step indicators</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Implementation Examples</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`<!-- Accessible linear progress bar -->
<div
  role="progressbar"
  aria-valuenow="65"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Upload progress"
  aria-describedby="upload-status"
>
  <div className="progress-fill" style="width: 65%"></div>
</div>
<div id="upload-status" aria-live="polite">
  Upload 65% complete. Estimated time: 30 seconds
</div>

<!-- Accessible step progress -->
<ol role="list" aria-label="Account setup steps">
  <li aria-current="step">
    <div role="img" aria-label="Step 1 completed">✓</div>
    Personal Information
  </li>
  <li aria-current="step">
    <div role="img" aria-label="Step 2 in progress">2</div>
    Email Verification
  </li>
  <li>
    <div role="img" aria-label="Step 3 pending">3</div>
    Preferences
  </li>
</ol>

<!-- Accessible loading indicator -->
<div
  role="status"
  aria-label="Loading content"
  aria-live="polite"
>
  <svg className="animate-spin" aria-hidden="true">
    <!-- spinner icon -->
  </svg>
  <span className="sr-only">Loading, please wait...</span>
</div>`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Testing Checklist</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h5 className="font-medium mb-2 text-green-800 dark:text-green-200">Screen Reader Testing</h5>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>□ Progress values are announced correctly</li>
                        <li>□ Completion states are announced</li>
                        <li>□ Loading states provide feedback</li>
                        <li>□ Error states are clearly communicated</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Visual Testing</h5>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>□ Sufficient color contrast</li>
                        <li>□ Visible in high contrast mode</li>
                        <li>□ Clear focus indicators</li>
                        <li>□ Readable at 200% zoom level</li>
                      </ul>
                    </div>
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
            description="Essential resources for progress indicator implementation and best practices from leading design systems."
            urls={progressIndicatorsUrlReference}
            getTitleFunction={getProgressUrlTitle}
          />
        </div>
      </div>
    </div>
  )
} 