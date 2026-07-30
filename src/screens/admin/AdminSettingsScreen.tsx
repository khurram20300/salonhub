import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminSettingsScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminSettingsScreen: React.FC<AdminSettingsScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [salonName, setSalonName] = useState('The Royal Barber & Salon');
  const [salonEmail, setSalonEmail] = useState('concierge@theroyalbarber.com');
  const [salonPhone, setSalonPhone] = useState('+1 (555) 987-6543');

  const handleSaveSettings = () => {
    alert('System & Salon Settings successfully saved!');
  };

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Branding & Operating Windows
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              System Settings & Identity
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Update salon name, contact details, operating hours, and accent styling.
            </p>
          </div>

          <button
            onClick={handleSaveSettings}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">save</span>
            <span>Save Configuration</span>
          </button>
        </div>

        {/* Settings Form Card */}
        <div className="p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6 max-w-2xl">
          <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
            Salon Branding & Information
          </h3>

          <div className="space-y-4 text-xs">
            <div className="space-y-2">
              <label className="text-[#d2c5b1] font-semibold">Salon Business Name</label>
              <input
                type="text"
                value={salonName}
                onChange={(e) => setSalonName(e.target.value)}
                className="w-full bg-[#202020] border border-[#4e4637]/40 rounded-xl p-3 text-xs text-[#e5e2e1] focus:ring-1 focus:ring-[#f0bf5c]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[#d2c5b1] font-semibold">Concierge Email</label>
                <input
                  type="email"
                  value={salonEmail}
                  onChange={(e) => setSalonEmail(e.target.value)}
                  className="w-full bg-[#202020] border border-[#4e4637]/40 rounded-xl p-3 text-xs text-[#e5e2e1]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#d2c5b1] font-semibold">Concierge Phone</label>
                <input
                  type="text"
                  value={salonPhone}
                  onChange={(e) => setSalonPhone(e.target.value)}
                  className="w-full bg-[#202020] border border-[#4e4637]/40 rounded-xl p-3 text-xs text-[#e5e2e1]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#4e4637]/30 space-y-3">
              <h4 className="font-bold text-[#e5e2e1] text-sm">Operating Hours</h4>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#202020]">
                <span>Monday - Saturday:</span>
                <span className="font-mono text-[#f0bf5c] font-bold">09:00 AM - 08:00 PM</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#202020]">
                <span>Sunday:</span>
                <span className="font-mono text-rose-400 font-bold">Closed (VIP Private Reserve Only)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
