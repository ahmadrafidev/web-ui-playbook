import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, ArrowRight, Loader2, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ButtonsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">

        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Buttons</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Buttons are fundamental interactive elements that trigger actions. They should be clear, accessible, and
            provide appropriate feedback to users.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Interactive</Badge>
            <Badge>Accessible</Badge>
            <Badge>Responsive</Badge>
            <Badge>Customizable</Badge>
          </div>
        </div>

        <Tabs defaultValue="variants" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="variants">Variants & Usage</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          {/* Button Variants with integrated best practices */}
          <TabsContent value="variants" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Buttons</CardTitle>
                <CardDescription>
                  Use for the main action on a page. Should be used sparingly - typically one per section.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <Button>Default Primary</Button>
                  <Button size="sm">Small Primary</Button>
                  <Button size="lg">Large Primary</Button>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    With Icon
                  </Button>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Best Practices</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Use high contrast colors and ensure the button stands out</li>
                    <li>• Limit to one primary button per section</li>
                    <li>• Use descriptive labels that clearly indicate the action</li>
                    <li>• Ensure minimum 44px touch target for mobile</li>
                  </ul>
                </div>

                {/* Accessibility */}
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">Accessibility</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>
                      • Use semantic <code>&lt;button&gt;</code> elements
                    </li>
                    <li>• Provide aria-label for icon-only buttons</li>
                    <li>• Ensure 3:1 contrast ratio minimum</li>
                    <li>• Include visible focus indicators</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary Buttons</CardTitle>
                <CardDescription>
                  Use for secondary actions or when you need multiple buttons in the same area.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link Style</Button>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best Practices</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Maintain visual hierarchy - less prominent than primary buttons</li>
                    <li>• Use consistent styling across similar actions</li>
                    <li>• Group related secondary actions together</li>
                    <li>• Consider using outline style for secondary actions</li>
                  </ul>
                </div>

                {/* Accessibility */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Accessibility</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Ensure sufficient contrast even with lighter colors</li>
                    <li>• Maintain consistent focus indicators</li>
                    <li>• Use proper button semantics, not styled divs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button States & Feedback</CardTitle>
                <CardDescription>
                  Buttons should provide clear feedback for different interaction states.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Interactive States</h4>
                    <div className="space-y-3">
                      <Button>Normal State</Button>
                      <Button className="hover:bg-blue-700">Hover State</Button>
                      <Button disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading...
                      </Button>
                      <Button disabled>Disabled State</Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Specialized Buttons</h4>
                    <div className="space-y-3">
                      <Button variant="destructive">Delete Item</Button>
                      <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Success Action
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best Practices</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Always provide loading states for async actions</li>
                    <li>• Use destructive styling sparingly and provide confirmation</li>
                    <li>• Disable buttons during processing to prevent double-clicks</li>
                    <li>• Provide clear visual feedback for all states</li>
                  </ul>
                </div>

                {/* Accessibility */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Accessibility</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Use aria-disabled instead of disabled for better screen reader support</li>
                    <li>• Announce loading states with aria-live regions</li>
                    <li>• Ensure focus indicators are visible in all states</li>
                    <li>• Use role=&quot;button&quot; for non-button elements made interactive</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Implementation */}
          <TabsContent value="implementation" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>React Implementation</CardTitle>
                <CardDescription>Modern React button component with TypeScript support.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    {`import { ButtonHTMLAttributes, forwardRef } from &apos;react&apos;
import { cn } from &apos;@/lib/utils&apos;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: &apos;primary&apos; | &apos;secondary&apos; | &apos;outline&apos; | &apos;ghost&apos; | &apos;destructive&apos;
  size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = &apos;primary&apos;, size = &apos;md&apos;, loading, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          &apos;inline-flex items-center justify-center rounded-md font-medium transition-colors&apos;,
          &apos;focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2&apos;,
          &apos;disabled:pointer-events-none disabled:opacity-50&apos;,
          {
            &apos;bg-blue-600 text-white hover:bg-blue-700&apos;: variant === &apos;primary&apos;,
            &apos;bg-gray-200 text-gray-900 hover:bg-gray-300&apos;: variant === &apos;secondary&apos;,
            &apos;border border-gray-300 bg-white hover:bg-gray-50&apos;: variant === &apos;outline&apos;,
            &apos;hover:bg-gray-100&apos;: variant === &apos;ghost&apos;,
            &apos;bg-red-600 text-white hover:bg-red-700&apos;: variant === &apos;destructive&apos;,
          },
          {
            &apos;h-8 px-3 text-sm&apos;: size === &apos;sm&apos;,
            &apos;h-10 px-4&apos;: size === &apos;md&apos;,
            &apos;h-12 px-6 text-lg&apos;: size === &apos;lg&apos;,
          },
          className
        )}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading && <Loader className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
        {children}
      </button>
    )
  }
)

Button.displayName = &apos;Button&apos;
export { Button }`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>HTML/CSS Implementation</CardTitle>
                <CardDescription>Vanilla HTML and CSS for framework-agnostic usage.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    {`/* CSS */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  pointer-events: none;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-secondary {
  background-color: #e5e7eb;
  color: #374151;
}

.btn-secondary:hover {
  background-color: #d1d5db;
}

/* HTML */
<button class=&quot;btn btn-primary&quot; type=&quot;button&quot;>
  Primary Button
</button>

<button class=&quot;btn btn-secondary&quot; type=&quot;button&quot;>
  Secondary Button
</button>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Implementation */}
          <TabsContent value="examples" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Examples</CardTitle>
                <CardDescription>Examples of button usage.</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Button>Example</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
