"use client";

import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { title: "Home", href: "/" },
    { title: "Components", href: "/components" },
    { title: "Docs", href: "/docs" },
    { title: "Templates", href: "/templates" },
    { title: "Playground", href: "/playground" },
  ];

  return (
    <footer className="theme-bg border-t theme-border w-full mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
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
              <span className="font-semibold"> Mirchi UI</span>
              <span className="text-xs theme-text-muted">Dynamic Colors</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm hover:underline"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 text-center text-xs text-muted-theme">
          &copy; {new Date().getFullYear()} UI Library. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
