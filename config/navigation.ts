import {
  
  Rocket,
  BookOpen,
  SquareMousePointer,
  Layers,
   
  MessageCircleQuestion,
  Presentation,
  PanelsTopBottom,
  Text,
  FileStack,
  Box,
  Sparkles,
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
  previewImage?: string;
  bg?: string;
  isUpdated?: boolean;
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
        icon: BookOpen,
      },
      {
        id: "components",
        title: "Components",
        href: "/docs/components",
        description:
          "Installation and setup guide for Mirchi UI components and blocks.",
        icon: BookOpen,
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
        icon: Layers,
        previewImage: "/images/faq.png",
      },
      {
        id: 4,
        title: "Text",
        href: "/docs/components/text",
        description: " A collection of text components to use and customize.",
        count: 10,
        isNew: true,
        icon: Text,
      },
      {
        id: 5,
        title: "3D Card",
        href: "/docs/components/three-d-card",
        description: "An interactive card component with 3D elements.",
        count: 10,
        isNew: true,
        icon: Box,
      },
    ],
  },

  // Blocks
  {
    title: "blocks",
    items: [
      {
        id: "hero'S",
        title: "Hero Section",
        href: "/docs/blocks/heros",
        description: " Grab your users' attention with stunning hero sections ",
        icon: Presentation,
        previewImage:
          "https://designtocodes.com/wp-content/uploads/2024/02/15Best-Hero-Section-Web-UI-Kits-Collection-2024.jpg",
        bg: "from-orange-500 dark:to-zinc-950 to-gray-50",
      },
      {
        id: "fAQ'S",
        title: "FAQ Sections",
        href: "/docs/blocks/faqs",
        description: " All mrdern hero secttions ",
        icon: MessageCircleQuestion,
        previewImage:
          "https://designtocodes.com/wp-content/uploads/2024/02/15Best-Hero-Section-Web-UI-Kits-Collection-2024.jpg",
        bg: "from-orange-500/20 to-orange-700/20",
        isUpdated: true,
      },
      {
        id: "pricing",
        title: "Pricing Sections",
        href: "/docs/blocks/pricing",
        description: " All mrdern Pricing secttions ",
        icon: FileStack,
        previewImage:
          "https://designtocodes.com/wp-content/uploads/2024/02/15Best-Hero-Section-Web-UI-Kits-Collection-2024.jpg",
        bg: "from-orange-500/20 to-orange-700/20",
        isUpdated: true,
      },
    ],
  },
];




export function getBlocksSection() {
  return navigationSections.find((section) => section.title === "blocks");
}

export function getComponentsSection() {
  return navigationSections.find((section) => section.title === "Components");
}
