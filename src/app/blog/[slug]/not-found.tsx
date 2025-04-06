import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

export default function BlogNotFound() {
  return (
    <Layout>
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
