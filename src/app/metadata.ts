import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RTN Global | Professional Web Development & Digital Marketing Solutions',
  description: 'RTN Global delivers exceptional web development and strategic digital marketing solutions including Wix, MERN stack, and React Native applications. Transform your digital presence today.',
  keywords: 'web development, digital marketing, Wix development, MERN stack, React Native, SEO optimization, content marketing, mobile apps, professional websites, Albuquerque,web development, digital marketing, Wix development, MERN stack development, React Native development, SEO optimization, content marketing, mobile app development, professional websites, website design Albuquerque, SEO services Albuquerque, custom web development, responsive web design, e-commerce development, local SEO, website maintenance, on-page SEO, off-page SEO, Albuquerque web agency, full-stack development, user-friendly websites, fast-loading websites, branding services, website redesign, technical SEO, Albuquerque digital marketing, performance optimization, WordPress development, mobile-optimized websites, UI/UX design, conversion optimization, Albuquerque SEO experts, scalable web solutions, targeted content strategy, app development Albuquerque, online visibility, lead generation, custom website solutions, cross-platform mobile apps, digital growth strategies, search engine rankings, mobile-first websites',
  robots: 'index, follow',
  metadataBase: new URL('https://rtnglobal.site'),
  openGraph: {
    title: 'RTN Global | Professional Web Development & Digital Marketing Solutions',
    description: 'Transform your digital presence with our custom web solutions and strategic digital marketing services. Based in Albuquerque, serving clients worldwide.',
    type: 'website',
    url: 'https://rtnglobal.site',
    siteName: 'RTN Global',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Web Development and Digital Marketing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RTN Global | Professional Web Development & Digital Marketing',
    description: 'Transform your digital presence with our custom web solutions and strategic digital marketing services. Based in Albuquerque, serving clients worldwide.',
    images: ['/images/og/home-og.jpg'],
    creator: '@rtnglobal'
  },
  alternates: {
    canonical: 'https://rtnglobal.site',
  },
  authors: [{ name: 'RTN Global Team', url: 'https://rtnglobal.site/about' }],
  creator: 'RTN Global',
  publisher: 'RTN Global',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code when available
  },
  other: {
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (555) 123-4567',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM',
    'og:region': 'New Mexico',
    'og:country-name': 'USA',
  }
} 