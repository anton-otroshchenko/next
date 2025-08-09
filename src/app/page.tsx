import Image from "next/image";
import Link from "next/link";

// This is a Server Component that demonstrates SSR
export default async function Home() {
  // Simulate server-side data fetching
  const serverTime = new Date().toISOString();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <Image
            className="mx-auto mb-6 dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={200}
            height={48}
            priority
          />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js SSR Starter
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A modern Next.js starter template with server-side rendering, TypeScript, and Tailwind CSS
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          {/* Server-side rendered content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ⚡ Server-Side Rendering Demo
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This page was rendered on the server at: 
              <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded ml-2 font-mono">
                {serverTime}
              </code>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              The timestamp above is generated on the server during build time or request time, 
              demonstrating Next.js SSR capabilities.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-blue-500 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Server-Side Rendering
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fast initial page loads with pre-rendered HTML content
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-blue-500 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                TypeScript Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full TypeScript support with type safety and IntelliSense
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-blue-500 text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Tailwind CSS
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📚 Explore Examples
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link 
                href="/about" 
                className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">About Page</h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Static page with SSG (Static Site Generation)
                </p>
              </Link>

              <Link 
                href="/blog" 
                className="block p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
              >
                <h3 className="font-semibold text-green-900 dark:text-green-100">Blog</h3>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Dynamic pages with ISR (Incremental Static Regeneration)
                </p>
              </Link>
            </div>
          </div>
        </main>

        <footer className="text-center mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            Built with ❤️ using Next.js 15, React 19, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}