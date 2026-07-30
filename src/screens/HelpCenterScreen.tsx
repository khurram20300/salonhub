import React, { useState } from 'react';
import { ScreenId } from '../types';

interface HelpCenterScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const HelpCenterScreen: React.FC<HelpCenterScreenProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I reschedule or cancel my appointment?',
      a: 'You can reschedule or cancel free of charge up to 2 hours prior to your slot directly from the My Appointments tab.'
    },
    {
      q: 'What is the Gold Member Concierge Guarantee?',
      a: 'If you are unsatisfied with your grooming treatment, SalonHub offers a 100% complimentary re-service within 7 days.'
    },
    {
      q: 'Can I request a specific Master Barber for my home service?',
      a: 'Yes, elite tier members can request home grooming sessions with Julian Hunt or Elena Rossi.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff8f2] p-5 space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('profile')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <h1 className="font-serif-title text-xl font-bold text-[#1f1b14]">Help & Concierge</h1>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-[#f0e4d2] flex items-center gap-3 shadow-xs">
        <span className="material-symbols-outlined text-2xl text-[#877868]">search</span>
        <input
          type="text"
          placeholder="Search help topics, policies & gift cards..."
          className="w-full text-xs text-[#1f1b14] focus:outline-none"
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-serif-title text-base font-bold text-[#1f1b14]">Frequently Asked Questions</h3>
        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="bg-white rounded-2xl border border-[#f0e4d2] p-4 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between font-bold text-xs text-[#1f1b14]">
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-[18px] text-[#7b5900]">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </div>
                {isOpen && (
                  <p className="text-xs text-[#52493d] mt-2 pt-2 border-t border-[#f0e4d2] leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-5 rounded-3xl bg-[#1f1b14] text-white space-y-3 text-center">
        <span className="material-symbols-outlined text-4xl text-[#ffdea4]">support_agent</span>
        <h3 className="font-serif-title text-lg font-bold">24/7 Priority Concierge</h3>
        <p className="text-xs text-[#d2c5b1]">
          Need instant help with a booking? Speak directly with our dedicated VIP assistant.
        </p>
        <button
          onClick={() => onNavigate('chat')}
          className="py-3 px-6 rounded-2xl bg-[#7b5900] text-white font-semibold text-xs shadow-md"
        >
          Start Live Concierge Chat
        </button>
      </div>
    </div>
  );
};
