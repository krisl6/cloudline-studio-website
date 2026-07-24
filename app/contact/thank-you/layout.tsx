import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You | CloudLine Studio",
  robots: { index: false, follow: false },
}

export default function ContactThankYouLayout({ children }: { children: React.ReactNode }) {
  return children
}
