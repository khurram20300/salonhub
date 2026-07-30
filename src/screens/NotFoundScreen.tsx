import React from 'react';
import { ScreenId } from '../types';

interface NotFoundScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const NotFoundScreen: React.FC<NotFoundScreenProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fff8f2] flex flex-col justify-between p-8 text-center">
      <div className="pt-12 space-y-6">
        {/* Arched Door 404 Visual Icon */}
        <div className="w-32 h-44 mx-auto rounded-t-full border-4 border-[#7b5900] bg-[#f6ece1] p-2 flex flex-col items-center justify-center shadow-xl relative overflow-hidden">
          <div className="w-full h-full rounded-t-full border border-dashed border-[#7b5900]/50 flex items-center justify-center">
            <span className="font-serif-title font-bold text-4xl text-[#7b5900]">404</span>
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold text-[#7b5900] uppercase tracking-widest block mb-1">
            EXCLUSIVITY CONTINUES
          </span>
          <h1 className="font-serif-title text-3xl font-bold text-[#1f1b14]">
            Lost in Elegance
          </h1>
          <p className="text-xs text-[#877868] max-w-xs mx-auto mt-2 leading-relaxed">
            The bespoke service or private suite page you requested could not be located.
          </p>
        </div>
      </div>

      <div className="space-y-3 pb-6">
        <button
          onClick={() => onNavigate('home')}
          className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700]"
        >
          Return to Home Dashboard
        </button>
      </div>
    </div>
  );
};
