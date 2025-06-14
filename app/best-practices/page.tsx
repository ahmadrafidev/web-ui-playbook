"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Zap, Shield, Users, Code } from "lucide-react"
import Link from "next/link"

export default function BestPracticesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/accessibility" className="text-blue-600 hover:text-blue-700 transition-colors">
              ← Previous: Accessibility
            </Link>
            <h1 className="text-2xl font-bold">Best Practices</h1>
            <Link href="/design-system" className="text-blue-600 hover:text-blue-700 transition-colors">
              Next: Design System →
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">UI Best Practices</h2>
          <p className="text-xl text-gray-600 mb-6">
            Time-tested principles and practices for creating exceptional user interfaces. These guidelines will help
            you build consistent, performant, and user-friendly web experiences.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Performance</Badge>
            <Badge>Usability</Badge>
            <Badge>Consistency</Badge>
            <Badge>Maintainability</Badge>
          </div>
        </div>

        <Tabs defaultValue="design" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="design">Design Principles</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="code">Code Quality</TabsTrigger>
            <TabsTrigger value="testing">Testing</TabsTrigger>
          </TabsList>

          {/* Design Principles */}
          <TabsContent value="design" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  User-Centered Design
                </CardTitle>
                <CardDescription>
                  Always prioritize user needs and expectations in your design decisions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">✓ Do</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Conduct user research and testing</li>
                      <li>• Follow established UI patterns</li>
                      <li>• Provide clear visual hierarchy</li>
                      <li>• Use familiar icons and terminology</li>
                      <li>• Design for mobile-first</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">✗ Don't</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Reinvent common UI patterns unnecessarily</li>
                      <li>• Use unclear or ambiguous labels</li>
                      <li>• Hide important actions behind multiple clicks</li>
                      <li>• Assume users know your internal terminology</li>
                      <li>• Design only for desktop</li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <Users className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Jakob's Law:</strong> Users spend most of their time on other sites. They prefer your site
                    to work the same way as all the other sites they already know.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visual Hierarchy</CardTitle>
                <CardDescription>Guide users through your interface with clear visual priorities.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Typography Scale</h4>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold">H1 - Main Heading</div>
                      <div className="text-3xl font-semibold">H2 - Section Heading</div>
                      <div className="text-2xl font-semibold">H3 - Subsection</div>
                      <div className="text-lg font-medium">H4 - Minor Heading</div>
                      <div className="text-base">Body Text - Regular content</div>
                      <div className="text-sm text-gray-600">Caption - Supporting text</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Color Hierarchy</h4>
                    <div className="flex flex-wrap gap-4">
                      <div className="px-4 py-2 bg-blue-600 text-white rounded">Primary Action</div>
                      <div className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Secondary Action</div>
                      <div className="px-4 py-2 border border-gray-300 rounded">Tertiary Action</div>
                      <div className="px-4 py-2 text-blue-600 underline">Link</div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Rule of Thumb:</strong> Use size, color, and spacing to create clear information hierarchy.
                    The most important elements should be the most prominent.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consistency</CardTitle>
                <CardDescription>Maintain consistent patterns throughout your interface.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Visual Consistency</h4>
                    <p className="text-sm text-gray-600">Same colors, fonts, and spacing throughout</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Functional Consistency</h4>
                    <p className="text-sm text-gray-600">Similar actions work the same way</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Content Consistency</h4>
                    <p className="text-sm text-gray-600">Consistent tone, terminology, and structure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Performance */}
          <TabsContent value="performance" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Performance Optimization
                </CardTitle>
                <CardDescription>
                  Fast interfaces lead to better user experiences and higher conversion rates.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Loading Performance</h4>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <code className="text-sm">
                      {`/* Optimize images */`}
                      <br />
                      {`<img src="image.webp" alt="Description" loading="lazy" />`}
                      <br />
                      <br />
                      {`/* Preload critical resources */`}
                      <br />
                      {`<link rel="preload" href="critical.css" as="style" />`}
                      <br />
                      {`<link rel="preload" href="hero-image.jpg" as="image" />`}
                      <br />
                      <br />
                      {`/* Use modern image formats */`}
                      <br />
                      {`<picture>`}
                      <br />
                      {`  <source srcset="image.avif" type="image/avif" />`}
                      <br />
                      {`  <source srcset="image.webp" type="image/webp" />`}
                      <br />
                      {`  <img src="image.jpg" alt="Description" />`}
                      <br />
                      {`</picture>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Runtime Performance</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Minimize DOM manipulations</li>
                    <li>• Use CSS transforms for animations</li>
                    <li>• Implement virtual scrolling for large lists</li>
                    <li>• Debounce user input handlers</li>
                    <li>• Use requestAnimationFrame for smooth animations</li>
                  </ul>
                </div>

                <Alert>
                  <Zap className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Performance Budget:</strong> Aim for First Contentful Paint under 1.5s, Largest Contentful
                    Paint under 2.5s, and Cumulative Layout Shift under 0.1.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Progressive Enhancement</CardTitle>
                <CardDescription>
                  Build interfaces that work for everyone, regardless of their device or connection.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Core Functionality First</h4>
                    <p className="text-sm text-gray-600 mb-2">Ensure basic functionality works without JavaScript</p>
                    <div className="bg-gray-100 p-3 rounded">
                      <code className="text-sm">
                        {`<!-- Form works without JS -->`}
                        <br />
                        {`<form action="/submit" method="POST">`}
                        <br />
                        {`  <input type="email" name="email" required />`}
                        <br />
                        {`  <button type="submit">Subscribe</button>`}
                        <br />
                        {`</form>`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Enhanced Experience</h4>
                    <p className="text-sm text-gray-600">Add JavaScript enhancements progressively</p>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Client-side validation</li>
                      <li>• AJAX form submission</li>
                      <li>• Loading states and animations</li>
                      <li>• Real-time features</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Code Quality */}
          <TabsContent value="code" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Code Organization
                </CardTitle>
                <CardDescription>
                  Write maintainable, scalable code that your team can work with effectively.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Component Structure</h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                    <pre className="text-sm">
                      {`// Good component structure
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onClick,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium'
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  }
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]}\`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <Spinner className="mr-2" />}
      {children}
    </button>
  )
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">CSS Organization</h4>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <code className="text-sm">
                      {`/* Use consistent naming conventions */`}
                      <br />
                      {`.btn { /* Base styles */ }`}
                      <br />
                      {`.btn--primary { /* Primary variant */ }`}
                      <br />
                      {`.btn--secondary { /* Secondary variant */ }`}
                      <br />
                      {`.btn--sm { /* Small size */ }`}
                      <br />
                      {`.btn--lg { /* Large size */ }`}
                      <br />
                      <br />
                      {`/* Group related styles */`}
                      <br />
                      {`.card {`}
                      <br />
                      {`  /* Card base styles */`}
                      <br />
                      {`}`}
                      <br />
                      {`.card__header { /* Card header */ }`}
                      <br />
                      {`.card__body { /* Card body */ }`}
                      <br />
                      {`.card__footer { /* Card footer */ }`}
                    </code>
                  </div>
                </div>

                <Alert>
                  <Code className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Maintainability Tip:</strong> Use consistent naming conventions, write self-documenting
                    code, and include comments for complex logic.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Error Handling</CardTitle>
                <CardDescription>Gracefully handle errors and provide helpful feedback to users.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">User-Friendly Error Messages</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-red-50 border border-red-200 rounded">
                        <p className="text-sm text-red-600">❌ Bad: "Error 500"</p>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded">
                        <p className="text-sm text-green-600">
                          ✅ Good: "We're having trouble saving your changes. Please try again."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Error Boundaries (React)</h4>
                    <div className="bg-gray-100 p-3 rounded">
                      <code className="text-sm">
                        {`// Wrap components with error boundaries`}
                        <br />
                        {`<ErrorBoundary fallback={<ErrorFallback />}>`}
                        <br />
                        {`  <UserProfile />`}
                        <br />
                        {`</ErrorBoundary>`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testing */}
          <TabsContent value="testing" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Testing Strategy
                </CardTitle>
                <CardDescription>
                  Comprehensive testing ensures your UI works reliably across different scenarios.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Unit Tests</h4>
                    <p className="text-sm text-gray-600">Test individual components in isolation</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Integration Tests</h4>
                    <p className="text-sm text-gray-600">Test component interactions and workflows</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">E2E Tests</h4>
                    <p className="text-sm text-gray-600">Test complete user journeys</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Testing Checklist</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Functional Testing</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• All interactive elements work</li>
                        <li>• Forms validate correctly</li>
                        <li>• Navigation functions properly</li>
                        <li>• Error states display correctly</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Cross-Browser Testing</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Chrome, Firefox, Safari, Edge</li>
                        <li>• Mobile browsers (iOS Safari, Chrome Mobile)</li>
                        <li>• Different screen sizes and orientations</li>
                        <li>• Touch and keyboard interactions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Testing Pyramid:</strong> Write many unit tests, some integration tests, and few end-to-end
                    tests. Focus on testing user behavior, not implementation details.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link href="/accessibility" className="text-blue-600 hover:text-blue-700 transition-colors">
            ← Previous: Accessibility
          </Link>
          <Link href="/design-system" className="text-blue-600 hover:text-blue-700 transition-colors">
            Next: Design System →
          </Link>
        </div>
      </div>
    </div>
  )
}
