"use client";

import React from "react";
import { motion } from "motion/react";
import { Copy, Terminal, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Browse Components",
    description: "Explore our curated collection of high-end, production-ready components and blocks.",
    icon: Terminal,
  },
  {
    title: "Copy the Source",
    description: "One-click copy for both the component code and necessary styles. No npm installs.",
    icon: Copy,
  },
  {
    title: "Paste and Ship",
    description: "Drop the code into your project, customize as needed, and deliver beautiful UIs at record speed.",
    icon: CheckCircle2,
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        
        <div className="mb-24 px-4">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-1 rounded-full bg-orange-600" />
            <span className="text-xs font-black uppercase tracking-widest text-orange-600">The Workflow</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
            Designed for <br />
            <span className="text-orange-600 italic">Speed.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[15%] left-0 w-full h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent -z-10" />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-start p-10 rounded-[2.5rem] glass border-foreground/5 relative overflow-hidden group hover:border-orange-500/20 transition-colors"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                   <step.icon size={120} />
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-orange-600 text-background flex items-center justify-center font-black text-xl mb-8 shadow-xl shadow-orange-600/20 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">{step.title}</h3>
                <p className="text-muted-foreground font-bold text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
