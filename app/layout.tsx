import type React from "react"
import "@/styles/globals.css"
import { Inter, Fraunces } from "next/font/google"
import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-provider"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site"
import { JsonLd } from "@/components/seo/json-ld"
import { buildOrganizationJsonLd } from "@/lib/json-ld"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400", "500", "600"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CloudLine Studio: Digital Marketing, Transformation & Operations Consultancy",
    template: "%s | CloudLine Studio",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: 'v0.app',
  keywords: [
    "digital marketing consultancy",
    "business transformation",
    "AI automation",
    "marketing and sales efficiency",
    "interdepartmental synchronization",
    "branding",
    "Malaysia",
    "Singapore",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "CloudLine Studio: Digital Marketing, Transformation & Operations Consultancy",
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_MY",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CloudLine Studio: We help businesses grow, transform, and run better." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudLine Studio: Digital Marketing, Transformation & Operations Consultancy",
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/cloudline_logo_navy.png' },
      { url: '/cloudline_logo_navy.png', type: 'image/png' },
    ],
    apple: [
      { url: '/cloudline_logo_navy.png', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#16233d' },
    { media: '(prefers-color-scheme: light)', color: '#faf8f3' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${inter.variable}`}>
      <body className={`${inter.className} font-sans bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SiteLayout>
              {children}
            </SiteLayout>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <JsonLd data={buildOrganizationJsonLd()} />
      </body>
    </html>
  )
}
