import React from 'react';
import { ScreenId, Barber } from '../types';
import { mockBarbers, mockReviews } from '../data/mockData';

interface BarberPortfolioScreenProps {
  barber?: Barber;
  onNavigate: (screen: ScreenId) => void;
}

export const BarberPortfolioScreen: React.FC<BarberPortfolioScreenProps> = ({
  barber = mockBarbers[0],
  onNavigate
}) => {
  return (
    <div className="min-h-screen bg-[#fff8f2] pb-24">
      {/* Top Cover Header */}
      <div className="relative h-80 w-full bg-[#1f1b14]">
        <img
          src={barber.portfolioImages[0] || barber.avatar}
          alt={barber.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fff8f2] via-black/40 to-black/60" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#7b5900] text-white">
            MASTER ARTISAN
          </span>
        </div>

        {/* Floating Avatar & Details */}
        <div className="absolute -bottom-8 left-5 right-5 flex items-end gap-4">
          <div className="w-24 h-24 rounded-full border-4 border-[#fff8f2] overflow-hidden bg-white shadow-xl flex-shrink-0">
            <img
              src={barber.avatar}
              alt={barber.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pb-2">
            <h1 className="font-serif-title text-2xl font-bold text-[#1f1b14]">
              {barber.name}
            </h1>
            <p className="text-xs font-semibold text-[#7b5900]">
              {barber.title} • London & NY Trained
            </p>
          </div>
        </div>
      </div>

      <div className="pt-12 px-5 space-y-6">
        {/* Rating & Stats Bento Bar */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-2xl border border-[#f0e4d2] text-center">
            <span className="text-lg font-bold text-[#1f1b14] flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[18px] text-amber-500 fill-1">star</span>
              {barber.rating}
            </span>
            <span className="text-[10px] text-[#877868]">({barber.reviewsCount} Reviews)</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-[#f0e4d2] text-center">
            <span className="text-lg font-bold text-[#7b5900] block">{barber.cutsDelivered}</span>
            <span className="text-[10px] text-[#877868]">Cuts Delivered</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-[#f0e4d2] text-center">
            <span className="text-lg font-bold text-[#1f1b14] block">{barber.experienceYears} Yrs</span>
            <span className="text-[10px] text-[#877868]">Craft Experience</span>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-white p-5 rounded-3xl border border-[#f0e4d2] space-y-3">
          <h3 className="font-serif-title text-base font-bold text-[#1f1b14]">
            A Legacy of Precision
          </h3>
          <p className="text-xs text-[#52493d] leading-relaxed">
            {barber.bio}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {barber.specialties.map((spec, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#f6ece1] text-[#7b5900]"
              >
                #{spec}
              </span>
            ))}
          </div>
        </div>

        {/* Work Gallery Bento */}
        <div className="space-y-3">
          <h3 className="font-serif-title text-lg font-bold text-[#1f1b14]">
            Portfolio & Craft
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {barber.portfolioImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative h-44 rounded-2xl overflow-hidden border border-[#f0e4d2] group shadow-sm"
              >
                <img
                  src={imgUrl}
                  alt={`Work ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-semibold text-white">
                    {['Executive Fade', 'Beard Sculpting', 'Classic Pompadour', 'Razor Shave'][idx] || 'Custom Style'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Reviews */}
        <div className="space-y-3">
          <h3 className="font-serif-title text-lg font-bold text-[#1f1b14]">
            Words from the Chair
          </h3>
          <div className="space-y-3">
            {mockReviews.map((rev) => (
              <div key={rev.id} className="bg-white p-4 rounded-2xl border border-[#f0e4d2] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#1f1b14]">{rev.clientName}</span>
                  <span className="text-amber-500 text-xs">★★★★★</span>
                </div>
                <p className="text-xs text-[#52493d] italic">"{rev.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Action Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-[#f0e4d2] p-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#877868] uppercase font-medium block">Master Barber Session</span>
          <span className="font-serif-title font-bold text-xl text-[#1f1b14]">$85.00+</span>
        </div>
        <button
          onClick={() => onNavigate('schedule')}
          className="py-3 px-6 rounded-2xl bg-[#7b5900] text-white font-semibold text-xs shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700]"
        >
          Book {barber.name.split(' ')[0]}
        </button>
      </div>
    </div>
  );
};
