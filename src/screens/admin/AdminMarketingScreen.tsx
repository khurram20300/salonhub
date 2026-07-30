import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminMarketingScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminMarketingScreen: React.FC<AdminMarketingScreenProps> = ({
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
              Growth & Retention
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Marketing & Promotional Campaigns
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Create discount coupons, broadcast SMS promos, and track redemption revenue.
            </p>
          </div>

          <button
            onClick={() => onNavigate('admin_campaign_creator')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>Launch Campaign Creator</span>
          </button>
        </div>

        {/* Featured Campaign Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#2a2215] via-[#1b1b1c] to-[#201c13] border border-[#f0bf5c]/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f0bf5c] text-[#131313] uppercase tracking-wider">
              Featured Active Campaign
            </span>
            <h3 className="font-serif-title font-bold text-2xl text-[#e5e2e1]">
              Holiday Special: Gilded Radiance 25% OFF
            </h3>
            <p className="text-xs text-[#d2c5b1]">
              Exclusive discount coupon for VIP Platinum & Gold Members on all hair balayage and facial sessions.
            </p>

            <div className="flex items-center gap-4 text-xs pt-2">
              <span className="font-mono font-bold text-[#f0bf5c] bg-[#131313] px-3 py-1 rounded-lg border border-[#f0bf5c]/40">
                PROMO: GOLDEN24
              </span>
              <span className="text-emerald-400 font-bold">412 / 500 Redeemed (82%)</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#131313]/90 border border-[#4e4637]/50 text-center w-full md:w-auto shrink-0 space-y-3">
            <p className="text-[10px] text-[#d2c5b1]/60 uppercase tracking-wider">Revenue Generated</p>
            <p className="text-3xl font-serif-title font-bold text-[#f0bf5c]">$24,980.00</p>
            <button
              onClick={() => onNavigate('admin_campaign_creator')}
              className="w-full py-2 rounded-xl bg-[#2a2a2a] text-[#f0bf5c] hover:bg-[#353535] text-xs font-bold transition-all"
            >
              Edit Campaign
            </button>
          </div>
        </div>

        {/* Campaign Performance Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6">
          <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
            Active & Past Marketing Campaigns
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#202020] text-[11px] uppercase tracking-wider text-[#d2c5b1]/60 border-b border-[#4e4637]/30">
                  <th className="py-3.5 px-4">Campaign Name</th>
                  <th className="py-3.5 px-4">Type</th>
                  <th className="py-3.5 px-4">Target Audience</th>
                  <th className="py-3.5 px-4">Redemptions</th>
                  <th className="py-3.5 px-4">Revenue Attribution</th>
                  <th className="py-3.5 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4e4637]/20 text-xs">
                {[
                  {
                    name: 'Autumn Hair Care Revival',
                    type: 'Discount Coupon',
                    audience: 'All Members',
                    redemptions: '280 / 300',
                    revenue: '$18,400.00',
                    status: 'Active'
                  },
                  {
                    name: 'VIP Birthday Hair Treatment Gift',
                    type: 'Automated SMS',
                    audience: 'VIP Birthday Month',
                    redemptions: '145 / 150',
                    revenue: '$12,150.00',
                    status: 'Active'
                  },
                  {
                    name: 'Summer Golden Beard Blast',
                    type: 'Email Newsletter',
                    audience: 'Men Beard Clients',
                    redemptions: '500 / 500',
                    revenue: '$31,200.00',
                    status: 'Completed'
                  }
                ].map((c, i) => (
                  <tr key={i} className="hover:bg-[#202020]/50">
                    <td className="py-4 px-4 font-bold text-[#e5e2e1]">{c.name}</td>
                    <td className="py-4 px-4 text-[#d2c5b1]">{c.type}</td>
                    <td className="py-4 px-4 text-[#d2c5b1]">{c.audience}</td>
                    <td className="py-4 px-4 font-mono text-[#f0bf5c]">{c.redemptions}</td>
                    <td className="py-4 px-4 font-bold text-emerald-400">{c.revenue}</td>
                    <td className="py-4 px-4 text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          c.status === 'Active'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-[#2a2a2a] text-[#d2c5b1]'
                        }`}
                      >
                        {c.status}
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
