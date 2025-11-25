"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import {
  LayoutDashboard,
  Palette,
  Component,
  Type,
  Layers,
  MousePointerClick,
  FormInput,
  Table2,
  Navigation,
  MessageSquare,
  Bell,
  Settings,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { navigationSections } from "./navigation";

const linkVariants = cva(
  "group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
  {
    variants: {
      active: {
        true: "bg-primary text-primary-foreground shadow-sm",
        false: "text-muted-foreground hover:text-foreground hover:bg-accent",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

 

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed flex flex-col shrink-0 top-14 left-0 z-20 h-[calc(100vh-56px)] w-[260px] border-r border-border bg-background",
        "md:sticky md:top-14 md:h-[calc(100dvh-56px)]"
      )}
    >
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <p className="text-[11px] font-semibold uppercase text-muted-foreground mb-2 px-3 tracking-wider">
                {section.title}
              </p>

              <div className="flex flex-col gap-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={linkVariants({ active: isActive })}
                    >
                      {
                        Icon ? <Icon className="w-4 h-4" /> : null
                      }
                      <span className="flex-1">{item.title}</span>

                      {item.isNew && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                          NEW
                        </span>
                      )}

                      {item.isComingSoon && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground">
                          Soon
                        </span>
                      )}

                      {isActive && (
                        <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/70" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium">All systems operational</span>
        </div>
      </div>
    </aside>
  );
}
