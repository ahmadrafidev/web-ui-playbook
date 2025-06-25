import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center space-x-1 hover:opacity-90 transition-all duration-200">
            <div className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Web UI Playbook Logo" 
                width={36} 
                height={36} 
                quality={100}
                className="transition-transform group-hover:scale-105 w-8 h-8 sm:w-9 sm:h-9" 
              />
              <h1 className="text-lg sm:text-xl lg:text-2xl font-sans font-bold text-foreground tracking-tight ml-1 sm:ml-2">
                <span className="text-muted-foreground font-medium">eb</span>
                <span className="ml-1">UI</span>
                <span className="ml-1 font-medium text-muted-foreground">Playbook</span>
              </h1>
            </div>
          </Link>
          <nav className="flex items-center space-x-1 md:space-x-2">
            <ThemeToggle />
            <Link 
              href="https://github.com/ahmadrafidev/web-ui-playbook" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1 p-1.5 sm:p-2 rounded-md hover:bg-muted"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>       
          </nav>
        </div>
      </div>
    </header>
  )
} 