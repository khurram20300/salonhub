import React, { useState } from 'react';
import { ScreenId } from '../types';

interface SettingsScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onNavigate }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#fff8f2] p-5 space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('profile')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <h1 className="font-serif-title text-xl font-bold text-[#1f1b14]">App Settings</h1>
      </div>

      <div className="bg-white rounded-3xl border border-[#f0e4d2] p-5 space-y-4">
        <h3 className="font-serif-title text-sm font-bold text-[#1f1b14]">Preferences & Privacy</h3>

        <div className="flex items-center justify-between py-2 border-b border-[#f0e4d2]">
          <div>
            <h4 className="font-bold text-xs text-[#1f1b14]">Push Notifications</h4>
            <p className="text-[10px] text-[#877868]">Appointment reminders & exclusive offers</p>
          </div>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.target.checked)}
            className="w-5 h-5 accent-[#7b5900]"
          />
        </div>

        <div className="flex items-center justify-between py-2 border-b border-[#f0e4d2]">
          <div>
            <h4 className="font-bold text-xs text-[#1f1b14]">Face ID / Biometric Passcode</h4>
            <p className="text-[10px] text-[#877868]">Secure login with biometrics</p>
          </div>
          <input
            type="checkbox"
            checked={biometricsEnabled}
            onChange={(e) => setBiometricsEnabled(e.target.checked)}
            className="w-5 h-5 accent-[#7b5900]"
          />
        </div>

        <div className="flex items-center justify-between py-2">
          <div>
            <h4 className="font-bold text-xs text-[#1f1b14]">Location Services</h4>
            <p className="text-[10px] text-[#877868]">Find nearby salons in real-time</p>
          </div>
          <input
            type="checkbox"
            checked={locationEnabled}
            onChange={(e) => setLocationEnabled(e.target.checked)}
            className="w-5 h-5 accent-[#7b5900]"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-[#f0e4d2] divide-y divide-[#f0e4d2]">
        <button
          onClick={() => onNavigate('language')}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-[#f6ece1]"
        >
          <span className="text-xs font-bold text-[#1f1b14]">Language & Region</span>
          <span className="text-xs text-[#877868]">English (US)</span>
        </button>
        <button
          onClick={() => onNavigate('help_center')}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-[#f6ece1]"
        >
          <span className="text-xs font-bold text-[#1f1b14]">Concierge Support Center</span>
          <span className="material-symbols-outlined text-[18px] text-[#877868]">chevron_right</span>
        </button>
      </div>

      <div className="text-center text-xs text-[#877868] space-y-1">
        <p className="font-serif-title font-bold text-[#1f1b14]">SalonHub Luxury Mobile Suite</p>
        <p>Version 1.0.0 (Build 8829)</p>
      </div>
    </div>
  );
};
