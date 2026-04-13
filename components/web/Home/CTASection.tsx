"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { GlowBorder } from "./GlowBorder";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-orange-600/10 blur-[180px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <GlowBorder color="oklch(0.6 0.25 20)" className="max-w-5xl mx-auto rounded-[3rem]">
          <div className="p-12 md:p-24 text-center glass border-0 rounded-[3rem] relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-bounce">
                 <Sparkles className="w-4 h-4 text-orange-500" />
                 <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Fast-Track Your UI</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                Ready to turn up the <br />
                <span className="text-orange-500 italic">Heat?</span>
              </h2>
              
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium">
                Join hundreds of developers building premium experiences with 
                Mirchi UI. Open source, customizable, and production-ready.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-16 px-10 rounded-full bg-foreground text-background hover:bg-foreground/90 text-lg group">
                  <Link href="/docs/components" className="flex items-center gap-3">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 rounded-full glass border-foreground/10 text-lg hover:bg-foreground/5">
                  <Link href="https://github.com/#">Star on GitHub</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </GlowBorder>
      </div>
    </section>
  );
}
