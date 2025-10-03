# 🚀 Vercel Deployment Guide - TechWithYou Website

## ✅ Stap 1: Code is Gepusht naar GitHub

Je code is succesvol gepusht naar GitHub:
- Repository: `techwithyou8/techwithyou-website`
- Branch: `main`
- Laatste commit: "feat: Add advanced AI chatbot, service detail pages, privacy pages, and comprehensive documentation"

---

## 🌐 Stap 2: Deploy naar Vercel

### Optie A: Via Vercel Website (Makkelijkst) ⭐

1. **Ga naar Vercel**
   - Open: https://vercel.com
   - Klik op "Sign Up" of "Log In"
   - Kies "Continue with GitHub"

2. **Autoriseer GitHub**
   - Geef Vercel toegang tot je GitHub account
   - Selecteer de repositories die Vercel mag zien
   - Of geef toegang tot alle repositories

3. **Importeer Project**
   - Klik op "Add New..." → "Project"
   - Zoek naar: `techwithyou-website`
   - Klik "Import"

4. **Configure Project**
   ```
   Project Name: techwithyou-website (of eigen naam)
   Framework Preset: Next.js (auto-detected)
   Root Directory: ./
   Build Command: npm run build (auto-detected)
   Output Directory: .next (auto-detected)
   Install Command: npm install (auto-detected)
   ```

5. **Environment Variables** (Optioneel - voor later)
   ```
   # Laat leeg voor nu, of voeg toe als je ChatGPT later integreert:
   NEXT_PUBLIC_OPENAI_API_KEY=your-key-here
   ```

6. **Deploy!**
   - Klik op "Deploy"
   - Wacht 2-3 minuten
   - ✅ Je website is live!

---

### Optie B: Via Vercel CLI (Voor gevorderden)

1. **Installeer Vercel CLI**
   ```powershell
   npm i -g vercel
   ```

2. **Login**
   ```powershell
   vercel login
   ```

3. **Deploy**
   ```powershell
   cd "c:\Users\husei\Documents\TechWithYou Projecten\techwithyou-website"
   vercel
   ```

4. **Volg de prompts**
   - Set up and deploy? Yes
   - Which scope? (Kies je account)
   - Link to existing project? No
   - What's your project's name? techwithyou-website
   - In which directory is your code located? ./
   - Want to override the settings? No

5. **Production Deploy**
   ```powershell
   vercel --prod
   ```

---

## 🎉 Stap 3: Je Website is Live!

Na deployment krijg je een URL zoals:
- **Preview**: `techwithyou-website-git-main-husei.vercel.app`
- **Production**: `techwithyou-website.vercel.app`

---

## 🌍 Stap 4: Custom Domain Toevoegen (Optioneel)

### Als je een eigen domein hebt (bijv. techwithyou.nl):

1. **Ga naar Vercel Dashboard**
   - Klik op je project
   - Ga naar "Settings" → "Domains"

2. **Voeg Domain Toe**
   - Klik "Add Domain"
   - Typ: `techwithyou.nl` en `www.techwithyou.nl`

3. **Update DNS Settings**
   
   Bij je domain provider (Transip, Hostnet, GoDaddy):
   
   **A Record:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   **CNAME Record:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wacht op Verificatie**
   - DNS propagation duurt 5 minuten tot 48 uur
   - Vercel configureert automatisch SSL (https)

---

## ⚙️ Stap 5: Automatic Deployments

✅ **Elke push naar GitHub = automatisch nieuwe deployment!**

Vanaf nu:
1. Je maakt wijzigingen in de code
2. Je commit en push naar GitHub
3. Vercel detecteert de push automatisch
4. Nieuwe versie wordt binnen 2-3 minuten live

**Preview Deployments:**
- Elke branch krijgt een eigen preview URL
- Perfect voor testing voor production

---

## 📊 Stap 6: Monitoring & Analytics

### Vercel Analytics (Gratis)

1. **Ga naar je project dashboard**
2. Klik op "Analytics" tab
3. Zie real-time data:
   - Pageviews
   - Unique visitors
   - Top pages
   - Countries
   - Devices

### Speed Insights

1. Ga naar "Speed Insights"
2. Zie performance metrics:
   - Core Web Vitals
   - Lighthouse scores
   - Real User Monitoring

---

## 🔧 Vercel Project Settings

### Build & Development Settings

```
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

### Environment Variables

Voor later (ChatGPT integratie):
```bash
# Production
NEXT_PUBLIC_OPENAI_API_KEY=sk-proj-...
OPENAI_API_KEY=sk-proj-...

# Preview/Development
NEXT_PUBLIC_OPENAI_API_KEY=sk-proj-...
```

### Caching

Vercel cached automatisch:
- Static assets (images, fonts)
- API responses
- Build artifacts

---

## 🚨 Troubleshooting

### Build Fails

**Error: "Module not found"**
```powershell
# Lokaal testen:
npm run build

# Als het lokaal werkt, check Vercel logs
```

**Error: "Out of memory"**
- Upgrade Vercel plan (gratis plan heeft 1GB RAM)
- Of optimaliseer je build process

### Domain Issues

**"Domain not verified"**
- Check DNS settings bij je provider
- Wacht 24-48 uur voor DNS propagation
- Gebruik `nslookup techwithyou.nl` om te checken

**SSL Certificate Issues**
- Vercel genereert automatisch SSL
- Kan 24 uur duren voor nieuwe domains
- Check "Domains" tab voor status

---

## 📈 Performance Optimizations

### Image Optimization

Vercel optimaliseert automatisch:
- Next.js Image component
- WebP/AVIF conversie
- Responsive images
- Lazy loading

### Edge Functions

Voor snelle responses wereldwijd:
```typescript
// Automatically deployed to edge locations
export const config = {
  runtime: 'edge',
};
```

---

## 💰 Pricing

### Hobby Plan (Gratis) ✅
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/maand
- ✅ HTTPS/SSL included
- ✅ Custom domain (1)
- ✅ Analytics
- ✅ Perfect voor TechWithYou!

### Pro Plan ($20/maand)
- Meer bandwidth
- Prioriteit support
- Team collaboration
- Passworded deployments

---

## 🎯 Post-Deployment Checklist

- [ ] Website is live op Vercel URL
- [ ] Alle pagina's werken (test alle routes)
- [ ] Live chat werkt correct
- [ ] Contact form werkt
- [ ] WhatsApp button werkt
- [ ] Service pages laden
- [ ] Dark mode werkt
- [ ] Mobiele versie werkt
- [ ] (Optioneel) Custom domain toegevoegd
- [ ] (Optioneel) Google Analytics toegevoegd
- [ ] (Optioneel) Google Search Console setup

---

## 🔗 Nuttige Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **GitHub Repo**: https://github.com/techwithyou8/techwithyou-website

---

## 📞 Support

**Vercel Support:**
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Twitter: @vercel

**TechWithYou Support:**
- Check GitHub Issues
- Test alle functionaliteiten na deployment
- Monitor Vercel Analytics

---

## 🎉 Success!

Je TechWithYou website is nu:

✅ Live op Vercel  
✅ Automatische deployments bij elke Git push  
✅ Global CDN (snel wereldwijd)  
✅ HTTPS/SSL automatisch  
✅ Zero-downtime deployments  
✅ Instant rollback mogelijk  
✅ Free hosting!  

**Volgende stappen:**
1. Test alle functionaliteit op de live URL
2. Deel de URL met je team
3. (Optioneel) Voeg custom domain toe
4. (Optioneel) Setup Google Analytics
5. Start met marketing! 🚀

---

**Deployment Date:** 3 oktober 2025  
**Status:** ✅ Ready for Production  
**Estimated Build Time:** 2-3 minuten
