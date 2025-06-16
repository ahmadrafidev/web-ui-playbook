import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-transparent py-8 text-center mt-16">
      <p className="text-muted-foreground text-sm md:text-base font-normal">
        Built by{" "}
        <Link 
          href="https://github.com/ahmadrafidev" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors hover:underline font-medium"
        >
          Rafi
        </Link>
      </p>
    </footer>
  )
} 