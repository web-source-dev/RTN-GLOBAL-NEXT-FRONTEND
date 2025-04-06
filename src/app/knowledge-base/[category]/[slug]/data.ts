import { 
  AlertCircle, 
  HelpCircle, 
  CheckCircle, 
  FileText, 
  Book, 
  Code, 
  FileQuestion
} from "lucide-react";

// Knowledge base categories
export const categories = {
  "getting-started": {
    id: "getting-started",
    title: "Getting Started Guides",
    description: "Essential guides to help you start using our platform efficiently. Learn the basics and get up to speed quickly.",
    icon: Book,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
  },
  "technical": {
    id: "technical",
    title: "Technical Documentation",
    description: "Detailed technical specifications and implementation guides for developers and technical users.",
    icon: FileText,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400"
  },
  "api": {
    id: "api",
    title: "API References",
    description: "Complete API documentation, endpoints, and code examples for integrating with our platform.",
    icon: Code,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400"
  },
  "best-practices": {
    id: "best-practices",
    title: "Best Practices",
    description: "Recommendations and best practices for optimal results and efficient use of our platform.",
    icon: CheckCircle,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400"
  },
  "troubleshooting": {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Solutions for common problems and error resolutions to help you overcome challenges quickly.",
    icon: HelpCircle,
    color: "bg-red-100 text-red-600 dark:bg-red-950/30 dark:text-red-400"
  },
  "releases": {
    id: "releases",
    title: "Release Notes",
    description: "Latest updates, features, and changes to our platform to keep you informed of improvements.",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400"
  },
  "account-access": {
    id: "account-access",
    title: "Account Access",
    description: "Information about account security, login issues, and verification procedures to keep your account secure.",
    icon: AlertCircle,
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-950/30 dark:text-cyan-400"
  },
  "billing": {
    id: "billing",
    title: "Billing & Payments",
    description: "Information about invoices, payment methods, and subscription management for your account.",
    icon: FileQuestion,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-950/30 dark:text-teal-400"
  }
};

// Sample article data with detailed content
export const articleData = {
  "account-access/reset-password": {
    title: "How to Reset Your Password",
    description: "Step-by-step instructions for resetting your password if you've forgotten it or need to change it for security reasons.",
    readTime: "3 min read",
    author: "RTN Global Support Team",
    lastUpdated: "June 18, 2023",
    content: `
      <h2>Forgotten Password Recovery</h2>
      <p>If you've forgotten your password, you can easily reset it by following these steps:</p>
      <ol>
        <li>Navigate to the login page and click on the "Forgot Password" link below the login form.</li>
        <li>Enter the email address associated with your account in the provided field.</li>
        <li>Click the "Reset Password" button to submit your request.</li>
        <li>Check your email inbox for a message from RTN Global with the subject "Password Reset Request".</li>
        <li>Open the email and click on the reset password link provided. This link is valid for 24 hours.</li>
        <li>On the password reset page, enter your new password twice to confirm it.</li>
        <li>Click "Save" to update your password.</li>
      </ol>
      <p>You'll receive a confirmation email that your password has been successfully changed, and you can now log in with your new password.</p>
      
      <h2>Changing Your Password for Security</h2>
      <p>It's a good security practice to change your password periodically. To change your current password:</p>
      <ol>
        <li>Log in to your RTN Global account.</li>
        <li>Click on your profile icon in the top-right corner.</li>
        <li>Select "Account Settings" from the dropdown menu.</li>
        <li>Navigate to the "Security" tab.</li>
        <li>Click on the "Change Password" button.</li>
        <li>Enter your current password for verification.</li>
        <li>Enter your new password and confirm it by typing it again.</li>
        <li>Click "Update Password" to save your changes.</li>
      </ol>
      
      <h2>Password Requirements</h2>
      <p>For your security, all passwords must meet the following requirements:</p>
      <ul>
        <li>Be at least 8 characters long</li>
        <li>Include at least one uppercase letter (A-Z)</li>
        <li>Include at least one lowercase letter (a-z)</li>
        <li>Include at least one number (0-9)</li>
        <li>Include at least one special character (e.g., !@#$%^&*)</li>
      </ul>
      
      <h2>Troubleshooting</h2>
      <p>If you encounter any issues during the password reset process:</p>
      <ul>
        <li><strong>Didn't receive the reset email?</strong> Check your spam or junk folder. If you still don't see it, try requesting another reset email after 5 minutes.</li>
        <li><strong>Reset link expired?</strong> The reset links are valid for 24 hours. If your link has expired, simply start the process again.</li>
        <li><strong>Still having trouble?</strong> Contact our support team at support@rtnglobal.com or submit a support ticket through your account.</li>
      </ul>
      
      <h2>Additional Security Recommendations</h2>
      <p>To keep your account secure, we recommend:</p>
      <ul>
        <li>Using a unique password that you don't use for other websites or services</li>
        <li>Enabling two-factor authentication for an additional layer of security</li>
        <li>Never sharing your password with others</li>
        <li>Logging out of your account when using shared or public computers</li>
        <li>Changing your password immediately if you suspect it may have been compromised</li>
      </ul>
    `,
    tags: ["account", "password", "security", "login"],
    helpful: 342,
    unhelpful: 18,
    relatedArticles: [
      {
        title: "Setting Up Two-Factor Authentication",
        path: "/knowledge-base/account-access/two-factor-authentication"
      },
      {
        title: "Account Verification Process",
        path: "/knowledge-base/account-access/account-verification"
      },
      {
        title: "Troubleshooting Login Issues",
        path: "/knowledge-base/account-access/login-issues"
      }
    ]
  },
  "api/authentication": {
    title: "API Authentication Guide",
    description: "Learn how to authenticate with our API using API keys, OAuth, and other methods to secure your integrations.",
    readTime: "7 min read",
    author: "RTN Global Development Team",
    lastUpdated: "June 20, 2023",
    content: `
      <h2>Introduction to API Authentication</h2>
      <p>Secure authentication is crucial when integrating with the RTN Global API. This guide covers all the authentication methods available for your integration, their benefits, and implementation details.</p>
      
      <h2>Authentication Methods</h2>
      <p>RTN Global API supports several authentication methods to fit different integration scenarios:</p>
      
      <h3>API Keys (Recommended for Server-side Applications)</h3>
      <p>API keys provide a simple way to authenticate requests to our API. Each key is associated with your account and has specific permissions.</p>
      <h4>How to Generate an API Key</h4>
      <ol>
        <li>Log in to your RTN Global account.</li>
        <li>Navigate to Developer Settings > API Keys.</li>
        <li>Click "Create New API Key".</li>
        <li>Provide a name for your key and select the required scopes/permissions.</li>
        <li>Click "Generate Key" to create your new API key.</li>
      </ol>
      <h4>Using Your API Key</h4>
      <p>Include your API key in requests using the Authorization header:</p>
      <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
      <p class="warning"><strong>Important:</strong> Never expose your API keys in client-side code or public repositories. Always store and use them securely on your server.</p>
      
      <h3>OAuth 2.0 (Recommended for User-centric Applications)</h3>
      <p>OAuth 2.0 is our recommended authentication method for applications that need to access data on behalf of a user.</p>
      <h4>OAuth Flow</h4>
      <ol>
        <li>Register your application in the Developer Portal to get client credentials.</li>
        <li>Redirect users to our authorization URL with your client ID and requested scopes.</li>
        <li>After user consent, we'll redirect back to your application with an authorization code.</li>
        <li>Exchange this code for an access token using your client secret.</li>
        <li>Use the access token to make authenticated API requests.</li>
      </ol>
      <h4>Example Authorization Request</h4>
      <pre><code>GET https://auth.rtnglobal.com/oauth/authorize
?client_id=YOUR_CLIENT_ID
&redirect_uri=YOUR_REDIRECT_URI
&response_type=code
&scope=read:data write:data</code></pre>
      
      <h2>Access Token Management</h2>
      <p>Access tokens are temporary credentials that expire after a set time (typically 1 hour). When a token expires, use your refresh token to get a new access token without requiring the user to log in again.</p>
      <h4>Refresh Token Flow</h4>
      <pre><code>POST https://auth.rtnglobal.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
&refresh_token=YOUR_REFRESH_TOKEN</code></pre>
      
      <h2>Rate Limits and Throttling</h2>
      <p>API requests are subject to rate limiting to ensure platform stability. The limits vary based on your subscription tier:</p>
      <ul>
        <li>Basic tier: 100 requests per minute</li>
        <li>Professional tier: 500 requests per minute</li>
        <li>Enterprise tier: 2000 requests per minute</li>
      </ul>
      <p>Rate limit headers are included in each response to help you track your usage:</p>
      <pre><code>X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1623938400</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Always use HTTPS for all API requests.</li>
        <li>Implement proper error handling for authentication failures.</li>
        <li>Rotate API keys periodically.</li>
        <li>Use the minimum required scopes for your application.</li>
        <li>Store tokens securely and never expose them to users.</li>
        <li>Implement token refresh logic to handle expired tokens.</li>
      </ul>
      
      <h2>Troubleshooting Common Issues</h2>
      <p>Here are solutions to common authentication problems:</p>
      <ul>
        <li><strong>401 Unauthorized</strong>: Verify your API key or access token is valid and not expired.</li>
        <li><strong>403 Forbidden</strong>: Check if you have the necessary permissions for the requested resource.</li>
        <li><strong>429 Too Many Requests</strong>: You've exceeded your rate limit. Implement backoff logic to handle rate limiting.</li>
      </ul>
    `,
    tags: ["api", "authentication", "security", "integration", "oauth", "api keys"],
    helpful: 587,
    unhelpful: 24,
    relatedArticles: [
      {
        title: "Understanding API Rate Limits",
        path: "/knowledge-base/api/rate-limits"
      },
      {
        title: "API Error Handling Best Practices",
        path: "/knowledge-base/api/error-handling"
      },
      {
        title: "New API Endpoints for Analytics",
        path: "/knowledge-base/api/new-endpoints"
      }
    ]
  }
};

// Generate default article data for any article that doesn't have specific content
export const generateArticleData = (category: string, slug: string) => {
  const categoryInfo = categories[category as keyof typeof categories];
  if (!categoryInfo) return null;

  // Check if we have predefined content for this article
  const articleKey = `${category}/${slug}`;
  if (articleData[articleKey as keyof typeof articleData]) {
    return articleData[articleKey as keyof typeof articleData];
  }

  // Generate default content for this category/slug combination
  return {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: `Comprehensive guide about ${slug.replace(/-/g, ' ')} in the context of ${categoryInfo.title.toLowerCase()}.`,
    readTime: "5 min read",
    author: "RTN Global Team",
    lastUpdated: "June 15, 2023",
    content: `
      <h2>Introduction</h2>
      <p>Welcome to our guide on ${slug.replace(/-/g, ' ')}. This article provides detailed information about this topic within the context of ${categoryInfo.title}.</p>
      
      <h2>Getting Started</h2>
      <p>To begin working with ${slug.replace(/-/g, ' ')}, you'll need to understand the basic concepts and requirements:</p>
      <ul>
        <li>Basic understanding of RTN Global platform</li>
        <li>Active account with appropriate permissions</li>
        <li>Familiarity with related features and tools</li>
      </ul>
      
      <h2>Key Concepts</h2>
      <p>Here are the essential concepts you should understand:</p>
      <ul>
        <li><strong>Concept 1:</strong> Description of the first important concept.</li>
        <li><strong>Concept 2:</strong> Description of the second important concept.</li>
        <li><strong>Concept 3:</strong> Description of the third important concept.</li>
      </ul>
      
      <h2>Step-by-Step Guide</h2>
      <p>Follow these steps to implement or use ${slug.replace(/-/g, ' ')}:</p>
      <ol>
        <li>First step in the process with detailed explanation.</li>
        <li>Second step in the process with detailed explanation.</li>
        <li>Third step in the process with detailed explanation.</li>
        <li>Final step and verification process.</li>
      </ol>
      
      <h2>Best Practices</h2>
      <p>Consider these recommendations for optimal results:</p>
      <ul>
        <li>Best practice recommendation 1</li>
        <li>Best practice recommendation 2</li>
        <li>Best practice recommendation 3</li>
      </ul>
      
      <h2>Troubleshooting</h2>
      <p>Common issues and their solutions:</p>
      <ul>
        <li><strong>Issue 1:</strong> Solution to the first common issue.</li>
        <li><strong>Issue 2:</strong> Solution to the second common issue.</li>
        <li><strong>Issue 3:</strong> Solution to the third common issue.</li>
      </ul>
      
      <h2>Advanced Topics</h2>
      <p>For users who are familiar with the basics, here are some advanced topics:</p>
      <ul>
        <li>Advanced topic 1 with brief explanation</li>
        <li>Advanced topic 2 with brief explanation</li>
        <li>Advanced topic 3 with brief explanation</li>
      </ul>
    `,
    tags: [category, slug.replace(/-/g, ' '), "guide", "tutorial"],
    helpful: Math.floor(Math.random() * 500) + 50,
    unhelpful: Math.floor(Math.random() * 30) + 5,
    relatedArticles: [
      {
        title: `Introduction to ${categoryInfo.title}`,
        path: `/knowledge-base/${category}/introduction`
      },
      {
        title: `Getting Started with ${categoryInfo.title}`,
        path: `/knowledge-base/${category}/getting-started`
      },
      {
        title: `Advanced ${categoryInfo.title} Techniques`,
        path: `/knowledge-base/${category}/advanced-techniques`
      }
    ]
  };
}; 