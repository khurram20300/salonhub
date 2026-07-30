import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  duration: string;
  price: number;
  demandScore: number;
  status: 'Active' | 'Paused';
}

interface AdminServicesScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminServicesScreen: React.FC<AdminServicesScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [services, setServices] = useState<ServiceItem[]>([
    {
      id: 'SRV-01',
      name: 'Royal Signature Cut & Beard Trim',
      category: 'Haircut & Beard',
      duration: '60 mins',
      price: 145,
      demandScore: 98,
      status: 'Active'
    },
    {
      id: 'SRV-02',
      name: 'Balayage Artistry & Scalp Treatment',
      category: 'Coloring',
      duration: '120 mins',
      price: 320,
      demandScore: 95,
      status: 'Active'
    },
    {
      id: 'SRV-03',
      name: '24K Gold Leaf Facial Infusion',
      category: 'Skin & Spa',
      duration: '75 mins',
      price: 280,
      demandScore: 92,
      status: 'Active'
    },
    {
      id: 'SRV-04',
      name: 'Precision Fade & Scalp Therapy',
      category: 'Barbering',
      duration: '45 mins',
      price: 95,
      demandScore: 88,
      status: 'Active'
    }
  ]);

  const handlePriceChange = (id: string, delta: number) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, price: Math.max(10, s.price + delta) } : s))
    );
  };

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Menu & Dynamic Pricing
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Service & Pricing Portfolio
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Configure salon service menus, durations, demand pricing, and AI yield recommendations.
            </p>
          </div>

          <button
            onClick={() => alert('New Service Creation modal opened')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Add New Service</span>
          </button>
        </div>

        {/* AI Smart Pricing Suggestion Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#201c13] via-[#1b1b1c] to-[#2a2215] border border-[#f0bf5c]/40 shadow-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f0bf5c]/10 text-[#f0bf5c] flex items-center justify-center shrink-0 border border-[#f0bf5c]/30">
              <span className="material-symbols-outlined text-[24px]">auto_awesome</span>
            </div>
            <div>
              <h4 className="font-serif-title font-bold text-lg text-[#e5e2e1]">
                AI Yield Management Suggestion
              </h4>
              <p className="text-xs text-[#d2c5b1]">
                Balayage Artistry is running at 98% Saturday capacity. Increasing price by +$20 would yield +$2,840 monthly revenue.
              </p>
            </div>
          </div>

          <button
            onClick={() => handlePriceChange('SRV-02', 20)}
            className="px-4 py-2 rounded-xl bg-[#f0bf5c] text-[#131313] font-bold text-xs shrink-0 hover:brightness-110 transition-all"
          >
            Apply Smart Surge
          </button>
        </div>

        {/* Services Table */}
        <div className="bg-[#1b1b1c] rounded-3xl border border-[#4e4637]/40 shadow-xl overflow-hidden p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#202020] text-[11px] uppercase tracking-wider text-[#d2c5b1]/60 border-b border-[#4e4637]/30">
                  <th className="py-3.5 px-4">Service Name</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Duration</th>
                  <th className="py-3.5 px-4">Demand Score</th>
                  <th className="py-3.5 px-4">Price ($ USD)</th>
                  <th className="py-3.5 px-4 text-right">Quick Price Adjust</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4e4637]/20 text-xs">
                {services.map((srv) => (
                  <tr key={srv.id} className="hover:bg-[#202020]/50">
                    <td className="py-4 px-4 font-bold text-[#e5e2e1]">{srv.name}</td>
                    <td className="py-4 px-4 text-[#d2c5b1]">{srv.category}</td>
                    <td className="py-4 px-4 font-mono text-[#d2c5b1]">{srv.duration}</td>
                    <td className="py-4 px-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#f0bf5c]/10 text-[#f0bf5c] border border-[#f0bf5c]/30">
                        ⚡ {srv.demandScore}/100 Demand
                      </span>
                    </td>
                    <td className="py-4 px-4 font-bold text-[#f0bf5c] text-sm">${srv.price}</td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handlePriceChange(srv.id, -5)}
                          className="w-7 h-7 rounded-lg bg-[#202020] text-[#d2c5b1] hover:bg-[#353535] font-bold"
                        >
                          -
                        </button>
                        <button
                          onClick={() => handlePriceChange(srv.id, 5)}
                          className="w-7 h-7 rounded-lg bg-[#2a2a2a] text-[#f0bf5c] hover:bg-[#353535] font-bold"
                        >
                          +
                        </button>
                      </div>
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
