# Next.js SSR Starter 🚀

A modern Next.js starter template featuring **Server-Side Rendering (SSR)**, TypeScript, and Tailwind CSS. Built with Next.js 15, React 19, and the latest web development best practices.

## ✨ Features

- **🎯 Next.js 15** - Latest version with App Router
- **⚡ Server-Side Rendering (SSR)** - Fast initial page loads and SEO optimization
- **📝 TypeScript** - Full type safety and excellent developer experience
- **🎨 Tailwind CSS v4** - Modern utility-first CSS framework
- **🏗️ App Router** - New routing system with layouts and nested routes
- **🔄 ISR Support** - Incremental Static Regeneration ready
- **📱 Responsive Design** - Mobile-first responsive layouts
- **🌙 Dark Mode Ready** - Built-in dark mode support
- **⚡ Turbopack** - Fast development builds
- **📊 SEO Optimized** - Meta tags, Open Graph, and structured data

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. **Clone or download this template**
   ```bash
   git clone <your-repo-url>
   cd next-nest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next-nest/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── about/             # Static about page (SSG)
│   │   ├── blog/              # Blog listing (ISR)
│   │   │   └── [id]/          # Dynamic blog posts (SSG)
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page (SSR)
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable React components
│   │   └── Navigation.tsx     # Navigation component
│   ├── lib/                   # Utility functions
│   │   └── utils.ts           # Helper utilities
│   └── types/                 # TypeScript type definitions
│       └── blog.ts            # Blog-related types
├── public/                    # Static assets
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎯 Rendering Strategies Demonstrated

### 1. Server-Side Rendering (SSR)
- **Page**: Home (`/`)
- **Use case**: Dynamic content that needs to be fresh on every request
- **Benefits**: SEO, fresh data, fast perceived loading

### 2. Static Site Generation (SSG)
- **Page**: About (`/about`)
- **Use case**: Content that doesn't change frequently
- **Benefits**: Fastest loading, great for SEO, CDN-friendly

### 3. Dynamic Routes with SSG
- **Page**: Blog posts (`/blog/[id]`)
- **Use case**: Dynamic pages that can be pre-generated
- **Benefits**: Fast loading for known routes, SEO benefits

### 4. Incremental Static Regeneration (ISR)
- **Page**: Blog listing (`/blog`)
- **Use case**: Static pages that need periodic updates
- **Benefits**: Static performance with dynamic content updates

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🎨 Styling

This template uses **Tailwind CSS v4** with PostCSS for styling:

- **Utility-first approach** - Compose designs using utility classes
- **Responsive design** - Mobile-first breakpoints
- **Dark mode support** - Built-in dark mode utilities
- **Custom theme** - Easily customizable design system

### Customization

Edit `tailwind.config.js` to customize:
- Colors and typography
- Spacing and sizing
- Breakpoints
- Custom utilities

## 📦 Key Dependencies

### Production Dependencies
- **next**: React framework with SSR/SSG
- **react**: UI library
- **react-dom**: React DOM renderer
- **clsx**: Conditional className utility
- **tailwind-merge**: Tailwind CSS class merging

### Development Dependencies
- **typescript**: Type safety
- **@types/***: TypeScript definitions
- **eslint**: Code linting
- **tailwindcss**: CSS framework
- **@tailwindcss/postcss**: Tailwind PostCSS plugin

## 🔧 Configuration

### Next.js Configuration (`next.config.ts`)
- App Router enabled
- Image optimization
- Security headers
- SWC minification

### TypeScript Configuration (`tsconfig.json`)
- Strict mode enabled
- Path aliases configured (`@/`)
- Modern module resolution

### Tailwind Configuration (`tailwind.config.js`)
- Content paths configured
- Custom theme extensions
- Dark mode support

## 📈 Performance Features

- **Server Components** - Reduced client-side JavaScript
- **Image Optimization** - Automatic WebP/AVIF conversion
- **Code Splitting** - Automatic route-based splitting
- **Turbopack** - Fast development builds
- **SWC Minification** - Fast production builds

## 🌐 SEO Features

- **Meta tags** - Comprehensive meta tag support
- **Open Graph** - Social media sharing optimization
- **Structured data** - JSON-LD for search engines
- **Sitemap ready** - Easy sitemap generation
- **Robot.txt ready** - Search engine crawling control

## 🚀 Deployment

This template is ready to deploy to:

### Vercel (Recommended)
```bash
npx vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) - Amazing React framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

**Happy coding!** 🎉

For questions or support, please open an issue in the repository.