import { Layout } from "@/components/layout/layout"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Palette, 
  Type, 
  FileText, 
  Image, 
  Layers, 
  PenTool, 
  Package, 
  Megaphone,
  Check,
  ArrowRight,
  Code
} from "lucide-react"

export default function BrandIdentityPage() {
  // Brand Identity Services 
  const brandServices = [
    {
      icon: PenTool,
      iconClassName: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      title: "Logo Design",
      description: "We create distinctive, memorable logos that embody your brand's values and resonate with your target audience."
    },
    {
      icon: Palette,
      iconClassName: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      title: "Color Systems",
      description: "Strategic color palettes that evoke the right emotions and provide versatility across all brand applications."
    },
    {
      icon: Type,
      iconClassName: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
      title: "Typography",
      description: "Carefully selected typefaces that enhance readability and reflect your brand's personality."
    },
    {
      icon: Image,
      iconClassName: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
      title: "Photography & Imagery",
      description: "Distinctive visual style and art direction for imagery that reinforces your brand narrative."
    },
    {
      icon: Layers,
      iconClassName: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
      title: "Brand System Design",
      description: "Comprehensive visual systems that ensure consistency across all touchpoints and applications."
    },
    {
      icon: FileText,
      iconClassName: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
      title: "Brand Guidelines",
      description: "Detailed documentation that ensures consistent application of your brand across all media and contexts."
    },
    {
      icon: Megaphone,
      iconClassName: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
      title: "Brand Voice & Messaging",
      description: "Development of a distinctive verbal identity, including tone of voice, messaging hierarchy, and key phrases."
    },
    {
      icon: Package,
      iconClassName: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
      title: "Packaging Design",
      description: "Strategic packaging solutions that extend your brand experience and stand out on physical shelves."
    }
  ];

  // Brand deliverables
  const brandDeliverables = [
    "Logo (primary, secondary, and icon variations)",
    "Brand color palette with color codes",
    "Typography system with font licensing",
    "Comprehensive brand guidelines",
    "Stationery design (business cards, letterhead)",
    "Digital assets (social media profiles, email signatures)",
    "Brand messaging framework",
    "Presentation and document templates"
  ];

  // Testimonials
  const testimonials = [
    {
      content: "RTN Global transformed our brand from forgettable to distinctive. Their strategic approach to brand identity helped us connect with our audience in a more meaningful way.",
      author: "Alexandra Peters",
      role: "Marketing Director",
      company: "InnoTech Solutions"
    },
    {
      content: "The team truly understood our vision and translated it into a visual identity that perfectly represents our values. The comprehensive brand guidelines have been invaluable for maintaining consistency.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "GreenPath Organic"
    },
    {
      content: "Our rebrand exceeded expectations. Not only did we get a beautiful visual system, but the strategic thinking behind it has helped us position ourselves more effectively in the market.",
      author: "Sarah Thompson",
      role: "Brand Manager",
      company: "Horizon Financial"
    }
  ];

  // FAQs
  const brandFaqs = [
    {
      question: "How much does a complete brand identity typically cost?",
      answer: "Brand identity projects typically range from $15,000 to $50,000+ depending on the scope, complexity, and deliverables required. Factors affecting cost include company size, number of applications needed, timeline, and market research requirements. We provide detailed quotes after an initial consultation."
    },
    {
      question: "How long does the brand identity process take?",
      answer: "A comprehensive brand identity project typically takes 8-12 weeks from kickoff to final deliverables. This timeline includes discovery, strategy development, creative concepting, refinement, and production of final assets and guidelines. More complex projects may require additional time."
    },
    {
      question: "Do you offer partial branding services or just complete packages?",
      answer: "We offer both comprehensive brand identity packages and individual branding services. While we recommend a holistic approach for new brands or rebrands, we can provide specific services like logo design, messaging development, or brand guidelines separately based on your needs."
    },
    {
      question: "How do you ensure our brand will be differentiated from competitors?",
      answer: "Our process begins with thorough market and competitor research to identify opportunities for differentiation. We analyze your competitive landscape, target audience needs, and your unique value proposition to create a brand identity that is authentic to your organization while standing out in the marketplace."
    },
    {
      question: "Will we own all the brand assets you create?",
      answer: "Yes, upon final payment, you receive full ownership of all custom brand assets we create. This includes logo files, custom typography (excluding licensed fonts), color systems, patterns, and all other unique elements developed during the project. We provide a comprehensive license agreement outlining usage rights."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Brand Identity Services"
        description="Create a distinctive, memorable brand that resonates with your audience and stands out in the marketplace."
        backgroundClassName="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"
      />
      
      {/* Brand Identity Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Build a Brand That Leaves a Lasting Impression</h2>
            <p className="text-lg text-muted-foreground">
              Your brand is more than just a logo or color scheme—it&apos;s the total experience people have with your company. 
              Our comprehensive brand identity services help you create a cohesive, authentic, and strategic brand that 
              resonates with your audience and drives business growth.
            </p>
          </div>
          
          {/* Brand Services */}
          <FeaturesSection
            features={brandServices}
            columns={4}
          />
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Branding Approach</h2>
                <p className="text-muted-foreground mb-8">
                  We believe effective brand identities are built on strategic foundations. Our research-driven
                  process ensures your brand isn&apos;t just visually appealing, but strategically aligned with
                  your business goals and audience needs.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Research & Strategy</h3>
                      <p className="text-muted-foreground">
                        We start by understanding your audience, competition, and market position to develop a 
                        strategic foundation for your brand.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Design & Expression</h3>
                      <p className="text-muted-foreground">
                        We create visual elements that express your brand&apos;s personality and values across all touchpoints.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">System & Guidelines</h3>
                      <p className="text-muted-foreground">
                        We develop comprehensive systems and documentation to ensure consistent application of your brand.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-600 dark:text-amber-400 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Implementation & Growth</h3>
                      <p className="text-muted-foreground">
                        We support the rollout of your new brand and provide strategies for its evolution over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">What You&apos;ll Receive</h3>
                  <ul className="space-y-3">
                    {brandDeliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="text-xl font-bold mb-4">Ready to Transform Your Brand?</h3>
                  <p className="mb-6">
                    Let&apos;s discuss how we can help you create a brand identity that resonates with your audience and drives business growth.
                  </p>
                  <Button asChild>
                    <Link href="/contact">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Process Diagram */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Brand Development Process</h2>
            <p className="text-lg text-muted-foreground">
              A strategic, collaborative approach to creating brands that connect with audiences and drive business results.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Process Step 1 */}
              <div className="bg-card border border-border rounded-lg p-6 text-center relative">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  Research, interviews, and analysis to understand your audience, competition, and market position.
                </p>
                {/* Connector */}
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-border z-10"></div>
              </div>
              
              {/* Process Step 2 */}
              <div className="bg-card border border-border rounded-lg p-6 text-center relative">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Development of brand positioning, personality, and messaging framework to guide the creative process.
                </p>
                {/* Connector */}
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-border z-10"></div>
              </div>
              
              {/* Process Step 3 */}
              <div className="bg-card border border-border rounded-lg p-6 text-center relative">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">
                  Creation of visual identity elements including logo, color palette, typography, and imagery style.
                </p>
                {/* Connector */}
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-border z-10"></div>
              </div>
              
              {/* Process Step 4 */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Production of final assets, comprehensive guidelines, and implementation support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection
        title="What Clients Say About Our Branding Services"
        testimonials={testimonials}
        backgroundClassName="bg-muted/30"
      />
      
      {/* Brand Identity FAQs */}
      <FAQSection
        title="Frequently Asked Questions About Brand Identity"
        faqs={brandFaqs}
      />
      
      {/* Related Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Services</h2>
            <p className="text-muted-foreground">
              Explore our other services to build a comprehensive brand and digital presence.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Web Design & Development */}
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col h-full">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Web Design & Development</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Create a website that brings your brand to life online with responsive design and seamless functionality.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/services/web-development">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Content Strategy */}
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col h-full">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Develop compelling content that tells your brand story and engages your target audience.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/services/content-strategy">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Digital Marketing */}
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col h-full">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Megaphone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Amplify your brand&apos;s reach with strategic digital marketing campaigns that drive engagement and conversion.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/services/digital-marketing">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Ready to Build a Powerful Brand Identity?"
        description="Let's discuss how our branding services can help your business stand out and connect with your audience."
        primaryButton={{
          text: "Schedule a Consultation",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View Our Portfolio",
          href: "/portfolio"
        }}
        backgroundClassName="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"
      />
    </Layout>
  );
}