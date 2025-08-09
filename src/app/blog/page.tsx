import { Metadata } from 'next';
import Link from 'next/link';

// This generates static metadata at build time
export const metadata: Metadata = {
  title: 'Blog - Next.js SSR Starter',
  description: 'Explore our blog posts demonstrating various Next.js features and patterns',
};

// Mock blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 15 App Router',
    excerpt: 'Learn how to build modern web applications with the new App Router architecture.',
    date: '2024-01-15',
    author: 'Next.js Team',
    tags: ['Next.js', 'React', 'Web Development'],
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Server Components vs Client Components',
    excerpt: 'Understanding the difference between Server and Client Components in React.',
    date: '2024-01-10',
    author: 'React Team',
    tags: ['React', 'Server Components', 'SSR'],
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Optimizing Performance with ISR',
    excerpt: 'How Incremental Static Regeneration can improve your app performance.',
    date: '2024-01-05',
    author: 'Performance Team',
    tags: ['Performance', 'ISR', 'Optimization'],
    readTime: '6 min read'
  },
];

// This page demonstrates ISR (Incremental Static Regeneration)
// Uncomment the line below to enable ISR with 60 second revalidation
// export const revalidate = 60;

export default async function Blog() {
  // Simulate server-side data fetching
  const fetchTime = new Date().toISOString();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-green-900">
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
              Blog Posts
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Insights and tutorials about modern web development
            </p>
          </header>

          {/* ISR Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🔄 Incremental Static Regeneration (ISR)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This page was last fetched at:
              <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded ml-2 font-mono">
                {fetchTime}
              </code>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With ISR enabled, this page would be statically generated and then regenerated 
              in the background when traffic comes in, providing both speed and fresh content.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      <Link 
                        href={`/blog/${post.id}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2">
              <button 
                disabled
                className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
              >
                Previous
              </button>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</span>
              <button 
                disabled
                className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
