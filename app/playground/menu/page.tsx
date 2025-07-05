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
  Folder,
  Search,
  Star,
  Bell,
  LogOut,
  ChevronRight,
  ChevronDown,
  Check,
  AlertCircle,
  Info,
  ArrowUpDown,
  Command,
  Menu as MenuIcon
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
import { Separator } from "@/components/ui/separator"

const menuComponentsUrlReference = [
  "https://www.w3.org/WAI/tutorials/menus/",
  "https://developer.apple.com/design/human-interface-guidelines/menus",
  "https://spectrum.adobe.com/page/menu/",
  "https://m3.material.io/components/menus/accessibility",
  "https://primer.style/product/components/action-menu/guideilnes/",
  "https://atlassian.design/components/menu/examples",
  "https://carbondesignsystem.com/components/overflow-menu/accessibility/",
  "https://paste.twilio.design/components/menu",
  "https://base.uber.com/6d2425e9f/p/2313a4-menu"
]

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
            <h2 className="text-4xl font-bold text-foreground">Menu Components</h2>
            <EditButton filePath="app/playground/menu/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            A menu is a user interface element that presents a list of choices or actions to users. When triggered, 
            it displays a panel containing menu items that users can select to perform actions, navigate to different views, 
            or change settings. Menus can be contextual (appearing on right-click), dropdown (triggered by a button), 
            or application menus (persistent navigation).
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Interactive Navigation</Badge>
            <Badge variant="outline">Keyboard Accessible</Badge>
            <Badge variant="outline">WAI-ARIA Compliant</Badge>
            <Badge variant="outline">Hierarchical Structure</Badge>
            <Badge variant="outline">Multi-Platform Support</Badge>
            <Badge variant="outline">Context Aware</Badge>
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
                <CardTitle>Action Menus (GitHub Primer & Material Design)</CardTitle>
                <CardDescription>
                  Context-sensitive action menus following GitHub Primer&apos;s ActionMenu pattern and Material Design 3 specifications. 
                  Provide quick access to actions with clear visual hierarchy and consistent interaction patterns.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Primary Actions (Primer Pattern)</h4>
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
                    <h4 className="font-semibold mb-3 text-lg">User Profile Menu (Material Design)</h4>
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
                <CardTitle>Application Menubars (W3C WAI-ARIA & Apple HIG)</CardTitle>
                <CardDescription>
                  Desktop-style menubars following W3C WAI-ARIA 1.2 specifications and Apple Human Interface Guidelines. 
                  Provide comprehensive command access with full keyboard navigation, screen reader support, and platform-specific behaviors.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Standard Application Menu Bar</h4>
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
                <CardTitle>Enterprise Menu Patterns</CardTitle>
                <CardDescription>
                  Industry-standard menu patterns from leading design systems, optimized for accessibility,
                  usability, and cross-platform compatibility. Implements best practices from Adobe Spectrum,
                  Twilio Paste, GitHub Primer, and Material Design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Selection Menus (Spectrum Pattern)</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium mb-2">Single Select</h5>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                              <Check className="mr-2 h-4 w-4" />
                              Select Option
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Choose One</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value="option1">
                              <DropdownMenuRadioItem value="option1">
                                Option 1
                                <DropdownMenuShortcut>⌘1</DropdownMenuShortcut>
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="option2">
                                Option 2
                                <DropdownMenuShortcut>⌘2</DropdownMenuShortcut>
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="option3">
                                Option 3
                                <DropdownMenuShortcut>⌘3</DropdownMenuShortcut>
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium mb-2">Multi Select</h5>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                              <ArrowUpDown className="mr-2 h-4 w-4" />
                              Multiple Options
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Select Multiple</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked>
                              Option A
                              <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                              Option B
                              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                              Option C
                              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                            </DropdownMenuCheckboxItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Command Menu (Primer Pattern)</h4>
                    <div className="space-y-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <Command className="mr-2 h-4 w-4" />
                            Command Menu
                            <DropdownMenuShortcut className="ml-auto">⌘K</DropdownMenuShortcut>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64">
                          <DropdownMenuItem>
                            <Search className="mr-2 h-4 w-4" />
                            Search...
                            <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Plus className="mr-2 h-4 w-4" />
                            New Item
                            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit3 className="mr-2 h-4 w-4" />
                            Edit
                            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
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
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Mobile Patterns (Material & Uber)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Bottom Sheet Menu</h5>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MenuIcon className="mr-2 h-4 w-4" />
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start" side="bottom">
                          <DropdownMenuItem>
                            <Share className="mr-2 h-4 w-4" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit3 className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Overflow Menu (Carbon)</h5>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Quick Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">
                            Remove
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Hierarchical Menus (Apple HIG)</h4>
                  <div className="p-4 border rounded-lg">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Folder className="mr-2 h-4 w-4" />
                          File Menu
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>File Operations</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Plus className="mr-2 h-4 w-4" />
                          New File
                          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <Folder className="mr-2 h-4 w-4" />
                            Open Recent
                            <ChevronRight className="ml-auto h-4 w-4" />
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>Document.pdf</DropdownMenuItem>
                            <DropdownMenuItem>Spreadsheet.xlsx</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Clear Recent</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <Download className="mr-2 h-4 w-4" />
                            Export As
                            <ChevronRight className="ml-auto h-4 w-4" />
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>PDF Document</DropdownMenuItem>
                            <DropdownMenuItem>Word Document</DropdownMenuItem>
                            <DropdownMenuItem>Plain Text</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
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
                <CardTitle>Menu Anatomy & Organization</CardTitle>
                <CardDescription>
                  Essential structural elements and organization patterns for menus, following best practices from 
                  Material Design, Apple HIG, and Adobe Spectrum.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Components</h4>
                    <div className="space-y-3">
                      <div className="p-4 border rounded-lg">
                        <h5 className="text-sm font-medium mb-2">1. Trigger Element</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          The interactive element that opens the menu (button, icon, or text).
                        </p>
                        <Button variant="outline" className="w-full justify-between">
                          Menu Trigger
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="text-sm font-medium mb-2">2. Menu Container</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          The floating panel that contains menu items and sections.
                        </p>
                        <div className="border rounded-md p-2 bg-muted/50">
                          <div className="p-2 text-sm">Menu Container</div>
                          <Separator className="my-2" />
                          <div className="space-y-1">
                            <div className="p-2 text-sm bg-accent/50 rounded-sm">Item 1</div>
                            <div className="p-2 text-sm bg-accent/50 rounded-sm">Item 2</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="text-sm font-medium mb-2">3. Menu Items</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Individual interactive options within the menu.
                        </p>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">View Items</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              <User className="mr-2 h-4 w-4" />
                              Basic Item
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                              <AlertCircle className="mr-2 h-4 w-4" />
                              Disabled Item
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Info className="mr-2 h-4 w-4" />
                              With Icon
                              <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Organization Patterns</h4>
                    <div className="space-y-3">
                      <div className="p-4 border rounded-lg">
                        <h5 className="text-sm font-medium mb-2">1. Grouping & Sections</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Logical grouping of related items with clear visual separation.
                        </p>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">Grouped Items</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Group 1</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Item 1.1</DropdownMenuItem>
                            <DropdownMenuItem>Item 1.2</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Group 2</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Item 2.1</DropdownMenuItem>
                            <DropdownMenuItem>Item 2.2</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="text-sm font-medium mb-2">2. Hierarchy & Nesting</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Submenus for organizing complex options and actions.
                        </p>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">Nested Menu</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Main Option</DropdownMenuItem>
                            <DropdownMenuSub>
                              <DropdownMenuSubTrigger>
                                <ChevronRight className="mr-2 h-4 w-4" />
                                Submenu
                              </DropdownMenuSubTrigger>
                              <DropdownMenuSubContent>
                                <DropdownMenuItem>Sub-option 1</DropdownMenuItem>
                                <DropdownMenuItem>Sub-option 2</DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="text-sm font-medium mb-2">3. Visual Hierarchy</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Using icons, typography, and spacing for clear visual organization.
                        </p>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">Visual Elements</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel className="font-bold">Primary Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Star className="mr-2 h-4 w-4" />
                              Featured Item
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-muted-foreground">
                              <Info className="mr-2 h-4 w-4" />
                              Secondary Item
                            </DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Danger Action
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Layout Guidelines</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Spacing & Alignment</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Consistent padding (16px recommended)</li>
                        <li>• Aligned icons and text</li>
                        <li>• Clear item separation</li>
                        <li>• Adequate touch targets (44px)</li>
                        <li>• Proper text wrapping</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Responsive Behavior</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Mobile-first approach</li>
                        <li>• Adaptive width and height</li>
                        <li>• Dynamic positioning</li>
                        <li>• Scrollable when needed</li>
                        <li>• Platform-specific adjustments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Menu States */}
          <TabsContent value="states" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Menu States & Interactions</CardTitle>
                <CardDescription>
                  Comprehensive guide to menu states, transitions, and interaction feedback based on Material Design, 
                  Apple HIG, and Adobe Spectrum guidelines.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Menu Item States</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Interactive States</h5>
                        <div className="space-y-2">
                          <div className="p-2 rounded bg-background hover:bg-accent">
                            Default State
                          </div>
                          <div className="p-2 rounded bg-accent">
                            Hover State
                          </div>
                          <div className="p-2 rounded bg-accent/80">
                            Active/Pressed State
                          </div>
                          <div className="p-2 rounded bg-muted text-muted-foreground">
                            Disabled State
                          </div>
                          <div className="p-2 rounded bg-accent ring-2 ring-ring ring-offset-2">
                            Focused State
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Selection States</h5>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">Selection Demo</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuCheckboxItem checked>
                              Selected Item
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                              Unselected Item
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value="option1">
                              <DropdownMenuRadioItem value="option1">
                                Radio Selected
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="option2">
                                Radio Unselected
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Menu Container States</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Open/Close States</h5>
                        <div className="space-y-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button>
                                <MenuIcon className="mr-2 h-4 w-4" />
                                Click to Open
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>Option 1</DropdownMenuItem>
                              <DropdownMenuItem>Option 2</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Loading States</h5>
                        <div className="space-y-2">
                          <Button disabled className="w-full">
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Loading...
                          </Button>
                          <div className="p-4 rounded bg-muted space-y-2">
                            <div className="h-4 bg-muted-foreground/20 rounded animate-pulse" />
                            <div className="h-4 bg-muted-foreground/20 rounded animate-pulse" />
                            <div className="h-4 bg-muted-foreground/20 rounded animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Feedback & Validation States</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Success/Error States</h5>
                      <div className="space-y-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">Action States</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem className="text-green-600 dark:text-green-400">
                              <Check className="mr-2 h-4 w-4" />
                              Action Completed
                            </DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                              <AlertCircle className="mr-2 h-4 w-4" />
                              Action Failed
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                              <Info className="mr-2 h-4 w-4" />
                              Processing...
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Confirmation States</h5>
                      <div className="space-y-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">Destructive Action</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem variant="destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Item
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel className="text-xs text-muted-foreground">
                              This action cannot be undone
                            </DropdownMenuLabel>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Platform-Specific States</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Touch Interactions</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Touch highlight feedback</li>
                        <li>• Ripple effects (Material)</li>
                        <li>• Haptic feedback</li>
                        <li>• Gesture transitions</li>
                        <li>• Press-and-hold states</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Desktop Interactions</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Hover effects</li>
                        <li>• Focus indicators</li>
                        <li>• Keyboard navigation states</li>
                        <li>• Right-click context</li>
                        <li>• Tooltip states</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Animation & Transitions</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Opening/Closing</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Scale and fade animations</li>
                        <li>• Direction-based transitions</li>
                        <li>• Smooth easing curves</li>
                        <li>• Coordinated motion</li>
                        <li>• Performance optimization</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">State Changes</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Smooth color transitions</li>
                        <li>• Icon animations</li>
                        <li>• Loading indicators</li>
                        <li>• Selection animations</li>
                        <li>• Error/success transitions</li>
                      </ul>
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
                <CardTitle>Menu Accessibility</CardTitle>
                <CardDescription>
                  Essential accessibility features and best practices for creating inclusive menu experiences that work for all users.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Keyboard Navigation</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-muted rounded-lg">
                        <h5 className="font-medium mb-2">Essential Shortcuts</h5>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Open menu</span>
                            <kbd className="px-2 py-1 bg-background rounded text-xs">Space/Enter</kbd>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Navigate items</span>
                            <kbd className="px-2 py-1 bg-background rounded text-xs">↑/↓</kbd>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Access submenu</span>
                            <kbd className="px-2 py-1 bg-background rounded text-xs">→</kbd>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Exit submenu</span>
                            <kbd className="px-2 py-1 bg-background rounded text-xs">←</kbd>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Close menu</span>
                            <kbd className="px-2 py-1 bg-background rounded text-xs">Esc</kbd>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Jump to first/last</span>
                            <kbd className="px-2 py-1 bg-background rounded text-xs">Home/End</kbd>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Type-Ahead Navigation</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Users can type characters to jump to matching menu items.
                        </p>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">Try Type-Ahead</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Print Document</DropdownMenuItem>
                            <DropdownMenuItem>Save File</DropdownMenuItem>
                            <DropdownMenuItem>Share Link</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Implementation</h4>
                    <div className="space-y-3">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Role Assignments</h5>
                        <div className="space-y-2 text-sm">
                          <p className="font-mono bg-muted p-1 rounded">role="menu"</p>
                          <p className="font-mono bg-muted p-1 rounded">role="menuitem"</p>
                          <p className="font-mono bg-muted p-1 rounded">role="menuitemcheckbox"</p>
                          <p className="font-mono bg-muted p-1 rounded">role="menuitemradio"</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">State Management</h5>
                        <div className="space-y-2 text-sm">
                          <p className="font-mono bg-muted p-1 rounded">aria-expanded="true/false"</p>
                          <p className="font-mono bg-muted p-1 rounded">aria-checked="true/false/mixed"</p>
                          <p className="font-mono bg-muted p-1 rounded">aria-disabled="true/false"</p>
                          <p className="font-mono bg-muted p-1 rounded">aria-haspopup="true"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Screen Reader Support</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Descriptive Labels</h5>
                      <div className="space-y-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" aria-label="User settings menu">
                              <User className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem aria-label="Edit profile settings">
                              <Edit3 className="mr-2 h-4 w-4" />
                              Edit Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem aria-label="View notification preferences">
                              <Bell className="mr-2 h-4 w-4" />
                              Notifications
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <p className="text-sm text-muted-foreground">
                          Clear, descriptive labels for icons and actions
                        </p>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Live Announcements</h5>
                      <div className="space-y-2 text-sm">
                        <div className="p-2 bg-muted rounded">
                          Menu opened
                          <span className="text-muted-foreground ml-2">(announced)</span>
                        </div>
                        <div className="p-2 bg-muted rounded">
                          Option selected
                          <span className="text-muted-foreground ml-2">(announced)</span>
                        </div>
                        <div className="p-2 bg-muted rounded">
                          Menu closed
                          <span className="text-muted-foreground ml-2">(announced)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Focus Management</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Focus Behavior</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Focus moves to first menu item on open</li>
                        <li>• Focus is trapped within open menu</li>
                        <li>• Focus returns to trigger on close</li>
                        <li>• Focus visible at all times</li>
                        <li>• Focus ring follows system preferences</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Focus Indicators</h5>
                      <div className="space-y-2">
                        <div className="p-2 rounded bg-accent ring-2 ring-ring ring-offset-2">
                          Focused menu item
                        </div>
                        <div className="p-2 rounded bg-muted">
                          Unfocused menu item
                        </div>
                        <p className="text-sm text-muted-foreground">
                          High contrast focus indicators that meet WCAG requirements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Additional Considerations</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Motion & Animation</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Respects reduced motion preferences</li>
                        <li>• No flashing or blinking content</li>
                        <li>• Smooth transitions for context</li>
                        <li>• Optional animation effects</li>
                        <li>• Stable positioning during updates</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Visual Design</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Sufficient color contrast (4.5:1)</li>
                        <li>• Multiple visual state indicators</li>
                        <li>• Clear visual hierarchy</li>
                        <li>• Consistent spacing and alignment</li>
                        <li>• Adequate touch targets (44px)</li>
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
            if (url.includes('paste.twilio.design')) return 'Twilio Paste - Menu Component'
            if (url.includes('base.uber.com')) return 'Uber Base Design - Menu'
            return url
          }}
        />
        </div>
      </div>
    </div>
  )
} 