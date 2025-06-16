import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import { Header } from "@/components/header"

export default function TooltipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        
        <div className="mb-12 mt-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Tooltip Components</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Tooltips provide contextual information when users hover over elements.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4 text-card-foreground">Tooltip Examples</h2>
          <div className="space-y-6">
            <div className="relative group">
              <Button>
                <HelpCircle className="h-4 w-4 mr-2" />
                Help Button
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Get help and support
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 