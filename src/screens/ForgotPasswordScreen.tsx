import React, { useState } from 'react';
import { ScreenId } from '../types';

interface ForgotPasswordScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
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
          <span className="material-symbols-outlined text-3xl">key</span>
        </div>

        <h1 className="font-serif-title text-3xl font-bold text-[#1f1b14] mb-2">
          Forgot Password?
        </h1>
        <p className="text-xs text-[#877868] mb-8">
          Enter your registered email address and we will send you a secure link to reset your password.
        </p>

        {isSent ? (
          <div className="p-6 rounded-2xl bg-[#f6ece1] border border-[#7b5900]/30 text-center space-y-3">
            <span className="material-symbols-outlined text-4xl text-[#7b5900]">mark_email_read</span>
            <h3 className="font-bold text-sm text-[#1f1b14]">Reset Link Sent!</h3>
            <p className="text-xs text-[#52493d]">
              We've dispatched password recovery instructions to <strong className="text-[#1f1b14]">{email || 'your email'}</strong>. Please check your inbox.
            </p>
            <button
              onClick={() => onNavigate('verification')}
              className="mt-4 w-full py-3 rounded-xl bg-[#7b5900] text-white font-medium text-xs shadow-md"
            >
              Enter Verification Code
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#1f1b14] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#f0e4d2] text-sm text-[#1f1b14] focus:outline-none focus:border-[#7b5900] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] active:scale-[0.98] transition-all"
            >
              Send Recovery Link
            </button>
          </form>
        )}
      </div>

      <div className="pt-6 text-center">
        <button
          onClick={() => onNavigate('login')}
          className="text-xs font-semibold text-[#7b5900] hover:underline"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );
};
