import {
  Barber,
  Salon,
  Booking,
  UserProfile,
  AppNotification,
  FeedPost,
  ChatMessage,
  GiftCardDesign,
  Review,
  UserAddress
} from '../types';

export const mockBarbers: Barber[] = [
  {
    id: 'barber-1',
    name: 'Julian Hunt',
    title: 'Master Barber',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS3BFkLdCzQQmNAO2RbpFN7OKIfBRW_ohPyLnKLY6gjDtLBejFL4AxNoJJ93kQrA19kWGfHqrDLHNICMGpvIGZbHTNrIhBYzbB__8VsrWTMTa46Iu2L1adj_1YXePhSQ1PQz2myNKk99AfP4JWEhlO36uRBUtfwPJwSU90_TMWkpx01b7LpqcTB5QDF39wG7o7eCe05wbfq_EJH7fZ0i-S2DGo1AmW3PSJNp6u-aBqQZfojXeHTI2y6FcPeQnFVhEVn37zh26mijHb',
    rating: 4.9,
    reviewsCount: 1240,
    bio: "With over 10 years of experience across London and New York, Julian has refined the art of the modern gentleman's cut. His philosophy merges classic artisanal techniques with contemporary precision.",
    experienceYears: 10,
    cutsDelivered: '10k+',
    specialties: ['Precision Cut', 'Hot Towel Shave', 'Beard Sculpting', 'Style Consult'],
    portfolioImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCFyYr-4AXclxfqYCGwMSG8tmaI1EHcBYj-rTnjPr-5CsqLEZkokVTDUg2Oj3Mz2T_ziYfBJmSwaJlJctKqRSP3Qt2gJEJqZEFZ7tViJFVJyqvDHsOYTqxbC1fhTBmpGmjqSlRAOlt2q5xW6ax_JSL_DVhaBDfe_gGdsPL5KoxQEuxFsvGPa7304GZ_YVNwK5VyrE_CwmzAbrM6VYN56sU0Hod5cFiS5X4yt42P8JPqq1_RcB4bL6q2XKzhmg1j6i8tIDV8ml8irxW',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8dD9E5o6AGYs2-PKsFdC-rSCqohKq_t7wy7CsLLKisJkROHttHFZHzfw8pd8izNxHFT1813omAnfmrIiMC0sSxyj1HxGwLcC1m3eTcr41v4A9wgGzsqBcaGI4mRUDNhCP0ILEwK8ib-gPPnc4FiV07Hrq8vtXRQ470mXrLjkupZSvXDseSf0ve5EebmvdgAfQVC3GB76gBuONrm4s7K4PZ8yfLf9Wyo2ldAkIC_kew9g5QuU91hnyxndHIG_6hGa4SxMHswsqRtJT',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDeiFenluB7QIkxBGOHErb159_GtaIgzxm35IUnVQ6pE_L_p7Tq73HBvqApi6PiuBq3U9kbU2q8teDFihr1QSkNG9venYHZWWTICOgP8GYTSbddgilXGU2v13Sr9qmiw97Cy7HJ3AIxxTt2iyWaRCLFNv_dC2EGoBKMJzf4dPmIblG0zdl046mHxrlG00KC-FARZIkAMgZqAoapwIVNzHYjs22hgz0DAhbO93o4SkbvHkbDufojZdtjL5AGbLCsllEsHVpCEB31bH1',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVGazspOjNjAO_ivi_B_LRgBj5eiRp2BZY0c1aQPjhbWBVFb_Zkw_t9AAdhWWhh6PHCsinD4EuwVJDD_a_YPUQITol2ejCdcXUgfctlWj4d1zFXLGoRAgdmY2-1YaNNe660_qlPfTMjQfGGPsZKslY3be-c8iIiFLhtne4FRU8rD6IBe_tnXAq2d6GKmW2pNcuDcXwcrmMT8BffJXY1AlkKNQ-fU6kI79Mt8OHsbvwpt_UvIVdvkI4aP-ymHCZbDq7tlULJURfbaie'
    ]
  },
  {
    id: 'barber-2',
    name: 'Elena Rossi',
    title: 'Senior Specialist',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8QwwlTWFGu9rQg0sx6HD9GAiriNUxqhMuODsjxCTt7LfMHQKk8cgRMzrxdyIf3CHVtSkk6BWOqzJQmZ7JPmoTyOxc8La6qiKUfbuWeUfBibHJ3HBfNJYaDgqxm8gzImc53oE_KiNDDwcEUNwI9vlT7v3Zvm6EVTbNc1-5MQd_zpzq9qO5f7LslH17bl_31453E0sOrItup2iTFAVhVpkDbvGlxpLvQS2ZrnpwMOQ7X_uuIHhkYACC6C-R02V9bx-1ioIfPcAJhi70',
    rating: 4.8,
    reviewsCount: 890,
    bio: 'Specialist in precision balayage, honey highlights, and custom color formulations.',
    experienceYears: 8,
    cutsDelivered: '7k+',
    specialties: ['Honey Balayage', 'Editorial Style', 'Gloss Treatment'],
    portfolioImages: []
  },
  {
    id: 'barber-3',
    name: 'Marcus Chen',
    title: 'Artisan Barber',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3VYf4VlwmM9ZqPiQtIiYxnitlH2GhbhZeIoltBWJyfm123CwGxdTnR2bU3P8bK0BhN07W5uH4pffrYZJZ96f2XjW4ecKysYHPHfBjkknflMJ2bD1VnQDx2jUD6Xc9t3stUcPcpKWec1pwho1Pz2DGMOA1DB6bkcL0jzzXustirCGEGIx-NjhuGeHaNXE7fS1YAWBZDZIgnvk5kunca6TYqc18E89hElNZzs1Xp1cFS1JF9qqFaFQFfn8jNSXqIzK6gE96peCb4Ago',
    rating: 4.9,
    reviewsCount: 1100,
    bio: 'Known for razor-sharp tapers, executive beard lineups, and scalp therapy.',
    experienceYears: 9,
    cutsDelivered: '9k+',
    specialties: ['Executive Fade', 'Beard Trim', 'Scalp Therapy'],
    portfolioImages: []
  },
  {
    id: 'barber-4',
    name: 'Silas Vance',
    title: 'Elite Master',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoRYAi9T18-JQcWNhwRpfffc0e2ICIyGRnepv5nffxHdxoC32QwH8x7Z1VRMuWK6WlrTrGPNY98AIFOOT8YPFcWljsX8F9Q0VoroaL2cw_w26TpVKpuVtjUk1CH1I2zbxcE_qlX2mxUxxsNDf70aqLmeJN28xJ_kb8Hr9jbm2XqBfFNwCzkmnhCSZRjX3qyEVn_t9ExSrrUwFQaMo8Ym3kROHDZz9gwzu72v3JxB91fdrXO8I3FjCjYAzeJujOfytdx0ABxwsygrGs',
    rating: 5.0,
    reviewsCount: 1560,
    bio: 'Pioneer of the signature luxury royal cut. Master barber for high-profile clientele.',
    experienceYears: 12,
    cutsDelivered: '15k+',
    specialties: ['Royal Signature Cut', 'Straight Razor Shave', 'VIP Package'],
    portfolioImages: []
  }
];

export const mockReviews: Review[] = [
  {
    id: 'rev-1',
    clientName: 'Marcus Williams',
    clientBadge: 'Verified Client',
    clientAvatarText: 'MW',
    rating: 5,
    comment: "Julian is a true architect of hair. I've never had a fade this clean. The atmosphere in his studio is unmatched."
  },
  {
    id: 'rev-2',
    clientName: 'David Ross',
    clientBadge: 'Premium Member',
    clientAvatarText: 'DR',
    rating: 5,
    comment: 'Ten years of experience really shows. He understands face shapes and suggests styles that actually work.'
  },
  {
    id: 'rev-3',
    clientName: 'Ethan Lee',
    clientBadge: 'Verified Client',
    clientAvatarText: 'EL',
    rating: 5,
    comment: "Best grooming experience in the city. Julian's attention to detail is bordering on perfectionism."
  }
];

export const mockSalons: Salon[] = [
  {
    id: 'salon-1',
    name: 'The Royal Barber',
    address: '452 Rodeo Dr',
    cityArea: 'Beverly Hills',
    rating: 4.9,
    reviewsCount: 1200,
    distanceMiles: 0.8,
    pricePerSession: 85,
    tags: ['Premium Cut', 'Beard Sculpt', 'Hot Towel'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRbNYm-VttYUA5g_HOAG8GQniPaUE6DB1JnbE0lhkxiZvRofLiUTtUXJhD6j6CUvpxIkKqrd7802Rt_6PBy-diTqpx4LFGEz-Nk0Zdr6daaD7t7BPFV-xZj5T-isgWGqbm5tKwn6lxGdiumxUz9_bzfF6iDiBzCLe9UWblL9hJCCATgJrHH8gshRh6w9cLyqZm4sAu8oCYoVAYBBK22it2iITPs2GUUv0dtAiVxe5aQKHyjuclnmbyQpv6oG0HnjdQdp1JGyBfsaE_',
    isPremiumPartner: true,
    nextSlot: 'Today, 2:30 PM',
    experienceYears: 15,
    aboutText: 'The Royal Barber is a sanctuary for the modern gentleman. We combine timeless traditions with contemporary techniques to ensure you leave looking your absolute best. Our master barbers specialize in artistic precision and personalized grooming experiences.',
    popularServices: [
      {
        id: 'srv-1',
        name: 'Royal Signature Cut',
        description: 'Precision haircut including wash, scalp massage, and expert styling.',
        durationMins: 45,
        price: 30,
        category: 'Barber'
      },
      {
        id: 'srv-2',
        name: 'Hot Towel Shave',
        description: 'Traditional straight razor shave with essential oil treatment and steam.',
        durationMins: 30,
        price: 30,
        category: 'Barber'
      },
      {
        id: 'srv-3',
        name: 'Beard Sculpting',
        description: 'Shape, trim, and hydrate your beard with premium conditioning balms.',
        durationMins: 20,
        price: 30,
        category: 'Barber'
      }
    ]
  },
  {
    id: 'salon-2',
    name: 'The Golden Scissors',
    address: '210 Wilshire Blvd',
    cityArea: 'Beverly Hills',
    rating: 4.9,
    reviewsCount: 980,
    distanceMiles: 0.8,
    pricePerSession: 85,
    tags: ['Premium Fade', 'Hot Towel'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-dNQgPNk62bk5V3_zync6qlazCNHVUP9tCdXH8qNhuEukpgkJZx6jcir7Hs6xagEWg1uvuwwKq8B-qaQKVA1G6ClkVCEG3lirpfqzsVI8OYaQ3ut62JMSCiSEM3mSjJ9e_gqo-QMhp-4O-5mQuvoE4yTv_DJRB00vGMX8zlUHCIw8i3unjUKKpMLg1bcxLZn10iCvmIOCYaNvkd3aCFqMAmBZeiGNovAhD1jf13g3Ys60WkRGy7S1eozt5iuRTY76hkE7vs5YEv4t',
    isPremiumPartner: true,
    nextSlot: 'Today, 3:00 PM',
    experienceYears: 12,
    aboutText: 'Modern minimalist salon with world-class lighting and custom styling suites.',
    popularServices: [
      {
        id: 'srv-4',
        name: 'Executive Fade',
        description: 'Clean fade with razor line and beard styling.',
        durationMins: 40,
        price: 65,
        category: 'Barber'
      }
    ]
  },
  {
    id: 'salon-3',
    name: 'Zenith Spa & Massage',
    address: '142 Sunset Strip',
    cityArea: 'West Hollywood',
    rating: 4.7,
    reviewsCount: 650,
    distanceMiles: 1.2,
    pricePerSession: 95,
    tags: ['Full Body', 'Aromatherapy'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApOEbG8QZO_n3Z6bYjFZ7Qw03qS_BMAnEV2KQHvtiKF0lHQvQz-YyrR4W-i3uDkbZR4nKTcOpqtoPjs0PbsM8kU2ex0w73Itkw4XQb-htkqvyoM92MlYarP5MUp1-Nc5smdfUAQiT4D9zf08YQ29L_OLvVAq8sOMYDFYhbHZSEkiJcc_Zp3Unffyk-18WY77DFZbiTchc7-_PFb0lmbCPubD2Kthq6qA1XgQSgXjK1NNOV1S0mNBauN884fbRE9vMRC0OShDQm_Hnx',
    isPremiumPartner: false,
    nextSlot: 'Tomorrow, 11:00 AM',
    experienceYears: 10,
    aboutText: 'Tranquil spa room featuring warm wood accents, plush white linens, and glowing amber candles.',
    popularServices: [
      {
        id: 'srv-5',
        name: 'Aromatherapy Massage',
        description: 'Deep tissue therapy with essential oils.',
        durationMins: 60,
        price: 95,
        category: 'Spa'
      }
    ]
  },
  {
    id: 'salon-4',
    name: 'Black & Gold Barbers',
    address: '88 Grand Ave',
    cityArea: 'Downtown',
    rating: 5.0,
    reviewsCount: 1420,
    distanceMiles: 2.5,
    pricePerSession: 100,
    tags: ['Executive Trim', 'Whisky Bar'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaAAOUVuhJBqXNtql9RBp5AuyDZ-PerCcg26JyWl95SJd9OocETmKxkHyU8v2CZByDhbx85FvBVxGU3Q6Wl4IsFJP5HCV4lB3WottGa0VzIBfaSlgvkXCmLmh8IVGCAk_WfeL4nQbXmJ7smT0Qf08WfgUYhB2i0JlhhdXpPdteEwGfiXhrtUvTngCG0JCeJBOejyG8d21pzKvxWQ8Q33KCd1OptbTxRD536MGFWsCXcvyBlne0s9eEY-NOlwEP5bqEQWqxZXF1Cpwb',
    isPremiumPartner: true,
    nextSlot: 'Today, 5:00 PM',
    experienceYears: 18,
    aboutText: 'Vintage leather stations, complimentary single malt whisky, and classic razor craft.',
    popularServices: [
      {
        id: 'srv-6',
        name: 'Whisky & Cut Experience',
        description: 'Full haircut, beard trim, hot towel, and top-shelf pour.',
        durationMins: 60,
        price: 100,
        category: 'Barber'
      }
    ]
  },
  {
    id: 'salon-5',
    name: 'Aesthetic Lounge',
    address: '880 Wilshire Blvd',
    cityArea: 'Los Angeles',
    rating: 4.7,
    reviewsCount: 750,
    distanceMiles: 1.5,
    pricePerSession: 65,
    tags: ['Classic Fade', 'Style Consult'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDApwZNFi3cZ9m6o5J9buspQaxAviMjyxefU-jZIOTw8ZFrEgXFBXflz7CtS-rTQxMRHGVELW9ZZomnXw70hHz5LaIfBMRHmXZJe7VXJRX2tl3sdFbSWgkLdOVjTuG8T-RJeyfKZAuhy7hwBTeJaXWNbkIzb2_oenB29N9u_8tHWp3mzAPibDTdPmE91gVp9pAEHhaJh05SUN2mSqgI1oqIu0R-0EaknqGTxnMQ_y1ir32ACnGZGgbdGv_HIuzltoc59UgGJzU0wOhg',
    isPremiumPartner: false,
    nextSlot: 'Today, 4:00 PM',
    experienceYears: 7,
    aboutText: 'Sleek monochromatic styling suite with floor-to-ceiling city views.',
    popularServices: []
  },
  {
    id: 'salon-6',
    name: 'Gilded Scissors',
    address: '120 Sunset Blvd',
    cityArea: 'Hollywood',
    rating: 4.8,
    reviewsCount: 920,
    distanceMiles: 3.1,
    pricePerSession: 120,
    tags: ['Executive Package', 'Member Only'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeB-7Q1xdaX8Rvvoq7g8mrlIejSDRtS1ST04IAlFmbDGcGzJiiuDgcsu0kkZJ7qV-R4YjdiSYThxFFvEqMAhUAK4L3bRzrRZ1-fcRcFcSHLCbgSsgWNMDbhmFWZtP7fArhJ12DyjfOkdaBAHf8j4OtwAZYP4nw-9KFl0HOorIEWdZnpTSNJ8V-S9U4xvIn5MQ3i97sXDjle0RclDjnNuEjhcmufnWSLBqpBEgJWZ-W-eIkGlFXmViKr9Jdhngo3Rug428KrWJTRPYI',
    isPremiumPartner: true,
    nextSlot: 'Tomorrow, 10:00 AM',
    experienceYears: 14,
    aboutText: 'Dark emerald walls, brass fixtures, and VIP private suites.',
    popularServices: []
  }
];

export const mockBookings: Booking[] = [
  {
    id: 'bk-1',
    bookingCode: '#SH-882941',
    salonName: 'THE RITZ SALON & SPA',
    serviceName: 'Royal Signature Cut',
    barberName: 'Julian Hunt',
    barberAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS3BFkLdCzQQmNAO2RbpFN7OKIfBRW_ohPyLnKLY6gjDtLBejFL4AxNoJJ93kQrA19kWGfHqrDLHNICMGpvIGZbHTNrIhBYzbB__8VsrWTMTa46Iu2L1adj_1YXePhSQ1PQz2myNKk99AfP4JWEhlO36uRBUtfwPJwSU90_TMWkpx01b7LpqcTB5QDF39wG7o7eCe05wbfq_EJH7fZ0i-S2DGo1AmW3PSJNp6u-aBqQZfojXeHTI2y6FcPeQnFVhEVn37zh26mijHb',
    date: 'Oct 24, 2024',
    time: '10:30 AM',
    price: 85.00,
    serviceFee: 5.00,
    status: 'Upcoming',
    location: 'SalonHub Elite • 122 Madison Ave, NY'
  },
  {
    id: 'bk-2',
    bookingCode: '#SH-771822',
    salonName: 'MAISON DE BEAUTÉ',
    serviceName: 'Artisan Beard Sculpt',
    barberName: 'Julian Hunt',
    date: 'Sep 12, 2024',
    time: '2:30 PM',
    price: 85.00,
    serviceFee: 5.00,
    status: 'Completed',
    rating: 5.0
  },
  {
    id: 'bk-3',
    bookingCode: '#SH-660193',
    salonName: 'GOLDEN SHEARS STUDIO',
    serviceName: 'Luxury Scalp Therapy',
    barberName: 'Marcus Chen',
    date: 'Aug 05, 2024',
    time: '11:00 AM',
    price: 75.00,
    serviceFee: 5.00,
    status: 'Completed',
    rating: 5.0
  }
];

export const mockUserProfile: UserProfile = {
  fullName: 'Alexander Hunt',
  email: 'alexander.hunt@premium.com',
  phone: '+1 (555) 012-3456',
  dob: '1992-05-14',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQf-9C6aSPlwPRr9yxhRVafIvUdlCThvgNWShmUboFsOqtovyV64eVxZRqRwZrzIZqKubi4NQuvpYtOHfNzTmCcjWV8yywpht9y9g1R7PGlv5DVAqesy1hmDBEbKst3ZD_1BQGRKALF3VW18lm8c2QcbfVsnLVXmpHzI9GY0jyc14jZsf6ppaW6ZCC4KgpEGaiDI_ftUExrzljLteAVGBNkP1CBRqXBFVH7Z3UTKMEO_I1zz3fSiCY0dHcb-os-Mu-j_Owt9TKly6n',
  tier: 'Gold Member',
  memberSince: 'Since 2021',
  pointsBalance: 24500,
  paymentMethod: {
    cardType: 'VISA',
    last4: '4242',
    expiry: '12/25'
  },
  preferredLanguage: 'English',
  preferredCategories: ['Barber', 'Facial', 'Massage']
};

export const mockNotifications: AppNotification[] = [
  {
    id: 'notif-1',
    title: 'Appointment Reminder',
    description: 'Your appointment with Julian Hunt is in 2 hours.',
    timeAgo: '2h ago',
    isRead: false,
    type: 'reminder',
    barberName: 'Julian Hunt'
  },
  {
    id: 'notif-2',
    title: 'Special Offer',
    description: 'Exclusive 20% off your next Gold Leaf Facial!',
    timeAgo: '5h ago',
    isRead: false,
    type: 'offer',
    couponCode: 'GOLD20'
  },
  {
    id: 'notif-3',
    title: 'New Style Alert',
    description: "New inspiration added to your favorite stylist's portfolio.",
    timeAgo: 'Yesterday',
    isRead: true,
    type: 'alert',
    previewImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAt-24IHfKGEbOPSdfE6U79Xd-CsmGh363XipFba988oC64keVizfjwsnOryDYer4xbZAVnVljgIvBsSrX50AyTGLEt-NpNaOK-i25yalVPQm4kAHaodtMRWjV-tYJpRtly17egdGSTdlnfIoQ17NJu-F54K9g8JqARsZm78Er-aulh0qu8bEJhke8JC7kRRU2TkFD6Brs28fXjqicZYuqaAN-Enhwts7Mei_ZhUqzvPlmjrxLCzop9Tg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCz-TJrkBLykX4MFtH6SjJw9EIJDD064ii6x5LXz2n2A662t90dbbRV02AKTnMmMDz-sIp0X0meTG5n9zZEKhZ9Rbcd62k_NRxrUPNc9Oi20vm1CrqLBa6F-8awdZmphf7vudeOjZZsNYmZ-YvRwt58nK49MRvCB2RB09drLMK4LI5NK9ayBQPK5ZvjScJxlWYpuPaTDLpwH7BWD-HZwMCVCdyqxCArIlZDgR1bX287W5kSBBU5RCURmw'
    ]
  },
  {
    id: 'notif-4',
    title: 'Review Requested',
    description: 'How was your visit with Sarah Miller? Your feedback helps us maintain excellence.',
    timeAgo: '2 days ago',
    isRead: true,
    type: 'review'
  }
];

export const mockFeedPosts: FeedPost[] = [
  {
    id: 'post-1',
    authorName: 'Julian Hunt',
    authorTitle: 'Creative Director',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS3BFkLdCzQQmNAO2RbpFN7OKIfBRW_ohPyLnKLY6gjDtLBejFL4AxNoJJ93kQrA19kWGfHqrDLHNICMGpvIGZbHTNrIhBYzbB__8VsrWTMTa46Iu2L1adj_1YXePhSQ1PQz2myNKk99AfP4JWEhlO36uRBUtfwPJwSU90_TMWkpx01b7LpqcTB5QDF39wG7o7eCe05wbfq_EJH7fZ0i-S2DGo1AmW3PSJNp6u-aBqQZfojXeHTI2y6FcPeQnFVhEVn37zh26mijHb',
    timeAgo: '2h ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4gbRxuAW0dkNulCGoZofSYzUu84XmIBjKk6W_i0dCdTbdCHWwc-oFYpNeOcdvJALTc1nnqYfARD1PrfG2Jt5qj7c9El3o4ksKbImb2rucK8V7i8eRoOkKbhpmcQJnIQXBUgA3HfKyDxD6j3zTalTmUUiCFJnMmdHTmnH3MNPPzCq84EI4NCaPmN6VfWcUEzAcOJKLXoGh8RsTknBAgGQ7yMdKmg62KIIcqSgRuQuW_FONTN9ImvzOPw',
    badgeText: 'Signature Cut',
    likesCount: 1240,
    commentsCount: 48,
    caption: 'Precision meets fluid movement. This signature cut was designed to frame the face while maintaining weight and luxury in the texture.',
    tags: ['#SalonHub', '#JulianHunt', '#LuxuryHair', '#PrecisionCut']
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'stylist',
    text: "Hello, Sarah! I've reviewed the inspiration photos you sent for your upcoming color session. The honey-gold balayage would complement your skin tone perfectly.",
    time: '10:24 AM'
  },
  {
    id: 'msg-2',
    sender: 'user',
    text: 'That\'s wonderful news! Do you think we should also trim the layers to add more volume, or keep the length as is?',
    time: '10:26 AM',
    isRead: true
  },
  {
    id: 'msg-3',
    sender: 'stylist',
    text: "I'd recommend a subtle internal layering. It provides the lift you're looking for without compromising that elegant length we've been maintaining.",
    time: '10:28 AM'
  },
  {
    id: 'msg-4',
    sender: 'user',
    text: 'Like this volume in the reference?',
    time: '10:30 AM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAutVFsWjboqRTjITomdMHgMgbeF2M6P1ggvOKSHfy6AtQmMPp7SfuepIVgp2wxUeZumCjdQ7F3oKZN_1AduaLif_bA-A60NbYSjlV4SN_WfgyM_R6sGvIF0LgsGg60a_mH9ZgZ0qLStY69DWWrrwLzkGpkPE_TpYovKB8DKZfyhuPjboQQd4U-Xm7R7gqDmKGQ0qPQme42Gjy_QL3lrtUoRnaVFm3wQKcIvfnvcx6y63Mki6eur6MY2Q',
    isRead: true
  }
];

export const mockGiftCards: GiftCardDesign[] = [
  {
    id: 'card-500',
    title: 'Aura Prestige',
    collection: 'THE MIDNIGHT COLLECTION',
    amount: 500,
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR3f5I_dhXO93htbAjMhFAp6AEBEdOxhi68UCvV_qTm3STv54v-eFTg8T6P_MgxIh1plrK70jKjHAvscskUKI-5Q4v_x_vulUedroVU_rwYl8wNJ_3B5gQjd5XAg4SLKjf1F2iL8aS9oYHGv-M6y5Zy7NWNjsJs3LC7bfpWcNZNg4BoNz_52lgjWdG28ko1Z9ObI9_MaHcmo9Zsew-G-1w7b9yjR1HYn6N5M1pW07bw8jUljq0EiBboA'
  },
  {
    id: 'card-250',
    title: 'Aura Essential',
    collection: 'THE IVORY SERIES',
    amount: 250,
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD777hAHy1G_K4pVGOdggGkJh-AhliTPaRoLhYL8Xttfxf_scTZmD-Ho7-k_hggRsLMbRbiHlhNZgI1s5RMd98pV8yN8QZDiE434tkApWoypLCn-8QBq_qiudpukhPYI9rA-Sd9C8tJRCVFdwmNHtUuD69sEhrlElBnwITAjgmEeLtVM5WNEiFVomXtu57GD8xznrCLdC4b15IYSXs_yIqovzLWNQVfbz61f7Rk6wR9qLgZ5SAFsCv8Gg'
  },
  {
    id: 'card-100',
    title: 'Aura Classic',
    collection: 'THE BRONZE EDITION',
    amount: 100,
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_eeNk55cm6TzWNOQUPhFMyMnx5ATfI3XT_DZZCyBUSkG2ienW7VKWB9Njr0b-NTv59Ul60bilxSJKPcbslxvMkAm8bCaUKoHMxwk9S1XZxkq6WqC596bn1jcMjl4GlVAiEt_-S0MTPcVg9iI19p6w5XpIIGsaWc76DjsB3VbtohHAEM-BWWfWUa6sl8Tqzrb_oIt_GJ_IWc4ccTvIzklyJvnqoUB048tifL_pnM0HdOXUE2-Xxtj2qg'
  }
];

export const mockAddresses: UserAddress[] = [
  {
    id: 'addr-1',
    title: 'Home',
    line1: '4280 Park Avenue, Upper East Side',
    line2: 'New York, NY 10022',
    isDefault: true,
    type: 'home'
  },
  {
    id: 'addr-2',
    title: 'Office',
    line1: 'One World Trade Center, Suite 85',
    line2: 'Financial District, New York 10007',
    isDefault: false,
    type: 'office'
  },
  {
    id: 'addr-3',
    title: 'Studio',
    line1: '152 West 25th Street, Chelsea',
    line2: 'New York, NY 10001',
    isDefault: false,
    type: 'studio'
  }
];
