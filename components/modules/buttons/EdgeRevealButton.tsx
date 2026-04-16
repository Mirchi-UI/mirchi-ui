import * as React from "react";
import { cn } from "@/lib/utils";

export interface EdgeRevealButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
}

export const EdgeRevealButton: React.FC<EdgeRevealButtonProps> = ({
  children = "Buy Tickets",
  className,
  ...props
}) => {
  return (
    <a
      className={cn(
        "relative inline-block float-right box-border cursor-pointer select-none overflow-visible",

        // Theme-aware border + text
        "border-2 border-black dark:border-white",
        "bg-transparent",
        "text-black dark:text-white",

        // Hover background (important fix)
        "transition-all duration-300 ease-in-out",
        "hover:bg-black dark:hover:bg-white",

        "px-8 py-5",
        "font-bold text-[13px] tracking-[0.05em]",
        "text-center no-underline",
        "group",

        className,
      )}
      {...props}
    >
      {/* left line */}
      <span
        className={cn(
          "absolute top-1/2 left-6 -translate-y-1/2",
          "h-[2px] w-6",
          "bg-black dark:bg-white",
          "transition-all duration-300 ease-linear",
          "group-hover:w-[15px]",
          "group-hover:bg-white dark:group-hover:bg-black",
        )}
      />

      {/* top-key */}
      <span
        className={cn(
          "absolute -top-[2px] left-2.5",
          "h-[2px] w-6 bg-[#e8e8e8] dark:bg-gray-600",
          "transition-[width,left] duration-500 ease-out",
          "group-hover:left-[-2px] group-hover:w-0",
        )}
      />

      {/* text */}
      <span
        className={cn(
          "block pl-8 text-left text-[1.125em] leading-[1.333] uppercase no-underline",

          // FIXED TEXT COLORS
          "text-black dark:text-white",
          "transition-all duration-300 ease-in-out",
          "group-hover:pl-6",

          // hover contrast
          "group-hover:text-white dark:group-hover:text-black",
        )}
      >
        {children}
      </span>

      {/* bottom-key-1 */}
      <span
        className={cn(
          "absolute bottom-[-2px] right-[30px]",
          "h-[2px] w-6 bg-[#e8e8e8] dark:bg-gray-600",
          "transition-[width,right] duration-500 ease-out",
          "group-hover:right-0 group-hover:w-0",
        )}
      />

      {/* bottom-key-2 */}
      <span
        className={cn(
          "absolute bottom-[-2px] right-2.5",
          "h-[2px] w-[10px] bg-[#e8e8e8] dark:bg-gray-600",
          "transition-[width,right] duration-500 ease-out",
          "group-hover:right-0 group-hover:w-0",
        )}
      />
    </a>
  );
};
