"use client";

import { cn } from "@/lib/utils";
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { highlight, Pre } from "codehike/code";

interface CodePreviewProps {
  code: string | null;
  className?: string;
  language?: string;
  filePath?: string;
}

export function CodePreview({
  code,
  className,
  language,
  filePath,
}: CodePreviewProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<Awaited<
    ReturnType<typeof highlight>
  > | null>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-detect language from file path or use provided language
  const detectedLanguage =
    language ||
    (() => {
      if (filePath) {
        const ext = filePath.split(".").pop()?.toLowerCase();
        const langMap: Record<string, string> = {
          tsx: "tsx",
          ts: "typescript",
          jsx: "jsx",
          js: "javascript",
          css: "css",
          scss: "scss",
          json: "json",
          md: "markdown",
          mdx: "mdx",
          html: "html",
          py: "python",
          java: "java",
          go: "go",
          rs: "rust",
        };
        return langMap[ext || ""] || "tsx";
      }
      return "tsx";
    })();

  // Highlight code using CodeHike
  useEffect(() => {
    if (code) {
      highlight(
        { value: code, lang: detectedLanguage, meta: "" },
        "github-dark"
      ).then((highlighted) => {
        setHighlightedCode(highlighted);
        // Small delay to allow DOM to render the highlighted code
        setTimeout(() => {
          if (contentRef.current) {
            setIsOverflowing(contentRef.current.scrollHeight > 384);
          }
        }, 100);
      });
    }
  }, [code, detectedLanguage]);

  const handleCopy = async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  if (!code) {
    return (
      <div className={cn("p-4 text-sm text-muted-foreground", className)}>
        Code not available
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative border rounded-2xl border-zinc-200 dark:border-zinc-800 overflow-hidden",
        className
      )}
    >
      <div className="absolute top-3 right-3 z-10">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-3 text-xs bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
        >
          {isCopied ? (
            <>
              <Check className="h-3.5 w-3.5 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>

      <div
        ref={contentRef}
        className={cn(
          "overflow-hidden transition-all duration-300 relative",
          !isExpanded && isOverflowing ? "max-h-96" : "max-h-[2000px]"
        )}
      >
        {highlightedCode ? (
          <div className="bg-zinc-950 dark:bg-zinc-900 p-4 md:p-6 min-h-full">
            <Pre
              code={highlightedCode}
              style={{ background: "transparent", padding: 0 }}
            />
          </div>
        ) : (
          <pre className="overflow-x-auto bg-zinc-950 dark:bg-zinc-900 p-4 md:p-6 text-sm text-zinc-50 min-h-full">
            <code className="font-mono">{code}</code>
          </pre>
        )}
        
        {/* Gradient Overlay when collapsed */}
        {!isExpanded && isOverflowing && (
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 dark:from-zinc-900 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Expand/Collapse Button */}
      {isOverflowing && (
        <div
          className={cn(
            "flex items-center justify-center p-2 bg-zinc-950 dark:bg-zinc-900 border-t border-zinc-800",
            !isExpanded && "absolute bottom-0 left-0 right-0 border-t-0 bg-transparent"
          )}
        >
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "text-xs font-medium px-4 h-8 transition-colors",
              !isExpanded
                ? "bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 backdrop-blur-md shadow-lg"
                : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
            )}
          >
            {isExpanded ? (
              <>
                Collapse Code
                <ChevronUp className="h-3.5 w-3.5 ml-1.5" />
              </>
            ) : (
              <>
                Expand Code
                <ChevronDown className="h-3.5 w-3.5 ml-1.5" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
