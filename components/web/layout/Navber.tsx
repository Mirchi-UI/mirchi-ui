"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "next-view-transitions";

export default function LibraryNavbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Components", href: "/components" },
    { title: "Docs", href: "/docs" },
    { title: "Templates", href: "/templates" },
  ];

  return (
    <nav className="w-full theme-bg border-b font-gMono theme-border fixed top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg theme-primary flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect width="24" height="24" rx="6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold"> Mirchi UI</span>
              <span className="text-xs theme-text-muted"> added latterr </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm hover:underline"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* theme toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="px-3 py-1 rounded-full text-sm border theme-border"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md border theme-border"
              onClick={() => setOpen(!open)}
            >
              <svg width="20" height="20" stroke="currentColor" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden theme-bg border-t theme-border p-4 flex flex-col space-y-3">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block w-full text-sm py-2 px-3 rounded hover:bg-primary/10"
              onClick={() => setOpen(false)} // close menu when clicked
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
