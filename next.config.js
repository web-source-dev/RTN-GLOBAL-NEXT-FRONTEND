/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    domains: ['rtnglobal.site', 'localhost','backend.mydomain.local'],
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
  
  // Optimize build performance
  swcMinify: true,
  
  // Optimize script loading
  experimental: {
    optimizeCss: true, // Minimize CSS
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
}

module.exports = nextConfig 