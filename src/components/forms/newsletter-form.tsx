"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import API from "@/lib/api/api-provider";

interface NewsletterFormData {
  email: string;
  firstName?: string;
  lastName?: string;
  agreeToTerms: boolean;
  marketingConsent?: boolean;
}

const initialFormData: NewsletterFormData = {
  email: "",
  firstName: "",
  lastName: "",
  agreeToTerms: false,
  marketingConsent: false,
};

type NewsletterFormProps = {
  variant?: "inline" | "full" | "simple";
  title?: string;
  description?: string;
  className?: string;
  onSuccess?: () => void;
};

export default function NewsletterForm({
  variant = "inline",
  title = "Subscribe to our newsletter",
  description = "Get the latest updates, news, and special offers delivered directly to your inbox.",
  className = "",
  onSuccess,
}: NewsletterFormProps) {
  const [formData, setFormData] = useState<NewsletterFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof NewsletterFormData, string>>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Partial<Record<keyof NewsletterFormData, string>> = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (variant === "full") {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is filled
    if (errors[name as keyof NewsletterFormData]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof NewsletterFormData];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (name: keyof NewsletterFormData, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
    
    if (name === "agreeToTerms" && errors.agreeToTerms && checked) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.agreeToTerms;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form validation failed",
        description: "Please fill all required fields correctly.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await API.post("/api/forms/newsletter-subscribe", formData);
      
      if (response.data.success) {
        toast({
          title: "Subscription successful!",
          description: "Thank you for subscribing to our newsletter.",
        });
        
        // Reset form
        setFormData(initialFormData);
        
        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast({
          title: "Subscription failed",
          description: response.data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error: unknown) {
      toast({
        title: "Error subscribing",
        description: error instanceof Error 
          ? error.message 
          : "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simple variant - just email and submit
  if (variant === "simple") {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? "border-destructive" : ""}
              aria-label="Email address"
            />
            {errors.email && (
              <p className="text-xs text-destructive mt-1">{errors.email}</p>
            )}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
        <div className="mt-2">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreeToTerms-simple"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => 
                handleCheckboxChange("agreeToTerms", checked as boolean)
              }
              className={errors.agreeToTerms ? "border-destructive" : ""}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="agreeToTerms-simple"
                className="text-xs font-medium leading-none cursor-pointer"
              >
                I agree to the terms and privacy policy
              </label>
              {errors.agreeToTerms && (
                <p className="text-xs text-destructive">{errors.agreeToTerms}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Inline variant - horizontal form with email + checkbox
  if (variant === "inline") {
    return (
      <div className={className}>
        <div className="mb-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email}</p>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreeToTerms-inline"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => 
                handleCheckboxChange("agreeToTerms", checked as boolean)
              }
              className={errors.agreeToTerms ? "border-destructive" : ""}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="agreeToTerms-inline"
                className="text-xs font-medium leading-none cursor-pointer"
              >
                I agree to the terms and privacy policy
              </label>
              {errors.agreeToTerms && (
                <p className="text-xs text-destructive">{errors.agreeToTerms}</p>
              )}
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox
              id="marketingConsent-inline"
              checked={formData.marketingConsent}
              onCheckedChange={(checked) => 
                handleCheckboxChange("marketingConsent", checked as boolean)
              }
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="marketingConsent-inline"
                className="text-xs font-medium leading-none cursor-pointer"
              >
                I agree to receive marketing communications
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }

  // Full variant - complete form with name fields
  return (
    <div className={className}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className={errors.firstName ? "border-destructive" : ""}
            />
            {errors.firstName && (
              <p className="text-sm text-destructive">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className={errors.lastName ? "border-destructive" : ""}
            />
            {errors.lastName && (
              <p className="text-sm text-destructive">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
        <div className="space-y-4 pt-2">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreeToTerms-full"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => 
                handleCheckboxChange("agreeToTerms", checked as boolean)
              }
              className={errors.agreeToTerms ? "border-destructive" : ""}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="agreeToTerms-full"
                className="text-sm font-medium leading-none cursor-pointer"
              >
                I agree to the terms and privacy policy <span className="text-destructive">*</span>
              </label>
              {errors.agreeToTerms && (
                <p className="text-sm text-destructive">{errors.agreeToTerms}</p>
              )}
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox
              id="marketingConsent-full"
              checked={formData.marketingConsent}
              onCheckedChange={(checked) => 
                handleCheckboxChange("marketingConsent", checked as boolean)
              }
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="marketingConsent-full"
                className="text-sm font-medium leading-none cursor-pointer"
              >
                I agree to receive marketing communications
              </label>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Subscribe to Newsletter
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
} 