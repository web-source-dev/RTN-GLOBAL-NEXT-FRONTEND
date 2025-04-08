"use client"

import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/contexts/auth-provider'
import { Loader2, CheckCircle, AlertCircle, Home } from 'lucide-react'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Progress } from '@/components/ui/progress'

export default function LogoutPage() {
  const { logout } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [logoutStatus, setLogoutStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [countdown, setCountdown] = useState(5)
  const [progress, setProgress] = useState(0)
  const [animate, setAnimate] = useState(false)
  
  // Start animation after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Wrap performLogout in useCallback to prevent it from being recreated on each render
  const performLogout = useCallback(async () => {
    try {
      // Reset states if trying again
      setLogoutStatus('loading')
      setCountdown(5)
      setProgress(0)
      
      // Call the auth context logout function
      await logout()
      
      // Update status to success
      setLogoutStatus('success')
      
      // Show success toast
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account",
      })
      
      // Start countdown for redirection
      let count = 5
      const countdownInterval = setInterval(() => {
        count -= 1
        setCountdown(count)
        setProgress((5 - count) * 20)
        
        if (count <= 0) {
          clearInterval(countdownInterval)
          router.push('/')
        }
      }, 1000)
      
    } catch (error) {
      console.error('Logout error:', error)
      
      // Update status to error
      setLogoutStatus('error')
      
      toast({
        title: "Logout failed",
        description: "There was a problem during logout. Please try again.",
        variant: "destructive",
      })
    }
  }, [logout, router, toast]) // Include dependencies used inside the callback
  
  useEffect(() => {
    performLogout()
  }, [performLogout]) // Now performLogout is stable and will only change when its dependencies change
  
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-b from-background to-muted/30 px-4">
      <style jsx global>{`
      
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(var(--primary), 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(var(--primary), 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(var(--primary), 0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-pulse-custom {
          animation: pulse 2s infinite;
        }
      `}</style>
      
      <Card 
        className={`w-full max-w-md mx-auto shadow-xl border-muted/30 overflow-hidden ${animate ? 'animate-fade-in' : 'opacity-0'}`}
      >
        {logoutStatus === 'loading' && (
          <div className="h-2 bg-primary/20 relative overflow-hidden">
            <div className="h-full bg-primary absolute left-0 top-0 w-1/3 animate-[shimmer_1.5s_infinite]" 
              style={{animation: "shimmer 1.5s infinite", background: "linear-gradient(90deg, transparent, rgba(var(--primary), 0.6), transparent)", backgroundSize: "200% 100%"}}
            />
          </div>
        )}
        
        <CardHeader className="text-center pt-8 pb-4">
          <div className="flex justify-center mb-6">
            <div className={`relative w-28 h-28 p-1 rounded-full ${logoutStatus === 'loading' ? 'animate-pulse-custom' : ''}`}>
              {logoutStatus === 'loading' && (
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" />
              )}
              <Image 
                src="/icons/logo192.png"
                alt="Logout" 
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold">
            {logoutStatus === 'loading' && "Signing Out"}
            {logoutStatus === 'success' && "Sign Out Complete"}
            {logoutStatus === 'error' && "Sign Out Failed"}
          </CardTitle>
          <CardDescription className="text-base mt-2">
            {logoutStatus === 'loading' && "Please wait while we securely log you out"}
            {logoutStatus === 'success' && `Redirecting to homepage in ${countdown} second${countdown !== 1 ? 's' : ''}`}
            {logoutStatus === 'error' && "There was a problem logging you out"}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="text-center px-6 pb-6">
          <div className="py-6">
            {logoutStatus === 'loading' && (
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 text-primary" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </div>
                <Loader2 className="h-14 w-14 animate-spin mx-auto mb-4 text-primary" />
              </div>
            )}
            {logoutStatus === 'success' && (
              <div className="transform transition-all duration-500 ease-in-out">
                <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500 animate-[bounce_1s_ease-in-out]" />
                <Progress value={progress} className="h-2 w-32 mx-auto mb-4" />
              </div>
            )}
            {logoutStatus === 'error' && (
              <div className="text-red-500 mb-4 animate-[shake_0.5s_ease-in-out]">
                <AlertCircle className="h-16 w-16 mx-auto" />
              </div>
            )}
            <p className="text-muted-foreground mt-4 text-base">
              {logoutStatus === 'loading' && "Clearing session data..."}
              {logoutStatus === 'success' && "You have been successfully logged out"}
              {logoutStatus === 'error' && "Please try again or contact support if the problem persists"}
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center pb-8 gap-4">
          <Button 
            variant="outline" 
            asChild 
            className="text-sm group transition-all duration-300 hover:shadow-md"
          >
            <Link href="/" className="gap-2">
              <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Return to Home</span>
            </Link>
          </Button>
          
          {logoutStatus === 'error' && (
            <Button 
              onClick={performLogout} 
              className="text-sm"
            >
              Try Again
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}