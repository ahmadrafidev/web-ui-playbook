"use client"

import { useState, useMemo } from "react"
import { ComponentSection } from "@/types/component"

export function useComponentSearch(components: ComponentSection[]) {
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredComponents = useMemo(() => {
    return components.filter((section) =>
      section.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [components, searchQuery])

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  return {
    searchQuery,
    setSearchQuery,
    filteredComponents,
    handleClearSearch,
    resultsCount: filteredComponents.length
  }
} 