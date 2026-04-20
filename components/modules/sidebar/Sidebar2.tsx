"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutDashboard, BarChart3, FileText, Activity,
  FolderDot, CheckSquare, Users, Calendar, Files,
  Settings, HelpCircle,
  ChevronLeft, ChevronRight, ChevronsUpDown
} from "lucide-react";

const navData = [
  {
    title: "General",
    items: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Analytics", icon: BarChart3 },
      { name: "Reports", icon: FileText },
      { name: "Activity", icon: Activity },
    ],
  },
  {
    title: "Workspace",
    items: [
      { name: "Projects", icon: FolderDot },
      { name: "Tasks", icon: CheckSquare },
      { name: "Team", icon: Users },
      { name: "Calendar", icon: Calendar },
      { name: "Files", icon: Files },
    ],
  },
];

const bottomLinks = [
  { name: "Settings", icon: Settings },
  { name: "Help", icon: HelpCircle },
];

export function Sidebar2() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative h-[calc(100vh-2rem)] my-4 ml-4 rounded-3xl border border-border/50 bg-background/80 backdrop-blur-xl flex flex-col shadow-xl overflow-visible z-10 shrink-0"
    >
      {/* Top: User Profile */}
      <div className="p-4 border-b border-border/50 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary/20 to-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>

        <AnimatePresence>
          {!collapsed && (
            <motion.div 
              initial={{ opacity: 0, width: 0 }} 
              animate={{ opacity: 1, width: "auto" }} 
              exit={{ opacity: 0, width: 0 }}
              className="flex flex-col leading-tight overflow-hidden whitespace-nowrap flex-1"
            >
              <span className="text-sm font-semibold">Shanto</span>
              <span className="text-xs text-muted-foreground">Pro Workspace</span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {!collapsed && <ChevronsUpDown className="w-4 h-4 text-muted-foreground ml-auto shrink-0 cursor-pointer hover:text-foreground" />}
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 z-50 w-6 h-6 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-6 space-y-8 no-scrollbar">
        {navData.map((section) => (
          <div key={section.title} className="space-y-1">
            {!collapsed && (
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="px-4 mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70"
              >
                {section.title}
              </motion.p>
            )}

            {section.items.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200
                  ${isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"}`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="sidebar-active"
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[3px] bg-primary rounded-r-full" 
                    />
                  )}
                  
                  <item.icon className={`w-5 h-5 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground transition-colors"}`} />

                  <AnimatePresence>
                    {!collapsed && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -10 }}
                        className="text-sm whitespace-nowrap overflow-hidden"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="p-3 border-t border-border/50 space-y-1 bg-muted/20 rounded-b-3xl">
        {bottomLinks.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-muted/80 hover:text-foreground cursor-pointer transition-all duration-200"
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <AnimatePresence>
              {!collapsed && (
                <motion.span 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="text-sm whitespace-nowrap overflow-hidden"
                >
                  {item.name}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.aside>
  );
}
