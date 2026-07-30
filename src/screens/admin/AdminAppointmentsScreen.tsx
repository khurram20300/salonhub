import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';
import { MOCK_ADMIN_APPOINTMENTS, AdminAppointment } from '../../data/mockAdminData';

interface AdminAppointmentsScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminAppointmentsScreen: React.FC<AdminAppointmentsScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [appointments, setAppointments] = useState<AdminAppointment[]>(MOCK_ADMIN_APPOINTMENTS);
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = appointments.filter((apt) => {
    const matchesFilter = filterStatus === 'All' || apt.status === filterStatus;
    const matchesSearch =
      apt.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.stylistName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleUpdateStatus = (id: string, newStatus: AdminAppointment['status']) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
  };

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Roster & Bookings
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Appointments Management
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Manage live schedules, client arrivals, and booking status updates.
            </p>
          </div>

          <button
            onClick={() => alert('New Walk-in / Appointment modal opened!')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Book Walk-In Client</span>
          </button>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1b1c] p-4 rounded-2xl border border-[#4e4637]/40">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {['All', 'Confirmed', 'In Progress', 'Completed', 'Cancelled'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  filterStatus === st
                    ? 'bg-[#f0bf5c] text-[#131313] shadow-md'
                    : 'bg-[#202020] text-[#d2c5b1] hover:bg-[#2a2a2a]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#d2c5b1]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search appointments..."
              className="w-full bg-[#202020] border border-[#4e4637]/40 rounded-xl pl-10 pr-4 py-2 text-xs text-[#e5e2e1] focus:outline-none focus:ring-1 focus:ring-[#f0bf5c]"
            />
          </div>
        </div>

        {/* Main Appointments Table */}
        <div className="bg-[#1b1b1c] rounded-3xl border border-[#4e4637]/40 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#202020] border-b border-[#4e4637]/40 text-[11px] uppercase tracking-wider text-[#d2c5b1]/60 font-semibold">
                  <th className="py-4 px-6">Appointment ID</th>
                  <th className="py-4 px-6">Client</th>
                  <th className="py-4 px-6">Service</th>
                  <th className="py-4 px-6">Stylist</th>
                  <th className="py-4 px-6">Date & Time</th>
                  <th className="py-4 px-6">Price</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#4e4637]/20 text-xs">
                {filtered.map((apt) => (
                  <tr key={apt.id} className="hover:bg-[#202020]/50 transition-colors">
                    <td className="py-4 px-6 font-mono text-[#f0bf5c] font-bold">
                      {apt.id}
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={apt.clientAvatar}
                          alt={apt.clientName}
                          className="w-9 h-9 rounded-full object-cover border border-[#f0bf5c]/40"
                        />
                        <span className="font-bold text-[#e5e2e1]">{apt.clientName}</span>
                      </div>
                    </td>

                    <td className="py-4 px-6 text-[#d2c5b1]">{apt.serviceName}</td>

                    <td className="py-4 px-6 font-medium text-[#e5e2e1]">
                      {apt.stylistName}
                    </td>

                    <td className="py-4 px-6">
                      <div className="text-[#e5e2e1]">{apt.date}</div>
                      <div className="text-[10px] text-[#f0bf5c] font-mono">{apt.timeSlot}</div>
                    </td>

                    <td className="py-4 px-6 font-bold text-[#e5e2e1]">${apt.amount}</td>

                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          apt.status === 'Completed'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : apt.status === 'In Progress'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            : apt.status === 'Confirmed'
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {apt.status}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {apt.status !== 'Completed' && (
                          <button
                            onClick={() => handleUpdateStatus(apt.id, 'Completed')}
                            className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all"
                            title="Mark Completed"
                          >
                            <span className="material-symbols-outlined text-[18px]">check</span>
                          </button>
                        )}
                        <button
                          onClick={() => onNavigate('admin_client_dossier')}
                          className="p-1.5 rounded-lg bg-[#2a2a2a] text-[#f0bf5c] hover:bg-[#353535] transition-all"
                          title="View Client Profile"
                        >
                          <span className="material-symbols-outlined text-[18px]">badge</span>
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
