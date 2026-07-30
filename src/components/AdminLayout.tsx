import React, { useState } from 'react';
import { ScreenId } from '../types';

interface AdminLayoutProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  children: React.ReactNode;
  brandName?: string;
  brandTagline?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  currentScreen,
  onNavigate,
  children,
  brandName = 'The Royal Barber',
  brandTagline = 'Premium Management'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: ScreenId; label: string; icon: string; matchScreens?: ScreenId[] }[] = [
    { id: 'admin_overview', label: 'Dashboard', icon: 'dashboard' },
    { id: 'admin_appointments', label: 'Appointments', icon: 'calendar_month' },
    { id: 'admin_clients', label: 'Clients', icon: 'group', matchScreens: ['admin_clients', 'admin_client_dossier'] },
    { id: 'admin_staff', label: 'Stylists & Staff', icon: 'content_cut', matchScreens: ['admin_staff', 'admin_stylist_performance', 'admin_payouts'] },
    { id: 'admin_services', label: 'Services', icon: 'dry_cleaning' },
    { id: 'admin_financials', label: 'Revenue', icon: 'payments', matchScreens: ['admin_financials', 'admin_transactions', 'admin_payouts'] },
    { id: 'admin_inventory', label: 'Inventory', icon: 'inventory_2', matchScreens: ['admin_inventory', 'admin_suppliers'] },
    { id: 'admin_marketing', label: 'Marketing', icon: 'confirmation_number', matchScreens: ['admin_marketing', 'admin_campaign_creator'] },
    { id: 'admin_integrations', label: 'Integrations', icon: 'hub' },
    { id: 'admin_security', label: 'Security & Logs', icon: 'shield_person', matchScreens: ['admin_security', 'admin_audit_logs'] },
    { id: 'admin_backup', label: 'Backup & Export', icon: 'database', matchScreens: ['admin_backup', 'admin_export'] },
    { id: 'admin_settings', label: 'Settings', icon: 'settings' }
  ];

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-sans antialiased flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden sticky top-0 z-50 bg-[#1b1b1c] border-b border-[#4e4637]/40 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-lg bg-[#2a2a2a] text-[#f0bf5c]"
          >
            <span className="material-symbols-outlined text-[22px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          <span className="font-serif-title font-bold text-[#f0bf5c] text-lg">
            {brandName}
          </span>
        </div>
        <button
          onClick={() => onNavigate('home')}
          className="text-xs px-3 py-1.5 rounded-full bg-[#c89b3c] text-[#261900] font-bold flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[14px]">store</span>
          <span>Exit Admin</span>
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-[280px] bg-[#1b1b1c] border-r border-[#4e4637]/40 shadow-2xl flex flex-col py-8 z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="px-6 mb-8 flex justify-between items-start">
          <div>
            <h1 className="font-serif-title text-2xl font-bold text-[#f0bf5c]">
              {brandName}
            </h1>
            <p className="text-[11px] uppercase tracking-widest text-[#d2c5b1]/60 font-semibold mt-1">
              {brandTagline}
            </p>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="hidden md:flex p-1.5 rounded-full bg-[#2a2a2a] text-[#d2c5b1] hover:text-[#f0bf5c] hover:bg-[#353535] transition-all"
            title="Return to Customer App"
          >
            <span className="material-symbols-outlined text-[18px]">exit_to_app</span>
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const isActive =
              currentScreen === item.id ||
              (item.matchScreens && item.matchScreens.includes(currentScreen));

            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#f0bf5c] border-l-4 border-[#f0bf5c] bg-[#2a2a2a] font-bold shadow-md'
                    : 'text-[#d2c5b1] hover:text-white hover:bg-[#2a2a2a]/60'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="px-5 pt-4 mt-auto border-t border-[#4e4637]/30 space-y-3">
          <div className="p-3 rounded-2xl bg-[#202020] border border-[#4e4637]/40 flex items-center gap-3">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDih-UitMXR4xZU8J71qh-QWI-o85RMJB4e8PutSJznha0XTshxKvZhEPhlmsfCrHQPKAvWo38lSjGF7CGe57pyqd-WyYlV08Xk5zxMuLkL0_gyWgmEgU5_GI781k7iM8Ep0pmXEZpY8NtUyEwvM4gEbIARHAitiSyuhqLimHh6FNwp050QcNDiPmCdkrYIoJtBXd6V9Ll69F0pWtp87dlscbfqjht18kCLEKhvpqnQ_W2y3hFCYUr8yu6xRN5v9GJ7F8kEv7_pdO1W"
              alt="Admin Manager"
              className="w-10 h-10 rounded-full object-cover border border-[#f0bf5c]/50"
            />
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-[#e5e2e1] truncate">Julian Thorne</p>
              <p className="text-[10px] text-[#f0bf5c] uppercase tracking-wider font-semibold">
                Chief Manager
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="w-full py-2.5 rounded-xl bg-[#c89b3c] text-[#261900] font-bold text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">storefront</span>
            <span>Switch to Storefront App</span>
          </button>
        </div>
      </aside>

      {/* Main Container Area */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 z-30 h-20 backdrop-blur-xl bg-[#131313]/80 border-b border-[#4e4637]/40 px-6 sm:px-10 flex items-center justify-between gap-4">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#d2c5b1]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search analytics, clients, appointments, or staff..."
                className="w-full bg-[#1b1b1c] border border-[#4e4637]/50 rounded-full pl-12 pr-4 py-2.5 text-sm text-[#e5e2e1] placeholder-[#d2c5b1]/50 focus:outline-none focus:ring-2 focus:ring-[#f0bf5c] transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => onNavigate('notifications')}
              className="p-2 text-[#d2c5b1] hover:text-[#f0bf5c] transition-colors relative"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f0bf5c] rounded-full ring-2 ring-[#131313]" />
            </button>

            <button
              onClick={() => onNavigate('admin_audit_logs')}
              className="p-2 text-[#d2c5b1] hover:text-[#f0bf5c] transition-colors"
              title="System Logs"
            >
              <span className="material-symbols-outlined text-[22px]">verified_user</span>
            </button>

            <div className="h-8 w-[1px] bg-[#4e4637]/40 hidden sm:block" />

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-[#e5e2e1]">Alex Rivera</p>
                <p className="text-[10px] text-[#d2c5b1] uppercase tracking-wider">
                  Admin Principal
                </p>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZdiB1dcQ0ICPFfjLTfOwjeoc0rCJ44djN2ul0BGmJ7fSA59WopFFXvLj6-CfCPcQINnueyCZLDu8gt7WlyS2d9YnjchXT-agXU7-vVyy_eExamRYzI-V7kzE0xgR0XI4mBkNsnXFAMInq76ZeBcfk1quTRXJVBQqI626ILSG4w8C8pvtbk6pqJqb_0HXg_eTcDThxOW3ppgtpKQT3cyjbL4kUSkwjuH5Cw73n-AEl_94ioAXpWW-cYw"
                alt="Alex Rivera"
                className="w-9 h-9 rounded-full border border-[#f0bf5c]/40 object-cover"
              />
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-6 sm:p-10 max-w-[1600px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
