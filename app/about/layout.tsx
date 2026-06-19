import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet CloudLine Studio, a boutique consultancy helping businesses grow through digital marketing, AI-enabled transformation, and operations. Led by founder Kristine Ling.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About | CloudLine Studio",
    description:
      "A boutique consultancy helping businesses grow through digital marketing, AI-enabled transformation, and operations.",
    url: "/about/",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
