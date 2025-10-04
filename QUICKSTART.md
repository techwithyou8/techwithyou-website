# ⚡ TechWithYou - Quick Start Guide

## 🎯 In 3 Minuten Live!

### Stap 1: Open Terminal
```bash
cd C:\Users\husei\techwithyou
```

### Stap 2: Start Development Server
```bash
npm run dev
```

### Stap 3: Open Browser
```
http://localhost:3000
```

**KLAAR!** 🎉 Je website draait nu lokaal.

---

## 🎨 Snelle Aanpassingen

### 1. Bedrijfsnaam Wijzigen
Zoek & vervang "TechWithYou" in:
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/app/layout.tsx`

### 2. Contact Informatie
📝 Bewerk: `src/components/ContactForm.tsx` en `Footer.tsx`
- Email: Regel 81 & 68
- Telefoon: Regel 91 & 73
- Locatie: Regel 101 & 79

### 3. Services Aanpassen
📝 Bewerk: `src/components/Services.tsx`
- Services array (regel 6-49)
- Voeg toe, verwijder of wijzig services

### 4. Portfolio Projects
📝 Bewerk: `src/components/Portfolio.tsx`
- Projects array (regel 7-62)
- Wijzig projecten, metrics en tags

### 5. Kleuren & Branding
📝 Bewerk: `src/app/globals.css`
```css
/* Wijzig gradient kleuren */
.text-gradient {
  @apply bg-gradient-to-r from-JOUWNKLEUR to-JOUWKLEUR;
}
```

---

## 🚀 Production Deployment

### Option 1: Vercel (Makkelijkst)
```bash
npm i -g vercel
vercel
```
✅ Automatische HTTPS
✅ Global CDN
✅ Automatische builds

### Option 2: Netlify
```bash
npm run build
# Upload de `out` folder naar Netlify
```

### Option 3: Eigen Server
```bash
npm run build
npm start
```

---

## 🎯 Belangrijke Features

### ✅ Volledig Responsive
Werkt perfect op:
- 📱 Mobiel (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1920px+)

### ✅ Dark Mode
Automatisch:
- Detecteert systeem voorkeur
- Toggle knop in navbar
- Opgeslagen in localStorage

### ✅ Animaties
- Smooth scroll
- Hover effects
- Page transitions
- Loading states

### ✅ SEO Ready
- Meta tags
- Open Graph
- Semantic HTML
- Fast load times

---

## 📧 Contact Form Setup

De form werkt lokaal, maar voor productie heb je een backend nodig.

### Quick Options:

**1. Formspree (5 min)**
```typescript
// In ContactForm.tsx, wijzig action:
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**2. Web3Forms (5 min)**
```typescript
// Voeg access key toe aan form data
formData.access_key = "YOUR_ACCESS_KEY";
```

**3. Email Service (10 min)**
Maak `src/app/api/contact/route.ts`:
```typescript
export async function POST(req: Request) {
  const data = await req.json();
  // Send met Resend/SendGrid
  return Response.json({ success: true });
}
```

---

## 🎨 Kleur Schema

**Primair**: Cyan → Purple gradient
```css
from-cyan-500 to-purple-600
```

**Gebruikt voor**:
- Buttons
- Links
- Logo
- Gradients
- Hover states

**Wijzigen?** Zoek & vervang in alle bestanden.

---

## 🔧 Troubleshooting

### Port 3000 al in gebruik?
```bash
npm run dev -- -p 3001
```

### Dependencies issues?
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Build errors?
```bash
npm run lint
# Fix alle errors
npm run build
```

---

## 📱 Test Checklist

Voordat je live gaat:

- [ ] Contact form werkt
- [ ] Alle links werken
- [ ] Dark mode werkt
- [ ] Mobile responsive
- [ ] Geen console errors
- [ ] Fast load times
- [ ] Email/phone correct
- [ ] Social media links correct

---

## 🎓 Next Steps

1. **Voeg echte content toe**
   - Vervang placeholder teksten
   - Voeg echte projecten toe
   - Update contact info

2. **Integreer backend**
   - Contact form
   - Database voor leads
   - Analytics (Google/Plausible)

3. **Deploy naar productie**
   - Kies hosting platform
   - Setup custom domain
   - SSL certificaat

4. **Marketing**
   - Social media setup
   - SEO optimization
   - Content marketing

---

## 🆘 Hulp Nodig?

**Development Issues:**
- Check console voor errors
- Lees Next.js docs: https://nextjs.org/docs
- Zoek op Stack Overflow

**Customization:**
- Alle components zijn goed gedocumenteerd
- Gebruik TypeScript autocomplete
- Vraag ChatGPT/Claude voor hulp

**Deployment:**
- Volg Vercel docs
- Check build logs
- Test lokaal eerst: `npm run build`

---

## 💡 Pro Tips

1. **Use Git**: Commit regelmatig je changes
2. **Test Mobile**: Gebruik Chrome DevTools
3. **Performance**: Check met Lighthouse
4. **Backups**: Maak backups voor grote wijzigingen
5. **Updates**: Houd dependencies up-to-date

---

**Veel Success! 🚀**

© 2025 TechWithYou | Built with Next.js 15
