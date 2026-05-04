import { ArrowUpRight, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlowingStarButton } from "@/components/modules/buttons/GlowingStarButton";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const logos = ["Linear", "Vercel", "Framer", "Notion", "Arc", "Raycast"];

export  const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const cmd = "npx northwind@latest init";

  const copy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Atmospheric backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-aurora"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-24 pt-12 text-center md:pt-20">
        <div className="animate-float-up mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>v1.2 — 48 components, fully typed</span>
        </div>

        <h1
          className="animate-float-up font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-7xl lg:text-[5.25rem]"
          style={{ animationDelay: "80ms" }}
        >
          The UI kit for
          <br />
          <em className="italic text-muted-foreground">
            small, serious teams.
          </em>
        </h1>

        <p
          className="animate-float-up mt-7 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:mt-8 md:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Beautifully composed React components — copy, paste, own the code.
          Built on Tailwind and Radix, designed to feel like your own.
        </p>

        <div
          className="animate-float-up mt-10 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >

           <Link  href={"/docs/components"}  > 
          <Button
            size="lg"
            className="group h-12 rounded-full px-6 text-sm font-medium shadow-[var(--shadow-soft)]"
          >
            Browse components
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
          </Link>


          <Link  href={siteConfig.links.github} target="_blank"> 
            <GlowingStarButton></GlowingStarButton>
          </Link>
        </div>

        {/* Trusted by */}
        <div
          className="animate-float-up mt-20 w-full"
          style={{ animationDelay: "360ms" }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
            Shipping in production at
          </p>
          <div className="relative mx-auto max-w-3xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-marquee gap-14">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={i}
                  className="font-display text-2xl text-foreground/55 transition-colors hover:text-foreground"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
