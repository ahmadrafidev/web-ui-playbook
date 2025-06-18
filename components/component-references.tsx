import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ComponentReferencesProps {
  title?: string
  description?: string
  urls: string[]
  getTitleFunction: (url: string) => string
}

export function ComponentReferences({ 
  title = "References & Resources",
  description = "External resources and design system references.",
  urls,
  getTitleFunction
}: ComponentReferencesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {title}
        </CardTitle>
        {description && (
          <CardDescription>
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {urls.map((url, index) => (
            <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1">
                <Link 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {getTitleFunction(url)}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 