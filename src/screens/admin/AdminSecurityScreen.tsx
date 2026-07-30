import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminSecurityScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminSecurityScreen: React.FC<AdminSecurityScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [roles, setRoles] = useState([
    { name: 'Elena Vatori', role: 'Front Desk Manager', financials: false, clients: true, inventory: true },
    { name: 'Marcus Thorne', role: 'Senior Barber Lead', financials: false, clients: true, inventory: false },
    { name: 'Sasha Lin', role: 'General Manager', financials: true, clients: true, inventory: true }
  ]);

  const togglePermission = (idx: number, field: 'financials' | 'clients' | 'inventory') => {
    setRoles((prev) =>
      prev.map((r, i) => (i === idx ? { ...r, [field]: !r[field] } : r))
    );
  };

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Access Control & RBAC
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Security & Staff Permissions
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Configure granular administrative privileges for financial ledgers, client records, and store configurations.
            </p>
          </div>

          <button
            onClick={() => onNavigate('admin_audit_logs')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span>View Audit Logs</span>
          </button>
        </div>

        {/* Permissions Matrix */}
        <div className="bg-[#1b1b1c] rounded-3xl border border-[#4e4637]/40 shadow-xl overflow-hidden p-6">
          <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1] mb-6">
            Staff Access Control Matrix
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#202020] text-[11px] uppercase tracking-wider text-[#d2c5b1]/60 border-b border-[#4e4637]/30">
                  <th className="py-3.5 px-4">Staff Member</th>
                  <th className="py-3.5 px-4">Role Title</th>
                  <th className="py-3.5 px-4">Financial Ledger Access</th>
                  <th className="py-3.5 px-4">Client CRM Dossiers</th>
                  <th className="py-3.5 px-4">Inventory & Stock</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4e4637]/20 text-xs">
                {roles.map((r, idx) => (
                  <tr key={idx} className="hover:bg-[#202020]/50">
                    <td className="py-4 px-4 font-bold text-[#e5e2e1]">{r.name}</td>
                    <td className="py-4 px-4 text-[#d2c5b1]">{r.role}</td>

                    <td className="py-4 px-4">
                      <button
                        onClick={() => togglePermission(idx, 'financials')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          r.financials
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {r.financials ? 'ALLOWED' : 'DENIED'}
                      </button>
                    </td>

                    <td className="py-4 px-4">
                      <button
                        onClick={() => togglePermission(idx, 'clients')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          r.clients
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {r.clients ? 'ALLOWED' : 'DENIED'}
                      </button>
                    </td>

                    <td className="py-4 px-4">
                      <button
                        onClick={() => togglePermission(idx, 'inventory')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          r.inventory
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {r.inventory ? 'ALLOWED' : 'DENIED'}
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
