import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CardPreview() {
  return (
    <div className="w-full flex items-center justify-center">
      <Card className="w-60 h-1/2 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold">Article</span>
            <Badge variant="secondary" className="text-[8px] px-1.5 py-0.5">New</Badge>
          </div>
          <p className="text-[9px] text-muted-foreground">UI Design Patterns</p>
          <p className="text-[8px] text-muted-foreground mt-1">5 min read</p>
        </CardContent>
      </Card>
    </div>
  )
} 