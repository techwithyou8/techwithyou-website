import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog - Insights & Updates | TechWithYou',
  description: 'Lees onze laatste artikelen over web development, technologie trends, en beste praktijken in software ontwikkeling.',
  alternates: {
    canonical: '/blog',
  },
};

// Placeholder blog posts - replace with real data from CMS or markdown files
const blogPosts = [
  {
    slug: 'next-js-15-features',
    title: 'Next.js 15: Nieuwe Features en Verbeteringen',
    excerpt: 'Ontdek de nieuwste features van Next.js 15 en hoe deze je development workflow kunnen verbeteren.',
    date: '2025-01-15',
    category: 'Development',
    readTime: '5 min',
    image: '/blog/nextjs.jpg',
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices voor 2025',
    excerpt: 'Belangrijke tips en tricks om je TypeScript code schoner en efficiënter te maken.',
    date: '2025-01-10',
    category: 'Tutorial',
    readTime: '8 min',
    image: '/blog/typescript.jpg',
  },
  {
    slug: 'web-performance-optimization',
    title: 'Web Performance Optimization: Complete Gids',
    excerpt: 'Leer hoe je je website snelheid kunt verbeteren met praktische technieken en tools.',
    date: '2025-01-05',
    category: 'Performance',
    readTime: '10 min',
    image: '/blog/performance.jpg',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials en updates over moderne web development en technologie.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Coming Soon Notice */}
          <div className="mb-12 p-8 bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 rounded-2xl text-center">
            <div className="text-4xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Blog Coming Soon!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We zijn hard bezig met het ontwikkelen van onze blog sectie. 
              Binnenkort vind je hier waardevolle artikelen over web development en technologie.
            </p>
          </div>

          {/* Preview Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 opacity-60 cursor-not-allowed"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-6xl">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.readTime} read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('nl-NL', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 p-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              📬 Blijf Op De Hoogte
            </h3>
            <p className="mb-6 opacity-90">
              Schrijf je in voor onze nieuwsbrief en ontvang de nieuwste artikelen direct in je inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="jouw@email.nl"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                disabled
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Binnenkort
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
