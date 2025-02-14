# leehindle.dev

My personal portfolio website showcasing modern web development expertise. Built with performance, accessibility, and user experience at its core.

## 🚀 Features

- **Modern Stack**: Next.js 14 App Router, TypeScript, and React Server Components
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Performance Optimized**: Server-side rendering and optimized assets
- **Interactive UI**: Smooth animations with Framer Motion
- **Real-time Monitoring**: Core Web Vitals tracking
- **Accessibility**: Semantic HTML and ARIA compliance
- **Type Safety**: Full TypeScript implementation
- **Automated Deployment**: CI/CD with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Deployment**: GitHub Actions, PM2
- **Server**: NGINX with SSL
- **Performance Monitoring**: Web Vitals

## 🏗️ Development

### Prerequisites

- Node.js 20.11.0 or higher
- npm or yarn
- Git

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/lhndl93/leehindle.dev.git
   cd leehindle.dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000`

## 🚀 Deployment

### GitHub Actions Deployment

The site automatically deploys to a VPS via GitHub Actions when changes are pushed to the main branch.

Required GitHub Secrets:
- `VPS_HOST`: Your VPS hostname
- `VPS_USERNAME`: SSH username
- `VPS_SSH_KEY`: SSH private key for authentication

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 📈 Performance

The site is optimized for Core Web Vitals:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

Real-time performance metrics are available on the project details page.

## 📝 Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Implement responsive design with mobile-first approach
- Optimize images and assets
- Write semantic HTML
- Follow accessibility guidelines
- Test cross-browser compatibility

## 🔒 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add any required environment variables here
NODE_ENV=development
```

## 📄 License

MIT

## 👤 Author

Lee Hindle
- Website: [leehindle.dev](https://leehindle.dev)
- GitHub: [@lhndl93](https://github.com/lhndl93)
- LinkedIn: [Lee Hindle](https://linkedin.com/in/leehindle)
