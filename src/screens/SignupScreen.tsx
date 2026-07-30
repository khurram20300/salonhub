import React, { useState } from 'react';
import { ScreenId } from '../types';

interface SignupScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const SignupScreen: React.FC<SignupScreenProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('verification');
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] flex flex-col justify-between p-6">
      <div className="pt-2">
        <button
          onClick={() => onNavigate('login')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14] mb-4"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>

        <h1 className="font-serif-title text-3xl font-bold text-[#1f1b14] mb-2">
          Create Account
        </h1>
        <p className="text-xs text-[#877868] mb-6">
          Join SalonHub for priority bookings, bespoke artisan matchmaking, and luxury rewards.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#1f1b14] mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Alexander Hunt"
              required
              className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#f0e4d2] text-sm text-[#1f1b14] focus:outline-none focus:border-[#7b5900] transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#1f1b14] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alexander@example.com"
              required
              className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#f0e4d2] text-sm text-[#1f1b14] focus:outline-none focus:border-[#7b5900] transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#1f1b14] mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 012-3456"
              required
              className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#f0e4d2] text-sm text-[#1f1b14] focus:outline-none focus:border-[#7b5900] transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#1f1b14] mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters"
              required
              className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#f0e4d2] text-sm text-[#1f1b14] focus:outline-none focus:border-[#7b5900] transition-all"
            />
          </div>

          <div className="pt-2">
            <p className="text-[11px] text-[#877868] leading-normal">
              By creating an account, you agree to SalonHub's{' '}
              <a href="#" className="underline text-[#7b5900]">
                Terms of Concierge Service
              </a>{' '}
              and Privacy Policy.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] active:scale-[0.98] transition-all"
          >
            Create Free Account
          </button>
        </form>
      </div>

      <div className="pt-6 text-center">
        <p className="text-xs text-[#877868]">
          Already registered?{' '}
          <button
            onClick={() => onNavigate('login')}
            className="font-semibold text-[#7b5900] hover:underline"
          >
            Sign In Here
          </button>
        </p>
      </div>
    </div>
  );
};
