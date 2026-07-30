import React, { useState } from 'react';
import { ScreenId, Barber, Salon } from '../types';
import { mockBarbers, mockSalons } from '../data/mockData';

interface FavoritesScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectSalon?: (salon: Salon) => void;
  onSelectBarber?: (barber: Barber) => void;
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({
  onNavigate,
  onSelectSalon,
  onSelectBarber
}) => {
  const [savedItems, setSavedItems] = useState<{ salons: Salon[]; barbers: Barber[] }>({
    salons: [],
    barbers: []
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.width / 2 - (e.clientX - rect.left)) / 25;
    const y = (rect.height / 2 - (e.clientY - rect.top)) / 25;
    setMousePos({ x, y });
  };

  const hasSavedItems = savedItems.salons.length > 0 || savedItems.barbers.length > 0;

  const quickBookmarkFeatured = () => {
    setSavedItems({
      salons: [mockSalons[0], mockSalons[1]],
      barbers: [mockBarbers[0], mockBarbers[1]]
    });
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] text-[#1f1b14] pb-28 p-5 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#7b5900] hover:bg-[#ebdccb] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div>
            <h1 className="font-serif-title text-xl font-bold text-[#7b5900]">
              SalonHub
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-[#877868] font-semibold">
              Curated Sanctuary
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('notifications')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] text-[#877868] hover:text-[#7b5900] flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
        </button>
      </div>

      {!hasSavedItems ? (
        /* Empty State Container with Glassmorphism Heart & Micro-interaction */
        <div className="flex flex-col items-center justify-center text-center mt-2 space-y-6">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            className="relative w-full max-w-xs aspect-square flex items-center justify-center cursor-pointer transition-transform duration-200"
            style={{
              transform: `perspective(600px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
            }}
          >
            {/* Animated Background Aura */}
            <div className="absolute inset-0 opacity-25 blur-3xl bg-[#c89b3c] rounded-full animate-pulse" />

            {/* Main Empty State Glass Box */}
            <div className="relative z-10 w-52 h-52 bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl border border-white/60 flex items-center justify-center overflow-hidden">
              <span
                className="material-symbols-outlined text-[#7b5900] text-[100px] drop-shadow-md select-none transition-transform duration-300 hover:scale-110"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
              >
                favorite
              </span>

              {/* Floating Glass Particles */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-[#7b5900]/10 rounded-full blur-xl" />
              <div className="absolute bottom-6 right-8 w-16 h-16 bg-[#c89b3c]/20 rounded-full blur-xl" />
            </div>

            {/* Floating Decorative Cards */}
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-white rounded-2xl shadow-lg rotate-12 flex flex-col p-2 space-y-2 opacity-70 border border-[#f0e4d2]">
              <div className="w-full h-12 bg-[#f6ece1] rounded-xl" />
              <div className="w-2/3 h-2 bg-[#ebe1d6] rounded-full" />
            </div>
            <div className="absolute -bottom-2 -left-4 w-20 h-20 bg-white rounded-2xl shadow-lg -rotate-6 flex flex-col p-2 space-y-2 opacity-50 border border-[#f0e4d2]">
              <div className="w-full h-10 bg-[#f6ece1] rounded-xl" />
              <div className="w-3/4 h-2 bg-[#ebe1d6] rounded-full" />
            </div>
          </div>

          {/* Content Group */}
          <div className="max-w-md space-y-2">
            <h2 className="font-serif-title text-2xl font-bold text-[#1f1b14] tracking-tight">
              Your Curated List
            </h2>
            <p className="text-xs text-[#52493d] leading-relaxed max-w-xs mx-auto">
              Start bookmarking your favorite stylists and salons to build your personal sanctuary.
            </p>
          </div>

          {/* Action CTA */}
          <div className="pt-2 flex flex-col items-center gap-3">
            <button
              onClick={() => onNavigate('explore')}
              className="bg-[#7b5900] text-white font-semibold text-xs px-8 py-4 rounded-full shadow-lg shadow-[#7b5900]/25 active:scale-95 transition-all hover:bg-[#634700] relative overflow-hidden group"
            >
              <span className="relative z-10">Discover Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <button
              onClick={quickBookmarkFeatured}
              className="text-[11px] font-semibold text-[#7b5900] hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">bookmark_add</span>
              <span>Sample Curated List</span>
            </button>
          </div>
        </div>
      ) : (
        /* Saved Items List view */
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif-title text-xl font-bold text-[#1f1b14]">Your Saved Sanctuary</h2>
              <p className="text-xs text-[#877868]">
                {savedItems.salons.length} Salons • {savedItems.barbers.length} Artisans saved
              </p>
            </div>
            <button
              onClick={() => setSavedItems({ salons: [], barbers: [] })}
              className="text-xs text-red-600 font-semibold hover:underline"
            >
              Clear All
            </button>
          </div>

          {/* Saved Salons Grid */}
          <div className="space-y-3">
            <h3 className="font-serif-title text-sm font-bold text-[#7b5900] uppercase tracking-wider">
              Saved Establishments
            </h3>
            {savedItems.salons.map((salon) => (
              <div
                key={salon.id}
                onClick={() => {
                  if (onSelectSalon) onSelectSalon(salon);
                  onNavigate('salon_detail');
                }}
                className="bg-white p-4 rounded-3xl border border-[#f0e4d2] shadow-sm flex items-center justify-between cursor-pointer hover:border-[#7b5900] transition-all"
              >
                <div className="flex items-center gap-3">
                  <img src={salon.image} alt={salon.name} className="w-16 h-16 rounded-2xl object-cover" />
                  <div>
                    <h4 className="font-serif-title font-bold text-sm text-[#1f1b14]">{salon.name}</h4>
                    <p className="text-[11px] text-[#877868]">{salon.cityArea} • {salon.distanceMiles} miles</p>
                    <span className="text-[10px] font-bold text-[#7b5900] flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[12px] fill-1 text-amber-500">star</span>
                      {salon.rating} ({salon.reviewsCount} reviews)
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('schedule');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#7b5900] text-white font-semibold text-xs shadow-sm hover:bg-[#634700]"
                >
                  Book
                </button>
              </div>
            ))}
          </div>

          {/* Saved Barbers Grid */}
          <div className="space-y-3">
            <h3 className="font-serif-title text-sm font-bold text-[#7b5900] uppercase tracking-wider">
              Favorite Artisans
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {savedItems.barbers.map((barber) => (
                <div
                  key={barber.id}
                  onClick={() => {
                    if (onSelectBarber) onSelectBarber(barber);
                    onNavigate('barber_portfolio');
                  }}
                  className="bg-white p-4 rounded-3xl border border-[#f0e4d2] text-center space-y-2 cursor-pointer hover:border-[#7b5900] transition-all"
                >
                  <img src={barber.avatar} alt={barber.name} className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-[#7b5900]" />
                  <div>
                    <h4 className="font-bold text-xs text-[#1f1b14]">{barber.name}</h4>
                    <p className="text-[10px] text-[#7b5900] font-semibold">{barber.title}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectBarber) onSelectBarber(barber);
                      onNavigate('schedule');
                    }}
                    className="w-full py-1.5 rounded-xl bg-[#f6ece1] text-[#7b5900] font-bold text-[11px] hover:bg-[#ebdccb]"
                  >
                    Schedule
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Suggestion Grid (Bento Style Layout) */}
      <section className="space-y-4 pt-4 border-t border-[#f0e4d2]">
        <div className="flex justify-between items-center">
          <h3 className="font-serif-title font-bold text-lg text-[#1f1b14]">
            Trending Stylists
          </h3>
          <button
            onClick={() => onNavigate('explore')}
            className="text-[#7b5900] font-semibold text-xs hover:underline"
          >
            View All
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Bento Item 1: Large Featured Portrait (Span 2) */}
          <div
            onClick={() => {
              if (onSelectBarber) onSelectBarber(mockBarbers[0]);
              onNavigate('barber_portfolio');
            }}
            className="col-span-2 relative h-64 rounded-3xl overflow-hidden group cursor-pointer border border-[#f0e4d2] shadow-sm"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvCYrWtgenDOL2sH0dpOMa7xVNUMqCes7aOgNEHHWtT57GIR4fpCuPPn5QXuWOMYx7WbTJqXbWcUQ5A_guYFFZaQC3iaxqFtY8o_JBNAQOzykShurXfzICmE2mhLAyAI_Tc2OBN4pyOpNY2b66nsnWeolLd3JBBudyrhCZWoVKkzr9Kren38CDgnRrVc-dusdG2NMxpW9VNK8H6E9FzIshYvizxwR0D0MMlifDUIdemJ5F1GKRqu2cXw"
              alt="Julianne V."
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white space-y-1">
              <span className="text-[9px] font-bold tracking-widest text-[#ffdea4] uppercase">
                FEATURED ARTIST
              </span>
              <h4 className="font-serif-title font-bold text-xl">Julianne V.</h4>
              <div className="flex items-center gap-1 text-[#ffdea4] text-xs">
                <span className="material-symbols-outlined text-[14px] fill-1">star</span>
                <span className="font-semibold">4.9 (124 reviews)</span>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Spa Lounge (Span 2) */}
          <div
            onClick={() => {
              if (onSelectSalon) onSelectSalon(mockSalons[0]);
              onNavigate('salon_detail');
            }}
            className="col-span-2 relative h-36 rounded-3xl overflow-hidden group cursor-pointer border border-[#f0e4d2] shadow-sm"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFuJV5WF1d1XYijG9L1Ri_jfHpNrIZ_PgbAR_YkGqWwdEnia74pYP97vsfWrSgGyrrPN2n-3s5PMtW-4UaxYXftykbaEHWLjrhYnxC-h1GfwM-GSgRlPEvIchCQ-X6o-wNIC-J-sxPh25oM38eQJZLwQioDxYFq7Lpkl6VIzsS4LYaVQGef5VAOTLGd6j4Wt2zrFfZMLvQbuExRoJIyh3cuEidk69ykBCSBufjjbtWCK91V_U8cEZEFQ"
              alt="The Zen Den Spa"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-3.5 text-white">
              <h4 className="font-serif-title font-bold text-sm">The Zen Den Spa</h4>
              <p className="text-[10px] text-white/80">Beverly Hills Private Sanctuary</p>
            </div>
          </div>

          {/* Bento Item 3: Luxury Product */}
          <div
            onClick={() => onNavigate('gift_cards')}
            className="relative h-40 rounded-3xl overflow-hidden group cursor-pointer border border-[#f0e4d2] shadow-sm"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfw20KY-VDag6MDglsiMH5VQZ7gwqwz-K0ikkA5pHl3mYgiriH_yNBtGUfX4fMiMDYt_ha3USdtxP5AyYS4IRYDWlpP3CHpxMJ1NsnlzHY2L97vrlzY6tTmuCgYGs2Xmdb4UeqfANeEhgzqnTs49ll8UC744dle4oNxMaSvKsmND9JwmSNTIxhhiddqznb077sdJKw59gaSTYncD6f0T1-ilDBiMN6toImxjo0RP1XXEHnK05yfp3BIQ"
              alt="Lumiere Serum"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-3 text-white">
              <span className="text-[9px] font-bold text-[#ffdea4] uppercase block">AURA CARE</span>
              <h4 className="font-serif-title font-bold text-xs">LUMIÈRE Serum</h4>
            </div>
          </div>

          {/* Bento Item 4: Manicure Suite */}
          <div
            onClick={() => onNavigate('explore')}
            className="relative h-40 rounded-3xl overflow-hidden group cursor-pointer border border-[#f0e4d2] shadow-sm"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDdditHRkwnAxAbZR1iCs_yFYbHE6ADbjJiYYw6ZdN0LSsx6EGOMY7Wn2bQy6xj008WjZpQKsBQ6QHWQ5IKAir09EWsPrI8wcCVHAliAPQRlRdo8y89iVZxQhSzyCnuHrR0XvPlDFKYeo7Q9szXwr9rfFFNj-YIgyzGLSJRAD2KtdRTvCI1Y1vZlFJrlyZpJAoLvxpkGU5jeIXUNNtDFR6dRgFs1PbMKpDqceWpA0SUEsey0ixNZPK3g"
              alt="Royal Manicure"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-3 text-white">
              <span className="text-[9px] font-bold text-[#ffdea4] uppercase block">NAIL ARTISAN</span>
              <h4 className="font-serif-title font-bold text-xs">Manicure Suite</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
