"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/contexts/auth-provider'
import { Loader2 } from 'lucide-react'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export default function LogoutPage() {
  const { logout, isLoading } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  
  useEffect(() => {
    const performLogout = async () => {
      try {
        // Call the auth context logout function
        await logout()
        
        // Show success toast
        toast({
          title: "Logged out successfully",
          description: "You have been logged out of your account",
        })
        
        // Wait a bit before redirecting
        setTimeout(() => {
          router.push('/auth/login')
        }, 2000)
      } catch (error) {
        console.error('Logout error:', error)
        
        toast({
          title: "Logout failed",
          description: "There was a problem during logout. Please try again.",
          variant: "destructive",
        })
      }
    }
    
    performLogout()
  }, [logout, router, toast])
  
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="w-full max-w-md mx-auto shadow-lg border-muted/30">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20">
              <Image 
                src="/images/auth/logout.svg" 
                alt="Logout" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <CardTitle className="text-xl">Signing Out</CardTitle>
          <CardDescription>
            Please wait while we log you out of your account
          </CardDescription>
        </CardHeader>
        
        <CardContent className="text-center">
          <div className="py-6">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">
              {isLoading ? "Signing out..." : "Almost done..."}
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <Button variant="link" asChild className="text-sm">
            <Link href="/">Return to Home Page</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}