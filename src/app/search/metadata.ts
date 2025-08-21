import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | RTN Global",
  description: "Search across RTN Global's website for services, portfolio projects, knowledge base articles, resources, and more.",
  keywords: [
    "RTN Global search",
    "website search",
    "find services",
    "search knowledge base",
    "RTN Global resources",
    "search solutions"
  ],
  alternates: {
    canonical: "https://rtnglobal.site/search",
  },
  openGraph: {
    title: "Search RTN Global",
    description: "Find services, portfolio projects, knowledge base articles, and more with our comprehensive site search.",
    url: "https://rtnglobal.site/search",
    siteName: "RTN Global",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Search RTN Global",
    description: "Find services, portfolio projects, knowledge base articles, and more with our comprehensive site search.",
    creator: "@rtnglobalofficial",
    site: "@rtnglobalofficial"
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google03e42604abdd544c",
    other: {
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
      'ms-verify': '9f21e93909e646e0a2f3218d1afeb53c',
    }
  },
  other: {
    'contact:email': 'info@rtnglobal.site',
    'contact:phone': '+1 (505) 528 0265',
    'contact:address': '1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM, 87110, US',
  }
}; 