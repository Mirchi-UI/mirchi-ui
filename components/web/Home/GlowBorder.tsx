"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: string;
  glowOpacity?: number;
}

export function GlowBorder({
  children,
  className,
  color = "oklch(0.6 0.2 20)",
  glowOpacity = 0.5,
  ...props
}: GlowBorderProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl group overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Outer border container */}
      <div className="absolute inset-0 rounded-2xl border border-foreground/10 pointer-events-none z-10" />
      
      {/* Animated glow effect */}
      <div 
        className="absolute inset-[-2px] bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `conic-gradient(from var(--border-angle, 0deg), transparent, ${color}, transparent 30%)`,
        }}
      />
      
      {/* Inner background + content */}
      <div className="relative z-10 bg-background/80 backdrop-blur-xl h-full w-full rounded-2xl p-1">
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
        {children}
      </div>
    </div>
  );
}
