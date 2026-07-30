import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';
import { MOCK_ADMIN_APPOINTMENTS, MOCK_ADMIN_STYLISTS } from '../../data/mockAdminData';

interface AdminOverviewScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminOverviewScreen: React.FC<AdminOverviewScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title & Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Executive Overview
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Salon Performance Dashboard
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Real-time analytics, daily appointments, and revenue growth.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('admin_campaign_creator')}
              className="px-4 py-2.5 rounded-xl bg-[#2a2a2a] border border-[#4e4637]/50 text-xs font-bold text-[#f0bf5c] hover:bg-[#353535] transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">campaign</span>
              <span>New Campaign</span>
            </button>

            <button
              onClick={() => onNavigate('admin_appointments')}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">add_circle</span>
              <span>Manage Appointments</span>
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-[#d2c5b1]/80 uppercase tracking-wider">
                Monthly Revenue
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#f0bf5c]/10 flex items-center justify-center text-[#f0bf5c]">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>
            <p className="text-3xl font-serif-title font-bold text-[#e5e2e1]">$124,850.00</p>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +14.2%
              </span>
              <span className="text-[#d2c5b1]/50">vs last month</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-[#d2c5b1]/80 uppercase tracking-wider">
                Bookings Count
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#f0bf5c]/10 flex items-center justify-center text-[#f0bf5c]">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              </div>
            </div>
            <p className="text-3xl font-serif-title font-bold text-[#e5e2e1]">1,240</p>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +8.5%
              </span>
              <span className="text-[#d2c5b1]/50">94% occupancy</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-[#d2c5b1]/80 uppercase tracking-wider">
                New VIP Clients
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#f0bf5c]/10 flex items-center justify-center text-[#f0bf5c]">
                <span className="material-symbols-outlined text-[20px]">person_add</span>
              </div>
            </div>
            <p className="text-3xl font-serif-title font-bold text-[#e5e2e1]">184</p>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +22%
              </span>
              <span className="text-[#d2c5b1]/50">this quarter</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-[#d2c5b1]/80 uppercase tracking-wider">
                Avg Rating
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#f0bf5c]/10 flex items-center justify-center text-[#f0bf5c]">
                <span className="material-symbols-outlined text-[20px]">star</span>
              </div>
            </div>
            <p className="text-3xl font-serif-title font-bold text-[#e5e2e1]">4.95 / 5</p>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-[#f0bf5c]/10 text-[#f0bf5c] font-bold">
                ★ 912 Reviews
              </span>
              <span className="text-[#d2c5b1]/50">Top 1% Salon</span>
            </div>
          </div>
        </div>

        {/* Charts & Today's Schedule Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue Analytics Chart Mock */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
                  Revenue & Booking Trends
                </h3>
                <p className="text-xs text-[#d2c5b1]/60 mt-0.5">
                  Monthly progression across haircuts, coloring, and spa treatments.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f0bf5c]" />
                <span className="text-xs text-[#d2c5b1]">2026 Revenue</span>
              </div>
            </div>

            {/* Simulated Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-3 pt-6 border-b border-[#4e4637]/30 px-2">
              {[
                { month: 'May', val: 65 },
                { month: 'Jun', val: 78 },
                { month: 'Jul', val: 82 },
                { month: 'Aug', val: 75 },
                { month: 'Sep', val: 94 },
                { month: 'Oct', val: 100 }
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <span className="text-[10px] font-bold text-[#f0bf5c] opacity-0 group-hover:opacity-100 transition-opacity">
                    ${item.val}k
                  </span>
                  <div
                    style={{ height: `${item.val}%` }}
                    className="w-full max-w-[48px] rounded-t-xl bg-gradient-to-t from-[#7b5900] to-[#f0bf5c] shadow-lg group-hover:brightness-125 transition-all"
                  />
                  <span className="text-xs text-[#d2c5b1]/70 font-medium">{item.month}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-[#d2c5b1]/60 pt-2">
              <span>Peak Day: Saturday ($8,400 avg)</span>
              <span>Top Category: Balayage & Styling (42%)</span>
            </div>
          </div>

          {/* Today's Appointments Timeline */}
          <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif-title font-bold text-lg text-[#e5e2e1]">
                  Today's Appointments
                </h3>
                <button
                  onClick={() => onNavigate('admin_appointments')}
                  className="text-xs text-[#f0bf5c] font-bold hover:underline"
                >
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {MOCK_ADMIN_APPOINTMENTS.slice(0, 4).map((apt) => (
                  <div
                    key={apt.id}
                    className="p-3.5 rounded-2xl bg-[#202020] border border-[#4e4637]/30 flex items-center justify-between gap-3 hover:border-[#f0bf5c]/40 transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={apt.clientAvatar}
                        alt={apt.clientName}
                        className="w-10 h-10 rounded-full object-cover border border-[#f0bf5c]/40"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#e5e2e1] truncate">{apt.clientName}</p>
                        <p className="text-[11px] text-[#d2c5b1]/70 truncate">{apt.serviceName}</p>
                        <p className="text-[10px] text-[#f0bf5c] font-mono mt-0.5">{apt.timeSlot}</p>
                      </div>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold shrink-0 ${
                        apt.status === 'In Progress'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {apt.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate('admin_appointments')}
              className="mt-6 w-full py-2.5 rounded-xl bg-[#2a2a2a] text-[#f0bf5c] text-xs font-bold hover:bg-[#353535] transition-all flex items-center justify-center gap-2"
            >
              <span>Full Daily Roster</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Top Stylists Performance Row */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
                Master Stylists & Roster Status
              </h3>
              <p className="text-xs text-[#d2c5b1]/60 mt-0.5">
                Real-time staff occupancy and monthly sales output.
              </p>
            </div>
            <button
              onClick={() => onNavigate('admin_staff')}
              className="px-4 py-2 rounded-xl bg-[#2a2a2a] text-[#f0bf5c] text-xs font-bold hover:bg-[#353535] transition-all"
            >
              Manage Roster
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MOCK_ADMIN_STYLISTS.map((stylist) => (
              <div
                key={stylist.id}
                className="p-4 rounded-2xl bg-[#202020] border border-[#4e4637]/30 flex flex-col justify-between space-y-4 hover:border-[#f0bf5c]/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={stylist.avatar}
                    alt={stylist.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#f0bf5c]/40"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#e5e2e1]">{stylist.name}</p>
                    <p className="text-[11px] text-[#d2c5b1]/70 truncate">{stylist.role}</p>
                    <div className="flex items-center gap-1 text-xs text-[#f0bf5c] mt-0.5 font-bold">
                      ★ {stylist.rating} ({stylist.reviewsCount})
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-[#4e4637]/30 text-xs">
                  <div className="flex justify-between text-[#d2c5b1]/70">
                    <span>Monthly Revenue:</span>
                    <span className="font-bold text-[#e5e2e1]">${stylist.salesTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#d2c5b1]/70">Station:</span>
                    <span className="px-2 py-0.5 rounded bg-[#2a2a2a] text-[10px] font-mono text-[#f0bf5c]">
                      {stylist.station}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
