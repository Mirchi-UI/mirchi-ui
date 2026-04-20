"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 260 }}
      transition={{ duration: 0.25 }}
      className="h-full border-r bg-background flex flex-col"
    >
      <div className="h-14 flex items-center justify-between px-4 border-b">
        {!collapsed && (
          <span className="font-semibold tracking-tight">Explore</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-xs px-2 py-1 rounded-md hover:bg-muted"
        >
          {collapsed ? ">" : "<"}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
        <SidebarSection
          collapsed={collapsed}
          title="GENERAL"
          items={["Dashboard", "Analytics"]}
          activeIndex={0}
        />

        <SidebarSection
          collapsed={collapsed}
          title="WORKSPACE"
          items={["Projects", "Team", "Tasks"]}
        />
      </div>

      <div className="border-t p-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-foreground/20" />
        {!collapsed && (
          <div className="flex flex-col text-xs">
            <span className="font-medium">Shanto</span>
            <span className="text-muted-foreground">Free Plan</span>
          </div>
        )}
      </div>
    </motion.aside>
  );
}

function SidebarSection({ collapsed, title, items, activeIndex }: any) {
  return (
    <div>
      {!collapsed && (
        <p className="px-3 mb-2 text-xs text-muted-foreground">{title}</p>
      )}

      {items.map((item: string, i: number) => (
        <div
          key={item}
          className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
          ${activeIndex === i ? "bg-muted font-medium" : "hover:bg-muted/60"}`}
        >
          {activeIndex === i && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] bg-foreground rounded-r" />
          )}

          <div className="w-5 h-5 rounded-md bg-foreground/20" />

          {!collapsed && (
            <span className="text-sm whitespace-nowrap">{item}</span>
          )}
        </div>
      ))}
    </div>
  );
}
