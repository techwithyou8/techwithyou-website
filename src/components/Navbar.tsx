'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Cpu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDarkMode } from '@/hooks/useDarkMode';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Diensten', href: '/diensten' },
  { name: 'Technologie', href: '/technologie' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-xl font-bold perspective-1000">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 15,
                rotateX: 5
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="relative transform-gpu perspective-1000">
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center relative preserve-3d"
                  whileHover={{
                    rotateY: 25,
                    rotateX: 15,
                    scale: 1.1,
                    z: 15
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeOut"
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 10px 25px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.2)',
                  }}
                >
                  {/* 3D Layered Depth Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-lg logo-depth-1"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 to-blue-800 rounded-lg logo-depth-2"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-800 to-blue-900 rounded-lg logo-depth-3"></div>
                  
                  {/* Front Face */}
                  <motion.div
                    className="relative z-10 logo-front"
                    whileHover={{
                      rotateZ: 180,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Cpu className="text-white w-6 h-6 cpu-glow" />
                  </motion.div>

                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-lg border border-cyan-300/30 pointer-events-none logo-border"></div>
                </motion.div>
              </div>
              <motion.span 
                className="text-gray-900 dark:text-white tracking-tight"
                whileHover={{
                  rotateY: 5,
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Tech<span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent font-extrabold">With</span>You
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.div
                  className={`text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium transition-colors relative group perspective-1000 menu-3d cursor-pointer ${
                    pathname === link.href ? 'text-cyan-500 dark:text-cyan-400' : ''
                  }`}
                  whileHover={{
                    rotateX: 10,
                    rotateY: 5,
                    scale: 1.05,
                    z: 10
                  }}
                  animate={{
                    rotateY: [0, 1, 0, -1, 0]
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <motion.span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transition-all group-hover:w-full ${
                      pathname === link.href ? 'w-full' : 'w-0'
                    }`}
                    whileHover={{
                      scaleY: 2,
                      boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
                    }}
                  />
                  {/* 3D Text Shadow Effect */}
                  <span className="absolute inset-0 text-gray-700/30 dark:text-gray-300/30 text-shadow-3d">
                    {link.name}
                  </span>
                </motion.div>
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
            </button>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.div
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 relative preserve-3d cursor-pointer"
                whileHover={{
                  rotateX: 15,
                  rotateY: 10,
                  scale: 1.05,
                  z: 20
                }}
                whileTap={{
                  scale: 0.95,
                  rotateX: 25
                }}
                animate={{
                  rotateY: [0, 2, 0, -2, 0]
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Start Nu</span>
                {/* 3D Button Depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-full logo-depth-1"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-purple-800 rounded-full logo-depth-2"></div>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors ${
                    pathname === link.href ? 'bg-gray-100 dark:bg-gray-800 text-cyan-500 dark:text-cyan-400' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg text-center"
              >
                Start Nu
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
}
