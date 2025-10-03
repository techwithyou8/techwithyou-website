import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobiele App Ontwikkeling - iOS & Android | TechWithYou',
  description: 'Native en cross-platform mobiele app ontwikkeling met React Native en Flutter. iOS en Android apps die gebruikers verassen.',
  keywords: ['mobiele app', 'ios development', 'android development', 'react native', 'flutter', 'app development'],
  openGraph: {
    title: 'Mobiele App Ontwikkeling - Native & Cross-Platform',
    description: 'Bouw krachtige mobiele apps voor iOS en Android',
    type: 'website',
  },
  alternates: {
    canonical: '/diensten/mobiele-apps',
  },
};

export default function MobieleAppsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20">
            <Smartphone className="text-purple-400" size={24} />
            <span className="text-purple-400 font-semibold">Mobiele Apps</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Mobiele Apps</span>
            <br />Die Echt Gebruikt Worden
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Van native iOS/Android tot cross-platform oplossingen - wij bouwen apps die gebruikers dagelijks gebruiken.
            React Native, Flutter en native development expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group px-8 py-3.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Bespreek Je App Idee
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#features"
              className="px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Bekijk Mogelijkheden
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Wat Wij Bouwen
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Van consumer apps tot enterprise oplossingen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📱',
                title: 'Native iOS Apps',
                description: 'Pure Swift/SwiftUI apps met alle native features voor de beste iOS ervaring.',
                features: ['SwiftUI', 'Core Data', 'HealthKit', 'App Store ready']
              },
              {
                icon: '🤖',
                title: 'Native Android Apps',
                description: 'Kotlin apps die perfect werken op alle Android devices.',
                features: ['Jetpack Compose', 'Material Design', 'Google Play', 'Performance']
              },
              {
                icon: '🔄',
                title: 'Cross-Platform Apps',
                description: 'React Native of Flutter voor één codebase op beide platforms.',
                features: ['React Native', 'Flutter', 'Shared code', 'Snelle development']
              },
              {
                icon: '💼',
                title: 'Enterprise Apps',
                description: 'Zakelijke apps met MDM, security en offline functionaliteit.',
                features: ['MDM support', 'Enterprise SSO', 'Offline mode', 'Data sync']
              },
              {
                icon: '🎮',
                title: 'Gaming & Entertainment',
                description: 'Interactieve apps en casual games met hoge performance.',
                features: ['Unity/Unreal', '2D/3D graphics', 'Multiplayer', 'In-app purchases']
              },
              {
                icon: '📊',
                title: 'Business Apps',
                description: 'Productiviteits-apps, CRM, ERP en custom business tools.',
                features: ['Dashboard', 'Reports', 'Integrations', 'Cloud sync']
              }
            ].map((item, index) => (
              <div key={index} className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-purple-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Technologieën
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              De beste tools voor elke app
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cross-Platform',
                gradient: 'from-purple-500 to-pink-600',
                techs: ['React Native', 'Flutter', 'Expo', 'TypeScript']
              },
              {
                title: 'Native iOS',
                gradient: 'from-blue-500 to-cyan-600',
                techs: ['Swift', 'SwiftUI', 'Xcode', 'TestFlight']
              },
              {
                title: 'Native Android',
                gradient: 'from-green-500 to-teal-600',
                techs: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase']
              }
            ].map((stack, i) => (
              <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-2xl">
                <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${stack.gradient} text-white font-semibold mb-4`}>
                  {stack.title}
                </div>
                <ul className="space-y-3">
                  {stack.techs.map((tech, j) => (
                    <li key={j} className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-purple-500 mr-2" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Standaard Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              In elke app die we bouwen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔔', title: 'Push Notificaties', desc: 'Real-time messaging' },
              { icon: '📴', title: 'Offline Mode', desc: 'Werkt zonder internet' },
              { icon: '🔐', title: 'Authenticatie', desc: 'OAuth, Biometric, SSO' },
              { icon: '☁️', title: 'Cloud Sync', desc: 'Real-time data sync' },
              { icon: '📊', title: 'Analytics', desc: 'User behavior tracking' },
              { icon: '💳', title: 'In-App Payments', desc: 'Stripe, Apple Pay, Google Pay' },
              { icon: '🌍', title: 'Localisatie', desc: 'Multi-language support' },
              { icon: '📱', title: 'Deep Linking', desc: 'Smart app routing' }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Klaar Voor Jouw App?</h2>
          <p className="text-xl mb-8 opacity-90">
            Van idee tot App Store. Neem contact op voor een gratis consultatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Jouw App Project
            </a>
            <a
              href="/portfolio"
              className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              Bekijk Onze Apps
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}