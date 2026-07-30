import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminFinancialsScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminFinancialsScreen: React.FC<AdminFinancialsScreenProps> = ({
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
              Financial Intelligence & Profitability
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Revenue & Financial Overview
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Audit gross revenue, net profit margins, ticket sizes, and sales category splits.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('admin_transactions')}
              className="px-4 py-2.5 rounded-xl bg-[#2a2a2a] border border-[#4e4637]/50 text-xs font-bold text-[#f0bf5c] hover:bg-[#353535] transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">receipt_long</span>
              <span>Transaction History</span>
            </button>
            <button
              onClick={() => onNavigate('admin_payouts')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">account_balance_wallet</span>
              <span>Stylist Payouts</span>
            </button>
          </div>
        </div>

        {/* Financial KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-2">
            <span className="text-xs font-semibold text-[#d2c5b1]/60 uppercase tracking-wider">
              Total Gross Revenue
            </span>
            <p className="text-3xl font-serif-title font-bold text-[#f0bf5c]">$124,850.00</p>
            <span className="inline-block text-xs text-emerald-400 font-bold">+14.2% YoY Growth</span>
          </div>

          <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-2">
            <span className="text-xs font-semibold text-[#d2c5b1]/60 uppercase tracking-wider">
              Net Profit Margin
            </span>
            <p className="text-3xl font-serif-title font-bold text-[#e5e2e1]">$82,400.00</p>
            <span className="inline-block text-xs text-emerald-400 font-bold">66% Net Margin</span>
          </div>

          <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-2">
            <span className="text-xs font-semibold text-[#d2c5b1]/60 uppercase tracking-wider">
              Average Ticket Size
            </span>
            <p className="text-3xl font-serif-title font-bold text-[#e5e2e1]">$145.50</p>
            <span className="inline-block text-xs text-[#f0bf5c] font-bold">+$12.00 vs Industry</span>
          </div>
        </div>

        {/* Category Breakdown & Top Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Category Split */}
          <div className="p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6">
            <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
              Sales Category Breakdown
            </h3>

            <div className="space-y-4 text-xs">
              {[
                { name: 'Hair Artistry & Coloring', percent: 52, color: 'bg-[#f0bf5c]', amount: '$64,922.00' },
                { name: 'Skin & Facial Aesthetics', percent: 31, color: 'bg-emerald-400', amount: '$38,703.50' },
                { name: 'Beard & Precision Barbering', percent: 17, color: 'bg-amber-500', amount: '$21,224.50' }
              ].map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between font-semibold">
                    <span className="text-[#e5e2e1]">{cat.name}</span>
                    <span className="text-[#f0bf5c]">{cat.amount} ({cat.percent}%)</span>
                  </div>
                  <div className="w-full bg-[#202020] h-3 rounded-full overflow-hidden border border-[#4e4637]/30">
                    <div style={{ width: `${cat.percent}%` }} className={`h-full ${cat.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Revenue Generating Services */}
          <div className="p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6">
            <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
              Top Revenue Services
            </h3>

            <div className="space-y-3">
              {[
                { name: 'Balayage Artistry & Gloss', bookings: 142, revenue: '$45,440.00' },
                { name: 'Royal Signature Cut & Shave', bookings: 210, revenue: '$30,450.00' },
                { name: '24K Gold Leaf Facial Infusion', bookings: 98, revenue: '$27,440.00' },
                { name: 'Beard Sculpting & Scalp Therapy', bookings: 165, revenue: '$15,675.00' }
              ].map((srv, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#202020] border border-[#4e4637]/30 flex items-center justify-between text-xs"
                >
                  <div>
                    <p className="font-bold text-[#e5e2e1]">{srv.name}</p>
                    <p className="text-[10px] text-[#d2c5b1]/60 mt-0.5">{srv.bookings} total bookings</p>
                  </div>
                  <p className="font-mono font-bold text-[#f0bf5c] text-sm">{srv.revenue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
