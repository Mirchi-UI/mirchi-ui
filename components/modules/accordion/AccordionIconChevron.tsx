"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Shield, Settings, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    id: "1",
    title: "Security",
    icon: Shield,
    content: "Enterprise-grade security with encryption and protection.",
  },
  {
    id: "2",
    title: "Settings",
    icon: Settings,
    content: "Fully customizable system for your workflow.",
  },
  {
    id: "3",
    title: "Performance",
    icon: Zap,
    content: "Blazing fast with optimized rendering.",
  },
];

export function AccordionIconChevron() {
  const [open, setOpen] = useState<string | null>("1");

  return (
    <div className="space-y-3 max-w-xl">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          isOpen={open === item.id}
          onClick={() => setOpen(open === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

function Item({ item, isOpen, onClick }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const Icon = item.icon;

  return (
    <div className="rounded-xl border bg-white/70 dark:bg-neutral-900/70 backdrop-blur border-neutral-200 dark:border-neutral-800">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-4 h-4 opacity-70" />
          <span className="text-sm font-medium">{item.title}</span>
        </div>

        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <div
        style={{ height }}
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        <div ref={ref} className="px-4 pb-4 text-sm text-neutral-600">
          {item.content}
        </div>
      </div>
    </div>
  );
}
