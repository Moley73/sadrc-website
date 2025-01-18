'use client';

import { useEffect } from 'react';

export default function FacebookFeed() {
  useEffect(() => {
    // Load Facebook SDK
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Add FB root if not present
    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.appendChild(fbRoot);
    }
  }, []);

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Latest <span className="text-sadrc-orange">Updates</span>
        </h2>
        <div className="flex flex-col items-center max-w-xl mx-auto">
          <div className="w-full bg-black/20 rounded-xl p-4">
            <div 
              className="fb-like-box"
              data-href="https://www.facebook.com/skegnessanddistrictrunningclub"
              data-width="500"
              data-height="600"
              data-colorscheme="light"
              data-show-faces="false"
              data-header="false"
              data-stream="true"
              data-show-border="false"
            ></div>
          </div>
          
          <a 
            href="https://www.facebook.com/skegnessanddistrictrunningclub" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center px-6 py-3 bg-sadrc-orange text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            View More Updates on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
