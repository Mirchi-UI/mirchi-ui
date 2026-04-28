"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface PillTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
  onTabChange?: (id: string) => void;
}

export function PillTabs({
  tabs,
  defaultValue,
  className,
  onTabChange,
}: PillTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.id);

  return (
    <div
      className={cn(
        "inline-flex p-1 bg-muted/50 backdrop-blur-sm rounded-full border border-border/40",
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            onTabChange?.(tab.id);
          }}
          className={cn(
            "relative px-6 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full",
            activeTab === tab.id
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="relative z-10">{tab.label}</span>
          {activeTab === tab.id && (
            <motion.div
              layoutId="activePill"
              className="absolute inset-0 bg-primary shadow-sm"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
