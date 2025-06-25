import { 
  MoreHorizontal, 
  User, 
  Settings, 
  HelpCircle,
  Edit3,
  Share,
  Trash2,
  ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenuPreview() {
  return (
    <div className="space-y-3 w-full min-h-[140px] flex flex-col justify-center">
      {/* Dropdown Menu Example */}
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">Context Actions</span>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs px-3 py-1">
                Actions <MoreHorizontal className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              <DropdownMenuItem className="text-xs">
                <Edit3 className="mr-2 h-3 w-3" />
                Edit
                <DropdownMenuShortcut className="text-xs">⌘E</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs">
                <Share className="mr-2 h-3 w-3" />
                Share
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" className="text-xs">
                <Trash2 className="mr-2 h-3 w-3" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs px-2 py-1">
                <User className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              <DropdownMenuLabel className="text-xs">Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-xs">
                <User className="mr-2 h-3 w-3" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs">
                <Settings className="mr-2 h-3 w-3" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs">
                <HelpCircle className="mr-2 h-3 w-3" />
                Help
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Menubar Example */}
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">Application Menu</span>
        <Menubar className="h-8 p-1">
          <MenubarMenu>
            <MenubarTrigger className="text-xs px-2 py-1">File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="text-xs">
                New Tab <MenubarShortcut className="text-xs">⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem className="text-xs">
                New Window <MenubarShortcut className="text-xs">⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="text-xs">
                Print <MenubarShortcut className="text-xs">⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-xs px-2 py-1">Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="text-xs">
                Undo <MenubarShortcut className="text-xs">⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem className="text-xs">
                Redo <MenubarShortcut className="text-xs">⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="text-xs">
                Cut <MenubarShortcut className="text-xs">⌘X</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-xs px-2 py-1">View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="text-xs">
                Reload <MenubarShortcut className="text-xs">⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem className="text-xs">
                Toggle Fullscreen
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Selection Menu Example */}
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
        <span className="text-xs font-medium">Selection Menu</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="text-xs px-3 py-1">
              Options <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="end">
            <DropdownMenuItem className="text-xs">Light Mode</DropdownMenuItem>
            <DropdownMenuItem className="text-xs">Dark Mode</DropdownMenuItem>
            <DropdownMenuItem className="text-xs">System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
} 