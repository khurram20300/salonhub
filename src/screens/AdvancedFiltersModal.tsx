import React, { useState } from 'react';
import { ScreenId } from '../types';

interface AdvancedFiltersModalProps {
  onNavigate: (screen: ScreenId) => void;
}

export const AdvancedFiltersModal: React.FC<AdvancedFiltersModalProps> = ({ onNavigate }) => {
  const [maxPrice, setMaxPrice] = useState(150);
  const [minRating, setMinRating] = useState(4.5);
  const [openNow, setOpenNow] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Haircut', 'Beard Trim']);

  const categoryOptions = ['Haircut', 'Beard Trim', 'Massage', 'Facial', 'Hair Color', 'Manicure', 'VIP Lounge'];

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] flex flex-col justify-between p-6">
      <div className="pt-2 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#f0e4d2]">
          <h1 className="font-serif-title text-2xl font-bold text-[#1f1b14]">
            Filter Experience
          </h1>
          <button
            onClick={() => onNavigate('explore')}
            className="w-8 h-8 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#7b5900] uppercase tracking-wider block">
            Service Domain
          </label>
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((cat) => {
              const isSelected = selectedCategories.includes(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-medium border transition-colors ${
                    isSelected
                      ? 'bg-[#7b5900] text-white border-[#7b5900]'
                      : 'bg-white text-[#52493d] border-[#f0e4d2]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price Slider */}
        <div className="space-y-3 bg-white p-4 rounded-2xl border border-[#f0e4d2]">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-[#1f1b14]">Maximum Price per Session</span>
            <span className="font-bold text-[#7b5900]">${maxPrice}</span>
          </div>
          <input
            type="range"
            min={30}
            max={300}
            step={10}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-[#7b5900]"
          />
          <div className="flex justify-between text-[10px] text-[#877868]">
            <span>$30 (Standard)</span>
            <span>$300 (VIP Concierge)</span>
          </div>
        </div>

        {/* Minimum Rating */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#7b5900] uppercase tracking-wider block">
            Minimum Rating
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[4.0, 4.5, 4.8].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => setMinRating(rate)}
                className={`py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-1 border transition-colors ${
                  minRating === rate
                    ? 'bg-[#7b5900] text-white border-[#7b5900]'
                    : 'bg-white text-[#1f1b14] border-[#f0e4d2]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px] text-amber-500 fill-1">star</span>
                <span>{rate}+ Stars</span>
              </button>
            ))}
          </div>
        </div>

        {/* Open Now Toggle */}
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-[#f0e4d2]">
          <div>
            <h4 className="font-bold text-xs text-[#1f1b14]">Open Now Only</h4>
            <p className="text-[10px] text-[#877868]">Show salons available within the next 2 hours</p>
          </div>
          <input
            type="checkbox"
            checked={openNow}
            onChange={(e) => setOpenNow(e.target.checked)}
            className="w-5 h-5 accent-[#7b5900]"
          />
        </div>
      </div>

      <div className="pt-6">
        <button
          onClick={() => onNavigate('explore')}
          className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700]"
        >
          Show 12 Verified Results
        </button>
      </div>
    </div>
  );
};
