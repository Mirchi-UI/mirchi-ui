"use client";

import Link from "next/link";
import { Github, Linkedin, Blocks,   Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function CustomNav() {

  const { theme, setTheme } = useTheme();
  

  return (
    <div className="flex items-center justify-end gap-2">
      {/* GitHub */}
      <Link
        href="https://github.com/Mirchi-UI/mirchi-ui"
        target="_blank"
        className="group inline-flex items-center gap-2 px-2 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
      >
        <Github className="w-4 h-4 text-white dark:text-zinc-900 group-hover:scale-110 transition-transform" />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/mehedi-shanto/"
        target="_blank"
        className="group inline-flex items-center gap-2 px-2 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
      >
        <Linkedin className="w-4 h-4 text-white dark:text-zinc-900 group-hover:scale-110 transition-transform" />
      </Link>

      {/* Blocks (for Mirchi UI / CodeSnippet Blocks) */}
      <Link
        href="/blocks"
        className="group inline-flex items-center gap-2 px-2 py-1.5 rounded-lg bg-linear-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white transition-all shadow-sm"
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
