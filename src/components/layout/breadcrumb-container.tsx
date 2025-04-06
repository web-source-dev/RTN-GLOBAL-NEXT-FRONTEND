"use client"

import React from "react"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

// Define routes where breadcrumbs should not appear
const excludedRoutes = [
  "/",
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
]

export function BreadcrumbContainer() {
  const pathname = usePathname()
  
  // Don't show breadcrumbs on excluded routes
  if (excludedRoutes.includes(pathname)) {
    return null
  }
  
  return (
    <div className="bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
      </div>
    </div>
  )
} 