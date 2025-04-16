import type { NextConfig } from "next";
import { InjectManifest } from "workbox-webpack-plugin";
import path from "path";

// Only used in production
const withPWA = (nextConfig: NextConfig): NextConfig => {
  return {
    ...nextConfig,
    webpack(config, { dev, isServer }) {
      // Only generate service worker in production and only for the client build
      if (!dev && !isServer) {
        // Add workbox webpack plugin
        config.plugins.push(
          new InjectManifest({
            swSrc: path.resolve(__dirname, "public/service-worker.js"),
            swDest: path.resolve(__dirname, ".next/static/service-worker.js"),
            exclude: [/\.map$/, /asset-manifest\.json$/],
          })
        );
      }

      return config;
    },
  };
};

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    domains: ['rtnglobal.co', 'localhost', 'backend.mydomain.local'],
    // Configure image formats used for optimization
    formats: ['image/avif', 'image/webp'],
    // Configure device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Configure image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images in the browser
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },
  
  // Configure content security policy
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Optimize bundle size
  compiler: {
    // Remove console.* calls in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize script loading
  experimental: {
    optimizeCss: true, // Minimize CSS
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Add a rewrites rule to serve the service worker from the root
  async rewrites() {
    return [
      {
        source: "/service-worker.js",
        destination: "/_next/static/service-worker.js",
      },
    ];
  },
  
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

// Use the PWA wrapper only in production
export default process.env.NODE_ENV === "production" 
  ? withPWA(nextConfig) 
  : nextConfig;
