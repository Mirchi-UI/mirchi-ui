"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  description?: string;
  badge?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Header({
  title,
  description,
  badge,
  className,
  children,
}: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "mb-10 space-y-4 font-outfit",
        // This targets the h2/h3 passed as children to ensure they keep the premium styling
        "[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:font-outfit [&>h2]:text-foreground/90 [&>h2]:mb-2",
        "[&>h3]:text-xl [&>h3]:font-semibold [&>h3]:tracking-tight [&>h3]:font-outfit [&>h3]:text-foreground/80 [&>h3]:mb-1",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {badge && (
          <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="space-y-3">
        {/* If title is passed as prop, render it (backwards compatibility) */}
        {title && (
          <h2 className="text-2xl font-bold tracking-tight font-outfit text-foreground/90">
            {title}
          </h2>
        )}

        {/* Render children (usually the markdown heading) */}
        {children}

        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[800px] !mt-2">
            {description}
          </p>
        )}
      </div>

      <div className="h-px w-full bg-gradient-to-r from-border/50 via-border to-transparent !mt-6" />
    </motion.div>
  );
}
