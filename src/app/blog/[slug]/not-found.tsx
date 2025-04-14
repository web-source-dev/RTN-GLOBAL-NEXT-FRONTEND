import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, Search } from "lucide-react"

export default function BlogNotFound() {
  return (
    <Layout>
      {/* JSON-LD Structured Data */}
      <Script id="blog-not-found-structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Blog Post Not Found - RTN Global",
            "description": "The requested blog post could not be found",
            "url": "https://rtnglobal.co/blog/not-found",
            "publisher": {
              "@type": "Organization",
              "name": "RTN Global",
              "url": "https://rtnglobal.co/",
              "logo": "https://rtnglobal.co/logo.png",
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
                "telephone": "+1 505 528 6780",
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
        <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          We couldn&apos;t find the blog post you&apos;re looking for. It may have been removed, 
          renamed, or it might not exist.
        </p>
        
        <div className="w-full max-w-md rounded-lg bg-card border border-border p-8 mb-8">
          <h2 className="text-lg font-medium mb-4">Search for another article</h2>
          <form 
            action="/blog" 
            className="relative"
          >
            <input
              type="search"
              name="q"
              placeholder="Search blog..."
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring pr-10"
            />
            <Button 
              type="submit" 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0"
            >
              <Search className="h-4 w-4 text-muted-foreground" />
            </Button>
          </form>
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
