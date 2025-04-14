# Agency Website Popup Components

This folder contains essential popup components for your agency website. These popups are designed to enhance user engagement, collect leads, and comply with privacy regulations.

## Components Overview

1. **Cookie Consent Bottom Bar**
   - Appears at the bottom of the page after 20 seconds on first visit
   - Allows users to customize cookie preferences
   - Complies with GDPR and privacy regulations
   - Persists user choices for 30 days

2. **Newsletter Popup**
   - Appears after 5 minutes on site (if cookie consent is not showing)
   - Collects user email and other optional information
   - Provides clear marketing consent options
   - Persists user's dismissal for 24 hours

3. **Exit-Intent Special Offer Popup**
   - Appears when a user is about to leave the site (cursor moves to the top of the viewport)
   - Promotes a special discount or offer to capture leads before they leave
   - Helps prevent bounce and convert visitors into leads
   - Persists user's dismissal for 24 hours

4. **Review Popup**
   - Appears for returning visitors (at least 3rd visit within 14 days)
   - Shows 30 seconds after page load
   - Allows users to leave a star rating and feedback
   - Provides valuable social proof and feedback for your business
   - Persists for 30 days after display or submission

## Installation & Integration

### Step 1: Add the PopupProvider to your layout

Add the `PopupProvider` to your root layout or app component to enable popups throughout your application:

```tsx
// In your app/layout.tsx file

import { PopupProvider } from '@/components/popups';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PopupProvider>
          {children}
        </PopupProvider>
      </body>
    </html>
  );
}
```

### Step 2: Using the context in your components (optional)

If you need to programmatically control popups, use the provided hook:

```tsx
import { usePopups } from '@/components/popups';

export default function YourComponent() {
  const { dismissCookieConsent, acceptCookies } = usePopups();
  
  // Use these functions to control popups
  return (
    <button onClick={acceptCookies}>Accept Cookies</button>
  );
}
```

## localStorage Storage

These popups use localStorage to track user interactions and respect their preferences:

- `cookie-consent-displayed`: Tracks when cookie consent was shown (expires after 30 days)
- `cookie-preferences`: Stores user's cookie preferences (persists until manually cleared)
- `newsletter-displayed`: Tracks when newsletter popup was shown (expires after 24 hours)
- `newsletter-subscribed`: Stores user's newsletter subscription data
- `special-offer-displayed`: Tracks when special offer popup was shown (expires after 24 hours)
- `special-offer-claimed`: Stores data when user claims special offer
- `review-popup-displayed`: Tracks when review popup was shown (expires after 30 days)
- `user-review`: Stores user's review data
- `visits-count`: Tracks the number of times a user has visited the site
- `last-visit`: Stores the timestamp of the user's last visit

## Customization

Each popup component can be customized by modifying the respective component files:

- `cookie-consent-popup.tsx`
- `newsletter-popup.tsx`
- `special-offer-popup.tsx`
- `review-popup.tsx`

The styling uses Tailwind CSS classes and can be adjusted to match your brand's design system.

## Accessibility

These popups are built with accessibility in mind:
- Keyboard navigable
- Screen reader friendly
- Clear focus states
- Proper ARIA attributes

## Best Practices

1. Don't show too many popups at once - the provider manages this automatically
2. Respect user choices and preferences
3. Provide clear value in exchange for user information
4. Make it easy for users to dismiss popups
5. Use exit-intent detection to catch users before they leave
6. Target returning visitors for reviews as they have more experience with your services 