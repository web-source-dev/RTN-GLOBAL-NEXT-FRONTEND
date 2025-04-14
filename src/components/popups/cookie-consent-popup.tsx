"use client";

import { useState } from "react";
import { Cookie, Shield, Lock, ChevronDown, ChevronUp } from "lucide-react";
import { usePopups } from "./popup-provider";
import { Button } from "../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { PopupsAPI } from "@/lib/api/api-provider";

// Type for cookie category
interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  checked: boolean;
}

const CookieConsentPopup = () => {
  const { showCookieConsent, dismissCookieConsent, acceptCookies } = usePopups();
  const [showDetails, setShowDetails] = useState(false);
  
  // States for different cookie categories
  const [cookieCategories, setCookieCategories] = useState<CookieCategory[]>([
    {
      id: "necessary",
      name: "Strictly Necessary",
      description: "These cookies are essential for the website to function properly and cannot be disabled.",
      required: true,
      checked: true,
    },
    {
      id: "preferences",
      name: "Preferences",
      description: "These cookies allow the website to remember choices you make and provide enhanced functionality.",
      required: false,
      checked: false,
    },
    {
      id: "analytics",
      name: "Analytics",
      description: "These cookies help us understand how visitors interact with our website.",
      required: false,
      checked: false,
    },
    {
      id: "marketing",
      name: "Marketing",
      description: "These cookies are used to track visitors across websites to display relevant advertisements.",
      required: false,
      checked: false,
    },
  ]);

  // Toggle cookie category
  const toggleCategory = (id: string) => {
    setCookieCategories(
      cookieCategories.map((category) =>
        category.id === id && !category.required
          ? { ...category, checked: !category.checked }
          : category
      )
    );
  };

  // Accept all cookies
  const handleAcceptAll = async () => {
    const allAccepted = {
      necessary: true,
      preferences: true,
      analytics: true, 
      marketing: true
    };
    
    setCookieCategories(cookieCategories.map(cat => ({
      ...cat,
      checked: true
    })));
    
    try {
      // Save cookie preferences to API
      await PopupsAPI.saveCookieConsent(allAccepted);
      
      // Set cookie consent in localStorage
      localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted));
      
      // Close the popup
      acceptCookies();
    } catch (error) {
      console.error("Failed to save cookie preferences:", error);
      // Still close the popup even if API call fails
      acceptCookies();
    }
  };

  // Accept selected cookies only
  const handleAcceptSelected = async () => {
    const preferences = {
      necessary: true, // Always necessary
      preferences: cookieCategories.find(c => c.id === 'preferences')?.checked || false,
      analytics: cookieCategories.find(c => c.id === 'analytics')?.checked || false,
      marketing: cookieCategories.find(c => c.id === 'marketing')?.checked || false
    };
    
    try {
      // Save cookie preferences to API
      await PopupsAPI.saveCookieConsent(preferences);
      
      // Set cookie consent in localStorage
      localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
      
      // Close the popup
      acceptCookies();
    } catch (error) {
      console.error("Failed to save cookie preferences:", error);
      // Still close the popup even if API call fails
      acceptCookies();
    }
  };

  // Reject all optional cookies
  const handleRejectAll = () => {
    setCookieCategories(
      cookieCategories.map((category) =>
        category.required
          ? { ...category, checked: true }
          : { ...category, checked: false }
      )
    );
    // Save cookie preferences in localStorage (only necessary cookies)
    const preferences = cookieCategories.reduce(
      (acc, { id, required }) => ({
        ...acc,
        [id]: required,
      }),
      {}
    );
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    
    // Close the popup
    dismissCookieConsent();
  };

  if (!showCookieConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
      {/* Main cookie consent bar */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-medium">Cookie Preferences</h3>
              <p className="text-sm text-gray-500">
                We use cookies to enhance your experience, analyze site traffic, and for marketing purposes.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRejectAll}
            >
              Reject All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide Options" : "More Options"}
              {showDetails ? <ChevronDown className="ml-1 h-4 w-4" /> : <ChevronUp className="ml-1 h-4 w-4" />}
            </Button>
            <Button
              size="sm"
              onClick={handleAcceptAll}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
      
      {/* Detailed cookie options (expandable) */}
      {showDetails && (
        <div className="container mx-auto px-4 pb-4 border-t border-gray-100 pt-3">
          <div className="max-h-[40vh] overflow-y-auto bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500 mb-3">Select which cookies you want to accept:</p>
            <Accordion type="single" collapsible className="w-full">
              {cookieCategories.map((category) => (
                <AccordionItem key={category.id} value={category.id}>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      {category.id === "necessary" && <Shield className="h-4 w-4 text-primary" />}
                      {category.id === "preferences" && <Cookie className="h-4 w-4 text-primary" />}
                      {category.id === "analytics" && <Lock className="h-4 w-4 text-primary" />}
                      {category.id === "marketing" && <Cookie className="h-4 w-4 text-primary" />}
                      <span className="font-medium">{category.name}</span>
                      {category.required && (
                        <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs">
                          Required
                        </span>
                      )}
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        checked={category.checked}
                        onChange={() => toggleCategory(category.id)}
                        disabled={category.required}
                        className="peer sr-only"
                      />
                      <div className="h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"></div>
                    </label>
                  </div>
                  <AccordionTrigger className="py-0 text-xs text-muted-foreground">
                    Details
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {category.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="flex justify-end mt-4">
              <Button
                onClick={handleAcceptSelected}
                size="sm"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsentPopup; 