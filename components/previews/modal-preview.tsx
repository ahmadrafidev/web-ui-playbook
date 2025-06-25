export function ModalPreview() {
  return (
    <div className="space-y-2 w-full min-h-[120px] flex flex-col justify-center">
      <div className="flex items-center justify-between p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-md border border-blue-200/50 dark:border-blue-800/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-xs font-medium">Information Modal</span>
        </div>
        <div className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded">
          ℹ️ Details
        </div>
      </div>
      <div className="flex items-center justify-between p-3 bg-amber-50/50 dark:bg-amber-900/20 rounded-md border border-amber-200/50 dark:border-amber-800/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <span className="text-xs font-medium">Confirmation Dialog</span>
        </div>
        <div className="flex gap-1">
          <div className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-800 text-amber-700 dark:text-amber-200 rounded">
            Cancel
          </div>
          <div className="text-xs px-2 py-1 bg-amber-500 text-white rounded">
            Confirm
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 bg-red-50/50 dark:bg-red-900/20 rounded-md border border-red-200/50 dark:border-red-800/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <span className="text-xs font-medium">Destructive Action</span>
        </div>
        <div className="flex gap-1">
          <div className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
            Cancel
          </div>
          <div className="text-xs px-2 py-1 bg-red-500 text-white rounded">
            Delete
          </div>
        </div>
      </div>
    </div>
  )
} 