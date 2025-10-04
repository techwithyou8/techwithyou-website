import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TechWithYou - Professional Web & Mobile App Development',
    short_name: 'TechWithYou',
    description: 'Enterprise-grade web applicaties, mobiele apps en e-commerce oplossingen. Transformeer jouw ideeën naar werkelijkheid met de nieuwste technologie.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#06b6d4',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'technology'],
    lang: 'nl',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  };
}