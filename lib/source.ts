import { docs } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      return createElement(icons.Library);
    }

    if (icon === "Component" || icon === "LayoutDashboard") {
      if (icon in icons)
        return createElement(icons[icon as keyof typeof icons]);
    }

    // if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
