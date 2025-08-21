"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Loader2,
  ChevronRight,
  Star,
  School,
  DollarSign,
  CheckCircle,
  BarChart3,
  Lightbulb,
  Settings,
  Clock,
  Table,
  Calendar,
  Phone,
  Mail,
  User,
  Building,
  MessageSquare,
  Sparkles,
  Award,
  Zap,
  Shield,
  Heart
} from "lucide-react";
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
import { TableHead, TableHeader, TableRow, TableCell, TableBody } from "../ui/table";
import { H1, H2, H3, H4, P, Lead } from "@/components/ui/typography";

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
    if (activeStep === 3) { // Review & Schedule step
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
        <Card className="border-2 border-dashed border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <H3 className="text-lg font-semibold text-primary mb-1">Ready to Get Started?</H3>
                <P className="text-sm text-muted-foreground mb-3">
                  Sign in to book your consultation. Your first session is completely free! 🎉
                </P>
                <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
                  <Button
                    onClick={() => router.push('/auth/login?redirect=/contact/free-consultation')}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Sign In to Continue
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => router.push('/auth/register?redirect=/contact/free-consultation')}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Create Account
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }
    return (
      <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <P className="font-semibold text-green-800 dark:text-green-200">Welcome back!</P>
              <P className="text-sm text-green-600 dark:text-green-300">You're all set to book your consultation.</P>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <User className="h-6 w-6 text-primary" />
        </div>
        <H3 className="text-xl font-semibold mb-2">Tell Us About Yourself</H3>
        <P className="text-muted-foreground">Let's start with your basic information so we can personalize your consultation.</P>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="firstName" className="text-sm font-medium flex items-center">
            <User className="h-4 w-4 mr-2 text-primary" />
            First Name <span className="text-destructive ml-1">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            className={`${errors.firstName ? "border-destructive" : ""} h-12 text-base`}
            disabled={isLoggedIn && !!formData.firstName}
          />
          {errors.firstName && (
            <p className="text-sm text-destructive flex items-center">
              <span className="w-1 h-1 bg-destructive rounded-full mr-2"></span>
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="lastName" className="text-sm font-medium flex items-center">
            <User className="h-4 w-4 mr-2 text-primary" />
            Last Name <span className="text-destructive ml-1">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            className={`${errors.lastName ? "border-destructive" : ""} h-12 text-base`}
            disabled={isLoggedIn && !!formData.lastName}
          />
          {errors.lastName && (
            <p className="text-sm text-destructive flex items-center">
              <span className="w-1 h-1 bg-destructive rounded-full mr-2"></span>
              {errors.lastName}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="email" className="text-sm font-medium flex items-center">
            <Mail className="h-4 w-4 mr-2 text-primary" />
            Email Address <span className="text-destructive ml-1">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            className={`${errors.email ? "border-destructive" : ""} h-12 text-base`}
            disabled={isLoggedIn && !!formData.email}
          />
          {errors.email && (
            <p className="text-sm text-destructive flex items-center">
              <span className="w-1 h-1 bg-destructive rounded-full mr-2"></span>
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="phone" className="text-sm font-medium flex items-center">
            <Phone className="h-4 w-4 mr-2 text-primary" />
            Phone Number <span className="text-destructive ml-1">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className={`${errors.phone ? "border-destructive" : ""} h-12 text-base`}
          />
          {errors.phone && (
            <p className="text-sm text-destructive flex items-center">
              <span className="w-1 h-1 bg-destructive rounded-full mr-2"></span>
              {errors.phone}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderCompanyDetails = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Building className="h-6 w-6 text-primary" />
        </div>
        <H3 className="text-xl font-semibold mb-2">About Your Business</H3>
        <P className="text-muted-foreground">Help us understand your business better to provide more targeted consultation.</P>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="companyName" className="text-sm font-medium flex items-center">
            <Building className="h-4 w-4 mr-2 text-primary" />
            Company Name
          </Label>
          <Input
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Your company name (optional)"
            className={`${errors.companyName ? "border-destructive" : ""} h-12 text-base`}
          />
          <P className="text-xs text-muted-foreground">This helps us personalize your consultation experience.</P>
        </div>

        <div className="space-y-3">
          <Label htmlFor="message" className="text-sm font-medium flex items-center">
            <MessageSquare className="h-4 w-4 mr-2 text-primary" />
            Tell Us More
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Share your goals, challenges, or specific questions you'd like to discuss during the consultation. This helps us prepare better for our session!"
            className="min-h-[120px] text-base resize-none"
          />
          <P className="text-xs text-muted-foreground">The more details you provide, the more valuable your consultation will be.</P>
        </div>
      </div>
    </div>
  );

  const renderConsultationOptions = () => (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Calendar className="h-6 w-6 text-primary" />
        </div>
        <H3 className="text-xl font-semibold mb-2">Schedule Your Session</H3>
        <P className="text-muted-foreground">Choose your consultation type and preferred time slot.</P>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="consultationType" className="text-sm font-medium flex items-center">
            <Lightbulb className="h-4 w-4 mr-2 text-primary" />
            Consultation Type <span className="text-destructive ml-1">*</span>
          </Label>
          <Select
            value={formData.consultationType}
            onValueChange={(value) => handleSelectChange("consultationType", value)}
          >
            <SelectTrigger
              id="consultationType"
              className={`${errors.consultationType ? "border-destructive" : ""} h-12 text-base`}
            >
              <SelectValue placeholder="What would you like to discuss?" />
            </SelectTrigger>
            <SelectContent>
              {consultationTypes.map((type) => (
                <SelectItem key={type} value={type} className="text-base">
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.consultationType && (
            <p className="text-sm text-destructive flex items-center">
              <span className="w-1 h-1 bg-destructive rounded-full mr-2"></span>
              {errors.consultationType}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="duration" className="text-sm font-medium flex items-center">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            Session Duration <span className="text-destructive ml-1">*</span>
          </Label>
          <Select
            value={formData.duration.toString()}
            onValueChange={(value) => handleSelectChange("duration", parseInt(value))}
            disabled={isFirstConsultation}
          >
            <SelectTrigger
              id="duration"
              className={`${errors.duration ? "border-destructive" : ""} h-12 text-base`}
            >
              <SelectValue placeholder="Choose your session length" />
            </SelectTrigger>
            <SelectContent>
              {durationOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value.toString()}
                  disabled={isFirstConsultation && option.value !== 30}
                  className="text-base"
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{option.label}</span>
                    {!isFirstConsultation && (
                      <Badge variant="secondary" className="ml-2">
                        ${option.price}
                      </Badge>
                    )}
                    {isFirstConsultation && option.value === 30 && (
                      <Badge variant="default" className="ml-2 bg-green-500">
                        FREE
                      </Badge>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {isFirstConsultation && (
            <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <P className="text-sm text-green-700 dark:text-green-300">Your first consultation is free and limited to 30 minutes</P>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="preferredDate" className="text-sm font-medium flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            Preferred Date <span className="text-destructive ml-1">*</span>
          </Label>
          <Input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={handleDateChange}
            className={`${errors.preferredDate ? "border-destructive" : ""} h-12 text-base`}
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.preferredDate && (
            <p className="text-sm text-destructive flex items-center">
              <span className="w-1 h-1 bg-destructive rounded-full mr-2"></span>
              {errors.preferredDate}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="preferredTime" className="text-sm font-medium flex items-center">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            Preferred Time Slot <span className="text-destructive ml-1">*</span>
          </Label>
          {formData.preferredDate ? (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                {availableTimeSlots.length > 0 ? (
                  availableTimeSlots.map((time) => (
                    <Badge
                      key={time}
                      variant={formData.preferredTime === time ? "default" : "outline"}
                      className={`py-3 px-4 cursor-pointer text-base transition-all duration-200 ${formData.preferredTime === time
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-primary/10 hover:border-primary/50"
                        }`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      <Clock className="h-4 w-4 mr-2" />
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
              {availableTimeSlots.length > 0 && (
                <P className="text-xs text-muted-foreground">Click on a time slot to select it</P>
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
            <p className="text-sm text-destructive flex items-center">
              <span className="w-1 h-1 bg-destructive rounded-full mr-2"></span>
              {errors.preferredTime}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderReviewDetails = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle className="h-6 w-6 text-primary" />
        </div>
        <H3 className="text-xl font-semibold mb-2">Review Your Consultation Details</H3>
        <P className="text-muted-foreground">Please review all the information before confirming your booking.</P>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card className="border-2 border-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <User className="h-5 w-5 mr-2 text-primary" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium text-muted-foreground">Name:</span>
              <span className="text-sm font-semibold">{formData.firstName} {formData.lastName}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium text-muted-foreground">Email:</span>
              <span className="text-sm font-semibold">{formData.email}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium text-muted-foreground">Phone:</span>
              <span className="text-sm font-semibold">{formData.phone}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium text-muted-foreground">Company:</span>
              <span className="text-sm font-semibold">{formData.companyName || 'N/A'}</span>
            </div>
          </CardContent>
        </Card>

        {/* Consultation Details */}
        <Card className="border-2 border-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Consultation Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium text-muted-foreground">Type:</span>
              <span className="text-sm font-semibold">{formData.consultationType}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium text-muted-foreground">Duration:</span>
              <span className="text-sm font-semibold">
                {durationOptions.find(option => option.value === formData.duration)?.label || formData.duration + ' Minutes'}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium text-muted-foreground">Date:</span>
              <span className="text-sm font-semibold">
                {formData.preferredDate ? format(new Date(formData.preferredDate), 'PPP') : 'Not selected'}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium text-muted-foreground">Time:</span>
              <span className="text-sm font-semibold">{formData.preferredTime || 'Not selected'}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      {formData.message && (
        <Card className="border-2 border-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-primary" />
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <P className="text-sm leading-relaxed">{formData.message}</P>
          </CardContent>
        </Card>
      )}

      {/* Consultation Type Alert */}
      <Alert className={`${isFirstConsultation
        ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 dark:from-green-950 dark:to-emerald-950 dark:border-green-800"
        : "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 dark:from-blue-950 dark:to-cyan-950 dark:border-blue-800"
        }`}>
        <div className="flex items-start space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isFirstConsultation ? "bg-green-100 dark:bg-green-900" : "bg-blue-100 dark:bg-blue-900"
            }`}>
            {isFirstConsultation ? (
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            ) : (
              <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            )}
          </div>
          <div>
            <H4 className={`font-semibold ${isFirstConsultation ? "text-green-800 dark:text-green-200" : "text-blue-800 dark:text-blue-200"}`}>
              {isFirstConsultation ? '🎉 Free Consultation' : '💰 Paid Consultation'}
            </H4>
            <P className={`text-sm mt-1 ${isFirstConsultation ? "text-green-700 dark:text-green-300" : "text-blue-700 dark:text-blue-300"}`}>
              {isFirstConsultation
                ? 'This will be your first free consultation with us. No payment required!'
                : `This consultation will be charged at $${durationOptions.find(opt => opt.value === formData.duration)?.price || 0}. Our team will contact you to arrange payment after booking.`}
            </P>
          </div>
        </div>
      </Alert>

      {/* Countdown Timer */}
      {!submitEnabled && (
        <Card className="border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="h-4 w-4 text-amber-600" />
              </div>
              <div className="flex-1">
                <P className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Submit button will be enabled in {submitCountdown} seconds...
                </P>
                <Progress value={(5 - submitCountdown) * 20} className="h-2 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
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
      {/* Enhanced Header Section */}
      <div className="text-center space-y-6 bg-gradient-to-br from-primary/5 via-background to-muted/20 p-8 rounded-2xl">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>

        <H1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Schedule Your {isFirstConsultation ? 'Free' : 'Paid'} Consultation
        </H1>

        <Lead className="text-lg max-w-3xl mx-auto">
          {isFirstConsultation
            ? "🎉 Book your complimentary 30-minute consultation session with our experts today. Let's discuss how we can help you achieve your goals and transform your business."
            : "🚀 Book your follow-up consultation session. Choose the duration that works best for your needs and continue your journey to success."
          }
        </Lead>



        {renderLoginMessage()}
      </div>

      <Card className="shadow-xl border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
        <CardContent className="pt-8">

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="min-h-[400px]">
              {renderStepContent()}
            </div>

            {submitStatus.message && (
              <Alert variant={submitStatus.type === 'error' ? "destructive" : "default"} className="animate-in slide-in-from-top-2">
                <AlertDescription>
                  {submitStatus.message}
                </AlertDescription>
              </Alert>
            )}

            <div className="flex justify-between pt-6 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={activeStep === 0}
                className="px-6 py-2"
              >
                ← Back
              </Button>

              {activeStep === 3 ? (
                <Button
                  type="submit"
                  disabled={isSubmitting || !isLoggedIn || !submitEnabled}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Booking Your Consultation...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Book Consultation
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Continue
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


    </div>

  );
} 