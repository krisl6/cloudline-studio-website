import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CloudLine Studio - Digital Marketing Agency | Performance Marketing & Website Creation",
  description:
    "7+ years experience in performance marketing, website creation, and influencer collaboration across Google, META, TikTok, and XHS. Helping businesses scale with data-driven marketing solutions.",
  generator: 'v0.app'
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
