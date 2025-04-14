"use client"

import React, { useState } from 'react'
import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Mail, Phone, MapPin, Clock, Loader2, AlertCircle, ArrowRight, CheckCircle2, Building, ShieldCheck } from "lucide-react"
import { FormsAPI } from "@/lib/api/api-provider"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

// Create a schema for contact form validation
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string({
    required_error: "Please select a service you're interested in.",
  }),
  message: z.string().min(10, "Your message must be at least 10 characters."),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  // Define form with React Hook Form and Zod validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  })
  
  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true)
      setServerError(null)
      
      // Format data to match backend model
      const formattedData = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone || undefined,
        company: data.company || undefined,
        service: data.service,
        message: data.message,
      }
      
      // Submit to API
      await FormsAPI.submitContact(formattedData)
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message. We&apos;ll get back to you soon!",
        variant: "default",
      })
      
      // Reset form and set submitted state
      form.reset()
      setFormSubmitted(true)
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)
    } catch (error: unknown) {
      console.error("Contact form submission error:", error)
      
      if (error instanceof Error) {
        setServerError(
          error.message || 
          "There was an error submitting your message. Please try again later."
        )
      } else {
        setServerError("There was an error submitting your message. Please try again later.")
      }
      
      toast({
        title: "Submission Failed",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <Layout>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us - RTN Global",
            "description": "Get in touch with RTN Global. Contact us for inquiries, support, or to start your next project.",
            "url": "https://rtnglobal.co/contact",
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
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 z-0" />
        <div className="absolute inset-0 bg-grid-white/10 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={fadeIn}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Get in Touch
              </h1>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <p className="mt-6 text-xl text-muted-foreground">
                Have a question or want to work with us? We&apos;re here to help you navigate your next digital transformation.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact-form">
                  Send a Message <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="tel:+1234567890">
                  <Phone className="mr-2 h-4 w-4" /> Call Us Now
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Contact Information</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with us through any of these channels and experience our commitment to exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:border-primary/20"
            >
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                For inquiries, feedback, or support
              </p>
              <a 
                href="mailto:info@rtnglobal.com" 
                className="text-primary hover:underline font-medium inline-flex items-center"
              >
                info@rtnglobal.com
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:border-primary/20"
            >
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Speak with our customer support team
              </p>
              <a 
                href="tel:+1234567890" 
                className="text-primary hover:underline font-medium inline-flex items-center"
              >
                +1 (234) 567-890
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:border-primary/20"
            >
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p className="text-muted-foreground mb-4">
                We&apos;re available during these hours
              </p>
              <span className="text-foreground font-medium">
                Monday - Friday<br />
                9:00 AM - 5:00 PM EST
              </span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:border-primary/20"
            >
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Building className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Headquarters</h3>
              <p className="text-muted-foreground mb-4">
                Visit our main office in person
              </p>
              <address className="text-foreground not-italic font-medium">
                123 Business Avenue<br />
                New York, NY 10001
              </address>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative">
            {/* Left side - Info and Map */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">How Can We Help?</h2>
                <p className="text-muted-foreground mb-6">
                  We&apos;re here to answer your questions and discuss how our solutions can help your business grow. Fill out the form, and we&apos;ll be in touch as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Dedicated Support</h4>
                      <p className="text-sm text-muted-foreground">Our team is available to provide personalized assistance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">We typically respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Expert Consultation</h4>
                      <p className="text-sm text-muted-foreground">Get professional advice tailored to your business needs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md">
                  <div className="relative h-80">
                    <OptimizedImage 
                      src="/images/map.jpg" 
                      alt="Office Location Map" 
                      fill 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <Button asChild variant="default" size="sm" className="rounded-full shadow-lg">
                        <a 
                          href="https://maps.google.com/?q=123+Business+Avenue+New+York+NY+10001" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <MapPin className="h-4 w-4 mr-2" /> Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium mb-2">RTN Global Headquarters</h4>
                    <address className="text-sm text-muted-foreground not-italic">
                      123 Business Avenue, Suite 100<br />
                      New York, NY 10001<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
              </div>
            
            {/* Right side - Contact Form */}
            <div className="lg:col-span-3 sticky top-20">
              <Card className="border-primary/10 shadow-lg rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-primary/10">
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-6">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground mb-6">
                        Your message has been sent successfully. We&apos;ll get back to you shortly.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setFormSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        {serverError && (
                          <div className="bg-destructive/15 text-destructive p-3 rounded-md flex items-start space-x-2">
                            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <p>{serverError}</p>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} className="rounded-md" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} className="rounded-md" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john.doe@example.com" {...field} className="rounded-md" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number (Optional)</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="+1 (234) 567-890" {...field} className="rounded-md" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Company" {...field} className="rounded-md" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service You&apos;re Interested In</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-md">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="web_development">Web Development</SelectItem>
                                  <SelectItem value="mobile_development">Mobile App Development</SelectItem>
                                  <SelectItem value="cloud_services">Cloud Services</SelectItem>
                                  <SelectItem value="digital_marketing">Digital Marketing</SelectItem>
                                  <SelectItem value="consulting">IT Consulting</SelectItem>
                                  <SelectItem value="support">Technical Support</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>How can we help you?</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please describe what you're looking for and any specific requirements you have." 
                                  className="min-h-[120px] rounded-md" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          disabled={isSubmitting} 
                          className="w-full rounded-md"
                          size="lg"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
                
                <CardFooter className="bg-muted/30 border-t px-6 py-4">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <ShieldCheck className="h-4 w-4 mr-2 text-muted-foreground/70" />
                    Your information is secure and will never be shared with third parties.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold mb-3">What services do you offer?</h3>
              <p className="text-muted-foreground">
                We offer a comprehensive range of web development and digital marketing services, 
                including custom website development, SEO, content marketing, social media 
                management, PPC advertising, and email marketing.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold mb-3">How much do your services cost?</h3>
              <p className="text-muted-foreground">
                Our pricing is customized based on your specific needs and project requirements. 
                We offer competitive rates and flexible packages to accommodate various budgets. 
                Contact us for a free consultation and quote.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold mb-3">How long does it take to complete a project?</h3>
              <p className="text-muted-foreground">
                Project timelines vary depending on complexity and scope. A simple website 
                might take 2-4 weeks, while more complex projects could take 2-3 months. 
                We&apos;ll provide a detailed timeline during our initial consultation.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold mb-3">Do you work with clients outside the US?</h3>
              <p className="text-muted-foreground">
                Yes, we work with clients globally. Our team is experienced in managing 
                remote projects and can accommodate different time zones to ensure 
                smooth communication and collaboration.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/faq">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take the first step toward transforming your digital presence. Contact us today to schedule a free consultation with our experts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact-form">
                  Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 