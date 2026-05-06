"use client";
import type * as PageTree from "fumadocs-core/page-tree";
import { type ComponentProps, type ReactNode } from "react";
import { cn } from "../../lib/cn";
import { TreeContextProvider } from "fumadocs-ui/contexts/tree";
import Link from "fumadocs-core/link";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { useSidebar } from "fumadocs-ui/contexts/sidebar";
import { cva } from "class-variance-authority";
import { usePathname } from "fumadocs-core/framework";
import { navigationSections } from "@/config/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CustomNav } from "@/components/nav/customNavlinks";
import { Logo } from "@/public/logo";

export interface DocsLayoutProps {
  tree: PageTree.Root;
  children: ReactNode;
}

export function DocsLayout({ tree, children }: DocsLayoutProps) {
  const { open, setOpen } = useSidebar();

  return (
    <TreeContextProvider tree={tree}>
      <header className="sticky top-0 z-30 h-14 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <nav className="flex items-center justify-between h-full px-4 md:px-6">
          {/* Left side: Logo + Search */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="hidden md:block">
              <Logo />
            </div>
            <div className="flex md:hidden items-center justify-center px-3 py-2">
              <button
                onClick={() => setOpen(!open)}
                className={cn(
                  "p-1.5 rounded-lg transition-all duration-200 w-full flex items-center justify-center",
                  "hover:bg-accent",
                  open ? "" : "w-10 h-10",
                )}
                aria-label="Toggle sidebar"
                title={
                  open ? "Collapse sidebar (Ctrl+B)" : "Expand sidebar (Ctrl+B)"
                }
              >
                <ChevronLeft
                  size={16}
                  className={cn(
                    "transition-transform w-7 h-7 duration-300",
                    open ? "rotate-0" : "-rotate-180",
                  )}
                />
              </button>
            </div>
            {/* Search Bar */}
            <div className="relative">
              <SearchToggle></SearchToggle>
            </div>
          </div>

          {/* Right side: CustomNav */}
          <CustomNav />
        </nav>
      </header>
      <main
        id="nd-docs-layout"
        className="flex flex-1 flex-row [--fd-nav-height:56px] relative bg-background"
      >
        <div className="absolute inset-0 bg-stripes pointer-events-none" />
        <Sidebar />
        <div className="flex-1 relative w-full min-w-0 flex flex-row px-4 gap-4">
          {children}
        </div>
      </main>
    </TreeContextProvider>
  );
}

function SearchToggle(props: ComponentProps<"button">) {
  const { enabled, setOpenSearch } = useSearchContext();

  if (!enabled) return null;

  return (
    <button
      {...props}
      onClick={() => setOpenSearch(true)}
      className={cn(
        "flex items-center gap-2 rounded-lg bg-background px-3 py-2 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "justify-start",
        props.className,
      )}
    >
      {/* search icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-fd-muted-foreground/80"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>

      <div className="hidden md:flex">
        <span className=" hidden md:flex text-sm">Search...</span>
        {/* Shortcut hint */}
        <span className="ointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
          <span className="text-xs">⌘</span>K
        </span>
      </div>
    </button>
  );
}

function NavbarSidebarTrigger(props: ComponentProps<"button">) {
  const { open, setOpen } = useSidebar();

  return (
    <button
      {...props}
      onClick={() => setOpen(!open)}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm",
        "bg-fd-muted/40 hover:bg-fd-muted/60",
        "transition-all",
        "transition-all",
        "select-none",
      )}
    >
      {/* Icon that rotates */}
      <ChevronLeft
        size={16}
        className={cn(
          "transition-transform duration-300",
          open ? "rotate-0" : "-rotate-180",
        )}
      />

      <span>{open ? "Hide Sidebar" : "Show Sidebar"}</span>
    </button>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const { open, setOpen } = useSidebar();

  // Determine if the sidebar is open (use the single 'open' state)
  const isOpen = open;

  return (
    <aside
      style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
      className={cn(
        "fixed flex flex-col shrink-0 top-14 left-0 z-20 h-[calc(100vh-56px)] bg-background transition-all duration-300 overflow-hidden",
        "md:sticky md:top-14 md:h-[calc(100dvh-56px)]",
        // Mobile: show when openMobile is true
        isOpen ? "w-[240px]" : "w-0",
        // Desktop: adjust width based on open state
        "md:w-[240px]",
        open ? "" : "md:w-[60px]",
      )}
    >
      {/* Desktop Toggle Button */}
      <div className="hidden md:flex items-center justify-center px-3 py-2">
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "p-1.5 rounded-lg transition-all duration-200 w-full flex items-center justify-center",
            "hover:bg-accent",
            open ? "" : "w-10 h-10",
          )}
          aria-label="Toggle sidebar"
          title={open ? "Collapse sidebar (Ctrl+B)" : "Expand sidebar (Ctrl+B)"}
        >
          <ChevronLeft
            size={16}
            className={cn(
              "transition-transform duration-300",
              open ? "rotate-0" : "-rotate-180",
            )}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav
        className="flex-1 overflow-y-auto px-3 py-4 scrollbar-none"
        style={{
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 85%, transparent 100%)",
        }}
      >
        <div className="space-y-6 pb-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <p
                className={cn(
                  "text-[13px] font-medium text-foreground mb-2 px-3 transition-opacity duration-300",
                  isOpen ? "opacity-100" : "opacity-0 md:hidden",
                )}
              >
                {section.title}
              </p>

              <div className="flex flex-col border-l border-foreground/[0.08] ml-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={linkVariants({
                        active: isActive,
                        collapsed: !isOpen,
                      })}
                      title={!isOpen ? item.title : undefined}
                    >
                      {Icon ? <Icon className="w-4 h-4 shrink-0" /> : null}
                      <span
                        className={cn(
                          "flex-1 transition-opacity duration-300",
                          isOpen ? "opacity-100" : "opacity-0 md:hidden",
                        )}
                      >
                        {item.title}
                      </span>

                      {item.isNew && isOpen && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 shrink-0">
                          New
                        </span>
                      )}

                      {item.isComingSoon && isOpen && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground shrink-0">
                          Soon
                        </span>
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
      <div className="px-4 py-3 transition-all duration-300">
        <div
          className={cn(
            "flex items-center gap-2 text-xs text-muted-foreground",
            isOpen ? "opacity-100" : "opacity-0 md:hidden",
          )}
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-medium">All systems operational</span>
        </div>
        {!isOpen && (
          <div className="hidden md:flex items-center justify-center">
            <div
              className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
              title="All systems operational"
            />
          </div>
        )}
      </div>
    </aside>
  );
}

const linkVariants = cva(
  "group flex items-center gap-3 py-1.5 pl-4 pr-3 text-[13px] transition-all duration-200 -ml-[1px] border-l",
  {
    variants: {
      active: {
        true: "border-accent text-accent font-medium",
        false:
          "border-transparent text-muted-foreground/80 hover:text-foreground hover:border-foreground/20",
      },
      collapsed: {
        true: "md:justify-center md:p-2",
        false: "",
      },
    },
    defaultVariants: {
      active: false,
      collapsed: false,
    },
  },
);

function SidebarItem({
  item,
  children,
}: {
  item: PageTree.Node;
  children: ReactNode;
}) {
  const pathname = usePathname();

  if (item.type === "page") {
    return (
      <Link
        href={item.url}
        className={linkVariants({
          active: pathname === item.url,
        })}
      >
        {item.icon}
        {item.name}
      </Link>
    );
  }

  if (item.type === "separator") {
    return (
      <p className="text-fd-muted-foreground mt-6 mb-2 first:mt-0">
        {item.icon}
        {item.name}
      </p>
    );
  }

  return (
    <div>
      {item.index ? (
        <Link
          className={linkVariants({
            active: pathname === item.index.url,
          })}
          href={item.index.url}
        >
          {item.index.icon}
          {item.index.name}
        </Link>
      ) : (
        <p className={cn(linkVariants(), "text-start")}>
          {item.icon}
          {item.name}
        </p>
      )}
      <div className="pl-4 flex flex-col">{children}</div>
    </div>
  );
}
