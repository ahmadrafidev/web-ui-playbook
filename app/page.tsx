"use client"

import { componentSections } from "@/data/component-sections"
import { useComponentSearch } from "@/hooks/use-component-search"
import { HeroSection, SearchBar, ComponentGrid, NoResults } from "@/components/landing"

export default function HomePage() {
  const { 
    searchQuery, 
    setSearchQuery, 
    filteredComponents, 
    handleClearSearch, 
    resultsCount 
  } = useComponentSearch(componentSections)

  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-gradient-to-br from-background to-secondary/10">
      {/* Hero Section */}
      <HeroSection />

      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClearSearch={handleClearSearch}
        resultsCount={resultsCount}
      />

      {/* Component Grid */}
      <section className="px-4 pb-8">
        <div className="container mx-auto">
          {filteredComponents.length === 0 && searchQuery ? (
            <NoResults onClearSearch={handleClearSearch} />
          ) : (
            <ComponentGrid components={filteredComponents} />
          )}
        </div>
      </section>
    </div>
  )
}

HomePage.displayName = "HomePage"
