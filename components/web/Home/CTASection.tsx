"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { GlowingStarButton } from "@/components/modules/buttons/GlowingStarButton";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-accent/10 blur-[180px] rounded-full -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-1 glass bg-background/40">
          <div className="p-12 md:p-24 text-center glass border-0 rounded-[3rem] relative overflow-hidden bg-background/50">
            <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent/20 mb-8 bg-background/80 shadow-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium text-accent">
                  Fast-Track Your UI
                </span>
              </div>

              <h2 className="font-display text-5xl md:text-7xl mb-8 leading-[1.02] tracking-tight text-balance mx-auto">
                Ready to turn up the <br />
                <em className="italic text-muted-foreground">Heat?</em>
              </h2>

              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium leading-relaxed">
                Join hundreds of developers building premium experiences with
                Mirchi UI. Open source, customizable, and production-ready.
              </p>

              <div
                className="animate-float-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                style={{ animationDelay: "240ms" }}
              >
                <Link href={"/docs/components"}>
                  <Button
                    size="lg"
                    className="group h-12 rounded-full px-6 text-sm font-medium shadow-[var(--shadow-soft)]"
                  >
                    Browse components
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                </Link>

                <Link href={siteConfig.links.github} >
                  <GlowingStarButton></GlowingStarButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
