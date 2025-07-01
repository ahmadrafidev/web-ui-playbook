import { Badge } from "@/components/ui/badge"
import { Check, AlertTriangle, Info, Star } from "lucide-react"

export function BadgePreview() {
  return (
    <div className="space-y-2 w-full min-h-[120px] flex flex-col justify-center">
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">Status Badges</span>
        <div className="flex gap-1">
          <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            <Check className="h-2.5 w-2.5 mr-1" />
            Complete
          </Badge>
          <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
            Pending
          </Badge>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">Alert Badges</span>
        <div className="flex gap-1">
          <Badge variant="destructive" className="text-xs px-2 py-0.5">
            Error
          </Badge>
          <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
            <AlertTriangle className="h-2.5 w-2.5 mr-1" />
            Warning
          </Badge>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">Feature Badges</span>
        <div className="flex gap-1">
          <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
            <Info className="h-2.5 w-2.5 mr-1" />
            New
          </Badge>
          <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
            <Star className="h-2.5 w-2.5 mr-1" />
            Featured
          </Badge>
        </div>
      </div>
    </div>
  )
} 