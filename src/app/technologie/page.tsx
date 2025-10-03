import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Onze Technologie Stack - Next.js, React, Node.js & Meer | TechWithYou',
  description: 'Wij bouwen met de nieuwste technologieën: Next.js 15, React, TypeScript, Node.js, Python, PostgreSQL, Docker en meer. Modern, schaalbaar en toekomstbestendig.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
  openGraph: {
    title: 'Technologie Stack - Moderne Web Development Tools | TechWithYou',
    description: 'Ontdek welke cutting-edge technologieën we gebruiken om krachtige, schaalbare applicaties te bouwen.',
    type: 'website',
  },
  alternates: {
    canonical: '/technologie',
  },
};

export default function TechnologiePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Onze <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technologie</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            We werken met de nieuwste en krachtigste technologieën om snelle, schaalbare en 
            veilige applicaties te bouwen. Altijd voorop met innovatie.
          </p>
        </div>
      </section>

      {/* Tech Stack Component */}
      <TechStack />

      {/* Why These Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Waarom Deze Technologieën?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Performance',
                desc: 'Next.js 15 met Turbopack zorgt voor razendsnelle builds en optimale runtime performance. Jouw gebruikers ervaren instant page loads.',
                icon: '⚡'
              },
              {
                title: 'Schaalbaarheid',
                desc: 'Van startup tot enterprise - onze tech stack groeit mee. Node.js en PostgreSQL handelen miljoenen requests zonder problemen.',
                icon: '📈'
              },
              {
                title: 'Beveiliging',
                desc: 'TypeScript voorkomt bugs, Docker isoleert omgevingen, en onze security best practices beschermen jouw data.',
                icon: '🔒'
              },
              {
                title: 'Developer Experience',
                desc: 'Moderne tools zoals TypeScript en Tailwind CSS verhogen developer productivity, wat resulteert in snellere delivery.',
                icon: '👨‍💻'
              },
              {
                title: 'SEO Optimalisatie',
                desc: 'Next.js SSR en SSG zorgen voor perfecte SEO scores. Jouw site wordt gevonden door zoekmachines.',
                icon: '🎯'
              },
              {
                title: 'Toekomstbestendig',
                desc: 'We kiezen technologieën met sterke communities en lange-termijn support. Jouw investering blijft waardevol.',
                icon: '🚀'
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Onze Tech Stack vs Traditioneel
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <thead className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">Onze Stack</th>
                  <th className="px-6 py-4 text-left">Traditioneel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { feature: 'Build Time', ours: '< 10 seconden', traditional: '2-5 minuten' },
                  { feature: 'Page Load', ours: '< 1 seconde', traditional: '3-5 seconden' },
                  { feature: 'Type Safety', ours: '100% (TypeScript)', traditional: 'Geen (JavaScript)' },
                  { feature: 'SEO Score', ours: '95-100', traditional: '60-80' },
                  { feature: 'Deployment', ours: 'Automatisch (CI/CD)', traditional: 'Handmatig' },
                  { feature: 'Schaalbaarheid', ours: 'Serverless / Auto-scale', traditional: 'Fixed servers' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">✓ {row.ours}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Klaar Voor De Beste Tech?</h2>
          <p className="text-xl mb-8 opacity-90">
            Laat ons jouw project bouwen met de meest moderne en betrouwbare technologieën.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Jouw Project
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
