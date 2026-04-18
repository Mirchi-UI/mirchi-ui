"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, type UseInViewOptions } from "motion/react";

interface TypewriterTextProps {
  text?: string;
  speed?: number; // lower = faster
  className?: string;
  showCursor?: boolean;

  // 👇 inView control (like your other component)
  inView?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  inViewOnce?: boolean;
}

export default function TypewriterText({
  text = "The game is afoot, and every clue whispers a hidden truth...",
  speed = 40,
  className = "",
  showCursor = true,
  inView = true,
  inViewMargin = "0px",
  inViewOnce = true,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const frameRef = useRef<number | null>(null);
  const indexRef = useRef(0);
  const lastTimeRef = useRef(0);

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, {
    once: inViewOnce,
    margin: inViewMargin,
  });

  const shouldRun = !inView || isVisible;

  useEffect(() => {
    if (!shouldRun) return;

    const step = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;

      const delta = time - lastTimeRef.current;

      if (delta > speed) {
        setDisplayText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
        lastTimeRef.current = time;
      }

      if (indexRef.current < text.length) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, speed, shouldRun]);

  return (
    <div ref={ref} className={`font-mono ${className}`}>
      <span className="text-2xl md:text-4xl font-semibold text-slate-800 dark:text-slate-200">
        {displayText}
        {showCursor && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="ml-1 text-purple-500"
          >
            |
          </motion.span>
        )}
      </span>
    </div>
  );
}
