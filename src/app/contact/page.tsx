import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact - Gratis Consultatie & Offerte | TechWithYou',
  description: 'Neem contact op met TechWithYou voor een gratis consultatie en scherpe projectofferte. Wij helpen MKB en enterprise met web apps, mobiele apps en e-commerce.',
  keywords: ['contact', 'offerte', 'consultatie', 'software ontwikkelaar', 'web development', 'mobiele apps'],
  openGraph: {
    title: 'Contact - Neem Direct Contact Op | TechWithYou',
    description: 'Klaar om te starten? Stuur ons een bericht en we reageren binnen 24 uur.',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <section className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Neem <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Contact</span> Op
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Klaar om jouw idee te bespreken? Vul het formulier in en ontvang binnen 24 uur reactie.
          </p>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </main>
  );
}
