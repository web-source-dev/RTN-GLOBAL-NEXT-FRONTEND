"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/contexts/auth-provider'
import { 
  Loader2, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertCircle,
  ShieldCheck,
  LockKeyhole,
  Key
} from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useToast } from '@/components/ui/use-toast'
import { AuthAPI } from '@/lib/api/api-provider'

// Add this interface near the top of the file, after the imports
interface ApiError {
  response?: {
    data?: {
      message?: string;
      accountLocked?: boolean;
      lockExpires?: string;
      requireVerification?: boolean;
    };
  };
  message?: string;
}

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  
  // Form state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  // Two-factor authentication state
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [twoFactorCode, setTwoFactorCode] = useState('')
  const [twoFactorError, setTwoFactorError] = useState('')
  const [isTwoFactorLoading, setIsTwoFactorLoading] = useState(false)
  const [showBackupCode, setShowBackupCode] = useState(false)
  const [backupCode, setBackupCode] = useState('')
  
  // Account locked state
  const [isAccountLocked, setIsAccountLocked] = useState(false)
  const [lockExpires, setLockExpires] = useState<Date | null>(null)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate inputs
    if (!email) {
      setError('Email is required')
      return
    }
    
    if (!password) {
      setError('Password is required')
      return
    }
    
    setError('')
    setIsLoading(true)
    
    try {
      // Call the auth context login function
      const response = await login(email, password)
      
      // Handle response from login function
      if (response && response.requiresTwoFactor) {
        setShowTwoFactor(true)
        setIsLoading(false)
        
        toast({
          title: "Verification required",
          description: "Please enter the verification code sent to your email.",
        })
        return
      }
      
      if (response && response.accountLocked) {
        setIsAccountLocked(true)
        if (response.lockExpires) {
          setLockExpires(new Date(response.lockExpires))
        }
        setIsLoading(false)
        
        toast({
          title: "Account locked",
          description: "Your account has been temporarily locked due to multiple failed login attempts.",
          variant: "destructive",
        })
        return
      }
      
      // If no two factor needed, show success message
      toast({
        title: "Login successful",
        description: "Welcome back!",
      })
      
      // Redirect to dashboard after a brief delay
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    } catch (error: unknown) {
      console.error('Login failed:', error)
      const apiError = error as ApiError
      
      // Check for account locked
      if (apiError.response?.data?.accountLocked) {
        setIsAccountLocked(true)
        if (apiError.response?.data?.lockExpires) {
          setLockExpires(new Date(apiError.response.data.lockExpires))
        }
        
        setError('Your account has been temporarily locked due to multiple failed login attempts.')
      } else if (apiError.response?.data?.requireVerification) {
        // Check for email verification required
        setError('Email verification required. Please check your email for verification instructions.')
        
        setTimeout(() => {
          router.push(`/auth/verify-email?email=${encodeURIComponent(email)}`)
        }, 2000)
      } else {
        // Generic error message
        setError(apiError.response?.data?.message || 'Invalid email or password')
      }
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleVerifyTwoFactor = async () => {
    if (!twoFactorCode) {
      setTwoFactorError('Verification code is required')
      return
    }
    
    setTwoFactorError('')
    setIsTwoFactorLoading(true)
    
    try {
      // Use the AuthAPI for two-factor verification
      const response = await AuthAPI.verifyTwoFactor(email, twoFactorCode)
      if (response.data) {

        // Show success message
        toast({
          title: "Login successful",
          description: "Welcome back!",
        })
        
            }
      
      // Redirect to dashboard after a brief delay
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    } catch (error: unknown) {
      console.error('Two-factor verification failed:', error)
      const apiError = error as ApiError
      
      let errorMessage = 'Invalid verification code'
      
      if (apiError.response?.data?.message) {
        errorMessage = apiError.response.data.message
      } else if (apiError.message) {
        errorMessage = apiError.message
      }
      
      setTwoFactorError(errorMessage)
      
      toast({
        title: "Verification failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsTwoFactorLoading(false)
    }
  }
  
  const handleVerifyBackupCode = async () => {
    if (!backupCode) {
      setTwoFactorError('Backup code is required')
      return
    }
    
    setTwoFactorError('')
    setIsTwoFactorLoading(true)
    
    try {
      // Use the AuthAPI for backup code verification
      await AuthAPI.verifyBackupCode(email, backupCode)
        
      // Show success message
      toast({
        title: "Login successful",
        description: "Welcome back!",
      })
      
      // Redirect to dashboard after a brief delay
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    } catch (error: unknown) {
      console.error('Backup code verification failed:', error)
      const apiError = error as ApiError
      
      let errorMessage = 'Invalid backup code'
      
      if (apiError.response?.data?.message) {
        errorMessage = apiError.response.data.message
      } else if (apiError.message) {
        errorMessage = apiError.message
      }
      
      setTwoFactorError(errorMessage)
      
      toast({
        title: "Verification failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsTwoFactorLoading(false)
    }
  }
  
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`
  }
  
  const handleFacebookLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/facebook`
  }
  
  const formatTimeRemaining = (lockExpires: Date) => {
    const now = new Date()
    const diff = lockExpires.getTime() - now.getTime()
    
    if (diff <= 0) {
      return '0 minutes'
    }
    
    const minutes = Math.ceil(diff / (1000 * 60))
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
      {/* Left column with image - visible on larger screens */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-1/2">
        <div className="relative w-full max-w-md aspect-square">
          <Image 
            src="/images/auth/login.svg" 
            alt="Login illustration" 
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your RTN Global account</p>
        </div>
      </div>
      
      {/* Right column with login form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <Card className="w-full max-w-md mx-auto shadow-lg border-muted/30">
          {/* Mobile header - only visible on small screens */}
          <div className="lg:hidden text-center pt-6 px-6">
            <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
            <p className="text-muted-foreground mt-1 text-sm">Sign in to your RTN Global account</p>
          </div>
          
          <CardHeader>
            <CardTitle className="text-xl">Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {isAccountLocked && (
              <Alert variant="destructive" className="mb-6 border-destructive/30 bg-destructive/10">
                <LockKeyhole className="h-4 w-4" />
                <AlertDescription>
                  Your account has been temporarily locked due to multiple failed login attempts.
                  {lockExpires && (
                    <> Please try again in {formatTimeRemaining(lockExpires)}.</>
                  )}
                </AlertDescription>
              </Alert>
            )}
            
            {!showTwoFactor ? (
              // Primary login form
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading || isAccountLocked}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading || isAccountLocked}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading || isAccountLocked}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
                
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-card px-2 text-xs text-muted-foreground">
                      OR CONTINUE WITH
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleGoogleLogin}
                    disabled={isLoading || isAccountLocked}
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                        fill="currentColor"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleFacebookLogin}
                    disabled={isLoading || isAccountLocked}
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
                        fill="currentColor"
                      />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </form>
            ) : (
              // Two-factor authentication form
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg flex items-start space-x-4">
                  <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication Required</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {!showBackupCode 
                        ? "We&apos;ve sent a verification code to your email address. Please enter it below to complete your login."
                        : "Enter one of your backup codes to verify your identity and access your account."
                      }
                    </p>
                  </div>
                </div>
                
                {twoFactorError && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{twoFactorError}</AlertDescription>
                  </Alert>
                )}
                
                {!showBackupCode ? (
                  // Regular 2FA code form
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="twoFactorCode">Verification Code</Label>
                      <Input
                        id="twoFactorCode"
                        type="text"
                        placeholder="Enter 6-digit code"
                        value={twoFactorCode}
                        onChange={(e) => setTwoFactorCode(e.target.value.replace(/\D/g, ''))}
                        disabled={isTwoFactorLoading}
                        className="text-center tracking-[0.5em] font-mono"
                        maxLength={6}
                        required
                      />
                    </div>
                    
                    <Button
                      type="button"
                      className="w-full"
                      onClick={handleVerifyTwoFactor}
                      disabled={isTwoFactorLoading}
                    >
                      {isTwoFactorLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        "Verify and Login"
                      )}
                    </Button>
                    
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setShowBackupCode(true)}
                        className="text-sm text-primary hover:underline"
                      >
                        Use backup code instead
                      </button>
                    </div>
                  </>
                ) : (
                  // Backup code form
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="backupCode">Backup Code</Label>
                      <div className="relative">
                        <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="backupCode"
                          type="text"
                          placeholder="Enter backup code"
                          value={backupCode}
                          onChange={(e) => setBackupCode(e.target.value)}
                          disabled={isTwoFactorLoading}
                          className="pl-10 font-mono"
                          required
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Enter one of your backup codes exactly as it appears, including any hyphens.
                      </p>
                    </div>
                    
                    <Button
                      type="button"
                      className="w-full"
                      onClick={handleVerifyBackupCode}
                      disabled={isTwoFactorLoading}
                    >
                      {isTwoFactorLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        "Verify with Backup Code"
                      )}
                    </Button>
                    
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setShowBackupCode(false)}
                        className="text-sm text-primary hover:underline"
                      >
                        Use verification code instead
                      </button>
                    </div>
                  </>
                )}
                
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setShowTwoFactor(false)}
                    className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                  >
                    Back to login
                  </button>
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center w-full">
              Dont have an account?{" "}
              <Link href="/auth/register" className="text-primary hover:underline font-medium">
                Sign Up
              </Link>
            </div>
            
            <Separator />
            
            <p className="text-xs text-center text-muted-foreground">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 