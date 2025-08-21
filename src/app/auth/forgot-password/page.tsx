"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/contexts/auth-provider'
import Script from 'next/script'
import { 
  Loader2, 
  Mail, 
  AlertCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useToast } from '@/components/ui/use-toast'

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  
  // Form state
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!email) {
      setError('Email is required')
      return
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setIsSubmitting(true)
    setError('')
    
    try {
      // Call the auth context forgotPassword function
      await forgotPassword(email)
      
      // Set success state
      setSuccess(true)
      
      // Show success toast
      toast({
        title: "Reset link sent",
        description: "If your email exists in our system, you will receive a password reset link.",
      })
    } catch (error: Error | unknown) {
      console.error('Forgot password error:', error)
      
      // For security reasons, we don't want to reveal if the email exists or not,
      // so we show a generic success message even for errors
      setSuccess(true)
      
      toast({
        title: "Reset link sent",
        description: "If your email exists in our system, you will receive a password reset link.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl animate-in fade-in duration-500">
      {/* JSON-LD Structured Data */}
      <Script id="forgot-password-structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Forgot Password - RTN Global",
            "description": "Reset your RTN Global account password",
            "url": "https://rtnglobal.site/auth/forgot-password",
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

      {/* Left column with image - visible on larger screens */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-1/2 transition-all">
        <div className="relative w-full max-w-md aspect-square">
          <Image 
            src="/images/auth/forget.svg" 
            alt="Forgot password illustration" 
            fill
            priority
            className="object-contain drop-shadow-md transition-transform hover:scale-[1.02] duration-700 w-full h-full"
          />
        </div>
      </div>
      
      {/* Right column with forgot password form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <Card className="w-full max-w-md mx-auto shadow-xl border-muted/30 overflow-hidden backdrop-blur-sm bg-card/95 transition-all duration-300 hover:shadow-primary/5">
          {/* Mobile header - only visible on small screens */}
          <div className="lg:hidden text-center pt-8 px-6">
            <h1 className="text-3xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Forgot Your Password?</h1>
            <p className="text-muted-foreground mt-2 text-base">Enter your email to receive a reset link</p>
          </div>
          
          <CardHeader className="space-y-1.5 pb-6">
            <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
            <CardDescription className="text-base">
              Enter your email address and we&apos;ll send you a link to reset your password
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6 animate-in slide-in-from-top-1 duration-300">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {success && (
              <Alert className="mb-6 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400 animate-in slide-in-from-top-1 duration-300">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                  If your email exists in our system, you will receive a password reset link. Please check your inbox and spam folder.
                </AlertDescription>
              </Alert>
            )}
            
            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full h-11 mt-2 font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="space-y-6 animate-in fade-in-50 duration-300">
                <div className="bg-muted/40 p-5 rounded-lg border border-muted/60">
                  <h3 className="font-medium text-sm">What happens next?</h3>
                  <ol className="mt-3 text-sm space-y-2.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">1</span>
                      Check your email inbox for the reset link
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">2</span>
                      Click the link in the email to reset your password
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">3</span>
                      Create a new secure password
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">4</span>
                      Log in with your new password
                    </li>
                  </ol>
                </div>
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-11 transition-all duration-200 hover:bg-muted/30"
                  onClick={() => router.push('/auth/login')}
                >
                  Back to Login
                </Button>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4 pt-6 pb-8">
            <div className="text-sm text-center w-full">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors">
                Sign in
              </Link>
            </div>
            
            <div className="text-sm text-center w-full">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 