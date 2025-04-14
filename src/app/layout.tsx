import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./footer";
import ChatWidget from "@/components/support/ChatWidget";
import { Header } from "@/components/layout/header";
import { BreadcrumbContainer } from "@/components/layout/breadcrumb-container";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | RTN Global',
    default: 'RTN Global - Web Development & Digital Marketing Agency',
  },
  description: "We create stunning websites and effective digital marketing strategies for businesses of all sizes.",
  keywords: ["web development", "digital marketing", "SEO", "social media marketing", "web design", "web agency"],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "RTN Global",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    date: true,
    url: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="application-name" content="RTN Global" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RTN Global" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/images/hero-img.png"
          as="image"
          type="image/png"
        />
        <link rel="dns-prefetch" href="https://rtnglobal.site" />
        <script async src='https://static.mywot.com/website_owners_badges/websiteOwnersBadge.js'></script>
        
        {/* JSON-LD Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RTN Global",
              "url": "https://rtnglobal.co/",
              "logo": "https://rtnglobal.co/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Muhammad Tayyab"
              },
              "description": "RTN Global is a leading web development and digital marketing agency creating stunning websites and effective marketing strategies for businesses.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1209 MOUNTAIN ROAD PLNE, STE R",
                "addressLocality": "ALBUQUERQUE",
                "addressRegion": "NM",
                "postalCode": "87110",
                "addressCountry": "US"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "telephone": "+1 505 528 6780",
                  "email": "info@rtnglobal.site",
                  "availableLanguage": ["English"]
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "technical support",
                  "telephone": "+1 505 528 6780",
                  "email": "support@rtnglobal.site",
                  "availableLanguage": ["English"]
                }
              ],
              "sameAs": [
                "https://www.instagram.com/rtnglobalofficial/",
                "https://www.threads.net/@rtnglobalofficial",
                "https://www.tiktok.com/@rtnglobalofficial",
                "https://web.facebook.com/people/RTN-Global/61573828870610/",
                "https://www.youtube.com/@RTNGlobal",
                "https://www.linkedin.com/in/rtnglobalofficial/"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Providers>
          <Header />
          <div className="pt-5 md:pt-20">
            <BreadcrumbContainer />
            <main className="flex-1">
              {children}
            </main>
          </div>
          <Footer />
          <Toaster />
          <ChatWidget />
        </Providers>
      </body>
    </html>
  );
}
