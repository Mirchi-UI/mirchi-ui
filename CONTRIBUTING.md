# Contributing to Mirchi UI

First off, thank you for considering contributing to Mirchi UI! 🎉

We're excited that you're interested in helping make this project better. This document provides guidelines and instructions for contributing.

## 🤝 How Can I Contribute?

### Reporting Bugs

If you find a bug, please create an issue with:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (browser, OS, etc.)

### Suggesting Enhancements

Have an idea for a new component or feature? We'd love to hear it!

- Open an issue with the `enhancement` label
- Describe the feature clearly
- Explain why it would be useful
- Provide examples if possible

### Adding Components

We're always looking for new components! Follow this step-by-step guide:

#### **Step 1: Fork and Create a Branch**

```bash
git checkout -b feature/amazing-component
```

#### **Step 2: Create the MDX Documentation File (if new component type)**

First, create the documentation file in `content/docs/components/`. If the component documentation already exists (like `button.mdx`), then no need to create a new one.

After creating a new MDX file, add this at the top:

```mdx
---
title: Component Name
description: Brief description of what this component does
slug: /docs/components/component-name
icon: IconName
full: true
---
```

#### **Step 3: Create the Component File**

Create your component in the appropriate folder structure. Make a new folder if this is a new type of component:

**For component types:**

- `components/modules/buttons/LoadingButton.tsx`
- `components/modules/inputs/SearchInput.tsx`
- `components/modules/drop-down/Fluid-dropdown.tsx`
- `components/modules/cards/StatsCard.tsx`

**Example component structure:**

```tsx
"use client";

import { cn } from "@/lib/utils";

interface YourComponentProps {
  className?: string;
  // ... other props
}

export function YourComponent({ className, ...props }: YourComponentProps) {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {/* Component content */}
    </div>
  );
}
```

#### **Step 4: Add Preview to MDX File**

Now go to the MDX file and import and display your component:

```mdx
import { YourComponent } from "@/components/modules/folder/YourComponent.tsx";

<Preview
  link="folder/YourComponent.tsx"
  comment={["tailwindcss", "component", "tag", "tag"]}
>
  <YourComponent />
</Preview>
```

**Note:** The `link` should contain the path after `@/components/modules/`

#### **Step 5: Add Usage Examples and Props Documentation**

Include additional code examples, props documentation, and hooks (if used):

````mdx
## Usage

```tsx
import { YourComponent } from "@/components/modules/folder/YourComponent";
import { useState } from "react";

export function App() {
  const [state, setState] = useState(false);

  return (
    <YourComponent state={state} onChange={() => setState(!state)}>
      Your content here
    </YourComponent>
  );
}
```
````

## Props

- `state?: boolean` - Component state
- `onChange?: function` - Callback when state changes
- `className?: string` - Additional Tailwind classes

````

#### **Step 6: Document Custom Hooks (if used)**

If your component uses custom hooks, document them in the MDX file:

```mdx
## useCustomHook

This component uses `useCustomHook` for its functionality.

```tsx
import { useCustomHook } from "@/hooks/use-custom-hook";

export function MyComponent() {
  const { state, handler } = useCustomHook();

  return <div>{state}</div>;
}
````

````

#### **Step 7: Update Navigation**

Add your new component to `config/navigation.ts`:

```typescript
{
  id: 1,
  title: "Your Component Name",
  href: "/docs/components/your-component-name",
  description: "A brief description of your component",
  count: 10,
  icon: IconName, // Import icon from lucide-react
},
````

#### **Step 8: Follow Code Style Guidelines**

- Use **TypeScript** for all code
- Follow **React best practices**
- Use **Tailwind CSS** for styling
- Ensure **accessibility** (ARIA labels, keyboard navigation)
- Support **dark mode**
- Keep components **responsive** (mobile-first approach)

#### **Step 9: Build and Test**

Test that everything builds correctly:

```bash
pnpm build
```

Make sure there are no TypeScript errors or build warnings.

#### **Step 10: Commit and Push**

```bash
git commit -m 'feat: add YourComponent component'
git push origin feature/amazing-component
```

#### **Step 11: Open a Pull Request**

⚠️ **IMPORTANT:**

- Open PR against the **`development`** branch **ONLY**
- Include a clear description of your component
- Link any related issues
- Add screenshots or demos if applicable

**PR Checklist:**

- [ ] Component follows project structure
- [ ] MDX documentation is complete
- [ ] Navigation updated in `config/navigation.ts`
- [ ] Component supports dark mode
- [ ] Component is responsive
- [ ] Code is accessible (WCAG 2.1 AA)
- [ ] `pnpm build` passes without errors
- [ ] No TypeScript errors
- [ ] PR targets `development` branch

#### **Step 8: Follow Code Style**

- Use **TypeScript** for all code
- Follow **React best practices**
- Use **Tailwind CSS** for styling
- Ensure **accessibility** (ARIA labels, keyboard navigation)
- Support **dark mode**
- Keep components **responsive** (mobile-first)

#### **Step 9: Build and Test**

Test that everything builds correctly:

```bash
pnpm build
```

#### **Step 10: Commit and Push**

```bash
git commit -m 'feat: add LoadingButton component'
git push origin feature/amazing-component
```

#### **Step 11: Open a Pull Request**

⚠️ **IMPORTANT:**

- Open PR against the **`development`** branch **ONLY**
- Include description of your component
- Link any related issues
- Add screenshots/demos if applicable

**PR Checklist:**

- [ ] Component follows project structure
- [ ] MDX documentation added
- [ ] Navigation updated in `config/navigation.ts`
- [ ] Component supports dark mode
- [ ] Component is responsive
- [ ] Code is accessible (WCAG 2.1 AA)
- [ ] `pnpm build` passes without errors
- [ ] No TypeScript errors
- [ ] PR targets `development` branch

### Adding Blocks

Blocks are complete UI sections (like hero sections, feature sections, etc.):

1. Follow the same process as components
2. Place blocks in appropriate directories
3. Include multiple variants if possible
4. Ensure they're responsive and accessible

### Improving Documentation

Good documentation is crucial! You can help by:

- Fixing typos or unclear explanations
- Adding more examples
- Improving code comments
- Writing tutorials or guides

### Code Style

- Use **TypeScript** for all new code
- Follow **React best practices**
- Use **Tailwind CSS** for styling
- Keep components **accessible** (ARIA labels, keyboard navigation, etc.)
- Write **clear, descriptive** commit messages
- Add **comments** for complex logic

### Component Structure

```tsx
// Example component structure
"use client";

import { cn } from "@/lib/utils";

interface ComponentProps {
  className?: string;
  // ... other props
}

export function Component({ className, ...props }: ComponentProps) {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {/* Component content */}
    </div>
  );
}
```

### Documentation Structure

When adding a component, include:

1. **MDX file** in `content/docs/components/`
2. **Frontmatter** with title, description, icon
3. **Preview** using the `<Preview>` component
4. **Code example** showing usage
5. **Props documentation** if applicable

Example:

```mdx
---
title: Component Name
description: Brief description
icon: IconName
---

import Component from "@/components/modules/component";

<Preview link="component-name">
  <Component />
</Preview>
```

## 📋 Pull Request Process

1. **Update documentation** if you're adding features
2. **Add tests** if applicable
3. **Ensure all checks pass**
4. **Request review** from maintainers
5. **Address feedback** promptly

### PR Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings or errors
- [ ] Component is accessible
- [ ] Component is responsive
- [ ] Dark mode is supported

## 🎨 Design Guidelines

- **Consistency** - Follow existing design patterns
- **Accessibility** - WCAG 2.1 AA compliance
- **Responsive** - Mobile-first approach
- **Dark Mode** - Full support required
- **Performance** - Optimize for speed

## 🐛 Bug Reports

When reporting bugs, please include:

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**

- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 120]
- Version: [e.g. 1.0.0]
```

## 💡 Feature Requests

For feature requests, please include:

- **Use case** - Why is this feature needed?
- **Proposed solution** - How should it work?
- **Alternatives** - Other solutions considered
- **Additional context** - Screenshots, examples, etc.

## 📝 Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Example:

```
feat: add new button component
fix: resolve dark mode issue in card component
docs: update installation guide
```

## 🏷️ Labels

We use labels to organize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested

## ❓ Questions?

- Open an issue with the `question` label
- Check existing issues and discussions
- Reach out to maintainers

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. We expect all contributors to:

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism gracefully
- Focus on what's best for the community

### Our Standards

**Positive behaviors:**

- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community

**Unacceptable behaviors:**

- Harassment or discriminatory language
- Trolling or insulting comments
- Public or private harassment
- Publishing others' private information

## 🙏 Thank You!

Your contributions make Mirchi UI better for everyone. Thank you for taking the time to contribute!

---

**Happy Coding!** 🚀
