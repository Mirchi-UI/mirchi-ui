"use client";

import React from "react";
import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export default function EmptyState({
  title = "Nothing here yet",
  description = "There’s no content available in this section.",
  actionLabel,
  onAction,
  icon,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        "py-16 px-4 rounded-xl border",
        "bg-white dark:bg-neutral-900",
        "border-neutral-200 dark:border-neutral-800",
        className,
      )}
    >
      {/* Icon */}
      <div className="mb-4 text-neutral-400 dark:text-neutral-500">
        {icon || <Inbox className="w-10 h-10" />}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-sm">
        {description}
      </p>

      {/* Action */}
      {actionLabel && (
        <button
          onClick={onAction}
          className={cn(
            "mt-4 px-4 py-2 rounded-md text-sm font-medium",
            "bg-neutral-900 text-white",
            "hover:bg-neutral-800",
            "transition-colors duration-200",
          )}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
