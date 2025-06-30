import React from "react"
import { User, Bot, Building2 } from "lucide-react"
import Image from 'next/image';

interface AvatarProps {
  src?: string
  name?: string
  initials?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  status?: 'online' | 'offline' | 'away' | 'busy' | 'none'
  icon?: React.ReactNode
  className?: string
}

function Avatar({
  src,
  name,
  initials,
  size = 'md',
  status = 'none',
  icon,
  className = ''
}: AvatarProps) {
  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base'
  }

  const statusClasses = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
    none: ''
  }

  const statusSizes = {
    xs: 'h-2 w-2',
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-3 w-3'
  }

  const getInitials = () => {
    if (initials) return initials
    if (name) {
      return name
        .split(' ')
        .map(word => word.charAt(0))
        .slice(0, 2)
        .join('')
        .toUpperCase()
    }
    return ''
  }

  const avatarContent = () => {
    if (icon) {
      return <div className="flex items-center justify-center w-full h-full">{icon}</div>
    }

    if (src) {
      return (
        <Image
          src={src}
          alt={name || 'Avatar'}
          className="w-full h-full object-cover rounded-full"
        />
      )
    }

    const displayInitials = getInitials()
    if (displayInitials) {
      return (
        <span className="font-medium text-foreground select-none">
          {displayInitials}
        </span>
      )
    }

    return <User className="h-1/2 w-1/2 text-muted-foreground" />
  }

  return (
    <div className="relative inline-block">
      <div
        className={`
          ${sizeClasses[size]}
          bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900
          rounded-full border-2 border-transparent
          flex items-center justify-center overflow-hidden
          transition-all duration-200
          ${className}
        `}
      >
        {avatarContent()}
      </div>

      {status !== 'none' && (
        <div 
          className={`
            absolute -bottom-0.5 -right-0.5 ${statusSizes[size]} ${statusClasses[status]}
            rounded-full border-2 border-background
          `}
        />
      )}
    </div>
  )
}

// Avatar Group component for preview
interface AvatarGroupProps {
  avatars: Array<Pick<AvatarProps, 'src' | 'name' | 'initials'>>
  max?: number
  size?: AvatarProps['size']
}

function AvatarGroup({ avatars, max = 3, size = 'sm' }: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, max)
  const remainingCount = Math.max(0, avatars.length - max)

  const overlapClasses = {
    xs: '-ml-2',
    sm: '-ml-2',
    md: '-ml-3',
    lg: '-ml-3'
  }

  return (
    <div className="flex items-center">
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className={`relative ${index > 0 ? overlapClasses[size] : ''}`}
          style={{ zIndex: visibleAvatars.length - index }}
        >
          <Avatar
            {...avatar}
            size={size}
            className="ring-2 ring-background"
          />
        </div>
      ))}
      
      {remainingCount > 0 && (
        <div
          className={`${overlapClasses[size]} relative`}
          style={{ zIndex: 0 }}
        >
          <Avatar
            initials={`+${remainingCount}`}
            size={size}
            className="ring-2 ring-background bg-muted"
          />
        </div>
      )}
    </div>
  )
}

export function AvatarPreview() {
  const teamMembers = [
    { name: 'Alice Johnson', initials: 'AJ' },
    { name: 'Bob Smith', initials: 'BS' },
    { name: 'Carol Davis', initials: 'CD' },
    { name: 'David Wilson', initials: 'DW' },
    { name: 'Eva Chen', initials: 'EC' }
  ]

  return (
    <div className="space-y-3 w-full min-h-[120px] flex flex-col justify-center">
      {/* User Profiles */}
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">User Profiles</span>
        <div className="flex items-center gap-2">
          <Avatar name="Sarah Connor" status="online" size="sm" />
          <Avatar name="John Doe" status="away" size="sm" />
          <Avatar name="Alex Kim" status="busy" size="sm" />
        </div>
      </div>

      {/* System & Entities */}
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">System & Entities</span>
        <div className="flex items-center gap-2">
          <Avatar icon={<Bot className="h-1/2 w-1/2 text-blue-600" />} size="sm" />
          <Avatar icon={<Building2 className="h-1/2 w-1/2 text-green-600" />} size="sm" />
          <Avatar name="Admin" size="sm" />
        </div>
      </div>

      {/* Team Collaboration */}
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">Team Collaboration</span>
        <div className="flex items-center gap-3">
          <AvatarGroup avatars={teamMembers.slice(0, 3)} size="xs" />
          <AvatarGroup avatars={teamMembers} max={2} size="xs" />
        </div>
      </div>
    </div>
  )
} 