"use client"

import { Fragment, type ReactNode } from "react"
import { motion } from "framer-motion"

/** Infinite horizontal scroll strip — single source for what was previously
 * duplicated between the homepage's client-logo rows and services/website's
 * text MarqueeStrip. Doubles `items` for a seamless loop, same mechanism
 * both call sites already used (`x: [0, -1920]`, linear, infinite repeat). */
export function Marquee<T>({
  items,
  renderItem,
  direction = "left",
  duration = 22,
  className = "",
  trackClassName = "flex w-max items-center gap-10",
}: {
  items: readonly T[]
  renderItem: (item: T, index: number) => ReactNode
  direction?: "left" | "right"
  duration?: number
  className?: string
  trackClassName?: string
}) {
  const doubled = [...items, ...items]
  const distance = 1920
  const animate = direction === "left" ? { x: [0, -distance] } : { x: [-distance, 0] }

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <motion.div
        className={trackClassName}
        animate={animate}
        transition={{ x: { repeat: Number.POSITIVE_INFINITY, repeatType: "loop", duration, ease: "linear" } }}
      >
        {doubled.map((item, i) => (
          <Fragment key={i}>{renderItem(item, i)}</Fragment>
        ))}
      </motion.div>
    </div>
  )
}
