import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen" id="main-content">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  );
}
