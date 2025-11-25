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
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { CustomNav } from "@/components/nav/customNavlinks";
import { Logo } from "@/public/logo";

export interface DocsLayoutProps {
  tree: PageTree.Root;
  children: ReactNode;
}

export function DocsLayout({ tree, children }: DocsLayoutProps) {
  return (
    <TreeContextProvider tree={tree}>
      <header className="sticky top-0 z-30 h-14 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <nav className="flex items-center justify-between h-full px-4 md:px-6">
          {/* Left side: Logo + Search */}
          <div className="flex items-center gap-4">
            {/* Logo */}
           <Logo/>

            {/* Search Bar */}
            <div className="relative">
              <SearchToggle>
                <Search className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Search...</span>
              </SearchToggle>
            </div>
          </div>

          {/* Right side: CustomNav */}
          <CustomNav />
        </nav>
      </header>
      <main
        id="nd-docs-layout"
        className="flex flex-1 flex-row [--fd-nav-height:56px]"
      >
        <Sidebar />
        {children}
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
        "flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "min-w-[200px] justify-start",
        props.className
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

      <span className="text-sm">Search...</span>

      {/* Shortcut hint */}
      <span className="ointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
        <span className="text-xs">⌘</span>K
      </span>
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
        "border border-fd-muted/30 hover:border-fd-muted/50",
        "transition-all",
        "select-none"
      )}
    >
      {/* Icon that rotates */}
      <ChevronLeft
        size={16}
        className={cn(
          "transition-transform duration-300",
          open ? "rotate-0" : "-rotate-180"
        )}
      />

      <span>{open ? "Hide Sidebar" : "Show Sidebar"}</span>
    </button>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const { open, setOpen } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed flex flex-col shrink-0 top-14 left-0 z-20 h-[calc(100vh-56px)] w-[260px] border-r border-border bg-background transition-all duration-300 overflow-hidden",
        "md:sticky md:top-14 md:h-[calc(100dvh-56px)]",
        open ? "md:w-[260px]" : "md:w-[60px]"
      )}
    >
      {/* Sidebar Header with Toggle Button */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-border md:hidden">
        <span className="text-xs font-semibold text-muted-foreground">
          Menu
        </span>
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "p-1.5 rounded-lg transition-all duration-200",
            "hover:bg-accent"
          )}
          aria-label="Toggle sidebar"
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

      {/* Desktop Toggle Button */}
      <div className="hidden md:flex items-center justify-center px-3 py-2 border-b border-border">
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

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <p
                className={cn(
                  "text-[11px] font-semibold uppercase text-muted-foreground mb-2 px-3 tracking-wider transition-opacity duration-300",
                  open ? "opacity-100" : "opacity-0 md:hidden"
                )}
              >
                {section.title}
              </p>

              <div className="flex flex-col gap-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={linkVariants({
                        active: isActive,
                        collapsed: !open,
                      })}
                      title={!open ? item.title : undefined}
                    >
                      {Icon ? <Icon className="w-4 h-4 shrink-0" /> : null}
                      <span
                        className={cn(
                          "flex-1 transition-opacity duration-300",
                          open ? "opacity-100" : "opacity-0 md:hidden"
                        )}
                      >
                        {item.title}
                      </span>

                      {item.isNew && open && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                          NEW
                        </span>
                      )}

                      {item.isComingSoon && open && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground shrink-0">
                          Soon
                        </span>
                      )}

                      {isActive && open && (
                        <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/70 shrink-0" />
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
      <div className="px-4 py-3 border-t border-border transition-all duration-300">
        <div
          className={cn(
            "flex items-center gap-2 text-xs text-muted-foreground",
            open ? "opacity-100" : "opacity-0 md:hidden"
          )}
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-medium">All systems operational</span>
        </div>
        {!open && (
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
  "group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
  {
    variants: {
      active: {
        true: "bg-primary text-primary-foreground shadow-sm",
        false: "text-muted-foreground hover:text-foreground hover:bg-accent",
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
  }
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
      <div className="pl-4 border-l flex flex-col">{children}</div>
    </div>
  );
}
