export function SliderPreview() {
  return (
    <div className="space-y-2 w-full min-h-[120px] flex flex-col justify-center">
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium flex items-center gap-2">
          <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
          </svg>
          Brightness
        </span>
        <span className="text-xs text-muted-foreground">75%</span>
      </div>
      <div className="px-2">
        <div className="relative w-full h-1.5 bg-muted rounded-full">
          <div className="absolute h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
          <div className="absolute w-3 h-3 bg-primary border-2 border-background rounded-full shadow-sm" style={{ left: 'calc(75% - 6px)', top: '-3px' }}></div>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium flex items-center gap-2">
          <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8V6C19 5.4 18.6 5 18 5C17.4 5 17 5.4 17 6V10.5L12.5 9L11.5 8.5C11.1 8.2 10.6 8.3 10.3 8.7L7 13.4L7.4 14L9.8 13.4L13.1 8.8L16.8 10.1L21 9Z" />
          </svg>
          Range
        </span>
        <span className="text-xs text-muted-foreground">$50 - $250</span>
      </div>
      <div className="px-2">
        <div className="relative w-full h-1.5 bg-muted rounded-full">
          <div className="absolute h-full bg-green-500 rounded-full" style={{ left: '20%', width: '50%' }}></div>
          <div className="absolute w-3 h-3 bg-green-500 border-2 border-background rounded-full shadow-sm" style={{ left: 'calc(20% - 6px)', top: '-3px' }}></div>
          <div className="absolute w-3 h-3 bg-green-500 border-2 border-background rounded-full shadow-sm" style={{ left: 'calc(70% - 6px)', top: '-3px' }}></div>
        </div>
      </div>
    </div>
  )
} 