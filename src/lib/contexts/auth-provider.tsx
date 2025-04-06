"use client"

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react'
import { AuthAPI } from '@/lib/api/api-provider'

// User interface to type-check user data
interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  role: string
  isEmailVerified: boolean
  avatar?: string
  preferences?: {
    theme: 'light' | 'dark' | 'system'
    emailNotifications: boolean
    language: string
  }
}

// Auth context interface
interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<any>
  register: (firstName: string, lastName: string, email: string, password: string, company?: string, phone?: string) => Promise<void>
  logout: () => Promise<void>
  forgotPassword: (email: string) => Promise<void>
  resetPassword: (token: string, password: string) => Promise<void>
  validateResetToken: (token: string) => Promise<void>
  verifyEmail: (email: string, code: string) => Promise<void>
  resendVerificationCode: (email: string) => Promise<any>
  updateProfile: (profileData: Partial<User>) => Promise<void>
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>
  deleteAccount: () => Promise<void>
}

// Create auth context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => null,
  register: async () => {},
  logout: async () => {},
  forgotPassword: async () => {},
  resetPassword: async () => {},
  validateResetToken: async () => {},
  verifyEmail: async () => {},
  resendVerificationCode: async () => null,
  updateProfile: async () => {},
  changePassword: async () => {},
  deleteAccount: async () => {},
})

// Auth provider props
interface AuthProviderProps {
  children: ReactNode
}

// Create auth provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  // Initialize auth state by checking for existing user session
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await AuthAPI.getMe()
        
        if (response.data) {
          setUser(response.data)
          setIsAuthenticated(true)
        }
      } catch (error) {
        // If request fails, user is not authenticated
        setUser(null)
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }
    
    checkAuthStatus()
  }, [])
  
  // Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await AuthAPI.login(email, password)
      
      // Check for 2FA requirements
      if (response.data.requireTwoFactor) {
        return {
          requiresTwoFactor: true,
          email
        }
      }
      
      if (response.data.user) {
        setUser(response.data.user)
        setIsAuthenticated(true)
      }
      
      return response.data
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Login failed. Please check your network connection.')
    }
  }
  
  // Register function
  const register = async (
    firstName: string, 
    lastName: string, 
    email: string, 
    password: string,
    company?: string,
    phone?: string
  ) => {
    try {
      const userData = { firstName, lastName, email, password, company, phone }
      await AuthAPI.register(userData)
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Registration failed. Please check your network connection.')
    }
  }
  
  // Logout function
  const logout = async () => {
    try {
      await AuthAPI.logout()
      
      setUser(null)
      setIsAuthenticated(false)
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Logout failed. Please check your network connection.')
    }
  }
  
  // Forgot password function
  const forgotPassword = async (email: string) => {
    try {
      await AuthAPI.forgotPassword(email)
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Failed to send reset email. Please check your network connection.')
    }
  }
  
  // Reset password function
  const resetPassword = async (token: string, password: string) => {
    try {
      await AuthAPI.resetPassword(token, password)
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Password reset failed. Please check your network connection.')
    }
  }
  
  // Validate reset token function
  const validateResetToken = async (token: string) => {
    try {
      await AuthAPI.validateResetToken(token)
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Invalid or expired reset token.')
    }
  }
  
  // Verify email function
  const verifyEmail = async (email: string, code: string) => {
    try {
      const response = await AuthAPI.verifyEmail(email, code)
      
      if (response.data.user) {
        setUser(response.data.user)
        setIsAuthenticated(true)
      }
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Email verification failed. Please check your network connection.')
    }
  }
  
  // Resend verification code function
  const resendVerificationCode = async (email: string) => {
    try {
      const response = await AuthAPI.resendVerificationCode(email)
      
      return response.data
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Failed to resend verification code. Please check your network connection.')
    }
  }
  
  // Update profile function
  const updateProfile = async (profileData: Partial<User>) => {
    try {
      const response = await AuthAPI.updateProfile(profileData)
      
      setUser(response.data)
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Profile update failed. Please check your network connection.')
    }
  }
  
  // Change password function
  const changePassword = async (currentPassword: string, newPassword: string) => {
    try {
      await AuthAPI.changePassword(currentPassword, newPassword)
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Password change failed. Please check your network connection.')
    }
  }
  
  // Delete account function
  const deleteAccount = async () => {
    try {
      await AuthAPI.deleteAccount()
      
      setUser(null)
      setIsAuthenticated(false)
    } catch (error: Error | any) {
      if (error.response?.data) {
        throw error
      }
      throw new Error('Account deletion failed. Please check your network connection.')
    }
  }
  
  // Define the context value
  const contextValue = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    validateResetToken,
    verifyEmail,
    resendVerificationCode,
    updateProfile,
    changePassword,
    deleteAccount,
  }
  
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext) 