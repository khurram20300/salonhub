import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';
import { MOCK_ADMIN_INVENTORY, AdminInventoryItem } from '../../data/mockAdminData';

interface AdminInventoryScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminInventoryScreen: React.FC<AdminInventoryScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [inventory, setInventory] = useState<AdminInventoryItem[]>(MOCK_ADMIN_INVENTORY);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = inventory.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const handleRestock = (id: string) => {
    setInventory((prev) =>
      prev.map((item) => (item.id === id ? { ...item, stock: item.stock + 20, status: 'In Stock' } : item))
    );
  };

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Stock & Procurement
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Inventory & Supplies Management
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Track hair products, professional equipment, and reorder alerts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('admin_suppliers')}
              className="px-4 py-2.5 rounded-xl bg-[#2a2a2a] border border-[#4e4637]/50 text-xs font-bold text-[#f0bf5c] hover:bg-[#353535] transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              <span>Suppliers Ecosystem</span>
            </button>
            <button
              onClick={() => alert('Add Item modal opened')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 transition-all"
            >
              + Add Product
            </button>
          </div>
        </div>

        {/* Inventory KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-[#1b1b1c] border border-[#4e4637]/40">
            <span className="text-xs text-[#d2c5b1]/70 font-semibold uppercase">Low Stock Warnings</span>
            <p className="text-3xl font-serif-title font-bold text-rose-400 mt-2">2 Items</p>
            <p className="text-[11px] text-rose-400/80 mt-1">Requires immediate supplier purchase</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#1b1b1c] border border-[#4e4637]/40">
            <span className="text-xs text-[#d2c5b1]/70 font-semibold uppercase">Total Inventory Value</span>
            <p className="text-3xl font-serif-title font-bold text-[#f0bf5c] mt-2">$48,250.00</p>
            <p className="text-[11px] text-[#d2c5b1]/60 mt-1">Across 140 stock items</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#1b1b1c] border border-[#4e4637]/40">
            <span className="text-xs text-[#d2c5b1]/70 font-semibold uppercase">Pending Shipments</span>
            <p className="text-3xl font-serif-title font-bold text-[#e5e2e1] mt-2">3 Orders</p>
            <p className="text-[11px] text-emerald-400 mt-1">Expected arriving tomorrow</p>
          </div>
        </div>

        {/* Table & Category Filter */}
        <div className="bg-[#1b1b1c] rounded-3xl border border-[#4e4637]/40 shadow-xl overflow-hidden space-y-4 p-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {['All', 'Hair Care', 'Skin & Body', 'Tools & Equip', 'Color & Treatment'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#f0bf5c] text-[#131313]'
                    : 'bg-[#202020] text-[#d2c5b1] hover:bg-[#2a2a2a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#202020] text-[11px] uppercase tracking-wider text-[#d2c5b1]/60 border-b border-[#4e4637]/30">
                  <th className="py-3.5 px-4">Item Name & SKU</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Brand</th>
                  <th className="py-3.5 px-4">Stock Level</th>
                  <th className="py-3.5 px-4">Unit Price</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4e4637]/20 text-xs">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-[#202020]/50">
                    <td className="py-4 px-4">
                      <p className="font-bold text-[#e5e2e1]">{item.name}</p>
                      <p className="text-[10px] font-mono text-[#d2c5b1]/60">{item.sku}</p>
                    </td>
                    <td className="py-4 px-4 text-[#d2c5b1]">{item.category}</td>
                    <td className="py-4 px-4 text-[#e5e2e1]">{item.brand}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#e5e2e1] w-8">{item.stock}</span>
                        <div className="w-24 bg-[#202020] rounded-full h-2 overflow-hidden border border-[#4e4637]/30">
                          <div
                            style={{ width: `${Math.min(100, (item.stock / 30) * 100)}%` }}
                            className={`h-full ${
                              item.stock < item.minThreshold ? 'bg-rose-500' : 'bg-[#f0bf5c]'
                            }`}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-bold text-[#f0bf5c]">${item.price}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          item.status === 'Critical'
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                            : item.status === 'Low Stock'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => handleRestock(item.id)}
                        className="px-3 py-1.5 rounded-xl bg-[#2a2a2a] text-[#f0bf5c] hover:bg-[#353535] font-bold text-[11px]"
                      >
                        + Restock
                      </button>
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
