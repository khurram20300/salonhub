import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';
import { MOCK_ADMIN_STYLISTS } from '../../data/mockAdminData';

interface AdminStaffScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminStaffScreen: React.FC<AdminStaffScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Rostering & Stations
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Staff & Stylist Rostering
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Manage weekly shifts, station allocations, performance ratings, and payouts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('admin_stylist_performance')}
              className="px-4 py-2.5 rounded-xl bg-[#2a2a2a] border border-[#4e4637]/50 text-xs font-bold text-[#f0bf5c] hover:bg-[#353535] transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">bar_chart</span>
              <span>Stylist Analytics</span>
            </button>
            <button
              onClick={() => onNavigate('admin_payouts')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 transition-all"
            >
              Payouts Ledger
            </button>
          </div>
        </div>

        {/* Weekly Matrix Grid */}
        <div className="p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
              Weekly Shift & Station Matrix
            </h3>
            <span className="text-xs text-[#f0bf5c] font-bold">Week of Oct 20 - Oct 26, 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#202020] text-[11px] uppercase tracking-wider text-[#d2c5b1]/60 border-b border-[#4e4637]/30">
                  <th className="py-3.5 px-4">Stylist</th>
                  <th className="py-3.5 px-4">Station</th>
                  <th className="py-3.5 px-4">Mon</th>
                  <th className="py-3.5 px-4">Tue</th>
                  <th className="py-3.5 px-4">Wed</th>
                  <th className="py-3.5 px-4">Thu</th>
                  <th className="py-3.5 px-4">Fri</th>
                  <th className="py-3.5 px-4">Sat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4e4637]/20 text-xs">
                {MOCK_ADMIN_STYLISTS.map((st) => (
                  <tr key={st.id} className="hover:bg-[#202020]/50">
                    <td className="py-4 px-4 font-bold text-[#e5e2e1] flex items-center gap-3">
                      <img src={st.avatar} alt={st.name} className="w-8 h-8 rounded-full border border-[#f0bf5c]/40 object-cover" />
                      <span>{st.name}</span>
                    </td>
                    <td className="py-4 px-4 font-mono text-[#f0bf5c]">{st.station}</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">09:00 - 18:00</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">09:00 - 18:00</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">09:00 - 18:00</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">09:00 - 18:00</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">09:00 - 19:00</td>
                    <td className="py-4 px-4 text-amber-300 font-bold">08:00 - 20:00 (Peak)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
