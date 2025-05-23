"use client";

import { createContext, useContext, useEffect, useState } from "react";
import CookieConsentPopup from "./cookie-consent-popup";
import NewsletterPopup from "./newsletter-popup";
import SpecialOfferPopup from "./special-offer-popup";
import ReviewPopup from "./review-popup";

// Types for our context
interface PopupContextType {
  showCookieConsent: boolean;
  showNewsletter: boolean;
  dismissCookieConsent: () => void;
  dismissNewsletter: () => void;
  acceptCookies: () => void;
}

// Default context values
const defaultContextValue: PopupContextType = {
  showCookieConsent: false,
  showNewsletter: false,
  dismissCookieConsent: () => {},
  dismissNewsletter: () => {},
  acceptCookies: () => {},
};

// Create context
const PopupContext = createContext<PopupContextType>(defaultContextValue);

// Hook to use the popup context
export const usePopups = () => useContext(PopupContext);

interface PopupProviderProps {
  children: React.ReactNode;
}

export function PopupProvider({ children }: PopupProviderProps) {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  
  // Helper to check if a localStorage item is expired
  const isExpired = (key: string): boolean => {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return true;
    
    try {
      const { timestamp, duration } = JSON.parse(storedValue);
      return Date.now() > timestamp + duration;
    } catch (e) {
      console.error('Error parsing localStorage item:', e);
      return true;
    }
  };
  
  // Set localStorage with expiration
  const setWithExpiry = (key: string, duration: number) => {
    const item = {
      timestamp: Date.now(),
      duration,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  useEffect(() => {
    // Check for cookie consent (expires after 30 days)
    const cookieConsentExpired = isExpired('cookie-consent-displayed');
    
    // Check for newsletter popup (expires after 24 hours)
    const newsletterExpired = isExpired('newsletter-displayed');
    
    // Show cookie consent after 20 seconds if needed
    if (cookieConsentExpired) {
      const cookieTimer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 20 * 1000); // 20 seconds delay
      
      return () => clearTimeout(cookieTimer);
    }
    
    // Show newsletter after 5 minutes if not recently shown
    if (newsletterExpired) {
      const newsletterTimer = setTimeout(() => {
        // Only show the newsletter if cookie consent isn't showing
        if (!showCookieConsent) {
          setShowNewsletter(true);
          setWithExpiry('newsletter-displayed', 24 * 60 * 60 * 1000); // 24 hours
        }
      }, 5 * 60 * 1000); // 5 minutes
      
      return () => clearTimeout(newsletterTimer);
    }
  }, [showCookieConsent]);

  // Functions to manage popups
  const dismissCookieConsent = () => {
    setShowCookieConsent(false);
    setWithExpiry('cookie-consent-displayed', 30 * 24 * 60 * 60 * 1000); // 30 days
  };
  
  const dismissNewsletter = () => {
    setShowNewsletter(false);
  };
  
  const acceptCookies = () => {
    dismissCookieConsent();
    // Additional cookie acceptance logic would go here
  };

  return (
    <PopupContext.Provider
      value={{
        showCookieConsent,
        showNewsletter,
        dismissCookieConsent,
        dismissNewsletter,
        acceptCookies,
      }}
    >
      {children}
      {showCookieConsent && <CookieConsentPopup />}
      {showNewsletter && <NewsletterPopup />}
      <SpecialOfferPopup />
      <ReviewPopup />
    </PopupContext.Provider>
  );
} 