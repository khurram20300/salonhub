import React from 'react';
import { ScreenId } from '../types';

interface BottomNavProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  // Hide bottom nav on splash, onboarding, preferences, login, signup, verification, checkout, payment, confirmation
  const hiddenScreens: ScreenId[] = [
    'splash',
    'onboarding',
    'preferences',
    'login',
    'signup',
    'forgot_password',
    'verification',
    'checkout',
    'payment',
    'confirmation',
    'offline',
    'not_found'
  ];

  if (hiddenScreens.includes(currentScreen)) {
    return null;
  }

  const items: { id: ScreenId; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'explore', label: 'Explore', icon: 'explore' },
    { id: 'my_bookings', label: 'Bookings', icon: 'calendar_today' },
    { id: 'feed', label: 'Trends', icon: 'auto_awesome' },
    { id: 'profile', label: 'Profile', icon: 'person' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto px-4 pb-4 pt-1 pointer-events-none">
      <nav className="pointer-events-auto glass-nav border border-[#f0e4d2] shadow-xl shadow-[#7b5900]/10 rounded-full px-3 py-2 flex items-center justify-around">
        {items.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all duration-200 ${
                isActive
                  ? 'text-[#7b5900] font-semibold scale-105'
                  : 'text-[#877868] hover:text-[#1f1b14]'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${isActive ? 'fill-1' : ''}`}>
                {item.icon}
              </span>
              <span className="text-[10px] mt-0.5 tracking-tight">
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#7b5900]" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
