import React, { useState } from 'react';
import { ScreenId, Salon } from '../types';
import { mockSalons } from '../data/mockData';

interface ExploreScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectSalon: (salon: Salon) => void;
}

export const ExploreScreen: React.FC<ExploreScreenProps> = ({ onNavigate, onSelectSalon }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Rating' | 'Price' | 'OpenNow'>('All');
  const [forceEmptyState, setForceEmptyState] = useState(false);

  const filteredSalons = forceEmptyState
    ? []
    : mockSalons.filter((salon) => {
        const matchesQuery =
          salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          salon.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
          salon.cityArea.toLowerCase().includes(searchQuery.toLowerCase());
        
        if (activeFilter === 'Rating') return matchesQuery && salon.rating >= 4.8;
        if (activeFilter === 'Price') return matchesQuery && salon.pricePerSession <= 85;
        return matchesQuery;
      });

  return (
    <div className="min-h-screen bg-[#fff8f2] pb-24 space-y-4">
      {/* Header & Search Bar */}
      <div className="p-5 bg-white border-b border-[#f0e4d2] space-y-3 sticky top-0 z-30 shadow-xs">
        <div className="flex items-center justify-between">
          <h1 className="font-serif-title text-2xl font-bold text-[#1f1b14]">Explore Salons</h1>
          <button
            onClick={() => setForceEmptyState(!forceEmptyState)}
            className="text-[11px] font-medium text-[#7b5900] bg-[#f6ece1] px-2.5 py-1 rounded-full border border-[#7b5900]/20"
          >
            {forceEmptyState ? 'Show Results' : 'Simulate Empty State'}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by salon name, service, or area..."
              className="w-full pl-10 pr-9 py-3 rounded-2xl bg-[#fff8f2] border border-[#f0e4d2] text-xs text-[#1f1b14] focus:outline-none focus:border-[#7b5900]"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#877868]">
              search
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#877868] hover:text-[#1f1b14]"
              >
                <span className="material-symbols-outlined text-[16px]">cancel</span>
              </button>
            )}
          </div>

          <button
            onClick={() => onNavigate('filters')}
            className="w-11 h-11 rounded-2xl bg-[#7b5900] text-white flex items-center justify-center shadow-md hover:bg-[#634700]"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>

        {/* Quick Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          {[
            { id: 'All', label: 'All Results' },
            { id: 'Rating', label: '★ 4.8+ Top Rated' },
            { id: 'Price', label: 'Under $90' },
            { id: 'OpenNow', label: 'Open Now' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeFilter === f.id
                  ? 'bg-[#7b5900] text-white font-semibold'
                  : 'bg-[#f6ece1] text-[#52493d] hover:bg-[#ebdccb]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="px-5 flex items-center justify-between text-xs text-[#877868]">
        <span>Showing <strong>{filteredSalons.length}</strong> Luxury Establishments</span>
        <span>Beverly Hills & LA</span>
      </div>

      {/* Results List or Empty State */}
      <div className="px-5 space-y-4">
        {filteredSalons.length === 0 ? (
          <div className="py-16 text-center space-y-4 bg-white rounded-3xl p-8 border border-[#f0e4d2]">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#f6ece1] border border-[#7b5900]/20 flex items-center justify-center text-[#7b5900]">
              <span className="material-symbols-outlined text-4xl">search_off</span>
            </div>
            <h3 className="font-serif-title text-xl font-bold text-[#1f1b14]">
              A Unique Search
            </h3>
            <p className="text-xs text-[#877868] max-w-xs mx-auto leading-relaxed">
              We couldn't find an exact match for your request. Try adjusting your filter parameters or exploring our curated salon list.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('All');
                setForceEmptyState(false);
              }}
              className="py-3 px-6 rounded-2xl bg-[#7b5900] text-white font-semibold text-xs shadow-md"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          filteredSalons.map((salon) => (
            <div
              key={salon.id}
              onClick={() => {
                onSelectSalon(salon);
                onNavigate('salon_detail');
              }}
              className="bg-white rounded-3xl border border-[#f0e4d2] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col sm:flex-row"
            >
              <div className="relative h-44 sm:h-auto sm:w-48 flex-shrink-0">
                <img
                  src={salon.image}
                  alt={salon.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white">
                  ★ {salon.rating}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-title text-lg font-bold text-[#1f1b14]">
                      {salon.name}
                    </h3>
                    <span className="text-xs font-bold text-[#7b5900]">
                      ${salon.pricePerSession}+
                    </span>
                  </div>
                  <p className="text-xs text-[#877868] mt-0.5">
                    {salon.address}, {salon.cityArea} • {salon.distanceMiles} mi
                  </p>
                  <p className="text-[11px] text-[#52493d] mt-2 line-clamp-2">
                    {salon.aboutText}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f0e4d2] flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#7b5900] bg-[#f6ece1] px-2 py-0.5 rounded-md">
                    {salon.nextSlot}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSalon(salon);
                      onNavigate('salon_detail');
                    }}
                    className="py-1.5 px-3.5 rounded-xl bg-[#7b5900] text-white font-semibold text-xs shadow-sm"
                  >
                    View Salon
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
