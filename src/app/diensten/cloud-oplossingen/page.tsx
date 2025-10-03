import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Cloud } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cloud Oplossingen - AWS, Azure & DevOps | TechWithYou',
  description: 'Cloud infrastructuur setup, migratie en optimalisatie met AWS, Azure en Google Cloud. DevOps, CI/CD en managed cloud services.',
  keywords: ['cloud computing', 'aws', 'azure', 'devops', 'ci/cd', 'cloud migration'],
  alternates: {
    canonical: '/diensten/cloud-oplossingen',
  },
};

export default function CloudOplossingenPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-indigo-500/10" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
            <Cloud className="text-blue-400" size={24} />
            <span className="text-blue-400 font-semibold">Cloud Oplossingen</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Cloud Infrastructuur</span>
            <br />Die Schaalt Met Je Groei
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Van cloud migratie tot DevOps automatisering - wij zorgen voor betrouwbare, schaalbare cloud infrastructuur.
            AWS, Azure, Google Cloud expertise onder één dak.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="group px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Plan Je Cloud Strategie
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Onze Cloud Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '☁️', title: 'Cloud Migration', desc: 'Veilige en vlotte migratie naar de cloud', features: ['Assessment', 'Planning', 'Execution', 'Zero downtime'] },
              { icon: '🔧', title: 'DevOps & CI/CD', desc: 'Geautomatiseerde deployment pipelines', features: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes'] },
              { icon: '🚀', title: 'Auto-scaling', desc: 'Automatisch schalen op basis van traffic', features: ['Load balancing', 'Cost optimization', 'Performance', 'Monitoring'] },
              { icon: '🔒', title: 'Security & Compliance', desc: 'Cloud security best practices', features: ['IAM', 'Encryption', 'Auditing', 'Compliance'] },
              { icon: '📊', title: 'Monitoring & Logging', desc: 'Real-time monitoring en alerting', features: ['CloudWatch', 'Datadog', 'Grafana', 'Alerts'] },
              { icon: '💰', title: 'Cost Optimization', desc: 'Reduceer cloud kosten tot 40%', features: ['Resource optimization', 'Reserved instances', 'Spot instances', 'Reports'] }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Klaar Voor De Cloud?</h2>
          <p className="text-xl mb-8 opacity-90">
            Laten we je cloud strategie bespreken.
          </p>
          <a href="/contact" className="px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block">
            Plan Gratis Consultatie
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}