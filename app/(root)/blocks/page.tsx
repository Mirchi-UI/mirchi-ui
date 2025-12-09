"use client";

import { BlocksShowcase } from "@/components/web/docs/BlocksShowcase";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden ">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full top-1/4 left-1/3 blur-3xl animate-blob" />
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full top-1/2 left-2/3 blur-2xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 py-28 flex flex-col items-center justify-center text-center">
        <div>
          <Badge
            variant="outline"
            className="px-4 py-1.5 mb-6 text-sm font-medium 
          border border-orange-500/30 
          bg-black/20 dark:bg-white/5 
          backdrop-blur-xl shadow-lg 
          inline-flex items-center gap-2 rounded-full"
          >
            <Sparkles className="h-4 w-4 text-orange-400" />
            Sections & Blocks
          </Badge>
          <span className="inline-block mr-2">🔥</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-center "
          >
            Craft Stunning Interfaces with <br />
            Production-Ready Sections
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto mb-16"
          >
            Customizable sections that mold to your project’s needs.
          </motion.p>
        </div>
        <BlocksShowcase />
      </div>
    </main>
  );
}
