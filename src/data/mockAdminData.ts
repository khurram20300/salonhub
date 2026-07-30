export interface AdminAppointment {
  id: string;
  clientName: string;
  clientAvatar: string;
  serviceName: string;
  stylistName: string;
  timeSlot: string;
  date: string;
  amount: number;
  status: 'Confirmed' | 'Completed' | 'In Progress' | 'Cancelled';
}

export interface AdminClient {
  id: string;
  name: string;
  avatar: string;
  membership: 'Gold Member' | 'Silver Member' | 'VIP Platinum' | 'Standard';
  phone: string;
  email: string;
  totalVisits: number;
  lastVisit: string;
  totalSpent: number;
  favoriteStylist: string;
  notes: string;
  colorFormula?: string;
}

export interface AdminInventoryItem {
  id: string;
  name: string;
  sku: string;
  category: 'Hair Care' | 'Skin & Body' | 'Tools & Equip' | 'Color & Treatment';
  brand: string;
  stock: number;
  minThreshold: number;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Critical';
}

export interface AdminTransaction {
  id: string;
  clientName: string;
  service: string;
  paymentMethod: 'Apple Pay' | 'Credit Card' | 'Cash' | 'Gift Card';
  amount: number;
  tip: number;
  date: string;
  status: 'Completed' | 'Refunded' | 'Pending';
}

export interface AdminStylist {
  id: string;
  name: string;
  avatar: string;
  role: string;
  station: string;
  rating: number;
  reviewsCount: number;
  salesTotal: number;
  commissionRate: number;
  tips: number;
  hoursWorked: number;
  status: 'Available' | 'With Client' | 'On Break' | 'Off Shift';
}

export interface AdminAuditLog {
  id: string;
  timestamp: string;
  user: string;
  role: string;
  action: string;
  category: 'Security' | 'Financial' | 'Client Data' | 'System';
  ipAddress: string;
  status: 'SUCCESS' | 'WARNING' | 'FAILED';
}

export const MOCK_ADMIN_APPOINTMENTS: AdminAppointment[] = [
  {
    id: 'APT-9821',
    clientName: 'Julian Thorne',
    clientAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDih-UitMXR4xZU8J71qh-QWI-o85RMJB4e8PutSJznha0XTshxKvZhEPhlmsfCrHQPKAvWo38lSjGF7CGe57pyqd-WyYlV08Xk5zxMuLkL0_gyWgmEgU5_GI781k7iM8Ep0pmXEZpY8NtUyEwvM4gEbIARHAitiSyuhqLimHh6FNwp050QcNDiPmCdkrYIoJtBXd6V9Ll69F0pWtp87dlscbfqjht18kCLEKhvpqnQ_W2y3hFCYUr8yu6xRN5v9GJ7F8kEv7_pdO1W',
    serviceName: 'Royal Signature Cut & Beard Trim',
    stylistName: 'Julian Hunt',
    timeSlot: '09:00 AM - 10:00 AM',
    date: 'Today, Oct 24',
    amount: 145,
    status: 'Confirmed'
  },
  {
    id: 'APT-9822',
    clientName: 'Elena Vance',
    clientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    serviceName: 'Balayage Artistry & Scalp Treatment',
    stylistName: 'Sofia Rossi',
    timeSlot: '10:30 AM - 12:30 PM',
    date: 'Today, Oct 24',
    amount: 320,
    status: 'In Progress'
  },
  {
    id: 'APT-9823',
    clientName: 'Marcus Chen',
    clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    serviceName: 'Hot Towel Facial & Precision Fade',
    stylistName: 'Marcus Chen',
    timeSlot: '01:00 PM - 02:00 PM',
    date: 'Today, Oct 24',
    amount: 110,
    status: 'Confirmed'
  },
  {
    id: 'APT-9824',
    clientName: 'Claire Sterling',
    clientAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    serviceName: '24K Gold Leaf Facial & Blowout',
    stylistName: 'Elena Dubois',
    timeSlot: '02:30 PM - 04:00 PM',
    date: 'Today, Oct 24',
    amount: 280,
    status: 'Confirmed'
  },
  {
    id: 'APT-9825',
    clientName: 'Alexander Vane',
    clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    serviceName: 'Beard Sculpting & Straight Razor Shave',
    stylistName: 'Julian Hunt',
    timeSlot: '04:30 PM - 05:30 PM',
    date: 'Today, Oct 24',
    amount: 95,
    status: 'Confirmed'
  }
];

export const MOCK_ADMIN_CLIENTS: AdminClient[] = [
  {
    id: 'CLI-101',
    name: 'Elena Vance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    membership: 'VIP Platinum',
    phone: '+1 (555) 234-5678',
    email: 'elena.vance@auramail.com',
    totalVisits: 24,
    lastVisit: '2 days ago',
    totalSpent: 4850,
    favoriteStylist: 'Sofia Rossi',
    notes: 'Prefers San Pellegrino with lemon. Warm tone balayage 6N base with 9G highlights.',
    colorFormula: '6N Base + 20Vol • Gloss 9GI High-Shine'
  },
  {
    id: 'CLI-102',
    name: 'Julian Thorne',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDih-UitMXR4xZU8J71qh-QWI-o85RMJB4e8PutSJznha0XTshxKvZhEPhlmsfCrHQPKAvWo38lSjGF7CGe57pyqd-WyYlV08Xk5zxMuLkL0_gyWgmEgU5_GI781k7iM8Ep0pmXEZpY8NtUyEwvM4gEbIARHAitiSyuhqLimHh6FNwp050QcNDiPmCdkrYIoJtBXd6V9Ll69F0pWtp87dlscbfqjht18kCLEKhvpqnQ_W2y3hFCYUr8yu6xRN5v9GJ7F8kEv7_pdO1W',
    membership: 'Gold Member',
    phone: '+1 (555) 876-5432',
    email: 'julian.thorne@luxury.com',
    totalVisits: 18,
    lastVisit: '1 week ago',
    totalSpent: 2610,
    favoriteStylist: 'Julian Hunt',
    notes: 'Always books 09:00 AM slots. Requires hot towel wrap pre-shave.'
  },
  {
    id: 'CLI-103',
    name: 'Sophia Chen',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
    membership: 'Gold Member',
    phone: '+1 (555) 432-8765',
    email: 'sophia.chen@design.co',
    totalVisits: 14,
    lastVisit: '3 weeks ago',
    totalSpent: 1980,
    favoriteStylist: 'Elena Dubois',
    notes: 'Sensitive scalp. Uses sulfate-free botanical cleansers only.'
  },
  {
    id: 'CLI-104',
    name: 'Alexander Vane',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    membership: 'Silver Member',
    phone: '+1 (555) 678-1234',
    email: 'alex.vane@capital.com',
    totalVisits: 9,
    lastVisit: 'Yesterday',
    totalSpent: 1120,
    favoriteStylist: 'Marcus Chen',
    notes: 'Enjoys espresso during cut. Prefers natural finish matte clay.'
  }
];

export const MOCK_ADMIN_INVENTORY: AdminInventoryItem[] = [
  {
    id: 'INV-301',
    name: 'L\'Élite Caviar Restorative Shampoo (500ml)',
    sku: 'ELT-SHMP-500',
    category: 'Hair Care',
    brand: 'L\'Élite Paris',
    stock: 4,
    minThreshold: 10,
    price: 85,
    status: 'Low Stock'
  },
  {
    id: 'INV-302',
    name: 'Vanguard Titanium Ergonomic Shears 7.0"',
    sku: 'VNG-SHR-70',
    category: 'Tools & Equip',
    brand: 'Vanguard Tools',
    stock: 2,
    minThreshold: 5,
    price: 340,
    status: 'Critical'
  },
  {
    id: 'INV-303',
    name: 'Aura Organic Argan & Gold Hair Serum',
    sku: 'AUR-SER-100',
    category: 'Hair Care',
    brand: 'Aura Botanica',
    stock: 38,
    minThreshold: 15,
    price: 65,
    status: 'In Stock'
  },
  {
    id: 'INV-304',
    name: '24K Gold Leaf Facial Infusion Sheet Mask (Pack of 10)',
    sku: 'GLD-MSK-10P',
    category: 'Skin & Body',
    brand: 'Aurum Skincare',
    stock: 14,
    minThreshold: 8,
    price: 190,
    status: 'In Stock'
  }
];

export const MOCK_ADMIN_STYLISTS: AdminStylist[] = [
  {
    id: 'STY-01',
    name: 'Julian Hunt',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZdiB1dcQ0ICPFfjLTfOwjeoc0rCJ44djN2ul0BGmJ7fSA59WopFFXvLj6-CfCPcQINnueyCZLDu8gt7WlyS2d9YnjchXT-agXU7-vVyy_eExamRYzI-V7kzE0xgR0XI4mBkNsnXFAMInq76ZeBcfk1quTRXJVBQqI626ILSG4w8C8pvtbk6pqJqb_0HXg_eTcDThxOW3ppgtpKQT3cyjbL4kUSkwjuH5Cw73n-AEl_94ioAXpWW-cYw',
    role: 'Master Barber & Director',
    station: 'STATION 01 (VIP Suite)',
    rating: 4.98,
    reviewsCount: 240,
    salesTotal: 42500,
    commissionRate: 50,
    tips: 3850,
    hoursWorked: 38,
    status: 'Available'
  },
  {
    id: 'STY-02',
    name: 'Sofia Rossi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    role: 'Senior Colorist & Balayage Lead',
    station: 'STATION 02',
    rating: 4.95,
    reviewsCount: 198,
    salesTotal: 38200,
    commissionRate: 48,
    tips: 3120,
    hoursWorked: 36,
    status: 'With Client'
  },
  {
    id: 'STY-03',
    name: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    role: 'Precision Cut Specialist',
    station: 'STATION 03',
    rating: 4.92,
    reviewsCount: 164,
    salesTotal: 29400,
    commissionRate: 45,
    tips: 2450,
    hoursWorked: 40,
    status: 'Available'
  },
  {
    id: 'STY-04',
    name: 'Elena Dubois',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
    role: 'Aesthetician & Skin Director',
    station: 'SPA SUITE A',
    rating: 4.99,
    reviewsCount: 310,
    salesTotal: 49800,
    commissionRate: 52,
    tips: 4200,
    hoursWorked: 35,
    status: 'With Client'
  }
];

export const MOCK_ADMIN_AUDIT_LOGS: AdminAuditLog[] = [
  {
    id: 'LOG-9401',
    timestamp: 'Today, 10:42:15 AM',
    user: 'Alex Rivera',
    role: 'Admin Principal',
    action: 'Modified Stylist Commission Rate (Julian Hunt: 48% -> 50%)',
    category: 'Financial',
    ipAddress: '192.168.1.104',
    status: 'SUCCESS'
  },
  {
    id: 'LOG-9402',
    timestamp: 'Today, 09:15:02 AM',
    user: 'Elena Vatori',
    role: 'Front Desk Manager',
    action: 'Exported Client Directory (240 records in CSV format)',
    category: 'Client Data',
    ipAddress: '192.168.1.112',
    status: 'SUCCESS'
  },
  {
    id: 'LOG-9403',
    timestamp: 'Yesterday, 11:58:44 PM',
    user: 'System Automated',
    role: 'Cloud Engine',
    action: 'Nightly Database Snapshot Completed (3.4 GB)',
    category: 'System',
    ipAddress: '10.0.0.1',
    status: 'SUCCESS'
  },
  {
    id: 'LOG-9404',
    timestamp: 'Yesterday, 04:30:10 PM',
    user: 'Unknown Device',
    role: 'Guest Attempt',
    action: 'Failed OAuth Auth Attempt for Admin Portal',
    category: 'Security',
    ipAddress: '185.220.101.5',
    status: 'WARNING'
  }
];
