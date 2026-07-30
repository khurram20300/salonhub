import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminTransactionsScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminTransactionsScreen: React.FC<AdminTransactionsScreenProps> = ({
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
              Payment Gateway Ledger
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Transaction History
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Complete payment log across Apple Pay, Credit Cards, Gift Cards, and Cash.
            </p>
          </div>

          <button
            onClick={() => onNavigate('admin_export')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Export CSV Ledger</span>
          </button>
        </div>

        {/* Transactions Table */}
        <div className="bg-[#1b1b1c] rounded-3xl border border-[#4e4637]/40 shadow-xl overflow-hidden p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#202020] text-[11px] uppercase tracking-wider text-[#d2c5b1]/60 border-b border-[#4e4637]/30">
                  <th className="py-3.5 px-4">Transaction ID</th>
                  <th className="py-3.5 px-4">Client</th>
                  <th className="py-3.5 px-4">Service</th>
                  <th className="py-3.5 px-4">Payment Method</th>
                  <th className="py-3.5 px-4">Amount</th>
                  <th className="py-3.5 px-4">Tip</th>
                  <th className="py-3.5 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4e4637]/20 text-xs">
                {[
                  {
                    id: 'TX-9482104',
                    client: 'Elena Vance',
                    service: 'Balayage Artistry',
                    method: 'Apple Pay',
                    amount: '$320.00',
                    tip: '$50.00',
                    status: 'Completed'
                  },
                  {
                    id: 'TX-9482105',
                    client: 'Julian Thorne',
                    service: 'Royal Signature Cut',
                    method: 'Credit Card',
                    amount: '$145.00',
                    tip: '$25.00',
                    status: 'Completed'
                  },
                  {
                    id: 'TX-9482106',
                    client: 'Sophia Chen',
                    service: 'Gold Leaf Facial',
                    method: 'Gift Card',
                    amount: '$280.00',
                    tip: '$40.00',
                    status: 'Completed'
                  },
                  {
                    id: 'TX-9482107',
                    client: 'Alexander Vane',
                    service: 'Beard Sculpting',
                    method: 'Cash',
                    amount: '$95.00',
                    tip: '$15.00',
                    status: 'Completed'
                  }
                ].map((tx) => (
                  <tr key={tx.id} className="hover:bg-[#202020]/50">
                    <td className="py-4 px-4 font-mono font-bold text-[#f0bf5c]">{tx.id}</td>
                    <td className="py-4 px-4 font-bold text-[#e5e2e1]">{tx.client}</td>
                    <td className="py-4 px-4 text-[#d2c5b1]">{tx.service}</td>
                    <td className="py-4 px-4 font-medium text-[#e5e2e1]">{tx.method}</td>
                    <td className="py-4 px-4 font-bold text-[#f0bf5c]">{tx.amount}</td>
                    <td className="py-4 px-4 text-emerald-400 font-bold">{tx.tip}</td>
                    <td className="py-4 px-4 text-right">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {tx.status}
                      </span>
                    </td>
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
