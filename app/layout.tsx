import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { SiteLayout } from "@/components/layout/SiteLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CloudLine Studio - B2B Data Analytics & Customer Insights | HR, Ecommerce & SaaS Solutions",
  description:
    "Transform your business with data-driven customer behavior insights. Specialized analytics solutions for HR companies, ecommerce platforms, and SaaS businesses. Turn data into actionable growth strategies.",
  generator: 'v0.app',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://tally.so/widgets/embed.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.TallyConfig = { "formId": "wbagA7", "popup": { "emoji": { "text": "👋🏻", "animation": "wave" }, "open": { "trigger": "time", "ms": 5000 }, "overlay": true, "autoClose": 2000, "doNotShowAfterSubmit": true, "formEventsForwarding": true }};`
        }} />
      </head>
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SiteLayout>
            {children}
          </SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
