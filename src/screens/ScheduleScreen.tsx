import React, { useState } from 'react';
import { ScreenId, Barber, Service } from '../types';
import { mockBarbers } from '../data/mockData';

interface ScheduleScreenProps {
  selectedBarber?: Barber;
  selectedService?: Service;
  onNavigate: (screen: ScreenId) => void;
  onSelectBarber: (barber: Barber) => void;
}

export const ScheduleScreen: React.FC<ScheduleScreenProps> = ({
  selectedBarber = mockBarbers[0],
  selectedService,
  onNavigate,
  onSelectBarber
}) => {
  const [activeBarberId, setActiveBarberId] = useState(selectedBarber.id);
  const [selectedDate, setSelectedDate] = useState('Tue 12');
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM');

  const days = [
    { dayName: 'Mon', dayNum: '11' },
    { dayName: 'Tue', dayNum: '12' },
    { dayName: 'Wed', dayNum: '13' },
    { dayName: 'Thu', dayNum: '14' },
    { dayName: 'Fri', dayNum: '15' },
    { dayName: 'Sat', dayNum: '16' },
    { dayName: 'Sun', dayNum: '17' }
  ];

  const morningSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '11:00 AM', '11:30 AM'];
  const afternoonSlots = ['1:30 PM', '2:00 PM', '2:30 PM', '3:30 PM', '4:00 PM'];
  const eveningSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'];

  const servicePrice = selectedService ? selectedService.price : 85;

  return (
    <div className="min-h-screen bg-[#fff8f2] pb-28 p-5 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('salon_detail')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <div>
          <h1 className="font-serif-title text-xl font-bold text-[#1f1b14]">
            Select Barber & Schedule
          </h1>
          <p className="text-[11px] text-[#877868]">Choose your artisan and reserved slot</p>
        </div>
      </div>

      {/* Select Barber Horizontal Avatar List */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#7b5900] uppercase tracking-wider block">
          Select Master Barber
        </label>
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
          {mockBarbers.map((b) => {
            const isSelected = activeBarberId === b.id;
            return (
              <div
                key={b.id}
                onClick={() => {
                  setActiveBarberId(b.id);
                  onSelectBarber(b);
                }}
                className={`flex-shrink-0 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#7b5900] text-white border-[#7b5900] shadow-md scale-[1.02]'
                    : 'bg-white text-[#1f1b14] border-[#f0e4d2] hover:border-[#d2c5b1]'
                }`}
              >
                <img
                  src={b.avatar}
                  alt={b.name}
                  className="w-8 h-8 rounded-full object-cover border border-white"
                />
                <div>
                  <h4 className="font-bold text-xs truncate max-w-[90px]">{b.name}</h4>
                  <p className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[#7b5900]'}`}>
                    {b.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Date Horizontal Picker */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-[#7b5900] uppercase tracking-wider block">
            October 2024
          </label>
          <span className="text-[11px] font-semibold text-[#1f1b14]">Beverly Hills Time</span>
        </div>

        <div className="flex gap-2.5 overflow-x-auto no-scrollbar py-1">
          {days.map((d) => {
            const dateStr = `${d.dayName} ${d.dayNum}`;
            const isSelected = selectedDate === dateStr;
            return (
              <button
                key={d.dayNum}
                onClick={() => setSelectedDate(dateStr)}
                className={`flex-1 min-w-[56px] py-3.5 rounded-2xl text-center border transition-all ${
                  isSelected
                    ? 'bg-[#7b5900] text-white border-[#7b5900] shadow-md'
                    : 'bg-white text-[#1f1b14] border-[#f0e4d2] hover:border-[#d2c5b1]'
                }`}
              >
                <span className="text-[10px] uppercase block opacity-80">{d.dayName}</span>
                <span className="text-base font-bold font-serif-title block">{d.dayNum}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots Matrix */}
      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-bold text-[#1f1b14] mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#7b5900]">wb_twilight</span>
            Morning Slots
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {morningSlots.map((slot) => {
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-3 rounded-2xl text-xs font-medium border transition-all ${
                    isSelected
                      ? 'bg-[#7b5900] text-white border-[#7b5900] font-bold shadow-md'
                      : 'bg-white text-[#1f1b14] border-[#f0e4d2] hover:border-[#d2c5b1]'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-[#1f1b14] mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#7b5900]">wb_sunny</span>
            Afternoon Slots
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {afternoonSlots.map((slot) => {
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-3 rounded-2xl text-xs font-medium border transition-all ${
                    isSelected
                      ? 'bg-[#7b5900] text-white border-[#7b5900] font-bold shadow-md'
                      : 'bg-white text-[#1f1b14] border-[#f0e4d2] hover:border-[#d2c5b1]'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-[#1f1b14] mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#7b5900]">nights_stay</span>
            Evening Slots
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {eveningSlots.map((slot) => {
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-3 rounded-2xl text-xs font-medium border transition-all ${
                    isSelected
                      ? 'bg-[#7b5900] text-white border-[#7b5900] font-bold shadow-md'
                      : 'bg-white text-[#1f1b14] border-[#f0e4d2] hover:border-[#d2c5b1]'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-[#f0e4d2] p-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#877868] uppercase font-medium block">
            {selectedDate} at {selectedSlot}
          </span>
          <span className="font-serif-title font-bold text-2xl text-[#1f1b14]">
            ${servicePrice}.00
          </span>
        </div>

        <button
          onClick={() => onNavigate('checkout')}
          className="py-3.5 px-6 rounded-2xl bg-[#7b5900] text-white font-semibold text-xs shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] active:scale-95 transition-all flex items-center gap-1.5"
        >
          <span>Continue to Summary</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
