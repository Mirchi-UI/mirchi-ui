"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Code } from "lucide-react";
import { CodePreview } from "./code-preview";
import { cn } from "@/lib/utils";
import PreviewContent from "./preview-content";

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
}: PreviewTabsProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="preview" className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-0">
          <PreviewContent link={link} prePath={prePath} isBlock={isBlock} />

          {useIframe ? (
            <div className="w-full my-4 border rounded-2xl border-zinc-400 dark:border-zinc-700">
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
            <div
              className={cn(
                "p-2 md:p-8 flex justify-center items-center relative border rounded-2xl my-4 border-zinc-400 dark:border-zinc-800 not-prose",
                compact ? "min-h-[100px]" : "min-h-[400px]",
                isBlock ? "md:p-0" : ""
              )}
            >
              {children}
            </div>
          )}

          {comment.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {comment.map((text, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm font-medium bg-purple-100 dark:bg-purple-950/30 rounded-lg text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50 shadow-xs hover:bg-purple-200/70 dark:hover:bg-purple-950/50 transition-colors"
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
    </div>
  );
}
