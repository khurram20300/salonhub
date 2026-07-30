import React, { useState } from 'react';
import { ScreenId, Salon } from '../types';
import { mockSalons } from '../data/mockData';

interface MapLocatorScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectSalon: (salon: Salon) => void;
}

export const MapLocatorScreen: React.FC<MapLocatorScreenProps> = ({
  onNavigate,
  onSelectSalon
}) => {
  const [selectedSalon, setSelectedSalon] = useState<Salon>(mockSalons[0]);

  const mapPins = [
    { id: 'salon-1', top: '35%', left: '45%', name: 'The Royal Barber' },
    { id: 'salon-2', top: '50%', left: '30%', name: 'The Golden Scissors' },
    { id: 'salon-3', top: '25%', left: '70%', name: 'Zenith Spa' },
    { id: 'salon-4', top: '65%', left: '60%', name: 'Black & Gold Barbers' }
  ];

  return (
    <div className="relative h-screen bg-[#e8e2d8] flex flex-col justify-between overflow-hidden">
      {/* Map Canvas Visual Simulation */}
      <div className="absolute inset-0 bg-cover bg-center opacity-95" style={{
        backgroundImage: 'radial-gradient(#c89b3c 1px, transparent 1px), radial-gradient(#7b5900 1px, #e8e2d8 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px'
      }}>
        {/* Simulated Map Streets & Rivers */}
        <svg className="w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 Q 300 100, 600 500 T 1200 800" fill="none" stroke="#7b5900" strokeWidth="18" />
          <path d="M200 -100 Q 150 400, 500 900" fill="none" stroke="#fff" strokeWidth="24" />
          <path d="M-50 400 L 900 300" fill="none" stroke="#fff" strokeWidth="16" />
        </svg>

        {/* Map Pins */}
        {mapPins.map((pin) => {
          const salonObj = mockSalons.find((s) => s.id === pin.id) || mockSalons[0];
          const isSelected = selectedSalon.id === pin.id;
          return (
            <div
              key={pin.id}
              onClick={() => setSelectedSalon(salonObj)}
              style={{ top: pin.top, left: pin.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
            >
              <div className={`p-2 rounded-full transition-all duration-300 ${
                isSelected ? 'scale-125 bg-[#7b5900] text-white shadow-2xl ring-4 ring-white' : 'bg-white text-[#7b5900] shadow-md hover:scale-110'
              }`}>
                <span className="material-symbols-outlined text-[20px]">content_cut</span>
              </div>
              <span className="mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-black/80 text-white whitespace-nowrap shadow-md block">
                {pin.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Floating Top Header Bar */}
      <div className="relative z-30 p-4 flex items-center gap-2">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <div className="flex-1 bg-white rounded-2xl p-2.5 px-4 shadow-lg flex items-center gap-2 border border-[#f0e4d2]">
          <span className="material-symbols-outlined text-[18px] text-[#7b5900]">location_on</span>
          <span className="text-xs font-bold text-[#1f1b14] flex-1">Beverly Hills & Rodeo Dr</span>
          <span className="text-[10px] font-bold bg-[#f6ece1] text-[#7b5900] px-2 py-0.5 rounded-md">12 Salons</span>
        </div>
      </div>

      {/* Sliding Bottom Sheet */}
      <div className="relative z-30 m-4 p-5 bg-white rounded-3xl shadow-2xl border border-[#f0e4d2] space-y-4 animate-in slide-in-from-bottom duration-300">
        <div className="w-12 h-1 rounded-full bg-[#d2c5b1] mx-auto mb-1" />

        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#7b5900] uppercase tracking-wider block">
              SELECTED ESTABLISHMENT
            </span>
            <h3 className="font-serif-title text-xl font-bold text-[#1f1b14]">
              {selectedSalon.name}
            </h3>
            <p className="text-xs text-[#877868]">
              {selectedSalon.address}, {selectedSalon.cityArea} • {selectedSalon.distanceMiles} miles away
            </p>
          </div>
          <div className="text-right">
            <span className="flex items-center gap-1 text-sm font-bold text-[#1f1b14]">
              <span className="material-symbols-outlined text-amber-500 fill-1 text-[16px]">star</span>
              {selectedSalon.rating}
            </span>
            <span className="text-[10px] text-[#877868]">({selectedSalon.reviewsCount})</span>
          </div>
        </div>

        <div className="h-28 rounded-2xl overflow-hidden relative">
          <img src={selectedSalon.image} alt={selectedSalon.name} className="w-full h-full object-cover" />
          <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#7b5900] text-white">
            Next Slot: {selectedSalon.nextSlot}
          </div>
        </div>

        <button
          onClick={() => {
            onSelectSalon(selectedSalon);
            onNavigate('salon_detail');
          }}
          className="w-full py-3.5 rounded-2xl bg-[#7b5900] text-white font-semibold text-xs shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <span>Book Exclusive Experience</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
