import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechWithYou | Professionele Web & Mobiele App Ontwikkeling",
  description: "Enterprise-grade web applicaties, mobiele apps en e-commerce oplossingen. Transformeer jouw ideeën naar werkelijkheid met de nieuwste technologie. Next.js, React, Node.js experts.",
  keywords: ["web development", "mobiele app ontwikkeling", "e-commerce", "Next.js", "React", "Node.js", "maatwerk software"],
  authors: [{ name: "TechWithYou" }],
  openGraph: {
    title: "TechWithYou | Professionele Ontwikkelingsdiensten",
    description: "Bouw krachtige web apps, mobiele oplossingen en e-commerce platforms met moderne technologie.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="font-sans antialiased" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
