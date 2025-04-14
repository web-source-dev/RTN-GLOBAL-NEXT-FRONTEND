import axios from "axios";

// Create an axios instance with base configuration
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://backend.mydomain.local:5000",
  withCredentials: true, // This ensures cookies are sent with requests
});

// Flag to prevent redirect loops
let isRedirecting = false;

// Add response interceptor to handle authentication errors
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Only handle errors in browser environment
    if (typeof window !== "undefined") {
      const { response, config } = error;
      
      if (config && config.method !== "get" && !isRedirecting) {
        if (response) {
          const { status } = response;
          
          // Handle 401 Unauthorized errors (session expired or not authenticated)
          if (status === 401) {
            isRedirecting = true;
            
            // Reset redirecting flag after a delay
            setTimeout(() => {
              isRedirecting = false;
            }, 5000);
            
            // Redirect to session expired page in the client
            if (!window.location.pathname.includes('/auth/session-expired') && 
                !window.location.pathname.includes('/auth/login')) {
              window.location.href = '/auth/session-expired';
            }
            
            return Promise.reject(error);
          }
          
          // Handle 500 and other server errors
          if (status >= 500) {
            isRedirecting = true;
            
            // Reset redirecting flag after a delay
            setTimeout(() => {
              isRedirecting = false;
            }, 5000);
            
            if (!window.location.pathname.includes('/error')) {
              window.location.href = '/error?type=server';
            }
            
            return Promise.reject(error);
          }
        }
        
        // Handle network errors
        if (!response && !window.location.pathname.includes('/error')) {
          isRedirecting = true;
          
          // Reset redirecting flag after a delay
          setTimeout(() => {
            isRedirecting = false;
          }, 5000);
          
          window.location.href = '/error?type=network';
        }
      }
    }
    
    return Promise.reject(error);
  }
);

// Define a Blog interface for type safety
interface Blog {
  title?: string;
  description?: string;
  content?: string;
  author?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    avatar?: string;
    _id?: string;
  };
  image?: string;
  imageAlt?: string;
  
  // Status & Visibility
  isActive?: boolean;
  isFeatured?: boolean;
  scheduledFor?: string;
  status?: 'draft' | 'published' | 'archived';
  
  // Categorization
  category?: string;
  tags?: string[];
  
  // Slug
  slug?: string;
  
  // Engagement
  views?: number;
  viewedBy?: string[];
  likes?: string[];
  shares?: string[];
  comments?: Array<unknown>;
  
  // SEO Metadata
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
  
  // Social Media Meta
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  
  // Additional Features
  estimatedReadTime?: number;
  wordCount?: number;
  language?: string;
  
  // Revision History
  revisions?: Array<{
    updatedAt: string;
    updatedBy: string;
    changes: string;
  }>;
  
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
  [key: string]: unknown; // For other properties we're not explicitly checking
}

// API endpoint groups for better organization
export const AuthAPI = {
  // Get current user
  getMe: () => API.get('/api/auth/me'),
  
  // Authentication
  login: (email: string, password: string) => 
    API.post('/api/auth/login', { email, password }),
  
  register: (userData: unknown) => 
    API.post('/api/auth/register', userData),
  
  logout: () => 
    API.post('/api/auth/logout'),
  
  // Two-factor authentication
  verifyTwoFactor: (email: string, code: string) => 
    API.post('/api/auth/2fa/validate', { email, token : code }),
  
  verifyBackupCode: (email: string, code: string) => 
    API.post('/api/auth/2fa/validate', { email, backupCode: code }),
  
  // Email verification
  verifyEmail: (email: string, code: string) => 
    API.post('/api/auth/verify-email', { email, code }),
  
  resendVerificationCode: (email: string) => 
    API.post('/api/auth/resend-verification', { email }),
  
  // Password management
  forgotPassword: (email: string) => 
    API.post('/api/auth/forgot-password', { email }),
  
  resetPassword: (token: string, password: string) => 
    API.post(`/api/auth/reset-password/${token}`, { password }),
  
  validateResetToken: (token: string) => 
    API.get(`/api/auth/validate-reset-token/${token}`),
  
  // Account management
  updateProfile: (profileData: unknown) => 
    API.put('/api/auth/update-profile', profileData),
  
  changePassword: (currentPassword: string, newPassword: string) => 
    API.post('/api/auth/change-password', { currentPassword, newPassword }),
  
  deleteAccount: () => 
    API.delete('/api/auth/delete-account'),
};

// Forms API endpoints
export const FormsAPI = {
  // Submit contact form
  submitContact: (formData: {
    name: string,
    email: string,
    phone?: string,
    company?: string,
    service: string,
    message: string
  }) => API.post('/api/forms/contact', formData),
  
  // Submit newsletter subscription
  subscribeNewsletter: (email: string, preferences?: string[]) => 
    API.post('/api/forms/newsletter', { email, preferences }),
    
  // Submit support ticket (requires authentication)
  submitSupportTicket: (ticketData: unknown) => 
    API.post('/api/forms/support', ticketData),
};

// Blog API endpoints
export const BlogAPI = {
  // Get all blogs with optional filtering
  getAllBlogs: (params?: {
    page?: number,
    limit?: number,
    category?: string,
    tag?: string,
    featured?: boolean,
    status?: string,
    language?: string
  }) => {
    return API.get('/api/blogs', { params });
  },
  
  // Get featured blogs
  getFeaturedBlogs: (limit = 4) => {
    return API.get('/api/blogs/featured', { params: { limit } });
  },
  
  // Get blog categories
  getCategories: () => {
    return API.get('/api/blogs/categories');
  },
  
  // Get popular tags
  getTags: () => {
    return API.get('/api/blogs/tags');
  },
  
  // Search blogs
  searchBlogs: (searchTerm: string, options?: {
    inTitle?: boolean,
    inContent?: boolean,
    inTags?: boolean,
    language?: string
  }) => {
    // If we have a dedicated search endpoint, use it
    if (options) {
      return API.get('/api/blogs/search', { 
        params: { 
          q: searchTerm,
          ...options
        } 
      });
    }
    
    // Otherwise, fallback to client-side filtering
    return API.get('/api/blogs').then(response => {
      const blogs = response.data;
      const filteredBlogs = blogs.filter((blog: Blog) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          blog.title?.toLowerCase().includes(searchLower) ||
          blog.description?.toLowerCase().includes(searchLower) ||
          blog.content?.toLowerCase().includes(searchLower) ||
          blog.category?.toLowerCase().includes(searchLower) ||
          blog.seoTitle?.toLowerCase().includes(searchLower) ||
          blog.seoDescription?.toLowerCase().includes(searchLower) ||
          blog.seoKeywords?.some((keyword: string) => keyword.toLowerCase().includes(searchLower)) ||
          blog.tags?.some((tag: string) => tag.toLowerCase().includes(searchLower))
        );
      });
      return { data: filteredBlogs };
    });
  },
  
  // Get single blog by slug or ID
  getBlogBySlug: (slugOrId: string) => {
    return API.get(`/api/blogs/${slugOrId}`);
  },
  
  // Get related blogs
  getRelatedBlogs: (blogId: string, limit = 3) => {
    return API.get(`/api/blogs/${blogId}/related`, { params: { limit } });
  },
  
  // Get blogs by language
  getBlogsByLanguage: (language = 'en', limit = 10) => {
    return API.get('/api/blogs', { params: { language, limit } });
  },
  
  // Get blogs by status (admin only)
  getBlogsByStatus: (status: string, limit = 10) => {
    return API.get('/api/blogs/admin/by-status', { params: { status, limit } });
  },
  
  // Get blogs scheduled for future publishing (admin only)
  getScheduledBlogs: () => {
    return API.get('/api/blogs/admin/scheduled');
  },
  
  // Like a blog post (requires authentication)
  likeBlog: (blogId: string) => 
    API.post(`/api/blogs/${blogId}/like`),
  
  // Add a comment to a blog (requires authentication)
  addComment: (blogId: string, content: string) => 
    API.post(`/api/blogs/${blogId}/comments`, { content }),
  
  // Reply to a comment
  replyToComment: (blogId: string, commentId: string, content: string) => 
    API.post(`/api/blogs/${blogId}/comments/${commentId}/replies`, { content }),
  
  // Like a comment (requires authentication)
  likeComment: (blogId: string, commentId: string) => 
    API.post(`/api/blogs/${blogId}/comments/${commentId}/like`),
  
  // Share a blog post
  shareBlog: (blogId: string) => 
    API.post(`/api/blogs/${blogId}/share`),
};

// Chat API endpoints for LiveChat support
export const ChatAPI = {
  // Start a new chat session or get existing active session
  startSession: () => 
    API.post('/api/chat/session'),
  
  // Get a specific chat session by ID
  getSession: (sessionId: string) => 
    API.get(`/api/chat/session/${sessionId}`),
  
  // Send a message in a chat session
  sendMessage: (sessionId: string, content: string, attachment?: File) => {
    const formData = new FormData();
    formData.append('content', content);
    if (attachment) {
      formData.append('attachment', attachment);
    }
    
    return API.post(`/api/chat/message/${sessionId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  
  // End a chat session
  endSession: (sessionId: string) => 
    API.post(`/api/chat/session/${sessionId}/end`),
  
  // Get all active chat sessions (admin only)
  getActiveSessions: () => 
    API.get('/api/chat/active-sessions'),
};

// Popup API endpoints
export const PopupsAPI = {
  // Save cookie consent preferences
  saveCookieConsent: (preferences: {
    necessary: boolean,
    preferences: boolean,
    analytics: boolean,
    marketing: boolean
  }) => API.post('/api/popups/cookie-consent', preferences),
  
  // Save newsletter subscription
  saveNewsletter: (data: {
    email: string,
    name?: string,
    company?: string,
    marketingConsent: boolean
  }) => API.post('/api/popups/newsletter', data),
  
  // Save user review
  saveReview: (data: {
    rating: number,
    review?: string,
    visitorType?: 'new' | 'returning' | 'unknown'
  }) => API.post('/api/popups/review', data),
  
  // Save special offer signup
  saveSpecialOffer: (data: {
    name: string,
    email: string
  }) => API.post('/api/popups/special-offer', data),
};

export default API;

// Replace any with a more specific type or unknown
export const handleApiError = (error: unknown, defaultMessage = "An error occurred") => {
  // Type checking and narrowing
  if (error && typeof error === 'object' && 'response' in error) {
    const errorResponse = error.response as { data?: { message?: string }};
    return errorResponse?.data?.message || defaultMessage;
  }
  return defaultMessage;
}; 