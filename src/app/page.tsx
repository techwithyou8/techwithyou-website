import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen" id="main-content">
        <Navbar />
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <ContactForm />
        <Footer />
        <ScrollToTop />
      </main>
    </ErrorBoundary>
  );
}
