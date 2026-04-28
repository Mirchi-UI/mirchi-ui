"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface SoftTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
  onTabChange?: (id: string) => void;
}

export function SoftTabs({
  tabs,
  defaultValue,
  className,
  onTabChange,
}: SoftTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.id);

  return (
    <div className={cn("flex p-1.5 bg-secondary/30 rounded-2xl gap-1", className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              onTabChange?.(tab.id);
            }}
            className={cn(
              "relative flex-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
              isActive
                ? "text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-secondary/50"
            )}
          >
            <span className="relative z-10">{tab.label}</span>
            {isActive && (
              <motion.div
                layoutId="softActive"
                className="absolute inset-0 bg-background rounded-xl border border-border/50"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
