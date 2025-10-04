import type { Metadata } from "next";
import "./globals.css";
import LiveChat from "@/components/LiveChat";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  metadataBase: new URL('https://techwithyou.com'),
  title: "TechWithYou | Professionele Web & Mobiele App Ontwikkeling",
  description: "Enterprise-grade web applicaties, mobiele apps en e-commerce oplossingen. Transformeer jouw ideeën naar werkelijkheid met de nieuwste technologie. Next.js, React, Node.js experts.",
  keywords: ["web development", "mobiele app ontwikkeling", "e-commerce", "Next.js", "React", "Node.js", "maatwerk software"],
  authors: [{ name: "TechWithYou" }],
  openGraph: {
    title: "TechWithYou | Professionele Ontwikkelingsdiensten",
    description: "Bouw krachtige web apps, mobiele oplossingen en e-commerce platforms met moderne technologie.",
    type: "website",
    locale: 'nl_NL',
    siteName: 'TechWithYou',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TechWithYou | Professionele Ontwikkelingsdiensten",
    description: "Enterprise-grade web apps, mobiele apps en e-commerce oplossingen.",
    creator: '@techwithyou',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TechWithYou',
    url: 'https://techwithyou.com',
    logo: 'https://techwithyou.com/logo.png',
    description: 'Enterprise-grade web applicaties, mobiele apps en e-commerce oplossingen',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressCountry: 'NL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-6-1234-5678',
      contactType: 'customer service',
      email: 'info@techwithyou.com',
      availableLanguage: ['nl', 'en'],
    },
    sameAs: [
      'https://linkedin.com/company/techwithyou',
      'https://github.com/techwithyou8',
      'https://twitter.com/techwithyou',
    ],
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '6',
      offers: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Applicatie Ontwikkeling',
            description: 'Op maat gemaakte web apps gebouwd met React, Next.js en moderne frameworks',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobiele App Ontwikkeling',
            description: 'Native iOS/Android of cross-platform apps met React Native en Flutter',
          },
        },
      ],
    },
  };

  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased system-font">
        <ErrorBoundary>
          <LoadingScreen />
          {children}
          <LiveChat />
        </ErrorBoundary>
      </body>
    </html>
  );
}
