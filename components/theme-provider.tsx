"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps as NextThemesProps } from "next-themes"

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: NextThemesProps['attribute']
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

/**
 * Theme provider component that wraps next-themes ThemeProvider
 * Provides theme switching functionality with system preference support
 */
export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = true,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
} 