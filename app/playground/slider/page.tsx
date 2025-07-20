"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ComponentReferences } from "@/components/component-references"
import { EditButton } from "@/components/edit-button"
import { useMobileWarning } from "@/hooks/use-mobile-warning"
import { Volume2, VolumeX, Sun, Settings, DollarSign } from "lucide-react"

const sliderComponentsUrlReference = [
  "https://www.w3.org/WAI/ARIA/apg/patterns/slider/",
  "https://spectrum.adobe.com/page/slider/",
  "https://developer.apple.com/design/human-interface-guidelines/sliders",
  "https://m3.material.io/components/sliders/guidelines",
  "https://blueprintjs.com/docs/#core/components/sliders",
  "https://base.uber.com/6d2425e9f/p/30cac1-slider",
  "https://design.visa.com/components/slider/#min-max-range"
]

function getSliderUrlTitle(url: string): string {
  if (url.includes('w3.org/WAI/ARIA')) return 'W3C ARIA Authoring Practices Guide - Slider Pattern'
  if (url.includes('spectrum.adobe.com')) return 'Adobe Spectrum - Slider Guidelines'
  if (url.includes('developer.apple.com')) return 'Apple Human Interface Guidelines - Sliders'
  if (url.includes('m3.material.io')) return 'Material Design 3 - Slider Guidelines'
  if (url.includes('blueprintjs.com')) return 'Blueprint UI - Slider Component'
  if (url.includes('base.uber.com')) return 'Uber Base Design System - Slider'
  if (url.includes('design.visa.com')) return 'Visa Design System - Slider Component'
  return 'Design System Reference'
}

export default function SliderPage() {
  const { MobileWarning } = useMobileWarning()
  
  // Single value sliders
  const [brightness, setBrightness] = useState([75])
  const [volume, setVolume] = useState([40])
  const [temperature, setTemperature] = useState([22])
  const [rating, setRating] = useState([4])
  
  // Range sliders
  const [priceRange, setPriceRange] = useState([50, 250])
  const [timeRange, setTimeRange] = useState([9, 17])
  const [dateRange, setDateRange] = useState([2, 8])
  
  // Discrete sliders
  const [discreteValue, setDiscreteValue] = useState([3])
  const [stepValue, setStepValue] = useState([25])
  
  // Vertical sliders
  const [verticalVolume, setVerticalVolume] = useState([60])
  const [verticalTemp, setVerticalTemp] = useState([20])
  
  // Disabled states
  const [disabledValue] = useState([50])

  const formatTemperature = (value: number) => `${value}°C`
  const formatTime = (value: number) => {
    const hours = Math.floor(value)
    const minutes = Math.round((value - hours) * 60)
    return `${hours}:${minutes.toString().padStart(2, '0')}`
  }
  const formatRating = (value: number) => {
    const stars = '★'.repeat(Math.floor(value)) + '☆'.repeat(5 - Math.floor(value))
    return `${stars} (${value}/5)`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Warning */}
      {MobileWarning}
      <div className="container max-w-4xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Slider</h2>
            <EditButton filePath="app/playground/slider/page.tsx" />
          </div>
          <div className="space-y-4">
            <p className="text-base md:text-lg text-muted-foreground">
              Sliders allow users to select a value or range of values by moving a thumb along a track. 
              They provide intuitive visual feedback and are ideal for adjusting settings, filtering data, 
              or selecting values where the relative position matters more than precision.
            </p>
            
          </div>
        </div>

        <Tabs defaultValue="purpose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="states">States & Interaction</TabsTrigger>
            <TabsTrigger value="patterns">Usage Patterns</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          {/* Purpose Tab */}
          <TabsContent value="purpose" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">When to Use Sliders</CardTitle>
                <CardDescription>
                  Understanding the appropriate use cases and alternatives for slider components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Core Use Cases */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Primary Use Cases</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <Sun className="h-5 w-5 text-orange-500" />
                        <div className="flex-1">
                          <Label className="text-base font-medium">Settings & Controls</Label>
                          <p className="text-sm text-muted-foreground">Adjust system preferences where users need immediate visual feedback</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{brightness[0]}%</span>
                      </div>
                      <Slider
                        value={brightness}
                        onValueChange={setBrightness}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        <div className="flex-1">
                          <Label className="text-base font-medium">Range Filtering</Label>
                          <p className="text-sm text-muted-foreground">Filter search results by selecting minimum and maximum values</p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ${priceRange[0]} - ${priceRange[1]}
                        </span>
                      </div>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500}
                        min={0}
                        step={10}
                        className="w-full"
                      />
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        {volume[0] === 0 ? <VolumeX className="h-5 w-5 text-red-500" /> : <Volume2 className="h-5 w-5 text-blue-500" />}
                        <div className="flex-1">
                          <Label className="text-base font-medium">Media Controls</Label>
                          <p className="text-sm text-muted-foreground">Control playback settings with real-time audio/visual feedback</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{volume[0]}%</span>
                      </div>
                      <Slider
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Decision Guide */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Decision Guide</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h5 className="font-semibold text-green-800 dark:text-green-200 mb-3">✓ Use Sliders When:</h5>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                          <li>• Adjusting settings that benefit from immediate feedback</li>
                          <li>• Filtering or sorting by numeric ranges</li>
                          <li>• The relative position is more important than exact values</li>
                          <li>• Working within well-defined boundaries</li>
                          <li>• Users need to see the current state visually</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <h5 className="font-semibold text-red-800 dark:text-red-200 mb-3">✗ Avoid Sliders When:</h5>
                        <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                          <li>• Precise numeric input is required</li>
                          <li>• The range is very large (makes fine control difficult)</li>
                          <li>• Users need to enter specific known values</li>
                          <li>• Binary on/off choices (use toggle instead)</li>
                          <li>• Multiple unrelated options (use checkboxes)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alternative Components */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Alternative Components</h4>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Number Input</h5>
                          <p className="text-sm text-muted-foreground">For precise numeric values and when users know exact numbers they want to enter.</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Toggle/Switch</h5>
                          <p className="text-sm text-muted-foreground">For binary on/off states and boolean preferences.</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Select Dropdown</h5>
                          <p className="text-sm text-muted-foreground">For discrete options and when space is limited.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Practices Summary */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Key Principles</h4>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                      <li>• <strong>Immediate Feedback:</strong> Users should see changes in real-time</li>
                      <li>• <strong>Clear Boundaries:</strong> Always indicate minimum and maximum values</li>
                      <li>• <strong>Appropriate Steps:</strong> Choose step sizes that match user needs</li>
                      <li>• <strong>Accessible Design:</strong> Support keyboard navigation and screen readers</li>
                      <li>• <strong>Context Awareness:</strong> Show current values and units clearly</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Variants Tab */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Slider Types & Variants</CardTitle>
                <CardDescription>
                  Explore different slider configurations and their specific use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Single Value Sliders */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Single Value Sliders</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use for selecting a single value within a range. Best for settings, controls, and single-point selections.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Temperature Control</Label>
                          <p className="text-xs text-muted-foreground">Continuous scale with negative values</p>
                        </div>
                        <span className="text-sm font-mono">{formatTemperature(temperature[0])}</span>
                      </div>
                      <Slider
                        value={temperature}
                        onValueChange={setTemperature}
                        max={40}
                        min={-10}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>-10°C (Freezing)</span>
                        <span>40°C (Hot)</span>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Product Rating</Label>
                          <p className="text-xs text-muted-foreground">Fractional steps for precise rating</p>
                        </div>
                        <span className="text-sm">{formatRating(rating[0])}</span>
                      </div>
                      <Slider
                        value={rating}
                        onValueChange={setRating}
                        max={5}
                        min={1}
                        step={0.5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Poor</span>
                        <span>Excellent</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Range Sliders */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Range Sliders (Dual Thumb)</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Perfect for filtering and selecting ranges. Users can set both minimum and maximum values independently.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Working Hours</Label>
                          <p className="text-xs text-muted-foreground">Time range with fractional hours</p>
                        </div>
                        <span className="text-sm font-mono">
                          {formatTime(timeRange[0])} - {formatTime(timeRange[1])}
                        </span>
                      </div>
                      <Slider
                        value={timeRange}
                        onValueChange={setTimeRange}
                        max={24}
                        min={0}
                        step={0.5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>00:00 (Midnight)</span>
                        <span>24:00 (End of day)</span>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Trip Duration</Label>
                          <p className="text-xs text-muted-foreground">Integer-only range selection</p>
                        </div>
                        <span className="text-sm font-mono">
                          {dateRange[0]} - {dateRange[1]} days
                        </span>
                      </div>
                      <Slider
                        value={dateRange}
                        onValueChange={setDateRange}
                        max={30}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1 day (Short trip)</span>
                        <span>30 days (Extended stay)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Discrete Sliders */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Discrete & Stepped Sliders</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use when values should snap to specific increments. Ideal for quality levels, percentage steps, or predefined options.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Quality Level</Label>
                          <p className="text-xs text-muted-foreground">Discrete steps with labeled options</p>
                        </div>
                        <span className="text-sm font-mono">Level {discreteValue[0]}</span>
                      </div>
                      <Slider
                        value={discreteValue}
                        onValueChange={setDiscreteValue}
                        max={5}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        {['Low', 'Medium', 'High', 'Ultra', 'Max'].map((label, index) => (
                          <span key={label} className={discreteValue[0] === index + 1 ? 'font-medium text-foreground' : ''}>
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Progress Steps</Label>
                          <p className="text-xs text-muted-foreground">25% increments for clear progress</p>
                        </div>
                        <span className="text-sm font-mono">{stepValue[0]}%</span>
                      </div>
                      <Slider
                        value={stepValue}
                        onValueChange={setStepValue}
                        max={100}
                        min={0}
                        step={25}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        {[0, 25, 50, 75, 100].map((val) => (
                          <span key={val} className={stepValue[0] === val ? 'font-medium text-foreground' : ''}>
                            {val}%
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical Sliders */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Vertical Orientation</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Useful for saving horizontal space, mimicking real-world controls (volume knobs), or in compact interfaces.
                    </p>
                  </div>
                  
                  <div className="flex gap-8 justify-center p-6 border rounded-lg">
                    <div className="flex flex-col items-center space-y-4">
                      <Label className="font-medium text-center">Audio Volume</Label>
                      <div className="h-40 flex items-center">
                        <Slider
                          value={verticalVolume}
                          onValueChange={setVerticalVolume}
                          max={100}
                          min={0}
                          step={5}
                          orientation="vertical"
                          className="h-full"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-mono">{verticalVolume[0]}%</span>
                        <p className="text-xs text-muted-foreground">5% steps</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                      <Label className="font-medium text-center">Room Temperature</Label>
                      <div className="h-40 flex items-center">
                        <Slider
                          value={verticalTemp}
                          onValueChange={setVerticalTemp}
                          max={35}
                          min={-5}
                          step={1}
                          orientation="vertical"
                          className="h-full"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-mono">{verticalTemp[0]}°C</span>
                        <p className="text-xs text-muted-foreground">1° precision</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Configuration Guide */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Configuration Guidelines</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Step Size Selection</h5>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• <strong>Fine control:</strong> Small steps (1, 0.1, 0.5)</li>
                        <li>• <strong>Quick selection:</strong> Larger steps (5, 10, 25)</li>
                        <li>• <strong>Discrete options:</strong> Integer steps only</li>
                        <li>• <strong>Percentage:</strong> Steps of 5, 10, or 25</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Range Considerations</h5>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• <strong>Narrow ranges:</strong> Enable precise control</li>
                        <li>• <strong>Wide ranges:</strong> Use larger steps</li>
                        <li>• <strong>Negative values:</strong> Clearly indicate zero point</li>
                        <li>• <strong>Unbounded:</strong> Consider input fields instead</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* States Tab */}
          <TabsContent value="states" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">States & Interaction Patterns</CardTitle>
                <CardDescription>
                  Understanding different slider states and how users interact with them across devices.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Visual States */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Visual States</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Sliders should provide clear visual feedback for different interaction states to guide user behavior.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Default State</Label>
                          <p className="text-xs text-muted-foreground">Normal, interactive state</p>
                        </div>
                        <span className="text-sm text-muted-foreground">50%</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} className="w-full" />
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium text-muted-foreground">Disabled State</Label>
                          <p className="text-xs text-muted-foreground">Non-interactive, shows current value</p>
                        </div>
                        <span className="text-sm text-muted-foreground">50%</span>
                      </div>
                      <Slider value={disabledValue} max={100} disabled className="w-full opacity-50" />
                      <p className="text-xs text-muted-foreground">Use when the control is temporarily unavailable or depends on other settings.</p>
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Focus State</Label>
                          <p className="text-xs text-muted-foreground">Keyboard navigation highlight</p>
                        </div>
                        <span className="text-sm text-muted-foreground">75%</span>
                      </div>
                      <Slider 
                        defaultValue={[75]} 
                        max={100} 
                        className="w-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" 
                      />
                      <p className="text-xs text-muted-foreground">Click and use Tab or arrow keys to see focus indication.</p>
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">Error State</Label>
                          <p className="text-xs text-muted-foreground">Invalid value or constraint violation</p>
                        </div>
                        <span className="text-sm text-red-600">Invalid</span>
                      </div>
                      <Slider 
                        defaultValue={[25]} 
                        max={100} 
                        className="w-full [&_[role=slider]]:border-red-500 [&_[data-slot=slider-range]]:bg-red-500"
                      />
                      <p className="text-xs text-red-600">Value below minimum threshold (30%)</p>
                    </div>
                  </div>
                </div>

                {/* Value Display Patterns */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Value Display Patterns</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Different ways to show current values and provide context to users.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="font-medium">Inline Value Display</Label>
                        <span className="text-sm font-mono bg-muted px-2 py-1 rounded">{brightness[0]}%</span>
                      </div>
                      <Slider
                        value={brightness}
                        onValueChange={setBrightness}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <Label className="font-medium">Range with Min/Max Labels</Label>
                      <div className="space-y-2">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={500}
                          min={0}
                          step={5}
                          className="w-full"
                        />
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-muted-foreground">$0</span>
                          <span className="font-medium">${priceRange[0]} - ${priceRange[1]}</span>
                          <span className="text-muted-foreground">$500</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <Label className="font-medium">Formatted Value with Units</Label>
                      <div className="space-y-2">
                        <Slider
                          value={temperature}
                          onValueChange={setTemperature}
                          max={40}
                          min={-10}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-center">
                          <span className="text-lg font-semibold">{formatTemperature(temperature[0])}</span>
                          <p className="text-xs text-muted-foreground">Room temperature setting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keyboard Navigation */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Keyboard Navigation</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Standard keyboard controls that provide precise control and accessibility compliance.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium mb-3">Basic Navigation</h5>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <kbd className="px-2 py-1 bg-background border rounded text-xs">←</kbd>
                            <kbd className="px-2 py-1 bg-background border rounded text-xs">↓</kbd>
                          </div>
                          <span>Decrease by one step</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <kbd className="px-2 py-1 bg-background border rounded text-xs">→</kbd>
                            <kbd className="px-2 py-1 bg-background border rounded text-xs">↑</kbd>
                          </div>
                          <span>Increase by one step</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">Home</kbd>
                          <span>Jump to minimum</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">End</kbd>
                          <span>Jump to maximum</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium mb-3">Advanced Controls</h5>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">Page Up</kbd>
                          <span>Large increment (10 steps)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">Page Down</kbd>
                          <span>Large decrement (10 steps)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">Tab</kbd>
                          <span>Move to next control</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">Shift+Tab</kbd>
                          <span>Move to previous control</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <Label className="font-medium">Try keyboard navigation:</Label>
                    <Slider
                      value={[50]}
                      onValueChange={(value) => {}}
                      max={100}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Click the slider thumb, then use keyboard arrows, Home/End, or Page Up/Down to control the value.
                    </p>
                  </div>
                </div>

                {/* Touch & Mouse Interaction */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Touch & Mouse Interaction</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Understanding how users interact with sliders across different input methods and device types.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Mouse Interactions</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Click track:</strong> Jump thumb to clicked position</li>
                        <li>• <strong>Drag thumb:</strong> Smooth continuous adjustment</li>
                        <li>• <strong>Hover feedback:</strong> Visual indication of interactive areas</li>
                        <li>• <strong>Scroll wheel:</strong> Fine adjustment when focused</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Touch Interactions</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Tap track:</strong> Move thumb to tapped position</li>
                        <li>• <strong>Drag gesture:</strong> Continuous value adjustment</li>
                        <li>• <strong>Large targets:</strong> Minimum 44px touch area</li>
                        <li>• <strong>Visual feedback:</strong> Highlight during interaction</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Touch Design Considerations</h5>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                      <li>• Ensure thumb size is at least 44px for comfortable touch interaction</li>
                      <li>• Provide adequate spacing between multiple sliders</li>
                      <li>• Consider larger step sizes for easier mobile control</li>
                      <li>• Test with various screen sizes and orientations</li>
                    </ul>
                  </div>
                </div>

                {/* Performance Considerations */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Performance & Responsiveness</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Optimization Tips</h5>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• <strong>Debounce updates:</strong> Prevent excessive onChange calls</li>
                        <li>• <strong>Throttle API calls:</strong> Wait for user to finish adjusting</li>
                        <li>• <strong>Optimize re-renders:</strong> Use React.memo for complex UIs</li>
                        <li>• <strong>Smooth animations:</strong> Use CSS transforms for performance</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Responsive Behavior</h5>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• <strong>Immediate feedback:</strong> Visual changes happen instantly</li>
                        <li>• <strong>Progressive enhancement:</strong> Works without JavaScript</li>
                        <li>• <strong>Adaptive sizing:</strong> Adjust for screen size</li>
                        <li>• <strong>Consistent feel:</strong> Same behavior across devices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Usage Patterns & Implementation</CardTitle>
                <CardDescription>
                  Real-world examples and proven patterns for implementing sliders effectively in different contexts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Settings Panel Pattern */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Settings & Preferences Panel</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use sliders for system preferences where users need immediate visual feedback and fine-grained control.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 space-y-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <Settings className="h-5 w-5" />
                      <h5 className="font-medium">Display & Audio Settings</h5>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label className="flex items-center gap-2 text-sm font-medium">
                              <Sun className="h-4 w-4" />
                              Screen Brightness
                            </Label>
                            <span className="text-sm font-mono bg-muted px-2 py-1 rounded">{brightness[0]}%</span>
                          </div>
                          <Slider
                            value={brightness}
                            onValueChange={setBrightness}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Dim</span>
                            <span>Bright</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label className="flex items-center gap-2 text-sm font-medium">
                              <Volume2 className="h-4 w-4" />
                              System Volume
                            </Label>
                            <span className="text-sm font-mono bg-muted px-2 py-1 rounded">{volume[0]}%</span>
                          </div>
                          <Slider
                            value={volume}
                            onValueChange={setVolume}
                            max={100}
                            step={5}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Muted</span>
                            <span>Loud</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label className="text-sm font-medium">Notification Frequency</Label>
                            <span className="text-sm text-muted-foreground">Level {discreteValue[0]}</span>
                          </div>
                          <Slider
                            value={discreteValue}
                            onValueChange={setDiscreteValue}
                            max={5}
                            min={1}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Minimal</span>
                            <span>Frequent</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label className="text-sm font-medium">Auto-save Interval</Label>
                            <span className="text-sm text-muted-foreground">{stepValue[0]}s</span>
                          </div>
                          <Slider
                            value={stepValue}
                            onValueChange={setStepValue}
                            max={300}
                            min={30}
                            step={30}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>30s</span>
                            <span>5m</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t">
                      <Button size="sm">Save Changes</Button>
                      <Button variant="outline" size="sm">Reset to Defaults</Button>
                    </div>
                  </div>
                </div>

                {/* Filter Panel Pattern */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Search & Filter Interface</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Range sliders excel at filtering content by numeric criteria. Show active filters and result counts.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 space-y-6 bg-card">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium">Product Filters</h5>
                      <span className="text-sm text-muted-foreground">4,287 results</span>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <Label className="font-medium">Price Range</Label>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
                              ${priceRange[0]} - ${priceRange[1]}
                            </span>
                          </div>
                        </div>
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={500}
                          min={0}
                          step={5}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-2">
                          <span>$0 (Budget)</span>
                          <span>$500+ (Premium)</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <Label className="font-medium">Customer Rating</Label>
                          <span className="text-sm text-muted-foreground">{rating[0]}+ stars</span>
                        </div>
                        <Slider
                          value={rating}
                          onValueChange={setRating}
                          max={5}
                          min={1}
                          step={0.5}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-2">
                          <span>Any rating</span>
                          <span>Excellent only</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <Label className="font-medium">Delivery Time</Label>
                          <span className="text-sm text-muted-foreground">
                            {dateRange[0]} - {dateRange[1]} days
                          </span>
                        </div>
                        <Slider
                          value={dateRange}
                          onValueChange={setDateRange}
                          max={14}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-2">
                          <span>Same day</span>
                          <span>2+ weeks</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t">
                      <Button size="sm">Apply Filters</Button>
                      <Button variant="outline" size="sm">Clear All</Button>
                    </div>
                  </div>
                </div>

                {/* Media Control Pattern */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Media Player Controls</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Combine playback controls with sliders for volume and progress. Provide immediate visual feedback.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 bg-card">
                    <div className="space-y-6">
                      {/* Main Controls */}
                      <div className="flex items-center justify-center gap-4">
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">⏮</Button>
                        <Button variant="outline" size="sm" className="h-10 w-10 p-0">⏯</Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">⏭</Button>
                      </div>
                      
                      {/* Progress Slider */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground font-mono">2:34</span>
                          <Slider defaultValue={[35]} max={100} className="flex-1" />
                          <span className="text-xs text-muted-foreground font-mono">7:42</span>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">The Great Gatsby - Chapter 3</p>
                          <p className="text-xs text-muted-foreground">F. Scott Fitzgerald</p>
                        </div>
                      </div>

                      {/* Volume Control */}
                      <div className="flex items-center gap-4 justify-center">
                        <VolumeX className="h-4 w-4 text-muted-foreground" />
                        <Slider
                          value={volume}
                          onValueChange={setVolume}
                          max={100}
                          step={1}
                          className="w-24"
                        />
                        <Volume2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs font-mono w-8">{volume[0]}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Visualization Pattern */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Data Visualization Controls</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use sliders to control visualization parameters like time ranges, thresholds, or display options.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 space-y-6 bg-card">
                    <h5 className="font-medium">Chart Controls</h5>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label className="text-sm font-medium">Date Range</Label>
                            <span className="text-sm text-muted-foreground">
                              {timeRange[0]}h - {timeRange[1]}h
                            </span>
                          </div>
                          <Slider
                            value={timeRange}
                            onValueChange={setTimeRange}
                            max={24}
                            min={0}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Today 00:00</span>
                            <span>Tomorrow 00:00</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label className="text-sm font-medium">Display Threshold</Label>
                            <span className="text-sm text-muted-foreground">{temperature[0]}°C</span>
                          </div>
                          <Slider
                            value={temperature}
                            onValueChange={setTemperature}
                            max={40}
                            min={-10}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label className="text-sm font-medium">Zoom Level</Label>
                            <span className="text-sm text-muted-foreground">{discreteValue[0]}x</span>
                          </div>
                          <Slider
                            value={discreteValue}
                            onValueChange={setDiscreteValue}
                            max={10}
                            min={1}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label className="text-sm font-medium">Opacity</Label>
                            <span className="text-sm text-muted-foreground">{stepValue[0]}%</span>
                          </div>
                          <Slider
                            value={stepValue}
                            onValueChange={setStepValue}
                            max={100}
                            min={0}
                            step={10}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="h-32 bg-muted/30 rounded border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Chart visualization area</span>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Implementation Best Practices</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Guidelines for creating effective slider interfaces that users can understand and control easily.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h5 className="font-semibold text-green-800 dark:text-green-200 mb-3">✓ Do These Things</h5>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                          <li>• Always show the current value clearly</li>
                          <li>• Provide meaningful min/max labels when helpful</li>
                          <li>• Use appropriate step sizes for the data type</li>
                          <li>• Group related sliders together logically</li>
                          <li>• Provide immediate visual feedback</li>
                          <li>• Consider debouncing for expensive operations</li>
                          <li>• Test on both desktop and mobile devices</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <h5 className="font-semibold text-red-800 dark:text-red-200 mb-3">✗ Avoid These Mistakes</h5>
                        <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                          <li>• Don't hide the current value from users</li>
                          <li>• Avoid overly sensitive or tiny step increments</li>
                          <li>• Don't use sliders for precise numeric input</li>
                          <li>• Avoid cluttering with too many sliders</li>
                          <li>• Don't forget keyboard accessibility</li>
                          <li>• Avoid unclear or missing labels</li>
                          <li>• Don't make touch targets too small</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Tips */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Performance Optimization</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Debouncing</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        Delay expensive operations until user stops adjusting
                      </p>
                      <code className="text-xs bg-muted p-2 rounded block">
                        useDebouncedCallback(onValueChange, 300)
                      </code>
                    </div>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility Tab */}
          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Accessibility Guidelines</CardTitle>
                <CardDescription>
                  Comprehensive guidelines for making sliders accessible to all users, including those using assistive technologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* ARIA Implementation */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">ARIA Implementation</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Proper ARIA attributes ensure screen readers can understand and announce slider information effectively.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Required ARIA Attributes</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">role="slider"</code>
                            <span className="text-blue-700 dark:text-blue-300">Identifies element as slider</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">aria-valuenow</code>
                            <span className="text-blue-700 dark:text-blue-300">Current value</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">aria-valuemin</code>
                            <span className="text-blue-700 dark:text-blue-300">Minimum value</span>
                          </div>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">aria-valuemax</code>
                            <span className="text-blue-700 dark:text-blue-300">Maximum value</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">aria-label</code>
                            <span className="text-blue-700 dark:text-blue-300">Accessible name</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">aria-valuetext</code>
                            <span className="text-blue-700 dark:text-blue-300">Human-readable value</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <h5 className="font-medium">Implementation Example</h5>
                      <div className="space-y-3">
                        <Label className="font-medium">Temperature Setting (with ARIA)</Label>
                        <Slider
                          value={temperature}
                          onValueChange={setTemperature}
                          max={40}
                          min={-10}
                          step={1}
                          className="w-full"
                          aria-label="Room temperature setting"
                        />
                        <div className="bg-muted p-3 rounded text-sm">
                          <code className="block whitespace-pre-wrap">
{`<Slider
  aria-label="Room temperature setting"
  aria-valuenow={${temperature[0]}}
  aria-valuemin={-10}
  aria-valuemax={40}
  aria-valuetext="${formatTemperature(temperature[0])}"
/>`}
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen Reader Support */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Screen Reader Experience</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Understanding how screen readers interact with sliders and providing optimal user experience.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="p-4 border rounded-lg space-y-4">
                      <h5 className="font-medium">Range Slider with Proper Labels</h5>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="font-medium">Price Range Filter</Label>
                          <span className="text-sm text-muted-foreground">${priceRange[0]} - ${priceRange[1]}</span>
                        </div>
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={500}
                          min={0}
                          step={5}
                          className="w-full"
                          aria-label="Product price range filter"
                        />
                      </div>
                      
                      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
                        <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium mb-1">Screen Reader Announcement:</p>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          "Product price range filter slider, ${priceRange[0]} to ${priceRange[1]} dollars, minimum 0, maximum 500"
                        </p>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <h5 className="font-medium">Formatted Value Announcements</h5>
                      <div className="space-y-3">
                        <Label className="font-medium">Star Rating</Label>
                        <Slider
                          value={rating}
                          onValueChange={setRating}
                          max={5}
                          min={1}
                          step={0.5}
                          className="w-full"
                          aria-label="Product rating"
                        />
                        <p className="text-sm text-muted-foreground">
                          Current rating: {formatRating(rating[0])}
                        </p>
                      </div>
                      
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                        <p className="text-sm text-green-800 dark:text-green-200 font-medium mb-1">Enhanced Announcement:</p>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          "Product rating slider, {rating[0]} out of 5 stars, minimum 1 star, maximum 5 stars"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keyboard Accessibility */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Keyboard Navigation Standards</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete keyboard control following W3C ARIA Authoring Practices Guide specifications.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium mb-3">Standard Key Bindings</h5>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <kbd className="px-2 py-1 bg-background border rounded text-xs">→</kbd>
                            <kbd className="px-2 py-1 bg-background border rounded text-xs">↑</kbd>
                          </div>
                          <span>Increase by one step</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <kbd className="px-2 py-1 bg-background border rounded text-xs">←</kbd>
                            <kbd className="px-2 py-1 bg-background border rounded text-xs">↓</kbd>
                          </div>
                          <span>Decrease by one step</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">Home</kbd>
                          <span>Jump to minimum value</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">End</kbd>
                          <span>Jump to maximum value</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium mb-3">Extended Controls</h5>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">Page Up</kbd>
                          <span>Large increment (10 steps)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">Page Down</kbd>
                          <span>Large decrement (10 steps)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">Tab</kbd>
                          <span>Focus next element</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <kbd className="px-2 py-1 bg-background border rounded text-xs">Shift+Tab</kbd>
                          <span>Focus previous element</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="font-medium">Test Keyboard Navigation</Label>
                      <span className="text-sm text-muted-foreground">Current: 50%</span>
                    </div>
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      className="w-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      aria-label="Keyboard navigation test slider"
                    />
                    <p className="text-xs text-muted-foreground">
                      Click to focus, then use keyboard arrows, Home/End, or Page Up/Down to navigate.
                    </p>
                  </div>
                </div>

                {/* Focus Management */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Focus Management</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Clear focus indicators and logical focus order are essential for keyboard navigation.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="p-4 border rounded-lg space-y-4">
                      <h5 className="font-medium">Focus Visibility Examples</h5>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium mb-2 block">Standard Focus Ring</Label>
                          <Slider
                            defaultValue={[30]}
                            max={100}
                            className="w-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium mb-2 block">High Contrast Focus</Label>
                          <Slider
                            defaultValue={[70]}
                            max={100}
                            className="w-full focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Focus Requirements</h5>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                        <li>• <strong>Visible indicator:</strong> Clear visual focus indication with sufficient contrast</li>
                        <li>• <strong>Consistent styling:</strong> Focus appearance matches other interactive elements</li>
                        <li>• <strong>Logical order:</strong> Tab order follows visual layout and reading flow</li>
                        <li>• <strong>Persistent visibility:</strong> Focus remains visible during interaction</li>
                        <li>• <strong>Skip functionality:</strong> Allow users to skip complex slider groups</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Touch Accessibility */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Touch & Motor Accessibility</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Design considerations for users with limited dexterity or motor control.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Touch Target Guidelines</h5>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• <strong>Minimum size:</strong> 44px × 44px touch target</li>
                        <li>• <strong>Adequate spacing:</strong> 8px minimum between targets</li>
                        <li>• <strong>Clear affordances:</strong> Visual indication of interactive areas</li>
                        <li>• <strong>Error tolerance:</strong> Forgiving interaction zones</li>
                        <li>• <strong>Feedback:</strong> Immediate visual/haptic response</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Motor Accessibility</h5>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• <strong>Alternative input:</strong> Support voice control and switch navigation</li>
                        <li>• <strong>Adjustable sensitivity:</strong> Customizable step sizes</li>
                        <li>• <strong>Sticky mode:</strong> Prevent accidental adjustments</li>
                        <li>• <strong>Confirmation:</strong> Optional confirmation for critical changes</li>
                        <li>• <strong>Undo functionality:</strong> Easy way to revert changes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Mobile Considerations</h5>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Test slider usability across different device sizes and orientations</li>
                      <li>• Ensure thumb size scales appropriately for high-DPI screens</li>
                      <li>• Consider larger step sizes for easier mobile interaction</li>
                      <li>• Provide alternative input methods (number input) when precision is needed</li>
                    </ul>
                  </div>
                </div>

                {/* Testing & Validation */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Testing & Validation</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive testing approach to ensure accessibility compliance and usability.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Automated Testing Checklist</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>ARIA attributes are properly implemented</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>Color contrast meets WCAG AA standards</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>Focus indicators are visible and sufficient</span>
                          </li>
                        </ul>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>Touch targets meet minimum size requirements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>Keyboard navigation follows standard patterns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>Screen reader announcements are clear</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Manual Testing Protocol</h5>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted/50 rounded">
                          <h6 className="font-medium text-sm mb-2">Screen Reader Testing</h6>
                          <ul className="text-xs space-y-1 text-muted-foreground">
                            <li>• Test with NVDA, JAWS, VoiceOver, and TalkBack</li>
                            <li>• Verify value announcements are clear and helpful</li>
                            <li>• Check that instructions are properly conveyed</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-muted/50 rounded">
                          <h6 className="font-medium text-sm mb-2">Keyboard Testing</h6>
                          <ul className="text-xs space-y-1 text-muted-foreground">
                            <li>• Navigate using only keyboard input</li>
                            <li>• Test all keyboard shortcuts and interactions</li>
                            <li>• Verify focus management and visual indicators</li>
                          </ul>
                        </div>

                        <div className="p-3 bg-muted/50 rounded">
                          <h6 className="font-medium text-sm mb-2">High Contrast Mode</h6>
                          <ul className="text-xs space-y-1 text-muted-foreground">
                            <li>• Test in Windows High Contrast mode</li>
                            <li>• Verify all elements remain visible and functional</li>
                            <li>• Check that custom styling doesn't override system preferences</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WCAG Compliance */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">WCAG 2.1 Compliance Summary</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3 text-blue-600">Level A</h5>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Keyboard accessibility</li>
                        <li>• Meaningful sequence</li>
                        <li>• Focus visible</li>
                        <li>• Name, role, value</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3 text-green-600">Level AA</h5>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Color contrast 4.5:1</li>
                        <li>• Resize text 200%</li>
                        <li>• Focus management</li>
                        <li>• Target size 44px</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3 text-purple-600">Level AAA</h5>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Color contrast 7:1</li>
                        <li>• Context-sensitive help</li>
                        <li>• Error prevention</li>
                        <li>• Motion actuation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* References */}
        <div className="mt-6">
          <ComponentReferences
            urls={sliderComponentsUrlReference}
            getTitleFunction={getSliderUrlTitle}
          />
        </div>
      </div>
    </div>
  )
}