"use client";

import Link from "next/link";
import { Github, Linkedin, Blocks, Twitter, Moon, Sun, ChevronLeft } from "lucide-react";
import { useTheme } from "next-themes";
import { useSidebar } from "fumadocs-ui/contexts/sidebar";
import { cn } from "@/lib/utils";

export function CustomNav() {

  const { theme, setTheme } = useTheme();
    const { open, setOpen } = useSidebar();
  

  return (
    <div className="flex items-center justify-end gap-2">
      <div className="flex md:hidden items-center justify-center px-3 py-2 border-b border-border">
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "p-1.5 rounded-lg transition-all duration-200 w-full flex items-center justify-center",
            "hover:bg-accent",
            open ? "" : "w-10 h-10"
          )}
          aria-label="Toggle sidebar"
          title={open ? "Collapse sidebar (Ctrl+B)" : "Expand sidebar (Ctrl+B)"}
        >
          <ChevronLeft
            size={16}
            className={cn(
              "transition-transform duration-300",
              open ? "rotate-0" : "-rotate-180"
            )}
          />
        </button>
      </div>

      {/* GitHub */}
      <Link
        href="https://github.com/your-profile"
        target="_blank"
        className="group inline-flex items-center gap-2 px-2 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
      >
        <Github className="w-4 h-4 text-white dark:text-zinc-900 group-hover:scale-110 transition-transform" />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        className="group inline-flex items-center gap-2 px-2 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
      >
        <Linkedin className="w-4 h-4 text-white dark:text-zinc-900 group-hover:scale-110 transition-transform" />
      </Link>

      {/* Blocks (for Mirchi UI / CodeSnippet Blocks) */}
      <Link
        href="/blocks"
        className="group inline-flex items-center gap-2 px-2 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white transition-all shadow-sm"
      >
        <Blocks className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </Link>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* theme toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-3 py-1 rounded-full text-sm border theme-border"
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>
    </div>
  );
}
