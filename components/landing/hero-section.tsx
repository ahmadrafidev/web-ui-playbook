export function HeroSection() {
  const heading = "The Documented Web Interface Patterns"
  const subheading = "A curated, essential set of UI patterns for crafting scalable and accessible web interfaces"

  return (
    <section className="mt-4 sm:mt-8 md:mt-12 mb-4 md:mb-6 px-4">
      <div className="container mx-auto text-center relative overflow-hidden">
        <h2 className="max-w-4xl text-2xl sm:text-3xl md:text-5xl tracking-tight text-balance font-semibold text-foreground mb-2 hero-appear anim-delay-100">
          {heading}
        </h2>
        <p className="mx-auto max-w-3xl text-wrap text-sm sm:text-base md:text-lg text-foreground hero-appear anim-delay-100">
          {subheading}
        </p>
      </div>
    </section>
  )
}