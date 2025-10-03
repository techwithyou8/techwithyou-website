'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-20">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 text-cyan-400 text-sm font-medium">
            <Sparkles size={16} className="text-cyan-400" />
            De Toekomst van Digitale Oplossingen Bouwen
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
        >
          <span className="text-white">Tech</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">With</span>
          <span className="text-white">You</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-6 max-w-4xl mx-auto leading-relaxed"
        >
          We Transformeren Ideeën naar{' '}
          <span className="text-cyan-400 font-medium">Krachtige Web Apps</span>,{' '}
          <span className="text-blue-400 font-medium">Mobiele Oplossingen</span> &{' '}
          <span className="text-cyan-300 font-medium">E-commerce Platforms</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Enterprise-grade oplossingen voor ambitieuze bedrijven. Van MVP&apos;s tot volledige applicaties,
          wij brengen jouw visie tot leven met de nieuwste technologie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/contact"
            className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold text-base hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Start Jouw Project
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <a
            href="/portfolio"
            className="px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
          >
            Bekijk Ons Werk
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: '50+', label: 'Projecten Opgeleverd' },
            { number: '98%', label: 'Klanttevredenheid' },
            { number: '24/7', label: 'Support Beschikbaar' },
            { number: '5+', label: 'Jaar Ervaring' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
