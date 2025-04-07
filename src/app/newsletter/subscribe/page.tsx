import NewsletterForm from '@/components/forms/newsletter-form';
import { Mail, Bell, Award } from 'lucide-react';

export default function NewsletterSubscribePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Subscribe to Our Newsletter</h1>
              <p className="mt-4 text-muted-foreground">
                Stay up-to-date with the latest industry trends, insights, and exclusive content delivered straight to your inbox.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden p-6 mb-12">
              <NewsletterForm 
                variant="full" 
                title="Join Our Newsletter Community"
                description="Get weekly updates on digital trends, case studies, and actionable tips to grow your business online."
              />
            </div>
            
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-6 text-center">What You&apos;ll Receive</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-6 border border-border rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Weekly Insights</h3>
                  <p className="text-sm text-muted-foreground">Expert analysis and commentary on the latest trends in digital technology.</p>
                </div>
                
                <div className="p-6 border border-border rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Exclusive Updates</h3>
                  <p className="text-sm text-muted-foreground">Be the first to know about new services, features, and company announcements.</p>
                </div>
                
                <div className="p-6 border border-border rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Special Offers</h3>
                  <p className="text-sm text-muted-foreground">Subscriber-only discounts, early access to new products, and special promotions.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                We respect your privacy. Unsubscribe at any time. 
                View our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 