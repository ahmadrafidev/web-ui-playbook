"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Loader2, Upload } from "lucide-react"

export function ProgressIndicatorsPreview() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const circularProgress = 65

  useEffect(() => {
    const interval = setInterval(() => {
      setUploadProgress(prev => (prev >= 100 ? 0 : prev + 2))
    }, 150)
    return () => clearInterval(interval)
  }, [])

  const CircularProgress = ({ value, size = 20 }: { value: number; size?: number }) => {
    const radius = (size - 2) / 2
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (value / 100) * circumference

    return (
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-muted-foreground/20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-primary transition-all duration-300"
        />
      </svg>
    )
  }

  return (
    <div className="space-y-2 w-full min-h-[120px] flex flex-col justify-center">
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium flex items-center gap-2">
          <Upload className="w-3 h-3 text-blue-500" />
          Upload Progress
        </span>
        <span className="text-xs text-muted-foreground">{Math.round(uploadProgress)}%</span>
      </div>
      <div className="px-2">
        <Progress value={uploadProgress} className="w-full h-1.5" />
      </div>
      
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium flex items-center gap-2">
          <div className="flex items-center space-x-0.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 bg-primary rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.4s'
                }}
              />
            ))}
          </div>
          Loading Data
        </span>
        <Loader2 className="w-3 h-3 animate-spin text-primary" />
      </div>
      
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">System Status</span>
        <div className="flex items-center gap-2">
          <CircularProgress value={circularProgress} size={16} />
          <span className="text-xs text-muted-foreground">{circularProgress}%</span>
        </div>
      </div>
    </div>
  )
} 