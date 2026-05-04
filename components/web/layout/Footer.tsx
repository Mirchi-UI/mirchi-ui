"use client";

import { Github, Twitter, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border relative overflow-hidden">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
        {/* LEFT */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Build better UI
          </h3>

          <p className="text-base font-medium text-foreground/70 max-w-sm leading-relaxed">
            High-end React components crafted for developers who care about
            design, motion, and experience.
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-muted-foreground">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/docs/components"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Components
                </a>
              </li>
              <li>
                <a
                  href="/blocks"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Blocks
                </a>
              </li>
              <li>
                <a
                  href="/templates"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Templates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-muted-foreground">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="/docs/installation"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Install
                </a>
              </li>
              <li>
                <a
                  href="/docs/theming"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Theming
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex gap-4">
            <a
              href={siteConfig.links.github}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.links.twitter}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground/80 max-w-xs md:text-right leading-relaxed">
            Open-source UI library built for modern SaaS and creative
            developers.
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-border" />

      {/* BIG TEXT SECTION */}
      <div className="relative w-full py-16 md:py-32 flex items-center justify-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-grain opacity-40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
          aria-hidden
        />
        {/* Gradient glow background */}

        <div className="relative z-10 text-center px-4 space-y-4">
          <h1 className="text-[12vw] font-archivo  tracking-tighter text-foreground select-none pointer-events-none leading-none -mb-[2vw] opacity-25">
            MI<span className="font-extrabold italic ">RC</span>HI-UI
          </h1>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-border/50" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-6 text-xs text-muted-foreground/70">
        <p className="font-medium">
          © {new Date().getFullYear()} Mirchi UI. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            href="#"
            className="hover:text-foreground transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
