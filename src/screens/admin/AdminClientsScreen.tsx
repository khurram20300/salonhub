import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';
import { MOCK_ADMIN_CLIENTS, AdminClient } from '../../data/mockAdminData';

interface AdminClientsScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminClientsScreen: React.FC<AdminClientsScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [clients] = useState<AdminClient[]>(MOCK_ADMIN_CLIENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [membershipFilter, setMembershipFilter] = useState('All');

  const filtered = clients.filter((cli) => {
    const matchesMembership = membershipFilter === 'All' || cli.membership === membershipFilter;
    const matchesSearch =
      cli.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cli.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cli.phone.includes(searchQuery);
    return matchesMembership && matchesSearch;
  });

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Client Dossiers & CRM
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Clients Directory
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Manage VIP clientele, lifetime spending, and tailored color formulas.
            </p>
          </div>

          <button
            onClick={() => onNavigate('admin_client_dossier')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            <span>Add New VIP Client</span>
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1b1c] p-4 rounded-2xl border border-[#4e4637]/40">
          <div className="flex items-center gap-2 overflow-x-auto">
            {['All', 'VIP Platinum', 'Gold Member', 'Silver Member', 'Standard'].map((mem) => (
              <button
                key={mem}
                onClick={() => setMembershipFilter(mem)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  membershipFilter === mem
                    ? 'bg-[#f0bf5c] text-[#131313] shadow-md'
                    : 'bg-[#202020] text-[#d2c5b1] hover:bg-[#2a2a2a]'
                }`}
              >
                {mem}
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
              placeholder="Search by name, email, or phone..."
              className="w-full bg-[#202020] border border-[#4e4637]/40 rounded-xl pl-10 pr-4 py-2 text-xs text-[#e5e2e1] focus:outline-none focus:ring-1 focus:ring-[#f0bf5c]"
            />
          </div>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cli) => (
            <div
              key={cli.id}
              className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#f0bf5c]/50 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={cli.avatar}
                    alt={cli.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#f0bf5c]/50 shadow-md"
                  />
                  <div>
                    <h3 className="font-serif-title font-bold text-lg text-[#e5e2e1] group-hover:text-[#f0bf5c] transition-colors">
                      {cli.name}
                    </h3>
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mt-1 ${
                        cli.membership === 'VIP Platinum'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : cli.membership === 'Gold Member'
                          ? 'bg-[#f0bf5c]/20 text-[#f0bf5c] border border-[#f0bf5c]/40'
                          : 'bg-[#2a2a2a] text-[#d2c5b1]'
                      }`}
                    >
                      {cli.membership}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('admin_client_dossier')}
                  className="p-2 rounded-xl bg-[#202020] text-[#f0bf5c] hover:bg-[#353535] transition-all"
                  title="View Full Dossier"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>

              <div className="space-y-2 text-xs border-t border-b border-[#4e4637]/30 py-4">
                <div className="flex justify-between text-[#d2c5b1]/80">
                  <span>Phone:</span>
                  <span className="font-mono text-[#e5e2e1]">{cli.phone}</span>
                </div>
                <div className="flex justify-between text-[#d2c5b1]/80">
                  <span>Total Spent (LTV):</span>
                  <span className="font-bold text-[#f0bf5c]">${cli.totalSpent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#d2c5b1]/80">
                  <span>Visits Count:</span>
                  <span className="font-bold text-[#e5e2e1]">{cli.totalVisits} appointments</span>
                </div>
                <div className="flex justify-between text-[#d2c5b1]/80">
                  <span>Preferred Stylist:</span>
                  <span className="font-medium text-[#e5e2e1]">{cli.favoriteStylist}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[11px] text-[#d2c5b1]/50 italic truncate">"{cli.notes}"</p>
                <button
                  onClick={() => onNavigate('admin_client_dossier')}
                  className="text-xs text-[#f0bf5c] font-bold hover:underline shrink-0 ml-2"
                >
                  Open Dossier →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};
