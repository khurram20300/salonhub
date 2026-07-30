import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminClientDossierScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminClientDossierScreen: React.FC<AdminClientDossierScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Navigation */}
        <div className="flex items-center justify-between border-b border-[#4e4637]/30 pb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('admin_clients')}
              className="p-2 rounded-xl bg-[#202020] text-[#f0bf5c] hover:bg-[#2a2a2a] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
                Client Dossier CRM
              </span>
              <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1]">
                Elena Vance
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('admin_appointments')}
              className="px-4 py-2.5 rounded-xl bg-[#2a2a2a] border border-[#4e4637]/50 text-xs font-bold text-[#f0bf5c] hover:bg-[#353535] transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              <span>Schedule Appointment</span>
            </button>
            <button
              onClick={() => alert('Editing Client Profile')}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold hover:brightness-110 transition-all"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Client Top Summary Banner */}
        <div className="p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
              alt="Elena Vance"
              className="w-24 h-24 rounded-full object-cover border-4 border-[#f0bf5c]/40 shadow-2xl"
            />
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <h3 className="font-serif-title font-bold text-2xl text-[#e5e2e1]">Elena Vance</h3>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  VIP Platinum Member
                </span>
              </div>
              <p className="text-xs text-[#d2c5b1]">elena.vance@auramail.com • +1 (555) 234-5678</p>
              <p className="text-xs text-[#f0bf5c]">Member since March 2024 • Preferred Stylist: Sofia Rossi</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 bg-[#202020] p-4 rounded-2xl border border-[#4e4637]/30 text-center w-full md:w-auto">
            <div>
              <p className="text-[10px] text-[#d2c5b1]/60 uppercase tracking-wider font-semibold">Total LTV</p>
              <p className="text-xl font-serif-title font-bold text-[#f0bf5c] mt-0.5">$4,850</p>
            </div>
            <div className="border-l border-r border-[#4e4637]/30 px-4">
              <p className="text-[10px] text-[#d2c5b1]/60 uppercase tracking-wider font-semibold">Total Visits</p>
              <p className="text-xl font-serif-title font-bold text-[#e5e2e1] mt-0.5">24</p>
            </div>
            <div>
              <p className="text-[10px] text-[#d2c5b1]/60 uppercase tracking-wider font-semibold">Client Score</p>
              <p className="text-xl font-serif-title font-bold text-emerald-400 mt-0.5">99/100</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Color Formula & Preferences */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-[#f0bf5c]">
                <span className="material-symbols-outlined text-[22px]">palette</span>
                <h4 className="font-serif-title font-bold text-lg text-[#e5e2e1]">
                  Color Formula Registry
                </h4>
              </div>
              <div className="p-4 rounded-2xl bg-[#202020] border border-[#4e4637]/30 space-y-3 text-xs">
                <div>
                  <span className="text-[#d2c5b1]/60 block text-[10px] uppercase font-bold">Base Tone</span>
                  <span className="font-mono text-[#f0bf5c] font-bold text-sm">6N Dark Blonde Base + 20Vol</span>
                </div>
                <div>
                  <span className="text-[#d2c5b1]/60 block text-[10px] uppercase font-bold">Highlights & Gloss</span>
                  <span className="font-mono text-[#e5e2e1]">9GI Gold-Iced Gloss Finish</span>
                </div>
                <div>
                  <span className="text-[#d2c5b1]/60 block text-[10px] uppercase font-bold">Development Time</span>
                  <span className="font-mono text-[#e5e2e1]">35 mins under heat processor</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-[#f0bf5c]">
                <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
                <h4 className="font-serif-title font-bold text-lg text-[#e5e2e1]">
                  Personal Preferences
                </h4>
              </div>
              <div className="space-y-2 text-xs text-[#d2c5b1]">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#202020]">
                  <span>Beverage Choice:</span>
                  <span className="font-bold text-[#e5e2e1]">San Pellegrino + Lemon</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#202020]">
                  <span>Music Ambience:</span>
                  <span className="font-bold text-[#e5e2e1]">Lo-Fi Jazz Lounge</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#202020]">
                  <span>Scalp Sensitivity:</span>
                  <span className="font-bold text-amber-400">Mild (Botanical only)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment History & Notes */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6">
              <h4 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
                Recent Appointment History
              </h4>

              <div className="space-y-4">
                {[
                  {
                    date: 'Oct 24, 2026',
                    service: 'Balayage Artistry & Scalp Treatment',
                    stylist: 'Sofia Rossi',
                    cost: '$320.00',
                    status: 'In Progress'
                  },
                  {
                    date: 'Sep 12, 2026',
                    service: 'Royal Gloss & Precision Trim',
                    stylist: 'Sofia Rossi',
                    cost: '$180.00',
                    status: 'Completed'
                  },
                  {
                    date: 'Jul 28, 2026',
                    service: 'Full Highlights & Botanical Steam',
                    stylist: 'Sofia Rossi',
                    cost: '$290.00',
                    status: 'Completed'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#202020] border border-[#4e4637]/30 flex items-center justify-between text-xs"
                  >
                    <div>
                      <p className="font-bold text-[#e5e2e1] text-sm">{item.service}</p>
                      <p className="text-[#d2c5b1]/70 mt-0.5">
                        Stylist: {item.stylist} • Date: {item.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#f0bf5c] text-sm">{item.cost}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
