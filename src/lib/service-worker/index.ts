/**
 * Service worker registration utilities
 */

// Define proper Workbox event types
interface WorkboxEvent extends Event {
  isUpdate?: boolean;
  isExternal?: boolean;
}

// Extending Window interface to include workbox
declare global {
  interface Window {
    workbox: {
      Workbox: new (scriptURL: string, options?: object) => WorkboxInstance;
    };
  }
}

// Define WorkboxInstance interface
interface WorkboxInstance {
  addEventListener(event: string, callback: (event: WorkboxEvent) => void): void;
  register(options?: object): Promise<void>;
  update(): Promise<void>;
  messageSkipWaiting(): void;
}

// Style for update notification
const UPDATE_NOTIFICATION_STYLES = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 16px;
  z-index: 9999;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease-out;
`;

const UPDATE_BUTTON_STYLES = `
  background: #4a90e2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 12px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
`;

/**
 * Registers the service worker
 */
export const registerServiceWorker = async (): Promise<void> => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
    const { Workbox } = window.workbox;
    
    try {
      const wb = new Workbox('/service-worker.js', {
        // Additional registration options can be added here
        scope: '/'
      });
      
      // Add event listeners for various service worker states
      wb.addEventListener('installed', (event: WorkboxEvent) => {
        if (!event.isUpdate) {
          if(process.env.NODE_ENV === 'development'){
            console.log('Service Worker installed successfully');
          }
        } else {
          if(process.env.NODE_ENV === 'development'){
            console.log('Service Worker updated');
          }
        }
      });
      
      wb.addEventListener('activated', (event: WorkboxEvent) => {
        // Handle activation events
        if (!event.isExternal) {
          // When the service worker is activated, claim clients
          // This ensures the service worker takes control immediately
          if(process.env.NODE_ENV === 'development'){
            console.log('Service worker activated');
          }
        }
      });
      
      wb.addEventListener('waiting', (event: WorkboxEvent) => {
        // When a new service worker is waiting
        if(process.env.NODE_ENV === 'development'){
          console.log('New service worker is waiting to activate',event);
        }
        // Create a more user-friendly update notification
        const updateNotification = document.createElement('div');
        updateNotification.className = 'update-notification';
        updateNotification.setAttribute('style', UPDATE_NOTIFICATION_STYLES);
        updateNotification.innerHTML = `
          <div class="update-content">
            <p style="margin: 0 0 8px 0; font-weight: 500;">New version available</p>
            <p style="margin: 0; color: #666; font-size: 14px;">A new version of the application is available. Update now for the latest features and improvements.</p>
            <button id="update-button" style="${UPDATE_BUTTON_STYLES}">Update Now</button>
          </div>
        `;
        
        document.body.appendChild(updateNotification);
        
        document.getElementById('update-button')?.addEventListener('click', () => {
          // Skip waiting and refresh to activate the new service worker
          wb.messageSkipWaiting();
          window.location.reload();
        });
      });
      
      wb.addEventListener('controlling', () => {
        // This event fires when the service worker takes control
        if(process.env.NODE_ENV === 'development'){
          console.log('Service worker is controlling the page');
        }
      });
      
      wb.addEventListener('redundant', () => {
        // This fires when the service worker is discarded
        if(process.env.NODE_ENV === 'development'){
          console.log('Service worker has become redundant');
        }
      });
      
      // Handle offline mode
      if (!navigator.onLine) {
        if(process.env.NODE_ENV === 'development'){
          console.log('Application is offline, loading from cache');
        }
        // You could show an offline notification to the user here
      }
      
      // Listen for online/offline events
      window.addEventListener('online', () => {
        if(process.env.NODE_ENV === 'development'){
          console.log('Application is back online');
        }
        // You could update the UI to reflect online status
      });
      
      window.addEventListener('offline', () => {
        if(process.env.NODE_ENV === 'development'){
          console.log('Application is offline');
        }
        // You could update the UI to reflect offline status
      });
      
      // Register the service worker
      await wb.register();
      if(process.env.NODE_ENV === 'development'){
        console.log('Service Worker registered successfully');
      }
      
    } catch (error) {
      if(process.env.NODE_ENV === 'development'){
        console.error('Service Worker registration failed:', error);
      }
    }
  } else {
    if(process.env.NODE_ENV === 'development'){
      console.info('Service Worker not supported or Workbox not loaded');
    }
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
      if(process.env.NODE_ENV === 'development'){
        console.log('Service worker unregistered');
      }
    } catch (error) {
      if(process.env.NODE_ENV === 'development'){
        console.error('Service worker unregistration failed:', error);
      }
    }
  }
};

/**
 * Checks if the service worker needs an update.
 * This can be called periodically to check for updates.
 */
export const checkForServiceWorkerUpdate = async (): Promise<void> => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
    try {
      const { Workbox } = window.workbox;
      const wb = new Workbox('/service-worker.js');
      await wb.update();
      if(process.env.NODE_ENV === 'development'){
        console.log('Service Worker update check completed');
      }
    } catch (error) {
      if(process.env.NODE_ENV === 'development'){
        console.error('Service Worker update check failed:', error);
      }
    }
  }
}; 