export function ComboboxPreview() {
  return (
    <div className="space-y-2 w-full min-h-[120px] flex flex-col justify-center">
      {/* Combobox with dropdown indicator */}
      <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors">
        <div className="w-4 h-4 text-muted-foreground">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="flex-1 h-8 bg-background border border-border rounded-md px-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>Search countries...</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Multi-select with tags */}
      <div className="flex items-start gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors">
        <div className="w-4 h-4 text-muted-foreground mt-1">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap gap-1">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-xs">
              React
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-xs">
              TypeScript
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
          <div className="h-8 bg-background border border-border rounded-md px-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>Add more skills...</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Combobox with selection */}
      <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors">
        <div className="w-4 h-4 text-muted-foreground">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
        </div>
        <div className="flex-1 h-8 bg-background border border-border rounded-md px-3 flex items-center justify-between text-xs">
          <span className="flex items-center gap-2">
            <span>🇺🇸</span>
            <span className="text-foreground">United States</span>
          </span>
          <div className="w-4 h-4 text-green-500">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
} 