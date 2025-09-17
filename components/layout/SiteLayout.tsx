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
      <TallyScript />
    </div>
  )
}

// Tally form embed script
function TallyScript() {
  return (
    <script 
      dangerouslySetInnerHTML={{
        __html: `
          window.TallyConfig = { 
            "formId": "wbagA7", 
            "popup": { 
              "emoji": { "text": "👋🏻", "animation": "wave" }, 
              "open": { "trigger": "time", "ms": 5000 }, 
              "overlay": true, 
              "autoClose": 2000, 
              "doNotShowAfterSubmit": true, 
              "formEventsForwarding": true 
            }
          };
          (function(d, w) {
            var tallyScript = document.createElement('script');
            tallyScript.src = 'https://tally.so/widgets/embed.js';
            tallyScript.async = true;
            d.getElementsByTagName('head')[0].appendChild(tallyScript);
          })(document, window);
        `,
      }}
    />
  )
}
