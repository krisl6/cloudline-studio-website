"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

/** Count-up stat value, animating once when scrolled into view. Extracted
 * from app/ai-aeo/page.tsx's original integer-only version and generalized
 * to handle decimals (e.g. "4.9x", "95%") for reuse on /client-results. */
export function AnimatedStatValue({ value }: { value: string }) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
  const target = match ? parseFloat(match[1]) : null
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0
  const suffix = match ? match[2] : ""
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || target === null) return
    const duration = 1200
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(progress * target)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target])

  if (target === null) {
    return <span ref={ref}>{value}</span>
  }
  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
