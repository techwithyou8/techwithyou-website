import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
