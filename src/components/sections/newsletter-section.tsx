"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Send, Check, AlertCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

type SubscriptionStatus = "idle" | "loading" | "success" | "error"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<SubscriptionStatus>("idle")
  const [message, setMessage] = useState("")
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }
    
    setStatus("loading")
    
    // Simulating API call for demonstration purposes
    // In a real application, replace with actual API call to your email service
    try {
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': &apos;application/json&apos; },
      //   body: JSON.stringify({ email }),
      // })
      
      // Simulating response delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setStatus("success")
      setMessage("Thank you for subscribing!")
      setEmail("")
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 5000)
    } catch (error) {
      setStatus("error")
      setMessage("An error occurred. Please try again.")
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle")
        setMessage(&quot;&quot;)
      }, 5000)
    }
  }
  
  return (
    <section className="py-14 md:py-20 bg-primary" id="newsletter">
      <div className="container mx-auto">
        <div className="bg-background/10 backdrop-blur-lg rounded-xl border border-white/10 p-6 md:p-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Updated</h2>
                <p className="text-lg text-white/90">
                  Subscribe to our newsletter to receive the latest updates, industry insights, and exclusive offers.
                </p>
                
                <div className="flex flex-col gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm text-white/80">Industry trends and insights</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm text-white/80">Digital marketing tips and strategies</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm text-white/80">Company news and updates</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm text-white/80">Exclusive offers and promotions</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-white">Subscribe to Our Newsletter</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      disabled={status === &quot;loading&quot;}
                      required
                    />
                  </div>
                  
                  {message && (
                    <div className={`flex items-center gap-2 text-sm ${status === "error" ? "text-red-300" : "text-green-300"}`}>
                      {status === &quot;error&quot; ? (
                        <AlertCircle className="h-4 w-4" />
                      ) : (
                        <Check className="h-4 w-4" />
                      )}
                      <p>{message}</p>
                    </div>
                  )}
                  
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-white text-primary hover:bg-white/90 rounded-lg flex items-center justify-center gap-2 h-11 shadow-lg"
                    >
                      {status === &quot;loading&quot; ? (
                        <>
                          <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <ArrowRight className="h-4 w-4" />
                          <span>Subscribe Now</span>
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-center text-white/70 mt-4">
                    By subscribing, you agree to our <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a> and consent to receive updates from RTN Global.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 