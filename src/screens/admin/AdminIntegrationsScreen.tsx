import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminIntegrationsScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminIntegrationsScreen: React.FC<AdminIntegrationsScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [integrations, setIntegrations] = useState([
    { name: 'Stripe Payment Gateway', cat: 'Payments', status: true },
    { name: 'Mailchimp Newsletter', cat: 'Marketing', status: true },
    { name: 'Google Workspace Calendar', cat: 'Ops', status: true },
    { name: 'Slack Staff Broadcasts', cat: 'Communication', status: false },
    { name: 'Zapier Automation Hub', cat: 'Developer', status: true }
  ]);

  const toggleIntegration = (idx: number) => {
    setIntegrations((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, status: !item.status } : item))
    );
  };

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Ecosystem & Webhooks
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Integrations Hub
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Connect payment gateways, marketing tools, calendars, and external webhooks.
            </p>
          </div>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-[#f0bf5c] tracking-wider">
                  {item.cat}
                </span>
                <button
                  onClick={() => toggleIntegration(idx)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    item.status ? 'bg-emerald-500' : 'bg-[#2a2a2a]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      item.status ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div>
                <h3 className="font-serif-title font-bold text-lg text-[#e5e2e1]">{item.name}</h3>
                <p className="text-xs text-[#d2c5b1]/60 mt-1">
                  {item.status ? 'Connected & Operational' : 'Disconnected'}
                </p>
              </div>

              <button
                onClick={() => alert(`Configuring ${item.name}`)}
                className="w-full py-2 rounded-xl bg-[#202020] text-[#d2c5b1] hover:text-[#f0bf5c] text-xs font-bold transition-all"
              >
                Configure Settings
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};
