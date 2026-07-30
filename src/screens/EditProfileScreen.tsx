import React, { useState } from 'react';
import { ScreenId } from '../types';
import { mockUserProfile } from '../data/mockData';

interface EditProfileScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState(mockUserProfile.fullName);
  const [email, setEmail] = useState(mockUserProfile.email);
  const [phone, setPhone] = useState(mockUserProfile.phone);
  const [dob, setDob] = useState(mockUserProfile.dob);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onNavigate('profile');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] p-5 space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('profile')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <h1 className="font-serif-title text-xl font-bold text-[#1f1b14]">Edit Personal Details</h1>
      </div>

      {/* Profile Photo Editor */}
      <div className="text-center space-y-3">
        <div className="relative w-28 h-28 mx-auto">
          <img
            src={mockUserProfile.avatar}
            alt="Profile"
            className="w-full h-full object-cover rounded-full p-1 border-2 border-[#7b5900]"
          />
          <button
            type="button"
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#7b5900] text-white flex items-center justify-center shadow-lg hover:scale-105"
          >
            <span className="material-symbols-outlined text-[16px]">photo_camera</span>
          </button>
        </div>
        <p className="text-xs text-[#877868]">Tap photo to upload new avatar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#1f1b14] mb-1.5">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-[#f0e4d2] text-xs font-semibold text-[#1f1b14]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1f1b14] mb-1.5">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-[#f0e4d2] text-xs font-semibold text-[#1f1b14]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1f1b14] mb-1.5">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-[#f0e4d2] text-xs font-semibold text-[#1f1b14]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1f1b14] mb-1.5">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-[#f0e4d2] text-xs font-semibold text-[#1f1b14]"
          />
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl text-xs text-center font-bold animate-in fade-in">
            ✓ Profile Changes Saved Successfully!
          </div>
        )}

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700]"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
