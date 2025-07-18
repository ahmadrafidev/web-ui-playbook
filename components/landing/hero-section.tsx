export function HeroSection() {
  return (
    <section className="mt-4 md:mt-8 mb-8 md:mb-10 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-foreground mb-2 animate-in fade-in slide-in-from-top-4 duration-800 ease-out delay-100">
          The documented web interfaces patterns
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-wrap px-4 sm:px-0 animate-in fade-in slide-in-from-top-4 duration-800 ease-out delay-150">
          Essential patterns for crafting scalable and accessible web interfaces.
        </p>
      </div>
    </section>
  )
} 