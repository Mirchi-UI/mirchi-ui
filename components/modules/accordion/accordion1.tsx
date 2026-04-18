"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const items = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript and accessibility in mind.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "Use Tailwind, CSS variables, or className overrides. Fully flexible.",
  },
  {
    id: "3",
    title: "Is it optimized for performance?",
    content: "Yes. Lightweight and tree-shakable.",
  },
  {
    id: "4",
    title: "How accessible is it?",
    content: "Keyboard navigation and semantic HTML supported.",
  },
];

export const Accordion = () => {
  const [open, setOpen] = useState<string | null>("3");

  return (
    <div className="max-w-xl mx-auto space-y-3">
      <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
        Accordion
      </h2>

      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={open === item.id}
          onClick={() => setOpen(open === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
};

function AccordionItem({
  item,
  isOpen,
  onClick,
}: {
  item: { id: string; title: string; content: string };
  isOpen: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        "group rounded-xl border backdrop-blur-md",
        "bg-white/70 dark:bg-neutral-900/70",
        "border-neutral-200/70 dark:border-neutral-800",
        "shadow-sm transition-all duration-300",
        isOpen && "shadow-md",
      )}
    >
      {/* Trigger */}
      <button
        onClick={onClick}
        className={cn(
          "flex w-full items-center justify-between px-4 py-3",
          "text-left text-sm font-medium",
          "text-neutral-800 dark:text-neutral-200",
          "transition-all duration-300",
        )}
      >
        <span className="transition-colors duration-300 group-hover:text-neutral-900 dark:group-hover:text-white">
          {item.title}
        </span>

        {/* Smooth Plus → Minus */}
        <span className="relative w-5 h-5 flex items-center justify-center">
          {/* horizontal */}
          <span className="absolute w-4 h-[2px] bg-current rounded transition-all duration-300" />

          {/* vertical */}
          <span
            className={cn(
              "absolute h-4 w-[2px] bg-current rounded transition-all duration-300",
              isOpen && "opacity-0 scale-y-0",
            )}
          />
        </span>
      </button>

      {/* Content */}
      <div
        style={{ height }}
        className={cn(
          "overflow-hidden",
          "transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
        )}
      >
        <div
          ref={ref}
          className="px-4 pb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          {item.content}
        </div>
      </div>
    </div>
  );
}
