import { docs } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";

export function createIcon(icon?: string) {
  if (!icon) {
    return null;
  }

  if (icon in icons)
    return createElement(icons[icon as keyof typeof icons]);
  
  return null;
}

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    return createIcon(icon);
  },
});
