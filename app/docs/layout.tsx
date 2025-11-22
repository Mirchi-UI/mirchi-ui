import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { baseOptions } from "@/lib/layout.shared";

export const metadata: Metadata = {
  title: {
    template:
      "%s | Mirchi UI - Free UI Components to build beautiful websites",
    default: "codesnippetui - Free UI Components to build beautiful websites",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      sidebar={{
        defaultOpenLevel: 1,

      } 
    }
    >
      {children}
    </DocsLayout>
  );
}
