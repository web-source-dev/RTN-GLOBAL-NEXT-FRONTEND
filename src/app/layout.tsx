import type { Metadata, Viewport } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./footer";
import ChatWidget from "@/components/support/ChatWidget";
import { Header } from "@/components/layout/header";
import { BreadcrumbContainer } from "@/components/layout/breadcrumb-container";
import { Providers } from "./providers";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

// Premium font configuration
const roboto = Roboto({ 
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rtnglobal.site'),
  title: {
    template: '%s | RTN Global',
    default: 'RTN Global - Web Development & Digital Marketing Agency',
  },
  description: "RTN Global is a leading web development and digital marketing agency. We create stunning websites, effective SEO strategies, and powerful digital marketing campaigns for businesses worldwide.",
  keywords: [
    "web development", 
    "digital marketing", 
    "SEO", 
    "social media marketing", 
    "web design", 
    "web agency",
    "ecommerce development",
    "mobile app development",
    "content marketing",
    "PPC advertising",
    "brand identity",
    "website maintenance"
  ],
  authors: [{ name: 'RTN Global Team' }],
  creator: 'RTN Global',
  publisher: 'RTN Global',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rtnglobal.site',
    siteName: 'RTN Global',
    title: 'RTN Global - Web Development & Digital Marketing Agency',
    description: 'RTN Global is a leading web development and digital marketing agency. We create stunning websites, effective SEO strategies, and powerful digital marketing campaigns for businesses worldwide.',
    images: [
      {
        url: 'https://rtnglobal.site/images/hero-img.png',
        width: 1200,
        height: 630,
        alt: 'RTN Global - Web Development & Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RTN Global - Web Development & Digital Marketing Agency',
    description: 'RTN Global is a leading web development and digital marketing agency. We create stunning websites, effective SEO strategies, and powerful digital marketing campaigns for businesses worldwide.',
    images: ['https://rtnglobal.site/images/hero-img.png'],
    creator: '@rtnglobalofficial',
    site: '@rtnglobalofficial',
  },
  alternates: {
    canonical: 'https://rtnglobal.site',
  },
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    yandex: 'your-yandex-verification-code', // Add if needed
    yahoo: 'your-yahoo-verification-code', // Add if needed
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
          href="/images/hero/home-hero1.jpg"
          as="image"
          type="image/png"
        />
        <link rel="dns-prefetch" href="https://rtnglobal.site" />
        <link rel="preconnect" href="https://rtnglobal.site" />
        <link rel="canonical" href="https://rtnglobal.site" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="RTN Global Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rtnglobal.site" />
        <meta property="og:site_name" content="RTN Global" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rtnglobalofficial" />
        <meta name="twitter:creator" content="@rtnglobalofficial" />
        
        <script async src='https://static.mywot.com/website_owners_badges/websiteOwnersBadge.js'></script>
        
        {/* Trustpilot Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
                  a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
                  f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
                  tp('register', 'x6BksEp48x1wgNc2');
            `
          }}
        />
        
        {/* JSON-LD Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RTN Global",
              "url": "https://rtnglobal.site/",
              "logo": "https://rtnglobal.site/icons/rtnglobal-logo.png",
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
                  "telephone": "+1 (505) 528 0265",
                  "email": "info@rtnglobal.site",
                  "availableLanguage": ["English"]
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "technical support",
                  "telephone": "+1 (505) 528 0265",
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
        
        {/* JSON-LD Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "RTN Global",
              "url": "https://rtnglobal.site/",
              "description": "RTN Global is a leading web development and digital marketing agency.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://rtnglobal.site/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${roboto.variable} ${poppins.variable} font-sans flex flex-col min-h-screen`}>
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
        <GoogleAnalytics />
      </body>
    </html>
  );
}
