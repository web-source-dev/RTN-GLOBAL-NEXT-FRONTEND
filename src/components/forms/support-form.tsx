"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, UploadCloud } from "lucide-react";
import API from "@/lib/api/api-provider";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { AuthAPI } from "@/lib/api/api-provider";

// Create a User interface for proper typing
interface User {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  id?: string;
}

// Add this interface before the component or near the top with other interfaces
interface ApiError {
  response?: {
    data?: {
      message?: string;
      error?: string;
    };
    status?: number;
  };
  message?: string;
}

export default function SupportForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [formData, setFormData] = useState({
    issueCategory: "",
    issueTitle: "",
    description: "",
    stepsToReproduce: "",
    priority: "medium",
    attachment: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await AuthAPI.getMe();
        setCurrentUser(response.data);
        setIsLoggedIn(true);
      } catch (error) {
        console.log(error)
        setIsLoggedIn(false);
        // Redirect to login page
        router.push("/login?redirect=/support");
      }
    };
    
    checkAuth();
  }, [router]);

  const handleNext = () => {
    const stepErrors = validateStep(activeStep);
    if (Object.keys(stepErrors).length === 0) {
      setActiveStep((prev) => prev + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(0, prev - 1));
    setErrors({});
  };

  const handleStepClick = (step: number) => {
    if (step < activeStep) {
      setActiveStep(step);
      setErrors({});
    } else if (step === activeStep + 1) {
      handleNext();
    }
  };

  const validateStep = (step: number): Record<string, string> => {
    const stepErrors: Record<string, string> = {};

    if (step === 0) {
      if (!formData.issueCategory) stepErrors.issueCategory = "Please select an issue category";
      if (!formData.issueTitle.trim()) stepErrors.issueTitle = "Issue title is required";
      if (!formData.priority) stepErrors.priority = "Please select a priority level";
    } else if (step === 1) {
      if (!formData.description.trim()) stepErrors.description = "Description is required";
    }

    return stepErrors;
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const allErrors: Record<string, string> = {};

    // Validate all steps
    for (let i = 0; i <= 1; i++) {
      const stepErrors = validateStep(i);
      Object.assign(allErrors, stepErrors);
    }

    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // If there are errors, navigate to the first step with errors
      for (let i = 0; i <= 1; i++) {
        const stepErrors = validateStep(i);
        if (Object.keys(stepErrors).length > 0) {
          setActiveStep(i);
          break;
        }
      }
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Submitting support form with data:", formData);
      console.log("Current user info:", currentUser);
      
      // Create FormData object to handle file upload
      const formDataToSend = new FormData();
      
      // Add form data
      formDataToSend.append("issueCategory", formData.issueCategory);
      formDataToSend.append("issueTitle", formData.issueTitle);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("stepsToReproduce", formData.stepsToReproduce || "");
      formDataToSend.append("priority", formData.priority);
      
      // Include user information in case it's needed on the backend
      if (currentUser?.name) {
        formDataToSend.append("name", currentUser.name);
      }
      
      // Include firstName and lastName if available
      if (currentUser?.firstName) {
        formDataToSend.append("firstName", currentUser.firstName);
      }
      
      if (currentUser?.lastName) {
        formDataToSend.append("lastName", currentUser.lastName);
      }
      
      if (currentUser?.email) {
        formDataToSend.append("email", currentUser.email);
      }
      
      if (formData.attachment) {
        formDataToSend.append("attachments", formData.attachment);
      }

      // Log the FormData for debugging (won&apos;t show actual contents in console)
      console.log("FormData created, attempting submission...");

      // Use the proper API endpoint with additional error handling
      const response = await API.post("/api/forms/support", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // Ensure cookies are sent for authentication
      });

      console.log("Support ticket submitted successfully:", response.data);

      toast({
        title: "Support ticket created successfully",
        description: `Your ticket number is ${response.data.ticketNumber}. We&apos;ll get back to you shortly.`,
      });

      // Reset form
      setFormData({
        issueCategory: "",
        issueTitle: "",
        description: "",
        stepsToReproduce: "",
        priority: "medium",
        attachment: null,
      });

      // Redirect to ticket status page
      router.push(`/support/tickets/${response.data.ticketNumber}`);
    } catch (error: unknown) {
      console.error("Error submitting support ticket:", error);
      
      // Cast to the defined interface for proper type checking
      const apiError = error as ApiError;
      
      console.error("Error details:", {
        message: apiError.message || "Unknown error",
        response: apiError.response?.data,
        status: apiError.response?.status
      });
      
      // Better error message handling
      const errorMessage = 
        apiError.response?.data?.message || 
        apiError.response?.data?.error || 
        (error instanceof Error ? error.message : "Unknown error") || 
        "Please try again later";
      
      toast({
        title: "Error submitting support ticket",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | 
    { name: string; value: unknown }
  ) => {
    const name = 'target' in e ? e.target.name : e.name;
    const value = 'target' in e ? e.target.value : e.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          attachment: "File size should not exceed 5MB",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        attachment: file,
      }));

      // Clear error
      if (errors.attachment) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.attachment;
          return newErrors;
        });
      }
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const renderStepIndicator = () => {
    const steps = ["Issue Details", "Description", "Review & Submit"];
    
    return (
      <div className="flex justify-center mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center"
            onClick={() => handleStepClick(index)}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
                index === activeStep
                  ? "bg-primary text-primary-foreground"
                  : index < activeStep
                  ? "bg-primary/70 text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {index + 1}
            </div>
            <div
              className={`text-sm ml-2 ${
                index === activeStep
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {step}
            </div>
            {index < steps.length - 1 && (
              <div className="w-8 h-0.5 mx-2 bg-border"></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderIssueDetails = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="issueCategory">Issue Category*</Label>
        <Select
          value={formData.issueCategory}
          onValueChange={(value) => handleChange({ name: "issueCategory", value })}
        >
          <SelectTrigger id="issueCategory" className={errors.issueCategory ? "border-destructive" : ""}>
            <SelectValue placeholder="Select an issue category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technical">Technical Issue</SelectItem>
            <SelectItem value="billing">Billing & Payments</SelectItem>
            <SelectItem value="account">Account Management</SelectItem>
            <SelectItem value="feature">Feature Request</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.issueCategory && (
          <p className="text-sm text-destructive mt-1">{errors.issueCategory}</p>
        )}
      </div>

      <div>
        <Label htmlFor="issueTitle">Issue Title*</Label>
        <Input
          id="issueTitle"
          name="issueTitle"
          placeholder="Brief title for your issue"
          value={formData.issueTitle}
          onChange={handleChange}
          className={errors.issueTitle ? "border-destructive" : ""}
        />
        {errors.issueTitle && (
          <p className="text-sm text-destructive mt-1">{errors.issueTitle}</p>
        )}
      </div>

      <div>
        <Label htmlFor="priority">Priority*</Label>
        <Select
          value={formData.priority}
          onValueChange={(value) => handleChange({ name: "priority", value })}
        >
          <SelectTrigger id="priority" className={errors.priority ? "border-destructive" : ""}>
            <SelectValue placeholder="Select priority level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low - Minor issue, not affecting work</SelectItem>
            <SelectItem value="medium">Medium - Affecting some functionality</SelectItem>
            <SelectItem value="high">High - Significant impact on operations</SelectItem>
            <SelectItem value="critical">Critical - System down or unusable</SelectItem>
          </SelectContent>
        </Select>
        {errors.priority && (
          <p className="text-sm text-destructive mt-1">{errors.priority}</p>
        )}
      </div>
    </div>
  );

  const renderDescription = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="description">Description*</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Please describe your issue in detail"
          value={formData.description}
          onChange={handleChange}
          className={`h-32 ${errors.description ? "border-destructive" : ""}`}
        />
        {errors.description && (
          <p className="text-sm text-destructive mt-1">{errors.description}</p>
        )}
      </div>

      <div>
        <Label htmlFor="stepsToReproduce">Steps to Reproduce (if applicable)</Label>
        <Textarea
          id="stepsToReproduce"
          name="stepsToReproduce"
          placeholder="List the steps to reproduce this issue"
          value={formData.stepsToReproduce}
          onChange={handleChange}
          className="h-24"
        />
      </div>

      <div>
        <Label>Attachment (Optional)</Label>
        <div
          className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors ${
            errors.attachment ? "border-destructive" : "border-border"
          }`}
          onClick={handleFileButtonClick}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept="image/*,.pdf,.doc,.docx"
          />
          <UploadCloud className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            {formData.attachment
              ? `Selected: ${formData.attachment.name}`
              : "Click to upload a file (max 5MB)"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Accepted formats: Images, PDF, DOC, DOCX
          </p>
        </div>
        {errors.attachment && (
          <p className="text-sm text-destructive mt-1">{errors.attachment}</p>
        )}
      </div>
    </div>
  );

  const renderReview = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Review your submission</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium">Issue Category</p>
          <p className="text-sm text-muted-foreground">
            {formData.issueCategory === "technical"
              ? "Technical Issue"
              : formData.issueCategory === "billing"
              ? "Billing & Payments"
              : formData.issueCategory === "account"
              ? "Account Management"
              : formData.issueCategory === "feature"
              ? "Feature Request"
              : formData.issueCategory === "other"
              ? "Other"
              : ""}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">Priority</p>
          <p className="text-sm text-muted-foreground">
            {formData.priority === "low"
              ? "Low"
              : formData.priority === "medium"
              ? "Medium"
              : formData.priority === "high"
              ? "High"
              : "Critical"}
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm font-medium">Issue Title</p>
          <p className="text-sm text-muted-foreground">{formData.issueTitle}</p>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm font-medium">Description</p>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {formData.description}
          </p>
        </div>

        {formData.stepsToReproduce && (
          <div className="md:col-span-2">
            <p className="text-sm font-medium">Steps to Reproduce</p>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {formData.stepsToReproduce}
            </p>
          </div>
        )}

        {formData.attachment && (
          <div className="md:col-span-2">
            <p className="text-sm font-medium">Attachment</p>
            <p className="text-sm text-muted-foreground">
              {formData.attachment.name} ({(formData.attachment.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return renderIssueDetails();
      case 1:
        return renderDescription();
      case 2:
        return renderReview();
      default:
        return null;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="py-12">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              Please log in to submit a support ticket.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button 
              onClick={() => router.push("/login?redirect=/support")}
              className="w-full"
            >
              Log In
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Support Ticket
          </CardTitle>
          <CardDescription className="text-center">
            Submit a support ticket and our team will assist you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {renderStepIndicator()}
            {renderStepContent()}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={activeStep === 0 || isSubmitting}
          >
            Back
          </Button>
          
          {activeStep < 2 ? (
            <Button type="button" onClick={handleNext} disabled={isSubmitting}>
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Ticket"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
} 