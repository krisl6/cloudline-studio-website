import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CloudLine Studio. Book a consultation or tell us about your project — we reply within 24 hours.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact | CloudLine Studio",
    description: "Book a consultation or tell us about your project — we reply within 24 hours.",
    url: "/contact/",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
