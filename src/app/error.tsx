'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-6">
        {/* Error icon */}
        <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-red-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
        </div>

        {/* Error title */}
        <h1 className="text-2xl font-bold text-white mb-4">
          Bir Hata Oluştu
        </h1>

        {/* Error message */}
        <p className="text-gray-400 mb-6">
          Üzgünüz, beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
        </p>

        {/* Error details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="text-gray-300 cursor-pointer mb-2 text-center">
              Hata Detayları (Geliştirme)
            </summary>
            <pre className="text-xs text-red-400 bg-gray-900 p-3 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Tekrar Dene
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );
}
