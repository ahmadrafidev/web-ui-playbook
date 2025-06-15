/**
 * Component development status types for UI component lifecycle tracking
 */
export type ComponentStatus = 
  | "Soon"          
  | "In Progress"    
  | "Complete"       

/**
 * Component section interface for the playground
 */
export interface ComponentSection {
  name: string
  href: string
  description: string
  status: ComponentStatus
  preview: React.ReactNode
  category?: string
  lastUpdated?: string
  version?: string
}

/**
 * Status configuration for UI styling and display
 */
export const STATUS_CONFIG: Record<ComponentStatus, {
  label: string
  variant: "default" | "secondary" | "destructive" | "outline"
  className: string
  description: string
}> = {
  "Soon": {
    label: "Soon",
    variant: "outline",
    className: "text-blue-600 border-blue-200 bg-blue-50",
    description: "Component is coming soon"
  },
  "In Progress": {
    label: "In Progress",
    variant: "secondary",
    className: "text-yellow-700 border-yellow-200 bg-yellow-50",
    description: "Component is actively being developed"
  },
  "Complete": {
    label: "Complete",
    variant: "default",
    className: "text-green-700 border-green-200 bg-green-50",
    description: "Component development is finished"
  }
}

/**
 * Helper function to get status configuration
 */
export const getStatusConfig = (status: ComponentStatus) => STATUS_CONFIG[status] 