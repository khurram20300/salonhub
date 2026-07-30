import React from 'react';
import { ScreenId } from '../types';

interface ConfirmationScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fff8f2] flex flex-col justify-between p-6 text-center">
      <div className="pt-6 space-y-6">
        {/* Animated Success Badge */}
        <div className="relative w-24 h-24 mx-auto">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#7b5900] via-[#c89b3c] to-[#7b5900] p-1 shadow-2xl shadow-[#7b5900]/40 animate-pulse">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#7b5900]">
              <span className="material-symbols-outlined text-5xl font-bold">check</span>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#f6ece1] text-[#7b5900] uppercase tracking-widest mb-2">
            RESERVATION SECURED
          </span>
          <h1 className="font-serif-title text-3xl font-bold text-[#1f1b14]">
            Appointment Confirmed!
          </h1>
          <p className="text-xs text-[#877868] max-w-xs mx-auto mt-2 leading-relaxed">
            Your luxury treatment with Master Barber Julian Hunt is officially reserved in Beverly Hills.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white p-5 rounded-3xl border border-[#f0e4d2] text-left space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#f0e4d2]">
            <div>
              <span className="text-[10px] font-bold text-[#877868] uppercase block">Pass Code</span>
              <span className="font-mono font-bold text-sm text-[#7b5900]">#SH-882941</span>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
              CONFIRMED
            </span>
          </div>

          <div className="space-y-2.5 text-xs text-[#1f1b14]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#7b5900] text-[18px]">storefront</span>
              <div>
                <strong className="block">The Royal Barber Studio</strong>
                <span className="text-[#877868] text-[11px]">452 Rodeo Dr, Beverly Hills, CA</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#7b5900] text-[18px]">content_cut</span>
              <div>
                <strong className="block">Royal Signature Cut & Shave</strong>
                <span className="text-[#877868] text-[11px]">Julian Hunt • 45 mins session</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#7b5900] text-[18px]">calendar_today</span>
              <div>
                <strong className="block">Tuesday, October 12, 2024</strong>
                <span className="text-[#877868] text-[11px]">10:00 AM (Arrive 10 mins prior)</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert('Calendar event added to your calendar!')}
            className="w-full py-2.5 rounded-xl bg-[#f6ece1] hover:bg-[#ebdccb] text-[#7b5900] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">event</span>
            Add to System Calendar
          </button>
        </div>
      </div>

      <div className="space-y-3 pt-6">
        <button
          onClick={() => onNavigate('my_bookings')}
          className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] transition-all"
        >
          View My Bookings
        </button>

        <button
          onClick={() => onNavigate('home')}
          className="w-full py-3.5 rounded-2xl bg-white border border-[#f0e4d2] text-[#1f1b14] font-semibold text-xs hover:bg-[#f6ece1] transition-colors"
        >
          Back to Home Dashboard
        </button>
      </div>
    </div>
  );
};
