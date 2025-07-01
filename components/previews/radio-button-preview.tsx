export function RadioButtonPreview() {
  return (
    <div className="space-y-2 w-full min-h-[120px] flex flex-col justify-center">
      <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
        <div className="relative w-4 h-4 border-2 border-primary bg-background rounded-full flex items-center justify-center shadow-sm">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
        </div>
        <span className="text-xs font-medium text-foreground">💳 Credit Card</span>
      </div>
      <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
        <div className="w-4 h-4 border-2 border-border dark:border-gray-500 bg-background rounded-full shadow-sm hover:border-border/80 dark:hover:border-gray-400 transition-colors"></div>
        <span className="text-xs text-muted-foreground">🅿️ PayPal</span>
      </div>
      <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
        <div className="w-4 h-4 border-2 border-border dark:border-gray-500 bg-background rounded-full shadow-sm hover:border-border/80 dark:hover:border-gray-400 transition-colors"></div>
        <span className="text-xs text-muted-foreground">🍎 Apple Pay</span>
      </div>
    </div>
  )
} 