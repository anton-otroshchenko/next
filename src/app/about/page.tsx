import { Metadata } from 'next';
import Link from 'next/link';

// This generates static metadata at build time
export const metadata: Metadata = {
  title: 'About - Next.js SSR Starter',
  description: 'Learn about our Next.js starter template with SSR, TypeScript, and Tailwind CSS',
};

// This is a Server Component that will be statically generated
export default function About() {
  const buildTime = new Date().toISOString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          >
            ← Back to Home
          </Link>
        </nav>

        <main className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About This Starter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Understanding the architecture and features
            </p>
          </header>

          <div className="space-y-8">
            {/* Static Generation Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                📊 Static Site Generation (SSG)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This page was statically generated at build time:
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded ml-2 font-mono">
                  {buildTime}
                </code>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Static pages are pre-rendered at build time, providing the fastest possible loading times 
                and excellent SEO performance. They&apos;re perfect for content that doesn&apos;t change frequently.
              </p>
            </div>

            {/* Features */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                🛠️ Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Next.js 15 App Router
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Latest App Router with enhanced performance, nested layouts, and streaming
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    React 19
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Latest React with Server Components, Suspense, and improved hydration
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    TypeScript
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Full type safety with excellent developer experience and IntelliSense
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Tailwind CSS v4
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Modern utility-first CSS framework with PostCSS integration
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                🏗️ Project Architecture
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">src/app/</strong> - 
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      App Router directory with pages and layouts
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">src/components/</strong> - 
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      Reusable React components
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">src/lib/</strong> - 
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      Utility functions and shared logic
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">src/types/</strong> - 
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      TypeScript type definitions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                🚀 Getting Started
              </h2>
              <div className="space-y-3">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-sm">
                  npm install
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-sm">
                  npm run dev
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Open <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">http://localhost:3000</code> to view the application.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
