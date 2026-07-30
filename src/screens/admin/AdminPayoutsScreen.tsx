import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';
import { MOCK_ADMIN_STYLISTS } from '../../data/mockAdminData';

interface AdminPayoutsScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminPayoutsScreen: React.FC<AdminPayoutsScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [payouts, setPayouts] = useState(MOCK_ADMIN_STYLISTS);

  const handleApprovePayout = (id: string) => {
    alert(`Payout approved & dispatched for stylist ID: ${id}`);
  };

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Commission & Earnings Disbursement
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Stylist Commission & Payouts Ledger
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Calculate base sales commission, track client tip disbursements, and execute payouts.
            </p>
          </div>

          <button
            onClick={() => alert('Batch Payouts Executed for All Staff')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all"
          >
            ⚡ Approve All Bi-Weekly Payouts
          </button>
        </div>

        {/* Payout Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-2">
            <span className="text-xs text-[#d2c5b1]/60 font-semibold uppercase">Pending Payouts Total</span>
            <p className="text-3xl font-serif-title font-bold text-[#f0bf5c]">$24,850.00</p>
            <span className="text-xs text-amber-300">Ready for direct deposit</span>
          </div>

          <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-2">
            <span className="text-xs text-[#d2c5b1]/60 font-semibold uppercase">Average Commission Rate</span>
            <p className="text-3xl font-serif-title font-bold text-[#e5e2e1]">48.8%</p>
            <span className="text-xs text-[#d2c5b1]/60">Tiered performance model</span>
          </div>

          <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-2">
            <span className="text-xs text-[#d2c5b1]/60 font-semibold uppercase">Tips Tracked & Passed</span>
            <p className="text-3xl font-serif-title font-bold text-emerald-400">$13,620.00</p>
            <span className="text-xs text-emerald-400">100% passed to staff</span>
          </div>
        </div>

        {/* Payout Table */}
        <div className="bg-[#1b1b1c] rounded-3xl border border-[#4e4637]/40 shadow-xl overflow-hidden p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#202020] text-[11px] uppercase tracking-wider text-[#d2c5b1]/60 border-b border-[#4e4637]/30">
                  <th className="py-3.5 px-4">Stylist Name</th>
                  <th className="py-3.5 px-4">Gross Sales</th>
                  <th className="py-3.5 px-4">Commission %</th>
                  <th className="py-3.5 px-4">Earned Commission</th>
                  <th className="py-3.5 px-4">Tips</th>
                  <th className="py-3.5 px-4">Net Payout</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4e4637]/20 text-xs">
                {payouts.map((st) => {
                  const commAmount = (st.salesTotal * st.commissionRate) / 100;
                  const totalPay = commAmount + st.tips;

                  return (
                    <tr key={st.id} className="hover:bg-[#202020]/50">
                      <td className="py-4 px-4 font-bold text-[#e5e2e1] flex items-center gap-3">
                        <img src={st.avatar} alt={st.name} className="w-9 h-9 rounded-full object-cover border border-[#f0bf5c]/40" />
                        <div>
                          <p className="text-[#e5e2e1]">{st.name}</p>
                          <p className="text-[10px] text-[#d2c5b1]/60">{st.role}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#d2c5b1]">${st.salesTotal.toLocaleString()}</td>
                      <td className="py-4 px-4 font-bold text-[#f0bf5c]">{st.commissionRate}%</td>
                      <td className="py-4 px-4 text-[#e5e2e1]">${commAmount.toLocaleString()}</td>
                      <td className="py-4 px-4 text-emerald-400 font-bold">${st.tips.toLocaleString()}</td>
                      <td className="py-4 px-4 font-mono font-bold text-[#f0bf5c] text-sm">
                        ${totalPay.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => handleApprovePayout(st.id)}
                          className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] font-bold text-[11px] shadow hover:brightness-110"
                        >
                          Disburse Funds
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
