"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, ChevronRight, Star, School, DollarSign, CheckCircle, BarChart3, Lightbulb, Settings, Clock, Table } from "lucide-react";
import API from "@/lib/api/api-provider";
import { AuthAPI } from "@/lib/api/api-provider";
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { format } from "date-fns";
import { Step, StepDescription, StepTitle } from "../ui/stepper";
import { TableHead, TableHeader, TableRow, TableCell, TableBody } from "../ui/table";
import { Stepper } from "../ui/stepper";

// Consultation data constants
const consultationTypes = [
  'Business Strategy',
  'Technical Consultation',
  'Project Planning',
  'Security Assessment',
  'Other'
];

const durationOptions = [
  { value: 10, label: '10 Minutes', price: 10 },
  { value: 30, label: '30 Minutes', price: 25 },
  { value: 45, label: '45 Minutes', price: 35 },
  { value: 60, label: '1 Hour', price: 45 },
  { value: 90, label: '1 Hour 30 Minutes', price: 65 }
];

const steps = ['Personal Information', 'Company Details', 'Consultation Options', 'Review & Schedule'];

const consultationProcess = [
  {
    title: "Initial Discussion",
    description: "We start with understanding your needs and challenges through a detailed discussion.",
    icon: <Lightbulb className="h-6 w-6 text-white" />,
  },
  {
    title: "Analysis & Planning",
    description: "We analyze your situation and develop a tailored approach for your business.",
    icon: <BarChart3 className="h-6 w-6 text-white" />,
  },
  {
    title: "Recommendations",
    description: "We provide actionable recommendations and a clear path forward.",
    icon: <CheckCircle className="h-6 w-6 text-white" />,
  },
  {
    title: "Implementation Support",
    description: "Get guidance on implementing the recommended solutions effectively.",
    icon: <Settings className="h-6 w-6 text-white" />,
  },
];

interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  consultationType: string;
  duration: number;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const initialFormData: ConsultationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  consultationType: "",
  duration: 30,
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function FreeConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>(initialFormData);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM'
  ]);
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: string; message: string }>({ type: '', message: '' });
  const [isFirstConsultation, setIsFirstConsultation] = useState(true);
  const [dateChecked, setDateChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [submitCountdown, setSubmitCountdown] = useState(5);
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const { toast } = useToast();
  const router = useRouter();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  // Check if user is logged in to prefill form data
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await AuthAPI.getMe();
        const userData = response.data;
        setIsLoggedIn(true);
        
        // Prefill form with user data if available
        setFormData(prevData => ({
          ...prevData,
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          email: userData.email || "",
          phone: userData.phone || "",
          companyName: userData.company || "",
        }));
      } catch (error) {
        console.error("Authentication check failed:", error);
        // User is not logged in
        setIsLoggedIn(false);
      }
    };
    
    checkAuth();
  }, []);
  useEffect(() => {
    if (isLoggedIn && !dateChecked) {
      checkFirstConsultationStatus();
    }
  }, [isLoggedIn, dateChecked]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeStep === steps.length - 1) {
      setSubmitEnabled(false);
      setSubmitCountdown(5);
      
      // Start the countdown timer
      timer = setInterval(() => {
        setSubmitCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setSubmitEnabled(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [activeStep]);

  const checkFirstConsultationStatus = async () => {
    try {
      const response = await API.get(`/api/forms/free-consultation/available-slots?date=${new Date().toISOString().split('T')[0]}`);
      setIsFirstConsultation(response.data.isFirstConsultation);
      setDateChecked(true);
    } catch (error: unknown) {
      console.error("Error checking first consultation status:", error);
    }
  };

  const fetchAvailableSlots = async (date: string) => {
    try {
      const response = await API.get(`/api/forms/free-consultation/available-slots?date=${date}`);
      setAvailableTimeSlots(response.data.availableSlots);
    } catch (error: unknown) {
      console.error("Error fetching available slots:", error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to fetch available time slots.'
      });
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setFormData(prev => ({ ...prev, preferredDate: date, preferredTime: '' }));
    
    if (date) {
      fetchAvailableSlots(date);
    }
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, preferredTime: time }));
  };

  const getStepFields = (step: number) => {
    switch (step) {
      case 0: // Personal Information
        return ['firstName', 'lastName', 'email', 'phone'];
      case 1: // Company Details
        return ['companyName'];
      case 2: // Consultation Options
        return ['consultationType', 'duration', 'preferredDate', 'preferredTime'];
      case 3: // Review & Schedule
        return []; // No fields to validate on final review step
      default:
        return [];
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};
    const fieldsToValidate = getStepFields(step);
    
    fieldsToValidate.forEach(field => {
      if (field === 'firstName' && !formData.firstName) {
        newErrors.firstName = 'First name is required';
      }
      if (field === 'lastName' && !formData.lastName) {
        newErrors.lastName = 'Last name is required';
      }
      if (field === 'email') {
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
        }
      }
      if (field === 'phone' && !formData.phone) {
        newErrors.phone = 'Phone number is required';
      }
      if (field === 'consultationType' && !formData.consultationType) {
        newErrors.consultationType = 'Consultation type is required';
      }
      if (field === 'preferredDate' && !formData.preferredDate) {
        newErrors.preferredDate = 'Date is required';
      }
      if (field === 'preferredTime' && !formData.preferredTime) {
        newErrors.preferredTime = 'Time slot is required';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is filled
    if (errors[name as keyof ConsultationFormData]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof ConsultationFormData];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: keyof ConsultationFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is filled
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep(prev => prev + 1);
    } else {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill all required fields correctly before proceeding.'
      });
    }
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      setSubmitStatus({
        type: 'error',
        message: 'You must be logged in to book a consultation.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const submitData = {
        ...formData,
        duration: Number(formData.duration),
        preferredDate: new Date(formData.preferredDate).toISOString()
      };
      
      const response = await API.post('/api/forms/free-consultation', submitData);
      
      const responseMessage = response.data.isFirstConsultation
        ? 'Your free consultation has been booked successfully! We look forward to speaking with you.'
        : `Your paid consultation (${formData.duration} mins) has been booked successfully! We will contact you shortly regarding payment details.`;
      
      setSubmitStatus({
        type: 'success',
        message: responseMessage
      });
      
      toast({
        title: "Consultation Booked",
        description: responseMessage,
      });
      
      setFormData(initialFormData);
      setActiveStep(0);
    } catch (error: unknown) {
      console.error("Booking error:", error);
      let errorMessage = "An error occurred while booking the consultation.";
      
      // Check if error has response data with message
      if (error && typeof error === 'object' && 'response' in error) {
        const errorResponse = error.response as { data?: { message?: string } };
        if (errorResponse?.data?.message) {
          errorMessage = errorResponse.data.message;
        }
      }
      
      // Provide a clearer message for time slot conflicts
      if (errorMessage.includes("time slot is already booked")) {
        errorMessage = "This time slot has been confirmed for another consultation. Please select a different time.";
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
      
      toast({
        title: "Booking Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderLoginMessage = () => {
    if (!isLoggedIn) {
      return (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription className="flex justify-between items-center">
            <span>You must be logged in to book a consultation. Your first consultation is free!</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => router.push('/auth/login?redirect=/contact/free-consultation')}
            >
              Login Now
            </Button>
          </AlertDescription>
        </Alert>
      );
    }
    return null;
  };

  const renderPersonalInfo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-muted-foreground">
          First Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter your first name"
          className={`${errors.firstName ? "border-destructive" : ""} text-muted-foreground`}
          disabled={isLoggedIn && !!formData.firstName}
        />
        {errors.firstName && (
          <p className="text-sm text-destructive">{errors.firstName}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="lastName" className="text-muted-foreground">
          Last Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter your last name"
          className={`${errors.lastName ? "border-destructive" : ""} text-muted-foreground`}
          disabled={isLoggedIn && !!formData.lastName}
        />
        {errors.lastName && (
          <p className="text-sm text-destructive">{errors.lastName}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-muted-foreground">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your.email@example.com"
          className={`${errors.email ? "border-destructive" : ""} text-muted-foreground`}
          disabled={isLoggedIn && !!formData.email}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-muted-foreground">
          Phone Number <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          className={`${errors.phone ? "border-destructive" : ""} text-muted-foreground`}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone}</p>
        )}
      </div>
    </div>
  );

  const renderCompanyDetails = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="companyName" className="text-muted-foreground">
          Company Name
        </Label>
        <Input
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          placeholder="Your company name (optional)"
          className={`${errors.companyName ? "border-destructive" : ""} text-muted-foreground`}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-muted-foreground">
          Additional Information
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Please share any specific details or questions you would like to discuss during the consultation."
          className="min-h-[150px] text-muted-foreground"
        />
      </div>
    </div>
  );

  const renderConsultationOptions = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="consultationType" className="text-muted-foreground">
          Consultation Type <span className="text-destructive">*</span>
        </Label>
        <Select
          value={formData.consultationType}
          onValueChange={(value) => handleSelectChange("consultationType", value)}
        >
          <SelectTrigger
            id="consultationType"
            className={`${errors.consultationType ? "border-destructive" : ""} text-muted-foreground`}
          >
            <SelectValue placeholder="Select consultation type" className="text-muted-foreground" />
          </SelectTrigger>
          <SelectContent>
            {consultationTypes.map((type) => (
              <SelectItem key={type} value={type} className="text-muted-foreground bg-muted">
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.consultationType && (
          <p className="text-sm text-destructive">{errors.consultationType}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="duration" className="text-muted-foreground">
          Session Duration <span className="text-destructive">*</span>
        </Label>
        <Select
          value={formData.duration.toString()}
          onValueChange={(value) => handleSelectChange("duration", parseInt(value))}
          disabled={isFirstConsultation} // Disable for first-time consultations
        >
          <SelectTrigger
            id="duration"
            className={`${errors.duration ? "border-destructive" : ""} text-muted-foreground`}
          >
            <SelectValue placeholder="Select session duration" className="text-muted-foreground" />
          </SelectTrigger>
          <SelectContent>
            {durationOptions.map((option) => (
              <SelectItem 
                key={option.value} 
                value={option.value.toString()}
                disabled={isFirstConsultation && option.value !== 30}
                className="text-muted-foreground bg-muted"
              >
                {option.label} {!isFirstConsultation && `- $${option.price}`}
                {isFirstConsultation && option.value === 30 && " (Free first consultation)"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {isFirstConsultation && (
          <p className="text-sm text-muted-foreground">Your first consultation is free and limited to 30 minutes</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="preferredDate" className="text-muted-foreground">
          Preferred Date <span className="text-destructive">*</span>
        </Label>
        <Input
          id="preferredDate"
          name="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={handleDateChange}
          className={`${errors.preferredDate ? "border-destructive" : ""} text-muted-foreground bg-muted`}
          min={new Date().toISOString().split('T')[0]}
        />
        {errors.preferredDate && (
          <p className="text-sm text-destructive">{errors.preferredDate}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="preferredTime" className="text-muted-foreground"  >
          Preferred Time Slot <span className="text-destructive">*</span>
        </Label>
        {formData.preferredDate ? (
          <div className="flex flex-wrap gap-2 mt-2">
            {availableTimeSlots.length > 0 ? (
              availableTimeSlots.map((time) => (
                <Badge
                  key={time}
                  variant={formData.preferredTime === time ? "default" : "outline"}
                  className="py-2 px-3 cursor-pointer text-muted-foreground bg-muted"
                  onClick={() => handleTimeSelect(time)}
                >
                  <Clock className="h-3 w-3 mr-1" />
                  {time}
                </Badge>
              ))
            ) : (
              <Alert className="w-full">
                <AlertDescription>
                  No available time slots for this date. Please select another date.
                </AlertDescription>
              </Alert>
            )}
          </div>
        ) : (
          <Alert className="w-full">
            <AlertDescription>
              Please select a date first to see available time slots.
            </AlertDescription>
          </Alert>
        )}
        {errors.preferredTime && (
          <p className="text-sm text-destructive">{errors.preferredTime}</p>
        )}
      </div>
    </div>
  );

  const renderReviewDetails = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Review Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Name:</h4>
              <p className="text-sm text-muted-foreground">{formData.firstName} {formData.lastName}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Email:</h4>
              <p className="text-sm text-muted-foreground">{formData.email}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Phone:</h4>
              <p className="text-sm text-muted-foreground">{formData.phone}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Company:</h4>
              <p className="text-sm text-muted-foreground">{formData.companyName || 'N/A'}</p>
            </div>
          </div>
          
          <div className="border-t my-4"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Consultation Type:</h4>
              <p className="text-sm text-muted-foreground">{formData.consultationType}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Duration:</h4>
              <p className="text-sm text-muted-foreground">
                {durationOptions.find(option => option.value === formData.duration)?.label || formData.duration + ' Minutes'}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Date:</h4>
              <p className="text-sm text-muted-foreground">
                {formData.preferredDate ? format(new Date(formData.preferredDate), 'PPP') : 'Not selected'}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Time:</h4>
              <p className="text-sm text-muted-foreground">{formData.preferredTime || 'Not selected'}</p>
            </div>
          </div>
          
          {formData.message && (
            <>
              <div className="border-t my-4"></div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Additional Information:</h4>
                <p className="text-sm text-muted-foreground">{formData.message}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
      
      <Alert className={isFirstConsultation ? "bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-50" : "bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-50"}>
        <AlertDescription>
          <h4 className="font-medium">
            {isFirstConsultation ? 'Free Consultation' : 'Paid Consultation'}
          </h4>
          <p className="text-sm mt-1 text-muted-foreground">
            {isFirstConsultation 
              ? 'This will be your first free consultation with us.' 
              : `This consultation will be charged at $${durationOptions.find(opt => opt.value === formData.duration)?.price || 0}.`}
            {!isFirstConsultation && <span className="block mt-1">Our team will contact you to arrange payment after booking.</span>}
          </p>
        </AlertDescription>
      </Alert>
      
      {!submitEnabled && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Submit button will be enabled in {submitCountdown} seconds...
          </p>
          <Progress value={(5 - submitCountdown) * 20} className="h-2" />
        </div>
      )}
    </div>
  );

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return renderPersonalInfo();
      case 1:
        return renderCompanyDetails();
      case 2:
        return renderConsultationOptions();
      case 3:
        return renderReviewDetails();
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">
          Schedule Your {isFirstConsultation ? 'Free' : 'Paid'} Consultation
        </h2>
        <p className="text-muted-foreground">
          {isFirstConsultation 
            ? "Book your complimentary 30-minute consultation session with our experts today. Let&apos;s discuss how we can help you achieve your goals."
            : "Book your follow-up consultation session. Choose the duration that works best for your needs."
          }
        </p>
        
        {renderLoginMessage()}
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Stepper
            activeStep={activeStep}
            orientation={isMobile ? "vertical" : "horizontal"}
            className="mb-8"
          >
            {steps.map((label, index) => (
              <Step key={index} completed={activeStep > index}>
                <StepTitle>{label}</StepTitle>
                <StepDescription>{`Step ${index + 1} of ${steps.length}`}</StepDescription>
              </Step>
            ))}
          </Stepper>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {renderStepContent()}
            
            {submitStatus.message && (
              <Alert variant={submitStatus.type === 'error' ? "destructive" : "default"}>
                <AlertDescription>
                  {submitStatus.message}
                </AlertDescription>
              </Alert>
            )}
            
            <div className="flex justify-between pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              
              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  disabled={isSubmitting || !isLoggedIn || !submitEnabled}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    "Book Consultation"
                  )}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent"
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
      
      {!isFirstConsultation && (
        <Card>
          <CardHeader>
            <CardTitle>Consultation Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Duration</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Best For</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>10 Minutes</TableCell>
                  <TableCell>$10</TableCell>
                  <TableCell>Quick questions and follow-ups</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>30 Minutes</TableCell>
                  <TableCell>$25</TableCell>
                  <TableCell>Brief consultations and assessments</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>45 Minutes</TableCell>
                  <TableCell>$35</TableCell>
                  <TableCell>Standard consultations</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1 Hour</TableCell>
                  <TableCell>$45</TableCell>
                  <TableCell>In-depth strategy sessions</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1 Hour 30 Minutes</TableCell>
                  <TableCell>$65</TableCell>
                  <TableCell>Comprehensive business planning</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Alert className="mt-4">
              <AlertDescription>
                After booking, our team will contact you to arrange payment.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
      
      <div className="py-8">
        <h3 className="text-xl font-bold text-primary text-center mb-6">Our Consultation Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultationProcess.map((step, index) => (
            <Card key={index} className="transition-all hover:shadow-lg hover:translate-y-[-5px]">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  {step.icon}
                </div>
                <h4 className="font-bold mb-2 text-muted-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle>Why Choose Our Consultation?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            <strong className="text-primary">RTN Global</strong> offers expert guidance tailored to your needs. Whether you&apos;re looking for 
            strategic advice, professional insights, or a roadmap for success, we provide consultations that deliver 
            real results.
          </p>
          
          <div className="space-y-4 mt-6">
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-muted-foreground">Personalized Approach</h4>
                <p className="text-sm text-muted-foreground">Get advice tailored to your goals and challenges.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <School className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-muted-foreground">Experienced Professionals</h4>
                <p className="text-sm text-muted-foreground">Work with industry experts who understand your needs.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-muted-foreground">Flexible & Affordable</h4>
                <p className="text-sm text-muted-foreground">Choose a consultation length that suits your budget.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 