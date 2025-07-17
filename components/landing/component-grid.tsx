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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-2 space-y-4 md:space-y-0">
      {sortedComponents.map((section, index) => (
        <Link key={index} href={section.href}>
          <Card 
            className="group relative overflow-hidden rounded-xl h-full border-border/50
              hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20
              motion-safe:transform-gpu motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out
              motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8
              motion-safe:hover:scale-[1.02] motion-safe:hover:-translate-y-1
              motion-safe:active:scale-[0.98] motion-safe:active:translate-y-0
              motion-safe:before:absolute motion-safe:before:inset-0 
              motion-safe:before:bg-gradient-to-r motion-safe:before:from-transparent 
              motion-safe:before:to-transparent motion-safe:before:opacity-0
              motion-safe:hover:before:opacity-100 motion-safe:before:transition-opacity
              motion-safe:before:duration-500"
            style={{ 
              animationDelay: `${index * 75}ms`, 
              animationFillMode: 'both',
              willChange: 'transform, opacity, box-shadow' 
            }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg md:text-xl font-semibold 
                  group-hover:text-primary motion-safe:transition-colors 
                  motion-safe:duration-500">
                  {section.name}
                </CardTitle>
                <Badge 
                  variant={getStatusConfig(section.status).variant} 
                  className={`text-xs motion-safe:transition-all motion-safe:duration-500 
                    motion-safe:group-hover:scale-105 motion-safe:group-hover:rotate-1
                    ${getStatusConfig(section.status).className}`}
                >
                  {section.status}
                </Badge>
              </div>
              <CardDescription className="text-xs md:text-sm text-gray-500 
                dark:text-gray-400 group-hover:text-gray-700 
                dark:group-hover:text-gray-300 motion-safe:transition-colors 
                motion-safe:duration-500">
                {section.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="rounded-lg p-4 min-h-[80px] flex items-center 
                justify-center bg-foreground/5 dark:bg-foreground/5 
                group-hover:bg-primary/5 motion-safe:transition-all 
                motion-safe:duration-500 motion-safe:ease-out 
                motion-safe:group-hover:scale-[1.02]">
                {section.preview}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
} 