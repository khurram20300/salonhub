import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';
import { MOCK_ADMIN_STYLISTS } from '../../data/mockAdminData';

interface AdminStylistPerformanceScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminStylistPerformanceScreen: React.FC<AdminStylistPerformanceScreenProps> = ({
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
              Performance & Ratings
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Stylist Performance Analytics
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Analyze individual revenue contribution, client retention, and review sentiment.
            </p>
          </div>

          <button
            onClick={() => onNavigate('admin_payouts')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">payments</span>
            <span>Calculate Stylist Commission</span>
          </button>
        </div>

        {/* Performance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOCK_ADMIN_STYLISTS.map((st) => (
            <div
              key={st.id}
              className="p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6"
            >
              <div className="flex items-center gap-5">
                <img
                  src={st.avatar}
                  alt={st.name}
                  className="w-16 h-16 rounded-full border-2 border-[#f0bf5c] object-cover shadow-lg"
                />
                <div>
                  <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">{st.name}</h3>
                  <p className="text-xs text-[#d2c5b1]">{st.role}</p>
                  <p className="text-xs font-bold text-[#f0bf5c] mt-1">★ {st.rating} ({st.reviewsCount} reviews)</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 bg-[#202020] p-4 rounded-2xl border border-[#4e4637]/30 text-center text-xs">
                <div>
                  <span className="text-[#d2c5b1]/60 block text-[10px] uppercase font-bold">Monthly Sales</span>
                  <span className="font-bold text-[#f0bf5c] text-sm">${st.salesTotal.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[#d2c5b1]/60 block text-[10px] uppercase font-bold">Commission</span>
                  <span className="font-bold text-[#e5e2e1] text-sm">{st.commissionRate}%</span>
                </div>
                <div>
                  <span className="text-[#d2c5b1]/60 block text-[10px] uppercase font-bold">Tips Earned</span>
                  <span className="font-bold text-emerald-400 text-sm">${st.tips.toLocaleString()}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#d2c5b1]">
                  <span>Monthly Sales Target ($50k)</span>
                  <span className="font-bold text-[#f0bf5c]">{Math.round((st.salesTotal / 50000) * 100)}%</span>
                </div>
                <div className="w-full bg-[#202020] h-3 rounded-full overflow-hidden border border-[#4e4637]/30">
                  <div
                    style={{ width: `${Math.min(100, (st.salesTotal / 50000) * 100)}%` }}
                    className="h-full bg-gradient-to-r from-[#7b5900] to-[#f0bf5c]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};
