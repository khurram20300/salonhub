export type ServiceCategory = 'Barber' | 'Hair' | 'Massage' | 'Spa' | 'Nails' | 'Facial' | 'Coloring';

export interface Service {
  id: string;
  name: string;
  description: string;
  durationMins: number;
  price: number;
  category: ServiceCategory;
}

export interface Barber {
  id: string;
  name: string;
  title: string; // e.g. "Master Barber", "Senior", "Artisan", "Elite"
  avatar: string;
  rating: number;
  reviewsCount: number;
  bio: string;
  experienceYears: number;
  cutsDelivered: string;
  specialties: string[];
  portfolioImages: string[];
}

export interface Review {
  id: string;
  clientName: string;
  clientBadge: string;
  clientAvatarText: string;
  rating: number;
  comment: string;
}

export interface Salon {
  id: string;
  name: string;
  address: string;
  cityArea: string;
  rating: number;
  reviewsCount: number;
  distanceMiles: number;
  pricePerSession: number;
  tags: string[];
  image: string;
  isPremiumPartner: boolean;
  nextSlot: string;
  experienceYears: number;
  aboutText: string;
  popularServices: Service[];
}

export interface Booking {
  id: string;
  bookingCode: string; // e.g. #SH-882941
  salonName: string;
  serviceName: string;
  barberName: string;
  barberAvatar?: string;
  date: string;
  time: string;
  price: number;
  serviceFee: number;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  rating?: number;
  location?: string;
}

export interface UserAddress {
  id: string;
  title: string;
  line1: string;
  line2: string;
  isDefault: boolean;
  type: 'home' | 'office' | 'studio';
}

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  avatar: string;
  tier: string;
  memberSince: string;
  pointsBalance: number;
  paymentMethod: {
    cardType: string;
    last4: string;
    expiry: string;
  };
  preferredLanguage: string;
  preferredCategories: ServiceCategory[];
}

export interface AppNotification {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  isRead: boolean;
  type: 'reminder' | 'offer' | 'alert' | 'review';
  couponCode?: string;
  barberName?: string;
  previewImages?: string[];
}

export interface FeedPost {
  id: string;
  authorName: string;
  authorTitle: string;
  authorAvatar: string;
  timeAgo: string;
  image: string;
  badgeText: string;
  likesCount: number;
  commentsCount: number;
  caption: string;
  tags: string[];
  isLiked?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'stylist' | 'user';
  text: string;
  time: string;
  image?: string;
  isRead?: boolean;
}

export interface GiftCardDesign {
  id: string;
  title: string;
  collection: string;
  amount: number;
  bgImage: string;
}

export type ScreenId =
  | 'splash'
  | 'onboarding'
  | 'preferences'
  | 'login'
  | 'signup'
  | 'forgot_password'
  | 'verification'
  | 'home'
  | 'explore'
  | 'filters'
  | 'salon_detail'
  | 'barber_portfolio'
  | 'schedule'
  | 'checkout'
  | 'payment'
  | 'confirmation'
  | 'my_bookings'
  | 'profile'
  | 'edit_profile'
  | 'settings'
  | 'chat'
  | 'feed'
  | 'notifications'
  | 'help_center'
  | 'language'
  | 'gift_cards'
  | 'saved_addresses'
  | 'map_locator'
  | 'favorites'
  | 'not_found'
  | 'offline'
  | 'loading_skeleton'
  /* Admin Suite Screens */
  | 'admin_overview'
  | 'admin_appointments'
  | 'admin_clients'
  | 'admin_client_dossier'
  | 'admin_inventory'
  | 'admin_campaign_creator'
  | 'admin_marketing'
  | 'admin_financials'
  | 'admin_transactions'
  | 'admin_payouts'
  | 'admin_services'
  | 'admin_staff'
  | 'admin_stylist_performance'
  | 'admin_suppliers'
  | 'admin_audit_logs'
  | 'admin_backup'
  | 'admin_export'
  | 'admin_integrations'
  | 'admin_security'
  | 'admin_settings';
