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
  images: {
    domains: ["backend.mydomain.local", "localhost"],
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
