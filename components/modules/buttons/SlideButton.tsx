import * as React from "react";
import { cn } from "@/lib/utils";
import { Trash2, Plus, CheckCircle, LucideIcon } from "lucide-react";

type SlideRevealVariant = "delete" | "add" | "confirm";

const variantConfig: Record<
  SlideRevealVariant,
  {
    label: string;
    gradient: string;
    glow: string;
    icon: LucideIcon;
  }
> = {
  delete: {
    label: "Delete",
    gradient: "from-rose-500 via-red-500 to-red-600",
    glow: "shadow-rose-500/20",
    icon: Trash2,
  },
  add: {
    label: "Add",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    glow: "shadow-emerald-500/20",
    icon: Plus,
  },
  confirm: {
    label: "Confirm",
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
    glow: "shadow-blue-500/20",
    icon: CheckCircle,
  },
};

export interface SlideRevealButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: SlideRevealVariant;
  label?: string;
  className?: string;
}

export const SlideRevealButton: React.FC<SlideRevealButtonProps> = ({
  variant = "delete",
  label,
  className,
  ...props
}) => {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <button
      {...props}
      className={cn(
        "group relative overflow-hidden",
        "w-[160px] h-[52px] rounded-xl",
        "text-white font-medium",
        "transition-all duration-300 ease-out",
        "active:scale-[0.97]",
        "focus:outline-none focus:ring-2 focus:ring-white/20",
        "shadow-lg",
        config.glow,
        className,
      )}
    >
      {/* animated background */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          config.gradient,
          "transition-transform duration-300 ease-out",
          "group-hover:scale-[1.05]",
        )}
      />

      {/* soft glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

      {/* moving content */}
      <div
        className={cn(
          "relative h-full w-full flex items-center",
          "transition-transform duration-300 ease-out",
          "group-hover:-translate-x-12",
        )}
      >
        {/* label */}
        <span className="w-full text-center transition-opacity duration-200 group-hover:opacity-0">
          {label ?? config.label}
        </span>

        {/* icon */}
        <span className="w-[60px] flex items-center justify-center flex-shrink-0">
          <div
            className={cn(
              "p-2 rounded-lg bg-white/10",
              "transition-all duration-300",
              "group-hover:bg-white/20",
            )}
          >
            <Icon className="w-4 h-4" />
          </div>
        </span>
      </div>

      {/* bottom glow line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-white/30" />
    </button>
  );
};
