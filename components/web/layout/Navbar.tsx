"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Command, Github } from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Components", href: "/docs/components" },
    { title: "Blocks", href: "/blocks" },
    { title: "Templates", href: "/templates" },
    { title: "Docs", href: "/docs" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-foreground text-background flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
               <Command size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tighter">Mirchi UI</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-foreground/5 p-1 rounded-full border border-foreground/5">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-foreground/5 transition-colors text-muted-foreground hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full w-9 h-9"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full w-9 h-9" asChild>
               <Link href={siteConfig.links.github} target="_blank">
                  <Github size={18} />
               </Link>
            </Button>

            <Button className="hidden md:flex rounded-full bg-foreground text-background hover:bg-foreground/90 h-9 px-5 text-xs font-bold" asChild>
               <Link href="/docs/installation">Get Started</Link>
            </Button>

            {/* mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full w-9 h-9"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-foreground/5 p-4 flex flex-col space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block w-full text-sm font-semibold py-3 px-4 rounded-xl hover:bg-foreground/5"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Button className="w-full rounded-xl mt-4 bg-foreground text-background py-6" asChild>
             <Link href="/docs/installation">Get Started</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
