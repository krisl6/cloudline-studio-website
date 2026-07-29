// Renders a schema.org JSON-LD block. `data` is always static, trusted
// content (translation files / lib/json-ld.ts builders), never user input.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
