import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-186px)] flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 dark:text-gray-100 tracking-tight">
            404
          </h1>
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mx-auto"></div>
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Page not found
          </h2>
        </div>

        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>

        <Button 
          variant="ghost" 
          asChild 
          className="group hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <Link href="/" className="flex items-center space-x-2 text-sm">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Go home</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

NotFound.displayName = "NotFound"