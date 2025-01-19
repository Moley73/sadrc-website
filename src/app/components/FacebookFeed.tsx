'use client';

import { useEffect, useState } from 'react';

interface FacebookSDK {
  XFBML: {
    parse: () => void;
  };
}

declare global {
  interface Window {
    FB?: FacebookSDK;
  }
}

export default function FacebookFeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFacebookSDK = () => {
      if (document.getElementById('facebook-jssdk')) {
        return;
      }

      // Add FB root div if not present
      if (!document.getElementById('fb-root')) {
        const fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';
        document.body.appendChild(fbRoot);
      }

      const js = document.createElement('script');
      js.id = 'facebook-jssdk';
      js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0';
      js.async = true;
      js.defer = true;
      js.crossOrigin = 'anonymous';
      js.onload = () => {
        setIsLoading(false);
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };
      js.onerror = () => setError('Failed to load Facebook feed');

      const fjs = document.getElementsByTagName('script')[0];
      fjs.parentNode?.insertBefore(js, fjs);
    };

    loadFacebookSDK();

    return () => {
      const script = document.getElementById('facebook-jssdk');
      if (script) {
        script.remove();
      }
      const fbRoot = document.getElementById('fb-root');
      if (fbRoot) {
        fbRoot.remove();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-xl bg-black/20 rounded-xl p-4">
        {isLoading && (
          <div className="flex items-center justify-center h-[600px]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sadrc-orange"></div>
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center h-[600px] text-red-500">
            {error}
          </div>
        )}
        <div 
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=61554240866294"
          data-tabs="timeline"
          data-width="500"
          data-height="600"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        ></div>
      </div>
      
      <a 
        href="https://www.facebook.com/profile.php?id=61554240866294" 
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center px-6 py-3 bg-sadrc-orange text-white rounded-lg hover:bg-opacity-90 transition-colors"
      >
        <svg 
          className="w-5 h-5 mr-2" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        View More Updates on Facebook
      </a>
    </div>
  );
}
