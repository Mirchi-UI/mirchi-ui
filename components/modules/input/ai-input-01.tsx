"use client";

import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-resize-textaria";
import { cn } from "@/lib/utils";
import { Mic } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AiInput01 = ({ onSubmit }: any  ) => {
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
          id="ai-input-01"
          placeholder="Write something..."
          ref={textareaRef}
          value={inputValue}
          className={cn(
            "w-full resize-none overflow-hidden pr-12",
            "rounded-xl border border-gray-300 bg-white",
            "focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          )}
          onChange={(e) => {
            setInputValue(e.target.value);
            adjustHeight();
          }}
          onKeyDown={(e) => {
            // ENTER (submit)
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }

            // SHIFT + ENTER (new line)
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

        {/* Mic Icon */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 cursor-pointer transition-all",
            "text-gray-400 hover:text-gray-600",
            inputValue ? "right-4" : "right-4"
          )}
        >
          <Mic className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default AiInput01;
