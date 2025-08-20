"use client"

import { CheckIcon, CopyCheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"
import { highlight } from "sugar-high"

export default function CodeBlock({ children, className }) {
  const codeString = typeof children === "string" ? children : String(children)
  const language = className?.replace("language-", "") || "text"
  const codeHTML = language == "js" ? highlight(codeString) : codeString;
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Copy failed", err)
    }
  }

  return (
    <code className="relative w-full lg:text-xl block">
      <button
        onClick={handleCopy}
        className="absolute top-1 cursor-pointer right-2 text-xs rounded"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: codeHTML }}></div>
    </code>
  )
}
