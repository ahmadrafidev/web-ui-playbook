"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { ComponentReferences } from "@/components/component-references"
import { Home, Settings, User, Bell, FileText, X, Plus } from "lucide-react"

const tabsComponentsUrlReference = [
  "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",
  "https://spectrum.adobe.com/page/tabs/", 
  "https://m3.material.io/components/tabs/guidelines",
  "https://carbondesignsystem.com/components/tabs/usage/",
  "https://polaris-react.shopify.com/components/navigation/tabs",
  "https://base.uber.com/6d2425e9f/p/2345e5-tabs"
]

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState("purpose")
  const [verticalTab, setVerticalTab] = useState("profile")
  const [dynamicTabs, setDynamicTabs] = useState([
    { id: "1", title: "Tab 1", content: "Content for Tab 1" },
    { id: "2", title: "Tab 2", content: "Content for Tab 2" },
    { id: "3", title: "Tab 3", content: "Content for Tab 3" }
  ])

  const addNewTab = () => {
    const newId = (dynamicTabs.length + 1).toString()
    setDynamicTabs([...dynamicTabs, { 
      id: newId, 
      title: `Tab ${newId}`, 
      content: `Content for Tab ${newId}` 
    }])
  }

  const removeTab = (id: string) => {
    if (dynamicTabs.length > 1) {
      setDynamicTabs(dynamicTabs.filter(tab => tab.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-5xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Tabs</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Tabs are used to organize related content into sections that can be navigated without leaving the current page. 
            They allow users to switch between different views of related information efficiently, with only one panel visible at a time.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Navigation</Badge>
            <Badge>Content Organization</Badge>
            <Badge>Keyboard Accessible</Badge>
            <Badge>ARIA Compliant</Badge>
            <Badge>Responsive</Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose of Tabs */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Purpose of Tabs</CardTitle>
                <CardDescription>
                  Understanding when and why to use tabs in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Content Organization:</strong> Group related information into logical sections</li>
                      <li>• <strong>Space Efficiency:</strong> Present multiple content areas in a compact interface</li>
                      <li>• <strong>Context Preservation:</strong> Navigate content without losing current page context</li>
                      <li>• <strong>Progressive Disclosure:</strong> Show relevant content based on user intent</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">When to Use Tabs</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Tabs When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Content is related but distinct</li>
                          <li>• Users don&apos;t need to compare information</li>
                          <li>• Space is limited</li>
                          <li>• Content can be consumed independently</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                        <strong className="text-red-800 dark:text-red-200">Avoid Tabs When:</strong>
                        <ul className="text-sm mt-1 text-red-700 dark:text-red-300">
                          <li>• Users need to compare content side by side</li>
                          <li>• Information spans across multiple sections</li>
                          <li>• Sequential workflow is required</li>
                          <li>• Only one or two sections exist</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Basic Tabs Example</h4>
                  <div className="border rounded-lg p-4">
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="details">Details</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                      </TabsList>
                      <TabsContent value="overview" className="mt-4 p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Project Overview</h5>
                        <p className="text-sm text-muted-foreground">
                          This is the overview section containing general information about the project.
                        </p>
                      </TabsContent>
                      <TabsContent value="details" className="mt-4 p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Project Details</h5>
                        <p className="text-sm text-muted-foreground">
                          Detailed specifications and technical information about the project.
                        </p>
                      </TabsContent>
                      <TabsContent value="settings" className="mt-4 p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Project Settings</h5>
                        <p className="text-sm text-muted-foreground">
                          Configuration options and preferences for this project.
                        </p>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Anatomy */}
          <TabsContent value="anatomy" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Tab Component Anatomy</CardTitle>
                <CardDescription>
                  Understanding the essential parts and structure of tab components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Essential Components</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Tab List (tablist):</strong> Container for all tab triggers</li>
                      <li>• <strong>Tab (tab):</strong> Interactive element that labels each panel</li>
                      <li>• <strong>Tab Panel (tabpanel):</strong> Content area associated with each tab</li>
                      <li>• <strong>Active Indicator:</strong> Visual indicator showing current selection</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ARIA Roles & Properties</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <code>role=&quot;tablist&quot;</code> - Container element</li>
                      <li>• <code>role=&quot;tab&quot;</code> - Each tab trigger</li>
                      <li>• <code>role=&quot;tabpanel&quot;</code> - Each content panel</li>
                      <li>• <code>aria-selected</code> - Current active tab</li>
                      <li>• <code>aria-controls</code> - Links tab to its panel</li>
                      <li>• <code>aria-labelledby</code> - Links panel to its tab</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Visual Anatomy</h4>
                  <div className="border rounded-lg p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="space-y-4">
                      {/* Tab List */}
                      <div className="flex border-b border-gray-300 dark:border-gray-600">
                        <div className="px-4 py-2 border-b-2 border-blue-500 bg-white dark:bg-gray-800 text-blue-600 font-medium">
                          Tab 1 (Active)
                        </div>
                        <div className="px-4 py-2 text-gray-600 dark:text-gray-400">
                          Tab 2
                        </div>
                        <div className="px-4 py-2 text-gray-600 dark:text-gray-400">
                          Tab 3
                        </div>
                      </div>
                      
                      {/* Tab Panel */}
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <h5 className="font-medium mb-2">Tab Panel Content</h5>
                        <p className="text-sm text-muted-foreground">
                          This is the content area that changes based on the selected tab.
                        </p>
                      </div>
                    </div>
                    
                    {/* Annotations */}
                    <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-2"></div>
                        <span>Active Indicator</span>
                      </div>
                      <div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full inline-block mr-2"></div>
                        <span>Tab Labels</span>
                      </div>
                      <div>
                        <div className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></div>
                        <span>Tab Panel</span>
                      </div>
                      <div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full inline-block mr-2"></div>
                        <span>Container</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Tab Patterns & Use Cases</CardTitle>
                <CardDescription>
                  Common patterns and real-world applications for tab components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Tabs with Icons</h4>
                    <div className="border rounded-lg p-4">
                      <Tabs defaultValue="home" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="home" className="flex items-center gap-2">
                            <Home className="h-4 w-4" />
                            Home
                          </TabsTrigger>
                          <TabsTrigger value="profile" className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Profile
                          </TabsTrigger>
                          <TabsTrigger value="notifications" className="flex items-center gap-2">
                            <Bell className="h-4 w-4" />
                            Notifications
                          </TabsTrigger>
                          <TabsTrigger value="settings" className="flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            Settings
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="home" className="mt-4 p-4 border rounded-lg">
                          <h5 className="font-medium mb-2">Home Dashboard</h5>
                          <p className="text-sm text-muted-foreground">Your personal dashboard with recent activity.</p>
                        </TabsContent>
                        <TabsContent value="profile" className="mt-4 p-4 border rounded-lg">
                          <h5 className="font-medium mb-2">User Profile</h5>
                          <p className="text-sm text-muted-foreground">Manage your personal information and preferences.</p>
                        </TabsContent>
                        <TabsContent value="notifications" className="mt-4 p-4 border rounded-lg">
                          <h5 className="font-medium mb-2">Notifications</h5>
                          <p className="text-sm text-muted-foreground">View and manage your notifications.</p>
                        </TabsContent>
                        <TabsContent value="settings" className="mt-4 p-4 border rounded-lg">
                          <h5 className="font-medium mb-2">Settings</h5>
                          <p className="text-sm text-muted-foreground">Configure your application preferences.</p>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Dynamic Tabs (Closeable)</h4>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Button 
                          onClick={addNewTab}
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-2"
                        >
                          <Plus className="h-4 w-4" />
                          Add Tab
                        </Button>
                      </div>
                      
                      <Tabs defaultValue="1" className="w-full">
                        <TabsList className="w-full justify-start">
                          {dynamicTabs.map((tab) => (
                            <TabsTrigger 
                              key={tab.id} 
                              value={tab.id}
                              className="group flex items-center gap-2 relative"
                            >
                              <FileText className="h-4 w-4" />
                              {tab.title}
                              {dynamicTabs.length > 1 && (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-4 w-4 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    removeTab(tab.id)
                                  }}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              )}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                        {dynamicTabs.map((tab) => (
                          <TabsContent key={tab.id} value={tab.id} className="mt-4 p-4 border rounded-lg">
                            <h5 className="font-medium mb-2">{tab.title}</h5>
                            <p className="text-sm text-muted-foreground">{tab.content}</p>
                          </TabsContent>
                        ))}
                      </Tabs>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Vertical Tabs</h4>
                    <div className="border rounded-lg p-4">
                      <div className="flex gap-4">
                        <div className="flex flex-col space-y-1 min-w-[150px]">
                          {[
                            { id: "profile", label: "Profile", icon: User },
                            { id: "account", label: "Account", icon: Settings },
                            { id: "notifications", label: "Notifications", icon: Bell },
                          ].map((item) => (
                            <button
                              key={item.id}
                              onClick={() => setVerticalTab(item.id)}
                              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors text-left ${
                                verticalTab === item.id
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-muted"
                              }`}
                            >
                              <item.icon className="h-4 w-4" />
                              {item.label}
                            </button>
                          ))}
                        </div>
                        <div className="flex-1 p-4 border rounded-lg">
                          {verticalTab === "profile" && (
                            <div>
                              <h5 className="font-medium mb-2">Profile Settings</h5>
                              <p className="text-sm text-muted-foreground">
                                Manage your personal profile information and visibility settings.
                              </p>
                            </div>
                          )}
                          {verticalTab === "account" && (
                            <div>
                              <h5 className="font-medium mb-2">Account Settings</h5>
                              <p className="text-sm text-muted-foreground">
                                Configure your account security and privacy preferences.
                              </p>
                            </div>
                          )}
                          {verticalTab === "notifications" && (
                            <div>
                              <h5 className="font-medium mb-2">Notification Preferences</h5>
                              <p className="text-sm text-muted-foreground">
                                Choose how and when you want to receive notifications.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Variants */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Tab Variants & Styles</CardTitle>
                <CardDescription>
                  Different visual styles and orientations for tab components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Line Tabs (Underline Style)</h4>
                    <div className="border rounded-lg p-4">
                      <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="-mb-px flex space-x-8">
                          <button className="py-2 px-1 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">
                            Current Tab
                          </button>
                          <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
                            Tab Two
                          </button>
                          <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
                            Tab Three
                          </button>
                        </nav>
                      </div>
                      <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                          Line tabs provide a clean, minimal approach with an underline indicator.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Pills/Rounded Tabs</h4>
                    <div className="border rounded-lg p-4">
                      <div className="flex space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <button className="px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-sm font-medium shadow-sm">
                          Active Tab
                        </button>
                        <button className="px-4 py-2 rounded-md text-gray-600 dark:text-gray-400 text-sm font-medium hover:bg-white/50 dark:hover:bg-gray-700/50">
                          Inactive
                        </button>
                        <button className="px-4 py-2 rounded-md text-gray-600 dark:text-gray-400 text-sm font-medium hover:bg-white/50 dark:hover:bg-gray-700/50">
                          Another Tab
                        </button>
                      </div>
                      <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                          Pill-style tabs offer a modern, contained appearance with rounded corners.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Card/Contained Tabs</h4>
                    <div className="border rounded-lg p-4">
                      <div className="flex bg-gray-50 dark:bg-gray-900 rounded-lg p-1">
                        <button className="flex-1 py-2 px-4 rounded-md bg-white dark:bg-gray-800 shadow-sm text-sm font-medium border">
                          Overview
                        </button>
                        <button className="flex-1 py-2 px-4 rounded-md text-gray-600 dark:text-gray-400 text-sm font-medium hover:bg-white/50 dark:hover:bg-gray-800/50">
                          Analytics
                        </button>
                        <button className="flex-1 py-2 px-4 rounded-md text-gray-600 dark:text-gray-400 text-sm font-medium hover:bg-white/50 dark:hover:bg-gray-800/50">
                          Reports
                        </button>
                      </div>
                      <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                          Contained tabs provide clear visual boundaries and work well for primary navigation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Size Variations</h4>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h5 className="text-sm font-medium mb-2">Small Tabs</h5>
                        <div className="flex space-x-1">
                          <button className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs">Small</button>
                          <button className="px-2 py-1 text-xs hover:bg-muted rounded">Compact</button>
                          <button className="px-2 py-1 text-xs hover:bg-muted rounded">Minimal</button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h5 className="text-sm font-medium mb-2">Large Tabs</h5>
                        <div className="flex space-x-2">
                          <button className="px-6 py-3 bg-primary text-primary-foreground rounded text-base font-medium">Large Active</button>
                          <button className="px-6 py-3 hover:bg-muted rounded text-base">Large Inactive</button>
                        </div>
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
                <CardTitle>Accessibility & Best Practices</CardTitle>
                <CardDescription>
                  Essential accessibility features and implementation guidelines for tabs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Keyboard Navigation</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <strong>Tab:</strong> Enter and exit tab list
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>Arrow Keys:</strong> Navigate between tabs
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>Space/Enter:</strong> Activate focused tab
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>Home/End:</strong> First/last tab (optional)
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Screen Reader Support</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Role:</strong> tablist, tab, tabpanel announced</li>
                      <li>• <strong>State:</strong> Selected/unselected status</li>
                      <li>• <strong>Count:</strong> &quot;Tab 2 of 4&quot; information</li>
                      <li>• <strong>Content:</strong> Associated panel content</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">ARIA Implementation</h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`<!-- Tab List Container -->
<div role="tablist" aria-label="Settings sections">
  
  <!-- Individual Tabs -->
  <button 
    role="tab" 
    aria-selected="true"
    aria-controls="panel-1"
    id="tab-1"
    tabindex="0"
  >
    General
  </button>
  
  <button 
    role="tab" 
    aria-selected="false"
    aria-controls="panel-2"
    id="tab-2"
    tabindex="-1"
  >
    Privacy
  </button>

</div>

<!-- Tab Panels -->
<div 
  role="tabpanel" 
  id="panel-1"
  aria-labelledby="tab-1"
  tabindex="0"
>
  General settings content...
</div>

<div 
  role="tabpanel" 
  id="panel-2"
  aria-labelledby="tab-2"
  tabindex="0"
  hidden
>
  Privacy settings content...
</div>`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Visual Accessibility</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-3">Focus Management</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Clear focus indicators on all tabs</li>
                        <li>• Logical tab order and keyboard flow</li>
                        <li>• Focus stays within tab list during navigation</li>
                        <li>• Focus moves to panel after activation</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-3">Visual Design</h5>
                      <ul className="text-sm space-y-1">
                        <li>• High contrast between active/inactive states</li>
                        <li>• Clear visual indicators for selection</li>
                        <li>• Adequate spacing for touch targets</li>
                        <li>• Color is not the only differentiator</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Best Practices</h4>
                  <div className="space-y-4">
                    <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do</h5>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Use clear, descriptive tab labels</li>
                        <li>• Implement proper ARIA attributes</li>
                        <li>• Provide keyboard navigation</li>
                        <li>• Use consistent visual patterns</li>
                        <li>• Test with assistive technologies</li>
                        <li>• Limit number of tabs (5-7 maximum)</li>
                      </ul>
                    </div>

                    <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                      <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don&apos;t</h5>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Use tabs for sequential workflows</li>
                        <li>• Hide critical information in tabs</li>
                        <li>• Use too many tabs in one set</li>
                        <li>• Forget to implement keyboard support</li>
                        <li>• Use tabs for comparison tasks</li>
                        <li>• Rely only on color for state indication</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Testing Checklist</h4>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Accessibility Testing</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                      <div>
                        <strong>Keyboard Testing:</strong>
                        <ul className="mt-1 space-y-1">
                          <li>□ Tab to enter tab list</li>
                          <li>□ Arrow keys navigate tabs</li>
                          <li>□ Space/Enter activates tabs</li>
                          <li>□ Focus indicators visible</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Screen Reader Testing:</strong>
                        <ul className="mt-1 space-y-1">
                          <li>□ Roles announced correctly</li>
                          <li>□ Selected state communicated</li>
                          <li>□ Tab count provided</li>
                          <li>□ Panel content accessible</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* References Section */}
        <div className="mt-8">
          <ComponentReferences
            title="References & Further Reading"
            description="Essential references for tab component implementation and accessibility best practices."
            urls={tabsComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('w3.org')) return 'W3C WAI-ARIA Authoring Practices - Tabs Pattern'
              if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Tabs Component'
              if (url.includes('m3.material.io')) return 'Material Design 3 - Tabs Guidelines' 
              if (url.includes('carbondesignsystem.com')) return 'Carbon Design System - Tabs Usage'
              if (url.includes('polaris-react.shopify.com')) return 'Shopify Polaris - Tabs Component'
              if (url.includes('base.uber.com')) return 'Uber Base Design System - Tabs'
              return url
            }}
          />
        </div>
      </div>
    </div>
  )
} 