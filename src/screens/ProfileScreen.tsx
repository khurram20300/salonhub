import React from 'react';
import { ScreenId, UserProfile } from '../types';
import { mockUserProfile } from '../data/mockData';

interface ProfileScreenProps {
  profile?: UserProfile;
  onNavigate: (screen: ScreenId) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  profile = mockUserProfile,
  onNavigate
}) => {
  return (
    <div className="min-h-screen bg-[#fff8f2] pb-24 p-5 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-serif-title text-2xl font-bold text-[#1f1b14]">Profile & Concierge</h1>
        <button
          onClick={() => onNavigate('settings')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">settings</span>
        </button>
      </div>

      {/* Profile Header Card */}
      <div className="bg-white p-5 rounded-3xl border border-[#f0e4d2] text-center space-y-3 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#1f1b14] via-[#7b5900] to-[#1f1b14]" />
        
        <div className="relative pt-4">
          <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-br from-[#7b5900] to-[#c89b3c] shadow-xl">
            <img
              src={profile.avatar}
              alt={profile.fullName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-bold bg-[#7b5900] text-white tracking-widest uppercase">
            {profile.tier}
          </span>
          <h2 className="font-serif-title text-2xl font-bold text-[#1f1b14] mt-1">
            {profile.fullName}
          </h2>
          <p className="text-xs text-[#877868]">{profile.email} • {profile.memberSince}</p>
        </div>

        <div className="pt-3 border-t border-[#f0e4d2] flex justify-around text-xs">
          <div>
            <span className="font-bold text-[#1f1b14] block font-serif-title text-lg">
              {profile.pointsBalance.toLocaleString()}
            </span>
            <span className="text-[10px] text-[#877868]">Reward Points</span>
          </div>
          <div className="w-px h-8 bg-[#f0e4d2]" />
          <div>
            <span className="font-bold text-[#7b5900] block font-serif-title text-lg">
              VIP Tier 1
            </span>
            <span className="text-[10px] text-[#877868]">Privilege Status</span>
          </div>
        </div>
      </div>

      {/* Royal Admin Suite Entry Banner */}
      <button
        onClick={() => onNavigate('admin_overview')}
        className="w-full p-4 rounded-3xl bg-gradient-to-r from-[#1b1b1c] via-[#2a2a2a] to-[#131313] text-left border border-[#4e4637]/60 shadow-lg flex items-center justify-between group hover:border-[#f0bf5c] transition-all"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#f0bf5c]/20 text-[#f0bf5c] border border-[#f0bf5c]/40 flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">admin_panel_settings</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-[#e5e2e1] group-hover:text-[#f0bf5c] transition-colors">
                Royal Admin Management Suite
              </h3>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#f0bf5c] text-[#131313] uppercase tracking-wider">
                Manager
              </span>
            </div>
            <p className="text-[11px] text-[#d2c5b1]/70">
              Access revenue, rosters, inventory, CRM dossiers & security
            </p>
          </div>
        </div>
        <span className="material-symbols-outlined text-[#f0bf5c] group-hover:translate-x-1 transition-transform text-[20px]">
          arrow_forward
        </span>
      </button>

      {/* Menu Options List */}
      <div className="bg-white rounded-3xl border border-[#f0e4d2] overflow-hidden divide-y divide-[#f0e4d2]">
        <button
          onClick={() => onNavigate('edit_profile')}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-[#f6ece1] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7b5900] text-[20px]">person</span>
            <div>
              <h4 className="font-bold text-xs text-[#1f1b14]">Personal Information</h4>
              <p className="text-[10px] text-[#877868]">Name, email, phone number & date of birth</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-[#877868]">chevron_right</span>
        </button>

        <button
          onClick={() => onNavigate('favorites')}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-[#f6ece1] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7b5900] text-[20px]">favorite</span>
            <div>
              <h4 className="font-bold text-xs text-[#1f1b14]">Your Curated List</h4>
              <p className="text-[10px] text-[#877868]">Bookmarked artisans & favorite salons</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-[#877868]">chevron_right</span>
        </button>

        <button
          onClick={() => onNavigate('gift_cards')}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-[#f6ece1] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7b5900] text-[20px]">card_giftcard</span>
            <div>
              <h4 className="font-bold text-xs text-[#1f1b14]">AURA Gift Cards & Vouchers</h4>
              <p className="text-[10px] text-[#877868]">Redeem vouchers & share prestige gifts</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-[#877868]">chevron_right</span>
        </button>

        <button
          onClick={() => onNavigate('saved_addresses')}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-[#f6ece1] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7b5900] text-[20px]">location_on</span>
            <div>
              <h4 className="font-bold text-xs text-[#1f1b14]">Saved Locations & Concierge</h4>
              <p className="text-[10px] text-[#877868]">Manage home & office delivery suites</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-[#877868]">chevron_right</span>
        </button>

        <button
          onClick={() => onNavigate('chat')}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-[#f6ece1] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7b5900] text-[20px]">chat</span>
            <div>
              <h4 className="font-bold text-xs text-[#1f1b14]">Stylist Consultation Chat</h4>
              <p className="text-[10px] text-[#877868]">Direct message Julian Hunt & artisans</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-[#877868]">chevron_right</span>
        </button>

        <button
          onClick={() => onNavigate('language')}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-[#f6ece1] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7b5900] text-[20px]">translate</span>
            <div>
              <h4 className="font-bold text-xs text-[#1f1b14]">Language Preferences</h4>
              <p className="text-[10px] text-[#877868]">English (United States)</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-[#877868]">chevron_right</span>
        </button>

        <button
          onClick={() => onNavigate('help_center')}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-[#f6ece1] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7b5900] text-[20px]">help</span>
            <div>
              <h4 className="font-bold text-xs text-[#1f1b14]">Help Center & Concierge</h4>
              <p className="text-[10px] text-[#877868]">24/7 priority support & FAQs</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-[#877868]">chevron_right</span>
        </button>
      </div>

      <button
        onClick={() => onNavigate('login')}
        className="w-full py-4 rounded-2xl bg-white border border-red-200 text-red-600 font-semibold text-xs hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-[18px]">logout</span>
        <span>Log Out from Account</span>
      </button>
    </div>
  );
};
