"use client";

import { type ComponentProps, type ReactNode, useMemo } from "react";
import {
  AnchorProvider,
  type TOCItemType,
  useActiveAnchors,
} from "fumadocs-core/toc";
import { cn } from "../../lib/cn";
import { useTreeContext } from "fumadocs-ui/contexts/tree";
import { Link, usePathname } from "fumadocs-core/framework";
import type * as PageTree from "fumadocs-core/page-tree";

export interface DocsPageProps {
  toc?: TOCItemType[];

  children: ReactNode;
}

export function DocsPage({ toc = [], ...props }: DocsPageProps) {
  return (
    <AnchorProvider toc={toc}>
      <main className="flex w-full min-w-0 flex-col relative">
        <article className="flex flex-1 flex-col w-full max-w-[1600px] gap-6 px-6 py-12 md:px-10 md:py-12 md:my-0 bg-background border border-foreground/5 shadow-[0_0_40px_rgba(0,0,0,0.03)] relative rounded-xl">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
          {props.children}
          <div className="mt-16 pt-8 border-t border-foreground/5">
            <Footer />
          </div>
        </article>
      </main>
      {toc.length > 0 && (
        <div className="sticky top-[var(--fd-nav-height)] w-[240px] shrink-0 h-[calc(100dvh-var(--fd-nav-height))] p-6 bg-background border border-foreground/5 rounded-xl overflow-y-auto max-xl:hidden shadow-[0_0_30px_rgba(0,0,0,0.02)]">
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">On this page</p>
          <div className="flex flex-col border-l border-foreground/[0.08] ml-1">
            {toc.map((item) => (
              <TocItem key={item.url} item={item} />
            ))}
          </div>

          {/* Promotional Ad Card matching Vercel/Tailwind style */}
          <div className="mt-10 p-4 rounded-xl border border-foreground/10 bg-foreground/[0.02] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h4 className="font-display text-lg mb-1 tracking-tight">Mirchi UI Pro</h4>
            <p className="text-xs text-muted-foreground/80 leading-relaxed mb-3">Premium templates and advanced components for your next SaaS.</p>
            <a href="#" className="text-xs font-semibold text-accent flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      )}
    </AnchorProvider>
  );
}

export function DocsBody(props: ComponentProps<"div">) {
  return (
    <div {...props} className={cn("prose", props.className)}>
      {props.children}
    </div>
  );
}

export function DocsDescription(props: ComponentProps<"p">) {
  // don't render if no description provided
  if (props.children === undefined) return null;

  return (
    <p
      {...props}
      className={cn(
        "mb-6 text-lg font-medium text-muted-foreground/80 leading-relaxed max-w-3xl",
        props.className,
      )}
    >
      {props.children}
    </p>
  );
}

export function DocsTitle({
  icon,
  ...props
}: ComponentProps<"h1"> & { icon?: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      {icon && (
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground">
          {icon}
        </div>
      )}
      <h1
        {...props}
        className={cn(
          "text-4xl md:text-5xl font-display tracking-tight text-foreground text-balance",
          props.className,
        )}
      >
        {props.children}
      </h1>
    </div>
  );
}

function TocItem({ item }: { item: TOCItemType }) {
  const isActive = useActiveAnchors().includes(item.url.slice(1));

  return (
    <a
      href={item.url}
      className={cn(
        "text-[13px] text-muted-foreground py-1.5 pr-3 -ml-[1px] border-l border-transparent transition-all duration-200 hover:text-foreground",
        isActive && "text-accent font-medium border-accent bg-accent/[0.02]"
      )}
      style={{
        paddingLeft: Math.max(0, item.depth - 2) * 16 + 12, // +12px for the padding base
      }}
    >
      {item.title}
    </a>
  );
}

function Footer() {
  const { root } = useTreeContext();
  const pathname = usePathname();
  const flatten = useMemo(() => {
    const result: PageTree.Item[] = [];

    function scan(items: PageTree.Node[]) {
      for (const item of items) {
        if (item.type === "page") result.push(item);
        else if (item.type === "folder") {
          if (item.index) result.push(item.index);
          scan(item.children);
        }
      }
    }

    scan(root.children);
    return result;
  }, [root]);

  const { previous, next } = useMemo(() => {
    const idx = flatten.findIndex((item) => item.url === pathname);

    if (idx === -1) return {};
    return {
      previous: flatten[idx - 1],
      next: flatten[idx + 1],
    };
  }, [flatten, pathname]);

  return (
    <div className="flex flex-row justify-between gap-2 items-center font-medium">
      {previous ? <Link href={previous.url}>{previous.name}</Link> : null}
      {next ? <Link href={next.url}>{next.name}</Link> : null}
    </div>
  );
}
