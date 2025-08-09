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
    <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto mb-6 sm:mb-8 md:mb-12 px-4 sm:px-0 relative">
      <div className="relative group bg-background/80 backdrop-blur-md rounded-md sm:rounded-lg md:rounded-xl overflow-hidden shadow-lg border border-border/80 transition-all duration-200 focus-within:shadow-2xl focus-within:bg-background/90 focus-within:border-transparent focus-within:ring-2 focus-within:ring-primary/60 focus-within:ring-offset-0 focus-within:shadow-primary/20 dark:bg-card/50 dark:border-border/30 dark:focus-within:bg-card/70 dark:focus-within:border-transparent dark:focus-within:ring-primary/60 dark:focus-within:shadow-primary/30">
        {/* Search input */}
        <Search className="absolute left-3 sm:left-4 md:left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-colors group-focus-within:text-primary" />
        <Input
          placeholder="Find a component..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="relative bg-transparent border-none shadow-none pl-8 sm:pl-10 md:pl-12 pr-8 sm:pr-10 md:pr-12 py-2 sm:py-2.5 md:py-3 text-sm sm:text-sm md:text-base placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none min-h-[38px] sm:min-h-[42px] md:min-h-[46px] text-foreground"
        />
        {searchQuery && (
          <button
            onClick={onClearSearch}
            className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-all duration-200 p-1 sm:p-1.5 rounded-full hover:bg-accent hover:scale-105"
          >
            <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </button>
        )}
      </div>
      
      {/* Search results indicator */}
      {searchQuery && (
        <div className="flex justify-center mt-3 sm:mt-5">
          <div className="bg-primary/10 text-primary px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg border border-primary/20 dark:bg-primary/20 dark:border-primary/30 whitespace-nowrap">
            {resultsCount} result{resultsCount !== 1 ? 's' : ''} found
          </div>
        </div>
      )}
    </div>
  )
} 