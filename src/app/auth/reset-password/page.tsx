"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/contexts/auth-provider'
import Script from 'next/script'
import { 
  Loader2, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertCircle,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useToast } from '@/components/ui/use-toast'
import { WithSearchParams } from '@/components/ui/use-search-params'

// Main component with Suspense boundary
export default function ResetPasswordPage() {
  // Wrap the entire component in WithSearchParams
  return (
    <WithSearchParams fallback={<LoadingState />}>
      {(searchParams) => <ResetPasswordContent searchParams={searchParams} />}
    </WithSearchParams>
  );
}

// Component that uses searchParams
function ResetPasswordContent({ searchParams }: { searchParams: URLSearchParams }) {
  const { resetPassword, validateResetToken } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  
  // Get token from URL query parameter
  const token = searchParams.get('token')
  
  // Form state
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const [isValidating, setIsValidating] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [invalidToken, setInvalidToken] = useState(false)
  
  // Validate token when component mounts
  useEffect(() => {
    const checkToken = async () => {
      if (!token) {
        setInvalidToken(true)
        setIsValidating(false)
        return
      }
      
      try {
        // Validate the reset token
        await validateResetToken(token)
        setIsValidating(false)
      } catch (error) {
        console.error('Token validation error:', error)
        setInvalidToken(true)
        setIsValidating(false)
      }
    }
    
    checkToken()
  }, [token, validateResetToken])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!password) {
      setError('Password is required')
      return
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }
    
    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!passwordRegex.test(password)) {
      setError('Password must include uppercase, lowercase, numbers, and special characters')
      return
    }
    
    if (!confirmPassword) {
      setError('Please confirm your password')
      return
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    setIsResetting(true)
    setError('')
    
    try {
      // Call the auth context resetPassword function
      await resetPassword(token!, password)
      
      // Set success state
      setSuccess(true)
      
      // Show success toast
      toast({
        title: "Password reset successful!",
        description: "Your password has been reset. You can now log in with your new password.",
      })
      
      // Redirect to login page after a brief delay
      setTimeout(() => {
        router.push('/auth/login')
      }, 3000)
    } catch (error: unknown) {
      console.error('Reset password error:', error)
      
      let errorMessage = 'Failed to reset password. Please try again.'
      
      if (error && typeof error === 'object' && 'response' in error && 
          error.response && typeof error.response === 'object' && 
          'data' in error.response && error.response.data && 
          typeof error.response.data === 'object' && 
          'message' in error.response.data) {
        
        const responseMessage = error.response.data.message
        
        if (typeof responseMessage === 'string') {
          if (responseMessage.includes('Cannot reuse recent passwords')) {
            setError('Cannot reuse recent passwords. Please choose a different password.')
          } else if (responseMessage.includes('Invalid or expired')) {
            setInvalidToken(true)
            setError('Your password reset link has expired or is invalid. Please request a new one.')
          } else {
            setError(responseMessage)
          }
          errorMessage = responseMessage
        }
      } else {
        setError(errorMessage)
      }
      
      toast({
        title: "Reset failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsResetting(false)
    }
  }
  
  // Loading state while validating token
  if (isValidating) {
    return <LoadingState />;
  }
  
  // Invalid token state
  if (invalidToken) {
    return (
      <div className="flex justify-center items-center">
        <Card className="w-full max-w-md mx-auto shadow-lg border-muted/30">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-destructive/10">
                <ShieldAlert className="h-8 w-8 text-destructive" />
              </div>
            </div>
            <CardTitle className="text-xl text-center">Invalid or Expired Link</CardTitle>
            <CardDescription className="text-center">
              This password reset link is invalid or has expired.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground">
              Please request a new password reset link.
            </p>
            <Button 
              className="w-full" 
              onClick={() => router.push('/auth/forgot-password')}
            >
              Request New Reset Link
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="link" asChild className="text-sm">
              <Link href="/auth/login">Return to Login</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl animate-in fade-in duration-500">
      {/* JSON-LD Structured Data */}
      <Script id="reset-password-structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Reset Password - RTN Global",
            "description": "Create a new password for your RTN Global account",
            "url": "https://rtnglobal.site/auth/reset-password",
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
            alt="Reset password illustration" 
            fill
            priority
            className="object-contain drop-shadow-md transition-transform hover:scale-[1.02] duration-700"
          />
        </div>
      </div>
      
      {/* Right column with reset password form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <Card className="w-full max-w-md mx-auto shadow-xl border-muted/30 overflow-hidden backdrop-blur-sm bg-card/95 transition-all duration-300 hover:shadow-primary/5">
          {/* Mobile header - only visible on small screens */}
          <div className="lg:hidden text-center pt-8 px-6">
            <h1 className="text-3xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Create New Password</h1>
            <p className="text-muted-foreground mt-2 text-base">Enter a new password for your account</p>
          </div>
          
          <CardHeader className="space-y-1.5 pb-6">
            <CardTitle className="text-2xl font-bold">Reset Your Password</CardTitle>
            <CardDescription className="text-base">
              Create a new secure password for your account
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
                <AlertDescription>Password reset successful! Redirecting to login...</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  New Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
                    disabled={isResetting || success}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters with uppercase, lowercase, number and special character
                </p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
                    disabled={isResetting || success}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full h-11 mt-2 font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                disabled={isResetting || success}
              >
                {isResetting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Resetting...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Password Reset
                  </>
                ) : (
                  "Reset Password"
                )}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4 pt-6 pb-8">
            <div className="text-sm text-center w-full">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors">
                Sign in
              </Link>
            </div>
            
            <div className="text-sm text-center w-full">
              Need a new reset link?{" "}
              <Link href="/auth/forgot-password" className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors">
                Request again
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

// Loading state component extracted for reuse
function LoadingState() {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
        <p className="text-muted-foreground">Validating reset link...</p>
      </div>
    </div>
  );
} 