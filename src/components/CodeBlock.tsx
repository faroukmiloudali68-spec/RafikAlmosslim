import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative my-4">
      <div className="code-block" role="region" aria-label="مسار الملف">
        {code}
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-2 left-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2"
        aria-label={copied ? "تم النسخ" : "نسخ المسار"}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}
