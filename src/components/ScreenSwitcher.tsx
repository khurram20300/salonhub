import React, { useState } from 'react';
import { ScreenId } from '../types';

interface ScreenSwitcherProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  isSimulatorView: boolean;
  onToggleSimulator: () => void;
}

export const ScreenSwitcher: React.FC<ScreenSwitcherProps> = ({
  currentScreen,
  onNavigate,
  isSimulatorView,
  onToggleSimulator
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const screenGroups: { title: string; screens: { id: ScreenId; label: string }[] }[] = [
    {
      title: 'Auth & Onboarding',
      screens: [
        { id: 'splash', label: '1. Splash Screen' },
        { id: 'onboarding', label: '2. Onboarding Carousel' },
        { id: 'preferences', label: '3. Style Preferences' },
        { id: 'login', label: '4. Login' },
        { id: 'signup', label: '5. Sign Up' },
        { id: 'forgot_password', label: '6. Forgot Password' },
        { id: 'verification', label: '7. OTP Verification' }
      ]
    },
    {
      title: 'Core Discovery & Salons',
      screens: [
        { id: 'home', label: '8. Home Dashboard' },
        { id: 'explore', label: '9. Explore & Search' },
        { id: 'filters', label: '10. Filter Modal' },
        { id: 'salon_detail', label: '11. Salon Details' },
        { id: 'barber_portfolio', label: '12. Julian Hunt Portfolio' },
        { id: 'map_locator', label: '13. Salon Locator Map' }
      ]
    },
    {
      title: 'Booking & Payments',
      screens: [
        { id: 'schedule', label: '14. Date & Time Slots' },
        { id: 'checkout', label: '15. Checkout Summary' },
        { id: 'payment', label: '16. Payment Options' },
        { id: 'confirmation', label: '17. Booking Confirmed' },
        { id: 'my_bookings', label: '18. My Appointments' }
      ]
    },
    {
      title: 'Profile & Services',
      screens: [
        { id: 'favorites', label: '19. Your Curated List (Saved)' },
        { id: 'profile', label: '20. User Profile' },
        { id: 'edit_profile', label: '21. Edit Profile' },
        { id: 'settings', label: '22. App Settings' },
        { id: 'chat', label: '23. Stylist Chat' },
        { id: 'feed', label: '24. Trend Alert Feed' },
        { id: 'notifications', label: '25. Notifications' },
        { id: 'gift_cards', label: '26. Gift Cards' },
        { id: 'saved_addresses', label: '27. Saved Addresses' },
        { id: 'help_center', label: '28. Concierge & Help' },
        { id: 'language', label: '29. Language Settings' },
        { id: 'offline', label: '30. Offline Interrupted' },
        { id: 'not_found', label: '31. 404 Error Screen' }
      ]
    },
    {
      title: 'Royal Admin Suite (Management)',
      screens: [
        { id: 'admin_overview', label: '32. Admin Overview' },
        { id: 'admin_appointments', label: '33. Appointments Roster' },
        { id: 'admin_clients', label: '34. Clients Directory' },
        { id: 'admin_client_dossier', label: '35. Client Dossier CRM' },
        { id: 'admin_inventory', label: '36. Inventory & Stock' },
        { id: 'admin_campaign_creator', label: '37. Campaign Creator Wizard' },
        { id: 'admin_marketing', label: '38. Marketing & Coupons' },
        { id: 'admin_financials', label: '39. Revenue & Profitability' },
        { id: 'admin_transactions', label: '40. Payment Ledger' },
        { id: 'admin_payouts', label: '41. Stylist Payouts' },
        { id: 'admin_services', label: '42. Services & Pricing' },
        { id: 'admin_staff', label: '43. Staff Rostering' },
        { id: 'admin_stylist_performance', label: '44. Stylist Analytics' },
        { id: 'admin_suppliers', label: '45. Supplier Ecosystem' },
        { id: 'admin_audit_logs', label: '46. System Audit Logs' },
        { id: 'admin_backup', label: '47. Backup & Recovery' },
        { id: 'admin_export', label: '48. Data Export' },
        { id: 'admin_integrations', label: '49. Integrations Hub' },
        { id: 'admin_security', label: '50. Security Permissions' },
        { id: 'admin_settings', label: '51. Admin Settings' }
      ]
    }
  ];

  return (
    <div className="fixed top-3 right-3 z-50 flex items-center gap-2">
      {/* View Toggle (Mobile Device Frame vs Fluid Fullscreen) */}
      <button
        onClick={onToggleSimulator}
        className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#353028] text-[#f6ece1] hover:bg-[#7b5900] shadow-lg flex items-center gap-1.5 transition-all"
        title="Toggle simulator frame"
      >
        <span className="material-symbols-outlined text-[16px]">
          {isSimulatorView ? 'fullscreen' : 'smartphone'}
        </span>
        <span className="hidden sm:inline">
          {isSimulatorView ? 'Fluid View' : 'Mobile Frame'}
        </span>
      </button>

      {/* Screen Drawer Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#7b5900] to-[#c89b3c] text-white shadow-lg flex items-center gap-1.5 hover:brightness-110 active:scale-95 transition-all"
      >
        <span className="material-symbols-outlined text-[16px]">grid_view</span>
        <span>Screens ({currentScreen})</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-sm bg-[#fff8f2] h-full shadow-2xl overflow-y-auto flex flex-col p-5 animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#f0e4d2]">
              <div>
                <h3 className="font-serif-title font-bold text-lg text-[#1f1b14]">
                  SalonHub Screen Navigator
                </h3>
                <p className="text-xs text-[#877868]">
                  Tap any screen to jump directly
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f6ece1] hover:bg-[#e4d6c4] flex items-center justify-center text-[#1f1b14]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="flex-1 py-4 space-y-6">
              {screenGroups.map((group, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-bold text-[#7b5900] uppercase tracking-wider mb-2">
                    {group.title}
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5">
                    {group.screens.map((scr) => {
                      const isActive = currentScreen === scr.id;
                      return (
                        <button
                          key={scr.id}
                          onClick={() => {
                            onNavigate(scr.id);
                            setIsOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                            isActive
                              ? 'bg-[#7b5900] text-white font-semibold shadow-md'
                              : 'bg-white hover:bg-[#f6ece1] text-[#1f1b14] border border-[#f0e4d2]'
                          }`}
                        >
                          <span>{scr.label}</span>
                          {isActive && (
                            <span className="material-symbols-outlined text-[16px]">
                              check_circle
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#f0e4d2] text-center text-xs text-[#877868]">
              SalonHub v1.0.0 • Luxury Flutter App Experience
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
