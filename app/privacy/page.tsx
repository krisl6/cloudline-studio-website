const SECTIONS = [
  {
    heading: "Who we are",
    body: "CloudLine Studio (\"CloudLine\", \"we\", \"us\") is a marketing and digitalization consultancy operating across Singapore and Malaysia. This policy explains what information we collect through cloudline-studio.com, why we collect it, and how you can control it.",
  },
  {
    heading: "Information we collect",
    body: "We collect information you provide directly to us, such as when you:",
    list: [
      "Submit the contact or quote request form (name, email, phone, website, and any message or budget details you share)",
      "Join a waitlist (name and email)",
      "Register for or purchase a ticket to an event or workshop (name, email, phone, and payment details processed by our payment provider — we never see or store your full card details)",
    ],
  },
  {
    heading: "Information collected automatically",
    body: "We use Vercel Web Analytics to understand overall traffic and page performance. It reports aggregated, anonymized usage statistics and does not use cookies or track you individually across sites.",
  },
  {
    heading: "How we use your information",
    body: "We use the information we collect to:",
    list: [
      "Respond to your inquiries and quote requests",
      "Process event registrations and ticket purchases, and send confirmation emails",
      "Send service-related updates you've requested (such as waitlist notifications)",
      "Maintain internal business records of client and prospect contacts",
    ],
  },
  {
    heading: "Who we share it with",
    body: "We share information with the service providers that power the features above, only as needed for them to do their job:",
    list: [
      "Resend — to deliver transactional emails (confirmations, notifications)",
      "Stripe and Billplz — to process ticket payments securely",
      "Lark Base and Google Sheets — for our own internal records of inquiries and registrations",
    ],
    footer: "We do not sell your personal information to third parties.",
  },
  {
    heading: "Data retention",
    body: "We keep contact and registration records for as long as needed to respond to your inquiry, deliver the service you registered for, and maintain reasonable business records afterward. You can ask us to delete your information at any time — see \"Your choices\" below.",
  },
  {
    heading: "Your choices",
    body: "You can ask us to access, correct, or delete the personal information we hold about you, or ask us any question about this policy, by emailing hello@cloudline-studio.com or messaging us on WhatsApp at +60 11-2775 5215.",
  },
  {
    heading: "Changes to this policy",
    body: "We may update this policy from time to time as our services change. We'll update the date below when we do.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full py-14 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3">Legal</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated 24 July 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-lg font-semibold tracking-tight mb-2">{section.heading}</h2>
                <p className="text-sm text-foreground/80 leading-relaxed">{section.body}</p>
                {section.list && (
                  <ul className="mt-3 space-y-1.5 list-disc pl-5">
                    {section.list.map((item) => (
                      <li key={item} className="text-sm text-foreground/80 leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}
                {section.footer && (
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{section.footer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
