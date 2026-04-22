import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Preview } from "./components/mdx/preview";
import { ComponentGrid } from "./components/mdx/component-grid";
import { CompactPreview } from "./components/mdx/compact-preview";
import { Header } from "./components/mdx/header";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Preview,
    ComponentGrid,
    CompactPreview,
    Header,
    ...components,
  };
}
