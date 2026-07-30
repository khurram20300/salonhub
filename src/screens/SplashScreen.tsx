import React, { useEffect } from 'react';
import { ScreenId } from '../types';

interface SplashScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onNavigate }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="relative min-h-screen bg-[#1f1b14] text-[#fff8f2] flex flex-col items-center justify-between p-8 overflow-hidden select-none">
      {/* Background Gold Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7b5900]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="w-full flex justify-end">
        <span className="text-xs tracking-widest text-[#d2c5b1]/60 uppercase font-mono">
          v1.0.0
        </span>
      </div>

      <div
        onClick={() => onNavigate('onboarding')}
        className="flex flex-col items-center text-center cursor-pointer group z-10"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7b5900] via-[#c89b3c] to-[#353028] p-0.5 shadow-2xl shadow-[#7b5900]/40 mb-6 group-hover:scale-105 transition-transform duration-300">
          <div className="w-full h-full rounded-full bg-[#1f1b14] flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl text-[#ffdea4] animate-float">
              content_cut
            </span>
          </div>
        </div>

        <h1 className="font-serif-title text-4xl font-extrabold tracking-tight text-white mb-2">
          Salon<span className="text-[#c89b3c]">Hub</span>
        </h1>
        <p className="text-sm text-[#d2c5b1] tracking-widest uppercase font-medium">
          Exclusivity Redefined
        </p>

        <div className="mt-12 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c89b3c] animate-ping" />
          <span className="text-xs text-[#877868]">Tap anywhere to enter</span>
        </div>
      </div>

      <div className="text-center z-10">
        <p className="text-xs text-[#877868]">
          Crafted for the Discerning Gentleman & Modern Muse
        </p>
      </div>
    </div>
  );
};
