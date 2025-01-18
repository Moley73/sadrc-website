import React from 'react';

interface LoadingStateProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingState({ 
  size = 'medium', 
  text = 'Loading...', 
  fullScreen = false 
}: LoadingStateProps) {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-[#1a1a1a] bg-opacity-75 flex items-center justify-center z-50' 
    : 'flex flex-col items-center justify-center p-4';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center">
        <div 
          className={`animate-spin rounded-full border-t-2 border-b-2 border-sadrc-orange ${sizeClasses[size]}`}
          role="status"
          aria-label="Loading"
        />
        {text && (
          <p className="mt-4 text-gray-300 text-sm sm:text-base">{text}</p>
        )}
      </div>
    </div>
  );
}
