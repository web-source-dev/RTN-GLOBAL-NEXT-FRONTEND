"use client"

import React, { useEffect } from "react"
import { ThemeProvider } from "@/lib/contexts/theme-provider"
import { AuthProvider } from "@/lib/contexts/auth-provider"
import { registerServiceWorker } from "@/lib/service-worker"
import { PopupProvider } from "@/components/popups/popup-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register service worker
    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker();
    }
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <PopupProvider>
          {children}
        </PopupProvider>
      </AuthProvider>
    </ThemeProvider>
  )
} 