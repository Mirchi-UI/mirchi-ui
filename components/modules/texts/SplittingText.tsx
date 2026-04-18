"use client";

import {
  type HTMLMotionProps,
  motion,
  type Variants,
  useInView,
  type UseInViewOptions,
} from "motion/react";
import * as React from "react";

const WORD_TOKEN_PATTERN = /\S+\s*/g;

type VariantType = "slide" | "fade" | "blur" | "scale" | "rotate";

type SplittingTextProps = {
  text: string | string[];
  type?: "chars" | "words" | "lines";
  variant?: VariantType;
  className?: string;
  delay?: number;
  inView?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  inViewOnce?: boolean;
} & HTMLMotionProps<"span">;

// 🔥 preset variants
const getVariants = (variant: VariantType): Variants => {
  switch (variant) {
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } },
      };

    case "blur":
      return {
        hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          transition: { duration: 0.6 },
        },
      };

    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        },
      };

    case "rotate":
      return {
        hidden: { opacity: 0, rotate: -10, y: 20 },
        visible: {
          opacity: 1,
          rotate: 0,
          y: 0,
          transition: { duration: 0.6 },
        },
      };

    default: // slide
      return {
        hidden: { x: 80, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.6 },
        },
      };
  }
};

export default function SplittingText({
  text,
  type = "chars",
  variant = "slide",
  className,
  delay = 0,
  inView = true,
  inViewMargin = "0px",
  inViewOnce = true,
  ...props
}: SplittingTextProps) {
  const localRef = React.useRef<HTMLSpanElement>(null);

  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  });

  const isInView = !inView || inViewResult;

  const items = React.useMemo(() => {
    if (Array.isArray(text)) {
      return text;
    }

    if (type === "words") {
      return text.match(WORD_TOKEN_PATTERN) || [];
    }

    return text.split("");
  }, [text, type]);

  const itemVariants = getVariants(variant);

  return (
    <motion.span
      ref={localRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      transition={{
        staggerChildren: type === "chars" ? 0.04 : type === "words" ? 0.1 : 0.2,
        delayChildren: delay / 1000,
      }}
      {...props}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          style={{
            display: "inline-block",
            whiteSpace: type === "chars" ? "pre" : "normal",
          }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}
