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
  Menu as MenuIcon,
  Filter,
  Archive,
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  Shield,
  Palette,
  Monitor,
  Moon,
  Sun,
  Globe,
  Eye,
  EyeOff,
  Heart,
  Bookmark,
  Clock,
  Users,
  Home,
  Upload
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Badge } from "@/components/ui/badge"

const menuComponentsUrlReference = [
  "https://www.w3.org/WAI/tutorials/menus/",
  "https://developer.apple.com/design/human-interface-guidelines/menus",
  "https://spectrum.adobe.com/page/menu/",
  "https://m3.material.io/components/menus/accessibility",
  "https://primer.style/product/components/action-menu/accessibility/",
  "https://atlassian.design/components/menu/examples",
  "https://carbondesignsystem.com/components/overflow-menu/accessibility/",
  "https://paste.twilio.design/components/menu",
  "https://base.uber.com/6d2425e9f/p/2313a4-menu"
]

export default function MenuPage() {
  const { MobileWarning } = useMobileWarning()

  return (
    <div className="min-h-screen bg-background">
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h1 className="text-4xl font-bold text-foreground mb-2">Menu</h1>
            <EditButton filePath="app/playground/menu/page.tsx" />
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-base text-muted-foreground leading-relaxed">
              Menus display a list of choices or actions that users can select. They appear when triggered and 
              provide organized access to functionality ranging from simple options to complex navigation structures.
            </p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="interactions">Interactions</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MenuIcon className="h-5 w-5" />
                    Menu Anatomy
                  </CardTitle>
                <CardDescription>
                    Understanding the core components and structure of menu systems based on W3C WAI-ARIA guidelines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                      <h4 className="font-semibold mb-2">1. Menu Trigger</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Interactive element with proper ARIA attributes and keyboard support
                      </p>
                      <div className="space-y-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <User className="mr-2 h-4 w-4" />
                          Button Trigger
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          aria-label="Open context menu"
                          aria-haspopup="true"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-secondary">
                      <h4 className="font-semibold mb-2">2. Menu Container</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        ARIA menu role with proper keyboard navigation and focus management
                      </p>
                      <div className="border rounded-md p-3 bg-card shadow-sm" role="menu" aria-label="Example menu">
                        <div className="space-y-1">
                          <div className="p-2 text-sm hover:bg-accent rounded-sm cursor-pointer" role="menuitem" tabIndex={0}>
                            Menu Item
                          </div>
                          <div className="h-px bg-border my-1" role="separator"></div>
                          <div className="p-2 text-sm hover:bg-accent rounded-sm cursor-pointer" role="menuitem" tabIndex={-1}>
                            Another Item
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-accent">
                      <h4 className="font-semibold mb-2">3. Menu Items</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Semantic menu items with appropriate roles and keyboard shortcuts
                      </p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 p-2 hover:bg-accent rounded-sm text-sm" role="menuitem">
                          <Edit3 className="h-4 w-4" />
                          <span>Edit</span>
                          <kbd className="ml-auto text-xs bg-background px-1.5 py-0.5 rounded">⌘E</kbd>
                        </div>
                        <div className="flex items-center gap-2 p-2 text-muted-foreground text-sm" role="menuitem" aria-disabled="true">
                          <Copy className="h-4 w-4" />
                          <span>Copy (disabled)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Archive className="h-5 w-5" />
                    Menu Types & Patterns
                  </CardTitle>
                  <CardDescription>
                    Different menu variants following industry standards and accessibility guidelines
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                  <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Badge variant="secondary">ActionMenu</Badge>
                        GitHub Primer Pattern
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              Quick Actions
                          </Button>
                        </DropdownMenuTrigger>
                          <DropdownMenuContent role="menu" aria-label="Quick actions">
                            <DropdownMenuItem role="menuitem">
                            <Edit3 className="mr-2 h-4 w-4" />
                            Edit
                            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                          </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                            <Share className="mr-2 h-4 w-4" />
                            Share
                              <DropdownMenuShortcut>⌘⇧S</DropdownMenuShortcut>
                          </DropdownMenuItem>
                            <DropdownMenuSeparator role="separator" />
                            <DropdownMenuItem role="menuitem" className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              aria-label="User account menu"
                            >
                              <User className="mr-2 h-4 w-4" />
                              Profile
                          </Button>
                        </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" role="menu" aria-label="User account options">
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                            <DropdownMenuItem role="menuitem">
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                            <DropdownMenuItem role="menuitem">
                            <LogOut className="mr-2 h-4 w-4" />
                              Sign out
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Badge variant="secondary">Menubar</Badge>
                        Application Navigation
                      </h4>
                      <Menubar className="w-fit" role="menubar" aria-label="Main navigation">
                        <MenubarMenu>
                          <MenubarTrigger>File</MenubarTrigger>
                          <MenubarContent role="menu" aria-label="File operations">
                            <MenubarItem role="menuitem">New <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                            <MenubarItem role="menuitem">Open <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem role="menuitem">Save <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                          <MenubarTrigger>Edit</MenubarTrigger>
                          <MenubarContent role="menu" aria-label="Edit operations">
                            <MenubarItem role="menuitem">Cut <MenubarShortcut>⌘X</MenubarShortcut></MenubarItem>
                            <MenubarItem role="menuitem">Copy <MenubarShortcut>⌘C</MenubarShortcut></MenubarItem>
                            <MenubarItem role="menuitem">Paste <MenubarShortcut>⌘V</MenubarShortcut></MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                      </Menubar>
                </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Badge variant="secondary">Selection</Badge>
                        Choice Menus
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">Single Select</Button>
                      </DropdownMenuTrigger>
                          <DropdownMenuContent role="menu" aria-label="Single selection">
                            <DropdownMenuRadioGroup value="option1">
                              <DropdownMenuRadioItem value="option1" role="menuitemradio" aria-checked="true">
                                Option 1
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="option2" role="menuitemradio" aria-checked="false">
                                Option 2
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="option3" role="menuitemradio" aria-checked="false">
                                Option 3
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">Multi Select</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent role="menu" aria-label="Multiple selection">
                            <DropdownMenuCheckboxItem checked role="menuitemcheckbox" aria-checked="true">
                              Feature A
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem role="menuitemcheckbox" aria-checked="false">
                              Feature B
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked role="menuitemcheckbox" aria-checked="true">
                              Feature C
                            </DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                      </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Composed Menu Variants</CardTitle>
                <CardDescription>Advanced trigger patterns and menu composition techniques from modern design systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Badge Menu Triggers</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Using badges as menu triggers for dynamic identifiers and status indicators
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Badge variant="success" className="cursor-pointer hover:bg-green-600">
                              Available
                            </Badge>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent role="menu" aria-label="Status options">
                            <DropdownMenuItem role="menuitem">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Available
                              </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                Busy
                              </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                Do not disturb
                              </div>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Badge variant="destructive" className="cursor-pointer hover:bg-red-600">
                              3 Alerts
                            </Badge>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-64" role="menu" aria-label="Alert notifications">
                            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem role="menuitem">
                              <AlertCircle className="mr-2 h-4 w-4 text-red-500" />
                              <div className="flex flex-col">
                                <span className="font-medium">High CPU usage</span>
                                <span className="text-xs text-muted-foreground">2 minutes ago</span>
                              </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <Info className="mr-2 h-4 w-4 text-blue-500" />
                              <div className="flex flex-col">
                                <span className="font-medium">System update available</span>
                                <span className="text-xs text-muted-foreground">5 minutes ago</span>
                              </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem role="menuitem">
                              <Eye className="mr-2 h-4 w-4" />
                              View all notifications
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Overflow Menu Pattern</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Space-efficient pattern for presenting additional actions when horizontal space is limited
                      </p>
                      <div className="flex items-center gap-2 p-3 border rounded-lg">
                        <Button size="sm">Primary Action</Button>
                        <Button variant="outline" size="sm">Secondary</Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              aria-label="More actions"
                              aria-haspopup="true"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" role="menu" aria-label="Additional actions">
                            <DropdownMenuItem role="menuitem">
                              <Archive className="mr-2 h-4 w-4" />
                              Archive
                            </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <Star className="mr-2 h-4 w-4" />
                              Add to favorites
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem role="menuitem">
                              <Share className="mr-2 h-4 w-4" />
                              Share
                            </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <Download className="mr-2 h-4 w-4" />
                              Export
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Icon-Only Triggers</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Minimal triggers with comprehensive accessibility labels and touch-friendly sizing
                      </p>
                      <div className="flex gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="w-10 h-10"
                              aria-label="Sort and filter options"
                            >
                              <ArrowUpDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent role="menu" aria-label="Sort and filter">
                            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value="name">
                              <DropdownMenuRadioItem value="name" role="menuitemradio">
                                Name
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="date" role="menuitemradio">
                                Date modified
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="size" role="menuitemradio">
                                Size
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Filter</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked role="menuitemcheckbox">
                              Show hidden files
                            </DropdownMenuCheckboxItem>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="w-10 h-10"
                              aria-label="View options and display settings"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent role="menu" aria-label="View options">
                            <DropdownMenuLabel>View mode</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem role="menuitem">
                              <div className="grid grid-cols-2 gap-1 mr-2">
                                <div className="w-2 h-2 bg-current rounded-sm"></div>
                                <div className="w-2 h-2 bg-current rounded-sm"></div>
                                <div className="w-2 h-2 bg-current rounded-sm"></div>
                                <div className="w-2 h-2 bg-current rounded-sm"></div>
                              </div>
                              Grid view
                            </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <div className="flex flex-col gap-0.5 mr-2">
                                <div className="w-4 h-0.5 bg-current rounded"></div>
                                <div className="w-4 h-0.5 bg-current rounded"></div>
                                <div className="w-4 h-0.5 bg-current rounded"></div>
                              </div>
                              List view
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked role="menuitemcheckbox">
                              Show details
                            </DropdownMenuCheckboxItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Split Button Pattern</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Combines primary action with related secondary actions in a cohesive interface
                      </p>
                      <div className="flex">
                        <Button className="rounded-r-none border-r-0">
                          Save Document
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              className="rounded-l-none px-2"
                              aria-label="Save options"
                            >
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" role="menu" aria-label="Save options">
                            <DropdownMenuItem role="menuitem">
                              <Download className="mr-2 h-4 w-4" />
                              Save as...
                            </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <Copy className="mr-2 h-4 w-4" />
                              Save a copy
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem role="menuitem">
                              <Share className="mr-2 h-4 w-4" />
                              Save and share
                            </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <Archive className="mr-2 h-4 w-4" />
                              Save as template
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>W3C WAI-ARIA Design Principles</CardTitle>
                <CardDescription>Core accessibility principles for creating inclusive menu experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <h4 className="font-semibold">Semantic Structure</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Use proper ARIA roles (menu, menuitem, menubar) and semantic HTML to convey structure to assistive technologies.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Command className="h-4 w-4 text-secondary-foreground" />
                      </div>
                      <h4 className="font-semibold">Keyboard Navigation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Full keyboard operability with arrow keys, Enter, Escape, and Tab following desktop application patterns.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <Eye className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <h4 className="font-semibold">Focus Management</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Visible focus indicators, proper focus trap, and logical focus order that preserves user context.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility Guidelines Summary</CardTitle>
                <CardDescription>Key requirements from WCAG 2.1 and WAI-ARIA authoring practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h4 className="font-semibold">Required ARIA Attributes</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <code className="text-sm font-mono">role="menu"</code>
                        <p className="text-xs text-muted-foreground mt-1">Container for menu items</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <code className="text-sm font-mono">aria-haspopup="true"</code>
                        <p className="text-xs text-muted-foreground mt-1">Indicates trigger has popup</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <code className="text-sm font-mono">aria-expanded</code>
                        <p className="text-xs text-muted-foreground mt-1">Current state of menu</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <code className="text-sm font-mono">aria-label</code>
                        <p className="text-xs text-muted-foreground mt-1">Descriptive menu purpose</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Keyboard Requirements</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <span>Open menu</span>
                        <div className="flex gap-1">
                          <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">Enter</kbd>
                          <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">Space</kbd>
                          <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">↓</kbd>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <span>Navigate items</span>
                        <div className="flex gap-1">
                          <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">↑</kbd>
                          <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">↓</kbd>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <span>Close menu</span>
                        <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">Esc</kbd>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <span>Type-ahead</span>
                        <span className="text-xs text-muted-foreground">Letter keys</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Touch & Mobile Considerations</CardTitle>
                <CardDescription>Design principles for optimal touch interaction and mobile accessibility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Touch Target Guidelines</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Minimum Size</span>
                          <code className="text-xs bg-background px-2 py-1 rounded">44x44px</code>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Ensures accessible touch targets for users with motor impairments
                        </p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Spacing</span>
                          <code className="text-xs bg-background px-2 py-1 rounded">8px min</code>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Adequate spacing prevents accidental activation of adjacent items
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Responsive Behavior</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm font-medium block mb-1">Adaptive Positioning</span>
                        <p className="text-xs text-muted-foreground">
                          Automatically adjusts menu position based on viewport constraints and scroll position
                        </p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm font-medium block mb-1">Progressive Enhancement</span>
                        <p className="text-xs text-muted-foreground">
                          Gracefully degrades to touch-friendly interactions on mobile devices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns */}
          <TabsContent value="patterns" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                  <CardTitle>Repository Management Menus</CardTitle>
                <CardDescription>
                    Common menu patterns found in GitHub's repository interface
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                      <h4 className="font-semibold mb-3">Repository Actions</h4>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                            <Plus className="mr-2 h-4 w-4" />
                            Add file
                            </Button>
                          </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" role="menu" aria-label="Add file options">
                          <DropdownMenuItem role="menuitem">
                            <File className="mr-2 h-4 w-4" />
                            Create new file
                          </DropdownMenuItem>
                          <DropdownMenuItem role="menuitem">
                            <Upload className="mr-2 h-4 w-4" />
                            Upload files
                          </DropdownMenuItem>
                            <DropdownMenuSeparator />
                          <DropdownMenuItem role="menuitem">
                            <Folder className="mr-2 h-4 w-4" />
                            Create new directory
                          </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div>
                      <h4 className="font-semibold mb-3">Issue & PR Management</h4>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                            <Filter className="mr-2 h-4 w-4" />
                            Filters
                            </Button>
                          </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64" role="menu" aria-label="Filter options">
                          <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger role="menuitem" aria-haspopup="true">
                              <User className="mr-2 h-4 w-4" />
                              Author
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent role="menu" aria-label="Filter by author">
                              <DropdownMenuItem role="menuitem">@username1</DropdownMenuItem>
                              <DropdownMenuItem role="menuitem">@username2</DropdownMenuItem>
                              <DropdownMenuItem role="menuitem">@username3</DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger role="menuitem" aria-haspopup="true">
                              <Star className="mr-2 h-4 w-4" />
                              Label
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent role="menu" aria-label="Filter by label">
                              <DropdownMenuItem role="menuitem">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                  bug
                      </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem role="menuitem">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                  enhancement
                    </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem role="menuitem">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                  documentation
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem role="menuitem">
                            <Search className="mr-2 h-4 w-4" />
                            Advanced search
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                  </div>

                  <div>
                      <h4 className="font-semibold mb-3">Code Actions</h4>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="primary">
                            <Download className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-72" role="menu" aria-label="Code download options">
                          <DropdownMenuLabel>Clone</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem role="menuitem" className="flex-col items-start gap-2">
                            <div className="flex items-center w-full">
                              <Globe className="mr-2 h-4 w-4" />
                              HTTPS
                            </div>
                            <div className="w-full p-2 bg-muted rounded text-xs font-mono">
                              https://github.com/user/repo.git
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem role="menuitem" className="flex-col items-start gap-2">
                            <div className="flex items-center w-full">
                              <Command className="mr-2 h-4 w-4" />
                              SSH
                            </div>
                            <div className="w-full p-2 bg-muted rounded text-xs font-mono">
                              git@github.com:user/repo.git
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem role="menuitem">
                            <Download className="mr-2 h-4 w-4" />
                            Download ZIP
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Interface Patterns</CardTitle>
                  <CardDescription>
                    Advanced menu patterns for user accounts and application settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Profile Menu</h4>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="w-10 h-10 rounded-full">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <User className="h-4 w-4" />
                            </div>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" role="menu" aria-label="User profile menu">
                          <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                              <p className="text-sm font-medium leading-none">username</p>
                              <p className="text-xs leading-none text-muted-foreground">
                                user@example.com
                              </p>
                            </div>
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem role="menuitem">
                              <User className="mr-2 h-4 w-4" />
                              Your profile
                          </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <Star className="mr-2 h-4 w-4" />
                              Your stars
                          </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <Archive className="mr-2 h-4 w-4" />
                              Your repositories
                          </DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem role="menuitem">
                              <Users className="mr-2 h-4 w-4" />
                              Your organizations
                            </DropdownMenuItem>
                            <DropdownMenuItem role="menuitem">
                              <Settings className="mr-2 h-4 w-4" />
                              Settings
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem role="menuitem">
                            <HelpCircle className="mr-2 h-4 w-4" />
                            GitHub Support
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem role="menuitem">
                            <LogOut className="mr-2 h-4 w-4" />
                            Sign out
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Notification Settings</h4>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64" role="menu" aria-label="Notification preferences">
                          <DropdownMenuLabel>Email notifications</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem checked role="menuitemcheckbox" aria-checked="true">
                            <Mail className="mr-2 h-4 w-4" />
                            Issues and pull requests
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem role="menuitemcheckbox" aria-checked="false">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Comments
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem checked role="menuitemcheckbox" aria-checked="true">
                            <Star className="mr-2 h-4 w-4" />
                            Mentions
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel>Push notifications</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup value="enabled">
                            <DropdownMenuRadioItem value="enabled" role="menuitemradio" aria-checked="true">
                              Enabled
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="disabled" role="menuitemradio" aria-checked="false">
                              Disabled
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                </div>

                    <div>
                      <h4 className="font-semibold mb-3">Theme Switcher</h4>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            <Monitor className="mr-2 h-4 w-4" />
                            Theme
                        </Button>
                      </DropdownMenuTrigger>
                        <DropdownMenuContent role="menu" aria-label="Theme selection">
                          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup value="system">
                            <DropdownMenuRadioItem value="light" role="menuitemradio" aria-checked="false">
                              <Sun className="mr-2 h-4 w-4" />
                              Light
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="dark" role="menuitemradio" aria-checked="false">
                              <Moon className="mr-2 h-4 w-4" />
                              Dark
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="system" role="menuitemradio" aria-checked="true">
                              <Monitor className="mr-2 h-4 w-4" />
                              System
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                            <DropdownMenuSeparator />
                          <DropdownMenuItem role="menuitem">
                            <Palette className="mr-2 h-4 w-4" />
                            Color scheme settings
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Context Menu Patterns</CardTitle>
                <CardDescription>Right-click and contextual menu implementations for various UI scenarios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                  <div>
                      <h4 className="font-semibold mb-3">File Context Menu</h4>
                      <div className="p-4 border rounded-lg">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 hover:bg-accent rounded cursor-pointer"
                               onContextMenu={(e) => e.preventDefault()}>
                            <File className="h-4 w-4" />
                            <span className="text-sm">README.md</span>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="ml-auto">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent role="menu" aria-label="File actions">
                                <DropdownMenuItem role="menuitem">
                                  <Eye className="mr-2 h-4 w-4" />
                                  View file
                                </DropdownMenuItem>
                                <DropdownMenuItem role="menuitem">
                                  <Edit3 className="mr-2 h-4 w-4" />
                                  Edit file
                                </DropdownMenuItem>
                                <DropdownMenuItem role="menuitem">
                                  <Copy className="mr-2 h-4 w-4" />
                                  Copy path
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem role="menuitem">
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem role="menuitem" className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete file
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                      </div>
                          <p className="text-xs text-muted-foreground px-2">
                            Right-click or use menu button for context actions
                          </p>
                      </div>
                    </div>
                  </div>

                  <div>
                      <h4 className="font-semibold mb-3">Table Row Actions</h4>
                      <div className="border rounded-lg">
                        <div className="p-3 border-b bg-muted/50">
                          <div className="grid grid-cols-3 gap-4 text-sm font-medium">
                            <span>Name</span>
                            <span>Status</span>
                            <span>Actions</span>
                          </div>
                        </div>
                        <div className="divide-y">
                          {["Deploy to staging", "Run tests", "Build project"].map((name, index) => (
                            <div key={index} className="p-3 hover:bg-muted/50">
                              <div className="grid grid-cols-3 gap-4 items-center text-sm">
                                <span>{name}</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  Success
                                </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" role="menu" aria-label={`Actions for ${name}`}>
                                    <DropdownMenuItem role="menuitem">
                                      <Eye className="mr-2 h-4 w-4" />
                                      View details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem role="menuitem">
                                      <Copy className="mr-2 h-4 w-4" />
                                      Copy logs
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem role="menuitem">
                                      <AlertCircle className="mr-2 h-4 w-4" />
                                      Re-run
                                    </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Multi-Select Actions</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 border rounded-lg bg-accent/20">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" checked className="rounded" />
                            <span className="text-sm font-medium">3 items selected</span>
                          </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                              <Button size="sm">
                                Bulk actions
                          </Button>
                        </DropdownMenuTrigger>
                            <DropdownMenuContent role="menu" aria-label="Bulk actions">
                              <DropdownMenuItem role="menuitem">
                                <Archive className="mr-2 h-4 w-4" />
                                Archive selected
                              </DropdownMenuItem>
                              <DropdownMenuItem role="menuitem">
                                <Star className="mr-2 h-4 w-4" />
                                Add to favorites
                              </DropdownMenuItem>
                              <DropdownMenuItem role="menuitem">
                                <Share className="mr-2 h-4 w-4" />
                                Share
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem role="menuitem" className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete selected
                              </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Command Palette</h4>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <Search className="mr-2 h-4 w-4" />
                            Search or jump to...
                            <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                              <span className="text-xs">⌘</span>K
                            </kbd>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-96" role="menu" aria-label="Command palette">
                          <div className="flex items-center border-b px-3">
                            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                            <input
                              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                              placeholder="Type a command or search..."
                            />
                          </div>
                          <div className="max-h-80 overflow-y-auto">
                            <div className="p-1">
                              <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
                              <DropdownMenuItem role="menuitem">
                                <Plus className="mr-2 h-4 w-4" />
                                Create new repository
                                <DropdownMenuShortcut>⌘⇧N</DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuItem role="menuitem">
                                <Search className="mr-2 h-4 w-4" />
                                Search repositories
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuItem role="menuitem">
                                <Settings className="mr-2 h-4 w-4" />
                                Open settings
                                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuLabel>Recent repositories</DropdownMenuLabel>
                              <DropdownMenuItem role="menuitem">
                                <Archive className="mr-2 h-4 w-4" />
                                user/awesome-project
                              </DropdownMenuItem>
                              <DropdownMenuItem role="menuitem">
                                <Archive className="mr-2 h-4 w-4" />
                                org/company-website
                              </DropdownMenuItem>
                            </div>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mobile-Optimized Patterns</CardTitle>
                <CardDescription>Touch-friendly menu patterns for mobile and tablet interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Bottom Sheet Style</h4>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button className="w-full min-h-[44px]">
                          <MenuIcon className="mr-2 h-5 w-5" />
                          Mobile Menu
                        </Button>
                        </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-64" align="start" side="bottom" role="menu" aria-label="Mobile navigation">
                        <DropdownMenuItem className="py-4" role="menuitem">
                          <Home className="mr-3 h-5 w-5" />
                          <span className="text-base">Home</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="py-4" role="menuitem">
                          <Search className="mr-3 h-5 w-5" />
                          <span className="text-base">Explore</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="py-4" role="menuitem">
                          <Bell className="mr-3 h-5 w-5" />
                          <span className="text-base">Notifications</span>
                          <Badge variant="destructive" className="ml-auto">3</Badge>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="py-4" role="menuitem">
                          <User className="mr-3 h-5 w-5" />
                          <span className="text-base">Profile</span>
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    <p className="text-xs text-muted-foreground">
                      Larger touch targets (44px minimum) with clear spacing
                    </p>
                    </div>
                    
                  <div className="space-y-3">
                    <h4 className="font-semibold">Swipe Actions Alternative</h4>
                    <div className="border rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <User className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">John Doe</div>
                            <div className="text-xs text-muted-foreground">2 hours ago</div>
                          </div>
                        </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="min-h-[44px] min-w-[44px]">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" role="menu" aria-label="Message actions">
                            <DropdownMenuItem className="py-3" role="menuitem">
                              <MessageSquare className="mr-3 h-4 w-4" />
                              Reply
                            </DropdownMenuItem>
                            <DropdownMenuItem className="py-3" role="menuitem">
                              <Heart className="mr-3 h-4 w-4" />
                              Like
                            </DropdownMenuItem>
                            <DropdownMenuItem className="py-3" role="menuitem">
                              <Share className="mr-3 h-4 w-4" />
                              Share
                            </DropdownMenuItem>
                          <DropdownMenuSeparator />
                            <DropdownMenuItem className="py-3 text-red-600" role="menuitem">
                              <Trash2 className="mr-3 h-4 w-4" />
                            Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Floating Action Menu</h4>
                    <div className="relative">
                      <div className="p-6 border-2 border-dashed rounded-lg text-center text-muted-foreground">
                        Content area
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            size="lg" 
                            className="absolute bottom-4 right-4 rounded-full w-14 h-14 shadow-lg"
                            aria-label="Quick actions"
                          >
                            <Plus className="h-6 w-6" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" side="top" role="menu" aria-label="Quick actions">
                          <DropdownMenuItem className="py-3" role="menuitem">
                            <Edit3 className="mr-3 h-4 w-4" />
                            New post
                          </DropdownMenuItem>
                          <DropdownMenuItem className="py-3" role="menuitem">
                            <MessageSquare className="mr-3 h-4 w-4" />
                            New message
                          </DropdownMenuItem>
                          <DropdownMenuItem className="py-3" role="menuitem">
                            <Calendar className="mr-3 h-4 w-4" />
                            New event
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interactions */}
          <TabsContent value="interactions" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                  <CardTitle>Trigger Behaviors</CardTitle>
                  <CardDescription>How users interact with menu triggers across different contexts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                  <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">Click/Tap Activation</h4>
                      <div className="space-y-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">Primary Click</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Menu opens on click</DropdownMenuItem>
                            <DropdownMenuItem>Standard interaction</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <p className="text-sm text-muted-foreground">
                          Most common activation method for buttons and interactive elements
                        </p>
                      </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">Keyboard Activation</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>
                          <span className="text-sm">or</span>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>
                          <span className="text-sm">to activate focused trigger</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>
                          <span className="text-sm">to focus menu trigger</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">Context Menu (Right-click)</h4>
                      <div 
                        className="p-4 border-2 border-dashed rounded-lg text-center text-sm text-muted-foreground cursor-pointer hover:border-primary/50"
                        onContextMenu={(e) => e.preventDefault()}
                      >
                        Right-click this area for context menu
                        <br />
                        <span className="text-xs">(Simulated - would show contextual actions)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Menu Positioning</CardTitle>
                  <CardDescription>Smart positioning that adapts to screen boundaries and context</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Standard Positions</h4>
                      <div className="space-y-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full">Bottom Start</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent side="bottom" align="start">
                            <DropdownMenuItem>Positioned below, left-aligned</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full">Bottom End</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent side="bottom" align="end">
                            <DropdownMenuItem>Positioned below, right-aligned</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full">Right</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent side="right">
                            <DropdownMenuItem>Positioned to the right</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      </div>

                    <div>
                      <h4 className="font-medium mb-2">Adaptive Behavior</h4>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <strong>Collision Detection</strong>
                          <p className="text-muted-foreground">Automatically flips position when near screen edges</p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <strong>Scroll Awareness</strong>
                          <p className="text-muted-foreground">Repositions or closes when trigger scrolls out of view</p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <strong>Viewport Constraints</strong>
                          <p className="text-muted-foreground">Ensures menu always stays within visible area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>State Management & Feedback</CardTitle>
                <CardDescription>Visual and interactive states that provide clear user feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Item States</h4>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                          <Button variant="outline">State Examples</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>Interactive States</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                            <Check className="mr-2 h-4 w-4" />
                            Normal State
                            </DropdownMenuItem>
                          <DropdownMenuItem disabled>
                            <AlertCircle className="mr-2 h-4 w-4" />
                            Disabled State
                            </DropdownMenuItem>
                          <DropdownMenuCheckboxItem checked>
                            Selected State
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                            Destructive Action
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Loading States</h4>
                      <div className="space-y-2">
                        <Button disabled className="w-full justify-start">
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Loading Menu...
                        </Button>
                        <div className="p-4 rounded-lg border space-y-2">
                          <div className="h-4 bg-muted rounded animate-pulse" />
                          <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                          <div className="h-px bg-border my-2" />
                          <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Action Feedback</h4>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">Action Results</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem className="text-green-600 dark:text-green-400">
                            <Check className="mr-2 h-4 w-4" />
                            Action Successful
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-orange-600 dark:text-orange-400">
                            <Clock className="mr-2 h-4 w-4" />
                            Action Pending
                          </DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">
                            <AlertCircle className="mr-2 h-4 w-4" />
                            Action Failed
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Confirmation Patterns</h4>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="destructive">Destructive Menu</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel className="text-destructive">
                            Danger Zone
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Account
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <div className="px-2 py-1.5 text-xs text-muted-foreground">
                            This action cannot be undone
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Advanced */}
          <TabsContent value="advanced" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                  <CardTitle>Command Palette Pattern</CardTitle>
                <CardDescription>
                    Searchable command interface inspired by VS Code and modern IDEs
                </CardDescription>
              </CardHeader>
                <CardContent className="space-y-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <Command className="mr-2 h-4 w-4" />
                        Command Palette
                        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                          <span className="text-xs">⌘</span>K
                        </kbd>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80">
                      <div className="flex items-center border-b px-3">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <input
                          className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Type a command or search..."
                        />
                          </div>
                      <div className="max-h-[300px] overflow-y-auto">
                        <div className="p-1">
                          <DropdownMenuLabel>Suggestions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <File className="mr-2 h-4 w-4" />
                            Create New File
                            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Search className="mr-2 h-4 w-4" />
                            Search Files
                            <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Open Settings
                            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel>Recent</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Clock className="mr-2 h-4 w-4" />
                            index.tsx
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Clock className="mr-2 h-4 w-4" />
                            components.tsx
                          </DropdownMenuItem>
                          </div>
                          </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Multi-Level Navigation</CardTitle>
                  <CardDescription>
                    Complex hierarchical menus with breadcrumb-style navigation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Globe className="mr-2 h-4 w-4" />
                        Browse Categories
                      </Button>
                          </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Main Categories</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <Monitor className="mr-2 h-4 w-4" />
                          Technology
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Web Development</DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>Frontend</DropdownMenuItem>
                              <DropdownMenuItem>Backend</DropdownMenuItem>
                              <DropdownMenuItem>Full Stack</DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Mobile Development</DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>iOS</DropdownMenuItem>
                              <DropdownMenuItem>Android</DropdownMenuItem>
                              <DropdownMenuItem>Cross-platform</DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                          <DropdownMenuItem>Data Science</DropdownMenuItem>
                          <DropdownMenuItem>DevOps</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <Palette className="mr-2 h-4 w-4" />
                          Design
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>UI/UX Design</DropdownMenuItem>
                          <DropdownMenuItem>Graphic Design</DropdownMenuItem>
                          <DropdownMenuItem>Brand Design</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                          </DropdownMenuContent>
                        </DropdownMenu>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Interaction Patterns</CardTitle>
                <CardDescription>
                  Sophisticated menu behaviors for power users and complex interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                  <div>
                      <h4 className="font-semibold mb-3">Contextual Menus</h4>
                      <div className="space-y-2">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Selected Item 1</span>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                        <div className="p-3 border rounded-lg bg-muted/50">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Bulk Selection (3 items)</span>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                          </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>Bulk Edit</DropdownMenuItem>
                                <DropdownMenuItem>Export Selected</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem variant="destructive">Delete All</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>

                    <div>
                      <h4 className="font-semibold mb-3">Smart Grouping</h4>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                          <Button variant="outline">Smart Actions</Button>
                          </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>Frequently Used</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Star className="mr-2 h-4 w-4" />
                            Favorite Action
                            </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Clock className="mr-2 h-4 w-4" />
                            Recent Action
                            </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel>All Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem>Action A</DropdownMenuItem>
                            <DropdownMenuItem>Action B</DropdownMenuItem>
                            <DropdownMenuItem>Action C</DropdownMenuItem>
                          </DropdownMenuGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Progressive Disclosure</h4>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                          <Button variant="outline">Advanced Options</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                          <DropdownMenuItem>Basic Action</DropdownMenuItem>
                          <DropdownMenuItem>Standard Option</DropdownMenuItem>
                            <DropdownMenuSeparator />
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <Settings className="mr-2 h-4 w-4" />
                              Advanced
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>Expert Mode</DropdownMenuItem>
                              <DropdownMenuItem>Debug Options</DropdownMenuItem>
                              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                          </DropdownMenuContent>
                        </DropdownMenu>
                </div>

                    <div>
                      <h4 className="font-semibold mb-3">Dynamic Content</h4>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">Dynamic Menu</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>
                            Online
                            <Badge variant="outline" className="ml-2">3</Badge>
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              User One
                    </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              User Two
                    </div>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel>
                            Offline
                            <Badge variant="secondary" className="ml-2">2</Badge>
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem disabled>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                              User Three
                  </div>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility */}
          <TabsContent value="accessibility" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Keyboard Navigation
                  </CardTitle>
                <CardDescription>
                    Complete keyboard support following WAI-ARIA guidelines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-3">Essential Shortcuts</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Open menu</span>
                        <div className="flex gap-1">
                          <kbd className="px-2 py-1 bg-background rounded text-xs">Space</kbd>
                          <span className="text-xs text-muted-foreground">or</span>
                          <kbd className="px-2 py-1 bg-background rounded text-xs">Enter</kbd>
                          </div>
                          </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Navigate items</span>
                        <div className="flex gap-1">
                          <kbd className="px-2 py-1 bg-background rounded text-xs">↑</kbd>
                          <kbd className="px-2 py-1 bg-background rounded text-xs">↓</kbd>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Open submenu</span>
                            <kbd className="px-2 py-1 bg-background rounded text-xs">→</kbd>
                          </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Close submenu</span>
                            <kbd className="px-2 py-1 bg-background rounded text-xs">←</kbd>
                          </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Close menu</span>
                            <kbd className="px-2 py-1 bg-background rounded text-xs">Esc</kbd>
                          </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Jump to first/last</span>
                        <div className="flex gap-1">
                          <kbd className="px-2 py-1 bg-background rounded text-xs">Home</kbd>
                          <kbd className="px-2 py-1 bg-background rounded text-xs">End</kbd>
                        </div>
                          </div>
                        </div>
                      </div>

                  <div>
                    <h4 className="font-semibold mb-3">Type-Ahead Search</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                      Users can type characters to quickly jump to matching menu items
                        </p>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                        <Button variant="outline">Try Type-Ahead (P, S, D)</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Print Document</DropdownMenuItem>
                            <DropdownMenuItem>Save File</DropdownMenuItem>
                        <DropdownMenuItem>Share Content</DropdownMenuItem>
                        <DropdownMenuItem>Download Copy</DropdownMenuItem>
                        <DropdownMenuItem>Delete Item</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Screen Reader Support
                  </CardTitle>
                  <CardDescription>
                    Comprehensive ARIA implementation for assistive technologies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">ARIA Roles & Properties</h4>
                        <div className="space-y-2 text-sm">
                      <div className="p-2 bg-muted rounded">
                        <code>role="menu"</code> - Menu container
                        </div>
                      <div className="p-2 bg-muted rounded">
                        <code>role="menuitem"</code> - Standard menu item
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <code>role="menuitemcheckbox"</code> - Checkable item
                        </div>
                      <div className="p-2 bg-muted rounded">
                        <code>role="menuitemradio"</code> - Radio button item
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <code>aria-expanded</code> - Submenu state
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <code>aria-haspopup</code> - Indicates submenu
                    </div>
                  </div>
                </div>

                  <div>
                    <h4 className="font-semibold mb-3">Descriptive Labels</h4>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                        <Button 
                          variant="outline" 
                          aria-label="User profile menu with account settings and logout options"
                        >
                              <User className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                        <DropdownMenuItem aria-label="Edit your profile information and preferences">
                              <Edit3 className="mr-2 h-4 w-4" />
                              Edit Profile
                            </DropdownMenuItem>
                        <DropdownMenuItem aria-label="Manage notification settings and preferences">
                              <Bell className="mr-2 h-4 w-4" />
                              Notifications
                            </DropdownMenuItem>
                        <DropdownMenuItem aria-label="Sign out of your account">
                          <LogOut className="mr-2 h-4 w-4" />
                          Log out
                        </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Focus Management & Visual Design</CardTitle>
                <CardDescription>
                  Ensuring clear focus indicators and proper focus flow for all users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Focus Behavior</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <span className="text-sm font-medium">Focus enters menu</span>
                          </div>
                        <p className="text-sm text-muted-foreground">
                            Focus moves to first menu item when menu opens
                        </p>
                      </div>
                        
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-secondary"></div>
                            <span className="text-sm font-medium">Focus trapped</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Tab navigation stays within open menu
                          </p>
                    </div>

                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-accent"></div>
                            <span className="text-sm font-medium">Focus returns</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Focus returns to trigger when menu closes
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Live Announcements</h4>
                      <div className="space-y-2 text-sm">
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                          <span className="font-medium">Menu opened</span>
                          <span className="text-muted-foreground ml-2">(announced to screen readers)</span>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                          <span className="font-medium">Option selected</span>
                          <span className="text-muted-foreground ml-2">(announced to screen readers)</span>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                          <span className="font-medium">Menu closed</span>
                          <span className="text-muted-foreground ml-2">(announced to screen readers)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Visual Considerations</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium mb-2">Color Contrast</h5>
                          <p className="text-sm text-muted-foreground mb-2">
                            Minimum 4.5:1 contrast ratio for text
                          </p>
                          <div className="flex gap-2">
                            <div className="p-2 bg-primary text-primary-foreground rounded text-sm">
                              High contrast
                            </div>
                            <div className="p-2 bg-muted text-muted-foreground rounded text-sm">
                              Muted content
                    </div>
                  </div>
                </div>

                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium mb-2">Motion Preferences</h5>
                          <p className="text-sm text-muted-foreground">
                            Respects <code>prefers-reduced-motion</code> setting
                          </p>
                    </div>

                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium mb-2">Touch Targets</h5>
                          <p className="text-sm text-muted-foreground mb-2">
                            Minimum 44px touch targets for mobile
                          </p>
                          <Button size="lg" className="min-h-[44px]">
                            Accessible Touch Target
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Focus Indicators</h4>
                      <div className="space-y-2">
                        <div className="p-3 rounded bg-accent ring-2 ring-ring ring-offset-2">
                          <span className="text-sm">Focused menu item with visible ring</span>
                        </div>
                        <div className="p-3 rounded bg-muted">
                          <span className="text-sm text-muted-foreground">Unfocused menu item</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          High-contrast focus indicators that are always visible
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Testing & Validation</CardTitle>
                <CardDescription>
                  Tools and techniques for ensuring your menus are accessible to all users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h4 className="font-semibold">Automated Testing</h4>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 border rounded-lg">
                        <strong>axe-core</strong>
                        <p className="text-muted-foreground">Automated accessibility testing</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>WAVE</strong>
                        <p className="text-muted-foreground">Web accessibility evaluation tool</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>Lighthouse</strong>
                        <p className="text-muted-foreground">Built-in accessibility auditing</p>
                      </div>
                    </div>
                    </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Manual Testing</h4>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 border rounded-lg">
                        <strong>Keyboard Navigation</strong>
                        <p className="text-muted-foreground">Test all functionality without mouse</p>
                    </div>
                      <div className="p-3 border rounded-lg">
                        <strong>Screen Reader</strong>
                        <p className="text-muted-foreground">Test with NVDA, JAWS, or VoiceOver</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>High Contrast</strong>
                        <p className="text-muted-foreground">Verify visibility in high contrast mode</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <ComponentReferences
          title="References & Further Reading"
            description="Industry standards and best practices for menu implementation and accessibility."
          urls={menuComponentsUrlReference}
          getTitleFunction={(url: string) => {
              if (url.includes('w3.org')) return 'W3C WAI - Menu Tutorial & ARIA Guidelines'
            if (url.includes('apple.com')) return 'Apple Human Interface Guidelines - Menus'
              if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Menu Design Patterns'
              if (url.includes('material.io')) return 'Material Design - Menu Accessibility Standards'
              if (url.includes('primer.style')) return 'GitHub Primer - Action Menu'
              if (url.includes('atlassian.design')) return 'Atlassian Design System - Menu Examples'
            if (url.includes('carbondesignsystem.com')) return 'Carbon Design System - Overflow Menu'
              if (url.includes('paste.twilio.design')) return 'Twilio Paste - Menu Component Library'
              if (url.includes('base.uber.com')) return 'Uber Base Design - Menu Patterns'
            return url
          }}
        />
        </div>
      </div>
    </div>
  )
} 