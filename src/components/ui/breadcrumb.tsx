"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight, Home } from "lucide-react"

// Define route labels to display more user-friendly names
const routeLabels: Record<string, string> = {
  "services": "Services",
  "industries": "Industries",
  "case-studies": "Case Studies",
  "blog": "Blog",
  "about": "About",
  "contact": "Contact",
  "careers": "Careers",
  "newsletter": "Newsletter",
  "support": "Support",
  "consultation": "Consultation",
  "forms": "Forms",
  "auth": "Authentication",
  "login": "Login",
  "register": "Register",
  "forgot-password": "Forgot Password",
  "reset-password": "Reset Password",
  "error": "Error",
  "process": "Process",
  "team": "Team",
  "portfolio": "Portfolio",
  "faq": "FAQ",
  "pricing": "Pricing",
  "free-consultation": "Free Consultation",
  "knowledge-base": "Knowledge Base",
  "submit": "Submit"
}

// Regex to detect dynamic path segments like [id], [slug], etc.
const dynamicSegmentRegex = /^\[(.+)\]$/

export function Breadcrumb({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname()
  
  // If we're on the home page, don't show breadcrumbs
  if (pathname === "/") {
    return null
  }
  
  // Split the pathname into segments and remove empty segments
  const segments = pathname.split("/").filter(Boolean)
  
  // Create the breadcrumb items with proper paths
  const breadcrumbItems = segments.map((segment, index) => {
    // Build the href for this segment
    const href = `/${segments.slice(0, index + 1).join("/")}`
    
    // Handle dynamic segments
    const dynamicMatch = segment.match(dynamicSegmentRegex)
    let label: string
    
    if (dynamicMatch) {
      // For dynamic segments, use a generic label based on the parameter name
      // e.g., [slug] becomes "Entry", [id] becomes "Item", etc.
      const paramName = dynamicMatch[1]
      
      switch (paramName.toLowerCase()) {
        case 'slug':
          label = 'Entry'
          break
        case 'id':
          label = 'Item'
          break
        case 'categoryid':
        case 'category-id':
        case 'category':
          label = 'Category'
          break
        case 'productid':
        case 'product-id':
        case 'product':
          label = 'Product'
          break
        case 'userid':
        case 'user-id':
        case 'user':
          label = 'User'
          break
        default:
          label = 'Details'
      }
    } else {
      // Use predefined labels or format the segment
      label = routeLabels[segment] || formatSegment(segment)
    }
    
    return { href, label }
  })

  return (
    <nav
      className={cn(
        "flex items-center flex-wrap space-x-1 text-sm text-muted-foreground py-3",
        className
      )}
      aria-label="Breadcrumb"
      {...props}
    >
      <Link 
        href="/" 
        className="flex items-center hover:text-primary transition-colors mr-1"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      <ChevronRight className="h-4 w-4 flex-shrink-0" />
      
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.href}>
          {index !== 0 && <ChevronRight className="h-4 w-4 flex-shrink-0" />}
          
          {index === breadcrumbItems.length - 1 ? (
            <span className="font-medium text-foreground truncate max-w-[200px]" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-primary transition-colors truncate max-w-[200px]"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

// Helper function to format segment string to Title Case
function formatSegment(segment: string): string {
  return segment
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
} 