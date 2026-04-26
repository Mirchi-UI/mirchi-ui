"use client"
import { cn } from "@/lib/utils";
import { ThumbsDown, ThumbsUp, X } from "lucide-react";
import { motion } from "motion/react";

type FeedbackBarProps = {
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  onHelpful?: () => void;
  onNotHelpful?: () => void;
  onClose?: () => void;
};

export function FeedbackBar({
  className,
  title = "Was this helpful?",
  icon,
  onHelpful,
  onNotHelpful,
  onClose,
}: FeedbackBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className={cn(
        "group inline-flex w-full items-center justify-between rounded-xl border border-border bg-background/80 backdrop-blur-md shadow-sm",
        "transition-all duration-200 hover:shadow-md",
        className,
      )}
    >
      {/* Left */}
      <div className="flex items-center gap-3 px-4 py-3">
        {icon && (
          <div className="text-muted-foreground group-hover:text-foreground transition-colors">
            {icon}
          </div>
        )}
        <span className="text-sm font-medium text-foreground/90">{title}</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 px-2">
        <button
          type="button"
          onClick={onHelpful}
          aria-label="Helpful"
          className={cn(
            "flex size-9 items-center justify-center rounded-lg",
            "text-muted-foreground transition-all",
            "hover:bg-green-500/10 hover:text-green-600",
            "active:scale-90",
          )}
        >
          <ThumbsUp className="size-4" />
        </button>

        <button
          type="button"
          onClick={onNotHelpful}
          aria-label="Not helpful"
          className={cn(
            "flex size-9 items-center justify-center rounded-lg",
            "text-muted-foreground transition-all",
            "hover:bg-red-500/10 hover:text-red-600",
            "active:scale-90",
          )}
        >
          <ThumbsDown className="size-4" />
        </button>
      </div>

      {/* Divider + Close */}
      <div className="flex items-center border-l border-border/60">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={cn(
            "flex size-10 items-center justify-center",
            "text-muted-foreground transition-all",
            "hover:text-foreground hover:bg-muted/50",
            "active:scale-90",
          )}
        >
          <X className="size-4" />
        </button>
      </div>
    </motion.div>
  );
}
