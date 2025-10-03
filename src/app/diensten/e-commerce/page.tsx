import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-commerce Ontwikkeling - Online Winkels & Webshops | TechWithYou',
  description: 'Professionele e-commerce oplossingen met Shopify, WooCommerce en custom platforms. Complete webshops met betaalsystemen en voorraad beheer.',
  keywords: ['e-commerce', 'webshop', 'online winkel', 'shopify', 'woocommerce', 'online shop development'],
  alternates: {
    canonical: '/diensten/e-commerce',
  },
};

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-500/10" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-orange-500/10 backdrop-blur-sm border border-orange-500/20">
            <ShoppingCart className="text-orange-400" size={24} />
            <span className="text-orange-400 font-semibold">E-commerce Oplossingen</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">E-commerce</span>
            <br />Die Echt Verkoopt
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Complete online winkels met betaalintegraties, voorraadbeheer en marketing tools.
            Van Shopify tot custom oplossingen - wij bouwen webshops die omzet genereren.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="group px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Start Je Webshop
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Onze E-commerce Oplossingen</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🛒', title: 'Shopify Stores', desc: 'Complete Shopify webshops met custom design en apps', features: ['Shopify Plus', 'Custom themes', 'App integraties', 'Migration'] },
              { icon: '🎨', title: 'Custom E-commerce', desc: 'Op maat gemaakte webshops met Next.js en headless commerce', features: ['Headless commerce', 'Custom checkout', 'API first', 'Schaalbaarheid'] },
              { icon: '💳', title: 'Betaalsystemen', desc: 'Integratie met Stripe, Mollie, PayPal en iDeal', features: ['Multi-gateway', 'Veilig', 'Recurring', 'Facturen'] },
              { icon: '📦', title: 'Voorraadbeheer', desc: 'Real-time voorraad tracking en automatische updates', features: ['Stock alerts', 'Multi-warehouse', 'Sync systemen', 'Reports'] },
              { icon: '📊', title: 'Analytics & SEO', desc: 'Google Analytics, conversie tracking en SEO optimalisatie', features: ['GA4', 'Conversion tracking', 'SEO audit', 'Schema markup'] },
              { icon: '🚚', title: 'Verzendintegraties', desc: 'PostNL, DHL, UPS en custom shipping providers', features: ['Track & trace', 'Label printing', 'Rate calculation', 'Returns'] }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-orange-500 mr-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Start Je Online Winkel</h2>
          <p className="text-xl mb-8 opacity-90">
            Neem contact op voor een gratis consultatie en offerte op maat.
          </p>
          <a href="/contact" className="px-8 py-3.5 bg-white text-orange-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block">
            Vraag Offerte Aan
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}