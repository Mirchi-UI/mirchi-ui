"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CompactPreviewClientProps {
  children: React.ReactNode;
  code: string | null;
  link: string;
  className?: string;
}

export function CompactPreviewClient({
  children,
  code,
  link,
  className,
}: CompactPreviewClientProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700",
        "min-h-[140px] w-full overflow-hidden",
        className
      )}
    >
      {/* Component Area */}
      <div className="flex w-full items-center justify-center">
        {children}
      </div>

      {/* Hover Overlay Actions */}
      <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-lg bg-zinc-100/50 backdrop-blur-sm dark:bg-zinc-800/50"
          onClick={handleCopy}
          title="Copy Code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
          )}
        </Button>
      </div>

      {/* Label (Optional: showing the component name from the link) */}
      <div className="absolute bottom-2 left-3 opacity-0 transition-opacity group-hover:opacity-60">
        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
          {link.split("/").pop()?.replace(".tsx", "")}
        </span>
      </div>
    </div>
  );
}
