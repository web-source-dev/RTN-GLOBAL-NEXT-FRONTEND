"use client";

import { useState, useEffect } from "react";
import { Star, X, Send,ThumbsUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { PopupsAPI } from "@/lib/api/api-provider";

const ReviewPopup = () => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [visitorType, setVisitorType] = useState<'new' | 'returning' | 'unknown'>('unknown');

  useEffect(() => {
    // Check if this popup was shown in the last 30 days
    const checkPopupStatus = () => {
      const popupData = localStorage.getItem("review-popup-displayed");
      if (popupData) {
        try {
          const { timestamp, duration } = JSON.parse(popupData);
          if (Date.now() <= timestamp + duration) {
            return; // Don't show if not expired
          }
        } catch (e) {
          console.error('Error parsing localStorage item:', e);
          // Continue if there's an error
        }
      }

      // Check if user is returning visitor
      const visitsCount = localStorage.getItem("visits-count");
      const lastVisit = localStorage.getItem("last-visit");
      
      const now = Date.now();
      localStorage.setItem("last-visit", now.toString());
      
      if (visitsCount) {
        try {
          const count = parseInt(visitsCount);
          localStorage.setItem("visits-count", (count + 1).toString());
          
          // If this is at least their 3rd visit and they've visited before in the last 14 days
          if (count >= 2 && lastVisit && now - parseInt(lastVisit) < 14 * 24 * 60 * 60 * 1000) {
            setVisitorType('returning');
            
            // Show popup after 30 seconds for returning visitors
            const timer = setTimeout(() => {
              setShow(true);
              setWithExpiry("review-popup-displayed", 30 * 24 * 60 * 60 * 1000); // 30 days
            }, 30 * 1000); // 30 seconds
            
            return () => clearTimeout(timer);
          }
        } catch (e) {
          console.error('Error parsing localStorage item:', e);
          // Handle error
        }
      } else {
        // First visit
        localStorage.setItem("visits-count", "1");
        setVisitorType('new');
      }
    };
    
    // Only run on client
    if (typeof window !== 'undefined') {
      checkPopupStatus();
    }
  }, []);

  // Helper to set localStorage with expiration
  const setWithExpiry = (key: string, duration: number) => {
    const item = {
      timestamp: Date.now(),
      duration,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  const handleClose = () => {
    setShow(false);
    
    // Record that the popup was shown
    setWithExpiry("review-popup-displayed", 30 * 24 * 60 * 60 * 1000); // 30 days
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      return; // Require a rating
    }
    
    setIsSubmitting(true);
    
    try {
      // Call the API to save the review
      await PopupsAPI.saveReview({
        rating,
        review,
        visitorType
      });
      
      // Store review data in localStorage
      localStorage.setItem("user-review", JSON.stringify({
        rating,
        review,
        timestamp: Date.now()
      }));
      
      // Show success state
      setSubmitted(true);
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting review:", error);
      // You could also show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rating star component
  const RatingStar = ({ filled, hovered, position }: { filled: boolean; hovered: boolean; position: number }) => {
    return (
      <button
        type="button"
        className={`transition-colors ${
          filled ? 'text-yellow-400' : hovered ? 'text-yellow-200' : 'text-gray-300'
        } hover:text-yellow-400 focus:outline-none`}
        onMouseEnter={() => setHoveredRating(position)}
        onMouseLeave={() => setHoveredRating(0)}
        onClick={() => setRating(position)}
      >
        <Star className="w-8 h-8 fill-current" />
      </button>
    );
  };

  return (
    <Dialog open={show} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] p-0 rounded-xl overflow-hidden bg-white">
        <div className="relative">
          {/* Replace gradient background with solid white */}
          {/* <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"
          /> */}
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Content */}
          <div className="relative z-1 p-6 bg-white">
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
                  <ThumbsUp className="h-8 w-8 text-green-600" />
                </div>
                <DialogTitle className="text-xl font-bold mb-2">Thank You For Your Feedback!</DialogTitle>
                <p className="text-gray-500 mb-6">
                  Your review helps us improve our services and helps others discover what we offer.
                </p>
                <Button
                  onClick={handleClose}
                  className="mt-2"
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <DialogHeader className="text-center mb-6">
                  <DialogTitle className="text-xl sm:text-2xl font-bold">
                    How was your experience with us?
                  </DialogTitle>
                  <DialogDescription>
                    Your feedback helps us improve our service and helps others make informed decisions.
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Star Rating */}
                  <div className="flex flex-col items-center space-y-4">
                    <Label htmlFor="rating" className="text-center font-medium">
                      Rate your overall experience
                    </Label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <RatingStar
                          key={star}
                          position={star}
                          filled={star <= rating}
                          hovered={star <= hoveredRating}
                        />
                      ))}
                    </div>
                    {rating > 0 && (
                      <p className="text-sm font-medium text-center">
                        {rating === 1 && "Poor"}
                        {rating === 2 && "Fair"}
                        {rating === 3 && "Good"}
                        {rating === 4 && "Very Good"}
                        {rating === 5 && "Excellent"}
                      </p>
                    )}
                  </div>
                  
                  {/* Review Text */}
                  <div className="space-y-2">
                    <Label htmlFor="review">Tell us about your experience (optional)</Label>
                    <Textarea
                      id="review"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      placeholder="What did you like or dislike? What can we improve?"
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <DialogFooter>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={rating === 0 || isSubmitting}
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
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Submit Feedback <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </DialogFooter>
                  
                  <p className="text-xs text-center text-gray-500 mt-2">
                    Your feedback may be shared on our website and marketing materials.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewPopup; 