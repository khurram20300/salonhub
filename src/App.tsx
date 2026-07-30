import React, { useState } from 'react';
import { ScreenId, Salon, Barber, Service } from './types';
import { mockSalons, mockBarbers } from './data/mockData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { ScreenSwitcher } from './components/ScreenSwitcher';
import { ScreenFrame } from './components/ScreenFrame';

// Screens
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { CategoryPreferencesScreen } from './screens/CategoryPreferencesScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignupScreen } from './screens/SignupScreen';
import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';
import { VerificationScreen } from './screens/VerificationScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { AdvancedFiltersModal } from './screens/AdvancedFiltersModal';
import { SalonDetailScreen } from './screens/SalonDetailScreen';
import { BarberPortfolioScreen } from './screens/BarberPortfolioScreen';
import { ScheduleScreen } from './screens/ScheduleScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { PaymentScreen } from './screens/PaymentScreen';
import { ConfirmationScreen } from './screens/ConfirmationScreen';
import { MyBookingsScreen } from './screens/MyBookingsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { EditProfileScreen } from './screens/EditProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { ChatScreen } from './screens/ChatScreen';
import { SocialFeedScreen } from './screens/SocialFeedScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { HelpCenterScreen } from './screens/HelpCenterScreen';
import { LanguageScreen } from './screens/LanguageScreen';
import { GiftCardsScreen } from './screens/GiftCardsScreen';
import { SavedAddressesScreen } from './screens/SavedAddressesScreen';
import { MapLocatorScreen } from './screens/MapLocatorScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';
import { OfflineScreen } from './screens/OfflineScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';

// Admin Suite Screens
import { AdminOverviewScreen } from './screens/admin/AdminOverviewScreen';
import { AdminAppointmentsScreen } from './screens/admin/AdminAppointmentsScreen';
import { AdminClientsScreen } from './screens/admin/AdminClientsScreen';
import { AdminClientDossierScreen } from './screens/admin/AdminClientDossierScreen';
import { AdminInventoryScreen } from './screens/admin/AdminInventoryScreen';
import { AdminCampaignCreatorScreen } from './screens/admin/AdminCampaignCreatorScreen';
import { AdminMarketingScreen } from './screens/admin/AdminMarketingScreen';
import { AdminFinancialsScreen } from './screens/admin/AdminFinancialsScreen';
import { AdminServicesScreen } from './screens/admin/AdminServicesScreen';
import { AdminStaffScreen } from './screens/admin/AdminStaffScreen';
import { AdminStylistPerformanceScreen } from './screens/admin/AdminStylistPerformanceScreen';
import { AdminSuppliersScreen } from './screens/admin/AdminSuppliersScreen';
import { AdminTransactionsScreen } from './screens/admin/AdminTransactionsScreen';
import { AdminPayoutsScreen } from './screens/admin/AdminPayoutsScreen';
import { AdminAuditLogsScreen } from './screens/admin/AdminAuditLogsScreen';
import { AdminBackupScreen } from './screens/admin/AdminBackupScreen';
import { AdminExportScreen } from './screens/admin/AdminExportScreen';
import { AdminIntegrationsScreen } from './screens/admin/AdminIntegrationsScreen';
import { AdminSecurityScreen } from './screens/admin/AdminSecurityScreen';
import { AdminSettingsScreen } from './screens/admin/AdminSettingsScreen';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [selectedSalon, setSelectedSalon] = useState<Salon>(mockSalons[0]);
  const [selectedBarber, setSelectedBarber] = useState<Barber>(mockBarbers[0]);
  const [selectedService, setSelectedService] = useState<Service | undefined>(mockSalons[0].popularServices[0]);
  const [isSimulatorView, setIsSimulatorView] = useState<boolean>(true);

  const isAdminScreen = currentScreen.startsWith('admin_');

  // Screens that render their own custom headers
  const customHeaderScreens: ScreenId[] = [
    'splash',
    'onboarding',
    'preferences',
    'login',
    'signup',
    'forgot_password',
    'verification',
    'map_locator',
    'favorites',
    'not_found',
    'offline'
  ];

  const showHeader = !customHeaderScreens.includes(currentScreen) && !isAdminScreen;

  const getHeaderTitle = (): string | undefined => {
    switch (currentScreen) {
      case 'home':
        return undefined;
      case 'explore':
        return 'Explore Salons';
      case 'filters':
        return 'Filter Options';
      case 'salon_detail':
        return salonDetailTitle();
      case 'barber_portfolio':
        return selectedBarber.name;
      case 'schedule':
        return 'Schedule Appointment';
      case 'checkout':
        return 'Booking Summary';
      case 'payment':
        return 'Payment Options';
      case 'confirmation':
        return 'Confirmed';
      case 'my_bookings':
        return 'My Appointments';
      case 'profile':
        return 'My Profile';
      case 'edit_profile':
        return 'Edit Profile';
      case 'settings':
        return 'Settings';
      case 'chat':
        return 'Stylist Consultation';
      case 'feed':
        return 'Trend Alert';
      case 'notifications':
        return 'Notifications';
      case 'help_center':
        return 'Help Center';
      case 'language':
        return 'Language';
      case 'gift_cards':
        return 'Gift Cards';
      case 'saved_addresses':
        return 'Saved Addresses';
      default:
        return undefined;
    }
  };

  const salonDetailTitle = () => selectedSalon.name;

  return (
    <div className="min-h-screen bg-[#191611] font-sans antialiased text-[#1f1b14]">
      {/* Quick Navigation Drawer for instant screen jump */}
      <ScreenSwitcher
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        isSimulatorView={isSimulatorView}
        onToggleSimulator={() => setIsSimulatorView(!isSimulatorView)}
      />

      {/* Main Simulator Device Frame or Fluid Container */}
      <ScreenFrame isSimulatorView={isSimulatorView}>
        {showHeader && (
          <Header
            title={getHeaderTitle()}
            showBack={currentScreen !== 'home'}
            onBack={() => {
              if (currentScreen === 'salon_detail') setCurrentScreen('explore');
              else if (currentScreen === 'barber_portfolio') setCurrentScreen('home');
              else if (currentScreen === 'schedule') setCurrentScreen('salon_detail');
              else if (currentScreen === 'checkout') setCurrentScreen('schedule');
              else if (currentScreen === 'payment') setCurrentScreen('checkout');
              else if (currentScreen === 'confirmation') setCurrentScreen('my_bookings');
              else setCurrentScreen('home');
            }}
            currentScreen={currentScreen}
            onNavigate={setCurrentScreen}
            unreadCount={2}
          />
        )}

        {/* Dynamic Screen Renderer */}
        <main className="flex-1 relative">
          {currentScreen === 'splash' && (
            <SplashScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'onboarding' && (
            <OnboardingScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'preferences' && (
            <CategoryPreferencesScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'login' && (
            <LoginScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'signup' && (
            <SignupScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'forgot_password' && (
            <ForgotPasswordScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'verification' && (
            <VerificationScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'home' && (
            <HomeScreen
              onNavigate={setCurrentScreen}
              onSelectSalon={setSelectedSalon}
              onSelectBarber={setSelectedBarber}
            />
          )}

          {currentScreen === 'explore' && (
            <ExploreScreen
              onNavigate={setCurrentScreen}
              onSelectSalon={setSelectedSalon}
            />
          )}

          {currentScreen === 'filters' && (
            <AdvancedFiltersModal onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'salon_detail' && (
            <SalonDetailScreen
              salon={selectedSalon}
              onNavigate={setCurrentScreen}
              onSelectBarber={setSelectedBarber}
              onSelectService={setSelectedService}
            />
          )}

          {currentScreen === 'barber_portfolio' && (
            <BarberPortfolioScreen
              barber={selectedBarber}
              onNavigate={setCurrentScreen}
            />
          )}

          {currentScreen === 'schedule' && (
            <ScheduleScreen
              selectedBarber={selectedBarber}
              selectedService={selectedService}
              onNavigate={setCurrentScreen}
              onSelectBarber={setSelectedBarber}
            />
          )}

          {currentScreen === 'checkout' && (
            <CheckoutScreen
              salon={selectedSalon}
              barber={selectedBarber}
              service={selectedService}
              onNavigate={setCurrentScreen}
            />
          )}

          {currentScreen === 'payment' && (
            <PaymentScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'confirmation' && (
            <ConfirmationScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'my_bookings' && (
            <MyBookingsScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'profile' && (
            <ProfileScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'edit_profile' && (
            <EditProfileScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'settings' && (
            <SettingsScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'chat' && (
            <ChatScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'feed' && (
            <SocialFeedScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'notifications' && (
            <NotificationsScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'help_center' && (
            <HelpCenterScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'language' && (
            <LanguageScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'gift_cards' && (
            <GiftCardsScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'saved_addresses' && (
            <SavedAddressesScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'map_locator' && (
            <MapLocatorScreen
              onNavigate={setCurrentScreen}
              onSelectSalon={setSelectedSalon}
            />
          )}

          {currentScreen === 'not_found' && (
            <NotFoundScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'offline' && (
            <OfflineScreen onNavigate={setCurrentScreen} />
          )}

          {currentScreen === 'favorites' && (
            <FavoritesScreen
              onNavigate={setCurrentScreen}
              onSelectSalon={setSelectedSalon}
              onSelectBarber={setSelectedBarber}
            />
          )}

          {/* Royal Admin Suite Screens */}
          {currentScreen === 'admin_overview' && (
            <AdminOverviewScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_appointments' && (
            <AdminAppointmentsScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_clients' && (
            <AdminClientsScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_client_dossier' && (
            <AdminClientDossierScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_inventory' && (
            <AdminInventoryScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_campaign_creator' && (
            <AdminCampaignCreatorScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_marketing' && (
            <AdminMarketingScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_financials' && (
            <AdminFinancialsScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_services' && (
            <AdminServicesScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_staff' && (
            <AdminStaffScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_stylist_performance' && (
            <AdminStylistPerformanceScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_suppliers' && (
            <AdminSuppliersScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_transactions' && (
            <AdminTransactionsScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_payouts' && (
            <AdminPayoutsScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_audit_logs' && (
            <AdminAuditLogsScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_backup' && (
            <AdminBackupScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_export' && (
            <AdminExportScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_integrations' && (
            <AdminIntegrationsScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_security' && (
            <AdminSecurityScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'admin_settings' && (
            <AdminSettingsScreen currentScreen={currentScreen} onNavigate={setCurrentScreen} />
          )}
        </main>

        {!isAdminScreen && (
          <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        )}
      </ScreenFrame>
    </div>
  );
}

export default App;
