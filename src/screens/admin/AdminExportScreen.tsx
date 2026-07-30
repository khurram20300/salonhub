import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminExportScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminExportScreen: React.FC<AdminExportScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [exportDataset, setExportDataset] = useState('Financial Revenue');
  const [fileFormat, setFileFormat] = useState('CSV');

  const handleTriggerExport = () => {
    alert(`Export generated for ${exportDataset} in ${fileFormat} format! Download starting...`);
  };

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              BI & Reporting Tools
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Data Export & Analysis
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Generate custom CSV, PDF, or XLSX financial and operational datasets for accounting.
            </p>
          </div>
        </div>

        {/* Generator Form Card */}
        <div className="p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6 max-w-2xl">
          <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
            Custom Export Configurator
          </h3>

          <div className="space-y-4 text-xs">
            <div className="space-y-2">
              <label className="text-[#d2c5b1] font-semibold">Select Target Dataset</label>
              <select
                value={exportDataset}
                onChange={(e) => setExportDataset(e.target.value)}
                className="w-full bg-[#202020] border border-[#4e4637]/40 rounded-xl p-3 text-xs text-[#e5e2e1] focus:ring-1 focus:ring-[#f0bf5c]"
              >
                <option value="Financial Revenue">Financial Revenue & Payouts</option>
                <option value="Client CRM Records">Client Directory & Color Formulas</option>
                <option value="Appointments Roster">Appointment Schedules & History</option>
                <option value="Stock Inventory">Stock Inventory & Supplier Procurement</option>
                <option value="System Audit Trail">System Audit Logs & Security Telemetry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[#d2c5b1] font-semibold">Export File Format</label>
              <div className="grid grid-cols-3 gap-3">
                {['CSV', 'PDF Document', 'XLSX Spreadsheet'].map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setFileFormat(fmt)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                      fileFormat === fmt
                        ? 'bg-[#f0bf5c] text-[#131313] border-[#f0bf5c]'
                        : 'bg-[#202020] text-[#d2c5b1] border-[#4e4637]/30'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleTriggerExport}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] font-bold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-4"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Generate & Download Dataset</span>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
