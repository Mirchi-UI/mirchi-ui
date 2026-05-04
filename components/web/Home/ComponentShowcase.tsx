"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Search, 
  MousePointer2,
  Sparkles
} from "lucide-react";
import AuroraOfferButton from "@/components/modules/buttons/PremiumGlitch";
import IronManButton from "@/components/modules/buttons/ironManButton";
import { EdgeRevealButton } from "@/components/modules/buttons/EdgeRevealButton";

const showcaseItems = [
  {
    id: "buttons",
    title: "Premium Buttons",
    description: "High-contrast interaction triggers.",
    className: "md:col-span-8",
    preview: (
      <div className="flex flex-wrap gap-4 items-center justify-center w-full h-full p-8">
        <AuroraOfferButton

          
         
        >
          
        </AuroraOfferButton>
        <IronManButton
       
        >
        
        </IronManButton>
          <EdgeRevealButton />
          
           
 
      </div>
    ),
  },
  {
    id: "toasts",
    title: "Neon Toasts",
    description: "Feedback indicators that demand attention.",
    className: "md:col-span-4",
    preview: (
      <div className="p-8 flex justify-center items-center w-full h-full">
        <div className="relative group w-full">
          <div className="absolute -inset-2 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-full p-4 glass rounded-2xl border-l-4 border-l-accent shadow-[var(--shadow-soft)] flex items-center gap-4 bg-background/80">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <Bell size={20} className="animate-bounce" />
            </div>
            <div>
              <h4 className="font-medium text-xs text-accent">System Alert</h4>
              <p className="text-xs text-muted-foreground">
                Successfully deployed.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "dashboard",
    title: "Glass Dashboard",
    description: "Minimalist layout components.",
    className: "md:col-span-5",
    preview: (
      <div className="p-8 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-sm glass rounded-[2rem] p-6 border-foreground/5 shadow-[var(--shadow-soft)] bg-background/40">
          <div className="flex justify-between items-center mb-6">
            <div className="w-8 h-8 rounded-lg bg-accent" />
            <div className="flex gap-2">
              <div className="w-8 h-2 rounded-full bg-foreground/10" />
              <div className="w-4 h-2 rounded-full bg-foreground/10" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-24 w-full bg-gradient-to-br from-accent/10 to-transparent rounded-2xl border border-accent/5 flex items-end p-4">
              <div className="w-full h-1 bg-accent/20 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 w-2/3 bg-accent" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 glass rounded-2xl border-foreground/5 bg-background/50" />
              <div className="h-16 glass rounded-2xl border-foreground/5 bg-background/50" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "command",
    title: "Command Palette",
    description: "Universal search interface.",
    className: "md:col-span-7",
    preview: (
      <div className="p-8 flex justify-center items-center w-full h-full">
        <div className="w-full max-w-md glass rounded-2xl shadow-[var(--shadow-soft)] overflow-hidden border-foreground/5 bg-background/60">
          <div className="flex items-center gap-3 px-4 py-4 border-b border-foreground/5 bg-foreground/[0.02]">
            <Search size={18} className="text-muted-foreground" />
            <div className="text-sm text-muted-foreground w-full">
              Search components...
            </div>
            <kbd className="px-1.5 py-0.5 rounded border border-foreground/10 text-[10px] font-mono text-muted-foreground">
              ⌘K
            </kbd>
          </div>
          <div className="p-2 space-y-1">
            <div className="px-3 py-2 rounded-lg bg-accent text-accent-foreground flex items-center justify-between">
              <span className="text-xs font-medium">Installation</span>
              <MousePointer2 size={12} />
            </div>
            <div className="px-3 py-2 rounded-lg hover:bg-foreground/5 flex items-center justify-between text-muted-foreground transition-colors">
              <span className="text-xs font-medium">Theming</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function ComponentShowcase() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>The Catalog</span>
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance"
          >
            Ready-made <br />
            <em className="italic text-muted-foreground">Ingredients.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.className} relative rounded-[2rem] glass overflow-hidden border-foreground/5 shadow-[var(--shadow-soft)] group min-h-[320px] flex flex-col bg-background/40`}
            >
              <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent pointer-events-none" />
              
              <div className="p-8 pb-0 relative z-10">
                <h3 className="font-display text-3xl mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  {item.description}
                </p>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative z-10 w-full overflow-hidden">
                {item.preview}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3 -z-10" />
    </section>
  );
}
