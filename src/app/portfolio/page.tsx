import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ons Portfolio - Succesverhalen & Case Studies | TechWithYou',
  description: 'Ontdek onze succesverhalen: SaaS platforms, mobiele apps, e-commerce oplossingen en maatwerk software. 50+ projecten voor tevreden klanten.',
  keywords: ['portfolio', 'case studies', 'referenties', 'projecten', 'web applicaties', 'mobiele apps'],
  openGraph: {
    title: 'Portfolio - Bekijk Onze Gerealiseerde Projecten | TechWithYou',
    description: 'Van startups tot enterprise: zie hoe we bedrijven helpen groeien met innovatieve digitale oplossingen.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ons <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Echte oplossingen voor echte bedrijven. Ontdek hoe we ondernemers en bedrijven 
            hebben geholpen hun digitale dromen te realiseren.
          </p>
          <div className="flex gap-8 justify-center text-white mt-12">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-500">Projecten</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-500">Tevredenheid</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">25+</div>
              <div className="text-gray-500">Sectoren</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Component */}
      <Portfolio />

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Wat Onze Klanten Zeggen
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mark van den Berg',
                role: 'CEO, TechStart BV',
                text: 'TechWithYou heeft onze SaaS platform in slechts 3 maanden gebouwd. De kwaliteit en snelheid was ongeëvenaard!',
                rating: 5
              },
              {
                name: 'Sarah Jansen',
                role: 'Marketing Director, Fashion Forward',
                text: 'Onze nieuwe e-commerce site heeft onze sales verdrievoudigd. Het team denkt echt mee en levert top kwaliteit.',
                rating: 5
              },
              {
                name: 'Peter de Vries',
                role: 'CTO, FinanceFlow',
                text: 'Professioneel, betrouwbaar en technisch uitmuntend. Precies wat we zochten voor onze fintech applicatie.',
                rating: 5
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Sectoren Waar Wij Voor Werken
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: 'FinTech', icon: '💰' },
              { name: 'E-commerce', icon: '🛒' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Education', icon: '🎓' },
              { name: 'Real Estate', icon: '🏢' },
              { name: 'Logistics', icon: '🚚' },
              { name: 'Entertainment', icon: '🎬' },
              { name: 'Food & Beverage', icon: '🍔' },
              { name: 'Fashion', icon: '👔' },
              { name: 'SaaS', icon: '☁️' },
            ].map((industry, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">{industry.icon}</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Jouw Project Is Volgende</h2>
          <p className="text-xl mb-8 opacity-90">
            Laten we jouw succesverhaal schrijven. Neem contact op voor een gratis consultatie.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Bespreek Jouw Project
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
