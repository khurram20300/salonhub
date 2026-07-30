import React from 'react';
import { ScreenId } from '../types';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  unreadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  onBack,
  currentScreen,
  onNavigate,
  unreadCount = 2
}) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-[#f0e4d2]/60 px-4 py-3.5 flex items-center justify-between transition-all">
      <div className="flex items-center gap-3">
        {showBack ? (
          <button
            onClick={onBack || (() => onNavigate('home'))}
            className="w-9 h-9 rounded-full bg-[#f6ece1] hover:bg-[#ebdccb] active:scale-95 text-[#1f1b14] flex items-center justify-center transition-transform"
            aria-label="Go back"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
        ) : (
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7b5900] to-[#c89b3c] flex items-center justify-center text-white shadow-md shadow-[#7b5900]/20 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">content_cut</span>
            </div>
            <div>
              <span className="font-serif-title font-bold text-lg tracking-tight text-[#1f1b14] block leading-none">
                SalonHub
              </span>
              <span className="text-[10px] tracking-widest text-[#7b5900] uppercase font-semibold">
                Exclusivity
              </span>
            </div>
          </button>
        )}

        {title && (
          <h1 className="font-serif-title font-bold text-lg text-[#1f1b14] truncate max-w-[180px] sm:max-w-[260px]">
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onNavigate('notifications')}
          className="relative w-9 h-9 rounded-full bg-[#f6ece1] hover:bg-[#ebdccb] active:scale-95 text-[#1f1b14] flex items-center justify-center transition-transform"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#7b5900] ring-2 ring-white animate-pulse" />
          )}
        </button>

        <button
          onClick={() => onNavigate('profile')}
          className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-br from-[#7b5900] to-[#d2c5b1] hover:scale-105 transition-transform active:scale-95"
          aria-label="User Profile"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQf-9C6aSPlwPRr9yxhRVafIvUdlCThvgNWShmUboFsOqtovyV64eVxZRqRwZrzIZqKubi4NQuvpYtOHfNzTmCcjWV8yywpht9y9g1R7PGlv5DVAqesy1hmDBEbKst3ZD_1BQGRKALF3VW18lm8c2QcbfVsnLVXmpHzI9GY0jyc14jZsf6ppaW6ZCC4KgpEGaiDI_ftUExrzljLteAVGBNkP1CBRqXBFVH7Z3UTKMEO_I1zz3fSiCY0dHcb-os-Mu-j_Owt9TKly6n"
            alt="Alexander Hunt"
            className="w-full h-full object-cover rounded-full"
          />
        </button>
      </div>
    </header>
  );
};
