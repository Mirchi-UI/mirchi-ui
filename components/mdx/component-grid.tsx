"use client";

import { cn } from "@/lib/utils";

interface ComponentGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
}

export function ComponentGrid({
  children,
  className,
  cols = 3,
}: ComponentGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid gap-4 my-6",
        gridCols[cols],
        className
      )}
    >
      {children}
    </div>
  );
}
