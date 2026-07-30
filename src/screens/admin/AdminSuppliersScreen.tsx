import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminSuppliersScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminSuppliersScreen: React.FC<AdminSuppliersScreenProps> = ({
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
              Procurement & Vendor Partners
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Supplier Management Ecosystem
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Manage luxury brand partners, wholesale contracts, and automatic reorder triggers.
            </p>
          </div>

          <button
            onClick={() => onNavigate('admin_inventory')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">inventory</span>
            <span>View Stock Inventory</span>
          </button>
        </div>

        {/* Supplier Partners Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'L\'Élite Paris',
              category: 'Haircare & Botanical Oils',
              rep: 'Elena Rossi',
              phone: '+33 1 42 68 55 00',
              status: 'Premier Partner',
              activeOrders: 2
            },
            {
              name: 'Vanguard Tools',
              category: 'Ergonomic Shears & Clippers',
              rep: 'Marcus Vance',
              phone: '+1 (800) 555-8942',
              status: 'Contract Active',
              activeOrders: 1
            },
            {
              name: 'Aurum Skincare Lab',
              category: '24K Gold Masks & Serums',
              rep: 'Jean-Luc Dubois',
              phone: '+41 22 819 3000',
              status: 'Premier Partner',
              activeOrders: 0
            }
          ].map((sup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-4 hover:border-[#f0bf5c]/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f0bf5c]/20 text-[#f0bf5c] border border-[#f0bf5c]/40">
                  {sup.status}
                </span>
                <span className="text-xs text-[#d2c5b1]/60 font-mono">{sup.activeOrders} pending orders</span>
              </div>

              <div>
                <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">{sup.name}</h3>
                <p className="text-xs text-[#d2c5b1]/70">{sup.category}</p>
              </div>

              <div className="space-y-1 text-xs border-t border-[#4e4637]/30 pt-3 text-[#d2c5b1]">
                <p><strong>Account Rep:</strong> {sup.rep}</p>
                <p><strong>Contact:</strong> <span className="font-mono text-[#f0bf5c]">{sup.phone}</span></p>
              </div>

              <button
                onClick={() => alert(`Reorder email initiated to ${sup.name}`)}
                className="w-full py-2 rounded-xl bg-[#2a2a2a] text-[#f0bf5c] hover:bg-[#353535] text-xs font-bold transition-all"
              >
                Create Wholesale Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};
