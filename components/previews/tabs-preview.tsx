export function TabsPreview() {
  return (
    <div className="space-y-3 w-full">
      <div className="flex border-b border-border/50">
        <div className="relative px-4 py-2 border-b-2 border-primary text-primary text-xs font-semibold transition-all duration-200">
          Overview
        </div>
        <div className="px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-t-md transition-all duration-200 cursor-pointer">
          Analytics
        </div>
        <div className="px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-t-md transition-all duration-200 cursor-pointer">
          Settings
        </div>
      </div>
      <div className="p-4 bg-accent/20 rounded-md border border-border/30">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-xs font-medium">Dashboard Overview</span>
        </div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          Key metrics and insights for your project
        </div>
      </div>
    </div>
  )
} 