"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
      <div className="container max-w-5xl mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-4xl font-bold text-foreground">Slider</h2>
            <EditButton filePath="app/playground/slider/page.tsx" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Sliders are interactive controls that enable users to set or select a value from within a given range. 
            They typically have a slider thumb that can be moved along a bar, rail, or track to change the value. 
            Sliders are ideal for settings, filters, and numeric input where the precise value is less important than the relative position.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Range Input</Badge>
            <Badge>Accessible</Badge>
            <Badge>Touch Friendly</Badge>
            <Badge>Keyboard Navigable</Badge>
            <Badge>ARIA Compliant</Badge>
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
                <CardTitle>Primary Purpose of Sliders</CardTitle>
                <CardDescription>
                  Understanding when and why to use sliders in your interface design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Core Purpose</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Range Selection:</strong> Choose values within defined boundaries</li>
                      <li>• <strong>Continuous Input:</strong> Smooth value adjustment without discrete steps</li>
                      <li>• <strong>Visual Feedback:</strong> Immediate visual representation of value changes</li>
                      <li>• <strong>Space Efficient:</strong> Compact way to handle numeric input ranges</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Slider vs Other Inputs</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <strong className="text-green-800 dark:text-green-200">Use Slider When:</strong>
                        <ul className="text-sm mt-1 text-green-700 dark:text-green-300">
                          <li>• Adjusting settings (volume, brightness)</li>
                          <li>• Filtering by range (price, date)</li>
                          <li>• Relative values matter more than exact numbers</li>
                          <li>• Real-time feedback is beneficial</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <strong className="text-blue-800 dark:text-blue-200">Use Number Input When:</strong>
                        <ul className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                          <li>• Precise values are required</li>
                          <li>• Users need to type specific numbers</li>
                          <li>• Range is very large or unbounded</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Common Use Cases</h4>
                  <div className="grid gap-4">
                                         <div className="p-4 border rounded-lg space-y-3">
                       <div className="flex items-center gap-3">
                         <Sun className="h-5 w-5 text-orange-500" />
                         <Label className="text-base font-medium">Brightness Control</Label>
                         <span className="text-sm text-muted-foreground ml-auto">{brightness[0]}%</span>
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
                        {volume[0] === 0 ? <VolumeX className="h-5 w-5 text-red-500" /> : <Volume2 className="h-5 w-5 text-blue-500" />}
                        <Label className="text-base font-medium">Volume</Label>
                        <span className="text-sm text-muted-foreground ml-auto">{volume[0]}%</span>
                      </div>
                      <Slider
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        <Label className="text-base font-medium">Price Range Filter</Label>
                        <span className="text-sm text-muted-foreground ml-auto">
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
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">When NOT to Use Sliders</h4>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
                    <strong className="text-red-800 dark:text-red-200">Avoid sliders for:</strong>
                    <ul className="text-sm mt-1 text-red-700 dark:text-red-300 space-y-1">
                      <li>• Precise numeric input where accuracy is critical</li>
                      <li>• Very large ranges where small movements cause big changes</li>
                      <li>• Binary choices (use switch or toggle instead)</li>
                      <li>• Multiple unrelated options (use checkboxes or select)</li>
                      <li>• Touch interfaces where fine control is difficult</li>
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
                <CardTitle>Slider Variants</CardTitle>
                <CardDescription>
                  Different types and orientations of sliders for various use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Single Value Sliders */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Single Value Sliders</h4>
                  <div className="grid gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="font-medium">Temperature</Label>
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
                        <span>-10°C</span>
                        <span>40°C</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="font-medium">Product Rating</Label>
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
                    </div>
                  </div>
                </div>

                {/* Range Sliders */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Range Sliders (Dual Thumb)</h4>
                  <div className="grid gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="font-medium">Working Hours</Label>
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
                        <span>00:00</span>
                        <span>24:00</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="font-medium">Trip Duration</Label>
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
                    </div>
                  </div>
                </div>

                {/* Discrete Sliders */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Discrete Sliders</h4>
                  <div className="grid gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="font-medium">Quality Level</Label>
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
                        <span>Low</span>
                        <span>Medium</span>
                        <span>High</span>
                        <span>Ultra</span>
                        <span>Max</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="font-medium">Step Increment</Label>
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
                        <span>0%</span>
                        <span>25%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical Sliders */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Vertical Sliders</h4>
                  <div className="flex gap-8 justify-center">
                    <div className="flex flex-col items-center space-y-4">
                      <Label className="font-medium">Volume</Label>
                      <div className="h-40 flex items-center">
                        <Slider
                          value={verticalVolume}
                          onValueChange={setVerticalVolume}
                          max={100}
                          min={0}
                          step={1}
                          orientation="vertical"
                          className="h-full"
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{verticalVolume[0]}%</span>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                      <Label className="font-medium">Temperature</Label>
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
                      <span className="text-sm text-muted-foreground">{verticalTemp[0]}°C</span>
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
                <CardTitle>Slider States & Interactions</CardTitle>
                <CardDescription>
                  Different states and interactive behaviors of slider components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Interactive States</h4>
                  <div className="grid gap-6">
                    <div className="space-y-3">
                      <Label className="font-medium">Default State</Label>
                      <Slider defaultValue={[50]} max={100} className="w-full" />
                    </div>

                    <div className="space-y-3">
                      <Label className="font-medium">Disabled State</Label>
                      <Slider value={disabledValue} max={100} disabled className="w-full" />
                    </div>

                    <div className="space-y-3">
                      <Label className="font-medium">With Min/Max Labels</Label>
                      <div className="space-y-2">
                        <Slider defaultValue={[75]} max={100} className="w-full" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Min (0)</span>
                          <span>Max (100)</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="font-medium">With Custom Styling</Label>
                      <Slider 
                        defaultValue={[60]} 
                        max={100} 
                        className="w-full [&_[data-slot=slider-range]]:bg-gradient-to-r [&_[data-slot=slider-range]]:from-blue-500 [&_[data-slot=slider-range]]:to-purple-500" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Keyboard Navigation</h4>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-medium mb-3">Keyboard Controls:</h5>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="space-y-2">
                        <div><kbd className="px-2 py-1 bg-background border rounded text-xs">←</kbd> Decrease value</div>
                        <div><kbd className="px-2 py-1 bg-background border rounded text-xs">→</kbd> Increase value</div>
                        <div><kbd className="px-2 py-1 bg-background border rounded text-xs">↑</kbd> Increase value</div>
                        <div><kbd className="px-2 py-1 bg-background border rounded text-xs">↓</kbd> Decrease value</div>
                      </div>
                      <div className="space-y-2">
                        <div><kbd className="px-2 py-1 bg-background border rounded text-xs">Home</kbd> Minimum value</div>
                        <div><kbd className="px-2 py-1 bg-background border rounded text-xs">End</kbd> Maximum value</div>
                        <div><kbd className="px-2 py-1 bg-background border rounded text-xs">Page Up</kbd> Large increment</div>
                        <div><kbd className="px-2 py-1 bg-background border rounded text-xs">Page Down</kbd> Large decrement</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label className="font-medium">Try keyboard navigation on this slider:</Label>
                    <Slider defaultValue={[50]} max={100} className="w-full" />
                    <p className="text-sm text-muted-foreground">
                      Click the slider thumb and use keyboard arrows to control the value.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Touch & Mouse Interaction</h4>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Interaction Patterns:</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Click/Tap Track:</strong> Jump to clicked position</li>
                        <li>• <strong>Drag Thumb:</strong> Smooth continuous adjustment</li>
                        <li>• <strong>Touch Feedback:</strong> Visual feedback on interaction</li>
                        <li>• <strong>Hover States:</strong> Indicate interactive elements</li>
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
                <CardTitle>Usage Patterns & Examples</CardTitle>
                <CardDescription>
                  Real-world examples and patterns for implementing sliders effectively.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Settings Panel Pattern</h4>
                  <div className="border rounded-lg p-6 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Settings className="h-5 w-5" />
                      <h5 className="font-medium">Display Settings</h5>
                    </div>
                    
                    <div className="space-y-4">
                                             <div className="flex items-center justify-between">
                         <Label className="flex items-center gap-2">
                           <Sun className="h-4 w-4" />
                           Brightness
                         </Label>
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

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="flex items-center gap-2">
                          <Volume2 className="h-4 w-4" />
                          Volume
                        </Label>
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

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Filter Panel Pattern</h4>
                  <div className="border rounded-lg p-6 space-y-6">
                    <h5 className="font-medium">Search Filters</h5>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Price Range</Label>
                        <span className="text-sm text-muted-foreground">
                          ${priceRange[0]} - ${priceRange[1]}
                        </span>
                      </div>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500}
                        min={0}
                        step={5}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Rating</Label>
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
                    </div>

                    <Button className="w-full mt-4">Apply Filters</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Media Control Pattern</h4>
                  <div className="border rounded-lg p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm">⏮</Button>
                        <Button variant="outline" size="sm">⏯</Button>
                        <Button variant="outline" size="sm">⏭</Button>
                        <div className="flex items-center gap-2 ml-auto">
                          <VolumeX className="h-4 w-4" />
                          <Slider
                            value={volume}
                            onValueChange={setVolume}
                            max={100}
                            step={1}
                            className="w-24"
                          />
                          <Volume2 className="h-4 w-4" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Slider defaultValue={[30]} max={100} className="w-full" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>1:23</span>
                          <span>4:56</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Best Practices</h4>
                  <div className="grid gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <strong className="text-green-800 dark:text-green-200">Do:</strong>
                      <ul className="text-sm mt-2 text-green-700 dark:text-green-300 space-y-1">
                        <li>• Provide clear labels and current value indicators</li>
                        <li>• Use appropriate step sizes for the data type</li>
                        <li>• Show min/max values when helpful</li>
                        <li>• Ensure adequate touch target size (44px minimum)</li>
                        <li>• Use consistent slider styling across your interface</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <strong className="text-red-800 dark:text-red-200">Don&apos;t:</strong>
                      <ul className="text-sm mt-2 text-red-700 dark:text-red-300 space-y-1">
                        <li>• Use sliders for precise numeric input</li>
                        <li>• Make steps too small for the interface size</li>
                        <li>• Forget to provide keyboard navigation</li>
                        <li>• Use sliders for binary on/off states</li>
                        <li>• Hide the current value from users</li>
                      </ul>
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
                <CardTitle>Accessibility Guidelines</CardTitle>
                <CardDescription>
                  Ensuring sliders are accessible to all users, including those using assistive technologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">ARIA Implementation</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium mb-2">Required ARIA Attributes:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• <code>role=&quot;slider&quot;</code> - Identifies the element as a slider</li>
                        <li>• <code>aria-valuenow</code> - Current value of the slider</li>
                        <li>• <code>aria-valuemin</code> - Minimum allowed value</li>
                        <li>• <code>aria-valuemax</code> - Maximum allowed value</li>
                        <li>• <code>aria-label</code> or <code>aria-labelledby</code> - Accessible name</li>
                        <li>• <code>aria-valuetext</code> - Human-readable value (when needed)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Keyboard Accessibility</h4>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Standard Key Bindings:</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Right Arrow / Up Arrow:</span>
                            <span>Increase value by one step</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Left Arrow / Down Arrow:</span>
                            <span>Decrease value by one step</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Home:</span>
                            <span>Set to minimum value</span>
                          </div>
                          <div className="flex justify-between">
                            <span>End:</span>
                            <span>Set to maximum value</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Screen Reader Support</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label className="font-medium">Temperature Setting</Label>
                      <Slider
                        value={temperature}
                        onValueChange={setTemperature}
                        max={40}
                        min={-10}
                        step={1}
                        className="w-full"
                        aria-label="Temperature setting"
                      />
                      <p className="text-sm text-muted-foreground">
                        This slider includes proper ARIA labeling for screen readers.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <strong className="text-yellow-800 dark:text-yellow-200">Screen Reader Announcement:</strong>
                      <p className="text-sm mt-1 text-yellow-700 dark:text-yellow-300">
                        &quot;Temperature setting slider, {temperature[0]} degrees Celsius, minimum -10, maximum 40&quot;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Touch Accessibility</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <h5 className="font-medium">Touch Target Guidelines:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Minimum touch target size: 44px × 44px</li>
                      <li>• Adequate spacing between interactive elements</li>
                      <li>• Visual feedback on touch interaction</li>
                      <li>• Support for touch gestures when appropriate</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Focus Management</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label className="font-medium">Focus Visible Example</Label>
                      <Slider
                        defaultValue={[50]}
                        max={100}
                        className="w-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>
                    
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h5 className="font-medium mb-2">Focus Indicators:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Clear visual focus indication</li>
                        <li>• High contrast focus outline</li>
                        <li>• Focus follows logical tab order</li>
                        <li>• Focus visible for keyboard users</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Testing Guidelines</h4>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-3">Accessibility Testing Checklist:</h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Test with keyboard navigation only</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Verify screen reader announcements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Check color contrast ratios</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Test with high contrast mode</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Verify touch target sizes on mobile</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* References */}
        <div className="mt-12">
          <ComponentReferences
            urls={sliderComponentsUrlReference}
            getTitleFunction={getSliderUrlTitle}
          />
        </div>
      </div>
    </div>
  )
}