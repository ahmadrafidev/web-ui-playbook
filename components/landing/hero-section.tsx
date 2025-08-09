export function HeroSection() {
  const heading = "The Documented Web Interface Patterns"
  const subheading = "A curated, essential set of UI patterns for crafting scalable and accessible web interfaces"

  return (
    <section className="mt-4 sm:mt-8 md:mt-12 mb-4 md:mb-6 px-4">
      <div className="container mx-auto text-center relative overflow-hidden">
        <h2 className="max-w-4xl text-2xl sm:text-3xl md:text-5xl tracking-tight text-balance font-semibold text-foreground mb-2 animate-in fade-in slide-in-from-top-24 duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu motion-reduce:animate-none delay-150">
          {heading}
        </h2>
        <p className="mx-auto max-w-3xl text-wrap text-sm sm:text-base md:text-lg text-foreground animate-in fade-in slide-in-from-top-24 duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu motion-reduce:animate-none delay-150">
          {subheading}
        </p>
      </div>
    </section>
  )
}