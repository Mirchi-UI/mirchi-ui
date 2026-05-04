"use client";

import React from "react";
import { motion } from "motion/react";
import { GlowBorder } from "./GlowBorder";
import { 
  Zap, 
  ShieldCheck, 
  Palette, 
  Cpu, 
  Layers,
  Sparkles,
  Command
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>The Powerhouse</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance"
          >
            Built for <br />
            <em className="italic text-muted-foreground">Winners.</em>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[300px] gap-4">
          
          {/* Large Hero Feature */}
          <motion.div
            className="md:col-span-4 lg:col-span-4 row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-full rounded-[2rem] glass border-foreground/10 relative overflow-hidden p-12 flex flex-col justify-between group shadow-[var(--shadow-soft)] bg-background/50">
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl glass border border-accent/20 flex items-center justify-center mb-8 text-accent shadow-sm">
                    <Zap size={28} />
                  </div>
                  <h3 className="font-display text-4xl tracking-tight mb-4 text-foreground">Blazing Fast Core</h3>
                  <p className="text-muted-foreground text-lg max-w-md font-medium leading-relaxed">
                    Optimized for React 19 and Next.js. Zero overhead, maximum performance. Built to scale effortlessly.
                  </p>
                </div>
                <div className="flex gap-4 relative z-10">
                  <div className="px-4 py-2 rounded-full glass border-foreground/5 text-xs font-medium text-foreground">0.1ms Interaction</div>
                  <div className="px-4 py-2 rounded-full glass border-foreground/5 text-xs font-medium text-foreground">100/100 Lighthouse</div>
                </div>
            </div>
          </motion.div>

          {/* Medium Feature 1 */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-full p-8 rounded-[2rem] glass border-foreground/5 relative group overflow-hidden bg-background/40">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Palette className="text-indigo-500 mb-6" size={28} />
              <h4 className="font-display text-2xl tracking-tight mb-2 text-foreground">Modern Styles</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">Fully customizable with Tailwind CSS 4.0. Designed to be your own.</p>
            </div>
          </motion.div>

          {/* Medium Feature 2 */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-full p-8 rounded-[2rem] glass border-foreground/5 relative group overflow-hidden bg-background/40">
               <div className="absolute -right-4 -bottom-4 opacity-[0.03] text-foreground transition-transform group-hover:scale-110 duration-700">
                  <Command size={140} strokeWidth={1} />
               </div>
               <ShieldCheck className="text-emerald-500 mb-6" size={28} />
               <h4 className="font-display text-2xl tracking-tight mb-2 text-foreground">Type Safe</h4>
               <p className="text-sm text-muted-foreground leading-relaxed font-medium">100% TypeScript. No more runtime errors, complete developer confidence.</p>
            </div>
          </motion.div>

          {/* Small Features Row */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className="h-full p-8 rounded-[2rem] bg-foreground text-background flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent pointer-events-none" />
                <Sparkles size={24} className="text-background/80" />
                <h4 className="font-display text-3xl tracking-tight leading-tight text-balance">Premium Aesthetics<br/>Out-of-the-box</h4>
             </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className="h-full p-8 rounded-[2rem] border border-foreground/5 bg-background/30 flex flex-col justify-between hover:bg-background/50 transition-colors">
                <Layers className="text-accent" size={24} />
                <div>
                   <h4 className="font-display text-2xl tracking-tight text-foreground">Modular Architecture</h4>
                   <p className="text-sm text-muted-foreground mt-2 font-medium">Pick only what you need. Zero bloat.</p>
                </div>
             </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className="h-full p-8 rounded-[2rem] glass border-accent/10 bg-accent/[0.02] flex flex-col justify-between group">
                <Cpu className="text-accent transition-transform group-hover:scale-110 duration-300" size={24} />
                <h4 className="font-display text-2xl tracking-tight text-foreground">Accessible by Design</h4>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
