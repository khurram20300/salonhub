import React, { useState } from 'react';
import { ScreenId } from '../types';

interface LanguageScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const LanguageScreen: React.FC<LanguageScreenProps> = ({ onNavigate }) => {
  const [selectedLang, setSelectedLang] = useState('en');

  const languages = [
    { id: 'en', name: 'English', region: 'United States & UK' },
    { id: 'fr', name: 'Français', region: 'France & Monaco' },
    { id: 'de', name: 'Deutsch', region: 'Germany & Switzerland' },
    { id: 'es', name: 'Español', region: 'Spain & Latin America' },
    { id: 'ar', name: 'العربية', region: 'UAE & Middle East' }
  ];

  return (
    <div className="min-h-screen bg-[#fff8f2] p-5 space-y-6 flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('profile')}
            className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <h1 className="font-serif-title text-xl font-bold text-[#1f1b14]">Language & Region</h1>
        </div>

        <div className="space-y-3">
          {languages.map((lang) => {
            const isSelected = selectedLang === lang.id;
            return (
              <div
                key={lang.id}
                onClick={() => setSelectedLang(lang.id)}
                className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                  isSelected
                    ? 'bg-white border-[#7b5900] shadow-md ring-1 ring-[#7b5900]/20'
                    : 'bg-white border-[#f0e4d2] hover:border-[#d2c5b1]'
                }`}
              >
                <div>
                  <h4 className="font-bold text-xs text-[#1f1b14]">{lang.name}</h4>
                  <p className="text-[10px] text-[#877868]">{lang.region}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  isSelected ? 'border-[#7b5900] bg-[#7b5900]' : 'border-[#d2c5b1]'
                }`}>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => onNavigate('profile')}
        className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700]"
      >
        Save Language Preference
      </button>
    </div>
  );
};
