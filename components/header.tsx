import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header>
      <div className="container max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <h1 className="text-xl md:text-3xl font-semibold text-foreground tracking-tight hover:text-foreground/80 transition-colors">
              Web UI Playbook
            </h1>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 