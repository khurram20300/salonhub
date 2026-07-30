import React, { useState } from 'react';
import { ScreenId, Booking } from '../types';
import { mockBookings } from '../data/mockData';

interface MyBookingsScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const MyBookingsScreen: React.FC<MyBookingsScreenProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Completed' | 'Cancelled'>('Upcoming');

  const filteredBookings = mockBookings.filter((b) => b.status === activeTab);

  return (
    <div className="min-h-screen bg-[#fff8f2] pb-24 p-5 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7b5900]">
            CONCIERGE MANIFEST
          </span>
          <h1 className="font-serif-title text-2xl font-bold text-[#1f1b14]">My Appointments</h1>
        </div>
        <button
          onClick={() => onNavigate('home')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex bg-white p-1 rounded-2xl border border-[#f0e4d2]">
        {(['Upcoming', 'Completed', 'Cancelled'] as const).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-[#7b5900] text-white shadow-sm'
                  : 'text-[#877868] hover:text-[#1f1b14]'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <div className="py-12 text-center space-y-3 bg-white rounded-3xl p-6 border border-[#f0e4d2]">
            <span className="material-symbols-outlined text-4xl text-[#877868]">event_busy</span>
            <h3 className="font-serif-title font-bold text-base text-[#1f1b14]">
              No {activeTab} Appointments
            </h3>
            <p className="text-xs text-[#877868]">
              Ready for your next treatment? Discover master barbers near you.
            </p>
            <button
              onClick={() => onNavigate('explore')}
              className="py-2.5 px-5 rounded-xl bg-[#7b5900] text-white font-semibold text-xs shadow-md"
            >
              Book New Treatment
            </button>
          </div>
        ) : (
          filteredBookings.map((bk) => (
            <div
              key={bk.id}
              className="bg-white p-5 rounded-3xl border border-[#f0e4d2] space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#f0e4d2]">
                <div>
                  <span className="text-[10px] font-bold text-[#7b5900] uppercase block">
                    {bk.salonName}
                  </span>
                  <h3 className="font-serif-title text-base font-bold text-[#1f1b14]">
                    {bk.serviceName}
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold text-[#877868]">
                  {bk.bookingCode}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-[#52493d]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#7b5900]">
                    person
                  </span>
                  <span>Artisan: <strong>{bk.barberName}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#7b5900]">
                    schedule
                  </span>
                  <span>{bk.date} • {bk.time}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#f0e4d2]">
                <span className="font-serif-title font-bold text-lg text-[#1f1b14]">
                  ${bk.price}.00
                </span>

                {activeTab === 'Upcoming' ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert('Appointment rescheduled. Pick a new date.')}
                      className="px-3.5 py-1.5 rounded-xl bg-[#f6ece1] text-[#7b5900] font-semibold text-xs hover:bg-[#ebdccb]"
                    >
                      Reschedule
                    </button>
                    <button
                      onClick={() => alert('Appointment cancelled safely.')}
                      className="px-3.5 py-1.5 rounded-xl bg-red-50 text-red-600 font-semibold text-xs hover:bg-red-100"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => onNavigate('schedule')}
                    className="px-4 py-2 rounded-xl bg-[#7b5900] text-white font-semibold text-xs shadow-sm hover:bg-[#634700]"
                  >
                    Rebook Treatment
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* VIP Priority Rebook Banner */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-[#1f1b14] to-[#353028] text-white flex items-center justify-between shadow-lg">
        <div>
          <span className="text-[10px] font-bold text-[#ffdea4] uppercase tracking-wider block">
            GOLD PRIVILEGE
          </span>
          <h4 className="font-serif-title font-bold text-sm">Priority Rebooking Slot</h4>
          <p className="text-[10px] text-[#d2c5b1]">Lock in prime weekend slots 30 days ahead.</p>
        </div>
        <button
          onClick={() => onNavigate('explore')}
          className="px-3.5 py-2 rounded-xl bg-[#7b5900] text-white font-semibold text-xs hover:brightness-110"
        >
          Reserve
        </button>
      </div>
    </div>
  );
};
