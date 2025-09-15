"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.link/fwi8af"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  )
}
