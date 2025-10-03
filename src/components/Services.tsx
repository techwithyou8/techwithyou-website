'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, ShoppingCart, Boxes, Cloud, Lock, Zap, Code } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Applicaties',
    description: 'Op maat gemaakte web apps gebouwd met React, Next.js en moderne frameworks. Schaalbaar, snel en SEO-geoptimaliseerd.',
    features: ['Progressive Web Apps', 'Real-time Functionaliteit', 'API Integratie', 'Cloud Deployment'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Mobiele Apps',
    description: 'Native iOS/Android of cross-platform apps met React Native en Flutter voor maximaal bereik.',
    features: ['iOS & Android', 'Cross-platform', 'Push Notificaties', 'Offline Ondersteuning'],
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Oplossingen',
    description: 'Complete online winkels met betaalintegratie, voorraadbeheer en analytics.',
    features: ['Betaal Gateways', 'Voorraad Systeem', 'Analytics Dashboard', 'SEO Geoptimaliseerd'],
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: Boxes,
    title: 'Maatwerk Software',
    description: 'Op maat gemaakte enterprise oplossingen, SaaS platforms en business automation tools.',
    features: ['Bedrijfslogica', 'Workflow Automatisering', 'Externe Integratie', 'Schaalbare Architectuur'],
    gradient: 'from-green-500 to-teal-600',
  },
  {
    icon: Cloud,
    title: 'Cloud Oplossingen',
    description: 'Cloud infrastructuur setup, migratie en optimalisatie met AWS, Azure en Google Cloud.',
    features: ['DevOps & CI/CD', 'Cloud Migratie', 'Auto-scaling', 'Kosten Optimalisatie'],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Lock,
    title: 'Beveiliging & Onderhoud',
    description: 'Continue ondersteuning, security updates, performance monitoring en 24/7 onderhoud.',
    features: ['Security Audits', 'Performance Monitoring', '24/7 Support', 'Regelmatige Updates'],
    gradient: 'from-red-500 to-pink-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-cyan-600 bg-cyan-100 dark:bg-cyan-900/30 dark:text-cyan-400 rounded-full">
            Onze Diensten
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Complete Digitale Oplossingen
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Van concept tot deployment, wij bieden end-to-end ontwikkelingsdiensten voor bedrijven van elke omvang
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold group-hover:gap-2 transition-all duration-300">
                  Meer Info
                  <Zap className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyan-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Iets specifieks nodig? Wij bouwen oplossingen op maat voor jouw exacte wensen.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold text-base hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
          >
            <Code size={18} />
            Bespreek Jouw Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
