"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  // Avoid hydration mismatch, render a neutral placeholder until mounted.
  if (!mounted) {
    return <div className="h-7 w-[3.25rem] rounded-full border border-border bg-muted" aria-hidden />
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-7 w-[3.25rem] items-center rounded-full border border-border bg-muted transition-colors duration-300 hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Sun
        className={`absolute left-1.5 size-3.5 transition-opacity duration-300 ${
          isDark ? "opacity-40 text-muted-foreground" : "opacity-0"
        }`}
      />
      <Moon
        className={`absolute right-1.5 size-3.5 transition-opacity duration-300 ${
          isDark ? "opacity-0" : "opacity-40 text-muted-foreground"
        }`}
      />
      <span
        className={`relative z-10 flex size-6 items-center justify-center rounded-full bg-card text-primary shadow-sm transition-transform duration-300 ease-out ${
          isDark ? "translate-x-[1.625rem]" : "translate-x-0.5"
        }`}
      >
        {isDark ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
      </span>
    </button>
  )
}
