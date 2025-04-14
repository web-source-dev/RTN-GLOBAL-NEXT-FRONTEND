import FreeConsultationForm from '@/components/forms/free-consultation-form';

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Free Consultation - RTN Global",
            "description": "Request a free consultation with RTN Global experts to discuss your project needs and goals.",
            "url": "https://rtnglobal.co/contact/free-consultation",
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
          })
        }}
      />
      <div className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Request a Free Consultation</h1>
              <p className="mt-4 text-muted-foreground">
                Our team of experts is ready to help you tackle your biggest challenges. 
                Fill out the form below, and we&apos;ll get back to you within 24 hours to schedule your free consultation.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
              <div className="p-1 md:p-2">
                <FreeConsultationForm />
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Why Get a Free Consultation?</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">Expert Insights</h3>
                  <p className="text-sm text-muted-foreground">Get professional feedback on your project from industry experts with years of experience.</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">Tailored Solutions</h3>
                  <p className="text-sm text-muted-foreground">Receive customized recommendations based on your specific business needs and goals.</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">Clear Direction</h3>
                  <p className="text-sm text-muted-foreground">Understand the best path forward with a clear roadmap and implementation strategy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 