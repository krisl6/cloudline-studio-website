import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register Both Attendees",
  robots: { index: false, follow: false },
}

export default function RegisterPairLayout({ children }: { children: React.ReactNode }) {
  return children
}
