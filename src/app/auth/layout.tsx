"use client"

import React from 'react'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ['latin'] })

// Remove the metadata export since it can't be in a client component
// The metadata is now defined in metadata.ts in the same directory

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={cn(
      "min-h-screen w-full flex items-center justify-center",
      "bg-gradient-to-br from-background to-muted/50",
      "py-10 md:py-0",
      inter.className
    )}>
      {/* JSON-LD Structured Data */}
      <Script id="auth-layout-structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
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
        `}
      </Script>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:var(--pattern-size)_var(--pattern-size)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000)]" />
      
      {/* Radial gradient background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-20"></div>
      <div className="absolute bottom-0 right-0 left-0 h-[50vh] bg-gradient-radial from-secondary/20 via-transparent to-transparent opacity-20"></div>
      
      <div className="container relative z-10 flex justify-center">
        {children}
      </div>
    </div>
  )
} 