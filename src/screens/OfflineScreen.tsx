import React, { useState } from 'react';
import { ScreenId } from '../types';

interface OfflineScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const OfflineScreen: React.FC<OfflineScreenProps> = ({ onNavigate }) => {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    setTimeout(() => {
      setIsRetrying(false);
      onNavigate('home');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] flex flex-col justify-between p-8 text-center">
      <div className="pt-16 space-y-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-[#f6ece1] border border-[#7b5900]/30 flex items-center justify-center text-[#7b5900] shadow-xl animate-pulse">
          <span className="material-symbols-outlined text-5xl">wifi_off</span>
        </div>

        <div>
          <span className="text-[10px] font-bold text-[#7b5900] uppercase tracking-widest block mb-1">
            NETWORK SIGNAL INTERRUPTED
          </span>
          <h1 className="font-serif-title text-3xl font-bold text-[#1f1b14]">
            Connection Paused
          </h1>
          <p className="text-xs text-[#877868] max-w-xs mx-auto mt-2 leading-relaxed">
            Please check your internet connection or Wi-Fi to sync live availability with Master Barbers.
          </p>
        </div>
      </div>

      <div className="space-y-3 pb-6">
        <button
          onClick={handleRetry}
          disabled={isRetrying}
          className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] disabled:opacity-50"
        >
          {isRetrying ? 'Reconnecting Concierge...' : 'Try Reconnecting'}
        </button>
      </div>
    </div>
  );
};
