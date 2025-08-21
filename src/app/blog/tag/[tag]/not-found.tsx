import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, Tag } from "lucide-react"

export default function TagNotFound() {
  return (
    <Layout>
      {/* JSON-LD Structured Data */}
      <Script id="tag-not-found-structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Tag Not Found - RTN Global",
            "description": "The requested blog tag could not be found",
            "url": "https://rtnglobal.site/blog/tag/not-found",
            "publisher": {
              "@type": "Organization",
              "name": "RTN Global",
              "url": "https://rtnglobal.site/",
              "logo": "https://rtnglobal.site/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Muhammad Tayyab"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1209 MOUNTAIN ROAD PLNE, STE R",
                "addressLocality": "ALBUQUERQUE",
                "addressRegion": "NM",
                "postalCode": "87110",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "+1 (505) 528 0265",
                "email": "info@rtnglobal.site"
              },
              "sameAs": [
                "https://www.instagram.com/rtnglobalofficial/",
                "https://www.threads.net/@rtnglobalofficial",
                "https://www.tiktok.com/@rtnglobalofficial",
                "https://web.facebook.com/people/RTN-Global/61573828870610/",
                "https://www.youtube.com/@RTNGlobal",
                "https://www.linkedin.com/in/rtnglobalofficial/"
              ]
            }
          }
        `}
      </Script>

      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 flex flex-col items-center text-center">
        <Tag className="h-12 w-12 text-primary mb-6" />
        <h1 className="text-4xl font-bold mb-6">Tag Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          We couldn&apos;t find the tag you&apos;re looking for. It may have been removed, 
          renamed, or it might not exist.
        </p>
        
        <div className="w-full max-w-md rounded-lg bg-card border border-border p-8 mb-8">
          <h2 className="text-lg font-medium mb-4">Popular Tags</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {['Web Development', 'Marketing', 'SEO', 'Design', 'Technology'].map((tag) => (
              <Link key={tag} href={`/blog/tag/${encodeURIComponent(tag)}`}>
                <Button variant="outline" size="sm">
                  {tag}
                </Button>
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Or search for a specific topic
          </p>
        </div>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/blog">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Button>
          </Link>
          <Link href="/">
            <Button>Go to Homepage</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
} 