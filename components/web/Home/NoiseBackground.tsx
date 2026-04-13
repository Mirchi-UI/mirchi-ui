"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function NoiseBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none opacity-5 bg-noise",
        className
      )}
    />
  );
}
