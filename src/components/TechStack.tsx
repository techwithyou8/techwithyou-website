'use client';

import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiDocker } from 'react-icons/si';

const technologies = [
  {
    name: 'React & Next.js',
    icon: SiReact,
    description: 'Bouw razendsnelle, SEO-geoptimaliseerde web applicaties met het populairste React framework',
    color: '#61DAFB',
    gradient: 'from-cyan-400 to-blue-500',
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    description: 'Type-veilige code die schaalt. Vang fouten voordat ze in productie komen',
    color: '#3178C6',
    gradient: 'from-blue-500 to-blue-700',
    category: 'Taal',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    description: 'High-performance backend met JavaScript. Perfect voor real-time applicaties',
    color: '#339933',
    gradient: 'from-green-500 to-green-700',
    category: 'Backend',
  },
  {
    name: 'Python & Django',
    icon: SiPython,
    description: 'Krachtige backend met AI/ML mogelijkheden. Ideaal voor data-gedreven applicaties',
    color: '#3776AB',
    gradient: 'from-blue-400 to-yellow-500',
    category: 'Backend',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    description: 'Modern utility-first CSS framework voor snelle UI ontwikkeling',
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-teal-500',
    category: 'Styling',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    description: 'Enterprise-grade relationele database voor complex databeheer',
    color: '#4169E1',
    gradient: 'from-blue-600 to-indigo-600',
    category: 'Database',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    description: 'Containerisatie voor consistente deployment in alle omgevingen',
    color: '#2496ED',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'DevOps',
  },
  {
    name: 'Next.js 15',
    icon: SiNextdotjs,
    description: 'Nieuwste framework features: Server Actions, Partial Prerendering, en meer',
    color: '#000000',
    gradient: 'from-gray-800 to-gray-950',
    category: 'Framework',
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
            Technologie Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gebouwd met Moderne Technologie
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Wij gebruiken de nieuwste en krachtigste technologieën om snelle, schaalbare en veilige applicaties te bouwen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/50 dark:bg-black/30 text-gray-700 dark:text-gray-300">
                    {tech.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block"
                  >
                    <Icon 
                      size={60} 
                      className="transition-colors duration-300"
                      style={{ color: tech.color }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${tech.gradient} bg-clip-border`} 
                       style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} 
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Tech Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-8 py-6 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 rounded-2xl">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Ook ervaring met:</span>
            <div className="flex flex-wrap gap-3">
              {['MongoDB', 'Redis', 'AWS', 'GraphQL', 'Firebase', 'Vercel', 'GitHub Actions', 'Stripe'].map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 text-sm font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
