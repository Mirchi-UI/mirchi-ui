"use client";

import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-resize-textaria";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import { useState } from "react";

// Dark variation - sleek dark theme with accent color
const AiInputDark = ({ onSubmit }: { onSubmit?: (value: string) => void }) => {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 40,
    maxHeight: 200,
  });

  const [inputValue, setInputValue] = useState("");

  const reset = () => {
    setInputValue("");
    adjustHeight(true);
  };

  const handleSubmit = () => {
    if (onSubmit && inputValue.trim().length > 0) {
      onSubmit(inputValue);
    }
    reset();
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl mx-auto">
        <Textarea
          placeholder="Type your message..."
          ref={textareaRef}
          value={inputValue}
          className={cn(
            "w-full resize-none overflow-hidden pr-12 pl-4",
            "rounded-xl border border-neutral-700 bg-neutral-900",
            "text-neutral-50 placeholder:text-neutral-500",
            "focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
          )}
          onChange={(e) => {
            setInputValue(e.target.value);
            adjustHeight();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
            if (e.key === "Enter" && e.shiftKey) {
              e.preventDefault();
              const start = e.currentTarget.selectionStart;
              const end = e.currentTarget.selectionEnd;
              const newValue =
                inputValue.substring(0, start) +
                "\n" +
                inputValue.substring(end);
              setInputValue(newValue);
              requestAnimationFrame(() => adjustHeight());
            }
          }}
        />

        {/* Zap Icon */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 right-4 transition-colors",
            inputValue ? "text-amber-500" : "text-neutral-600"
          )}
        >
          <Zap className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default AiInputDark;
