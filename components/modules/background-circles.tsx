"use client";

import { motion } from "motion/react";
import clsx from "clsx";
import { useState } from "react";

interface BackgroundCirclesProps {
  title?: string;
  description?: string;
  className?: string;
  variant?: keyof typeof COLOR_VARIANTS;
}

const COLOR_VARIANTS = {
  primary: {
    border: [
      "border-emerald-400/50",
      "border-emerald-300/30",
      "border-emerald-200/15",
    ],
    gradient: "from-emerald-400/10",
    glow: "#10b981",
    accent: "bg-emerald-500",
  },
  secondary: {
    border: [
      "border-violet-400/50",
      "border-violet-300/30",
      "border-violet-200/15",
    ],
    gradient: "from-violet-400/10",
    glow: "#8b5cf6",
    accent: "bg-violet-500",
  },
  tertiary: {
    border: [
      "border-amber-400/50",
      "border-amber-300/30",
      "border-amber-200/15",
    ],
    gradient: "from-amber-400/10",
    glow: "#f59e0b",
    accent: "bg-amber-500",
  },
  quaternary: {
    border: ["border-rose-400/50", "border-rose-300/30", "border-rose-200/15"],
    gradient: "from-rose-400/10",
    glow: "#f43f5e",
    accent: "bg-rose-500",
  },
  quinary: {
    border: ["border-cyan-400/50", "border-cyan-300/30", "border-cyan-200/15"],
    gradient: "from-cyan-400/10",
    glow: "#06b6d4",
    accent: "bg-cyan-500",
  },
  senary: {
    border: ["border-blue-400/50", "border-blue-300/30", "border-blue-200/15"],
    gradient: "from-blue-400/10",
    glow: "#3b82f6",
    accent: "bg-blue-500",
  },
  septenary: {
    border: [
      "border-slate-400/50",
      "border-slate-300/30",
      "border-slate-200/15",
    ],
    gradient: "from-slate-400/10",
    glow: "#64748b",
    accent: "bg-slate-500",
  },
  octonary: {
    border: [
      "border-indigo-400/50",
      "border-indigo-300/30",
      "border-indigo-200/15",
    ],
    gradient: "from-indigo-400/10",
    glow: "#6366f1",
    accent: "bg-indigo-500",
  },
} as const;

const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, currentColor 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  </div>
);

export function BackgroundCircles({
  title = "Build Something Amazing",
  description = "Create beautiful, animated interfaces with ease",
  className,
  variant = "octonary",
}: BackgroundCirclesProps) {
  const variantStyles = COLOR_VARIANTS[variant];

  const variants = Object.keys(
    COLOR_VARIANTS
  ) as (keyof typeof COLOR_VARIANTS)[];

  return (
    <div
      className={clsx(
        "relative flex h-screen w-full items-center justify-center overflow-hidden",
        "bg-slate-50 dark:bg-slate-950",
        className
      )}
    >
      <AnimatedGrid />

      <div
        className="pointer-events-none absolute inset-0 transition-colors duration-700"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 45%, ${variantStyles.glow}15, transparent)`,
        }}
      />

      <motion.div className="absolute h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[480px] md:w-[480px]">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={clsx(
              "absolute rounded-full",
              "border-[1.5px]",
              variantStyles.border[i]
            )}
            style={{
              inset: `${i * 32}px`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 60 + i * 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* Orbital dot indicator */}
            <motion.div
              className={clsx(
                "absolute h-2 w-2 rounded-full",
                variantStyles.accent,
                "shadow-lg"
              )}
              style={{
                top: "50%",
                left: 0,
                transform: "translate(-50%, -50%)",
                boxShadow: `0 0 12px ${variantStyles.glow}`,
              }}
            />
          </motion.div>
        ))}

        <motion.div
          className="absolute rounded-full"
          style={{
            inset: "96px",
            background: `radial-gradient(circle, ${variantStyles.glow}20, transparent 70%)`,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-2xl px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className={clsx(
            "mx-auto mb-6 h-1.5 w-12 rounded-full",
            variantStyles.accent
          )}
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />

        <h1
          className={clsx(
            "text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
            "text-slate-900 dark:text-white"
          )}
        >
          {title}
        </h1>

        <motion.p
          className="mx-auto mt-4 max-w-md text-base text-slate-600 dark:text-slate-400 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            type="button"
            className={clsx(
              "rounded-lg px-5 py-2.5 text-sm font-medium",
              "bg-slate-900 text-white dark:bg-white dark:text-slate-900",
              "transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            Get Started
          </button>
          <button
            type="button"
            className={clsx(
              "rounded-lg px-5 py-2.5 text-sm font-medium",
              "border border-slate-200 dark:border-slate-800",
              "text-slate-700 dark:text-slate-300",
              "transition-colors duration-150 hover:bg-slate-100 dark:hover:bg-slate-800/50"
            )}
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <span className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-600">
          MIRCHI UI
        </span>
      </motion.div>
    </div>
  );
}

export default function DemoCircles() {
  const [currentVariant, setCurrentVariant] =
    useState<keyof typeof COLOR_VARIANTS>("octonary");

  const variants = Object.keys(
    COLOR_VARIANTS
  ) as (keyof typeof COLOR_VARIANTS)[];

  function getNextVariant() {
    const currentIndex = variants.indexOf(currentVariant);
    const nextVariant = variants[(currentIndex + 1) % variants.length];
    return nextVariant;
  }

  return (
    <>
      <BackgroundCircles variant={currentVariant} />
      <div className="absolute right-6 top-6 z-20 flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90">
          <div
            className={clsx(
              "h-2.5 w-2.5 rounded-full",
              COLOR_VARIANTS[currentVariant].accent
            )}
          />
          <span className="text-xs font-medium capitalize text-slate-600 dark:text-slate-400">
            {currentVariant}
          </span>
        </div>
        <button
          type="button"
          className={clsx(
            "rounded-full px-4 py-1.5 text-xs font-medium",
            "border border-slate-200 bg-white/90 backdrop-blur-sm",
            "text-slate-700 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300",
            "transition-all duration-200",
            "hover:border-slate-300 hover:shadow-sm dark:hover:border-slate-700",
            "active:scale-[0.97]"
          )}
          onClick={() => {
            setCurrentVariant(getNextVariant());
          }}
        >
          Next Variant
        </button>
      </div>
    </>
  );
}
