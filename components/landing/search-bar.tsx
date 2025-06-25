"use client"

import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  onClearSearch: () => void
  resultsCount: number
}

export function SearchBar({ 
  searchQuery, 
  onSearchChange, 
  onClearSearch, 
  resultsCount 
}: SearchBarProps) {
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0 relative">
      <div className="relative group">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md rounded-lg sm:rounded-xl shadow-lg border border-border/80 transition-all duration-200 group-focus-within:shadow-2xl group-focus-within:bg-background/90 group-focus-within:border-primary/50 group-focus-within:shadow-primary/20 dark:bg-card/50 dark:border-border/30 dark:group-focus-within:bg-card/70 dark:group-focus-within:border-primary/60 dark:group-focus-within:shadow-primary/30">
        </div>
        
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5 transition-colors group-focus-within:text-primary" />
          <Input
            placeholder="Find a component..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="relative bg-transparent border-none shadow-none pl-10 sm:pl-12 md:pl-16 pr-10 sm:pr-12 md:pr-16 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-xl placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg sm:rounded-xl md:rounded-2xl min-h-[45px] sm:min-h-[50px] md:min-h-[55px] text-foreground"
          />
          {searchQuery && (
            <button
              onClick={onClearSearch}
              className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-all duration-200 p-1.5 sm:p-2 rounded-full hover:bg-accent hover:scale-105"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
          )}
        </div>
      </div>
      
      {/* Search results indicator */}
      {searchQuery && (
        <div className="flex justify-center mt-4 sm:mt-6">
          <div className="bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg border border-primary/20 dark:bg-primary/20 dark:border-primary/30 whitespace-nowrap">
            {resultsCount} result{resultsCount !== 1 ? 's' : ''} found
          </div>
        </div>
      )}
    </div>
  )
} 