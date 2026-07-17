"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { SVGProps } from "react"

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path d="M380.9 97.1C339 55.1 283.2 32 224.1 32c-122.4 0-222 99.6-222 222 0 39.3 10.2 77.6 29.6 111.4L2 480l117.7-30.9c32.4 17.7 68.9 27 106.4 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-23.2-115-64-156.9zm-156.8 341.6c-33.2 0-65.7-8.9-93.9-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.8 55.1 81.1 55 130.4 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.7-3.2 3.7-6.5 4.1-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 38.7 59.1 95.5 80.5 47.6 17.9 57.3 14.4 67.7 13.5 10.4-.9 32.8-13.4 37.5-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.4z" />
    </svg>
  )
}

export function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="https://wa.link/fwi8af"
        target="_blank"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 transition-all hover:shadow-xl hover:shadow-foreground/30"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-400"></span>
          <span className="relative">1</span>
        </span>
        <span className="absolute -left-2 -top-2 -z-10 h-full w-full rounded-full bg-foreground/20 transition-all duration-500 group-hover:animate-ping"></span>
      </Link>
    </motion.div>
  )
}
