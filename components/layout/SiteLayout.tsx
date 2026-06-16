import { Header } from "./Header"
import { Footer } from "./Footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
