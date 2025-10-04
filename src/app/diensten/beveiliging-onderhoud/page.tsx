import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beveiliging & Onderhoud - 24/7 Support | TechWithYou',
  description: 'Continue ondersteuning, security updates, performance monitoring en 24/7 onderhoud voor je software. Pro-actieve beveiliging en maintenance.',
  keywords: ['software maintenance', 'security', '24/7 support', 'monitoring', 'updates', 'beveiliging'],
  alternates: {
    canonical: '/diensten/beveiliging-onderhoud',
  },
};

export default function BeveiligingOnderhoudPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-pink-500/10" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-red-500/10 backdrop-blur-sm border border-red-500/20">
            <Shield className="text-red-400" size={24} />
            <span className="text-red-400 font-semibold">Beveiliging & Onderhoud</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">24/7 Beveiliging</span>
            <br />& Pro-actief Onderhoud
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Houd je software veilig, snel en up-to-date met onze managed services.
            Security audits, monitoring, updates en 24/7 support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="group px-8 py-3.5 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Vraag Support Pakket Aan
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Wat Inbegrepen Is</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🔒', title: 'Security Audits', desc: 'Regelmatige security scans en penetratietesten', features: ['Vulnerability scanning', 'Pen testing', 'Code review', 'Compliance'] },
              { icon: '📊', title: 'Performance Monitoring', desc: '24/7 monitoring van uptime en performance', features: ['Uptime monitoring', 'Response time', 'Error tracking', 'Alerts'] },
              { icon: '🔄', title: 'Updates & Patches', desc: 'Automatische security en feature updates', features: ['Security patches', 'Framework updates', 'Dependency updates', 'Testing'] },
              { icon: '💾', title: 'Backups', desc: 'Dagelijkse backups met disaster recovery', features: ['Daily backups', 'Point-in-time recovery', 'Testing', 'Off-site storage'] },
              { icon: '📞', title: '24/7 Support', desc: 'Directe hulp wanneer je het nodig hebt', features: ['Ticket system', 'Phone support', 'Emergency hotline', 'Response SLA'] },
              { icon: '⚡', title: 'Performance Optimization', desc: 'Continue optimalisatie van snelheid', features: ['Code optimization', 'Database tuning', 'Caching', 'CDN setup'] }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-red-500 mr-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Support Pakketten</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '€499', period: '/maand', features: ['8x5 support', 'Security updates', 'Monthly backups', 'Basic monitoring', 'Email support'] },
              { name: 'Professional', price: '€999', period: '/maand', popular: true, features: ['24/7 support', 'All updates', 'Daily backups', 'Advanced monitoring', 'Phone support', 'Performance optimization'] },
              { name: 'Enterprise', price: 'Custom', period: '', features: ['Dedicated support', 'Custom SLA', 'Real-time backups', 'Full monitoring', 'Priority support', 'On-site available'] }
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl ${plan.popular ? 'bg-gradient-to-br from-red-500 to-pink-600 text-white' : 'bg-white dark:bg-gray-800'}`}>
                {plan.popular && <div className="text-sm font-semibold mb-4">🔥 POPULAIRST</div>}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.name}</h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.price}</span>
                  <span className={plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center">
                      <CheckCircle size={16} className={`mr-2 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-red-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${plan.popular ? 'bg-white text-red-600 hover:shadow-xl' : 'bg-red-500 text-white hover:bg-red-600'}`}>
                  Kies {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Bescherm Je Software</h2>
          <p className="text-xl mb-8 opacity-90">
            Neem contact op voor een op maat gemaakt onderhoudspakket.
          </p>
          <a href="/contact" className="px-8 py-3.5 bg-white text-red-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block">
            Vraag Offerte Aan
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}