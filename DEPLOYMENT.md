# 🚀 Deployment Guide - TechWithYou Website

## Production Checklist

### Before Deployment

- [ ] Update environment variables
- [ ] Configure email service (Resend, SendGrid, etc.)
- [ ] Set up analytics (Google Analytics, Plausible)
- [ ] Test contact form thoroughly
- [ ] Run production build locally
- [ ] Check all images and assets
- [ ] Verify all links work
- [ ] Test on multiple devices and browsers
- [ ] Review security headers
- [ ] Set up error monitoring (Sentry)

### Environment Variables

Create a `.env.local` file (or configure in your hosting platform):

```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://techwithyou.com

# Optional - Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional - Email Service (e.g., Resend)
EMAIL_SERVICE_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=info@techwithyou.com
EMAIL_TO=info@techwithyou.com

# Optional - Database (if you add one)
DATABASE_URL=postgresql://user:password@host:port/database
```

## Deployment Options

### 1. Vercel (Recommended) ⭐

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Edge network (fastest)
- Free tier available

**Steps:**

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production:
```bash
vercel --prod
```

**Environment Variables in Vercel:**
- Go to Project Settings → Environment Variables
- Add all variables from `.env.local`
- Redeploy after adding variables

### 2. Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Node version: 18+

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 3. Docker

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Build and Run:**
```bash
docker build -t techwithyou-website .
docker run -p 3000:3000 techwithyou-website
```

### 4. VPS (Ubuntu/Debian)

1. **Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Install PM2:**
```bash
npm install -g pm2
```

3. **Build and Start:**
```bash
npm run build
pm2 start npm --name "techwithyou" -- start
pm2 save
pm2 startup
```

4. **Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name techwithyou.com www.techwithyou.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Post-Deployment

### 1. Set Up Email Service

**Option A: Resend (Recommended)**
```typescript
// src/app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.EMAIL_SERVICE_API_KEY);

await resend.emails.send({
  from: 'TechWithYou <info@techwithyou.com>',
  to: ['info@techwithyou.com'],
  subject: `New Contact: ${sanitizedData.service}`,
  html: `...`
});
```

**Option B: SendGrid**
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.EMAIL_SERVICE_API_KEY!);

await sgMail.send({
  to: 'info@techwithyou.com',
  from: 'info@techwithyou.com',
  subject: `New Contact: ${sanitizedData.service}`,
  html: `...`
});
```

### 2. Add Analytics

**Google Analytics:**
```typescript
// src/app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${env.googleAnalyticsId}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${env.googleAnalyticsId}');
  `}
</Script>
```

### 3. Set Up Error Monitoring

**Sentry:**
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### 4. Configure Custom Domain

**Vercel:**
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records (provided by Vercel)

**SSL Certificate:**
- Automatic with Vercel, Netlify
- Use Let's Encrypt for VPS: `certbot --nginx`

### 5. Performance Optimization

**Image Optimization:**
- All images should use Next.js `<Image>` component
- Configure in `next.config.ts`

**Caching:**
```typescript
// next.config.ts
const nextConfig = {
  headers: async () => [
    {
      source: '/public/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};
```

## Monitoring

### Health Checks

1. **Uptime Monitoring:**
   - UptimeRobot (free)
   - Pingdom
   - StatusCake

2. **Performance:**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

3. **Error Tracking:**
   - Sentry
   - LogRocket
   - Rollbar

## Backup Strategy

1. **Code:** Git repository (already done)
2. **Database:** Automated daily backups
3. **Media:** S3/Cloud storage backups

## Security

1. **SSL Certificate:** Always use HTTPS
2. **Security Headers:** Already configured in `next.config.ts`
3. **Rate Limiting:** Implemented in API routes
4. **Environment Variables:** Never commit to Git
5. **Regular Updates:** Keep dependencies updated

## Support

For issues during deployment:
- Check build logs
- Review environment variables
- Test locally with `npm run build && npm start`
- Consult platform documentation

---

**Last Updated:** 2025
**Maintainer:** TechWithYou Team
