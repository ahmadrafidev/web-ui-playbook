export function CheckboxPreview() {
  return (
    <div className="space-y-2 w-full min-h-[120px] flex flex-col justify-center">
      <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
        <div className="relative w-4 h-4 border-2 border-primary bg-primary rounded-sm flex items-center justify-center shadow-sm dark:border-blue-500 dark:bg-blue-500">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-xs font-medium text-foreground">Enable notifications</span>
      </div>
      <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
        <div className="w-4 h-4 border-2 border-border dark:border-gray-500 bg-background dark:bg-gray-800 rounded-sm shadow-sm hover:border-border/80 dark:hover:border-gray-400 transition-colors"></div>
        <span className="text-xs text-muted-foreground">Marketing emails</span>
      </div>
      <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
        <div className="relative w-4 h-4 border-2 border-orange-500 bg-orange-500 rounded-sm flex items-center justify-center shadow-sm dark:border-orange-400 dark:bg-orange-400">
          <div className="w-2 h-0.5 bg-white rounded-full"></div>
        </div>
        <span className="text-xs font-medium text-foreground">Select all items</span>
      </div>
    </div>
  )
} 