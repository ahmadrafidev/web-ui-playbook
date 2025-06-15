import Link from "next/link"
import Image from "next/image"
import { BookOpen, Github } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image src="/images/logo.png" alt="Web UI Playbook" width={32} height={32} />
            <h1 className="text-2xl font-bold text-gray-900">Web UI Playbook</h1>
          </Link>
          <nav className="flex items-center">
            <Link 
              href="https://github.com/ahmadrafidev/web-ui-playbook" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
            >
              <Github className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 