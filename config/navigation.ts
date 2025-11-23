export interface navItem {
  title: string;
  href: string;
  id: string | number;
  description?: string;
  count?: number | string;
  isComingSoon?: boolean;
  isNew?: boolean;
  isLab?: boolean;
}

export interface navSection {
  title: string;
  items: navItem[];
}

export const navigationSections: navSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        id: "welcome",
        title: "Welcome",
        href: "/docs/welcome",
        description:
          "Learn about Mirchi UI, our motivation, and how to contribute to the project.",
        isNew: true,
      },
      {
        id: "introduction",
        title: "Getting Started",
        href: "/docs",
        description:
          "Installation and setup guide for Mirchi UI components and blocks.",
      },
    ],
  },

  // Components Section
  {
    title: "Components",
    items: [
      {
        id: 1,
        title: "Button",
        href: "/docs/components/button",
        description:
          "A versatile button component with multiple styles and sizes.",
        count: 10,
      },
      {
        id: 2,
        title: "Input",
        href: "/docs/components/input",
        description: " Reuseable input that you need  .  ",
        count: 10,
        isNew: true,
      },
      {
        id: 3,
        title: "Modal",
        href: "/docs/components/modal",
        description: " Reuseable Modal that you need  .  ",
        count: 10,
        isNew: true,
        isComingSoon: true,
      },
    ],
  },


  // blocks

  {
    title: "blocks",
    items: [
      {
        id: "Hero",
        title: "Hero",
        href: "/blocks/hero",
        description:
          " All mrdern hero secttions ",
      },
    ],
  },
];
