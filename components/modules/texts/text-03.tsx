"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface AnimatedTextProps {
  text?: string;
  className?: string;
}

export default function HovText({
  text = "Hover me",
  className = "",
}: AnimatedTextProps) {
  const letters = text.split("");

  return (
    <motion.div
      className="relative inline-block group cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

      {/* Text */}
      <span
        className={cn(
          "relative z-10 inline-block text-3xl sm:text-4xl font-semibold tracking-tight",
          "bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-[length:200%_100%] bg-clip-text text-transparent",
          className,
        )}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              initial: {
                y: 0,
                rotate: 0,
                scale: 1,
              },
              hover: {
                y: -8,
                rotate: index % 2 === 0 ? -8 : 8,
                scale: 1.15,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 12,
                  mass: 0.5,
                  delay: index * 0.025,
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>

      {/* Animated underline beam */}
      <motion.div
        className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 origin-left"
        variants={{
          initial: { scaleX: 0, opacity: 0 },
          hover: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" },
          },
        }}
      />
    </motion.div>
  );
}
