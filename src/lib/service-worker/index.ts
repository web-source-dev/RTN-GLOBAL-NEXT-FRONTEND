/**
 * Service worker registration utilities
 */

// Extending Window interface to include workbox
declare global {
  interface Window {
    workbox: {
      Workbox: new (scriptURL: string, options?: object) => any;
    };
  }
}

/**
 * Registers the service worker
 */
export const registerServiceWorker = async (): Promise<void> => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
    const { Workbox } = window.workbox;
    
    try {
      const wb = new Workbox('/service-worker.js');
      
      // Add event listeners for various service worker states
      wb.addEventListener('installed', (e: React.SyntheticEvent) => {
        if (event.isUpdate) {
          // If it's an update, show a notification that a new version is available
          if (confirm('New version available. Reload to update?')) {
            window.location.reload();
          }
        }
      });
      
      wb.addEventListener('activated', (e: React.SyntheticEvent) => {
        // Optional: handle activation events
        console.log('Service worker activated:', event);
      });
      
      wb.addEventListener('waiting', (e: React.SyntheticEvent) => {
        // Handle waiting service worker
        console.log('Service worker waiting:', event);
      });
      
      // Register the service worker
      wb.register();
      console.log('Service Worker registered successfully');
      
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  } else {
    console.info('Service Worker not supported or Workbox not loaded');
  }
};

/**
 * Unregisters all service workers
 */
export const unregisterServiceWorker = async (): Promise<void> => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
      }
      console.log('Service worker unregistered');
    } catch (error) {
      console.error('Service worker unregistration failed:', error);
    }
  }
}; 