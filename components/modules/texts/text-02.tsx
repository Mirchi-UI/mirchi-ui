"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface TextSplitProps {
  text: string;
  className?: string;
  containerClassName?: string;
  splitSpacing?: number;
  variant?: "default" | "blur" | "rotate";
  direction?: "vertical" | "horizontal";
}

export default function TextSliced({
  text = "Payout fees",
  className = "",
  containerClassName = "",
  splitSpacing = 8,
  variant = "default",
  direction = "vertical",
}: TextSplitProps) {
  const isVertical = direction === "vertical";

  const baseTextStyle =
    "absolute w-full text-4xl font-semibold tracking-tight bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-clip-text text-transparent";

  const getVariantStyles = (type: "top" | "bottom") => {
    const baseOffset = type === "top" ? -splitSpacing : splitSpacing;

    let transform: any = isVertical ? { y: baseOffset } : { x: baseOffset };

    if (variant === "rotate") {
      transform.rotate = type === "top" ? -6 : 6;
    }

    if (variant === "blur") {
      transform.filter = "blur(6px)";
    }

    return {
      initial: {
        clipPath: isVertical
          ? type === "top"
            ? "inset(0 0 50% 0)"
            : "inset(50% 0 0 0)"
          : type === "top"
            ? "inset(0 50% 0 0)"
            : "inset(0 0 0 50%)",
        opacity: 0.85,
        ...transform,
      },
      hover: {
        clipPath: "inset(0 0 0 0)",
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        filter: "blur(0px)",
      },
    };
  };

  return (
    <motion.div
      className={cn(
        "relative inline-block text-center group cursor-pointer",
        containerClassName,
      )}
      initial="initial"
      whileHover="hover"
    >
      {/* Glow */}
      <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-60 transition duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

      {/* TOP */}
      <motion.div
        className={cn(baseTextStyle, className)}
        variants={getVariantStyles("top")}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {text}
      </motion.div>

      {/* BOTTOM */}
      <motion.div
        className={cn(baseTextStyle, className)}
        variants={getVariantStyles("bottom")}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {text}
      </motion.div>

      {/* Light sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0"
        variants={{
          initial: { x: "-120%", opacity: 0 },
          hover: {
            x: "120%",
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      />

      {/* Layout holder */}
      <div
        className={cn(
          "invisible text-4xl font-semibold tracking-tight",
          className,
        )}
      >
        {text}
      </div>
    </motion.div>
  );
}
