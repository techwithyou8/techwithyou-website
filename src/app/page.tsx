import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Lazy load components that are not immediately visible
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const TechStack = dynamic(() => import('@/components/TechStack'), { ssr: true });
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'));
const CookieConsent = dynamic(() => import('@/components/CookieConsent'));

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen" id="main-content">
        <Navbar />
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <Testimonials />
        <ContactForm />
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </main>
    </ErrorBoundary>
  );
}
