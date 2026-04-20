"use client";

import { Sidebar2 } from "./Sidebar2";

export default function SidebarDemo1() {
  return (
    <div className="flex h-[600px] bg-background/50 rounded-3xl overflow-hidden w-full border border-border/50 relative shadow-2xl">
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <Sidebar2 />

      {/* Dashboard Content Preview */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-1">Welcome back, here's your overview.</p>
            </div>
            <div className="flex gap-3">
              <div className="h-9 w-32 bg-muted/50 rounded-lg animate-pulse" />
              <div className="h-9 w-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-medium">
                +
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-5 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center" />
                <div className="space-y-2">
                  <div className="h-6 w-24 bg-muted/80 rounded" />
                  <div className="h-4 w-16 bg-muted/50 rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* Main Chart Area */}
          <div className="p-6 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm shadow-sm h-64 flex flex-col justify-between">
             <div className="flex justify-between items-center mb-6">
                <div className="h-5 w-32 bg-muted/80 rounded" />
                <div className="h-5 w-20 bg-muted/50 rounded" />
             </div>
             <div className="flex-1 w-full flex items-end gap-2 px-2">
               {[40, 70, 45, 90, 65, 30, 85, 55, 75, 40, 60, 50].map((height, i) => (
                 <div 
                   key={i} 
                   className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary/40 transition-colors"
                   style={{ height: `${height}%` }}
                 />
               ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
