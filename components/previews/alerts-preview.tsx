export function AlertsPreview() {
  return (
    <div className="space-y-2 w-full min-h-[120px] flex flex-col justify-center">
      <div className="flex items-start gap-3 text-xs bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-2.5 rounded-md border border-green-500/20 shadow-sm">
        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <div className="flex-1">
          <div className="font-medium">Successfully saved!</div>
          <div className="text-green-600/80 dark:text-green-400/80 mt-0.5">Your changes have been saved.</div>
        </div>
      </div>
      <div className="flex items-start gap-3 text-xs bg-amber-500/10 text-amber-700 dark:text-amber-400 px-3 py-2.5 rounded-md border border-amber-500/20 shadow-sm">
        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <div className="flex-1">
          <div className="font-medium">Action required</div>
          <div className="text-amber-600/80 dark:text-amber-400/80 mt-0.5">Please review your settings.</div>
        </div>
      </div>
      <div className="flex items-start gap-3 text-xs bg-red-500/10 text-red-700 dark:text-red-400 px-3 py-2.5 rounded-md border border-red-500/20 shadow-sm">
        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        <div className="flex-1">
          <div className="font-medium">Error occurred</div>
          <div className="text-red-600/80 dark:text-red-400/80 mt-0.5">Failed to process request.</div>
        </div>
      </div>
    </div>
  )
} 