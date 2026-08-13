import type { Variants } from "framer-motion"

/** Shared scroll/entrance variants — single source, previously duplicated
 * across ~17 page files. `stagger` (0.12) is used by the primary marketing
 * pages; `staggerFast` (0.1) preserves the tighter timing already used on
 * event and PPC landing pages. Values are unchanged from what each file had. */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

/** Tactile hover-lift for cards. */
export const hoverLift = { y: -6 }
