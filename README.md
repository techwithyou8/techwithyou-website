# 🚀 TechWithYou - Professional Developer Website

Een ultra-moderne, professionele website gebouwd met de nieuwste technologieën voor **TechWithYou** - uw partner voor web development, mobile apps, en e-commerce oplossingen.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff69b4)

## ✨ Features

### 🎨 Design & UX
- ✅ **Modern Design Trends 2025**
  - Glassmorphism effects
  - Gradient meshes & backgrounds
  - Micro-interactions & animations
  - Scroll-triggered animations
  - 3D transforms & hover effects

- ✅ **Dark/Light Mode**
  - Automatische detectie van systeem voorkeur
  - Handmatige toggle met localStorage persistentie
  - Smooth transitions tussen modes

- ✅ **Fully Responsive**
  - Mobile-first design
  - Tablet optimized
  - Desktop enhanced
  - Smooth breakpoints

### 🎯 Key Sections

#### 1. **Hero Section**
- Animated gradient background
- Floating icons met motion
- CTA buttons met hover effects
- Statistics counter
- Scroll indicator

#### 2. **Services** (6 Diensten)
- Web Applications
- Mobile Apps (iOS & Android)
- E-commerce Solutions
- Custom Software
- Cloud Solutions
- Security & Maintenance

#### 3. **Tech Stack** (8 Moderne Technologieën)
- React & Next.js 15
- TypeScript
- Node.js
- Python & Django
- Tailwind CSS
- PostgreSQL
- Docker
- Plus: MongoDB, Redis, AWS, GraphQL, Firebase, Vercel, GitHub Actions, Stripe

#### 4. **Portfolio**
- 6 Featured projects
- Interactive project cards
- Metrics & KPIs
- Technology tags
- Hover animations

#### 5. **Contact Form**
- Volledig gevalideerd formulier
- Budget selector
- Service selector
- Success state met animatie
- Contact informatie sidebar
- Social media links

#### 6. **Navigation & Footer**
- Sticky navbar met scroll effect
- Mobile hamburger menu
- Dark mode toggle in navbar
- Comprehensive footer met links
- Social media integration

### 🚀 Performance Features
- Server-side rendering (SSR)
- Optimized images met Next.js Image
- Code splitting automatisch
- Lazy loading components
- SEO optimized
- Fast page loads
- Smooth animations zonder jank

### 🎨 Brand Identity

**TechWithYou**
- **Primaire kleuren**: Cyan (#0ea5e9) naar Purple (#a855f7) gradient
- **Logo**: Modern "T" icon in gradient box
- **Typography**: Inter font family
- **Design philosophy**: Modern, Clean, Professional, Trustworthy

## 🛠️ Tech Stack

```typescript
Frontend:
├── Next.js 15.5        // React framework met App Router
├── TypeScript          // Type-safe development
├── Tailwind CSS        // Utility-first styling
├── Framer Motion       // Smooth animations
└── Lucide React        // Modern icons

Backend Ready:
├── Next.js API Routes  // Serverless functions
├── Server Actions      // Form handling
└── Environment ready   // Voor email/database integratie

Tools:
├── ESLint             // Code quality
├── Turbopack          // Super fast builds
└── PostCSS            // CSS processing
```

## 📦 Installation & Setup

### Vereisten
- Node.js 18+ 
- npm of yarn

### Stappen

1. **Navigate naar project**
   ```bash
   cd C:\Users\husei\techwithyou
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   ```
   http://localhost:3000
   ```

### Beschikbare Commands

```bash
# Development server met Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
techwithyou/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout met metadata
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navbar.tsx       # Navigation met dark mode
│       ├── Hero.tsx         # Hero section met animaties
│       ├── Services.tsx     # Services grid
│       ├── TechStack.tsx    # Technology showcase
│       ├── Portfolio.tsx    # Project portfolio
│       ├── ContactForm.tsx  # Contact formulier
│       └── Footer.tsx       # Footer component
├── public/              # Static assets
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Kleuren Aanpassen
Bewerk `src/app/globals.css` voor custom kleuren:

```css
:root {
  --primary: 199 89% 48%;      /* Cyan */
  --secondary: 262 83% 58%;    /* Purple */
}
```

### Content Aanpassen
- **Services**: Bewerk `src/components/Services.tsx`
- **Portfolio**: Bewerk `src/components/Portfolio.tsx`
- **Contact Info**: Bewerk `src/components/ContactForm.tsx` en `Footer.tsx`

### Logo & Branding
Het logo is een gradient "T" in de navbar. Vervang met eigen logo in:
- `src/components/Navbar.tsx` (regel 69-71)
- `src/components/Footer.tsx` (regel 15-17)

## 🚀 Deployment

### Vercel (Aanbevolen)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Andere platforms
```bash
# Build production
npm run build

# Test production locally
npm start
```

## 📧 Contact Form Integration

De contact form is klaar voor backend integratie. Opties:

1. **Email Service** (Resend, SendGrid, Mailgun)
2. **Form Service** (Formspree, Web3Forms)
3. **Database** (Supabase, Firebase, MongoDB)

Voorbeeld Next.js API route:
```typescript
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email / save to database
  return Response.json({ success: true });
}
```

## 🎯 SEO Optimizations

✅ Semantic HTML
✅ Meta tags & Open Graph
✅ Structured data ready
✅ Fast page loads
✅ Mobile-friendly
✅ Accessible (ARIA labels)

## 📱 Browser Support

- ✅ Chrome (laatste 2 versies)
- ✅ Firefox (laatste 2 versies)
- ✅ Safari (laatste 2 versies)
- ✅ Edge (laatste 2 versies)
- ✅ Mobile browsers

## 🤝 Support

Voor vragen of aanpassingen:
- 📧 Email: info@techwithyou.com
- 📞 Phone: +31 6 1234 5678
- 📍 Location: Amsterdam, Netherlands

## 📄 License

© 2025 TechWithYou. All rights reserved.

---

**Gebouwd met ❤️ door TechWithYou** | Powered by Next.js 15 & Modern Web Technologies
