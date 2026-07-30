import React, { useState } from 'react';
import { ScreenId, UserAddress } from '../types';
import { mockAddresses } from '../data/mockData';

interface SavedAddressesScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const SavedAddressesScreen: React.FC<SavedAddressesScreenProps> = ({ onNavigate }) => {
  const [addresses, setAddresses] = useState<UserAddress[]>(mockAddresses);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newLine1, setNewLine1] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newLine1) return;
    const newAddr: UserAddress = {
      id: `addr-${Date.now()}`,
      title: newTitle,
      line1: newLine1,
      line2: 'New York, NY 10001',
      isDefault: false,
      type: 'home'
    };
    setAddresses([...addresses, newAddr]);
    setShowAddForm(false);
    setNewTitle('');
    setNewLine1('');
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
        <div>
          <h1 className="font-serif-title text-xl font-bold text-[#1f1b14]">Saved Addresses</h1>
          <p className="text-[11px] text-[#877868]">Home grooming & VIP concierge destinations</p>
        </div>
      </div>

      <div className="space-y-3">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="bg-white p-4 rounded-3xl border border-[#f0e4d2] flex items-center justify-between shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#f6ece1] text-[#7b5900] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  {addr.type === 'home' ? 'home' : addr.type === 'office' ? 'business' : 'storefront'}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#1f1b14] flex items-center gap-2">
                  <span>{addr.title}</span>
                  {addr.isDefault && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#7b5900] text-white">
                      DEFAULT
                    </span>
                  )}
                </h4>
                <p className="text-xs text-[#52493d] mt-0.5">{addr.line1}</p>
                <p className="text-[10px] text-[#877868]">{addr.line2}</p>
              </div>
            </div>

            <button
              onClick={() => setAddresses(addresses.filter((a) => a.id !== addr.id))}
              className="text-[#877868] hover:text-red-600 p-2"
            >
              <span className="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
        ))}
      </div>

      {showAddForm ? (
        <form onSubmit={handleAdd} className="bg-white p-5 rounded-3xl border border-[#7b5900] space-y-3">
          <h4 className="font-serif-title font-bold text-sm text-[#1f1b14]">Add New Address</h4>
          <input
            type="text"
            placeholder="Address Title (e.g. Penthouse, Beach House)"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full px-4 py-2.5 rounded-2xl bg-[#fff8f2] border border-[#f0e4d2] text-xs"
          />
          <input
            type="text"
            placeholder="Street Address & Suite Number"
            value={newLine1}
            onChange={(e) => setNewLine1(e.target.value)}
            className="w-full px-4 py-2.5 rounded-2xl bg-[#fff8f2] border border-[#f0e4d2] text-xs"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-[#7b5900] text-white font-semibold text-xs"
            >
              Save Address
            </button>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2.5 rounded-xl bg-[#f6ece1] text-[#1f1b14] font-semibold text-xs"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowAddForm(true)}
          className="w-full py-4 rounded-2xl border-2 border-dashed border-[#d2c5b1] text-[#7b5900] font-semibold text-xs hover:bg-[#f6ece1] flex items-center justify-center gap-2 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">add_location_alt</span>
          <span>Add New Location</span>
        </button>
      )}
    </div>
  );
};
