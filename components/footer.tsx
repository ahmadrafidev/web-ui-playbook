import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-transparent py-8 text-center mt-16">
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-normal">
        Built by{" "}
        <Link 
          href="https://github.com/ahmadrafidev" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-700 transition-colors hover:underline"
        >
          Rafi
        </Link>
      </p>
    </footer>
  )
} 