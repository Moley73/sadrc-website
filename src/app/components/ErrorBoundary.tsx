'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#2a2a2a] rounded-lg shadow-xl p-6 text-center">
        <h2 className="text-2xl font-bold text-sadrc-orange mb-4">Something went wrong!</h2>
        <p className="text-gray-300 mb-6">
          {error.message || 'An unexpected error occurred. Our team has been notified.'}
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="bg-sadrc-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Try again
          </button>
          <p className="text-sm text-gray-400">
            If the problem persists, please contact us at{' '}
            <a href="mailto:infosadrc@mail.com" className="text-sadrc-orange hover:underline">
              infosadrc@mail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
