import React, { useState } from 'react';
import { ScreenId, Barber, Service, Salon } from '../types';
import { mockBarbers, mockSalons } from '../data/mockData';

interface CheckoutScreenProps {
  salon?: Salon;
  barber?: Barber;
  service?: Service;
  onNavigate: (screen: ScreenId) => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  salon = mockSalons[0],
  barber = mockBarbers[0],
  service,
  onNavigate
}) => {
  const [couponCode, setCouponCode] = useState('GOLD20');
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const servicePrice = service ? service.price : 85.0;
  const serviceFee = 5.0;
  const discountAmount = isCouponApplied ? 17.0 : 0.0;
  const grandTotal = servicePrice + serviceFee - discountAmount;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'GOLD20') {
      setIsCouponApplied(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] pb-28 p-5 space-y-6">
      {/* Step Progress Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-[#877868]">
          <span className="text-[#7b5900]">1. Service</span>
          <span className="text-[#7b5900]">2. Schedule</span>
          <span className="text-[#1f1b14] font-bold">3. Checkout & Pay</span>
        </div>
        <div className="h-1.5 w-full bg-[#f0e4d2] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#7b5900] to-[#c89b3c] w-3/3 rounded-full" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('schedule')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <h1 className="font-serif-title text-xl font-bold text-[#1f1b14]">
          Booking Summary
        </h1>
      </div>

      {/* Selected Salon Card */}
      <div className="bg-white p-4 rounded-3xl border border-[#f0e4d2] flex items-center gap-3 shadow-xs">
        <img
          src={salon.image}
          alt={salon.name}
          className="w-16 h-16 rounded-2xl object-cover"
        />
        <div>
          <span className="text-[10px] font-bold text-[#7b5900] uppercase tracking-wider block">
            ESTABLISHMENT
          </span>
          <h3 className="font-serif-title text-base font-bold text-[#1f1b14]">{salon.name}</h3>
          <p className="text-xs text-[#877868]">{salon.address}, {salon.cityArea}</p>
        </div>
      </div>

      {/* Selected Service & Barber Details */}
      <div className="space-y-3">
        <h3 className="font-serif-title text-sm font-bold text-[#1f1b14]">Treatment & Artisan</h3>

        <div className="bg-white p-4 rounded-2xl border border-[#f0e4d2] space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#f0e4d2]">
            <div>
              <h4 className="font-bold text-xs text-[#1f1b14]">
                {service ? service.name : 'Royal Signature Cut & Shave'}
              </h4>
              <p className="text-[11px] text-[#877868]">Includes aromatherapy hot towel & styling</p>
            </div>
            <span className="font-serif-title font-bold text-[#1f1b14]">
              ${servicePrice}.00
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={barber.avatar}
                alt={barber.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-xs text-[#1f1b14]">{barber.name}</h4>
                <p className="text-[10px] text-[#7b5900]">{barber.title}</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#877868]">Oct 12, 10:00 AM</span>
          </div>
        </div>
      </div>

      {/* Coupon Code Input */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#1f1b14] block">Promo Code / Voucher</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter promo code"
            className="flex-1 px-4 py-3 rounded-2xl bg-white border border-[#f0e4d2] text-xs font-bold text-[#1f1b14] uppercase focus:outline-none focus:border-[#7b5900]"
          />
          <button
            onClick={handleApplyCoupon}
            className="px-5 py-3 rounded-2xl bg-[#7b5900] text-white font-semibold text-xs shadow-md hover:bg-[#634700]"
          >
            {isCouponApplied ? 'Applied ✓' : 'Apply'}
          </button>
        </div>
        {isCouponApplied && (
          <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            Promo code GOLD20 applied (20% Off treatment total)
          </p>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="bg-white p-5 rounded-3xl border border-[#f0e4d2] space-y-2.5 text-xs">
        <div className="flex justify-between text-[#52493d]">
          <span>Subtotal Treatment</span>
          <span>${servicePrice}.00</span>
        </div>
        <div className="flex justify-between text-[#52493d]">
          <span>Salon Concierge Fee</span>
          <span>${serviceFee}.00</span>
        </div>
        {isCouponApplied && (
          <div className="flex justify-between text-emerald-600 font-semibold">
            <span>Special VIP Discount (20%)</span>
            <span>-${discountAmount}.00</span>
          </div>
        )}
        <div className="pt-2 border-t border-[#f0e4d2] flex justify-between text-base font-bold text-[#1f1b14]">
          <span>Total Amount</span>
          <span>${grandTotal}.00</span>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-[#f0e4d2] p-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#877868] uppercase font-medium block">Grand Total</span>
          <span className="font-serif-title font-bold text-2xl text-[#1f1b14]">
            ${grandTotal}.00
          </span>
        </div>

        <button
          onClick={() => onNavigate('payment')}
          className="py-3.5 px-6 rounded-2xl bg-[#7b5900] text-white font-semibold text-xs shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] active:scale-95 transition-all flex items-center gap-1.5"
        >
          <span>Select Payment</span>
          <span className="material-symbols-outlined text-[18px]">credit_card</span>
        </button>
      </div>
    </div>
  );
};
