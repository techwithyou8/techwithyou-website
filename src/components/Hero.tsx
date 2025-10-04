'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Direct dynamic import of ThreeJS background with immediate loading
const ThreeJSBackground = dynamic(() => import('./ThreeJSBackground'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#070c14]">
      {/* Enhanced CSS Grid Fallback */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px),
            linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 16px 16px, 16px 16px',
          transform: 'perspective(1000px) rotateX(-38deg) translateY(-80px)',
          transformOrigin: 'center center',
          animation: 'gridFloat 8s ease-in-out infinite alternate'
        }}
      />
    </div>
  )
});

export default function Hero() {
  const [showThreeJS, setShowThreeJS] = useState(false);

  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (gl) {
      // Load ThreeJS immediately if WebGL is supported
      const timer = setTimeout(() => {
        setShowThreeJS(true);
      }, 50); // Very quick load for hero section
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-20">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {showThreeJS ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <ThreeJSBackground 
                amplitude={35}
                speed={0.8}
                majorGap={80}
                minorGap={16}
                lineColorMajor="rgba(34,211,238,0.15)"
                lineColorMinor="rgba(59,130,246,0.08)"
                enableNoise={true}
              />
            </motion.div>
          ) : (
            <div className="absolute inset-0 bg-[#070c14] hero-grid-fallback" />
          )}
        </motion.div>
      </div>
      
      {/* Enhanced Gradient Overlays for 3D Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/8 via-transparent to-purple-500/8 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950/60 pointer-events-none" />
      
      {/* 3D Depth Enhancement */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.1),transparent_50%)] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 text-cyan-400 text-sm font-medium relative preserve-3d"
            whileHover={{
              rotateX: 10,
              rotateY: 8,
              scale: 1.05,
              z: 15
            }}
            animate={{
              rotateY: [0, 1, 0, -1, 0]
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-cyan-400 drop-shadow-lg" />
            </motion.div>
            <span className="relative z-10">De Toekomst van Digitale Oplossingen Bouwen</span>
            {/* 3D Badge Depth */}
            <div className="absolute inset-0 bg-cyan-500/5 rounded-full border border-cyan-500/10 logo-depth-1"></div>
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-tight relative preserve-3d"
          whileHover={{
            rotateX: 5,
            rotateY: 3,
            scale: 1.02,
            z: 20
          }}
        >
          <motion.span 
            className="text-white relative inline-block"
            whileHover={{ rotateY: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Tech
            <span className="absolute inset-0 text-white/20 text-shadow-3d">Tech</span>
          </motion.span>
          <motion.span 
            className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent relative inline-block font-extrabold"
            whileHover={{ 
              rotateY: -10, 
              scale: 1.1,
              textShadow: "0 0 20px rgba(6, 182, 212, 0.8)"
            }}
            transition={{ duration: 0.3 }}
          >
            With
          </motion.span>
          <motion.span 
            className="text-white relative inline-block"
            whileHover={{ rotateY: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            You
            <span className="absolute inset-0 text-white/20 text-shadow-3d">You</span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-white mb-6 max-w-4xl mx-auto leading-relaxed relative preserve-3d"
          whileHover={{
            rotateX: 3,
            scale: 1.01,
            z: 10
          }}
        >
          <span className="relative z-10">
            We Transformeren Jouw Ideeën naar{' '}
            <motion.span 
              className="text-cyan-400 font-semibold relative inline-block"
              whileHover={{ 
                rotateY: 5, 
                scale: 1.05,
                textShadow: "0 0 15px rgba(6, 182, 212, 0.8)"
              }}
            >
              Innovatieve Web Apps
            </motion.span>,{' '}
            <motion.span 
              className="text-blue-400 font-semibold relative inline-block"
              whileHover={{ 
                rotateY: -5, 
                scale: 1.05,
                textShadow: "0 0 15px rgba(59, 130, 246, 0.8)"
              }}
            >
              Mobiele Oplossingen
            </motion.span> &{' '}
            <motion.span 
              className="text-cyan-300 font-semibold relative inline-block"
              whileHover={{ 
                rotateY: 5, 
                scale: 1.05,
                textShadow: "0 0 15px rgba(103, 232, 249, 0.8)"
              }}
            >
              E-commerce Platforms
            </motion.span>
          </span>

        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed relative preserve-3d"
          whileHover={{
            rotateX: 2,
            scale: 1.01,
            z: 8
          }}
        >
          <span className="relative z-10">
            Premium digitale oplossingen voor vooruitstrevende ondernemingen. Van conceptvalidatie tot enterprise-applicaties,
            wij realiseren jouw ambitie met geavanceerde technologie en vakmanschap.
          </span>
          {/* 3D Text Shadow */}
          <span className="absolute inset-0 text-white/10 text-shadow-3d">
            Premium digitale oplossingen voor vooruitstrevende ondernemingen. Van conceptvalidatie tot enterprise-applicaties,
            wij realiseren jouw ambitie met geavanceerde technologie en vakmanschap.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact">
            <motion.div
              className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold text-base hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 preserve-3d cursor-pointer"
              whileHover={{
                rotateX: 15,
                rotateY: 8,
                scale: 1.08,
                z: 25
              }}
              whileTap={{
                scale: 0.95,
                rotateX: 25
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Jouw Project
                <motion.div
                  whileHover={{ x: 5, rotateZ: 15 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </span>
              {/* 3D Button Depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl logo-depth-1"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-800 rounded-xl logo-depth-2"></div>
            </motion.div>
          </Link>
          <Link href="/diensten">
            <motion.div
              className="px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 relative preserve-3d cursor-pointer"
              whileHover={{
                rotateX: 10,
                rotateY: -5,
                scale: 1.05,
                z: 15
              }}
              whileTap={{
                scale: 0.95
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Bekijk Onze Diensten
                <motion.div
                  whileHover={{ x: 3, opacity: 1 }}
                  className="opacity-70"
                >
                  <ArrowRight size={18} />
                </motion.div>
              </span>
              {/* 3D Button Depth */}
              <div className="absolute inset-0 bg-white/3 border border-white/5 rounded-xl logo-depth-1"></div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: '75+', label: 'Projecten Succesvol Opgeleverd' },
            { number: '99%', label: 'Klanttevredenheid Score' },
            { number: '24/7', label: 'Premium Support' },
            { number: '8+', label: 'Jaar Vakervaring' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.08,
                rotateX: 10,
                rotateY: 5,
                z: 20
              }}
              animate={{
                rotateY: [0, 2, 0, -2, 0]
              }}
              transition={{ duration: 0.3 }}
              className="text-center relative preserve-3d"
            >
              <motion.div 
                className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                whileHover={{
                  textShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
                  scale: 1.1
                }}
              >
                {stat.number}
              </motion.div>
              <motion.div 
                className="text-white text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {stat.label}
              </motion.div>
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
