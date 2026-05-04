"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface GlowTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
  onTabChange?: (id: string) => void;
}

export function GlowTabs({
  tabs,
  defaultValue,
  className,
  onTabChange,
}: GlowTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.id);

  return (
    <div className={cn("flex items-center gap-2", className)}>
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
              "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
              isActive
                ? "text-primary brightness-110"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="relative z-10">{tab.label}</span>
            {isActive && (
              <>
                <motion.div
                  layoutId="glowBackground"
                  className="absolute inset-0 bg-primary/10 rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
                <motion.div
                  layoutId="glowBorder"
                  className="absolute inset-0 rounded-lg border border-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}
