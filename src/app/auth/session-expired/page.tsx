"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Script from 'next/script'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Lock, RefreshCw } from 'lucide-react'

export default function SessionExpiredPage() {
  const [countdown, setCountdown] = useState(5)
  
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      
      return () => clearTimeout(timer)
    } else {
      // Redirect to login page when countdown reaches zero
      window.location.href = '/auth/login'
    }
  }, [countdown])
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
      {/* JSON-LD Structured Data */}
      <Script id="session-expired-structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Session Expired - RTN Global",
            "description": "Your session has expired. Please log in again to continue.",
            "url": "https://rtnglobal.site/auth/session-expired",
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
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-1/2">

        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Session Expired</h1>
          <p className="text-muted-foreground mt-2">Your session has timed out for security reasons</p>
        </div>
      </div>
      
      {/* Right column with info */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <Card className="w-full max-w-md mx-auto shadow-lg border-muted/30">
          {/* Mobile header - only visible on small screens */}
          <div className="lg:hidden text-center pt-6 px-6">
            <h1 className="text-2xl font-bold tracking-tight">Session Expired</h1>
            <p className="text-muted-foreground mt-1 text-sm">Your session has timed out for security reasons</p>
          </div>
          
          <CardHeader className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl">You&apos;ve Been Logged Out</CardTitle>
          </CardHeader>
          
          <CardContent className="text-center">
            <p className="mb-6 text-muted-foreground">
              For security reasons, your session has expired due to inactivity. 
              Please log in again to continue using the application.
            </p>
            
            <div className="flex flex-col gap-4">
              <Button asChild size="lg">
                <Link href="/auth/login">
                  Log In Again
                </Link>
              </Button>
              
              <Button variant="outline" onClick={() => window.history.back()}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Go Back and Try Again
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Redirecting to login in {countdown} seconds...
            </p>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Separator />
            
            <div className="text-xs text-center text-muted-foreground">
              If you&apos;re experiencing issues logging in, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact support
              </Link>{" "}
              for assistance.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 