import Link from "next/link"
import { Edit3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditButtonProps {
  filePath?: string
  className?: string
}

function generateGitHubEditUrl(filePath?: string): string {
  const baseRepo = "ahmadrafidev/web-ui-playbook"
  const branch = "main"
  
  if (!filePath) {
    return `https://github.com/${baseRepo}/pulls`
  }
  
  return `https://github.com/${baseRepo}/edit/${branch}/${filePath}`
}

function generateAriaLabel(filePath?: string): string {
  if (!filePath) {
    return "View pull requests - Opens GitHub in new tab"
  }
  
  const fileName = filePath.split('/').pop() || 'file'
  return `Edit ${fileName} on GitHub - Opens file editor in new tab`
}

export function EditButton({ 
  filePath,
  className = ""
}: EditButtonProps) {
  const editUrl = generateGitHubEditUrl(filePath)
  const ariaLabel = generateAriaLabel(filePath)
  
  return (
    <Button
      variant="outline"
      size="sm"
      asChild
      className={`gap-2 ${className}`}
    >
      <Link
        href={editUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        <Edit3 className="h-4 w-4" />
        {filePath ? "Edit this file" : "View Pull Requests"}
      </Link>
    </Button>
  )
} 