export function SwitchPreview() {
  return (
    <div className="space-y-2 w-full min-h-[120px] flex flex-col justify-center">
      <div className="flex items-center justify-between gap-4 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400"></div>
          <span className="text-xs font-medium text-foreground">Push notifications</span>
        </div>
        <div className="relative">
          <div className="w-9 h-5 bg-green-500 dark:bg-green-400 rounded-full flex items-center shadow-inner">
            <div className="w-4 h-4 bg-white rounded-full shadow-md translate-x-[18px] transition-all duration-200 ease-in-out"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500"></div>
          <span className="text-xs text-muted-foreground">Email alerts</span>
        </div>
        <div className="relative">
          <div className="w-9 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center shadow-inner">
            <div className="w-4 h-4 bg-white dark:bg-gray-100 rounded-full shadow-md translate-x-0.5 transition-all duration-200 ease-in-out"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
          <span className="text-xs font-medium text-foreground">Auto-sync data</span>
        </div>
        <div className="relative">
          <div className="w-9 h-5 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center shadow-inner">
            <div className="w-4 h-4 bg-white rounded-full shadow-md translate-x-[18px] transition-all duration-200 ease-in-out"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 