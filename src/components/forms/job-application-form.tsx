'use client';

import React, { useState, useEffect } from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue
} from '@/components/ui/select';
import { AlertCircle, CheckCircle2, FileUp, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useAuth } from '@/lib/contexts/auth-provider';
import { Card, CardContent } from '@/components/ui/card';

// Validation schema
const applicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  experienceLevel: z.string().min(1, 'Please select your experience level'),
  currentCompany: z.string().optional(),
  linkedInProfile: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  portfolioUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  coverLetter: z.string().min(100, 'Cover letter must be at least 100 characters'),
  willingToRelocate: z.boolean().default(false),
  resume: z.instanceof(File).refine(file => {
    return file.size < 5000000; // 5MB
  }, 'File size must be less than 5MB').refine(file => {
    return ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type);
  }, 'Only PDF and Word documents are allowed')
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
  department?: string;
}

export default function JobApplicationForm({ jobId, jobTitle, department }: JobApplicationFormProps) {
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // Initialize form
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      phone: '',
      experienceLevel: '',
      currentCompany: '',
      linkedInProfile: '',
      portfolioUrl: '',
      coverLetter: '',
      willingToRelocate: false
    }
  });

  // Update form values when user data is available
  useEffect(() => {
    if (user) {
      form.setValue('firstName', user.firstName || '');
      form.setValue('lastName', user.lastName || '');
      form.setValue('email', user.email || '');
      form.setValue('phone', '');
    }
  }, [user, form]);

  const onSubmit = async (data: ApplicationFormValues) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to submit your job application.",
        variant: "destructive"
      });
      return;
    }

    if (!resumeFile) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('jobId', jobId);
      
      // Type-safe way to append form data
      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'resume' && value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });
      
      // Add required fields from backend model that aren't in the form
      formData.append('department', department || '');  // Use the department prop
      formData.append('position', jobTitle);  // Use the jobTitle prop as the position
      
      formData.append('resume', resumeFile);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error('API URL is not configured');
      }

      const response = await fetch(`${apiUrl}/api/forms/job-application`, {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error submitting application');
      }

      setSuccess(true);
      form.reset();
      setResumeFile(null);
      
      toast({
        title: "Application Submitted",
        description: "Your job application has been successfully submitted. We'll be in touch!",
        variant: "default"
      });
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      console.error('Error submitting application:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    
    // Validate file type and size before setting
    if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF or Word document.",
        variant: "destructive"
      });
      return;
    }

    if (file.size > 5000000) { // 5MB
      toast({
        title: "File Too Large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive"
      });
      return;
    }

    setResumeFile(file);
    form.setValue('resume', file);
  };

  if (success) {
    return (
      <Card className="border-2 border-green-500 shadow-lg overflow-hidden">
        <div className="bg-green-50 dark:bg-green-900/20 py-6 px-8 border-b border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">Application Submitted!</h2>
          </div>
        </div>
        <CardContent className="pt-8 pb-10">
          <div className="flex flex-col items-center text-center space-y-5">
            <p className="text-lg text-muted-foreground max-w-lg">
              Thank you for applying for the <strong className="text-foreground">{jobTitle}</strong> position. We&apos;ve received your application and will review it shortly.
            </p>
            <p className="text-muted-foreground">
              We&apos;ll contact you if we&apos;d like to move forward with your application.
            </p>
            <div className="flex gap-4 mt-6">
              <Button asChild variant="outline" size="lg">
                <a href="/careers">Browse More Jobs</a>
              </Button>
              <Button asChild size="lg">
                <a href="/account/applications">View My Applications</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!isAuthenticated) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-5 w-5" />
        <AlertTitle className="text-lg font-semibold mb-2">Authentication Required</AlertTitle>
        <AlertDescription className="text-base">
          You need to be logged in to submit a job application.
          <div className="mt-6">
            <Button 
              onClick={() => {
                window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
              }} 
              variant="default"
              size="lg"
              className="px-8"
            >
              Log In / Register
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-8">
      <div className="mb-8 bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
        <h2 className="text-2xl font-semibold mb-2">Apply for: {jobTitle}</h2>
        {department && <p className="text-muted-foreground text-lg">Department: {department}</p>}
      </div>

      {error && (
        <Alert variant="destructive" className="mb-8">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error Submitting Application</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="shadow-sm">
        <CardContent className="pt-6 pb-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-medium border-b pb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">First Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Last Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Email*</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Phone Number*</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Phone Number" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-6 pt-2">
                <h3 className="text-lg font-medium border-b pb-2">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="experienceLevel"
                    render={({ field }: { field: ControllerRenderProps<ApplicationFormValues, "experienceLevel"> }) => (
                      <FormItem>
                        <FormLabel className="text-base">Experience Level*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11">
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Entry Level">Entry Level</SelectItem>
                            <SelectItem value="Mid Level">Mid Level</SelectItem>
                            <SelectItem value="Senior">Senior</SelectItem>
                            <SelectItem value="Lead">Lead</SelectItem>
                            <SelectItem value="Executive">Executive</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentCompany"
                    render={({ field }: { field: ControllerRenderProps<ApplicationFormValues, "currentCompany"> }) => (
                      <FormItem>
                        <FormLabel className="text-base">Current Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Current Company" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="linkedInProfile"
                    render={({ field }: { field: ControllerRenderProps<ApplicationFormValues, "linkedInProfile"> }) => (
                      <FormItem>
                        <FormLabel className="text-base">LinkedIn Profile (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="LinkedIn URL" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="portfolioUrl"
                    render={({ field }: { field: ControllerRenderProps<ApplicationFormValues, "portfolioUrl"> }) => (
                      <FormItem>
                        <FormLabel className="text-base">Portfolio URL (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Portfolio URL" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-6 pt-2">
                <h3 className="text-lg font-medium border-b pb-2">Application Details</h3>
                
                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }: { field: ControllerRenderProps<ApplicationFormValues, "coverLetter"> }) => (
                    <FormItem>
                      <FormLabel className="text-base">Cover Letter*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us why you're interested in this position and why you'd be a good fit..."
                          className="min-h-[250px] resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="resume"
                  render={() => (
                    <FormItem className="pt-2">
                      <FormLabel className="text-base">Resume (PDF or Word document)*</FormLabel>
                      <div className="mt-2 p-6 border-2 border-dashed rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex flex-col items-center justify-center space-y-3">
                          {!resumeFile ? (
                            <>
                              <div className="p-3 rounded-full bg-primary/10">
                                <FileUp className="h-6 w-6 text-primary" />
                              </div>
                              <div className="text-center">
                                <Label 
                                  htmlFor="resume-upload" 
                                  className="text-primary font-medium hover:text-primary/80 cursor-pointer transition-colors"
                                >
                                  Click to upload
                                </Label>
                                <p className="text-sm text-muted-foreground mt-1">
                                  PDF or Word Document (max. 5MB)
                                </p>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                              </div>
                              <div className="text-center">
                                <p className="font-medium">{resumeFile.name}</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                                <Button 
                                  variant="link" 
                                  className="p-0 h-auto mt-2" 
                                  onClick={() => {
                                    setResumeFile(null);
                                    form.setValue('resume', undefined as unknown as File);
                                  }}
                                >
                                  Change File
                                </Button>
                              </div>
                            </>
                          )}
                        </div>
                        <Input 
                          id="resume-upload"
                          type="file" 
                          accept=".pdf,.doc,.docx" 
                          className="hidden" 
                          onChange={handleFileChange}
                        />
                      </div>
                      {form.formState.errors.resume && (
                        <p className="text-sm font-medium text-destructive mt-2">
                          {form.formState.errors.resume.message?.toString()}
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="willingToRelocate"
                  render={({ field }: { field: ControllerRenderProps<ApplicationFormValues, "willingToRelocate"> }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-base">
                          I am willing to relocate for this position if necessary
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Check this box if you&apos;re open to relocation for this role
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="pt-4 border-t">
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full md:w-auto px-8 py-6 h-auto text-base"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  By submitting this application, you agree to our Privacy Policy and Terms of Service
                </p>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
