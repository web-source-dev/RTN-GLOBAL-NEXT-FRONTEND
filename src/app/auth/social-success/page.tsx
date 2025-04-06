"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useAuth } from '@/lib/contexts/auth-provider'
import { 
  Loader2, 
  CheckCircle2
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

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
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Verifying authentication...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="w-full max-w-md mx-auto shadow-lg border-muted/30">
        <CardHeader className="text-center">
          {error ? (
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-destructive/10">
                <svg 
                  className="h-8 w-8 text-destructive" 
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
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-green-50 dark:bg-green-900/20">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
          )}
          
          <CardTitle className="text-xl">
            {error ? 'Authentication Failed' : 'Authentication Successful'}
          </CardTitle>
          <CardDescription>
            {error ? 'We could not authenticate your account' : 'You have successfully signed in with your social account'}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="text-center">
          {error ? (
            <>
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
              
              <div className="flex flex-col gap-2 mt-4">
                <Button onClick={() => router.push('/auth/login')}>
                  Return to Login
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="relative w-32 h-32 mx-auto my-4">
                <Image 
                  src="/images/auth/success.svg" 
                  alt="Success" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <p className="text-muted-foreground mb-6">
                {isRedirecting 
                  ? 'Redirecting to dashboard...' 
                  : 'You will be redirected to the dashboard shortly.'}
              </p>
              
              <Loader2 className={`h-6 w-6 animate-spin mx-auto ${isRedirecting ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 