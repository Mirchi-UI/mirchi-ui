"use client";

import Link from "next/link";
import { Github, Linkedin, Blocks,   Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function CustomNav() {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center justify-end gap-1 md:gap-2">
      {/* GitHub */}
      <Link
        href="https://github.com/Mirchi-UI/mirchi-ui"
        target="_blank"
        className="group inline-flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground"
      >
        <Github className="w-4 h-4" />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/mehedi-shanto/"
        target="_blank"
        className="group inline-flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground"
      >
        <Linkedin className="w-4 h-4" />
      </Link>

      <div className="w-px h-4 bg-border mx-1 hidden sm:block" />

      {/* Blocks (for Mirchi UI / CodeSnippet Blocks) */}
      <Link
        href="/blocks"
        className="group hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm font-medium transition-colors hover:bg-black/10 dark:hover:bg-white/10"
      >
        <Blocks className="w-4 h-4 text-fuchsia-500" />
        <span>Blocks</span>
      </Link>

      <div className="w-px h-4 bg-border mx-1 hidden sm:block" />

      {/* theme toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="group inline-flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground"
        >
          {!mounted ? (
            <div className="w-4 h-4" />
          ) : theme === "light" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
