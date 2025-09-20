'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-6">
        {/* 404 Icon */}
        <div className="w-24 h-24 mx-auto mb-8 bg-gray-800 rounded-full flex items-center justify-center">
          <span className="text-4xl font-bold text-white">404</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Sayfa Bulunamadı
        </h1>

        {/* Description */}
        <p className="text-gray-400 mb-8 text-lg">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-block"
          >
            Ana Sayfaya Dön
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            Geri Git
          </button>
        </div>

        {/* Additional help */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Yardıma mı ihtiyacınız var?</p>
          <p className="mt-1">
            <Link href="/" className="text-blue-400 hover:text-blue-300">
              Destek sayfamızı
            </Link>
            {' '}ziyaret edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
