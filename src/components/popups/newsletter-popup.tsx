"use client";

import { useState } from "react";
import { Mail, X, Check, ArrowRight, Info } from "lucide-react";
import { usePopups } from "./popup-provider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { PopupsAPI, handleApiError } from "@/lib/api/api-provider";

const NewsletterPopup = () => {
  const { showNewsletter, dismissNewsletter } = usePopups();
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Simple email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error
    setFormError("");
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      setFormError("Please enter a valid email address");
      return;
    }
    
    // In a real application, you would send this data to your API
    setIsSubmitting(true);
    
    try {
      // Call the API to save newsletter subscription
      await PopupsAPI.saveNewsletter({
        email,
        name,
        company,
        marketingConsent
      });
      
      // Store in localStorage that user has subscribed
      localStorage.setItem("newsletter-subscribed", JSON.stringify({
        email,
        name,
        company,
        marketingConsent,
        timestamp: Date.now()
      }));
      
      // Show success state
      setSubmitted(true);
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        dismissNewsletter();
      }, 3000);
    } catch (error) {
      setFormError(handleApiError(error, "Failed to subscribe. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Close popup handler
  const handleClose = () => {
    dismissNewsletter();
  };

  return (
    <Dialog open={showNewsletter} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px] p-0 rounded-xl overflow-hidden bg-white">
        <div className="grid sm:grid-cols-5 grid-cols-1">
          {/* Image/Graphic Area - Left Side (Hidden on mobile) */}
          <div className="sm:col-span-2 hidden sm:block bg-gradient-to-br from-primary/80 to-primary h-full relative">
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <Mail className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-sm text-center opacity-90">
                Get the latest industry insights, trends, and agency news.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-white/10" />
            </div>
          </div>
          
          {/* Form Area - Right Side - Explicitly set white background */}
          <div className="sm:col-span-3 p-6 bg-white">
            <div className="absolute top-3 right-3">
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl">
                {submitted ? "Thank You!" : "Subscribe to Our Newsletter"}
              </DialogTitle>
              <DialogDescription>
                {submitted 
                  ? "You're now subscribed to our newsletter." 
                  : "Stay informed with our latest insights, case studies, and agency news."}
              </DialogDescription>
            </DialogHeader>
            
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  We&apos;ll be in touch with valuable content tailored to your interests.
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
                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div className="flex items-start space-x-2 mt-4">
                  <Checkbox
                    id="marketing"
                    checked={marketingConsent}
                    onCheckedChange={(checked) => 
                      setMarketingConsent(checked as boolean)
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="marketing"
                      className="text-sm font-normal leading-tight"
                    >
                      I agree to receive marketing communications
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      You can unsubscribe at any time by clicking the link in the footer of our emails.
                    </p>
                  </div>
                </div>
                
                {formError && (
                  <div className="rounded-md bg-red-50 p-3 flex items-center gap-2 text-sm text-red-600">
                    <Info className="h-4 w-4" />
                    {formError}
                  </div>
                )}
                
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
                      <span className="flex items-center gap-2">
                        Subscribe <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup; 