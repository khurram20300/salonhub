import React, { useState } from 'react';
import { ScreenId } from '../types';

interface VerificationScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const VerificationScreen: React.FC<VerificationScreenProps> = ({ onNavigate }) => {
  const [code, setCode] = useState(['8', '8', '2', '9']);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] flex flex-col justify-between p-6">
      <div className="pt-2">
        <button
          onClick={() => onNavigate('login')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14] mb-6"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>

        <div className="w-14 h-14 rounded-2xl bg-[#f6ece1] border border-[#f0e4d2] flex items-center justify-center text-[#7b5900] mb-6">
          <span className="material-symbols-outlined text-3xl">verified_user</span>
        </div>

        <h1 className="font-serif-title text-3xl font-bold text-[#1f1b14] mb-2">
          Verify Identity
        </h1>
        <p className="text-xs text-[#877868] mb-8">
          We've sent a 4-digit security passkey to <strong className="text-[#1f1b14]">+1 (555) ***-3456</strong>.
        </p>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex items-center justify-between gap-3 max-w-xs mx-auto">
            {code.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                className="w-14 h-16 rounded-2xl bg-white border border-[#f0e4d2] text-center text-2xl font-bold text-[#7b5900] shadow-sm focus:outline-none focus:border-[#7b5900] focus:ring-2 focus:ring-[#7b5900]/20 transition-all"
              />
            ))}
          </div>

          <div className="text-center">
            <p className="text-xs text-[#877868]">
              Didn't receive code?{' '}
              <button
                type="button"
                className="font-semibold text-[#7b5900] hover:underline"
              >
                Resend in 00:45
              </button>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] active:scale-[0.98] transition-all"
          >
            Verify & Continue
          </button>
        </form>
      </div>

      <div className="pt-6 text-center text-[11px] text-[#877868]">
        Encrypted with 256-bit TLS Concierge Security
      </div>
    </div>
  );
};
