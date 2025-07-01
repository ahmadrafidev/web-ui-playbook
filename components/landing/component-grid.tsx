import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ComponentSection, getStatusConfig } from "@/types/component"

interface ComponentGridProps {
  components: ComponentSection[]
}

export function ComponentGrid({ components }: ComponentGridProps) {
  const sortedComponents = [...components].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {sortedComponents.map((section, index) => (
        <Link key={index} href={section.href}>
          <Card 
            className="hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.01] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 ease-out cursor-pointer group animate-in fade-in slide-in-from-bottom-4 rounded-lg h-full border-border/50"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {section.name}
                </CardTitle>
                <Badge 
                  variant={getStatusConfig(section.status).variant} 
                  className={`text-xs transition-all duration-300 group-hover:scale-105 ${getStatusConfig(section.status).className}`}
                >
                  {section.status}
                </Badge>
              </div>
              <CardDescription className="text-xs md:text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {section.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {/* Component Preview */}
              <div className="rounded-lg p-4 min-h-[80px] flex items-center justify-center bg-foreground/5 dark:bg-foreground/5 group-hover:bg-primary/5 transition-colors duration-300">
                {section.preview}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
} 