import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/components/language-provider"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CloudLine Studio — Digital Marketing, Transformation & Operations Consultancy",
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
    title: "CloudLine Studio — Digital Marketing, Transformation & Operations Consultancy",
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_MY",
    images: [{ url: "/cloudline_logo.png", width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudLine Studio — Digital Marketing, Transformation & Operations Consultancy",
    description: SITE_DESCRIPTION,
    images: ["/cloudline_logo.png"],
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
      { url: '/cloudline_logo.png' },
      { url: '/cloudline_logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/cloudline_logo.png', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#15171f' },
    { media: '(prefers-color-scheme: light)', color: '#faf8f3' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${inter.variable}`}>
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
      </body>
    </html>
  )
}
