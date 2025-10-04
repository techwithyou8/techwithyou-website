'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  text: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mark van den Berg',
    role: 'CEO',
    company: 'TechStart BV',
    rating: 5,
    text: 'TechWithYou heeft onze SaaS platform in slechts 3 maanden gebouwd. De kwaliteit en snelheid was ongeëvenaard! Ze denken proactief mee en leveren altijd op tijd.',
    project: 'Enterprise SaaS Platform',
  },
  {
    id: 2,
    name: 'Sarah Jansen',
    role: 'Marketing Director',
    company: 'Fashion Forward',
    rating: 5,
    text: 'Onze nieuwe e-commerce site heeft onze sales verdrievoudigd. Het team denkt echt mee en levert top kwaliteit. De website is snel, mooi en converteert uitstekend.',
    project: 'E-commerce Website',
  },
  {
    id: 3,
    name: 'Peter de Vries',
    role: 'CTO',
    company: 'FinanceFlow',
    rating: 5,
    text: 'Professioneel, betrouwbaar en technisch uitmuntend. Precies wat we zochten voor onze fintech applicatie. Ze begrijpen complexe requirements en leveren foutloze code.',
    project: 'FinTech Dashboard',
  },
  {
    id: 4,
    name: 'Lisa Vermeer',
    role: 'Founder',
    company: 'HealthHub',
    rating: 5,
    text: 'Een geweldige ervaring van begin tot eind. De mobiele app werkt perfect en onze gebruikers zijn super tevreden. Uitstekende communicatie gedurende het hele project.',
    project: 'Healthcare Mobile App',
  },
  {
    id: 5,
    name: 'Tom Bakker',
    role: 'Product Manager',
    company: 'LogisticsPro',
    rating: 5,
    text: 'Snelle delivery, schone code en uitstekende support. Ze hebben ons geholpen van MVP naar volledige productie. Absoluut een aanrader voor serieuze projecten.',
    project: 'Logistics Platform',
  },
  {
    id: 6,
    name: 'Anna Smit',
    role: 'Director',
    company: 'EduTech Solutions',
    rating: 5,
    text: 'Ons leerplatform werkt vlekkeloos en schaalt moeiteloos. Het team is responsief en denkt in oplossingen. De kwaliteit van hun werk is consistent excellent.',
    project: 'Educational Platform',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
            Wat Klanten Zeggen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tevreden Klanten, Succesvolle Projecten
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ontdek waarom bedrijven voor TechWithYou kiezen en wat ze zeggen over onze samenwerking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg">
                <Quote className="text-white" size={20} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Project Tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '50+', label: 'Projecten Opgeleverd' },
            { number: '98%', label: 'Klanttevredenheid' },
            { number: '100%', label: 'Op Tijd Geleverd' },
            { number: '5+', label: 'Jaar Ervaring' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
