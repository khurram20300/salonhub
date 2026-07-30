import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';
import { MOCK_ADMIN_AUDIT_LOGS } from '../../data/mockAdminData';

interface AdminAuditLogsScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminAuditLogsScreen: React.FC<AdminAuditLogsScreenProps> = ({
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
              Security Compliance & Telemetry
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              System Audit Logs
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              High-density security event tracking, data access history, and role modifications.
            </p>
          </div>

          <button
            onClick={() => onNavigate('admin_security')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">security</span>
            <span>Security Permissions</span>
          </button>
        </div>

        {/* Security Score Banner */}
        <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <span className="material-symbols-outlined text-[26px]">verified</span>
            </div>
            <div>
              <h4 className="font-serif-title font-bold text-lg text-[#e5e2e1]">
                System Security Health Score: 98/100
              </h4>
              <p className="text-xs text-[#d2c5b1]">
                Zero data leak vulnerabilities detected. 2FA mandatory for financial rate modifications.
              </p>
            </div>
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="bg-[#1b1b1c] rounded-3xl border border-[#4e4637]/40 shadow-xl overflow-hidden p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#202020] text-[11px] uppercase tracking-wider text-[#d2c5b1]/60 border-b border-[#4e4637]/30">
                  <th className="py-3.5 px-4">Log ID</th>
                  <th className="py-3.5 px-4">Timestamp</th>
                  <th className="py-3.5 px-4">User & Role</th>
                  <th className="py-3.5 px-4">Action Event</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">IP Address</th>
                  <th className="py-3.5 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4e4637]/20 text-xs">
                {MOCK_ADMIN_AUDIT_LOGS.map((log) => (
                  <tr key={log.id} className="hover:bg-[#202020]/50">
                    <td className="py-4 px-4 font-mono font-bold text-[#f0bf5c]">{log.id}</td>
                    <td className="py-4 px-4 text-[#d2c5b1]">{log.timestamp}</td>
                    <td className="py-4 px-4">
                      <p className="font-bold text-[#e5e2e1]">{log.user}</p>
                      <p className="text-[10px] text-[#d2c5b1]/60">{log.role}</p>
                    </td>
                    <td className="py-4 px-4 text-[#e5e2e1]">{log.action}</td>
                    <td className="py-4 px-4 font-semibold text-[#f0bf5c]">{log.category}</td>
                    <td className="py-4 px-4 font-mono text-[#d2c5b1]/80">{log.ipAddress}</td>
                    <td className="py-4 px-4 text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          log.status === 'SUCCESS'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {log.status}
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
