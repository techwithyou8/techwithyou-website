import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Globe, Zap, Shield, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Applicatie Ontwikkeling - React, Next.js & Node.js | TechWithYou',
  description: 'Professionele web applicatie ontwikkeling met React, Next.js en moderne frameworks. Schaalbare, snelle en SEO-geoptimaliseerde oplossingen voor uw bedrijf.',
  keywords: ['web applicatie', 'react development', 'nextjs', 'progressive web app', 'spa', 'web development'],
  openGraph: {
    title: 'Web Applicatie Ontwikkeling - Enterprise Grade Solutions',
    description: 'Bouw schaalbare web applicaties met de nieuwste technologieën',
    type: 'website',
  },
  alternates: {
    canonical: '/diensten/web-applicaties',
  },
};

export default function WebApplicatiesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20">
            <Globe className="text-cyan-400" size={24} />
            <span className="text-cyan-400 font-semibold">Web Applicaties</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Moderne <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Web Applicaties</span>
            <br />Die Jouw Bedrijf Laten Groeien
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Wij bouwen krachtige, schaalbare web applicaties met React, Next.js en Node.js. 
            Van MVPs tot enterprise oplossingen - snel, veilig en gebruiksvriendelijk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Start Jouw Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#features"
              className="px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Bekijk Mogelijkheden
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Wat Wij Bouwen
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Geavanceerde web applicaties voor elke bedrijfsbehoefte
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Progressive Web Apps (PWA)',
                description: 'App-achtige ervaring in de browser met offline functionaliteit en installeerbaar op elk apparaat.',
                features: ['Offline werken', 'Push notificaties', 'Snel laden', 'Installeerbaar']
              },
              {
                icon: Zap,
                title: 'Single Page Applications (SPA)',
                description: 'Razendsnelle apps zonder pagina herladen. Naadloze gebruikerservaring met React of Vue.js.',
                features: ['Lightning fast', 'Smooth UX', 'Real-time updates', 'Mobile-first']
              },
              {
                icon: Code,
                title: 'Enterprise Web Platforms',
                description: 'Complexe bedrijfsapplicaties met geavanceerde workflows en integraties.',
                features: ['Multi-user', 'Role management', 'API integraties', 'Schaalbaarheid']
              },
              {
                icon: Shield,
                title: 'SaaS Platforms',
                description: 'Complete Software-as-a-Service oplossingen met subscription management en analytics.',
                features: ['Multi-tenancy', 'Billing integration', 'User analytics', 'Admin dashboard']
              },
              {
                icon: Globe,
                title: 'Content Management',
                description: 'Headless CMS oplossingen met Strapi, Sanity of custom gebouwd voor maximale flexibiliteit.',
                features: ['Headless CMS', 'Easy updates', 'Media library', 'SEO tools']
              },
              {
                icon: Zap,
                title: 'Real-time Applicaties',
                description: 'Applicaties met live data synchronisatie, chat functionaliteit en collaborative features.',
                features: ['WebSocket', 'Live updates', 'Chat systemen', 'Collaboration']
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle size={16} className="text-cyan-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Technologieën
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We werken met de nieuwste en beste tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="text-white" size={20} />
                </div>
                Frontend
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'React 18 & Next.js 15', desc: 'Moderne JavaScript frameworks voor snelle interfaces' },
                  { name: 'TypeScript', desc: 'Type-safe development voor minder bugs' },
                  { name: 'Tailwind CSS', desc: 'Utility-first styling voor snel development' },
                  { name: 'Redux / Zustand', desc: 'State management voor complexe apps' },
                ].map((tech, i) => (
                  <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-xl">
                    <div className="font-semibold text-gray-900 dark:text-white">{tech.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Shield className="text-white" size={20} />
                </div>
                Backend
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Node.js & Express', desc: 'Schaalbare server-side JavaScript' },
                  { name: 'PostgreSQL / MongoDB', desc: 'Betrouwbare databases voor alle data' },
                  { name: 'GraphQL & REST APIs', desc: 'Flexibele API architectuur' },
                  { name: 'AWS / Vercel / Azure', desc: 'Cloud hosting en deployment' },
                ].map((tech, i) => (
                  <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-xl">
                    <div className="font-semibold text-gray-900 dark:text-white">{tech.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ons Ontwikkelproces
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Van idee tot lancering in 6 stappen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Discovery', desc: 'We analyseren jouw behoeften en doelen', icon: '🔍' },
              { step: '2', title: 'Planning', desc: 'Gedetailleerd projectplan en architectuur', icon: '📋' },
              { step: '3', title: 'Design', desc: 'UI/UX design en interactieve prototypes', icon: '🎨' },
              { step: '4', title: 'Development', desc: 'Agile ontwikkeling met wekelijkse updates', icon: '⚡' },
              { step: '5', title: 'Testing', desc: 'Uitgebreide QA en gebruikerstesten', icon: '✅' },
              { step: '6', title: 'Launch', desc: 'Deployment en continue ondersteuning', icon: '🚀' },
            ].map((phase, i) => (
              <div key={i} className="relative p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                <div className="text-4xl mb-4">{phase.icon}</div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{phase.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Klaar Om Te Starten?</h2>
          <p className="text-xl mb-8 opacity-90">
            Laten we jouw web applicatie bouwen. Neem contact op voor een gratis consultatie en offerte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Jouw Project
            </a>
            <a
              href="/portfolio"
              className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              Bekijk Onze Projecten
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}