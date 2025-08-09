import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 15 App Router',
    excerpt: 'Learn how to build modern web applications with the new App Router architecture.',
    content: `
      <p>Next.js 15 introduces significant improvements to the App Router, making it easier than ever to build performant web applications with React.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Server Components by default:</strong> Improved performance with automatic optimization</li>
        <li><strong>Nested layouts:</strong> Create complex layouts with ease</li>
        <li><strong>Loading and error boundaries:</strong> Better user experience with built-in loading states</li>
        <li><strong>Streaming:</strong> Progressive loading of page content</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 15 application with the App Router:</p>
      <pre><code>npx create-next-app@latest my-app --app</code></pre>
      
      <p>This will set up a new project with the App Router enabled by default.</p>
      
      <h2>Server vs Client Components</h2>
      <p>One of the most important concepts in Next.js 15 is understanding when to use Server Components vs Client Components:</p>
      <ul>
        <li><strong>Server Components:</strong> Rendered on the server, great for data fetching and SEO</li>
        <li><strong>Client Components:</strong> Rendered in the browser, needed for interactivity</li>
      </ul>
    `,
    date: '2024-01-15',
    author: 'Next.js Team',
    tags: ['Next.js', 'React', 'Web Development'],
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Server Components vs Client Components',
    excerpt: 'Understanding the difference between Server and Client Components in React.',
    content: `
      <p>React Server Components represent a fundamental shift in how we think about React applications, especially in the context of Next.js.</p>
      
      <h2>What are Server Components?</h2>
      <p>Server Components are React components that render on the server. They have several key characteristics:</p>
      <ul>
        <li>They run during build time or request time on the server</li>
        <li>They can directly access server-side resources like databases</li>
        <li>They don't include client-side JavaScript in the bundle</li>
        <li>They can't use browser-only APIs or event handlers</li>
      </ul>
      
      <h2>Client Components</h2>
      <p>Client Components are the traditional React components we're familiar with:</p>
      <ul>
        <li>They render in the browser</li>
        <li>They can use hooks, event handlers, and browser APIs</li>
        <li>They're needed for interactive features</li>
        <li>They include JavaScript in the client bundle</li>
      </ul>
      
      <h2>When to Use Each</h2>
      <p>Use Server Components for:</p>
      <ul>
        <li>Data fetching</li>
        <li>Accessing backend resources</li>
        <li>Large dependencies that should stay on the server</li>
        <li>Static content</li>
      </ul>
      
      <p>Use Client Components for:</p>
      <ul>
        <li>Interactive features</li>
        <li>Event handlers</li>
        <li>Browser-only APIs</li>
        <li>State management</li>
      </ul>
    `,
    date: '2024-01-10',
    author: 'React Team',
    tags: ['React', 'Server Components', 'SSR'],
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Optimizing Performance with ISR',
    excerpt: 'How Incremental Static Regeneration can improve your app performance.',
    content: `
      <p>Incremental Static Regeneration (ISR) is a powerful feature in Next.js that combines the benefits of static generation with the flexibility of server-side rendering.</p>
      
      <h2>What is ISR?</h2>
      <p>ISR allows you to create or update static pages after you've built your site. This means you can use static generation on a per-page basis, without needing to rebuild the entire site.</p>
      
      <h2>How it Works</h2>
      <ol>
        <li>A page is statically generated at build time</li>
        <li>When a request comes in, the cached version is served</li>
        <li>In the background, Next.js regenerates the page</li>
        <li>Once regeneration is complete, the cache is updated</li>
      </ol>
      
      <h2>Implementation</h2>
      <p>To enable ISR, export a <code>revalidate</code> value from your page:</p>
      <pre><code>export const revalidate = 60; // Revalidate every 60 seconds</code></pre>
      
      <h2>Benefits</h2>
      <ul>
        <li><strong>Fast loading:</strong> Pages are served from cache</li>
        <li><strong>Fresh content:</strong> Content is updated in the background</li>
        <li><strong>Scalability:</strong> No need to rebuild the entire site for updates</li>
        <li><strong>Resilience:</strong> Fallback to cached version if regeneration fails</li>
      </ul>
      
      <h2>Use Cases</h2>
      <p>ISR is perfect for:</p>
      <ul>
        <li>E-commerce product pages</li>
        <li>Blog posts</li>
        <li>Marketing landing pages</li>
        <li>Documentation sites</li>
      </ul>
    `,
    date: '2024-01-05',
    author: 'Performance Team',
    tags: ['Performance', 'ISR', 'Optimization'],
    readTime: '6 min read'
  },
];

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find(p => p.id.toString() === id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Next.js SSR Starter`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: post.tags,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id.toString() === id);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-orange-900">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          >
            ← Back to Blog
          </Link>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <footer className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  About the Author
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {post.author} - Passionate about web development and modern technologies.
                </p>
              </div>
              
              <div className="text-right">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read More Posts
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
