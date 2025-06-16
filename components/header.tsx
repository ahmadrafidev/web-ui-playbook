import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image src="/images/logo.png" alt="Web UI Playbook" width={32} height={32} className="dark:invert" />
            <h1 className="text-2xl font-bold text-foreground">Web UI Playbook</h1>
          </Link>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Link 
              href="https://github.com/ahmadrafidev/web-ui-playbook" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1 p-2 rounded-md hover:bg-muted"
            >
              <Github className="h-5 w-5" />
            </Link>       
          </nav>
        </div>
      </div>
    </header>
  )
} 