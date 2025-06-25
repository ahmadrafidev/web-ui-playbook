import { Button } from "@/components/ui/button"

export function ButtonPreview() {
  return (
    <div className="space-y-2 w-full min-h-[120px] flex flex-col justify-center">
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">Primary Actions</span>
        <div className="flex gap-2">
          <Button size="sm" className="shadow-sm hover:shadow-md transition-all duration-200 text-xs px-3 py-1">
            Save
          </Button>
          <Button variant="outline" size="sm" className="hover:bg-accent/50 transition-all duration-200 text-xs px-3 py-1">
            Cancel
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">Secondary Actions</span>
        <div className="flex gap-2">
          <Button size="sm" variant="secondary" className="text-xs px-3 py-1 shadow-sm">
            Edit
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-accent/80 transition-all duration-200 text-xs px-3 py-1">
            View
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">Destructive Action</span>
        <Button size="sm" variant="destructive" className="text-xs px-3 py-1 shadow-sm">
          Delete Item
        </Button>
      </div>
    </div>
  )
} 