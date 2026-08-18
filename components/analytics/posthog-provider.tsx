"use client"

import { useEffect } from "react"
import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"

// Pageviews are captured manually (see posthog-pageview.tsx) since Next.js App
// Router client-side navigations don't fire posthog-js's automatic pageview
// event — capture_pageview: false avoids double-counting the initial load.
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key) {
      console.warn("[posthog] NEXT_PUBLIC_POSTHOG_KEY is not set — analytics disabled")
      return
    }
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: false,
    })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
