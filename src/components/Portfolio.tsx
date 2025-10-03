'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise SaaS Platform',
    category: 'Web Applicatie',
    description: 'Full-stack SaaS platform met multi-tenancy, real-time samenwerking en geavanceerd analytics dashboard.',
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'AWS'],
    image: '/projects/saas.jpg',
    gradient: 'from-blue-500 to-cyan-500',
    metrics: { gebruikers: '10K+', uptime: '99.9%', performance: '95' }
  },
  {
    title: 'E-commerce Mobiele App',
    category: 'Mobiele App',
    description: 'Cross-platform shopping app met AR product preview, one-click checkout en gepersonaliseerde aanbevelingen.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/projects/ecommerce.jpg',
    gradient: 'from-purple-500 to-pink-500',
    metrics: { downloads: '50K+', beoordeling: '4.8★', conversie: '12%' }
  },
  {
    title: 'FinTech Dashboard',
    category: 'Web Applicatie',
    description: 'Real-time financiële analytics platform met AI-powered inzichten en geautomatiseerde rapportage.',
    tags: ['React', 'Python', 'TensorFlow', 'Docker'],
    image: '/projects/fintech.jpg',
    gradient: 'from-green-500 to-teal-500',
    metrics: { transacties: '1M+', nauwkeurigheid: '98%', latentie: '<100ms' }
  },
  {
    title: 'Zorgportaal',
    category: 'Maatwerk Software',
    description: 'HIPAA-compliant patiëntbeheer systeem met telegeneeskunde en elektronische zorddossiers.',
    tags: ['Next.js', 'PostgreSQL', 'WebRTC', 'AWS'],
    image: '/projects/healthcare.jpg',
    gradient: 'from-red-500 to-orange-500',
    metrics: { patienten: '25K+', afspraken: '5K/mnd', tevredenheid: '96%' }
  },
  {
    title: 'Social Media Platform',
    category: 'Web & Mobiel',
    description: 'Real-time sociaal netwerk met live streaming, stories en geavanceerde content moderatie.',
    tags: ['Next.js', 'React Native', 'WebSocket', 'Redis'],
    image: '/projects/social.jpg',
    gradient: 'from-purple-500 to-blue-500',
    metrics: { gebruikers: '100K+', betrokkenheid: '45min/dag', retentie: '78%' }
  },
  {
    title: 'AI Content Generator',
    category: 'SaaS Platform',
    description: 'GPT-powered content creatie tool met meertalige ondersteuning en SEO optimalisatie.',
    tags: ['Next.js', 'OpenAI', 'Python', 'Vercel'],
    image: '/projects/ai.jpg',
    gradient: 'from-indigo-500 to-purple-500',
    metrics: { content: '1M+', talen: '50+', nauwkeurigheid: '94%' }
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
            Ons Werk
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Uitgelichte Projecten
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Echte oplossingen voor echte bedrijven. Zie hoe we bedrijven hebben geholpen hun digitale aanwezigheid te transformeren
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Placeholder with Gradient */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">{project.title.substring(0, 1)}</div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Hover Icons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                    <ExternalLink size={18} className="text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                    <Github size={18} className="text-white" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-800 dark:text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-gray-200 dark:border-gray-700">
                  {Object.entries(project.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <button className="flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:gap-3 transition-all duration-300">
                  Bekijk Case Study
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Wil jij jouw project hier zien? Laten we samen iets geweldigs bouwen.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold text-base hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
          >
            Start Jouw Project
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
