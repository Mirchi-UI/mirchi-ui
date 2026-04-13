"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Command } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { NoiseBackground } from "./NoiseBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center pt-20">
      <NoiseBackground />
      
      {/* Intense Background Streak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[300px] bg-linear-to-r from-transparent via-orange-600/10 to-transparent rotate-12 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[1px] bg-linear-to-r from-transparent via-orange-500/20 to-transparent rotate-12 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        
        {/* Modern Badge */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md mb-8 "
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
            Fast-Track Your UI
          </span>
        </motion.div>

       <div className="relative text-center select-none overflow-hidden py-20 border border">
  {/* Ghost layer — larger font-size creates the depth, no scale needed */}
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                font-black uppercase leading-[0.82] tracking-[-0.06em] 
                text-foreground opacity-[0.055] pointer-events-none whitespace-nowrap"
    style={{ fontSize: "clamp(104px, 17.4vw, 232px)" }}
  >
    <div>Build faster</div>
    <div>With Heat</div>
  </div>

  {/* Live text */}
  <div
    className="relative z-10 font-black uppercase leading-[0.82] tracking-[-0.06em] text-foreground"
    style={{ fontSize: "clamp(72px, 12vw, 160px)" }}
  >
    <div className=" ">Build faster</div>
    <div className="leading-[0.95]">
      With <em className="text-orange-600  leading-[0.9] tracking-tighter text-orange-500 italic ">Heat</em>
    </div>
  </div>
</div>

        {/* Action Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          {/* <div className="flex flex-col items-start md:items-end text-center md:text-right max-w-[200px] mt-4 ">
             <p className="text-xs font-bold text-muted-foreground leading-tight">
               <span className="text-foreground">Mirchi UI</span> is the hottest way to build production-ready React apps.
             </p>
          </div> */}
          
          {/* <div className="h-12 w-px bg-foreground/10 hidden md:block" /> */}

          <div className="flex gap-3">
            <Button size="lg" className="h-14 px-8 rounded-2xl bg-foreground text-background hover:bg-foreground/90 font-bold group">
               <Link href="/docs" className="flex items-center gap-2">
                 Get Started
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-foreground/10 hover:bg-foreground/5 font-bold">
               <Link href="/docs/components">Components</Link>
            </Button>
          </div>
        </motion.div>

        {/* Subtle Visual Anchor */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.5 }}
           transition={{ delay: 0.8 }}
           className="mt-24 flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all"
        >
           <div className="flex items-center gap-2">
              <Command size={20} />
              <span className="text-sm font-bold tracking-tighter">Production Ready</span>
           </div>
           <div className="w-1 h-1 rounded-full bg-foreground/20" />
           <div className="flex items-center gap-2">
              <Sparkles size={20} />
              <span className="text-sm font-bold tracking-tighter">Ultra Lightweight</span>
           </div>
        </motion.div>
      </div>

      {/* Extreme Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-linear-to-t from-orange-600/5 to-transparent pointer-events-none" />
    </section>
  );
}
