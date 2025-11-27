import {
  Moon,
  Rocket,
  BookOpen,
  SquareMousePointer,
  Layers,
  Sparkles,
  MessageCircleQuestion,
  Presentation,
  PanelsTopBottom,
} from "lucide-react";

export interface navItem {
  title: string;
  href: string;
  id: string | number;
  description?: string;
  count?: number | string;
  isComingSoon?: boolean;
  isNew?: boolean;
  isLab?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface navSection {
  title: string;
  items: navItem[];
}

export const navigationSections: navSection[] = [
  {
    title: "Getting Started",
    items: [
      // Components Section
      {
        id: "welcome",
        title: "Welcome",
        href: "/docs/welcome",
        description:
          "Learn about Mirchi UI, our motivation, and how to contribute to the project.",
        icon: Rocket, // 🚀 Perfect for “Welcome”
      },
      {
        id: "introduction",
        title: "Getting Started",
        href: "/docs",
        description:
          "Installation and setup guide for Mirchi UI components and blocks.",
        icon: BookOpen, // 📖 Documentation intro
      },
    ],
  },

  // Components Section

  {
    title: "Components",
    items: [
      {
        id: 1,
        title: "Fluid Dropdown",
        href: "/docs/components/fluid-dropdown",
        description:
          "A responsive and animated dropdown component for seamless navigation.",
        count: 10,
        icon: PanelsTopBottom, // 🖱️ Button (click) icon
      },
      {
        id: 2,
        title: "Buttons",
        href: "/docs/components/buttons",
        description:
          "A versatile button component with multiple styles and sizes.",
        count: 10,
        icon: SquareMousePointer, // 🖱️ Button (click) icon
      },

      {
        id: 3,
        title: "Backgrounds",
        href: "/docs/components/backgrounds",
        description: " Reuseable Modal that you need.",
        count: 10,
        isNew: true,
        icon: Layers, // 🧩 Layered backgrounds
      },
    ],
  },

  // Blocks
  {
    title: "blocks",
    items: [
      {
        id: "hero'S",
        title: "Hero'S",
        href: "/docs/blocks/heros",
        description: " Grab your users' attention with stunning hero sections ",
        icon: Presentation,
      },
      {
        id: "fAQ'S",
        title: "FAQ'S",
        href: "/docs/blocks/faqs",
        description: " All mrdern hero secttions ",
        icon: MessageCircleQuestion,
      },
    ],
  },
];
