import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NoResultsProps {
  onClearSearch: () => void
}

export function NoResults({ onClearSearch }: NoResultsProps) {
  return (
    <div className="text-center py-16">
      <div className="bg-muted rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
        <Search className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">No components found</h3>
      <p className="text-muted-foreground mb-4">
        Try searching for different keywords or browse all components below.
      </p>
      <Button onClick={onClearSearch} variant="outline">
        Clear search
      </Button>
    </div>
  )
} 