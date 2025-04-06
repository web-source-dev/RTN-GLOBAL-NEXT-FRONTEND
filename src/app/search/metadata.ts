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
  },
  robots: {
    index: true,
    follow: true,
  }
}; 