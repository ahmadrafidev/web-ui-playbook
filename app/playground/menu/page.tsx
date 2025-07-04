"use client"

import { 
  MoreHorizontal, 
  MoreVertical,
  Settings, 
  User, 
  HelpCircle, 
  Plus, 
  Edit3,
  Download,
  Share,
  Trash2,
  Copy,
  Scissors,
  ClipboardPaste,
  File,
  Flag,
  Folder,
  Search,
  Keyboard,
  Heart,
  Star,
  Bookmark,
  Home,
  Bell,
  Archive,
  Zap,
  Shield,
  Globe,
  LogOut
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar"

const menuComponentsUrlReference = [
  "https://www.w3.org/WAI/tutorials/menus/",
  "https://developer.apple.com/design/human-interface-guidelines/menus",
  "https://spectrum.adobe.com/page/menu/",
  "https://m3.material.io/components/menus/accessibility",
  "https://primer.style/product/components/action-menu/guideilnes/",
  "https://atlassian.design/components/menu/examples",
  "https://carbondesignsystem.com/components/overflow-menu/accessibility/",
  "https://paste.twilio.com/components/menu",
  "https://base.uber.com/6d2425e9f/p/2313a4-menu"
]


// TODO: Improve the content inside Menu Components
export default function MenuPage() {
  const { MobileWarning } = useMobileWarning()

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Menu</h2>
            <EditButton filePath="app/playground/menu/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Menus are versatile interface components that display lists of choices, commands, or navigation options. 
            Menus should provide clear hierarchy, consistent interaction patterns, and robust accessibility support across all platforms.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>WAI-ARIA Compliant</Badge>
            <Badge>Keyboard Navigation</Badge>
            <Badge>Responsive</Badge>
            <Badge>Navigation</Badge>
            <Badge>Hierarchical</Badge>
            <Badge>Interactive</Badge>
            <Badge>Contextual</Badge>
          </div>
        </div>

        <Tabs defaultValue="types" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="behaviors">Behaviors</TabsTrigger>
            <TabsTrigger value="hierarchy">Structure</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Menu Types */}
          <TabsContent value="types" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Action Menus (Dropdown)</CardTitle>
                <CardDescription>
                  Context-sensitive menus following GitHub Primer&apos;s ActionMenu pattern. Provide quick access to actions without overwhelming the primary interface.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Basic Dropdown</h4>
                    <div className="space-y-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">
                            Actions <MoreHorizontal className="ml-2 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Edit3 className="mr-2 h-4 w-4" />
                            Edit
                            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Copy
                            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share className="mr-2 h-4 w-4" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">User Menu</h4>
                    <div className="space-y-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="icon">
                            <User className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end">
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <HelpCircle className="mr-2 h-4 w-4" />
                            Help & Support
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Context Menu with Submenus</h4>
                  <div className="p-4 border rounded-lg">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <File className="mr-2 h-4 w-4" />
                          File Operations
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuItem>
                          <Plus className="mr-2 h-4 w-4" />
                          New File
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <Download className="mr-2 h-4 w-4" />
                            Export
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                            <DropdownMenuItem>Export as PNG</DropdownMenuItem>
                            <DropdownMenuItem>Export as SVG</DropdownMenuItem>
                            <DropdownMenuItem>Export as JSON</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <Scissors className="mr-2 h-4 w-4" />
                            Cut
                            <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Copy
                            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ClipboardPaste className="mr-2 h-4 w-4" />
                            Paste
                            <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Menubars</CardTitle>
                <CardDescription>
                  Desktop-style menubars following W3C specifications. Provide comprehensive command access in application interfaces with keyboard arrow navigation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Application Menu Bar</h4>
                  <Menubar className="border">
                    <MenubarMenu>
                      <MenubarTrigger>File</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>
                          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                          New Window <MenubarShortcut>⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>
                          New Incognito Window
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarSub>
                          <MenubarSubTrigger>Share</MenubarSubTrigger>
                          <MenubarSubContent>
                            <MenubarItem>Email link</MenubarItem>
                            <MenubarItem>Messages</MenubarItem>
                            <MenubarItem>Notes</MenubarItem>
                          </MenubarSubContent>
                        </MenubarSub>
                        <MenubarSeparator />
                        <MenubarItem>
                          Print... <MenubarShortcut>⌘P</MenubarShortcut>
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger>Edit</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>
                          Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                          Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                          Cut <MenubarShortcut>⌘X</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                          Copy <MenubarShortcut>⌘C</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                          Paste <MenubarShortcut>⌘V</MenubarShortcut>
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger>View</MenubarTrigger>
                      <MenubarContent>
                        <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                        <MenubarCheckboxItem checked>
                          Always Show Full URLs
                        </MenubarCheckboxItem>
                        <MenubarSeparator />
                        <MenubarItem inset>
                          Reload <MenubarShortcut>⌘R</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled inset>
                          Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Hide Sidebar</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger>Profiles</MenubarTrigger>
                      <MenubarContent>
                        <MenubarRadioGroup value="benoit">
                          <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                          <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                          <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                        </MenubarRadioGroup>
                        <MenubarSeparator />
                        <MenubarItem inset>Edit...</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Add Profile...</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Menu Patterns */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Design System Patterns</CardTitle>
                <CardDescription>
                  Industry-standard menu patterns from GitHub Primer, Twilio Paste, Uber Base, and Adobe Spectrum following consistent interaction models.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Selection Menu</h4>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Star className="mr-2 h-4 w-4" />
                          Favorites
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Bookmark Options</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>
                          <Heart className="mr-2 h-4 w-4" />
                          Liked
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                          <Star className="mr-2 h-4 w-4" />
                          Starred
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked>
                          <Bookmark className="mr-2 h-4 w-4" />
                          Bookmarked
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                          <Archive className="mr-2 h-4 w-4" />
                          Archived
                        </DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Radio Selection</h4>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Settings className="mr-2 h-4 w-4" />
                          Theme
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value="system">
                          <DropdownMenuRadioItem value="light">
                            Light
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="dark">
                            Dark
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="system">
                            System
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Command Palette (GitHub Primer Pattern)</h4>
                  <div className="p-4 border rounded-lg">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <Search className="mr-2 h-4 w-4" />
                          Search commands...
                          <DropdownMenuShortcut className="ml-auto">⌘K</DropdownMenuShortcut>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-80">
                        <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Home className="mr-2 h-4 w-4" />
                          Go to Dashboard
                          <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Plus className="mr-2 h-4 w-4" />
                          Create New Project
                          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Search className="mr-2 h-4 w-4" />
                          Search Projects
                          <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Settings</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          Preferences
                          <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Keyboard className="mr-2 h-4 w-4" />
                          Keyboard Shortcuts
                          <DropdownMenuShortcut>⌘/</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Mobile-First Patterns (Apple HIG & Material)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Bottom Sheet Style</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        Following iOS and Material Design patterns for mobile-optimized menu presentation.
                      </p>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">More Options</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem>
                            <Share className="mr-2 h-4 w-4" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Bookmark className="mr-2 h-4 w-4" />
                            Save
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Flag className="mr-2 h-4 w-4" />
                            Report
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Overflow Menu (Carbon Pattern)</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        IBM Carbon&apos;s three-dot overflow pattern for constrained spaces.
                      </p>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">Remove</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Menu Behaviors */}
          <TabsContent value="behaviors" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Behaviors</CardTitle>
                <CardDescription>
                  How menus respond to user interactions and provide feedback.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Trigger Methods</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <strong className="text-sm">Click/Tap:</strong>
                        <p className="text-sm text-muted-foreground">Primary activation method</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong className="text-sm">Keyboard (Space/Enter):</strong>
                        <p className="text-sm text-muted-foreground">Accessible navigation</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong className="text-sm">Context Menu (Right-click):</strong>
                        <p className="text-sm text-muted-foreground">Contextual actions</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Positioning</h4>
                    <div className="space-y-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Bottom Start
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="bottom" align="start">
                          <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
                          <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Right Center
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="center">
                          <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
                          <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Top End
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="top" align="end">
                          <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
                          <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">State Management</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Disabled Items</h5>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">Options</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Available Action</DropdownMenuItem>
                          <DropdownMenuItem disabled>Disabled Action</DropdownMenuItem>
                          <DropdownMenuItem>Another Available Action</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Destructive Actions</h5>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">Manage</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Menu Structure & Hierarchy */}
          <TabsContent value="hierarchy" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information Architecture & Grouping</CardTitle>
                <CardDescription>
                  Organizing menu content following design system patterns from Atlassian, Carbon, and Material Design for optimal discoverability and cognitive load management.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Grouping & Separators</h4>
                  <div className="p-4 border rounded-lg">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Folder className="mr-2 h-4 w-4" />
                          File Menu
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Create</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <File className="mr-2 h-4 w-4" />
                          New Document
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Folder className="mr-2 h-4 w-4" />
                          New Folder
                        </DropdownMenuItem>
                        
                        <DropdownMenuSeparator />
                        
                        <DropdownMenuLabel>Import/Export</DropdownMenuLabel>
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Import File
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <Share className="mr-2 h-4 w-4" />
                              Export As
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>PDF Document</DropdownMenuItem>
                              <DropdownMenuItem>Word Document</DropdownMenuItem>
                              <DropdownMenuItem>Plain Text</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>JSON Data</DropdownMenuItem>
                              <DropdownMenuItem>CSV File</DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        <DropdownMenuLabel>Recent</DropdownMenuLabel>
                        <DropdownMenuItem>Document1.pdf</DropdownMenuItem>
                        <DropdownMenuItem>Project-Files.zip</DropdownMenuItem>
                        <DropdownMenuItem disabled>No recent files</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Multi-level Navigation</h4>
                  <div className="p-4 border rounded-lg">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Globe className="mr-2 h-4 w-4" />
                          Navigation
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuItem>
                          <Home className="mr-2 h-4 w-4" />
                          Dashboard
                        </DropdownMenuItem>
                        
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <User className="mr-2 h-4 w-4" />
                            Profile
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuSub>
                              <DropdownMenuSubTrigger>Privacy Settings</DropdownMenuSubTrigger>
                              <DropdownMenuSubContent>
                                <DropdownMenuItem>Public Profile</DropdownMenuItem>
                                <DropdownMenuItem>Private Profile</DropdownMenuItem>
                                <DropdownMenuItem>Friends Only</DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>
                              <Bell className="mr-2 h-4 w-4" />
                              Notifications
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Shield className="mr-2 h-4 w-4" />
                              Security
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Zap className="mr-2 h-4 w-4" />
                              Performance
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        
                        <DropdownMenuSeparator />
                        
                        <DropdownMenuItem>
                          <HelpCircle className="mr-2 h-4 w-4" />
                          Help & Support
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Menu States */}
          <TabsContent value="states" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Interactive States & Feedback</CardTitle>
                <CardDescription>
                  Consistent state management patterns based on IBM Carbon and Material Design specifications for menu interactions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Loading & Disabled States</h4>
                    <div className="space-y-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">
                            <Zap className="mr-2 h-4 w-4" />
                            System States
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>System Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Available Action
                          </DropdownMenuItem>
                          <DropdownMenuItem disabled>
                            <Globe className="mr-2 h-4 w-4" />
                            Disabled Action
                          </DropdownMenuItem>
                          <DropdownMenuItem disabled>
                            <Shield className="mr-2 h-4 w-4" />
                            Inactive due to outage
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Selection States</h4>
                    <div className="space-y-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">
                            <Star className="mr-2 h-4 w-4" />
                            Multi-Select Options
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>Content Preferences</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem checked>
                            <Heart className="mr-2 h-4 w-4" />
                            Favorited Items
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem checked>
                            <Archive className="mr-2 h-4 w-4" />
                            Archived Content
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Error & Recovery States</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg bg-destructive/5">
                      <h5 className="font-medium mb-2 text-destructive">Critical Actions</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        Following Carbon&apos;s overflow menu pattern for destructive actions with clear visual separation.
                      </p>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">Manage Content</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Edit3 className="mr-2 h-4 w-4" />
                            Edit Content
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Permanently
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Progressive Enhancement</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        Graceful degradation when JavaScript is disabled, following W3C progressive enhancement principles.
                      </p>
                      <div className="text-sm">
                        <p>• Native HTML fallbacks</p>
                        <p>• Semantic navigation structures</p>
                        <p>• Server-side rendering support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Accessibility Standards</CardTitle>
                <CardDescription>
                  WCAG 2.1 AA compliant patterns following W3C WAI-ARIA specifications, Apple HIG accessibility guidelines, and industry best practices from major design systems.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Keyboard Navigation</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200 text-sm">Tab:</strong>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">Navigate to menu trigger</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200 text-sm">Space/Enter:</strong>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">Open menu or activate item</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200 text-sm">Arrow Keys:</strong>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">Navigate menu items</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200 text-sm">Escape:</strong>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">Close menu and return focus</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Labels & Roles</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <strong className="text-sm">role=&quot;menu&quot;:</strong>
                        <p className="text-sm text-muted-foreground">Identifies menu container</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong className="text-sm">role=&quot;menuitem&quot;:</strong>
                        <p className="text-sm text-muted-foreground">Individual menu items</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong className="text-sm">aria-expanded:</strong>
                        <p className="text-sm text-muted-foreground">Indicates menu state</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong className="text-sm">aria-haspopup:</strong>
                        <p className="text-sm text-muted-foreground">Indicates submenu presence</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Focus Management</h4>
                  <div className="space-y-3 p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-4">
                      Proper focus management ensures users can navigate menus efficiently with assistive technologies.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Initial Focus:</strong> First menu item receives focus when menu opens</li>
                      <li>• <strong>Focus Trapping:</strong> Focus remains within menu until closed</li>
                      <li>• <strong>Return Focus:</strong> Focus returns to trigger when menu closes</li>
                      <li>• <strong>Visual Indicators:</strong> Clear focus indicators for keyboard users</li>
                      <li>• <strong>Skip Navigation:</strong> Allow bypassing long menus when appropriate</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">ARIA Implementation Standards</h4>
                  <div className="space-y-3 p-4 border rounded-lg">
                    <div className="grid gap-3">
                      <div>
                        <strong className="text-sm">Role Definitions (W3C Standard):</strong>
                        <p className="text-sm text-muted-foreground">role=&quot;menu&quot;, role=&quot;menubar&quot;, role=&quot;menuitem&quot; for application menus vs. nav elements for navigation</p>
                      </div>
                      <div>
                        <strong className="text-sm">State Management:</strong>
                        <p className="text-sm text-muted-foreground">aria-expanded, aria-haspopup=&quot;menu&quot;, aria-current for navigation menus</p>
                      </div>
                      <div>
                        <strong className="text-sm">Focus Management Pattern:</strong>
                        <p className="text-sm text-muted-foreground">aria-activedescendant or element.focus() following Carbon and Material Design patterns</p>
                      </div>
                      <div>
                        <strong className="text-sm">Screen Reader Testing:</strong>
                        <p className="text-sm text-muted-foreground">Validated with JAWS, NVDA, VoiceOver, and TalkBack across platforms</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Platform-Specific Guidelines</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Touch & Mobile (Apple HIG)</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Minimum 44pt touch targets</li>
                        <li>• Swipe gestures for menu navigation</li>
                        <li>• VoiceOver rotor support</li>
                        <li>• Dynamic Type compatibility</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Desktop Applications (W3C)</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Full keyboard navigation support</li>
                        <li>• High contrast mode compatibility</li>
                        <li>• Reduced motion preferences</li>
                        <li>• Multiple input method support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <ComponentReferences
          title="References & Further Reading"
          description="Essential references for menu component implementation and accessibility best practices."
          urls={menuComponentsUrlReference}
          getTitleFunction={(url: string) => {
            if (url.includes('w3.org')) return 'W3C WAI - Menu Tutorial'
            if (url.includes('apple.com')) return 'Apple Human Interface Guidelines - Menus'
            if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Menu Design'
            if (url.includes('material.io')) return 'Material Design - Menu Accessibility'
            if (url.includes('primer.style')) return 'GitHub Primer - Action Menu Guidelines'
            if (url.includes('atlassian.design')) return 'Atlassian Design System - Menu'
            if (url.includes('carbondesignsystem.com')) return 'Carbon Design System - Overflow Menu'
            if (url.includes('paste.twilio.com')) return 'Twilio Paste - Menu Component'
            if (url.includes('base.uber.com')) return 'Uber Base Design - Menu'
            return url
          }}
        />
        </div>
      </div>
    </div>
  )
} 