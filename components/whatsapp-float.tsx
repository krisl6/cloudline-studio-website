"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

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
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-400"></span>
          <span className="relative">1</span>
        </span>
        <span className="absolute -left-2 -top-2 -z-10 h-full w-full rounded-full bg-green-400/30 transition-all duration-500 group-hover:animate-ping"></span>
      </Link>
    </motion.div>
  )
}
