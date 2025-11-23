# Mirchi UI

<div align="center">

**Beautifully designed** components and blocks that you can **copy and paste** into your apps. **Accessible.** **Customizable.** **Open Source.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[Documentation](https://mirchiui.com) • [Components](/docs/components) • [Blocks](/docs/blocks) • [Contribute](./CONTRIBUTING.md)

</div>

---

## ✨ Features

- 🎨 **Beautifully Designed** - Carefully crafted components with attention to detail
- 📦 **Copy & Paste** - No installation required for most components
- ♿ **Accessible** - Built with accessibility in mind
- 🎯 **Flexible** - Works with or without shadcn/ui
- 🚀 **Modern** - Built with React, TypeScript, and Tailwind CSS
- 🌙 **Dark Mode** - Full dark mode support
- 📱 **Responsive** - Mobile-first design approach

## 🚀 Quick Start

Most Mirchi UI components are **standalone** and can be used directly by copying the code. No installation required!

1. Browse our [components](/docs/components) or [blocks](/docs/blocks)
2. Copy the code you need
3. Paste it into your project
4. Customize as needed

### For shadcn/ui Based Components

Some components are built on top of [shadcn/ui](https://ui.shadcn.com). If you're using these, you'll need the `cn` utility function:

```bash
# Using shadcn CLI
npx shadcn@latest add https://mirchiui.dev/r/utils.json

# Or manually add to your utils.ts
```

```tsx
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 📚 Documentation

Visit our [documentation site](https://mirchiui.com) for:

- Complete component documentation
- Usage examples
- API references
- Best practices

## 🎯 What We Offer

### Components

Reusable UI components built with React and TypeScript. Available with or without shadcn/ui dependencies.

### Blocks

Pre-built, ready-to-use block components for common UI patterns. Perfect for landing pages, dashboards, and more.

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Motion** - Animations
- **shadcn/ui** - Base components (optional)

## 🤝 Contributing

We welcome contributions! Whether it's a new component, bug fix, documentation, or feedback—every contribution matters.

See our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📖 Motivation

I've been building websites for years and always found myself searching through old files to reuse components. It was annoying. So I thought—**why not create a place where all my components live together?**

One of my goals was to contribute to component libraries. I discovered amazing projects like [UI-Layouts](https://www.ui-layouts.com/get-started) and other awesome UI libraries from Bangladesh. I forked them, learned how they worked, and now I'm building my own.

Libraries like [shadcn/ui](https://ui.shadcn.com) and [Aceternity UI](https://ui.aceternity.com) inspired me to create something free and open for everyone.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) - For the amazing component architecture
- [UI-Layouts](https://www.ui-layouts.com) - For the inspiration from Bangladesh

## ⭐ Star History

If you find this project helpful, please consider giving it a star! ⭐

---

<div align="center">

Made In Bangladesh 

<!-- [Website](https://mirchiui.com) • 
[Documentation](https://mirchiui.com/docs) • [GitHub](https://github.com) -->

</div>
