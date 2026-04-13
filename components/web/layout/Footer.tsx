"use client";

import { Link } from "next-view-transitions";
import { siteConfig } from "@/config/site";
import { Github, Twitter, Linkedin, Command } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Components", href: "/docs/components" },
        { label: "Blocks", href: "/blocks" },
        { label: "Templates", href: "/templates" },
        { label: "Showcase", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Installation", href: "/docs/installation" },
        { label: "Theming", href: "/docs/theming" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "GitHub", href: siteConfig.links.github, icon: Github },
        { label: "Twitter", href: siteConfig.links.twitter, icon: Twitter },
        { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
      ],
    },
  ];

  return (
    <footer className="w-full bg-background border-t border-foreground/5 py-20 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/50 to-transparent opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center">
                <Command size={24} />
              </div>
              <span className="text-xl font-bold tracking-tighter">Mirchi UI</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed font-medium">
              High-end, performance-focused React components for modern developers 
              who care about exceptional user experiences.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="col-span-1">
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-foreground/80">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-orange-500 transition-colors flex items-center gap-2 group"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mirchi UI. Built with 🔥 by the team.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
