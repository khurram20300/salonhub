import React, { useState } from 'react';
import { ScreenId } from '../types';

interface LoginScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('alexander.hunt@premium.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] flex flex-col justify-between p-6">
      <div className="pt-4">
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#7b5900] to-[#c89b3c] flex items-center justify-center text-white shadow-md">
            <span className="material-symbols-outlined text-2xl">content_cut</span>
          </div>
          <div>
            <h2 className="font-serif-title text-xl font-bold text-[#1f1b14]">SalonHub</h2>
            <p className="text-[10px] text-[#7b5900] tracking-widest uppercase font-semibold">Exclusivity Redefined</p>
          </div>
        </div>

        <h1 className="font-serif-title text-3xl font-bold text-[#1f1b14] mb-2">
          Welcome back
        </h1>
        <p className="text-xs text-[#877868] mb-8">
          Sign in to access your luxury bookings, private salon privileges, and favorite master artisans.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#1f1b14] mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-white border border-[#f0e4d2] text-sm text-[#1f1b14] focus:outline-none focus:border-[#7b5900] focus:ring-1 focus:ring-[#7b5900] transition-all"
              />
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#877868]">
                mail
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-medium text-[#1f1b14]">
                Password
              </label>
              <button
                type="button"
                onClick={() => onNavigate('forgot_password')}
                className="text-xs font-medium text-[#7b5900] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full pl-10 pr-10 py-3.5 rounded-2xl bg-white border border-[#f0e4d2] text-sm text-[#1f1b14] focus:outline-none focus:border-[#7b5900] focus:ring-1 focus:ring-[#7b5900] transition-all"
              />
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#877868]">
                lock
              </span>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#877868] hover:text-[#1f1b14]"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-[#52493d]">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-[#7b5900] focus:ring-[#7b5900] border-[#d2c5b1]"
              />
              Remember me on this device
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] active:scale-[0.98] transition-all"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-[#f0e4d2]" />
          <span className="text-[11px] font-medium text-[#877868] uppercase tracking-wider">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-[#f0e4d2]" />
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="py-3 px-4 rounded-2xl bg-white border border-[#f0e4d2] hover:bg-[#f6ece1] font-medium text-xs text-[#1f1b14] flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Google
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="py-3 px-4 rounded-2xl bg-[#1f1b14] text-white hover:bg-black font-medium text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">apple</span>
            Apple ID
          </button>
        </div>
      </div>

      <div className="pt-6 text-center">
        <p className="text-xs text-[#877868]">
          Don't have an account?{' '}
          <button
            onClick={() => onNavigate('signup')}
            className="font-semibold text-[#7b5900] hover:underline"
          >
            Sign Up Free
          </button>
        </p>
      </div>
    </div>
  );
};
