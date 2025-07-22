"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"
import { 
  Loader2, 
  CheckCircle, 
  AlertTriangle, 
  Upload, 
  Download, 
  Wifi, 
  Cpu, 
  Clock,
  PlayCircle,
  XCircle,
  Info
} from "lucide-react"

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

// Enhanced Loading Dots Component
function LoadingDots({ 
  className = "", 
  size = "md",
  variant = "default"
}: { 
  className?: string; 
  size?: "sm" | "md" | "lg";
  variant?: "default" | "pulse" | "bounce"
}) {
  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-1.5 h-1.5", 
    lg: "w-2 h-2"
  }

  const animationStyles = {
    default: "animate-pulse",
    pulse: "animate-pulse",
    bounce: "animate-bounce"
  }
  
  return (
    <div className={`flex items-center space-x-1 ${className}`} role="status" aria-label="Loading">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} bg-primary rounded-full ${animationStyles[variant]}`}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: variant === "bounce" ? '1s' : '1.4s'
          }}
        />
      ))}
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  )
}

// Enhanced Circular Progress Component
function CircularProgress({ 
  value = 0, 
  size = 60, 
  strokeWidth = 6,
  className = "",
  showValue = false,
  variant = "default",
  status = "normal"
}: { 
  value?: number; 
  size?: number; 
  strokeWidth?: number;
  className?: string;
  showValue?: boolean;
  variant?: "default" | "gradient";
  status?: "normal" | "warning" | "error" | "success";
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (value / 100) * circumference

  const statusColors = {
    normal: "text-primary",
    warning: "text-yellow-500",
    error: "text-red-500",
    success: "text-green-500"
  }

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        role="img"
        aria-labelledby={`progress-${value}`}
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
          className={`${statusColors[status]} transition-all duration-500 ease-in-out`}
        />
        {variant === "gradient" && (
          <defs>
            <linearGradient id={`gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59 130 246)" />
              <stop offset="100%" stopColor="rgb(147 51 234)" />
            </linearGradient>
          </defs>
        )}
      </svg>
      {showValue && (
        <span className="absolute text-sm font-medium" id={`progress-${value}`}>
          {Math.round(value)}%
        </span>
      )}
    </div>
  )
}

// Enhanced Indeterminate Progress Bar Component
function IndeterminateProgress({ 
  className = "",
  variant = "slide"
}: { 
  className?: string;
  variant?: "slide" | "pulse" | "wave"
}) {
  return (
    <div 
      className={`w-full bg-primary/20 rounded-full h-2 overflow-hidden ${className}`}
      role="progressbar"
      aria-label="Loading in progress"
    >
      <div 
        className={`h-full bg-primary rounded-full ${
          variant === "slide" ? "w-1/3" : variant === "pulse" ? "w-full animate-pulse" : "w-1/4"
        }`}
        style={{
          animation: variant === "slide" 
            ? 'indeterminateSlide 2s infinite ease-in-out' 
            : variant === "wave" 
            ? 'indeterminateWave 1.5s infinite ease-in-out'
            : undefined
        }}
      />
      <style jsx>{`
        @keyframes indeterminateSlide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes indeterminateWave {
          0%, 100% { transform: translateX(-100%) scaleX(1); }
          50% { transform: translateX(0%) scaleX(1.5); }
        }
      `}</style>
    </div>
  )
}

// Step Progress Component
function StepProgress({ 
  currentStep, 
  steps,
  orientation = "horizontal"
}: {
  currentStep: number;
  steps: string[];
  orientation?: "horizontal" | "vertical";
}) {
  if (orientation === "vertical") {
    return (
      <div className="space-y-4">
        {steps.map((label, index) => {
          const stepNum = index + 1
          const isCompleted = stepNum < currentStep
          const isCurrent = stepNum === currentStep
          
          return (
            <div key={stepNum} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all duration-300 ${
                    isCompleted
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : isCurrent
                      ? 'border-primary text-primary bg-background ring-2 ring-primary/20'
                      : 'border-muted text-muted-foreground bg-muted'
                  }`}
                >
                  {isCompleted ? <CheckCircle className="w-4 h-4" /> : stepNum}
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className={`w-0.5 h-8 transition-colors duration-300 ${
                      isCompleted ? 'bg-primary' : 'bg-muted'
                    }`} 
                  />
                )}
              </div>
              <div className="flex-1 pt-1">
                <h4 className={`font-medium transition-colors ${isCurrent ? 'text-primary' : ''}`}>
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
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all duration-300 ${
                index + 1 <= currentStep 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : index + 1 === currentStep + 1
                  ? 'border-primary text-primary bg-background'
                  : 'border-muted text-muted-foreground bg-muted'
              }`}
            >
              {index + 1 < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
            </div>
            {index < steps.length - 1 && (
              <div 
                className={`w-12 h-0.5 transition-colors duration-300 ${
                  index + 1 < currentStep ? 'bg-primary' : 'bg-muted'
                }`} 
              />
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground">
        {steps.map((step, index) => (
          <span key={index} className="text-center">{step}</span>
        ))}
      </div>
    </div>
  )
}

export default function ProgressIndicatorsPage() {
  const { MobileWarning } = useMobileWarning()
  
  // State for various progress examples
  const [uploadProgress, setUploadProgress] = useState(0)
  const [downloadProgress, setDownloadProgress] = useState(45)
  const [circularProgress, setCircularProgress] = useState(75)
  const [stepProgress, setStepProgress] = useState(2)
  const [isLoading, setIsLoading] = useState(false)
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 45,
    memory: 78,
    storage: 32
  })

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

  // Simulate download progress
  const simulateDownload = () => {
    setDownloadProgress(0)
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 300)
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

  // Simulate system metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics(prev => ({
        cpu: Math.max(10, Math.min(90, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(30, Math.min(95, prev.memory + (Math.random() - 0.5) * 5)),
        storage: prev.storage
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const stepLabels = ["Account", "Profile", "Preferences", "Complete"]

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Progress Indicators</h1>
              <p className="text-xl text-muted-foreground">
                Visual feedback for system processes and user flows
              </p>
            </div>
            <EditButton filePath="app/playground/progress-indicators/page.tsx" />
          </div>
          

        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Purpose</h3>
                      <p className="text-sm text-muted-foreground">
                        Progress indicators provide visual feedback about ongoing processes, helping users 
                        understand system status and set appropriate expectations for completion time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">When to Use</h3>
                      <p className="text-sm text-muted-foreground">
                        Use for operations longer than 1 second, file transfers, multi-step processes, 
                        system monitoring, and any time users need feedback about ongoing activities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Determinate</Badge>
                    Known Progress
                  </CardTitle>
                  <CardDescription>
                    Use when you can calculate the percentage of completion
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium">File Upload</Label>
                        <span className="text-xs text-muted-foreground">{Math.round(uploadProgress)}%</span>
                      </div>
                      <Progress value={uploadProgress} className="w-full" />
                      <Button onClick={simulateUpload} variant="outline" size="sm" className="w-full">
                        <Upload className="h-4 w-4 mr-2" />
                        Start Upload
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium">Download</Label>
                        <span className="text-xs text-muted-foreground">{Math.round(downloadProgress)}%</span>
                      </div>
                      <Progress value={downloadProgress} className="w-full" />
                      <Button onClick={simulateDownload} variant="outline" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Start Download
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Best for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• File transfers and uploads</li>
                      <li>• Installation processes</li>
                      <li>• Data imports/exports</li>
                      <li>• Multi-step forms</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Indeterminate</Badge>
                    Unknown Duration
                  </CardTitle>
                  <CardDescription>
                    Use when you cannot predict completion time or percentage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center space-y-3">
                      <Label className="text-sm font-medium">Loading Dots</Label>
                      <div className="flex justify-center py-4">
                        <LoadingDots size="lg" />
                      </div>
                    </div>

                    <div className="text-center space-y-3">
                      <Label className="text-sm font-medium">Spinning Icon</Label>
                      <div className="flex justify-center py-4">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Indeterminate Bar</Label>
                    <IndeterminateProgress />
                  </div>

                  <Button 
                    onClick={simulateLoading} 
                    disabled={isLoading}
                    variant="outline"
                    className="w-full"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Start Process
                      </>
                    )}
                  </Button>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Best for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• API requests</li>
                      <li>• Data processing</li>
                      <li>• System initialization</li>
                      <li>• Background tasks</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Progress Types Comparison</CardTitle>
                <CardDescription>
                  Understanding when to use different progress indicator types
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Type</th>
                        <th className="text-left p-3 font-medium">Use Case</th>
                        <th className="text-left p-3 font-medium">Duration</th>
                        <th className="text-left p-3 font-medium">User Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3">
                          <Badge variant="secondary">Linear Bar</Badge>
                        </td>
                        <td className="p-3">File uploads, downloads</td>
                        <td className="p-3">Known</td>
                        <td className="p-3">Wait & monitor</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="secondary">Circular</Badge>
                        </td>
                        <td className="p-3">Compact spaces, dashboards</td>
                        <td className="p-3">Known/Unknown</td>
                        <td className="p-3">Quick glance</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="outline">Loading Dots</Badge>
                        </td>
                        <td className="p-3">Content loading</td>
                        <td className="p-3">Unknown</td>
                        <td className="p-3">Wait briefly</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Badge variant="outline">Step Progress</Badge>
                        </td>
                        <td className="p-3">Multi-step workflows</td>
                        <td className="p-3">Variable</td>
                        <td className="p-3">Active participation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Linear Progress Bars</CardTitle>
                  <CardDescription>
                    Horizontal bars showing completion percentage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-8">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Size Variations</Label>
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs text-muted-foreground">Small (2px)</span>
                          <Progress value={75} className="w-full h-0.5" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Default (8px)</span>
                          <Progress value={75} className="w-full" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Large (12px)</span>
                          <Progress value={75} className="w-full h-3" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">With Status Icons</Label>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Progress value={25} className="flex-1" />
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress value={75} className="flex-1" />
                          <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress value={100} className="flex-1" />
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Indeterminate Variants</Label>
                      <div className="space-y-3">
                        <IndeterminateProgress variant="slide" />
                        <IndeterminateProgress variant="pulse" />
                        <IndeterminateProgress variant="wave" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Circular Progress</CardTitle>
                  <CardDescription>
                    Compact circular indicators for space-constrained layouts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-2">
                      <CircularProgress value={circularProgress} size={40} strokeWidth={4} />
                      <Label className="text-xs">Small</Label>
                    </div>
                    <div className="space-y-2">
                      <CircularProgress value={circularProgress} size={60} strokeWidth={6} showValue />
                      <Label className="text-xs">Medium</Label>
                    </div>
                    <div className="space-y-2">
                      <CircularProgress value={circularProgress} size={80} strokeWidth={8} showValue />
                      <Label className="text-xs">Large</Label>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-3 block">Status Variants</Label>
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div className="space-y-2">
                        <CircularProgress value={75} size={50} strokeWidth={5} status="normal" />
                        <Label className="text-xs">Normal</Label>
                      </div>
                      <div className="space-y-2">
                        <CircularProgress value={65} size={50} strokeWidth={5} status="warning" />
                        <Label className="text-xs">Warning</Label>
                      </div>
                      <div className="space-y-2">
                        <CircularProgress value={25} size={50} strokeWidth={5} status="error" />
                        <Label className="text-xs">Error</Label>
                      </div>
                      <div className="space-y-2">
                        <CircularProgress value={100} size={50} strokeWidth={5} status="success" />
                        <Label className="text-xs">Success</Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-3 block">Loading Indicators</Label>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="space-y-2">
                        <LoadingDots size="sm" className="justify-center" />
                        <Label className="text-xs">Dots Small</Label>
                      </div>
                      <div className="space-y-2">
                        <LoadingDots size="md" variant="bounce" className="justify-center" />
                        <Label className="text-xs">Bounce</Label>
                      </div>
                      <div className="space-y-2">
                        <Loader2 className="h-6 w-6 animate-spin text-primary mx-auto" />
                        <Label className="text-xs">Spinner</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Step Progress Components</CardTitle>
                <CardDescription>
                  Multi-step indicators for workflows and processes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Label className="text-base font-medium">Horizontal Step Progress</Label>
                    <span className="text-sm text-muted-foreground">Step {stepProgress} of {stepLabels.length}</span>
                  </div>
                  <StepProgress 
                    currentStep={stepProgress} 
                    steps={stepLabels}
                    orientation="horizontal"
                  />
                  <div className="flex gap-2 mt-4">
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
                      onClick={() => setStepProgress(Math.min(stepLabels.length, stepProgress + 1))}
                      disabled={stepProgress >= stepLabels.length}
                    >
                      Next
                    </Button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <Label className="text-base font-medium mb-4 block">Vertical Step Progress</Label>
                    <StepProgress 
                      currentStep={stepProgress} 
                      steps={stepLabels}
                      orientation="vertical"
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-4 block">Segmented Progress</Label>
                    <div className="space-y-4">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((segment) => (
                          <div 
                            key={segment}
                            className={`h-2 flex-1 rounded transition-colors duration-300 ${
                              segment <= stepProgress ? 'bg-primary' : 'bg-muted'
                            }`} 
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{stepProgress} of 5 tasks completed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>File Operations</CardTitle>
                  <CardDescription>
                    Progress patterns for uploads, downloads, and file processing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <Upload className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">document.pdf</span>
                      <span className="text-sm text-muted-foreground ml-auto">
                        {Math.round(uploadProgress)}%
                      </span>
                    </div>
                    <Progress value={uploadProgress} className="w-full h-1" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>2.3 MB / 5.1 MB</span>
                      <span>{uploadProgress < 100 ? '45s remaining' : 'Complete'}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <Download className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">software-update.zip</span>
                      <Loader2 className="h-4 w-4 animate-spin ml-auto" />
                    </div>
                    <IndeterminateProgress className="h-1" />
                    <p className="text-xs text-muted-foreground">Calculating time remaining...</p>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">backup.tar</span>
                      <Badge variant="secondary" className="ml-auto text-xs">Complete</Badge>
                    </div>
                    <Progress value={100} className="w-full h-1" />
                    <p className="text-xs text-muted-foreground">Uploaded successfully</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Monitoring</CardTitle>
                  <CardDescription>
                    Real-time system metrics and resource usage indicators
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">CPU Usage</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{Math.round(systemMetrics.cpu)}%</span>
                    </div>
                    <Progress value={systemMetrics.cpu} className="w-full h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-purple-500 rounded-sm" />
                        <span className="text-sm font-medium">Memory</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{Math.round(systemMetrics.memory)}%</span>
                    </div>
                    <Progress value={systemMetrics.memory} className="w-full h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-orange-500 rounded-sm" />
                        <span className="text-sm font-medium">Storage</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{systemMetrics.storage}%</span>
                    </div>
                    <Progress value={systemMetrics.storage} className="w-full h-2" />
                  </div>

                  <div className="pt-4 text-center">
                    <div className="flex justify-center mb-2">
                      <CircularProgress 
                        value={Math.round((systemMetrics.cpu + systemMetrics.memory + systemMetrics.storage) / 3)} 
                        size={60} 
                        strokeWidth={6} 
                        showValue 
                      />
                    </div>
                    <p className="text-sm font-medium">Overall System Load</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Progress Scenarios</CardTitle>
                <CardDescription>
                  Common real-world progress indicator implementations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Form Wizard Progress</h4>
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="font-medium">Account Setup</h5>
                        <span className="text-sm text-muted-foreground">Step {stepProgress} of 4</span>
                      </div>
                      <StepProgress 
                        currentStep={stepProgress} 
                        steps={["Personal", "Contact", "Verify", "Complete"]}
                        orientation="horizontal"
                      />
                      <div className="mt-4 text-sm text-muted-foreground">
                        {stepProgress === 1 && "Enter your personal information"}
                        {stepProgress === 2 && "Provide contact details"}
                        {stepProgress === 3 && "Verify your email address"}
                        {stepProgress === 4 && "Review and complete setup"}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Loading States</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 border rounded text-center space-y-2">
                        <LoadingDots size="sm" className="justify-center" />
                        <p className="text-xs text-muted-foreground">Loading...</p>
                      </div>
                      <div className="p-3 border rounded text-center space-y-2">
                        <Loader2 className="h-5 w-5 animate-spin mx-auto text-primary" />
                        <p className="text-xs text-muted-foreground">Processing...</p>
                      </div>
                      <div className="p-3 border rounded text-center space-y-2">
                        <CircularProgress value={0} size={30} strokeWidth={3} />
                        <p className="text-xs text-muted-foreground">Initializing...</p>
                      </div>
                      <div className="p-3 border rounded text-center space-y-2">
                        <IndeterminateProgress className="h-1" />
                        <p className="text-xs text-muted-foreground">Connecting...</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Status Contexts</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">Connection Status</span>
                      </div>
                      <IndeterminateProgress />
                      <p className="text-xs text-muted-foreground">Establishing connection...</p>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">Warning State</span>
                      </div>
                      <Progress value={30} className="w-full" />
                      <p className="text-xs text-muted-foreground">Low storage space</p>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-medium">Error State</span>
                      </div>
                      <Progress value={75} className="w-full" />
                      <p className="text-xs text-muted-foreground">Process failed at 75%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guidelines Tab */}
          <TabsContent value="guidelines" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">✅ Best Practices</CardTitle>
                  <CardDescription>
                    Follow these guidelines for effective progress indicators
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Show immediate feedback</strong> - Display progress indicators as soon as an operation begins
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Provide accurate information</strong> - Use determinate progress when you can calculate completion percentage
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Include time estimates</strong> - Show remaining time for operations longer than 10 seconds
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Handle error states</strong> - Provide clear feedback when operations fail
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Use consistent styling</strong> - Maintain visual consistency across your application
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Provide completion feedback</strong> - Clearly indicate when operations finish successfully
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">❌ Common Mistakes</CardTitle>
                  <CardDescription>
                    Avoid these pitfalls when implementing progress indicators
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't use for quick operations</strong> - Avoid progress bars for actions under 1 second
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't fake progress</strong> - Never show inaccurate progress percentages
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't leave users hanging</strong> - Always provide feedback during long operations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't rely only on color</strong> - Use additional visual cues beyond color changes
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't make them too small</strong> - Ensure progress indicators are clearly visible
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Don't ignore accessibility</strong> - Include proper ARIA attributes and screen reader support
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility Guidelines</CardTitle>
                <CardDescription>
                  Essential accessibility requirements for inclusive progress indicators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">ARIA Attributes</h4>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-muted rounded">
                        <code>role="progressbar"</code> - Identifies progress element
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <code>aria-valuenow</code> - Current progress value
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <code>aria-valuemin/max</code> - Progress range
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <code>aria-label</code> - Descriptive label
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <code>aria-live</code> - Announce updates
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Visual Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Color contrast:</strong> Minimum 3:1 ratio</li>
                      <li>• <strong>Focus indicators:</strong> Clear visual focus states</li>
                      <li>• <strong>High contrast mode:</strong> Windows compatibility</li>
                      <li>• <strong>Reduced motion:</strong> Respect user preferences</li>
                      <li>• <strong>Touch targets:</strong> 44px minimum for interactive elements</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Implementation Example</h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`<!-- Accessible progress bar -->
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
</div>`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Testing Checklist</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h5 className="font-medium">Screen Reader Testing</h5>
                      <ul className="text-sm space-y-1">
                        <li>□ Progress values announced correctly</li>
                        <li>□ Completion states communicated</li>
                        <li>□ Error states clearly described</li>
                        <li>□ Loading states provide feedback</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium">Visual Testing</h5>
                      <ul className="text-sm space-y-1">
                        <li>□ Sufficient color contrast</li>
                        <li>□ Visible in high contrast mode</li>
                        <li>□ Clear focus indicators</li>
                        <li>□ Readable at 200% zoom</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Considerations</CardTitle>
                <CardDescription>
                  Optimize progress indicators for better user experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Animation Performance</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Use CSS transforms instead of changing layout properties</li>
                      <li>• Implement `will-change` for animated elements</li>
                      <li>• Consider `prefers-reduced-motion` for accessibility</li>
                      <li>• Debounce rapid progress updates to avoid jank</li>
                      <li>• Use `requestAnimationFrame` for smooth animations</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Update Frequency</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Update progress at most 10 times per second</li>
                      <li>• Batch multiple progress updates together</li>
                      <li>• Avoid updating progress on every byte transferred</li>
                      <li>• Use meaningful progress thresholds (5%, 10%, etc.)</li>
                      <li>• Consider user perception over technical accuracy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* References Section */}
        <div className="mt-6">
          <ComponentReferences
            title="References & Resources"
            description="Essential design system references and best practices for implementing progress indicators."
            urls={progressIndicatorsUrlReference}
            getTitleFunction={getProgressUrlTitle}
          />
        </div>
      </div>
    </div>
  )
} 