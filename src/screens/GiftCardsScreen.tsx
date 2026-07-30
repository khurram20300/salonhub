import React, { useState } from 'react';
import { ScreenId } from '../types';
import { mockGiftCards } from '../data/mockData';

interface GiftCardsScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const GiftCardsScreen: React.FC<GiftCardsScreenProps> = ({ onNavigate }) => {
  const [voucherCode, setVoucherCode] = useState('');
  const [redeemed, setRedeemed] = useState(false);

  const handleRedeem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!voucherCode.trim()) return;
    setRedeemed(true);
    setTimeout(() => {
      setRedeemed(false);
      setVoucherCode('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] p-5 space-y-6 pb-24">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('profile')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <div>
          <h1 className="font-serif-title text-xl font-bold text-[#1f1b14]">AURA Gift Cards</h1>
          <p className="text-[11px] text-[#877868]">Share excellence & luxury salon privileges</p>
        </div>
      </div>

      {/* Redeem Voucher Input Box */}
      <form onSubmit={handleRedeem} className="bg-white p-4 rounded-3xl border border-[#f0e4d2] space-y-3">
        <label className="text-xs font-bold text-[#1f1b14] block">Redeem Digital Voucher</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
            placeholder="Enter 16-digit voucher passkey..."
            className="flex-1 px-4 py-3 rounded-2xl bg-[#fff8f2] border border-[#f0e4d2] text-xs font-bold font-mono text-[#1f1b14] uppercase focus:outline-none focus:border-[#7b5900]"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-2xl bg-[#7b5900] text-white font-semibold text-xs shadow-md"
          >
            Redeem
          </button>
        </div>
        {redeemed && (
          <p className="text-xs text-emerald-600 font-bold text-center">
            ✓ $100.00 Gift Card Balance Credited to Your Account!
          </p>
        )}
      </form>

      {/* Gift Card Collection Gallery */}
      <div className="space-y-4">
        <h3 className="font-serif-title text-base font-bold text-[#1f1b14]">
          The Prestige Collection
        </h3>

        <div className="space-y-4">
          {mockGiftCards.map((card) => (
            <div
              key={card.id}
              className="relative h-48 rounded-3xl overflow-hidden shadow-xl border border-[#7b5900]/30 group cursor-pointer"
            >
              <img src={card.bgImage} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 p-5 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#ffdea4] tracking-widest uppercase">
                    {card.collection}
                  </span>
                  <span className="font-serif-title text-2xl font-extrabold text-[#ffdea4]">
                    ${card.amount}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif-title text-xl font-bold">{card.title}</h4>
                  <p className="text-[10px] text-white/80">Valid at all SalonHub partner salons worldwide.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => alert('Opening Gift Card Customizer...')}
        className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700]"
      >
        Personalize & Send Gift
      </button>
    </div>
  );
};
