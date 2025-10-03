'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Initialize analytics if consent is given
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 md:flex items-center justify-between gap-6">
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="flex-shrink-0 p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                  <Cookie className="text-cyan-600 dark:text-cyan-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    🍪 Cookies & Privacy
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We gebruiken cookies om je ervaring te verbeteren en site statistieken bij te houden. 
                    Je gegevens worden niet gedeeld met derden.{' '}
                    <Link href="/privacy" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      Privacybeleid
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-sm font-medium"
                >
                  Alleen Noodzakelijk
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-semibold"
                >
                  Accepteer Alles
                </button>
              </div>

              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors md:hidden"
                aria-label="Close"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
