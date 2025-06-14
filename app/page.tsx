import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Palette, Accessibility, Code, Users, Zap, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Components",
      description: "Detailed coverage of buttons, forms, navigation, and more with practical examples",
    },
    {
      icon: Accessibility,
      title: "Accessibility First",
      description: "WCAG compliant guidelines and implementation tips for inclusive design",
    },
    {
      icon: Code,
      title: "Framework Agnostic",
      description: "Examples for both vanilla HTML/CSS and modern frameworks like React",
    },
    {
      icon: Palette,
      title: "Design System Ready",
      description: "Build consistent, scalable component libraries and design systems",
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Focus on usability, user experience, and interface consistency",
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Best practices for fast, efficient, and maintainable UI components",
    },
  ]

  const componentSections = [
    {
      name: "Buttons",
      href: "/buttons",
      description: "Primary, secondary, and specialized button variants",
      status: "Complete",
    },
    { name: "Forms", href: "/forms", description: "Input fields, validation, and form layouts", status: "Complete" },
    {
      name: "Navigation",
      href: "/navigation",
      description: "Menus, breadcrumbs, and navigation patterns",
      status: "Complete",
    },
    { name: "Layout", href: "/layout", description: "Grids, containers, and responsive layouts", status: "Complete" },
    { name: "Feedback", href: "/feedback", description: "Alerts, toasts, and status indicators", status: "Complete" },
    {
      name: "Data Display",
      href: "/data-display",
      description: "Tables, cards, and data visualization",
      status: "Complete",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Web UI Playbook</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/accessibility" className="text-gray-600 hover:text-gray-900 transition-colors">
                Accessibility
              </Link>
              <Link href="/best-practices" className="text-gray-600 hover:text-gray-900 transition-colors">
                Best Practices
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Build Superior Web Interfaces</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive guide for creating consistent, accessible, and user-friendly UI components. From basic
            buttons to complex navigation systems, master the art of web interface design.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Input placeholder="Search components..." className="pl-10 pr-4 py-3 text-lg" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/buttons">Start with Components</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/accessibility">Learn Accessibility</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Component Sections - Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Component Library</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {componentSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <Link href={section.href}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="group-hover:text-blue-600 transition-colors">{section.name}</CardTitle>
                      <Badge variant="secondary">{section.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{section.description}</CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Built by Rafi</p>
        </div>
      </footer>
    </div>
  )
}
