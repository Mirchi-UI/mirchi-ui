"use client";

import React from "react";
import { motion } from "motion/react";
import { GlowBorder } from "./GlowBorder";
import { 
  Zap, 
  ShieldCheck, 
  Layout, 
  Palette, 
  Cpu, 
  Layers,
  Sparkles,
  Command
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header with Heat Typography */}
        <div className="mb-24 px-4">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-1 rounded-full bg-orange-600" />
            <span className="text-xs font-black uppercase tracking-widest text-orange-600">The Powerhouse</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase"
          >
            Built for <br />
            <span className="text-orange-600 italic">Winners.</span>
          </motion.h2>
        </div>

        {/* Bento Grid Redesign */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[300px] gap-4">
          
          {/* Large Hero Feature */}
          <motion.div
            className="md:col-span-4 lg:col-span-4 row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlowBorder color="oklch(0.6 0.25 20)" className="h-full">
              <div className="p-12 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-orange-600/10 blur-[80px] rounded-full" />
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-orange-600/10 flex items-center justify-center mb-8 text-orange-600">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-4xl font-black tracking-tighter uppercase mb-4">Blazing Fast Core</h3>
                  <p className="text-muted-foreground text-lg max-w-sm font-medium leading-relaxed">
                    Optimized for React 19 and Next.js. Zero overhead, maximum performance. Mirchi UI is built to scale.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="px-4 py-2 rounded-lg glass text-[10px] font-bold uppercase tracking-widest">0.1ms Interaction</div>
                  <div className="px-4 py-2 rounded-lg glass text-[10px] font-bold uppercase tracking-widest">100/100 Lighthouse</div>
                </div>
              </div>
            </GlowBorder>
          </motion.div>

          {/* Medium Feature 1 */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-full p-8 rounded-[2rem] glass border-foreground/5 relative group cursor-default">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
              <Palette className="text-indigo-500 mb-6" size={28} />
              <h4 className="text-xl font-black tracking-tighter uppercase mb-2">Modern Styles</h4>
              <p className="text-sm text-muted-foreground font-medium">Fully customizable with Tailwind CSS 4.0.</p>
            </div>
          </motion.div>

          {/* Medium Feature 2 */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-full p-8 rounded-[2rem] glass border-foreground/5 relative group cursor-default overflow-hidden">
               <div className="absolute -right-4 -bottom-4 opacity-10">
                  <Command size={120} />
               </div>
               <ShieldCheck className="text-green-500 mb-6" size={28} />
               <h4 className="text-xl font-black tracking-tighter uppercase mb-2">Type Safe</h4>
               <p className="text-sm text-muted-foreground font-medium">100% TypeScript. No more runtime errors.</p>
            </div>
          </motion.div>

          {/* Small Features Row */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className="h-full p-8 rounded-[2rem] bg-foreground text-background flex flex-col justify-between">
                <Sparkles size={24} />
                <h4 className="text-2xl font-black tracking-tighter uppercase">Premium Aesthetics Out-of-the-box</h4>
             </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className="h-full p-8 rounded-[2rem] border border-foreground/10 flex flex-col justify-between hover:bg-foreground/5 transition-colors">
                <Layers className="text-orange-600" size={24} />
                <div>
                   <h4 className="text-xl font-black tracking-tighter uppercase">Modular Architecture</h4>
                   <p className="text-xs text-muted-foreground mt-1">Pick only what you need.</p>
                </div>
             </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className="h-full p-8 rounded-[2rem] glass border-orange-500/10 flex flex-col justify-between">
                <Cpu className="text-orange-500" size={24} />
                <h4 className="text-xl font-black tracking-tighter uppercase">Accessible by Design</h4>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
