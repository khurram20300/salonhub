import React, { useState } from 'react';
import { ScreenId, Salon, Service, Barber } from '../types';
import { mockBarbers, mockReviews } from '../data/mockData';

interface SalonDetailScreenProps {
  salon: Salon;
  onNavigate: (screen: ScreenId) => void;
  onSelectBarber: (barber: Barber) => void;
  onSelectService: (service: Service) => void;
}

export const SalonDetailScreen: React.FC<SalonDetailScreenProps> = ({
  salon,
  onNavigate,
  onSelectBarber,
  onSelectService
}) => {
  const [activeTab, setActiveTab] = useState<'Services' | 'About' | 'Team' | 'Reviews'>('Services');
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Service[]>([
    salon.popularServices[0] || {
      id: 'srv-default',
      name: 'Royal Signature Cut',
      description: 'Precision haircut with scalp massage and hot towel treatment.',
      durationMins: 45,
      price: 85,
      category: 'Barber'
    }
  ]);

  const toggleService = (srv: Service) => {
    if (selectedServices.some((s) => s.id === srv.id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s.id !== srv.id));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const totalPrice = selectedServices.reduce((acc, curr) => acc + curr.price, 0);

  const handleBookNow = () => {
    if (selectedServices.length > 0) {
      onSelectService(selectedServices[0]);
    }
    onNavigate('schedule');
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] pb-28">
      {/* Hero Cover Image */}
      <div className="relative h-72 w-full">
        <img
          src={salon.image}
          alt={salon.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

        {/* Floating Controls */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center transition-colors ${
              isFavorite ? 'text-red-500' : 'text-white'
            }`}
          >
            <span className={`material-symbols-outlined text-[20px] ${isFavorite ? 'fill-1' : ''}`}>
              favorite
            </span>
          </button>
        </div>

        {/* Hero Title & Partner Tag */}
        <div className="absolute bottom-4 left-5 right-5 text-white">
          {salon.isPremiumPartner && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#7b5900] text-white uppercase tracking-wider mb-2">
              VERIFIED PREMIUM PARTNER
            </span>
          )}
          <h1 className="font-serif-title text-3xl font-bold leading-tight">
            {salon.name}
          </h1>
          <div className="flex items-center gap-3 text-xs text-white/80 mt-1 flex-wrap">
            <span className="flex items-center gap-1 font-semibold text-amber-400">
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
              {salon.rating} ({salon.reviewsCount} Reviews)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              {salon.address}, {salon.cityArea}
            </span>
          </div>
        </div>
      </div>

      {/* Bento Info Bar */}
      <div className="px-5 py-4 grid grid-cols-2 gap-3">
        <div className="p-3 bg-white rounded-2xl border border-[#f0e4d2] flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#f6ece1] text-[#7b5900] flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">schedule</span>
          </div>
          <div>
            <span className="text-[10px] text-[#877868] font-medium block uppercase">Next Slot</span>
            <span className="text-xs font-bold text-[#1f1b14]">{salon.nextSlot}</span>
          </div>
        </div>

        <div className="p-3 bg-white rounded-2xl border border-[#f0e4d2] flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#f6ece1] text-[#7b5900] flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
          </div>
          <div>
            <span className="text-[10px] text-[#877868] font-medium block uppercase">Experience</span>
            <span className="text-xs font-bold text-[#1f1b14]">{salon.experienceYears}+ Years Artistry</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-5 border-b border-[#f0e4d2]">
        <div className="flex gap-6">
          {(['Services', 'About', 'Team', 'Reviews'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 text-xs font-semibold relative transition-colors ${
                activeTab === tab ? 'text-[#7b5900]' : 'text-[#877868] hover:text-[#1f1b14]'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7b5900] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-5">
        {activeTab === 'Services' && (
          <div className="space-y-4">
            <h3 className="font-serif-title text-lg font-bold text-[#1f1b14]">
              Popular Treatment Menu
            </h3>
            <div className="space-y-3">
              {salon.popularServices.map((srv) => {
                const isSelected = selectedServices.some((s) => s.id === srv.id);
                return (
                  <div
                    key={srv.id}
                    onClick={() => toggleService(srv)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-[#7b5900] shadow-md ring-1 ring-[#7b5900]/20'
                        : 'bg-white border-[#f0e4d2] hover:border-[#d2c5b1]'
                    }`}
                  >
                    <div className="space-y-1 max-w-[220px]">
                      <h4 className="font-bold text-sm text-[#1f1b14]">{srv.name}</h4>
                      <p className="text-xs text-[#877868] leading-tight">{srv.description}</p>
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-[#7b5900]">
                        <span className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[14px]">timer</span>
                          {srv.durationMins} mins
                        </span>
                      </div>
                    </div>

                    <div className="text-right space-y-2">
                      <span className="font-serif-title font-bold text-lg text-[#1f1b14]">
                        ${srv.price}
                      </span>
                      <button
                        type="button"
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#7b5900] text-white'
                            : 'bg-[#f6ece1] text-[#7b5900] hover:bg-[#ebdccb]'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {isSelected ? 'check' : 'add'}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'About' && (
          <div className="space-y-4 bg-white p-5 rounded-2xl border border-[#f0e4d2]">
            <h3 className="font-serif-title text-lg font-bold text-[#1f1b14]">About The Salon</h3>
            <p className="text-xs text-[#52493d] leading-relaxed">{salon.aboutText}</p>
            <div className="pt-3 border-t border-[#f0e4d2] space-y-2">
              <h4 className="font-bold text-xs text-[#1f1b14]">Amenities & Privileges</h4>
              <div className="flex flex-wrap gap-2">
                {['Single Malt Whisky Bar', 'Valet Parking', 'Private VIP Suites', 'Aromatherapy Steam'].map(
                  (am, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-[10px] font-medium bg-[#f6ece1] text-[#7b5900]">
                      {am}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Team' && (
          <div className="space-y-4">
            <h3 className="font-serif-title text-lg font-bold text-[#1f1b14]">Master Barber Guild</h3>
            <div className="grid grid-cols-2 gap-3">
              {mockBarbers.map((barber) => (
                <div
                  key={barber.id}
                  onClick={() => {
                    onSelectBarber(barber);
                    onNavigate('barber_portfolio');
                  }}
                  className="bg-white p-3.5 rounded-2xl border border-[#f0e4d2] text-center cursor-pointer hover:border-[#7b5900] transition-all"
                >
                  <img
                    src={barber.avatar}
                    alt={barber.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-2 p-0.5 border border-[#7b5900]"
                  />
                  <h4 className="font-bold text-xs text-[#1f1b14]">{barber.name}</h4>
                  <p className="text-[10px] text-[#7b5900] font-medium">{barber.title}</p>
                  <p className="text-[10px] text-[#877868] mt-1">★ {barber.rating} ({barber.reviewsCount})</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Reviews' && (
          <div className="space-y-4">
            <h3 className="font-serif-title text-lg font-bold text-[#1f1b14]">Client Experiences</h3>
            <div className="space-y-3">
              {mockReviews.map((rev) => (
                <div key={rev.id} className="bg-white p-4 rounded-2xl border border-[#f0e4d2] space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#f6ece1] font-bold text-xs text-[#7b5900] flex items-center justify-center">
                        {rev.clientAvatarText}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-[#1f1b14]">{rev.clientName}</h4>
                        <span className="text-[9px] text-[#7b5900] font-medium">{rev.clientBadge}</span>
                      </div>
                    </div>
                    <div className="flex text-amber-500">
                      {'★'.repeat(rev.rating)}
                    </div>
                  </div>
                  <p className="text-xs text-[#52493d] italic">"{rev.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-[#f0e4d2] p-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#877868] uppercase font-medium block">
            {selectedServices.length} Treatment{selectedServices.length > 1 ? 's' : ''} Selected
          </span>
          <span className="font-serif-title font-bold text-2xl text-[#1f1b14]">
            ${totalPrice}.00
          </span>
        </div>

        <button
          onClick={handleBookNow}
          className="py-3.5 px-6 rounded-2xl bg-[#7b5900] text-white font-semibold text-sm shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] active:scale-95 transition-all flex items-center gap-2"
        >
          <span>Book Appointment</span>
          <span className="material-symbols-outlined text-[18px]">calendar_month</span>
        </button>
      </div>
    </div>
  );
};
