"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowBorder } from "./GlowBorder";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Eye, 
  Laptop, 
  Smartphone, 
  Tablet, 
  Bell, 
  Search, 
  LayoutDashboard,
  MousePointer2
} from "lucide-react";

const X = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const showcaseItems = [
  {
    id: "buttons",
    title: "Premium Buttons",
    description: "High-contrast interaction triggers with custom states.",
    preview: (
      <div className="flex flex-wrap gap-6 items-center justify-center p-8">
        <Button className="rounded-2xl bg-orange-600 hover:bg-orange-700 h-14 px-8 font-black uppercase tracking-tighter shadow-xl shadow-orange-600/20">Action</Button>
        <Button variant="outline" className="rounded-2xl glass border-orange-500/20 h-14 px-8 font-black uppercase tracking-tighter">Glass</Button>
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-orange-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
          <Button className="relative rounded-2xl bg-background text-foreground border-0 h-14 px-8 font-black uppercase tracking-tighter">Glow</Button>
        </div>
      </div>
    ),
    code: `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <Button 
      className="rounded-2xl bg-orange-600 font-black uppercase"
    >
      Action
    </Button>
  );
}`,
  },
  {
    id: "toasts",
    title: "Neon Toasts",
    description: "Feedback indicators that demand attention.",
    preview: (
      <div className="p-8 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-80 p-4 glass rounded-2xl border-l-4 border-l-orange-500 shadow-2xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
               <Bell size={20} className="animate-bounce" />
            </div>
            <div>
               <h4 className="font-black text-xs uppercase tracking-widest text-orange-500">System Alert</h4>
               <p className="text-xs text-muted-foreground font-bold">Successfully deployed to production.</p>
            </div>
            <X size={14} className="ml-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    ),
    code: `export function ToastDemo() {
  return (
    <div className="glass rounded-2xl border-l-4 border-l-orange-500 p-4">
      <h4 className="font-black text-xs text-orange-500 uppercase">Alert</h4>
      <p>Successfully deployed!</p>
    </div>
  );
}`,
  },
  {
    id: "dashboard",
    title: "Glass Dashboard",
    description: "Minimalist layout components for complex data.",
    preview: (
      <div className="p-8 w-full max-w-md mx-auto">
        <div className="glass rounded-[2rem] p-6 border-orange-500/10">
           <div className="flex justify-between items-center mb-6">
              <div className="w-8 h-8 rounded-lg bg-orange-600" />
              <div className="flex gap-2">
                 <div className="w-8 h-2 rounded-full bg-foreground/10" />
                 <div className="w-4 h-2 rounded-full bg-foreground/10" />
              </div>
           </div>
           <div className="space-y-3">
              <div className="h-24 w-full bg-linear-to-br from-orange-500/10 to-transparent rounded-2xl border border-orange-500/5 flex items-end p-4">
                  <div className="w-full h-1 bg-orange-500/20 rounded-full relative overflow-hidden">
                     <div className="absolute inset-0 w-2/3 bg-orange-500" />
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 <div className="h-16 glass rounded-2xl" />
                 <div className="h-16 glass rounded-2xl" />
              </div>
           </div>
        </div>
      </div>
    ),
    code: `// Mirchi Dashboard Component
export function DashboardItem() {
  return (
    <div className="glass rounded-[2rem] p-6 border-orange-500/10">
      {/* Dashboard micro-layout */}
    </div>
  );
}`,
  },
  {
    id: "command",
    title: "Command Palette",
    description: "Universal search and action interface.",
    preview: (
      <div className="p-8 flex justify-center w-full">
         <div className="w-full max-w-sm glass rounded-2xl shadow-3xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-4 border-b border-foreground/5 bg-foreground/2">
               <Search size={18} className="text-muted-foreground" />
               <input className="bg-transparent border-0 outline-0 text-sm font-bold w-full" placeholder="Search components..." />
               <kbd className="px-1.5 py-0.5 rounded border border-foreground/10 text-[10px] font-mono opacity-50">⌘K</kbd>
            </div>
            <div className="p-2 space-y-1">
               <div className="px-3 py-2 rounded-lg bg-orange-600 text-background flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-tight">Installation</span>
                  <MousePointer2 size={12} />
               </div>
               <div className="px-3 py-2 rounded-lg hover:bg-foreground/5 flex items-center justify-between text-muted-foreground">
                  <span className="text-xs font-bold uppercase tracking-tight">Theming</span>
               </div>
            </div>
         </div>
      </div>
    ),
    code: `import { Command } from "@/components/ui/command";

export function CommandDemo() {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <Search className="text-muted-foreground" />
      <input placeholder="Search..." />
    </div>
  );
}`,
  },
];

export function ComponentShowcase() {
  const [activeTab, setActiveTab] = useState(showcaseItems[0].id);
  const activeItem = showcaseItems.find((item) => item.id === activeTab);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-1 rounded-full bg-orange-600" />
              <span className="text-xs font-black uppercase tracking-widest text-orange-600">The Catalog</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              Ready-made <br />
              <span className="text-orange-600 italic">Ingredients.</span>
            </h2>
          </div>
          <div className="flex gap-2 p-1 glass rounded-full mb-2">
            <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:bg-foreground/5"><Smartphone size={20} /></Button>
            <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:bg-foreground/5 bg-foreground/10"><Laptop size={20} /></Button>
            <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:bg-foreground/5"><Tablet size={20} /></Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: Component List */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {showcaseItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left p-6 rounded-[2rem] transition-all duration-500 border relative overflow-hidden group ${
                  activeTab === item.id 
                    ? "bg-foreground text-background border-foreground shadow-[0_20px_50px_rgba(0,0,0,0.2)]" 
                    : "hover:bg-foreground/5 border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-black tracking-tighter uppercase mb-1 flex items-center gap-2">
                    {item.title}
                    {activeTab === item.id && <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />}
                  </h3>
                  <p className={`text-[10px] font-bold uppercase tracking-wider opacity-60`}>
                    {item.description}
                  </p>
                </div>
                {activeTab === item.id && (
                  <motion.div 
                    layoutId="showcase-bg"
                    className="absolute inset-0 bg-foreground -z-10" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right: Code/Preview Area */}
          <div className="lg:col-span-8">
            <Tabs defaultValue="preview" className="w-full h-full">
              <div className="flex items-center justify-between mb-4 px-2">
                <TabsList className="glass rounded-full p-1 h-auto bg-transparent border-0">
                  <TabsTrigger value="preview" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background transition-all px-8 py-3 text-xs font-black uppercase tracking-widest">
                    <Eye size={14} className="mr-2" /> Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background transition-all px-8 py-3 text-xs font-black uppercase tracking-widest">
                    <Code size={14} className="mr-2" /> Code
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="relative rounded-[3rem] glass min-h-[600px] overflow-hidden border-foreground/5 shadow-inner">
                <div className="absolute inset-0 bg-noise pointer-events-none opacity-5" />
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent pointer-events-none" />
                
                <TabsContent value="preview" className="mt-0 h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center min-h-[600px] p-4"
                    >
                      {activeItem?.preview}
                    </motion.div>
                  </AnimatePresence>
                </TabsContent>
                
                <TabsContent value="code" className="mt-0 h-full">
                  <div className="p-12 font-mono text-sm leading-relaxed overflow-x-auto bg-foreground/2 min-h-[600px]">
                    <pre className="text-foreground/70">
                      <code>{activeItem?.code}</code>
                    </pre>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-600/10 blur-[120px] rounded-full -translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3 -z-10" />
    </section>
  );
}
