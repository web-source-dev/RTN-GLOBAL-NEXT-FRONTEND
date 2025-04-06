import { Layout } from "@/components/layout/layout"
import { HeroSection } from "@/components/sections/hero-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { Check, Calendar, MessageCircle, Clock, BarChart, Zap, HelpCircle } from "lucide-react"

export default function PricingPage() {
  // Pricing plans
  const pricingPlans = [
    {
      name: "Basic",
      price: "$999",
      priceDetail: "/one-time",
      description: "Perfect for small businesses just getting started with their online presence.",
      features: [
        { text: "Responsive Website (5 pages)", included: true },
        { text: "Custom Domain Setup", included: true },
        { text: "Basic SEO Optimization", included: true },
        { text: "Contact Form Integration", included: true },
        { text: "1 Month Maintenance", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Advanced Analytics", included: false },
        { text: "E-commerce Functionality", included: false },
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
    },
    {
      name: "Professional",
      price: "$2,499",
      priceDetail: "/one-time",
      description: "Ideal for growing businesses looking to establish a strong online presence.",
      features: [
        { text: "Responsive Website (up to 10 pages)", included: true },
        { text: "Custom Domain Setup", included: true },
        { text: "Advanced SEO Optimization", included: true },
        { text: "Contact Form Integration", included: true },
        { text: "3 Months Maintenance", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "E-commerce Functionality", included: false },
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "$4,999",
      priceDetail: "/one-time",
      description: "Comprehensive solution for established businesses with complex requirements.",
      features: [
        { text: "Responsive Website (up to 20 pages)", included: true },
        { text: "Custom Domain Setup", included: true },
        { text: "Advanced SEO Optimization", included: true },
        { text: "Contact Form Integration", included: true },
        { text: "6 Months Maintenance", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "E-commerce Functionality", included: true },
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
    }
  ]

  // Features for why choose us section
  const features = [
    {
      icon: Calendar,
      title: "On-time Delivery",
      description: "We understand the importance of timelines and ensure your project is delivered as promised.",
    },
    {
      icon: Check,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing to ensure the highest quality deliverables.",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "We maintain transparent communication throughout the development process.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our support team is available around the clock to address any issues or concerns.",
    },
    {
      icon: BarChart,
      title: "Performance Focused",
      description: "We build websites that load quickly and perform well across all devices.",
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      description: "Our solutions are designed to grow with your business and adapt to changing needs.",
    }
  ]

  // Testimonials
  const testimonials = [
    {
      content: "Working with RTN Global was a game-changer for our business. Their professional team delivered a website that exceeded our expectations and helped us increase our online sales by 40%.",
      author: "Sarah Thompson",
      role: "CEO",
      company: "Envision Retail"
    },
    {
      content: "The team at RTN Global really understood our requirements and delivered a website that perfectly represents our brand. Their ongoing support has been exceptional.",
      author: "Michael Rodriguez",
      role: "Marketing Director",
      company: "TechInnov"
    },
    {
      content: "We chose RTN Global for our website redesign, and it was the best decision we made. The process was smooth, communication was clear, and the result was outstanding.",
      author: "Jennifer Lee",
      role: "Operations Manager",
      company: "HealthPlus"
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Simple, Transparent Pricing"
        description="Choose the perfect plan to meet your business needs. No hidden fees or surprise charges."
      />

      {/* Pricing Section */}
      <PricingSection
        plans={pricingPlans}
        description="Our pricing is designed to provide maximum value at each tier. All plans include a free consultation to understand your specific needs."
      />

      {/* Features Section */}
      <FeaturesSection
        title="Why Choose RTN Global"
        description="We are committed to delivering exceptional value and service with every project."
        features={features}
        backgroundClassName="bg-muted/30"
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={testimonials}
        description="Don't just take our word for it. Here's what our clients have to say about working with us."
      />

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about our services and pricing.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold">Do you offer custom pricing for specific requirements?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Yes, we understand that every business has unique needs. Contact us for a custom quote tailored to your specific requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold">What is included in the maintenance period?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Maintenance includes regular updates, security patches, bug fixes, and minor content updates. It ensures your website remains secure and functions smoothly.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold">How long does it take to complete a website?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Project timelines vary depending on complexity. A basic website typically takes 2-4 weeks, while more complex projects may take 8-12 weeks. We&apos;ll provide a detailed timeline during our initial consultation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold">Do you offer ongoing support after the maintenance period?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Yes, we offer ongoing maintenance and support packages that can be purchased separately after the included maintenance period ends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today for a free consultation and let's discuss how we can help your business succeed online."
        primaryButton={{
          text: "Contact Us",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Learn More",
          href: "/services"
        }}
        backgroundClassName="bg-primary"
        textColorClassName="text-primary-foreground"
      />
    </Layout>
  )
} 