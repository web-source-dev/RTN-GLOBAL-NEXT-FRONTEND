"use client"

import React, { useState, useEffect } from 'react'
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
  Building, 
  Phone,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  User,
  Timer
} from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useToast } from '@/components/ui/use-toast'

export default function RegisterPage() {
  const { register } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  
  // Step management
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: ''
  })
  
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  // State for delayed button enable
  const [submitEnabled, setSubmitEnabled] = useState(false)
  const [countdown, setCountdown] = useState(3)
  
  // Effect to manage the countdown timer when reaching step 3
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (currentStep === 3 && !submitEnabled) {
      // Start with 3 second countdown
      setCountdown(5);
      
      // Create interval to count down
      timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setSubmitEnabled(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (currentStep !== 3) {
      // Reset state when not on step 3
      setSubmitEnabled(false)
      setCountdown(5)
    }
    
    // Clean up timer
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [currentStep, submitEnabled]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const validateStep = (step: number) => {
    setError('')
    
    if (step === 1) {
      // Validate first and last name and email
      if (!formData.firstName || !formData.lastName || !formData.email) {
        setError('All fields are required')
        return false
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address')
        return false
      }
      
      return true
    }
    
    if (step === 2) {
      // Password validation
      if (!formData.password || !formData.confirmPassword) {
        setError('Both password fields are required')
        return false
      }
      
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      if (!passwordRegex.test(formData.password)) {
        setError('Password must be at least 8 characters and include uppercase, lowercase, numbers, and special characters')
        return false
      }
      
      // Password confirmation
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match')
        return false
      }
      
      return true
    }
    
    return true
  }
  
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1)
      
      if (currentStep === 2) {
        // Moving to step 3, reset submit enabled
        setSubmitEnabled(false)
        setCountdown(3)
      }
    }
  }
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }
  
  const validateForm = () => {
    // Reset error
    setError('')
    
    // Required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All required fields must be filled')
      return false
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!passwordRegex.test(formData.password)) {
      setError('Password must be at least 8 characters and include uppercase, lowercase, numbers, and special characters')
      return false
    }
    
    // Password confirmation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return false
    }
    
    return true
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    try {
      // Call the auth context register function
      await register(
        formData.firstName,
        formData.lastName,
        formData.email, 
        formData.password,
        formData.company,
        formData.phone
      )
      
      // Show success message
      setSuccess(true)
      toast({
        title: "Registration successful!",
        description: "Please check your email to verify your account.",
      })
      
      // Redirect to verification page
      setTimeout(() => {
        router.push(`/auth/verify-email?email=${encodeURIComponent(formData.email)}`)
      }, 2000)
    } catch (error: unknown) {
      console.error('Registration error:', error)
      let errorMessage = 'Registration failed. Please try again.'
      
      if (error && typeof error === 'object' && 'response' in error && 
          error.response && typeof error.response === 'object' && 
          'data' in error.response && error.response.data && 
          typeof error.response.data === 'object' && 
          'message' in error.response.data && 
          typeof error.response.data.message === 'string') {
        errorMessage = error.response.data.message
      }
      
      setError(errorMessage)
      
      toast({
        title: "Registration failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleGoogleSignup = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`
  }
  
  const handleFacebookSignup = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/facebook`
  }
  
  // Step indicators
  const renderStepIndicators = () => {
    return (
      <div className="flex items-center justify-center space-x-2 mb-6">
        {[...Array(totalSteps)].map((_, idx) => (
          <div key={idx} className="flex items-center">
            <div 
              className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors duration-300 ${
                idx + 1 === currentStep
                  ? 'bg-primary text-primary-foreground'
                  : idx + 1 < currentStep
                    ? 'bg-primary/20 text-primary'
                    : 'bg-muted text-muted-foreground'
              }`}
            >
              {idx + 1 < currentStep ? <CheckCircle className="h-4 w-4" /> : idx + 1}
            </div>
            {idx < totalSteps - 1 && (
              <div className={`w-10 h-1 ${idx + 1 < currentStep ? 'bg-primary/30' : 'bg-muted'}`}></div>
            )}
          </div>
        ))}
      </div>
    )
  }
  
  // Step 1: Basic Information
  const renderStep1 = () => {
    return (
      <>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                disabled={isLoading}
                className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                disabled={isLoading}
                className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
              disabled={isLoading}
              required
            />
          </div>
        </div>
        
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-card px-3 text-xs text-muted-foreground">
              OR CONTINUE WITH
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            type="button" 
            variant="outline"
            onClick={handleGoogleSignup}
            disabled={isLoading}
            className="transition-all duration-200 hover:bg-muted/30"
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
            onClick={handleFacebookSignup}
            disabled={isLoading}
            className="transition-all duration-200 hover:bg-muted/30"
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
        
        <Button 
          type="button" 
          className="w-full h-11 mt-4 font-medium transition-all duration-200 shadow-sm hover:shadow-md"
          disabled={isLoading}
          onClick={nextStep}
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </>
    )
  }
  
  // Step 2: Password Creation
  const renderStep2 = () => {
    return (
      <>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">Password *</Label>
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
              disabled={isLoading}
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
          <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password *</Label>
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
              disabled={isLoading}
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
        
        <div className="flex space-x-3 mt-4">
          <Button 
            type="button" 
            variant="outline"
            className="flex-1 h-11 font-medium transition-all duration-200"
            disabled={isLoading}
            onClick={prevStep}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <Button 
            type="button" 
            className="flex-1 h-11 font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            disabled={isLoading}
            onClick={nextStep}
          >
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </>
    )
  }
  
  // Step 3: Additional Information
  const renderStep3 = () => {
    return (
      <>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium">Company <span className="text-muted-foreground text-xs">(Optional)</span></Label>
          <div className="relative group">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">Phone Number <span className="text-muted-foreground text-xs">(Optional)</span></Label>
          <div className="relative group">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (123) 456-7890"
              className="pl-10 h-11 transition-all border-muted/50 focus:border-primary"
              disabled={isLoading}
            />
          </div>
        </div>
        
        {!submitEnabled && (
          <div className="flex items-center justify-center space-x-2 mt-4 py-3 px-4 bg-muted/40 rounded-lg border border-muted/60 animate-pulse">
            <Timer className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Submit enabled in <span className="font-medium">{countdown}</span> seconds...
            </p>
          </div>
        )}
        
        <div className="flex space-x-3 mt-4">
          <Button 
            type="button" 
            variant="outline"
            className="flex-1 h-11 font-medium transition-all duration-200"
            disabled={isLoading}
            onClick={prevStep}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <Button 
            type="submit" 
            className="flex-1 h-11 font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            disabled={isLoading || !submitEnabled}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Account...
              </>
            ) : (
              <>
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </>
    )
  }
  
  // Render current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1()
      case 2:
        return renderStep2()
      case 3:
        return renderStep3()
      default:
        return renderStep1()
    }
  }
  
  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Information"
      case 2:
        return "Create Password"
      case 3:
        return "Additional Details"
      default:
        return "Sign Up"
    }
  }
  
  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Enter your basic information to get started"
      case 2:
        return "Create a secure password for your account"
      case 3:
        return "Optional information to complete your profile"
      default:
        return "Enter your information to create an account"
    }
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl animate-in fade-in duration-500">
      {/* Left column with image - visible on larger screens */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-1/2 transition-all">
        <div className="relative w-full max-w-md aspect-square">
          <Image 
            src="/images/auth/signup.svg" 
            alt="Registration illustration" 
            fill
            priority
            className="object-contain drop-shadow-md transition-transform hover:scale-[1.02] duration-700"
          />
        </div>
      </div>
      
      {/* Right column with registration form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <Card className="w-full max-w-md mx-auto shadow-xl border-muted/30 overflow-hidden backdrop-blur-sm bg-card/95 transition-all duration-300 hover:shadow-primary/5">
          {/* Mobile header - only visible on small screens */}
          <div className="lg:hidden text-center pt-8 px-6">
            <h1 className="text-3xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Join RTN Global</h1>
            <p className="text-muted-foreground mt-2 text-base">Create an account to get started</p>
          </div>
          
          <CardHeader className="space-y-1.5 pb-6">
            {renderStepIndicators()}
            <CardTitle className="text-2xl font-bold">{getStepTitle()}</CardTitle>
            <CardDescription className="text-base">{getStepDescription()}</CardDescription>
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
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>Registration successful! Please check your email to verify your account.</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {renderCurrentStep()}
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4 pt-6 pb-8">
            <div className="text-sm text-center w-full">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors">
                Sign In
              </Link>
            </div>
            
            <Separator />
            
            <p className="text-xs text-center text-muted-foreground">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:text-primary/80 hover:underline transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:text-primary/80 hover:underline transition-colors">
                Privacy Policy
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 