"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Eye,
  Code,
  RefreshCw,
  Maximize2,
  X,
  Monitor,
  Tablet,
  Smartphone,
  Copy,
  Check,
} from "lucide-react";
import { CodePreview } from "./code-preview";
import { cn } from "@/lib/utils";
import PreviewContent from "./preview-content";
import { Button } from "@/components/ui/button";

interface PreviewTabsProps {
  link: string;
  prePath: string;
  code: string | null;
  children: React.ReactNode;
  useIframe?: boolean;
  compact?: boolean;
  comment?: string[];
  isBlock?: boolean;
  className?: string;
  isFull?: boolean;
}

export function PreviewTabs({
  link,
  prePath,
  code,
  children,
  useIframe = false,
  compact = false,
  comment = [],
  isBlock = false,
  className = "",
  isFull= true,
}: PreviewTabsProps) {
  const [key, setKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">(
    "desktop",
  );
  const [copied, setCopied] = useState(false);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

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

  const viewportWidths = {
    desktop: "100%",
    tablet: "768px",
    mobile: "390px",
  };

  const previewContent = (
    <div className="w-full flex justify-center">
      <div
        key={key}
        style={{ width: viewportWidths[viewport] }}
        className={cn(
          "relative border rounded-2xl my-4 overflow-hidden transition-all duration-300",
          "bg-white dark:bg-zinc-950  shadow-sm",

          // ✅ HEIGHT CONTROL
          isFullscreen
            ? "w-full h-full border-none rounded-none m-0"
            : isBlock
              ? "h-[450px] overflow-auto" // screen mode
              : "h-auto min-h-[120px]", // component mode

          viewport !== "desktop"
            ? "border-zinc-300 dark:border-zinc-700 shadow-xl"
            : "",
        )}
      >
        {/* 🔥 CONTENT WRAPPER */}
        <div
          className={cn(
            "relative z-10 w-full",
            isBlock ? "h-full overflow-auto" : "",
          )}
        >
          <div
            className={cn(
              "w-full flex justify-center",
              isBlock
                ? "items-start max-h-[450px] border  overflow-auto " // 👈 FIX for big layouts
                : "items-center py-10 h-[450px]", // 👈 FIX for small components
            )}
          >
            {children}
          </div>
        </div>

        {/* Fullscreen Button */}
        {isFull && (
          <div className="absolute top-4 right-4 z-20">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="h-8 w-8 rounded-lg bg-zinc-100/50 backdrop-blur-sm dark:bg-zinc-800/50"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          {/* Left: Preview/Code Switch */}
          <TabsList className="bg-zinc-100 dark:bg-zinc-900/50 p-1 rounded-full h-10 border border-zinc-200 dark:border-zinc-800 shrink-0">
            <TabsTrigger
              value="preview"
              className="rounded-full px-4 py-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm transition-all flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="rounded-full px-4 py-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm transition-all flex items-center gap-2"
            >
              <Code className="w-4 h-4" />
              Code
            </TabsTrigger>
          </TabsList>

          {/* Right: Viewport Controls & Actions */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {/* Viewport Switcher */}
            <div className="hidden md:flex items-center bg-zinc-100 dark:bg-zinc-900/50 p-1 rounded-full border border-zinc-200 dark:border-zinc-800">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewport("desktop")}
                className={cn(
                  "h-8 w-8 rounded-full transition-all",
                  viewport === "desktop"
                    ? "bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500",
                )}
                title="Desktop View"
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewport("tablet")}
                className={cn(
                  "h-8 w-8 rounded-full transition-all",
                  viewport === "tablet"
                    ? "bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500",
                )}
                title="Tablet View"
              >
                <Tablet className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewport("mobile")}
                className={cn(
                  "h-8 w-8 rounded-full transition-all",
                  viewport === "mobile"
                    ? "bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500",
                )}
                title="Mobile View"
              >
                <Smartphone className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopy}
                className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                title="Copy Code"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleRefresh}
                className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                title="Refresh Preview"
              >
                <RefreshCw className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
              </Button>
            </div>
          </div>
        </div>

        <TabsContent value="preview" className="mt-0">
          {useIframe ? (
            <div className="w-full my-4 border rounded-2xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden">
              <div className="relative w-full h-dvh overflow-hidden">
                <iframe
                  title={link}
                  src={`${prePath}/preview/${link}`}
                  className="w-full h-full overflow-y-auto list-none"
                  style={{
                    border: "none",
                    transform: "scale(0.95)",
                  }}
                />
              </div>
            </div>
          ) : (
            previewContent
          )}

          {comment.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {comment.map((text, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm font-medium bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors"
                >
                  {text}
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="code" className="mt-0">
          <CodePreview code={code} filePath={`${link}.tsx`} />
        </TabsContent>
      </Tabs>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[9999] bg-white dark:bg-zinc-950 flex flex-col p-4 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {link.split("/").pop()?.replace(".tsx", "")}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 border border-zinc-200 dark:border-zinc-800 rounded-3xl relative overflow-hidden bg-white dark:bg-zinc-950">
            {/* Grid Background Pattern for Fullscreen */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:24px_24px]"></div>
            </div>

            <div
              className={cn(
                "relative z-10 w-full h-full overflow-auto flex justify-center",
                isBlock ? "items-start" : "items-center p-4",
              )}
            >
              <div
                className={cn(
                  "relative",
                  isBlock ? "w-full max-w-[1400px]" : "w-auto min-w-min",
                )}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
