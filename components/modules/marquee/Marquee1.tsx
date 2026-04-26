"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "./Marquee";

interface LogoItem {
  name: string;
  src: string;
}

interface MarqueeLogosProps {
  items?: LogoItem[];
  className?: string;
  size?: number;
  grayscale?: boolean;
  hoverBehavior?: "pause" | "slow" | "none";
  showText?: boolean;
  sectionTitle?: string; // 👈 new
}

export function MarqueeLogos({
  items,
  className,
  size = 40,
  grayscale = true,
  hoverBehavior = "pause",
  showText = true,
  sectionTitle = "Trusted by leading companies",
}: MarqueeLogosProps) {
  const fallbackItems: LogoItem[] = [
    {
      name: "Tesla",
      src: "https://img.icons8.com/?size=96&id=YDmYkmeYAnAg&format=png",
    },
    {
      name: "Ficromaz",
      src: "https://img.icons8.com/?size=96&id=74268&format=png",
    },
    {
      name: "PhonePe",
      src: "https://img.icons8.com/?size=96&id=wO7uLQ2bXGP-&format=png",
    },
  ];

  const data = items ?? fallbackItems;

  return (
    <div className={cn("w-full  h-[400px] flex flex-col items-center justify-center gap-6", className)}>
      {sectionTitle && (
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {sectionTitle}
        </p>
      )}
      <div className="w-full">
        <Marquee
          speed={30}
          hoverBehavior={hoverBehavior}
          className="py-4 w-full"
        >
          {data.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex flex-col items-center justify-center px-8 min-w-[120px]"
            >
              {/* Logo */}
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className={cn(
                  "object-contain transition duration-300",
                  grayscale && "grayscale opacity-70",
                  "hover:grayscale-0 hover:opacity-100",
                )}
                style={{ height: size }}
              />

              {/* Text */}
              {showText && (
                <span className="mt-2 text-sm text-muted-foreground">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
