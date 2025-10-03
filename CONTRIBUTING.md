# 🤝 Contributing to TechWithYou Website

## Code Style & Conventions

### TypeScript

- Use TypeScript for all new files
- Define proper interfaces and types
- Avoid `any` type unless absolutely necessary
- Use strict mode settings

### Component Structure

```typescript
'use client'; // Only for client components

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

export default function Component({ title, description, onAction }: ComponentProps) {
  const [state, setState] = useState(false);

  return (
    <div className="container">
      {/* Component content */}
    </div>
  );
}
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `Navbar.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Pages: `page.tsx` (Next.js App Router convention)
- Hooks: `useCamelCase.ts` (e.g., `useDarkMode.ts`)

### CSS/Tailwind

- Use Tailwind CSS utility classes
- Group related classes logically
- Use custom CSS only when necessary
- Maintain dark mode support: `dark:` prefix

Example:
```tsx
<div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── api/             # API routes
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/              # Reusable UI components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions & configs
└── types/               # TypeScript type definitions
```

## Development Workflow

### 1. Setup

```bash
git clone https://github.com/techwithyou8/techwithyou-website.git
cd techwithyou-website
npm install
npm run dev
```

### 2. Creating a New Feature

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes
3. Test locally
4. Commit with descriptive message
5. Push and create Pull Request

### 3. Testing

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Test production build locally
npm run build && npm start
```

## Component Guidelines

### Reusable Components

Create in `src/components/ui/`:

```typescript
// Button.tsx
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
```

### Animations

Use Framer Motion for animations:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

## API Routes

Create in `src/app/api/[route]/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validation
    // Processing
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error message' },
      { status: 500 }
    );
  }
}
```

## Accessibility

- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain proper color contrast

```tsx
<button 
  aria-label="Close menu"
  onClick={handleClose}
>
  <X size={24} />
</button>
```

## Performance

### Images

Always use Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-the-fold images
/>
```

### Code Splitting

Use dynamic imports for heavy components:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

## SEO Best Practices

### Metadata

```typescript
// page.tsx
export const metadata: Metadata = {
  title: 'Page Title | TechWithYou',
  description: 'Page description',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    type: 'website',
  },
  alternates: {
    canonical: '/page-url',
  },
};
```

### Structured Data

Add JSON-LD for rich snippets:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Page Name',
    })
  }}
/>
```

## Common Pitfalls

### 1. Hydration Errors

```typescript
// ❌ Wrong - causes hydration mismatch
<div>{new Date().toString()}</div>

// ✅ Correct - use client-side rendering
const [date, setDate] = useState('');
useEffect(() => {
  setDate(new Date().toString());
}, []);
```

### 2. Event Handlers

```typescript
// ❌ Wrong - executes immediately
<button onClick={handleClick()}>

// ✅ Correct
<button onClick={handleClick}>
<button onClick={() => handleClick(param)}>
```

### 3. Dark Mode

Always provide dark mode styles:

```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

## Git Commit Messages

Follow conventional commits:

```
feat: Add new contact form validation
fix: Resolve mobile menu overflow issue
docs: Update README with deployment steps
style: Format code with Prettier
refactor: Extract reusable button component
test: Add unit tests for API routes
chore: Update dependencies
```

## Pull Request Guidelines

1. **Title:** Clear and descriptive
2. **Description:** What, why, and how
3. **Screenshots:** For UI changes
4. **Testing:** Describe how you tested
5. **Breaking Changes:** Clearly marked

## Questions?

- Check existing issues on GitHub
- Review documentation
- Ask in discussions

---

**Happy Contributing! 🚀**
