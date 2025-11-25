import { source } from "@/lib/source";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { baseOptions } from "@/lib/layout.shared";
import { DocsLayout } from "@/src/components/layout/docs";

export const metadata: Metadata = {
  title: {
    template: "%s | Mirchi UI - Free UI Components to build beautiful websites",
    default: " Mirchi UI - Free UI Components to build beautiful websites",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      
    >
      {children}
    </DocsLayout>
  );
}
