"use client";

import { useState } from "react";
import { X, Cookie, Shield, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePopups } from "./popup-provider";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

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
  const handleAcceptAll = () => {
    setCookieCategories(
      cookieCategories.map((category) => ({ ...category, checked: true }))
    );
    // Save cookie preferences in localStorage
    const preferences = cookieCategories.reduce(
      (acc, { id, checked, required }) => ({
        ...acc,
        [id]: required || checked,
      }),
      {}
    );
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    
    // Close the popup
    acceptCookies();
  };

  // Accept only selected cookies
  const handleAcceptSelected = () => {
    // Save cookie preferences in localStorage
    const preferences = cookieCategories.reduce(
      (acc, { id, checked, required }) => ({
        ...acc,
        [id]: required || checked,
      }),
      {}
    );
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    
    // Close the popup
    acceptCookies();
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

  return (
    <Dialog open={showCookieConsent} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[500px] rounded-xl">
        <DialogHeader className="space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-xl">Cookie Preferences</DialogTitle>
          <DialogDescription className="text-center">
            We use cookies to enhance your experience, analyze site traffic, and for marketing purposes.
          </DialogDescription>
        </DialogHeader>
        
        <div className="max-h-[40vh] overflow-y-auto py-2">
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
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            className="sm:w-auto w-full"
            onClick={handleRejectAll}
          >
            Reject All
          </Button>
          <Button
            variant="outline"
            className="sm:w-auto w-full"
            onClick={handleAcceptSelected}
          >
            Accept Selected
          </Button>
          <Button
            className="sm:w-auto w-full"
            onClick={handleAcceptAll}
          >
            Accept All
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsentPopup; 