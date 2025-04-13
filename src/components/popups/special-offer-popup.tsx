"use client";

import { useState, useEffect, useCallback } from "react";
import { Gift, X, ArrowRight, Check } from "lucide-react";
import { usePopups } from "./popup-provider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { PopupsAPI, handleApiError } from "@/lib/api/api-provider";

const SpecialOfferPopup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(false);
  const [formError, setFormError] = useState("");
  
  // Check if user has seen this popup in the last 24 hours
  // and set up exit intent detection
  useEffect(() => {
    const checkPopupStatus = () => {
      const popupData = localStorage.getItem("special-offer-displayed");
      
      if (popupData) {
        try {
          const { timestamp, duration } = JSON.parse(popupData);
          // If not expired, don't set up exit intent
          if (Date.now() <= timestamp + duration) {
            return;
          }
        } catch (e) {
          // Continue to set up exit intent if there's an error
        }
      }
      
      // Set up exit intent detection
      let isExitIntentSet = false;
      
      const handleExitIntent = (e: MouseEvent) => {
        // Only trigger when mouse moves to the top of the page
        if (e.clientY <= 20 && !isExitIntentSet) {
          isExitIntentSet = true;
          setShow(true);
          
          // Remove listener after triggering
          document.removeEventListener('mousemove', handleExitIntent);
        }
      };
      
      // Add exit intent detection
      document.addEventListener('mousemove', handleExitIntent);
      
      // Cleanup
      return () => {
        document.removeEventListener('mousemove', handleExitIntent);
      };
    };
    
    // Only set up on client
    if (typeof window !== 'undefined') {
      checkPopupStatus();
    }
  }, []);
  
  const handleClose = () => {
    setShow(false);
    
    // Set in localStorage that user has seen this popup for 24 hours
    const item = {
      timestamp: Date.now(),
      duration: 24 * 60 * 60 * 1000, // 24 hours
    };
    localStorage.setItem("special-offer-displayed", JSON.stringify(item));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    
    try {
      // Call the API to save the special offer signup
      await PopupsAPI.saveSpecialOffer({
        name,
        email
      });
      
      // Store in localStorage that user has claimed the offer
      localStorage.setItem("special-offer-claimed", JSON.stringify({
        email,
        name,
        timestamp: Date.now()
      }));
      
      // Show success state
      setSubmitted(true);
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      setFormError(handleApiError(error, "Failed to claim your offer. Please try again."));
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Dialog open={show} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] p-0 rounded-xl overflow-hidden bg-white">
        <div className="relative">
          {/* Remove transparent background patterns */}
          {/* <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 z-0"
            style={{
              backgroundImage: "radial-gradient(circle at 10px 10px, rgba(0,0,0,0.05) 2px, transparent 0)",
              backgroundSize: "20px 20px"
            }}
          /> */}
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Content - Make sure content has solid background */}
          <div className="relative z-1 p-6 bg-white">
            <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-primary/10">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            
            <DialogHeader className="text-center mb-4">
              <DialogTitle className="text-2xl font-bold">
                {submitted ? "Offer Claimed!" : "Wait! Before You Go..."}
              </DialogTitle>
              <DialogDescription>
                {submitted 
                  ? "Your special discount code is on its way to your inbox." 
                  : "Get 15% off your first project when you sign up today."}
              </DialogDescription>
            </DialogHeader>
            
            {formError && (
              <div className="bg-red-50 p-3 rounded-md text-red-500 text-sm mb-4">
                {formError}
              </div>
            )}
            
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-500 mb-4">
                  We'll send your discount code to <strong>{email}</strong> within the next few minutes.
                </p>
                <Button
                  onClick={handleClose}
                  className="mt-2"
                >
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <Input
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                    required
                  />
                  
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="bg-primary/5 rounded-lg p-4 my-4">
                  <div className="font-medium mb-1">Exclusive Exit Offer:</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      15% discount on your first project
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      Free 30-minute consultation
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      Priority support
                    </li>
                  </ul>
                </div>
                
                <DialogFooter>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                            fill="none" 
                          />
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Claim My Discount <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </DialogFooter>
                
                <p className="text-xs text-center text-gray-500 mt-2">
                  By claiming this offer, you agree to receive marketing emails from us. You can unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpecialOfferPopup; 