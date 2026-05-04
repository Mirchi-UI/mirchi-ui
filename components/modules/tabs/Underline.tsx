"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface UnderlineTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
  onTabChange?: (id: string) => void;
}

export function UnderlineTabs({
  tabs,
  defaultValue,
  className,
  onTabChange,
}: UnderlineTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.id);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex border-b border-border/40 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              onTabChange?.(tab.id);
            }}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
