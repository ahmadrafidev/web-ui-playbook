import Link from "next/link"
import { Edit3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditButtonProps {
  filePath?: string
  className?: string
}

export function EditButton({ 
  filePath,
  className = ""
}: EditButtonProps) {
  const githubPullsUrl = "https://github.com/ahmadrafidev/web-ui-playbook/pulls"
  
  return (
    <Button
      variant="outline"
      size="sm"
      asChild
      className={`gap-2 ${className}`}
    >
      <Link
        href={githubPullsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Edit ${filePath ? filePath : 'this page'} - Opens GitHub pull requests in new tab`}
      >
        <Edit3 className="h-4 w-4" />
        Edit this page
      </Link>
    </Button>
  )
} 