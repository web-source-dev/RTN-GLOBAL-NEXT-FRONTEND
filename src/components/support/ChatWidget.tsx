"use client"

import React, { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import LiveChat from './LiveChat'

/**
 * ChatWidget - A professional floating chat widget
 * 
 * This component shows a floating chat button that opens the LiveChat
 * component with a smooth animation when clicked.
 */
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle opening the chat
  const openChat = () => {
    setIsAnimating(true)
    setIsOpen(true)
  }

  // Handle closing the chat with animation
  const closeChat = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsAnimating(false)
    }, 300) // Match animation duration
  }

  // After animation completes
  useEffect(() => {
    if (isOpen && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen, isAnimating])

  // Only render on client-side to avoid hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      {/* Chat button */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <Button
          onClick={openChat}
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all bg-primary"
          aria-label="Open chat support"
        >
          <MessageCircle size={24} />
        </Button>
      </div>

      {/* Chat window container */}
      <div 
        className={`fixed bottom-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          !isOpen ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{ 
          width: 'min(380px, 90vw)',
          height: 'min(600px, 90vh)',
          margin: '1rem',
          transformOrigin: 'bottom right',
          boxShadow: isOpen ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
        {isOpen && (
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-white">
            {/* Close button */}
            <div className="absolute top-4 right-4 z-10">
              <Button
                onClick={closeChat}
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                aria-label="Close chat"
              >
                <X size={18} />
              </Button>
            </div>
            
            {/* Live chat component with adjusted sizing */}
            <LiveChat 
              onClose={closeChat} 
              customStyles={{
                height: '100%',
                width: '100%',
                maxWidth: '100%',
                margin: 0,
                borderRadius: 0,
                boxShadow: 'none',
                border: 'none'
              }}
            />
          </div>
        )}
      </div>
      
      {/* Backdrop for mobile screens */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ease-in-out"
          onClick={closeChat}
          aria-hidden="true"
        />
      )}
    </>
  )
} 