import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources & Downloadable Content | RTN Global",
  description: "Access free resources, guides, templates, tools, and more to help with your digital projects. Download professional assets created by our expert team.",
  keywords: [
    "free digital resources",
    "web development templates",
    "marketing guides",
    "SEO tools",
    "UI/UX resources",
    "business templates",
    "free downloads",
    "digital marketing resources",
    "RTN Global resources"
  ],
  alternates: {
    canonical: "https://rtnglobal.site/resources",
  },
  openGraph: {
    title: "Free Digital Resources & Downloads | RTN Global",
    description: "Access professional guides, templates, checklists, and tools to enhance your digital projects and marketing efforts.",
    url: "https://rtnglobal.site/resources",
    siteName: "RTN Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rtnglobal.site/images/og/resources-og.jpg",
        width: 1200,
        height: 630,
        alt: "RTN Global Resources"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Digital Resources & Downloads | RTN Global",
    description: "Access professional guides, templates, checklists, and tools to enhance your digital projects and marketing efforts.",
    images: ["https://rtnglobal.site/images/og/resources-og.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  }
}; 