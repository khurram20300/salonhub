import React, { useState } from 'react';
import { ScreenId, AppNotification } from '../types';
import { mockNotifications } from '../data/mockData';

interface NotificationsScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ onNavigate }) => {
  const [notifications, setNotifications] = useState<AppNotification[]>(mockNotifications);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
  };

  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] p-5 space-y-5 pb-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div>
            <h1 className="font-serif-title text-xl font-bold text-[#1f1b14]">Notifications</h1>
            <p className="text-[11px] text-[#877868]">Updates, reminders & special privileges</p>
          </div>
        </div>

        <button
          onClick={markAllRead}
          className="text-xs font-semibold text-[#7b5900] hover:underline"
        >
          Mark all read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-4 rounded-3xl border transition-all ${
              notif.isRead
                ? 'bg-white border-[#f0e4d2]'
                : 'bg-white border-[#7b5900] shadow-md ring-1 ring-[#7b5900]/20'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  notif.type === 'reminder' ? 'bg-[#f6ece1] text-[#7b5900]' : 'bg-amber-100 text-amber-800'
                }`}>
                  <span className="material-symbols-outlined text-[20px]">
                    {notif.type === 'reminder' ? 'alarm' : notif.type === 'offer' ? 'local_offer' : 'notifications'}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#1f1b14] flex items-center gap-2">
                    <span>{notif.title}</span>
                    {!notif.isRead && (
                      <span className="w-2 h-2 rounded-full bg-[#7b5900]" />
                    )}
                  </h4>
                  <p className="text-xs text-[#52493d] mt-1">{notif.description}</p>

                  {notif.couponCode && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-xl bg-[#f6ece1] font-mono text-xs font-bold text-[#7b5900] border border-[#7b5900]/30">
                        {notif.couponCode}
                      </span>
                      <button
                        onClick={() => copyCoupon(notif.couponCode!)}
                        className="px-3 py-1 rounded-xl bg-[#7b5900] text-white font-semibold text-[11px]"
                      >
                        {copiedCode === notif.couponCode ? 'Copied ✓' : 'Copy Code'}
                      </button>
                    </div>
                  )}

                  {notif.previewImages && (
                    <div className="flex gap-2 mt-3">
                      {notif.previewImages.map((img, idx) => (
                        <img key={idx} src={img} alt="Preview" className="w-14 h-14 rounded-xl object-cover" />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <span className="text-[10px] text-[#877868] whitespace-nowrap">{notif.timeAgo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
