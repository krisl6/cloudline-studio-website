const SECTIONS = [
  {
    heading: "Agreement to terms",
    body: "By using cloudline-studio.com or registering for a CloudLine Studio event, you agree to these terms. If you don't agree, please don't use the site or register for an event.",
  },
  {
    heading: "Our services",
    body: "CloudLine Studio provides marketing, digitalization, and AI-enablement consultancy services, along with occasional workshops and events. Details of specific engagements (scope, pricing, deliverables) are agreed separately with each client and aren't governed by this general page.",
  },
  {
    heading: "Event registration and tickets",
    list: [
      "Ticket prices are shown in Malaysian Ringgit (MYR) unless stated otherwise, and are processed securely by Stripe or Billplz.",
      "Tickets are limited and allocated on a first-come, first-served basis.",
      "If an event needs to be rescheduled or cancelled, we'll contact registered attendees with next steps, which may include a refund or credit toward a future event.",
      "Please contact us at hello@cloudline-studio.com as soon as possible if you can no longer attend — we'll do our best to help, though refund availability depends on how close we are to the event date.",
    ],
  },
  {
    heading: "Website content",
    body: "The content on this site — including text, graphics, logos, and workshop materials — belongs to CloudLine Studio or is used with permission, and is provided for your general information. Please don't reproduce or redistribute it without asking us first.",
  },
  {
    heading: "Third-party links and logos",
    body: "This site may reference or display the names and logos of clients, partners, and the tools we teach (such as Claude, Hermes Agent, and OpenClaw). These belong to their respective owners and are shown to describe real client relationships and workshop content, not to imply endorsement unless stated.",
  },
  {
    heading: "No warranty",
    body: "We do our best to keep this site accurate and up to date, but it's provided \"as is\" without warranties of any kind. We're not liable for any indirect or consequential loss arising from your use of the site.",
  },
  {
    heading: "Governing law",
    body: "These terms are governed by the laws of Malaysia, without regard to conflict-of-law principles.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms? Email hello@cloudline-studio.com or message us on WhatsApp at +60 11-2775 5215.",
  },
]

export default function TermsOfServicePage() {
  return (
    <div className="w-full py-14 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3">Legal</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated 24 July 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-lg font-semibold tracking-tight mb-2">{section.heading}</h2>
                {section.body && (
                  <p className="text-sm text-foreground/80 leading-relaxed">{section.body}</p>
                )}
                {section.list && (
                  <ul className="mt-3 space-y-1.5 list-disc pl-5">
                    {section.list.map((item) => (
                      <li key={item} className="text-sm text-foreground/80 leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
