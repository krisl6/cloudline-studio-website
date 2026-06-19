import React from "react"

function inlineFormat(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    const boldIdx = remaining.indexOf("**")
    const italicIdx = remaining.indexOf("*")
    const linkIdx = remaining.indexOf("[")

    const indices = [
      boldIdx !== -1 ? boldIdx : Infinity,
      italicIdx !== -1 && italicIdx !== boldIdx ? italicIdx : Infinity,
      linkIdx !== -1 ? linkIdx : Infinity,
    ]
    const minIdx = Math.min(...indices)

    if (minIdx === Infinity) {
      parts.push(remaining)
      break
    }

    if (minIdx > 0) {
      parts.push(remaining.slice(0, minIdx))
      remaining = remaining.slice(minIdx)
      key++
      continue
    }

    // Bold
    if (remaining.startsWith("**")) {
      const end = remaining.indexOf("**", 2)
      if (end !== -1) {
        parts.push(<strong key={key++}>{remaining.slice(2, end)}</strong>)
        remaining = remaining.slice(end + 2)
        continue
      }
    }

    // Italic (single *)
    if (remaining.startsWith("*") && !remaining.startsWith("**")) {
      const end = remaining.indexOf("*", 1)
      if (end !== -1) {
        parts.push(<em key={key++}>{remaining.slice(1, end)}</em>)
        remaining = remaining.slice(end + 1)
        continue
      }
    }

    // Link [text](url)
    if (remaining.startsWith("[")) {
      const textEnd = remaining.indexOf("]")
      if (textEnd !== -1 && remaining[textEnd + 1] === "(") {
        const urlEnd = remaining.indexOf(")", textEnd + 2)
        if (urlEnd !== -1) {
          const linkText = remaining.slice(1, textEnd)
          const url = remaining.slice(textEnd + 2, urlEnd)
          const isExternal = url.startsWith("http")
          parts.push(
            <a
              key={key++}
              href={url}
              className="text-primary underline underline-offset-2 hover:opacity-80"
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {linkText}
            </a>
          )
          remaining = remaining.slice(urlEnd + 1)
          continue
        }
      }
    }

    // No match found, advance by 1
    parts.push(remaining[0])
    remaining = remaining.slice(1)
    key++
  }

  return parts
}

function parseTable(lines: string[]): React.ReactNode {
  const rows = lines.map((l) =>
    l
      .split("|")
      .filter((_, i, a) => i > 0 && i < a.length - 1)
      .map((c) => c.trim())
  )
  const [header, , ...body] = rows
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            {header.map((cell, i) => (
              <th key={i} className="text-left py-2 pr-4 font-semibold text-foreground">
                {inlineFormat(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="border-b border-border/50">
              {row.map((cell, ci) => (
                <td key={ci} className="py-2 pr-4 text-muted-foreground align-top">
                  {inlineFormat(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // Skip empty lines
    if (line.trim() === "") {
      i++
      continue
    }

    // HR
    if (line.trim() === "---") {
      elements.push(<hr key={key++} className="my-8 border-border" />)
      i++
      continue
    }

    // H1
    if (line.startsWith("# ") && !line.startsWith("## ")) {
      elements.push(
        <h1 key={key++} className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4 mt-8 leading-tight">
          {inlineFormat(line.slice(2))}
        </h1>
      )
      i++
      continue
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-display text-2xl font-semibold tracking-tight text-foreground mb-3 mt-10">
          {inlineFormat(line.slice(3))}
        </h2>
      )
      i++
      continue
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="font-display text-xl font-semibold text-foreground mb-2 mt-8">
          {inlineFormat(line.slice(4))}
        </h3>
      )
      i++
      continue
    }

    // Table
    if (line.startsWith("|")) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i])
        i++
      }
      elements.push(React.cloneElement(parseTable(tableLines) as React.ReactElement, { key: key++ }))
      continue
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={key++} className="list-disc list-outside pl-5 space-y-1.5 my-4 text-muted-foreground">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {inlineFormat(item)}
            </li>
          ))}
        </ul>
      )
      continue
    }

    // Skip frontmatter-style lines (e.g. "**Target keyword:** ...")
    if (line.startsWith("**Target keyword:**") || line.startsWith("**Funnel stage:**") || line.startsWith("**Word count:**") || line.startsWith("**CTA:**")) {
      i++
      continue
    }

    // Paragraph, collect consecutive non-special lines
    const paraLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("|") &&
      lines[i].trim() !== "---"
    ) {
      paraLines.push(lines[i])
      i++
    }

    if (paraLines.length > 0) {
      const text = paraLines.join(" ")
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed mb-4">
          {inlineFormat(text)}
        </p>
      )
    }
  }

  return <div className="space-y-0">{elements}</div>
}
