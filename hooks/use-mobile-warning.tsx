"use client"

import { useState, useEffect } from "react"
import { Monitor, X } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Hook to detect mobile screen size and manage mobile warning state
 */
export function useMobileWarning() {
  const [isMobile, setIsMobile] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false)

  useEffect(() => {
    // Check if user has previously dismissed the warning
    const dismissed = localStorage.getItem('mobile-warning-dismissed')
    if (dismissed === 'true') {
      setHasBeenDismissed(true)
    }

    // Function to check screen size
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768 
      setIsMobile(mobile)
      
      // Show warning if mobile and not previously dismissed
      if (mobile && !hasBeenDismissed && dismissed !== 'true') {
        setShowWarning(true)
      } else {
        setShowWarning(false)
      }
    }

    // Check on mount
    checkScreenSize()

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize)

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [hasBeenDismissed])

  const dismissWarning = () => {
    setShowWarning(false)
    setHasBeenDismissed(true)
    localStorage.setItem('mobile-warning-dismissed', 'true')
  }

  const MobileWarning = showWarning ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={dismissWarning}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md w-full animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
              <Monitor className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Desktop Optimized
            </h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={dismissWarning}
            className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Body */}
        <div className="p-6">
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
            This website is optimized for desktop screens to provide the best component preview experience.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            While you can still browse on mobile, some interactive elements and detailed previews are designed for larger screens.
          </p>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-xl">
          <Button
            variant="outline"
            size="sm"
            onClick={dismissWarning}
            className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Continue anyway
          </Button>
          <Button
            onClick={dismissWarning}
            size="sm"
            className="bg-zinc-600 hover:bg-zinc-700 text-white shadow-sm"
          >
            Got it
          </Button>
        </div>
      </div>
    </div>
  ) : null

  return {
    isMobile,
    showWarning,
    dismissWarning,
    MobileWarning
  }
} 