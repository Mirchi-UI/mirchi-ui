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
  SlidersHorizontal,
  Component,
  MousePointerClick,
  ChevronDownSquare,
  ImageIcon,
  Type,
  LayoutTemplate,
  HelpCircle,
  CreditCard,
  CircleOff,
  PanelLeft,
  BoxIcon,
  StepForward,
  LucideSquareParkingOff,
  Circle,
  Command,
  ThumbsUp,
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
  // ========================
  // Getting Started
  // ========================
  {
    title: "Getting Started",
    items: [
      {
        id: "welcome",
        title: "Welcome",
        href: "/docs/welcome",
        description:
          "Learn about Mirchi UI, our motivation, and how to contribute.",
        icon: Rocket,
      },
      {
        id: "getting-started",
        title: "Getting Started",
        href: "/docs",
        description: "Installation and setup guide for Mirchi UI.",
        icon: BookOpen,
      },
      {
        id: "core-components",
        title: "Components Overview",
        href: "/docs/components",
        description: "Explore all available UI components and usage.",
        icon: Component,
      },
    ],
  },

  // ========================
  // Components
  // ========================
  {
    title: "Components",
    items: [
      {
        id: "buttons",
        title: "Buttons",
        href: "/docs/components/buttons",
        description:
          "Flexible button system with multiple variants and interactions.",
        icon: MousePointerClick,
        count: 10,
      },
      {
        id: "accordion",
        title: "Accordion",
        href: "/docs/components/accordion",
        description:
          "Expandable/collapsible content sections with smooth animation.",
        icon: ChevronDownSquare,
        count: 10,
      },

      {
        id: "3",
        title: "Empty",
        href: "/docs/components/empty",
        description: "A container for displaying empty state information.",
        icon: CircleOff,
        count: 5,
        isNew: true,
      },
      {
        id: "sidebar",
        title: "Sidebar",
        href: "/docs/components/sidebar",
        description: "A container for displaying empty state information.",
        icon: PanelLeft,
        count: 5,
        isNew: true,
      },
      {
        id: "Stepper",
        title: "Stepper",
        href: "/docs/components/stepper",
        description: "A container for displaying empty state information.",
        icon: StepForward,
        count: 6,
        isNew: true,
      },
      {
        id: "Marquee",
        title: "Marquee/Ticker",
        href: "/docs/components/marquee",
        description:
          "An eye-catching marquee/ticker component for showcasing text or content in a scrolling animation.",
        icon: Circle,
        count: 3,
        isNew: true,
      },
      {
        id: "feedbackBar",
        title: "Feedback Bar",
        href: "/docs/components/feedback-bar",
        description: "A simple and customizable feedback bar component for gathering user feedback on your website or application.  ",
        icon: ThumbsUp ,  
        count: 4,
        isNew: true,
      },
      {
        id: "terminal",
        title: "Terminal",
        href: "/docs/components/terminal",
        description: "  ",
        icon: Command,
        count: 4,
        isNew: true,
      },
      {
        id: "Error",
        title: "Not-Found page",
        href: "/docs/components/404",
        description: "A container for displaying empty state information.",
        icon: LucideSquareParkingOff,
        count: 3,
        isNew: true,
      },
      {
        id: "dialog",
        title: "Dialog",
        href: "/docs/components/dialog",
        description: "A container for displaying empty state information.",
        icon: BoxIcon,
        count: 5,
        isNew: true,
      },

      {
        id: "4",
        title: "Text",
        href: "/docs/components/text",
        description: "Typography system and styled text components.",
        icon: Type,
        count: 10,
        isNew: true,
      },
    ],
  },

  // ========================
  // Blocks
  // ========================
  {
    title: "Blocks",
    items: [
      {
        id: "hero",
        title: "Hero Sections",
        href: "/docs/blocks/heros",
        description:
          "High-impact hero sections to capture attention instantly.",
        previewImage:
          "https://designtocodes.com/wp-content/uploads/2024/02/15Best-Hero-Section-Web-UI-Kits-Collection-2024.jpg",
        bg: "from-orange-500 to-gray-50 dark:to-zinc-950",
        icon: LayoutTemplate,
      },
      {
        id: "faq",
        title: "FAQ Sections",
        href: "/docs/blocks/faqs",
        description: "Clean and modern FAQ layouts.",
        previewImage:
          "https://designtocodes.com/wp-content/uploads/2024/02/15Best-Hero-Section-Web-UI-Kits-Collection-2024.jpg",
        bg: "from-orange-500/20 to-orange-700/20",
        icon: HelpCircle,
        isUpdated: true,
      },
      {
        id: "pricing",
        title: "Pricing Sections",
        href: "/docs/blocks/pricing",
        description: "Modern pricing layouts for SaaS and products.",
        previewImage:
          "https://designtocodes.com/wp-content/uploads/2024/02/15Best-Hero-Section-Web-UI-Kits-Collection-2024.jpg",
        bg: "from-orange-500/20 to-orange-700/20",
        icon: CreditCard,
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
