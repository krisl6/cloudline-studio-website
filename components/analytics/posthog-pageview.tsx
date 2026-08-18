"use client"

import { Suspense, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { usePostHog } from "posthog-js/react"

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()

  useEffect(() => {
    if (!pathname || !posthog) return
    let url = window.origin + pathname
    const query = searchParams.toString()
    if (query) url += `?${query}`
    posthog.capture("$pageview", { $current_url: url })
  }, [pathname, searchParams, posthog])

  return null
}

// useSearchParams requires a Suspense boundary during static rendering.
export function PostHogPageviewTracker() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  )
}
