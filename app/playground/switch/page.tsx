"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"

const switchComponentsUrlReference = [
  "https://developer.apple.com/design/human-interface-guidelines/toggles",
  "https://m3.material.io/components/switch/guidelines",
  "https://carbondesignsystem.com/components/toggle/usage/",
  "https://blueprintjs.com/docs/#core/components/switch",
  "https://gestalt.pinterest.systems/web/switch",
  "https://base.uber.com/6d2425e9f/p/005456-switch",
  "https://www.w3.org/WAI/ARIA/apg/patterns/switch/"
]

export default function SwitchPage() {
  const [singleSwitch, setSingleSwitch] = useState(false)
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: false,
    sms: true,
    marketing: false
  })
  const [appPreferences, setAppPreferences] = useState({
    darkMode: false,
    notifications: true,
    autoPlay: false,
    locationSharing: true,
    dataSync: false
  })
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: true,
    activityStatus: false,
    analytics: false
  })

  const handleNotificationChange = (setting: keyof typeof notificationSettings, checked: boolean) => {
    setNotificationSettings(prev => ({ ...prev, [setting]: checked }))
  }

  const handleAppPreferenceChange = (setting: keyof typeof appPreferences, checked: boolean) => {
    setAppPreferences(prev => ({ ...prev, [setting]: checked }))
  }

  const handlePrivacyChange = (setting: keyof typeof privacySettings, checked: boolean) => {
    setPrivacySettings(prev => ({ ...prev, [setting]: checked }))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Switch</h2>
            <EditButton filePath="app/playground/switch/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Switches are used to quickly toggle between two possible states. They provide immediate feedback and are 
            ideal for settings that take effect instantly. Unlike checkboxes, switches clearly indicate an &quot;on&quot; or &quot;off&quot; 
            state and are commonly used for preferences, settings, and binary controls.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Binary Toggle</Badge>
            <Badge>Immediate Action</Badge>
            <Badge>Settings</Badge>
            <Badge>Accessible</Badge>
            <Badge>Touch Friendly</Badge>
          </div>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
            <TabsTrigger value="sizes">Sizes & Layout</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose of Switch */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Purpose of Switch</CardTitle>
                <CardDescription>
                  Understanding when and why to use switches in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Instant Toggle:</strong> Immediate state changes with visual feedback</li>
                      <li>• <strong>Settings Control:</strong> Enable/disable features and preferences</li>
                      <li>• <strong>Binary States:</strong> Clear on/off, enabled/disabled states</li>
                      <li>• <strong>Mobile Optimized:</strong> Touch-friendly interaction patterns</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Switch vs Checkbox vs Radio</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Switch When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Immediate effect required</li>
                          <li>• Settings and preferences</li>
                          <li>• Clear on/off states</li>
                          <li>• Mobile interfaces</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200">Use Checkbox When:</strong>
                        <ul className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                          <li>• Form submissions</li>
                          <li>• Multiple selections</li>
                          <li>• Agreement confirmations</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                        <strong className="text-purple-800 dark:text-purple-200">Use Radio When:</strong>
                        <ul className="text-sm mt-1 text-purple-700 dark:text-purple-300">
                          <li>• Single selection only</li>
                          <li>• Mutually exclusive options</li>
                          <li>• Limited choices (2-6 items)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Interactive Switch Examples</h4>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <Label htmlFor="demo-switch" className="text-base font-medium">Enable Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive updates and alerts</p>
                      </div>
                      <Switch 
                        id="demo-switch"
                        checked={singleSwitch}
                        onCheckedChange={setSingleSwitch}
                      />
                    </div>
                    
                    <div className="p-4 border rounded-lg space-y-4">
                      <h5 className="font-medium">Settings Panel Example</h5>
                      <div className="space-y-3">
                        {[
                          { id: 'wifi', label: 'Wi-Fi', checked: true },
                          { id: 'bluetooth', label: 'Bluetooth', checked: false },
                          { id: 'location', label: 'Location Services', checked: true },
                          { id: 'airplane', label: 'Airplane Mode', checked: false }
                        ].map((setting) => (
                          <div key={setting.id} className="flex items-center justify-between">
                            <Label htmlFor={setting.id} className="text-sm font-medium">
                              {setting.label}
                            </Label>
                            <Switch 
                              id={setting.id}
                              defaultChecked={setting.checked}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">When NOT to Use Switch</h4>
                  <div className="grid gap-3">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
                      <strong className="text-red-800 dark:text-red-200">Avoid for:</strong>
                      <ul className="text-sm mt-1 text-red-700 dark:text-red-300 space-y-1">
                        <li>• Actions requiring confirmation (like delete operations)</li>
                        <li>• Form submissions where state isn&apos;t immediately applied</li>
                        <li>• Multiple related options (use checkbox group instead)</li>
                        <li>• Choices that need additional context or explanation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* States */}
          <TabsContent value="states" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Switch States & Variants</CardTitle>
                <CardDescription>
                  Different states and visual feedback patterns for switches.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Basic States */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Basic States</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label htmlFor="switch-off" className="text-sm font-medium">Off State</Label>
                          <p className="text-xs text-muted-foreground">Default unchecked state</p>
                        </div>
                        <Switch id="switch-off" />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label htmlFor="switch-on" className="text-sm font-medium">On State</Label>
                          <p className="text-xs text-muted-foreground">Active checked state</p>
                        </div>
                        <Switch id="switch-on" defaultChecked />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                        <div>
                          <Label htmlFor="switch-disabled-off" className="text-sm font-medium opacity-50">Disabled Off</Label>
                          <p className="text-xs text-muted-foreground opacity-50">Cannot be toggled</p>
                        </div>
                        <Switch id="switch-disabled-off" disabled />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                        <div>
                          <Label htmlFor="switch-disabled-on" className="text-sm font-medium opacity-50">Disabled On</Label>
                          <p className="text-xs text-muted-foreground opacity-50">Locked in active state</p>
                        </div>
                        <Switch id="switch-disabled-on" disabled defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive States Demo */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Interactive States Demo</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <p className="text-sm text-muted-foreground">Try interacting with these switches to see state changes:</p>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="hover-demo" className="text-sm">Hover & Focus States</Label>
                        <Switch id="hover-demo" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="active-demo" className="text-sm">Active Press State</Label>
                        <Switch id="active-demo" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loading State Concept */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Loading & Processing States</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <p className="text-sm text-muted-foreground">
                      For switches that trigger async operations, consider showing loading states:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-sm font-medium">Processing State</Label>
                          <p className="text-xs text-muted-foreground">Disabled while saving...</p>
                        </div>
                        <Switch disabled className="opacity-75" />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        💡 <strong>Best Practice:</strong> Provide visual feedback during state transitions, 
                        especially for switches that trigger network requests or complex operations.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sizes & Layout */}
          <TabsContent value="sizes" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Sizes & Layout Patterns</CardTitle>
                <CardDescription>
                  Different sizing options and layout patterns for switches in various contexts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Size Variations */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Size Considerations</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <p className="text-sm text-muted-foreground">
                      The default switch size is optimized for both desktop and mobile interactions. 
                      Maintain consistent sizing within your interface for better usability.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium">Standard Switch (Recommended)</Label>
                        <Switch />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        • Minimum 44px touch target (iOS guidelines)
                        • Adequate spacing for finger interaction
                        • Clear visual feedback
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layout Patterns */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Layout Patterns</h4>
                  
                  {/* Right-aligned (Recommended) */}
                  <div className="space-y-3">
                    <h5 className="font-medium">Right-aligned (Recommended)</h5>
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="right-1" className="text-sm font-medium">Enable notifications</Label>
                          <p className="text-xs text-muted-foreground">Get alerts and updates</p>
                        </div>
                        <Switch id="right-1" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="right-2" className="text-sm font-medium">Dark mode</Label>
                          <p className="text-xs text-muted-foreground">Use dark theme</p>
                        </div>
                        <Switch id="right-2" />
                      </div>
                    </div>
                  </div>

                  {/* Left-aligned */}
                  <div className="space-y-3">
                    <h5 className="font-medium">Left-aligned (Alternative)</h5>
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <Switch id="left-1" />
                        <div>
                          <Label htmlFor="left-1" className="text-sm font-medium">Enable notifications</Label>
                          <p className="text-xs text-muted-foreground">Get alerts and updates</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Switch id="left-2" />
                        <div>
                          <Label htmlFor="left-2" className="text-sm font-medium">Dark mode</Label>
                          <p className="text-xs text-muted-foreground">Use dark theme</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compact Layout */}
                  <div className="space-y-3">
                    <h5 className="font-medium">Compact Layout</h5>
                    <div className="p-4 border rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="compact-1" className="text-sm">Wi-Fi</Label>
                          <Switch id="compact-1" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="compact-2" className="text-sm">Bluetooth</Label>
                          <Switch id="compact-2" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="compact-3" className="text-sm">Location</Label>
                          <Switch id="compact-3" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="compact-4" className="text-sm">Airplane</Label>
                          <Switch id="compact-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsive Considerations */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Responsive Considerations</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h6 className="font-medium text-sm">Mobile (Recommended)</h6>
                        <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                          <li>• Right-aligned switches</li>
                          <li>• Adequate touch targets (44px minimum)</li>
                          <li>• Clear labels and descriptions</li>
                          <li>• Sufficient spacing between items</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium text-sm">Desktop</h6>
                        <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                          <li>• Consistent with mobile patterns</li>
                          <li>• Hover states for better feedback</li>
                          <li>• Keyboard navigation support</li>
                          <li>• Focus indicators</li>
                        </ul>
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
                <CardTitle>Common Usage Patterns</CardTitle>
                <CardDescription>
                  Real-world examples and patterns for implementing switches effectively.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Settings Panel */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Settings & Preferences Panel</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <div className="space-y-1">
                      <h5 className="font-medium">Notification Settings</h5>
                      <p className="text-sm text-muted-foreground">Manage how you receive updates</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-notif" className="text-sm font-medium">Email Notifications</Label>
                          <p className="text-xs text-muted-foreground">Receive updates via email</p>
                        </div>
                        <Switch 
                          id="email-notif"
                          checked={notificationSettings.email}
                          onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-notif" className="text-sm font-medium">Push Notifications</Label>
                          <p className="text-xs text-muted-foreground">Get instant alerts</p>
                        </div>
                        <Switch 
                          id="push-notif"
                          checked={notificationSettings.push}
                          onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="sms-notif" className="text-sm font-medium">SMS Notifications</Label>
                          <p className="text-xs text-muted-foreground">Receive text messages</p>
                        </div>
                        <Switch 
                          id="sms-notif"
                          checked={notificationSettings.sms}
                          onCheckedChange={(checked) => handleNotificationChange('sms', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="marketing-notif" className="text-sm font-medium">Marketing Emails</Label>
                          <p className="text-xs text-muted-foreground">Promotional content</p>
                        </div>
                        <Switch 
                          id="marketing-notif"
                          checked={notificationSettings.marketing}
                          onCheckedChange={(checked) => handleNotificationChange('marketing', checked)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Preferences */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">App Preferences</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="space-y-1">
                        <h5 className="font-medium">Display & Behavior</h5>
                        <p className="text-sm text-muted-foreground">Customize your experience</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="dark-mode" className="text-sm">Dark Mode</Label>
                          <Switch 
                            id="dark-mode"
                            checked={appPreferences.darkMode}
                            onCheckedChange={(checked) => handleAppPreferenceChange('darkMode', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="auto-play" className="text-sm">Auto-play Videos</Label>
                          <Switch 
                            id="auto-play"
                            checked={appPreferences.autoPlay}
                            onCheckedChange={(checked) => handleAppPreferenceChange('autoPlay', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="app-notifications" className="text-sm">Notifications</Label>
                          <Switch 
                            id="app-notifications"
                            checked={appPreferences.notifications}
                            onCheckedChange={(checked) => handleAppPreferenceChange('notifications', checked)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="space-y-1">
                        <h5 className="font-medium">Data & Sync</h5>
                        <p className="text-sm text-muted-foreground">Control data usage</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="location-sharing" className="text-sm">Location Sharing</Label>
                          <Switch 
                            id="location-sharing"
                            checked={appPreferences.locationSharing}
                            onCheckedChange={(checked) => handleAppPreferenceChange('locationSharing', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="data-sync" className="text-sm">Background Sync</Label>
                          <Switch 
                            id="data-sync"
                            checked={appPreferences.dataSync}
                            onCheckedChange={(checked) => handleAppPreferenceChange('dataSync', checked)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Privacy Controls */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Privacy Controls</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="profile-visibility" className="text-sm font-medium">Profile Visibility</Label>
                        <p className="text-xs text-muted-foreground">Allow others to find your profile</p>
                      </div>
                      <Switch 
                        id="profile-visibility"
                        checked={privacySettings.profileVisibility}
                        onCheckedChange={(checked) => handlePrivacyChange('profileVisibility', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="activity-status" className="text-sm font-medium">Activity Status</Label>
                        <p className="text-xs text-muted-foreground">Show when you&apos;re online</p>
                      </div>
                      <Switch 
                        id="activity-status"
                        checked={privacySettings.activityStatus}
                        onCheckedChange={(checked) => handlePrivacyChange('activityStatus', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="analytics" className="text-sm font-medium">Usage Analytics</Label>
                        <p className="text-xs text-muted-foreground">Help improve our service</p>
                      </div>
                      <Switch 
                        id="analytics"
                        checked={privacySettings.analytics}
                        onCheckedChange={(checked) => handlePrivacyChange('analytics', checked)}
                      />
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Implementation Best Practices</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do</h5>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Use clear, descriptive labels</li>
                        <li>• Provide immediate visual feedback</li>
                        <li>• Group related switches logically</li>
                        <li>• Include helpful descriptions</li>
                        <li>• Maintain consistent alignment</li>
                        <li>• Use for settings that take effect immediately</li>
                      </ul>
                    </div>
                    <div className="p-4 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don&apos;t</h5>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Use for actions requiring confirmation</li>
                        <li>• Overcrowd with too many switches</li>
                        <li>• Use unclear or technical labels</li>
                        <li>• Mix switches with other form controls</li>
                        <li>• Forget to handle loading states</li>
                        <li>• Use for non-binary choices</li>
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
                <CardTitle>Accessibility Guidelines</CardTitle>
                <CardDescription>
                  Ensuring switches are accessible to all users, including those using assistive technologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* ARIA Support */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">ARIA Support & Screen Readers</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Switches automatically provide proper ARIA attributes for screen reader compatibility:
                    </p>
                    <div className="bg-muted p-3 rounded text-sm font-mono">
                      <div>role=&quot;switch&quot;</div>
                      <div>aria-checked=&quot;true|false&quot;</div>
                      <div>aria-labelledby=&quot;[label-id]&quot;</div>
                      <div>aria-describedby=&quot;[description-id]&quot;</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="aria-demo" className="text-sm font-medium">Accessible Switch Example</Label>
                          <p className="text-xs text-muted-foreground">Try with a screen reader</p>
                        </div>
                        <Switch id="aria-demo" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keyboard Navigation */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Keyboard Navigation</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      Switches support full keyboard interaction:
                    </p>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="space-y-3">
                        <div>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>
                          <span className="ml-2 text-sm">Focus the switch</span>
                        </div>
                        <div>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>
                          <span className="ml-2 text-sm">Toggle the switch state</span>
                        </div>
                        <div>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>
                          <span className="ml-2 text-sm">Toggle the switch state</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Shift + Tab</kbd>
                          <span className="ml-2 text-sm">Focus previous element</span>
                        </div>
                        <div>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd>
                          <span className="ml-2 text-sm">Remove focus (blur)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Try it:</strong> Use Tab to focus the switches below, then Space or Enter to toggle them.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="kbd-1" className="text-sm">Keyboard Test 1</Label>
                        <Switch id="kbd-1" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="kbd-2" className="text-sm">Keyboard Test 2</Label>
                        <Switch id="kbd-2" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="kbd-3" className="text-sm">Keyboard Test 3</Label>
                        <Switch id="kbd-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Focus Management */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Focus Management & Visual Indicators</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Proper focus indicators help users understand which element is currently active:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="focus-demo" className="text-sm font-medium">Focus Indicator Demo</Label>
                        <Switch id="focus-demo" />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Focus this switch with Tab key to see the focus ring indicator
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <h5 className="font-medium text-sm">Focus Requirements:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Clear visual focus indicator with sufficient contrast</li>
                        <li>• Focus ring should be clearly visible in both light and dark themes</li>
                        <li>• Focus state should persist until user interacts or moves focus</li>
                        <li>• Focus should be programmatically manageable</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Color & Contrast */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Color & Contrast Requirements</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Switch states must be distinguishable without relying solely on color:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-sm mb-2">WCAG Compliance:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Color contrast:</strong> Minimum 3:1 ratio for UI components</li>
                          <li>• <strong>State indication:</strong> Not dependent on color alone</li>
                          <li>• <strong>Focus indicators:</strong> Minimum 3:1 contrast ratio</li>
                          <li>• <strong>Text labels:</strong> Minimum 4.5:1 contrast ratio</li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="contrast-demo" className="text-sm font-medium">High Contrast Example</Label>
                          <p className="text-xs text-muted-foreground">Clear visual distinction between states</p>
                        </div>
                        <Switch id="contrast-demo" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Labels & Descriptions */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Labels & Descriptions</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Proper labeling is crucial for accessibility:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="label-demo" className="text-sm font-medium">Clear, Descriptive Label</Label>
                          <p className="text-xs text-muted-foreground">Additional context helps users understand the action</p>
                        </div>
                        <Switch id="label-demo" />
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <h5 className="font-medium text-sm">Best Practices for Labels:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Use descriptive text that explains what the switch controls</li>
                        <li>• Avoid generic labels like &quot;Toggle&quot; or &quot;Switch&quot;</li>
                        <li>• Include context about what happens when toggled</li>
                        <li>• Keep labels concise but meaningful</li>
                        <li>• Use consistent terminology throughout your interface</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Testing Guidelines */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Accessibility Testing</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Test your switch implementations with these tools and methods:
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h5 className="font-medium text-sm mb-2">Automated Testing:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• axe-core browser extension</li>
                          <li>• WAVE web accessibility evaluator</li>
                          <li>• Lighthouse accessibility audit</li>
                          <li>• Pa11y command line tool</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-2">Manual Testing:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Screen reader testing (NVDA, JAWS, VoiceOver)</li>
                          <li>• Keyboard-only navigation</li>
                          <li>• High contrast mode testing</li>
                          <li>• Color blindness simulation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Component References */}
        <div className="mt-12">
          <ComponentReferences
            description="External resources and design system references for switch components."
            urls={switchComponentsUrlReference}
            getTitleFunction={(url: string) => {
              if (url.includes('developer.apple.com')) return 'Apple Human Interface Guidelines'
              if (url.includes('m3.material.io')) return 'Material Design 3 Guidelines'
              if (url.includes('carbondesignsystem.com')) return 'IBM Carbon Design System'
              if (url.includes('blueprintjs.com')) return 'Blueprint UI Components'
              if (url.includes('gestalt.pinterest')) return 'Pinterest Gestalt Design System'
              if (url.includes('base.uber.com')) return 'Uber Base Design System'
              if (url.includes('w3.org')) return 'W3C ARIA Switch Pattern'
              return url
            }}
          />
        </div>
      </div>
    </div>
  )
} 