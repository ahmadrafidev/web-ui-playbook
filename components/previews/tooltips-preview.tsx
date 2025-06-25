import { Button } from "@/components/ui/button"

export function TooltipsPreview() {
  return (
    <div className="relative flex justify-center items-center w-full min-h-[120px] gap-4">
      <div className="relative group">
        <Button size="sm" variant="outline" className="relative transition-all duration-200 hover:bg-accent/50">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Help
        </Button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-100 transition-all duration-200">
          <div className="px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-md shadow-lg whitespace-nowrap">
            Get help and support
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
          </div>
        </div>
      </div>
      <div className="relative group">
        <Button size="sm" variant="ghost" className="relative transition-all duration-200">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Info
        </Button>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-100 transition-all duration-200">
          <div className="px-3 py-2 bg-primary text-primary-foreground text-xs rounded-md shadow-lg whitespace-nowrap">
            Additional information
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-primary"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 