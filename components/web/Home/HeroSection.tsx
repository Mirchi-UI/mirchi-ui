import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background mt-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.9_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.9_0_0)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none opacity-18 dark:opacity-10" />
      {/* Floating shapes / subtle glow */}
      <div className="absolute inset-0">
        
        <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full top-1/4 left-1/3 blur-3xl animate-blob" />
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full top-1/2 left-2/3 blur-2xl animate-blob animation-delay-2000" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Content Container */}
        <div className="w-full max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md hover:scale-105 transition-transform duration-200 shadow-sm">
              <Code2 className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-600">
                Modern Component Library
              </span>
            </div>
          </div>
          {/* Headline */}
          <h1 className="animate-fade-in-delay-1 mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-center font-geist space-y-6 ">
            <span className="text-foreground  ">Build faster with</span>
            <br />
            <span className="font-gMono font-extrabold  ">Mirchi UI</span>
          </h1>
          {/* Subheadline */}
          <p className="animate-fade-in-delay-2 mb-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-center">
            Reusable, accessible, and developer-friendly React components built
            for modern web applications. Copy, paste, and customize.
          </p>
          {/* CTA Buttons */}
          <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              asChild
            >
              <Link href="/docs/components" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted/50 bg-transparent"
              asChild
            >
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>

          {/* Code Preview Container */}
          <div className="animate-fade-in-up space-y-4 w-96 mx-auto">
            <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-xl overflow-hidden shadow-xl">
              {/* Header Bar */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b border-border 
               bg-muted/30"
              >
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-auto font-mono">
                  components/card.tsx
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
