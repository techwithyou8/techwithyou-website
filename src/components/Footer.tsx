'use client';

import { Heart, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Tech<span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">With</span>You
              </span>
            </div>
            <p className="text-sm mb-4">
              De toekomst van digitale oplossingen bouwen met geavanceerde technologie en innovatief design.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 rounded-lg transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 rounded-lg transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 rounded-lg transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Web Applicaties</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Mobiele Apps</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">E-commerce</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Maatwerk Software</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Cloud Oplossingen</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Bedrijf</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Over Ons</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Carrière</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-cyan-400" />
                <a href="mailto:info@techwithyou.com" className="hover:text-cyan-400 transition-colors">
                  info@techwithyou.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 text-cyan-400" />
                <a href="tel:+31605815800" className="hover:text-cyan-400 transition-colors">
                  +31 6 058 158
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-cyan-400" />
                <span>Amsterdam, Netherlands</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {currentYear} TechWithYou. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            Gemaakt met <Heart size={16} className="text-red-500 animate-pulse" /> door TechWithYou
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacybeleid</a>
            <a href="/algemene-voorwaarden" className="hover:text-cyan-400 transition-colors">Algemene Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
