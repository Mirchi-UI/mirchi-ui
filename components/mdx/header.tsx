"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  description?: string;
  badge?: string;
  className?: string;
}

export function Header({
  title,
  description,
  badge,
  className,
}: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("mb-8 space-y-3", className)}
    >
      <div className="flex items-center gap-2">
        {badge && (
          <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
            {badge}
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight font-outfit text-foreground/90">
          {title}
        </h2>
        
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[800px]">
            {description}
          </p>
        )}
      </div>
      
      <div className="h-px w-full bg-gradient-to-r from-border/50 via-border to-transparent" />
    </motion.div>
  );
}
