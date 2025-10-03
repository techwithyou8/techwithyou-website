import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Boxes } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maatwerk Software Ontwikkeling - Custom Solutions | TechWithYou',
  description: 'Op maat gemaakte enterprise software, SaaS platforms en business automation tools. Custom software die perfect aansluit bij jouw bedrijfsprocessen.',
  keywords: ['maatwerk software', 'custom software', 'enterprise software', 'saas platform', 'business automation'],
  alternates: {
    canonical: '/diensten/maatwerk-software',
  },
};

export default function MaatwerkSoftwarePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-teal-500/10" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-green-500/10 backdrop-blur-sm border border-green-500/20">
            <Boxes className="text-green-400" size={24} />
            <span className="text-green-400 font-semibold">Maatwerk Software</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Software Op Maat</span>
            <br />Voor Jouw Unieke Bedrijf
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Custom software oplossingen die perfect aansluiten bij jouw processen.
            Van SaaS platforms tot enterprise systemen - wij bouwen exact wat jij nodig hebt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="group px-8 py-3.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Bespreek Je Idee
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Wat We Ontwikkelen</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🚀', title: 'SaaS Platforms', desc: 'Multi-tenant software met subscription management', features: ['Multi-tenancy', 'Billing', 'Analytics', 'Admin tools'] },
              { icon: '🏢', title: 'Enterprise Software', desc: 'Complexe systemen voor grote organisaties', features: ['Workflows', 'Permissions', 'Integrations', 'Scalability'] },
              { icon: '🤖', title: 'Automatisering', desc: 'Business process automation en workflow tools', features: ['Process automation', 'API integraties', 'Scheduling', 'Reporting'] },
              { icon: '📊', title: 'CRM & ERP Systemen', desc: 'Customer en resource planning oplossingen', features: ['Customer management', 'Pipeline', 'Inventory', 'Finance'] },
              { icon: '💼', title: 'Management Tools', desc: 'Project, team en resource management platforms', features: ['Task management', 'Team collab', 'Time tracking', 'Dashboards'] },
              { icon: '🔗', title: 'API Platforms', desc: 'RESTful en GraphQL APIs met documentatie', features: ['REST/GraphQL', 'Authentication', 'Rate limiting', 'Docs'] }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-500 to-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Klaar Voor Maatwerk?</h2>
          <p className="text-xl mb-8 opacity-90">
            Laten we jouw unieke software oplossing bespreken.
          </p>
          <a href="/contact" className="px-8 py-3.5 bg-white text-green-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block">
            Neem Contact Op
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}