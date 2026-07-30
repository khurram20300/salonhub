import React, { useState } from 'react';
import { ScreenId } from '../types';

interface PaymentScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const PaymentScreen: React.FC<PaymentScreenProps> = ({ onNavigate }) => {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'apple' | 'google' | 'salon'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayNow = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onNavigate('confirmation');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] pb-28 p-5 space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('checkout')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <div>
          <h1 className="font-serif-title text-xl font-bold text-[#1f1b14]">
            Payment Method
          </h1>
          <p className="text-[11px] text-[#877868]">Encrypted 256-bit secure checkout</p>
        </div>
      </div>

      {/* Saved Cards List */}
      <div className="space-y-3">
        <h3 className="font-serif-title text-sm font-bold text-[#1f1b14]">
          Payment Options
        </h3>

        {/* Visa Card Option */}
        <div
          onClick={() => setSelectedMethod('card')}
          className={`p-4 rounded-3xl border cursor-pointer transition-all flex items-center justify-between ${
            selectedMethod === 'card'
              ? 'bg-[#1f1b14] text-white border-[#7b5900] shadow-xl'
              : 'bg-white text-[#1f1b14] border-[#f0e4d2] hover:border-[#d2c5b1]'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-800 text-white font-bold text-xs flex items-center justify-center tracking-wider">
              VISA
            </div>
            <div>
              <h4 className="font-bold text-xs">Visa ending in 4242</h4>
              <p className={`text-[10px] ${selectedMethod === 'card' ? 'text-[#d2c5b1]' : 'text-[#877868]'}`}>
                Expires 12/26 • Alexander Hunt
              </p>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedMethod === 'card' ? 'border-[#ffdea4] bg-[#7b5900]' : 'border-[#d2c5b1]'
          }`}>
            {selectedMethod === 'card' && <span className="w-2 h-2 rounded-full bg-white" />}
          </div>
        </div>

        {/* Apple Pay Option */}
        <div
          onClick={() => setSelectedMethod('apple')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
            selectedMethod === 'apple'
              ? 'bg-[#1f1b14] text-white border-[#7b5900] shadow-xl'
              : 'bg-white text-[#1f1b14] border-[#f0e4d2] hover:border-[#d2c5b1]'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">apple</span>
            </div>
            <div>
              <h4 className="font-bold text-xs">Apple Pay</h4>
              <p className={`text-[10px] ${selectedMethod === 'apple' ? 'text-[#d2c5b1]' : 'text-[#877868]'}`}>
                One-tap biometrics confirmation
              </p>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedMethod === 'apple' ? 'border-[#ffdea4] bg-[#7b5900]' : 'border-[#d2c5b1]'
          }`}>
            {selectedMethod === 'apple' && <span className="w-2 h-2 rounded-full bg-white" />}
          </div>
        </div>

        {/* Google Pay Option */}
        <div
          onClick={() => setSelectedMethod('google')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
            selectedMethod === 'google'
              ? 'bg-[#1f1b14] text-white border-[#7b5900] shadow-xl'
              : 'bg-white text-[#1f1b14] border-[#f0e4d2] hover:border-[#d2c5b1]'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f6ece1] text-[#7b5900] flex items-center justify-center font-bold text-sm">
              G
            </div>
            <div>
              <h4 className="font-bold text-xs">Google Pay</h4>
              <p className={`text-[10px] ${selectedMethod === 'google' ? 'text-[#d2c5b1]' : 'text-[#877868]'}`}>
                Instant checkout via Google Wallet
              </p>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedMethod === 'google' ? 'border-[#ffdea4] bg-[#7b5900]' : 'border-[#d2c5b1]'
          }`}>
            {selectedMethod === 'google' && <span className="w-2 h-2 rounded-full bg-white" />}
          </div>
        </div>

        {/* Pay at Salon Option */}
        <div
          onClick={() => setSelectedMethod('salon')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
            selectedMethod === 'salon'
              ? 'bg-[#1f1b14] text-white border-[#7b5900] shadow-xl'
              : 'bg-white text-[#1f1b14] border-[#f0e4d2] hover:border-[#d2c5b1]'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f6ece1] text-[#7b5900] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">storefront</span>
            </div>
            <div>
              <h4 className="font-bold text-xs">Pay at Salon</h4>
              <p className={`text-[10px] ${selectedMethod === 'salon' ? 'text-[#d2c5b1]' : 'text-[#877868]'}`}>
                In-person payment after your appointment
              </p>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedMethod === 'salon' ? 'border-[#ffdea4] bg-[#7b5900]' : 'border-[#d2c5b1]'
          }`}>
            {selectedMethod === 'salon' && <span className="w-2 h-2 rounded-full bg-white" />}
          </div>
        </div>
      </div>

      {/* Security Info Card */}
      <div className="p-4 rounded-2xl bg-[#f6ece1] border border-[#7b5900]/20 flex items-center gap-3">
        <span className="material-symbols-outlined text-2xl text-[#7b5900]">lock</span>
        <div>
          <h4 className="font-bold text-xs text-[#1f1b14]">100% Concierge Protection</h4>
          <p className="text-[10px] text-[#52493d]">
            Free rescheduling up to 2 hours before your appointment. Money-back satisfaction guarantee.
          </p>
        </div>
      </div>

      {/* Sticky Action Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-[#f0e4d2] p-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#877868] uppercase font-medium block">Total Payable</span>
          <span className="font-serif-title font-bold text-2xl text-[#1f1b14]">$90.00</span>
        </div>

        <button
          onClick={handlePayNow}
          disabled={isProcessing}
          className="py-3.5 px-6 rounded-2xl bg-[#7b5900] text-white font-semibold text-sm shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {isProcessing ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              <span>Authorizing...</span>
            </>
          ) : (
            <>
              <span>Pay & Secure Slot</span>
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
