import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminCampaignCreatorScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminCampaignCreatorScreen: React.FC<AdminCampaignCreatorScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [step, setStep] = useState(1);
  const [campaignType, setCampaignType] = useState('Discount Coupon');
  const [campaignTitle, setCampaignTitle] = useState('Gilded Hair Revival Special');
  const [promoCode, setPromoCode] = useState('REVIVAL2026');
  const [discountPercent, setDiscountPercent] = useState('20');
  const [targetAudience, setTargetAudience] = useState('VIP Platinum & Gold');

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex items-center justify-between border-b border-[#4e4637]/30 pb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('admin_marketing')}
              className="p-2 rounded-xl bg-[#202020] text-[#f0bf5c] hover:bg-[#2a2a2a] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
                Campaign Creator Wizard
              </span>
              <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1]">
                Design Promotional Campaign
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#d2c5b1]">
            <span>Step {step} of 4</span>
          </div>
        </div>

        {/* Stepper Progress Bar */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { num: 1, label: '01 Type' },
            { num: 2, label: '02 Details' },
            { num: 3, label: '03 Audience' },
            { num: 4, label: '04 Review & Launch' }
          ].map((st) => (
            <button
              key={st.num}
              onClick={() => setStep(st.num)}
              className={`p-3 rounded-2xl border text-xs font-bold transition-all text-center ${
                step === st.num
                  ? 'bg-[#f0bf5c] text-[#131313] border-[#f0bf5c]'
                  : step > st.num
                  ? 'bg-[#2a2a2a] text-[#f0bf5c] border-[#4e4637]/50'
                  : 'bg-[#1b1b1c] text-[#d2c5b1]/60 border-[#4e4637]/30'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>

        {/* Wizard Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Step Options */}
          <div className="lg:col-span-2 p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
                  Select Campaign Format
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Discount Coupon', desc: 'Generate redeemable percentage code' },
                    { title: 'Promotional Email', desc: 'Broadcast newsletter to audience' },
                    { title: 'SMS Instant Alert', desc: 'Send direct text message reminder' },
                    { title: 'Complimentary Gift', desc: 'Free treatment upgrade voucher' }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setCampaignType(item.title)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        campaignType === item.title
                          ? 'bg-[#2a2a2a] border-[#f0bf5c] ring-1 ring-[#f0bf5c]'
                          : 'bg-[#202020] border-[#4e4637]/30 hover:border-[#f0bf5c]/40'
                      }`}
                    >
                      <h4 className="font-bold text-[#e5e2e1] text-sm">{item.title}</h4>
                      <p className="text-xs text-[#d2c5b1]/70 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 text-xs">
                <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
                  Campaign Offer Details
                </h3>

                <div className="space-y-2">
                  <label className="text-[#d2c5b1] font-semibold">Campaign Headline</label>
                  <input
                    type="text"
                    value={campaignTitle}
                    onChange={(e) => setCampaignTitle(e.target.value)}
                    className="w-full bg-[#202020] border border-[#4e4637]/40 rounded-xl p-3 text-xs text-[#e5e2e1] focus:ring-1 focus:ring-[#f0bf5c]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[#d2c5b1] font-semibold">Promo Code</label>
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-[#202020] border border-[#4e4637]/40 rounded-xl p-3 text-xs font-mono font-bold text-[#f0bf5c] uppercase"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#d2c5b1] font-semibold">Discount (%)</label>
                    <input
                      type="number"
                      value={discountPercent}
                      onChange={(e) => setDiscountPercent(e.target.value)}
                      className="w-full bg-[#202020] border border-[#4e4637]/40 rounded-xl p-3 text-xs text-[#e5e2e1]"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
                  Select Target Audience Segment
                </h3>
                <div className="space-y-3">
                  {['VIP Platinum & Gold', 'All Active Clients', 'Inactive > 60 Days', 'New Signups'].map((aud) => (
                    <div
                      key={aud}
                      onClick={() => setTargetAudience(aud)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                        targetAudience === aud
                          ? 'bg-[#2a2a2a] border-[#f0bf5c] text-[#f0bf5c] font-bold'
                          : 'bg-[#202020] border-[#4e4637]/30 text-[#e5e2e1]'
                      }`}
                    >
                      <span>{aud}</span>
                      <span className="material-symbols-outlined text-[18px]">
                        {targetAudience === aud ? 'radio_button_checked' : 'radio_button_unchecked'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4 text-xs">
                <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
                  Review Campaign Launch Summary
                </h3>
                <div className="p-4 rounded-2xl bg-[#202020] border border-[#4e4637]/30 space-y-2">
                  <p className="text-[#d2c5b1]"><strong>Type:</strong> {campaignType}</p>
                  <p className="text-[#d2c5b1]"><strong>Headline:</strong> {campaignTitle}</p>
                  <p className="text-[#d2c5b1]"><strong>Code:</strong> <span className="text-[#f0bf5c] font-mono font-bold">{promoCode}</span> ({discountPercent}% OFF)</p>
                  <p className="text-[#d2c5b1]"><strong>Audience:</strong> {targetAudience}</p>
                </div>
              </div>
            )}

            {/* Stepper Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[#4e4637]/30">
              <button
                disabled={step === 1}
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                className="px-4 py-2 rounded-xl bg-[#202020] text-[#d2c5b1] disabled:opacity-30 text-xs font-bold"
              >
                Previous Step
              </button>

              {step < 4 ? (
                <button
                  onClick={() => setStep((s) => Math.min(4, s + 1))}
                  className="px-5 py-2.5 rounded-xl bg-[#f0bf5c] text-[#131313] font-bold text-xs"
                >
                  Next Step →
                </button>
              ) : (
                <button
                  onClick={() => {
                    alert('Campaign Successfully Launched!');
                    onNavigate('admin_marketing');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs shadow-lg"
                >
                  🚀 Launch Campaign Live
                </button>
              )}
            </div>
          </div>

          {/* Live Coupon Card Preview */}
          <div className="p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6 flex flex-col items-center justify-center text-center">
            <span className="text-xs uppercase tracking-wider text-[#d2c5b1]/60 font-semibold">
              Live Coupon Preview
            </span>

            <div className="w-full p-6 rounded-3xl bg-gradient-to-br from-[#2a2215] via-[#1b1b1c] to-[#131313] border-2 border-dashed border-[#f0bf5c]/60 shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#f0bf5c]/20 border border-[#f0bf5c] text-[#f0bf5c] mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">card_giftcard</span>
              </div>
              <div>
                <span className="text-[10px] text-[#f0bf5c] font-bold uppercase tracking-widest block">
                  SPECIAL OFFER
                </span>
                <h4 className="font-serif-title font-bold text-xl text-[#e5e2e1] mt-1">
                  {campaignTitle}
                </h4>
                <p className="text-2xl font-serif-title font-bold text-[#f0bf5c] mt-2">
                  {discountPercent}% OFF
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#131313] border border-[#4e4637]/50 font-mono text-xs font-bold text-[#f0bf5c]">
                {promoCode}
              </div>
              <p className="text-[10px] text-[#d2c5b1]/50">Targeting: {targetAudience}</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
