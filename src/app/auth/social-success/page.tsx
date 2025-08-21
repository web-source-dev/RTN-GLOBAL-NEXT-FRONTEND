"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useAuth } from '@/lib/contexts/auth-provider'
import Script from 'next/script'
import { 
  Loader2, 
  CheckCircle2
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { H3, P } from '@/components/ui/typography'

export default function SocialAuthSuccessPage() {
  const { user, isLoading: isAuthLoading } = useAuth()
  const router = useRouter()
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [error, setError] = useState('')
  
  useEffect(() => {
    // Wait until we're sure about the auth state
    if (isAuthLoading) return
    
    // If authentication failed
    if (!user) {
      setError('Authentication failed. Please try again.')
      return
    }
    
    // If we have a user, redirect to dashboard after a brief delay
    const timer = setTimeout(() => {
      setIsRedirecting(true)
      router.push('/dashboard')
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [user, isAuthLoading, router])
  
  // Loading state
  if (isAuthLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] animate-in fade-in-50 duration-500">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
            <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
              <Loader2 className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>
          <H3 className="text-xl font-semibold mb-2">Verifying authentication</H3>
          <P className="text-muted-foreground">Please wait while we complete your authentication...</P>
        </div>
      </div>
    )
  }
  
  return (
    <div className="flex justify-center items-center min-h-[70vh] animate-in fade-in duration-700">
      {/* JSON-LD Structured Data */}
      <Script id="social-success-structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Social Authentication Success - RTN Global",
            "description": "Successful authentication with your social account at RTN Global",
            "url": "https://rtnglobal.site/auth/social-success",
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

      <Card className="w-full max-w-md mx-auto shadow-xl border-muted/30 overflow-hidden backdrop-blur-sm bg-card/95 transition-all duration-300 hover:shadow-primary/5">
        <CardHeader className="text-center pb-1">
          {error ? (
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-destructive/10 animate-in zoom-in-75 duration-300">
                <svg 
                  className="h-10 w-10 text-destructive" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
            </div>
          ) : (
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-green-50 dark:bg-green-900/20 shadow-sm animate-in zoom-in-75 duration-300">
                <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
            </div>
          )}
          
          <CardTitle className="text-2xl font-bold">
            {error ? 'Authentication Failed' : 'Authentication Successful'}
          </CardTitle>
          <CardDescription className="text-base mt-2">
            {error ? 'We could not authenticate your account' : 'You have successfully signed in with your social account'}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="text-center pt-4">
          {error ? (
            <>
              <Alert variant="destructive" className="mb-6 animate-in slide-in-from-top-1 duration-300">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
              
              <div className="flex flex-col gap-3 mt-6">
                <Button 
                  onClick={() => router.push('/auth/login')}
                  className="w-full h-11 font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Return to Login
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="relative w-40 h-40 mx-auto my-6">
                <Image 
                  src="/images/auth/success.svg" 
                  alt="Success" 
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
              
              <div className="p-4 bg-muted/40 rounded-lg border border-muted/60 text-left mb-6">
                <H3 className="font-medium mb-2">What happens next?</H3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">1</span>
                    You are now being redirected to the dashboard
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">2</span>
                    You can start using all the features of the platform
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">3</span>
                    You can update your profile and preferences anytime
                  </li>
                </ul>
              </div>
              
              <P className="text-muted-foreground mb-6 animate-pulse">
                {isRedirecting 
                  ? 'Redirecting to dashboard...' 
                  : 'You will be redirected to the dashboard shortly.'}
              </P>
              
              <div className="relative h-1 w-full bg-muted/50 rounded-full overflow-hidden">
                <div className={`absolute inset-y-0 left-0 bg-primary transition-all duration-1000 rounded-full ${isRedirecting ? 'w-full' : 'w-0'}`}></div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 