"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/contexts/auth-provider'
import { 
  Loader2, 
  Mail, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  ArrowRight,
  RefreshCw
} from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useToast } from '@/components/ui/use-toast'
import { WithSearchParams } from '@/components/ui/use-search-params'

interface ApiError {
  response?: {
    data?: {
      message?: string;
      retryAfter?: number;
    };
  };
  message?: string;
}

// Main component with Suspense boundary
export default function VerifyEmailPage() {
  return (
    <WithSearchParams>
      {(searchParams) => <VerifyEmailContent searchParams={searchParams} />}
    </WithSearchParams>
  );
}

// Inner component that safely uses searchParams
function VerifyEmailContent({ searchParams }: { searchParams: URLSearchParams }) {
  const { verifyEmail, resendVerificationCode } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  
  // Get email from URL query parameter
  const emailFromQuery = searchParams.get('email')
  
  // Form state
  const [email, setEmail] = useState(emailFromQuery || '')
  const [verificationCode, setVerificationCode] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [resendDisabled, setResendDisabled] = useState(false)
  const [countdown, setCountdown] = useState(0)
  
  // Handle countdown timer for resend button
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false)
    }
  }, [countdown, resendDisabled])
  
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!email) {
      setError('Email is required')
      return
    }
    
    if (!verificationCode) {
      setError('Verification code is required')
      return
    }
    
    setIsVerifying(true)
    setError('')
    
    try {
      // Call the auth context verifyEmail function
      await verifyEmail(email, verificationCode)
      
      // Set success state
      setSuccess(true)
      
      // Show success toast
      toast({
        title: "Email verified successfully!",
        description: "You can now sign in to your account.",
      })
      
      // Redirect to login page after a brief delay
      setTimeout(() => {
        router.push('/auth/login')
      }, 3000)
    } catch (error: unknown) {
      const apiError = error as ApiError;
      console.error('Verification error:', apiError);
      setError(apiError.response?.data?.message || 'Verification failed. Please try again.');
      
      toast({
        title: "Verification failed",
        description: apiError.response?.data?.message || 'Invalid or expired verification code',
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false)
    }
  }
  
  const handleResendCode = async () => {
    if (!email) {
      setError('Email is required')
      return
    }
    
    setIsResending(true)
    setError('')
    
    try {
      // Call the auth context resendVerificationCode function
      const response = await resendVerificationCode(email)
      
      // If there's a retry period specified in the response
      if (response && 'retryAfter' in response) {
        setCountdown(response.retryAfter as number)
      } else {
        // Default countdown of 2 minutes (120 seconds)
        setCountdown(120)
      }
      
      setResendDisabled(true)
      
      // Show success toast
      toast({
        title: "Verification code sent!",
        description: "Please check your email for the new verification code.",
      })
    } catch (error: unknown) {
      const apiError = error as ApiError;
      console.error('Resend code error:', apiError);
      
      // Special case: if we have a retry after period
      if (apiError.response?.data?.retryAfter) {
        setCountdown(apiError.response.data.retryAfter);
        setResendDisabled(true);
        
        toast({
          title: "Please wait",
          description: `You can request a new code in ${apiError.response.data.retryAfter} seconds`,
          variant: "destructive",
        });
      } else {
        setError(apiError.response?.data?.message || 'Failed to resend verification code. Please try again.');
        
        toast({
          title: "Resend failed",
          description: apiError.response?.data?.message || 'Failed to resend verification code',
          variant: "destructive",
        });
      }
    } finally {
      setIsResending(false)
    }
  }
  
  // Format the countdown time in MM:SS format
  const formatCountdown = () => {
    const minutes = Math.floor(countdown / 60)
    const seconds = countdown % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl animate-in fade-in duration-500">
      {/* Left column with image - visible on larger screens */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-1/2 transition-all">
        <div className="relative w-full max-w-md aspect-square">
          <Image 
            src="/images/auth/email-verify.png" 
            alt="Email verification" 
            fill
            priority
            className="object-contain drop-shadow-md transition-transform hover:scale-[1.02] duration-700"
          />
        </div>
      </div>
      
      {/* Right column with verification form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <Card className="w-full max-w-md mx-auto shadow-xl border-muted/30 overflow-hidden backdrop-blur-sm bg-card/95 transition-all duration-300 hover:shadow-primary/5">
          {/* Mobile header - only visible on small screens */}
          <div className="lg:hidden text-center pt-8 px-6">
            <h1 className="text-3xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Verify Your Email</h1>
            <p className="text-muted-foreground mt-2 text-base">Enter the verification code sent to your email</p>
          </div>
          
          <CardHeader className="space-y-1.5 pb-6">
            <CardTitle className="text-2xl font-bold">Email Verification</CardTitle>
            <CardDescription className="text-base">
              Check your inbox for a 6-digit verification code
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
                <AlertDescription>Email verified successfully! Redirecting to login...</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleVerify} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
                    disabled={isVerifying || success}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="verificationCode" className="text-sm font-medium">
                  Verification Code
                </label>
                <Input
                  id="verificationCode"
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))} // Only allow digits
                  placeholder="Enter 6-digit code"
                  className="text-center tracking-[0.5em] font-mono h-11 transition-all border-muted/50 focus:border-primary"
                  maxLength={6}
                  disabled={isVerifying || success}
                  required
                />
                <div className="grid grid-cols-6 gap-2 mt-2">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-colors duration-300 ${
                        i < verificationCode.length ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="text-sm text-muted-foreground">
                  Didn&apos;t receive a code?
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleResendCode}
                  disabled={isResending || resendDisabled || success}
                  className="transition-all duration-300"
                >
                  {isResending ? (
                    <>
                      <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                      Sending...
                    </>
                  ) : resendDisabled ? (
                    <>
                      <Clock className="mr-2 h-3 w-3 text-amber-500" />
                      {formatCountdown()}
                    </>
                  ) : (
                    <>
                      <RefreshCw className="mr-2 h-3 w-3" />
                      Resend code
                    </>
                  )}
                </Button>
              </div>
              
              <Button
                type="submit"
                className="w-full h-11 mt-2 font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                disabled={isVerifying || success}
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Verified
                  </>
                ) : (
                  <>
                    Verify Email
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4 pt-6 pb-8">
            <div className="text-sm text-center w-full">
              Want to use a different email?{" "}
              <Link href="/auth/register" className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors">
                Sign up again
              </Link>
            </div>
            
            <div className="text-sm text-center w-full">
              Already verified?{" "}
              <Link href="/auth/login" className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 