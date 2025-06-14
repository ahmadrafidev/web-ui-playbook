import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Eye, Keyboard, MousePointer, Volume2 } from "lucide-react"
import Link from "next/link"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
              ← Back to Playbook
            </Link>
            <h1 className="text-2xl font-bold">Accessibility Guidelines</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Web Accessibility</h2>
          <p className="text-xl text-gray-600 mb-6">
            Creating inclusive web experiences that work for everyone, regardless of their abilities or disabilities.
            Accessibility is not just compliance—it's about building better user experiences for all.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>WCAG 2.1</Badge>
            <Badge>Inclusive Design</Badge>
            <Badge>Screen Readers</Badge>
            <Badge>Keyboard Navigation</Badge>
          </div>
        </div>

        {/* WCAG Principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Perceivable</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Information must be presentable in ways users can perceive</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MousePointer className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Operable</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Interface components must be operable by all users</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Volume2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Understandable</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Information and UI operation must be understandable</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Keyboard className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Robust</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Content must be robust enough for various assistive technologies</CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Semantic HTML */}
          <Card>
            <CardHeader>
              <CardTitle>Semantic HTML</CardTitle>
              <CardDescription>
                Use proper HTML elements to convey meaning and structure to assistive technologies.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-600">✓ Good Examples</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <code className="text-sm">
                    {`<!-- Use semantic elements -->`}
                    <br />
                    {`<header>Site header content</header>`}
                    <br />
                    {`<nav>Navigation menu</nav>`}
                    <br />
                    {`<main>Main content area</main>`}
                    <br />
                    {`<article>Blog post content</article>`}
                    <br />
                    {`<aside>Sidebar content</aside>`}
                    <br />
                    {`<footer>Site footer</footer>`}
                    <br />
                    <br />
                    {`<!-- Use proper heading hierarchy -->`}
                    <br />
                    {`<h1>Page Title</h1>`}
                    <br />
                    {`<h2>Section Title</h2>`}
                    <br />
                    {`<h3>Subsection Title</h3>`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-red-600">✗ Bad Examples</h4>
                <div className="bg-red-50 p-4 rounded-lg">
                  <code className="text-sm">
                    {`<!-- Don't use divs for everything -->`}
                    <br />
                    {`<div class="header">Site header</div>`}
                    <br />
                    {`<div class="nav">Navigation</div>`}
                    <br />
                    {`<div class="button" onclick="...">Click me</div>`}
                    <br />
                    <br />
                    {`<!-- Don't skip heading levels -->`}
                    <br />
                    {`<h1>Page Title</h1>`}
                    <br />
                    {`<h4>Section Title</h4> <!-- Skipped h2, h3 -->`}
                  </code>
                </div>
              </div>

              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Pro Tip:</strong> Screen readers use semantic elements to build a page outline. Proper
                  structure helps users navigate efficiently.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* ARIA Labels and Roles */}
          <Card>
            <CardHeader>
              <CardTitle>ARIA Labels and Roles</CardTitle>
              <CardDescription>Enhance accessibility when semantic HTML isn't sufficient.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Common ARIA Attributes</h4>
                <div className="bg-gray-100 p-4 rounded-lg space-y-2">
                  <div>
                    <code className="text-sm font-semibold">aria-label</code>
                    <p className="text-sm text-gray-600">
                      Provides accessible name when visible text isn't descriptive
                    </p>
                    <code className="text-xs">{`<button aria-label="Close dialog">×</button>`}</code>
                  </div>

                  <div>
                    <code className="text-sm font-semibold">aria-labelledby</code>
                    <p className="text-sm text-gray-600">References other elements that describe this element</p>
                    <code className="text-xs">{`<input aria-labelledby="billing-address">`}</code>
                  </div>

                  <div>
                    <code className="text-sm font-semibold">aria-describedby</code>
                    <p className="text-sm text-gray-600">References elements that provide additional description</p>
                    <code className="text-xs">{`<input aria-describedby="password-help">`}</code>
                  </div>

                  <div>
                    <code className="text-sm font-semibold">aria-expanded</code>
                    <p className="text-sm text-gray-600">Indicates if collapsible element is expanded</p>
                    <code className="text-xs">{`<button aria-expanded="false">Menu</button>`}</code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Live Regions</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <code className="text-sm">
                    {`<!-- Announce important updates -->`}
                    <br />
                    {`<div aria-live="polite" id="status"></div>`}
                    <br />
                    {`<div aria-live="assertive" id="errors"></div>`}
                    <br />
                    <br />
                    {`<!-- Screen reader only content -->`}
                    <br />
                    {`<span class="sr-only">Loading...</span>`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Keyboard Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Ensure all interactive elements are accessible via keyboard.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Focus Management</h4>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-blue-500 rounded-lg">
                    <p className="text-sm mb-2">
                      <strong>Visible Focus Indicators</strong>
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Focusable Button
                    </button>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <code className="text-sm">
                      {`/* CSS for focus indicators */`}
                      <br />
                      {`.button:focus {`}
                      <br />
                      {`  outline: 2px solid #3b82f6;`}
                      <br />
                      {`  outline-offset: 2px;`}
                      <br />
                      {`}`}
                      <br />
                      <br />
                      {`/* Or using box-shadow */`}
                      <br />
                      {`.button:focus {`}
                      <br />
                      {`  box-shadow: 0 0 0 2px #3b82f6;`}
                      <br />
                      {`}`}
                    </code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Tab Order</h4>
                <Alert>
                  <Keyboard className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Tab Order Guidelines:</strong>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Follow logical reading order (left-to-right, top-to-bottom)</li>
                      <li>
                        Use <code>tabindex="0"</code> to make non-interactive elements focusable
                      </li>
                      <li>
                        Use <code>tabindex="-1"</code> to remove from tab order but allow programmatic focus
                      </li>
                      <li>Avoid positive tabindex values</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Keyboard Shortcuts</h4>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Tab</strong> - Next focusable element
                    </div>
                    <div>
                      <strong>Shift + Tab</strong> - Previous focusable element
                    </div>
                    <div>
                      <strong>Enter</strong> - Activate button/link
                    </div>
                    <div>
                      <strong>Space</strong> - Activate button/checkbox
                    </div>
                    <div>
                      <strong>Arrow Keys</strong> - Navigate within components
                    </div>
                    <div>
                      <strong>Escape</strong> - Close modal/dropdown
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color and Contrast */}
          <Card>
            <CardHeader>
              <CardTitle>Color and Contrast</CardTitle>
              <CardDescription>
                Ensure sufficient color contrast and don't rely solely on color to convey information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Contrast Requirements</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border rounded-lg">
                    <h5 className="font-semibold text-green-600 mb-2">✓ Good Contrast (4.5:1)</h5>
                    <div className="bg-blue-600 text-white p-3 rounded">White text on blue background</div>
                  </div>

                  <div className="p-4 bg-white border rounded-lg">
                    <h5 className="font-semibold text-red-600 mb-2">✗ Poor Contrast (2.1:1)</h5>
                    <div className="bg-gray-300 text-gray-500 p-3 rounded">Gray text on light gray background</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Don't Rely on Color Alone</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>Good:</strong> Use icons + color for status
                    </p>
                    <div className="flex space-x-4">
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Success
                      </span>
                      <span className="flex items-center text-red-600">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        Error
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm mb-2">
                      <strong>Bad:</strong> Color only
                    </p>
                    <div className="flex space-x-4">
                      <span className="text-green-600">Success</span>
                      <span className="text-red-600">Error</span>
                    </div>
                  </div>
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Testing Tools:</strong> Use tools like WebAIM's Color Contrast Checker, Lighthouse
                  accessibility audit, or browser extensions to test contrast ratios.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Testing Checklist */}
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Testing Checklist</CardTitle>
              <CardDescription>Essential tests to perform before launching your web interface.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Automated Testing</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Run Lighthouse accessibility audit
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Use axe-core browser extension
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Check color contrast ratios
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Validate HTML markup
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Manual Testing</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Navigate using only keyboard
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Test with screen reader (NVDA, JAWS, VoiceOver)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Zoom to 200% and test usability
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Test with users who have disabilities
                      </li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Remember:</strong> Accessibility is an ongoing process, not a one-time checklist. Regular
                    testing and user feedback are essential for maintaining inclusive experiences.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
            ← Back to Home
          </Link>
          <Link href="/best-practices" className="text-blue-600 hover:text-blue-700 transition-colors">
            Next: Best Practices →
          </Link>
        </div>
      </div>
    </div>
  )
}
