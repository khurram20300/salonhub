import React, { useState } from 'react';
import { ScreenId, ServiceCategory, Salon, Barber } from '../types';
import { mockSalons, mockBarbers } from '../data/mockData';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectSalon: (salon: Salon) => void;
  onSelectBarber: (barber: Barber) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectSalon,
  onSelectBarber
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'All'>('All');

  const categories: { id: ServiceCategory | 'All'; name: string; icon: string }[] = [
    { id: 'All', name: 'All Services', icon: 'auto_awesome' },
    { id: 'Barber', name: 'Barber', icon: 'content_cut' },
    { id: 'Hair', name: 'Hair', icon: 'palette' },
    { id: 'Massage', name: 'Massage', icon: 'spa' },
    { id: 'Spa', name: 'Spa', icon: 'bathtub' },
    { id: 'Nails', name: 'Nails', icon: 'back_hand' }
  ];

  const filteredSalons = selectedCategory === 'All'
    ? mockSalons
    : mockSalons.filter((s) => s.popularServices.some((srv) => srv.category === selectedCategory));

  return (
    <div className="min-h-screen bg-[#fff8f2] pb-24 space-y-6">
      {/* Top Welcome Header */}
      <div className="px-5 pt-4 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#7b5900]">
            GOLD MEMBER • BEVERLY HILLS
          </span>
          <h1 className="font-serif-title text-2xl font-bold text-[#1f1b14]">
            Hello, Alexander 👋
          </h1>
          <p className="text-xs text-[#877868]">
            Your next glow-up is just a tap away.
          </p>
        </div>
      </div>

      {/* Search Bar & Filter Toggle */}
      <div className="px-5">
        <div className="flex items-center gap-2.5">
          <div
            onClick={() => onNavigate('explore')}
            className="flex-1 bg-white border border-[#f0e4d2] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm cursor-pointer hover:border-[#d2c5b1] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] text-[#877868]">search</span>
            <span className="text-xs text-[#877868] flex-1">
              Search salons, services, or master barbers...
            </span>
          </div>
          <button
            onClick={() => onNavigate('filters')}
            className="w-12 h-12 rounded-2xl bg-[#7b5900] text-white flex items-center justify-center shadow-md hover:bg-[#634700] transition-colors active:scale-95"
            aria-label="Filter Options"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>
      </div>

      {/* Luxury Promo Gold Banner */}
      <div className="px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1f1b14] via-[#353028] to-[#1f1b14] p-6 text-white shadow-xl shadow-[#7b5900]/15 border border-[#7b5900]/40">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#7b5900]/30 blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-[220px]">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#7b5900] text-white uppercase tracking-wider mb-2">
              EXCLUSIVE OFFER
            </span>
            <h3 className="font-serif-title text-xl font-bold leading-snug">
              50% Off First Booking
            </h3>
            <p className="text-[11px] text-[#d2c5b1] mt-1 mb-4">
              Use code <strong className="text-[#ffdea4]">GOLD50</strong> at checkout for luxury treatments.
            </p>
            <button
              onClick={() => onNavigate('explore')}
              className="py-2 px-4 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#c89b3c] text-white font-semibold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>Explore Salons</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Horizontal Selector */}
      <div className="space-y-3">
        <div className="px-5 flex items-center justify-between">
          <h2 className="font-serif-title text-lg font-bold text-[#1f1b14]">
            Categories
          </h2>
          <button
            onClick={() => onNavigate('explore')}
            className="text-xs font-semibold text-[#7b5900] hover:underline"
          >
            See All
          </button>
        </div>

        <div className="flex gap-2.5 overflow-x-auto no-scrollbar px-5 py-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#7b5900] text-white border-[#7b5900] shadow-md shadow-[#7b5900]/20 scale-[1.02]'
                    : 'bg-white text-[#52493d] border-[#f0e4d2] hover:bg-[#f6ece1]'
                }`}
              >
                <span className={`material-symbols-outlined text-[18px] ${isActive ? 'fill-1' : ''}`}>
                  {cat.icon}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Master Barbers & Artisans Spotlight Carousel */}
      <div className="space-y-3">
        <div className="px-5 flex items-center justify-between">
          <div>
            <h2 className="font-serif-title text-lg font-bold text-[#1f1b14]">
              Master Artisans
            </h2>
            <p className="text-[11px] text-[#877868]">Award-winning barbers & color specialists</p>
          </div>
          <button
            onClick={() => {
              onSelectBarber(mockBarbers[0]);
              onNavigate('barber_portfolio');
            }}
            className="text-xs font-semibold text-[#7b5900] hover:underline"
          >
            View Guild
          </button>
        </div>

        <div className="flex gap-3.5 overflow-x-auto no-scrollbar px-5 py-1">
          {mockBarbers.map((barber) => (
            <div
              key={barber.id}
              onClick={() => {
                onSelectBarber(barber);
                onNavigate('barber_portfolio');
              }}
              className="flex-shrink-0 w-36 bg-white rounded-2xl border border-[#f0e4d2] p-3 text-center cursor-pointer hover:border-[#7b5900] hover:shadow-lg transition-all group"
            >
              <div className="relative w-16 h-16 mx-auto mb-2.5 rounded-full overflow-hidden p-0.5 bg-gradient-to-br from-[#7b5900] to-[#c89b3c]">
                <img
                  src={barber.avatar}
                  alt={barber.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                />
              </div>
              <h4 className="font-bold text-xs text-[#1f1b14] truncate">{barber.name}</h4>
              <p className="text-[10px] text-[#7b5900] font-medium truncate">{barber.title}</p>
              <div className="flex items-center justify-center gap-1 mt-1.5 text-[11px] font-semibold text-[#1f1b14]">
                <span className="material-symbols-outlined text-[14px] text-amber-500 fill-1">star</span>
                <span>{barber.rating}</span>
                <span className="text-[#877868] text-[9px]">({barber.reviewsCount})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Premium Salons */}
      <div className="space-y-3 px-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif-title text-lg font-bold text-[#1f1b14]">
              Nearby Premium Salons
            </h2>
            <p className="text-[11px] text-[#877868]">Verified luxury establishments in Beverly Hills</p>
          </div>
          <button
            onClick={() => onNavigate('map_locator')}
            className="flex items-center gap-1 text-xs font-semibold text-[#7b5900] hover:underline"
          >
            <span className="material-symbols-outlined text-[16px]">map</span>
            <span>Map View</span>
          </button>
        </div>

        <div className="space-y-4">
          {filteredSalons.map((salon) => (
            <div
              key={salon.id}
              onClick={() => {
                onSelectSalon(salon);
                onNavigate('salon_detail');
              }}
              className="bg-white rounded-3xl border border-[#f0e4d2] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#7b5900]/40 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-44 w-full">
                <img
                  src={salon.image}
                  alt={salon.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {salon.isPremiumPartner && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#7b5900] text-white flex items-center gap-1 shadow-md">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                    PREMIUM PARTNER
                  </span>
                )}

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#1f1b14] flex items-center gap-1 shadow-md">
                  <span className="material-symbols-outlined text-[14px] text-amber-500 fill-1">star</span>
                  <span>{salon.rating}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif-title text-xl font-bold leading-tight drop-shadow-sm">
                    {salon.name}
                  </h3>
                  <p className="text-xs text-white/80 flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    <span>{salon.address}, {salon.cityArea} • {salon.distanceMiles} miles away</span>
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between bg-white">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {salon.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#f6ece1] text-[#7b5900]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#877868]">
                    Next Available: <strong className="text-[#1f1b14]">{salon.nextSlot}</strong>
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSalon(salon);
                    onNavigate('salon_detail');
                  }}
                  className="py-2.5 px-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-xs shadow-md hover:bg-[#634700] active:scale-95 transition-all flex items-center gap-1"
                >
                  <span>Book</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
