import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"

export default function HomePage() {
  const componentSections = [
    {
      name: "Buttons",
      href: "/play/buttons",
      description: "Primary, secondary, and action buttons",
      status: "Complete",
    },
    {
      name: "Alerts",
      href: "/play/alerts",
      description: "Success, warning, error, and info alerts",
      status: "Complete",
    },
    {
      name: "Cards",
      href: "/play/cards",
      description: "Content containers and layout cards",
      status: "Complete",
    },
    {
      name: "Forms",
      href: "/play/forms",
      description: "Input fields and form components",
      status: "Complete",
    },
    {
      name: "Navigation",
      href: "/play/navigation",
      description: "Menus, tabs, and navigation elements",
      status: "Complete",
    },
    {
      name: "Modals",
      href: "/play/modals",
      description: "Dialogs, popups, and overlays",
      status: "Complete",
    },
    {
      name: "Tables",
      href: "/play/tables",
      description: "Data tables and lists",
      status: "Complete",
    },
    {
      name: "Badges",
      href: "/play/badges",
      description: "Status indicators and labels",
      status: "Complete",
    },
    {
      name: "Tooltips",
      href: "/play/tooltips",
      description: "Hover information and help text",
      status: "Complete",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">Build Superior Web Interfaces</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A comprehensive guide for creating consistent, accessible, and user-friendly UI components.
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
              <Link href="/play">Playground</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/play/buttons">Browse Components</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Component Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Component Library</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {componentSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 cursor-pointer group hover:-translate-y-1">
                <Link href={section.href}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="group-hover:text-blue-600 transition-colors text-lg">{section.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">{section.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{section.description}</CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Built by Rafi</p>
        </div>
      </footer>
    </div>
  )
}
