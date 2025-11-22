"use client";

import Link from "next/link";
import { Github, Linkedin, Blocks, Twitter } from "lucide-react";

export function CustomNav() {
  return (
    <div className="flex items-center justify-end gap-2">
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

      {/* X (Twitter) */}
      <Link
        href="https://x.com/your-handle"
        target="_blank"
        className="group inline-flex items-center gap-2 px-2 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
      >
        <Twitter className="w-4 h-4 text-white dark:text-zinc-900 group-hover:scale-110 transition-transform" />
      </Link>

      {/* Blocks (for Mirchi UI / CodeSnippet Blocks) */}
      <Link
        href="/blocks"
        className="group inline-flex items-center gap-2 px-2 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white transition-all shadow-sm"
      >
        <Blocks className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </Link>
    </div>
  );
}
