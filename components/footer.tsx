import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-transparent pb-4 text-center mt-12">
      <p className="text-muted-foreground text-xs md:text-sm font-normal">
        Built by{" "}
        <Link 
          href="https://x.com/rafiwiranaa" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors hover:underline font-medium"
        >
          Rafi
        </Link>
        . The source code is available on{" "}
        <Link 
          href="https://github.com/ahmadrafidev/web-ui-playbook" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors hover:underline font-medium"
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  )
} 