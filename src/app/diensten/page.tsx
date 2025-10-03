import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Onze Diensten - Web Apps, Mobile Apps & E-commerce | TechWithYou',
  description: 'Professionele ontwikkelingsdiensten: Web Applicaties, Mobiele Apps, E-commerce, Maatwerk Software, Cloud Oplossingen en 24/7 Onderhoud. Enterprise-grade oplossingen voor MKB en grote bedrijven.',
  keywords: ['web applicatie ontwikkeling', 'mobiele app ontwikkeling', 'e-commerce ontwikkeling', 'maatwerk software', 'cloud oplossingen', 'software onderhoud'],
  openGraph: {
    title: 'Onze Diensten - Professionele Software Ontwikkeling | TechWithYou',
    description: 'Van web apps tot mobiele oplossingen - wij bouwen schaalbare, snelle en veilige applicaties met de nieuwste technologieën.',
    type: 'website',
  },
  alternates: {
    canonical: '/diensten',
  },
};

export default function DienstenPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Onze <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Diensten</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Complete digitale oplossingen voor moderne bedrijven. Van concept tot deployment, 
            wij bieden end-to-end ontwikkelingsdiensten die jouw bedrijf naar een hoger niveau tillen.
          </p>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Additional SEO Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Waarom Kiezen Voor TechWithYou?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Enterprise-Grade Kwaliteit:</strong> Wij bouwen oplossingen die schaalbaar, 
                  veilig en toekomstbestendig zijn. Perfect voor zowel MKB als grote ondernemingen.
                </p>
                <p>
                  <strong>Moderne Technologieën:</strong> We werken met de nieuwste frameworks en tools: 
                  Next.js 15, React, Node.js, Python, TypeScript en meer. Altijd up-to-date.
                </p>
                <p>
                  <strong>Transparante Communicatie:</strong> Regelmatige updates, duidelijke planning 
                  en directe communicatie. Jouw project, jouw controle.
                </p>
                <p>
                  <strong>24/7 Support:</strong> Ook na oplevering staan we voor je klaar. 
                  Onderhoud, updates en technische support wanneer je het nodig hebt.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ons Ontwikkelproces
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Discovery & Planning', desc: 'We analyseren jouw behoeften en maken een gedetailleerd projectplan.' },
                  { step: '2', title: 'Design & Prototyping', desc: 'UI/UX design en interactieve prototypes voor validatie.' },
                  { step: '3', title: 'Development', desc: 'Agile ontwikkeling met regelmatige sprints en demos.' },
                  { step: '4', title: 'Testing & QA', desc: 'Uitgebreide tests voor kwaliteit en betrouwbaarheid.' },
                  { step: '5', title: 'Deployment', desc: 'Veilige deployment naar productie omgeving.' },
                  { step: '6', title: 'Onderhoud', desc: 'Continue support, updates en optimalisaties.' },
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">{phase.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Klaar Om Te Starten?</h2>
          <p className="text-xl mb-8 opacity-90">
            Bespreek jouw project met onze experts en ontvang binnen 24 uur een gedetailleerde offerte.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Vraag Gratis Offerte Aan
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
