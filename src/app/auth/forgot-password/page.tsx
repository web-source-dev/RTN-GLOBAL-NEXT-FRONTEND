"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/contexts/auth-provider'
import { 
  Loader2, 
  Mail, 
  AlertCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useToast } from '@/components/ui/use-toast'

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  
  // Form state
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!email) {
      setError('Email is required')
      return
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setIsSubmitting(true)
    setError('')
    
    try {
      // Call the auth context forgotPassword function
      await forgotPassword(email)
      
      // Set success state
      setSuccess(true)
      
      // Show success toast
      toast({
        title: "Reset link sent",
        description: "If your email exists in our system, you will receive a password reset link.",
      })
    } catch (error: Error | unknown) {
      console.error('Forgot password error:', error)
      
      // For security reasons, we don't want to reveal if the email exists or not,
      // so we show a generic success message even for errors
      setSuccess(true)
      
      toast({
        title: "Reset link sent",
        description: "If your email exists in our system, you will receive a password reset link.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
      {/* Left column with image - visible on larger screens */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-1/2">
        <div className="relative w-full max-w-md aspect-square">
          <Image 
            src="/images/auth/forgot-password.svg" 
            alt="Forgot password illustration" 
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Forgot Your Password?</h1>
          <p className="text-muted-foreground mt-2">Enter your email to receive a reset link</p>
        </div>
      </div>
      
      {/* Right column with forgot password form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <Card className="w-full max-w-md mx-auto shadow-lg border-muted/30">
          {/* Mobile header - only visible on small screens */}
          <div className="lg:hidden text-center pt-6 px-6">
            <h1 className="text-2xl font-bold tracking-tight">Forgot Your Password?</h1>
            <p className="text-muted-foreground mt-1 text-sm">Enter your email to receive a reset link</p>
          </div>
          
          <CardHeader>
            <CardTitle className="text-xl">Reset Password</CardTitle>
            <CardDescription>
              Enter your email address and we&apos;ll send you a link to reset your password
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {success && (
              <Alert className="mb-4 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                  If your email exists in our system, you will receive a password reset link. Please check your inbox and spam folder.
                </AlertDescription>
              </Alert>
            )}
            
            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="pl-10"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="bg-muted/40 p-4 rounded-lg">
                  <h3 className="font-medium text-sm">What happens next?</h3>
                  <ol className="mt-2 text-sm space-y-2 text-muted-foreground">
                    <li>1. Check your email inbox for the reset link</li>
                    <li>2. Click the link in the email to reset your password</li>
                    <li>3. Create a new secure password</li>
                    <li>4. Log in with your new password</li>
                  </ol>
                </div>
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push('/auth/login')}
                >
                  Back to Login
                </Button>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center w-full">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
            
            <div className="text-sm text-center w-full">
              Dont have an account?{" "}
              <Link href="/auth/register" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 