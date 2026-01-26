import React from 'react';

export default function RafikiDisclaimer() {
  return (
    <footer className="w-full px-6 py-12 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          
          {/* Legal Badge */}
          <div className="shrink-0">
            <span className="px-2 py-1 text-[10px] font-bold tracking-[0.15em] uppercase border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-500 rounded">
              Legal Disclaimer
            </span>
          </div>

          {/* Disclaimer Content */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
              Rafiki AI provides informational insights and educational support. It does not provide personalized financial advice, does not execute trades, and does not guarantee returns.
            </p>
            <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-tight">
              All investment decisions are made by the user.
            </p>
          </div>
        </div>

        {/* Separator for bottom padding */}
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-900 flex justify-between items-center">
          <p className="text-[10px] text-gray-400 dark:text-gray-600 uppercase font-medium">
            © 2026 Zanari. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] text-gray-400 dark:text-gray-600 font-medium cursor-pointer hover:text-blue-600">Privacy Policy</span>
            <span className="text-[10px] text-gray-400 dark:text-gray-600 font-medium cursor-pointer hover:text-blue-600">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}