"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Layout } from '@/components/layout/layout'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { WithSearchParams } from '@/components/ui/use-search-params'
import { 
  CloudOff, 
  ServerCrash, 
  Lock, 
  ShieldAlert,
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
  HomeIcon,
  Mail
} from 'lucide-react'

// Helper function to log errors (this could be expanded to use a real error tracking service)
const logError = (errorType: string, errorDetails?: unknown) => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // In a real app, you would send this to your error tracking service
    console.error(`Error occurred: ${errorType}`, errorDetails);
    
    // Example of how you might track with a service like Sentry
    // if (typeof window.Sentry !== 'undefined') {
    //   window.Sentry.captureException(new Error(`User encountered ${errorType} error`));
    // }
  }
};

// Main component that uses WithSearchParams
export default function ErrorPage() {
  return (
    <WithSearchParams>
      {(searchParams) => <ErrorPageContent searchParams={searchParams} />}
    </WithSearchParams>
  );
}

// Inner component that safely uses searchParams
function ErrorPageContent({ searchParams }: { searchParams: URLSearchParams }) {
  const router = useRouter()
  const errorType = searchParams.get('type') || 'generic'
  const errorCode = searchParams.get('code') || ''
  const errorMessage = searchParams.get('message') || ''
  const [countdown, setCountdown] = useState(15)
  
  // Log the error when the component mounts
  useEffect(() => {
    logError(errorType, { errorCode, errorMessage });
  }, [errorType, errorCode, errorMessage]);
  
  // Handle countdown and redirection
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      
      return () => clearTimeout(timer)
    } else {
      // Redirect to homepage when countdown reaches zero
      router.push('/');
    }
  }, [countdown, router])
  
  const getErrorDetails = () => {
    switch (errorType) {
      case 'server':
        return {
          title: 'Server Error',
          description: "We encountered an error on our servers. Our team has been notified and is working to fix the issue.",
          icon: <ServerCrash className="h-12 w-12 text-destructive" />,
          suggestion: 'Please try again later or contact support if the problem persists.',
          errorCode: errorCode || '500',
        }
      case 'network':
        return {
          title: 'Network Error',
          description: 'Unable to connect to our servers. This might be due to your internet connection or our servers might be temporarily unavailable.',
          icon: <CloudOff className="h-12 w-12 text-destructive" />,
          suggestion: 'Please check your internet connection and try again, or try again later.',
          errorCode: errorCode || 'NETWORK_ERROR',
        }
      case 'auth':
        return {
          title: 'Authentication Error',
          description: "There was a problem with your authentication. You might have been logged out or your session may have expired.",
          icon: <Lock className="h-12 w-12 text-destructive" />,
          suggestion: 'Please try logging in again.',
          errorCode: errorCode || '401',
        }
      case 'forbidden':
        return {
          title: 'Access Denied',
          description: 'You don\'t have permission to access this resource.',
          icon: <ShieldAlert className="h-12 w-12 text-destructive" />,
          suggestion: 'Please contact your administrator if you believe this is a mistake.',
          errorCode: errorCode || '403',
        }
      case 'not-found':
        return {
          title: 'Page Not Found',
          description: 'The page you are looking for does not exist or has been moved.',
          icon: <AlertTriangle className="h-12 w-12 text-destructive" />,
          suggestion: 'Please check the URL or navigate to another page.',
          errorCode: errorCode || '404',
        }
      default:
        return {
          title: 'Something Went Wrong',
          description: errorMessage || 'An unexpected error occurred.',
          icon: <AlertTriangle className="h-12 w-12 text-destructive" />,
          suggestion: 'Please try again or contact support if the problem persists.',
          errorCode: errorCode || 'UNKNOWN',
        }
    }
  }
  
  const { title, description, icon, suggestion, errorCode: displayErrorCode } = getErrorDetails()
  
  return (
    <Layout>
      <div className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-card border border-border rounded-lg shadow-sm p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-destructive/10 p-4 rounded-full mb-6">
              {icon}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
            {displayErrorCode && (
              <p className="text-sm text-muted-foreground mb-4">Error Code: {displayErrorCode}</p>
            )}
            
            <p className="text-lg text-muted-foreground mb-6 max-w-md">
              {description}
            </p>
            
            <Alert className="mb-8 max-w-md">
              <AlertTitle>Suggestion</AlertTitle>
              <AlertDescription>{suggestion}</AlertDescription>
            </Alert>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <Link href="/">
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Return Home
                </Link>
              </Button>
              
              <Button variant="outline" onClick={() => window.location.reload()}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              
              <Button variant="outline" asChild>
                <Link href="/contact?subject=Technical%20Support&type=Error&code={displayErrorCode}">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-8">
              Redirecting to homepage in {countdown} seconds...
            </p>
            
            <Separator className="my-8" />
            
            <div className="text-sm text-muted-foreground">
              <Button variant="ghost" size="sm" onClick={() => router.back()}>
                <ArrowLeft className="h-3 w-3 mr-1" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 