"use client";

import React, { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Direction = "left" | "right" | "up" | "down";
type HoverBehavior = "pause" | "slow" | "none";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;

  /**
   * Scroll direction
   * @default "left"
   */
  direction?: Direction;

  /**
   * Speed in seconds (lower = faster)
   * @default 25
   */
  speed?: number;

  /**
   * Number of duplicated groups for seamless loop
   * @default 3
   */
  repeat?: number;

  /**
   * Hover behavior
   * @default "pause"
   */
  hoverBehavior?: HoverBehavior;

  /**
   * Enable edge fade effect
   * @default true
   */
  fade?: boolean;
}

export function Marquee({
  children,
  className,
  direction = "left",
  speed = 25,
  repeat = 3,
  hoverBehavior = "pause",
  fade = true,
  ...props
}: MarqueeProps) {
  const isVertical = direction === "up" || direction === "down";
  const isReverse = direction === "right" || direction === "down";

  return (
    <div
      {...props}
      className={cn(
        "relative overflow-hidden group flex",
        isVertical ? "flex-col" : "flex-row",
        className,
      )}
      style={
        {
          "--marquee-duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      {/* Edge fade */}
      {fade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background to-transparent" />
        </>
      )}

      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 gap-6",
            isVertical ? "flex-col marquee-y" : "flex-row marquee-x",
            isReverse && "reverse",
            hoverBehavior === "pause" &&
              "group-hover:[animation-play-state:paused]",
            hoverBehavior === "slow" && "group-hover:slow",
          )}
        >
          {children}
        </div>
      ))}

      {/* Self-contained animations */}
      <style jsx>{`
        .marquee-x {
          animation: marqueeX var(--marquee-duration) linear infinite;
        }

        .marquee-y {
          animation: marqueeY var(--marquee-duration) linear infinite;
        }

        .reverse {
          animation-direction: reverse;
        }

        .group:hover .slow {
          animation-duration: calc(var(--marquee-duration) * 2);
        }

        @keyframes marqueeX {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes marqueeY {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  );
}
