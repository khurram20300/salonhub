import React, { useState } from 'react';
import { ScreenId, ServiceCategory } from '../types';

interface CategoryPreferencesScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const CategoryPreferencesScreen: React.FC<CategoryPreferencesScreenProps> = ({
  onNavigate
}) => {
  const [selectedCategories, setSelectedCategories] = useState<ServiceCategory[]>([
    'Barber',
    'Massage'
  ]);

  const categories: {
    id: ServiceCategory;
    title: string;
    subtitle: string;
    icon: string;
    image: string;
  }[] = [
    {
      id: 'Barber',
      title: 'Precision Barbering',
      subtitle: 'Fades, Razor Shaves & Linens',
      icon: 'content_cut',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRbNYm-VttYUA5g_HOAG8GQniPaUE6DB1JnbE0lhkxiZvRofLiUTtUXJhD6j6CUvpxIkKqrd7802Rt_6PBy-diTqpx4LFGEz-Nk0Zdr6daaD7t7BPFV-xZj5T-isgWGqbm5tKwn6lxGdiumxUz9_bzfF6iDiBzCLe9UWblL9hJCCATgJrHH8gshRh6w9cLyqZm4sAu8oCYoVAYBBK22it2iITPs2GUUv0dtAiVxe5aQKHyjuclnmbyQpv6oG0HnjdQdp1JGyBfsaE_'
    },
    {
      id: 'Massage',
      title: 'Therapeutic Massage',
      subtitle: 'Deep Tissue & Aromatherapy',
      icon: 'spa',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApOEbG8QZO_n3Z6bYjFZ7Qw03qS_BMAnEV2KQHvtiKF0lHQvQz-YyrR4W-i3uDkbZR4nKTcOpqtoPjs0PbsM8kU2ex0w73Itkw4XQb-htkqvyoM92MlYarP5MUp1-Nc5smdfUAQiT4D9zf08YQ29L_OLvVAq8sOMYDFYhbHZSEkiJcc_Zp3Unffyk-18WY77DFZbiTchc7-_PFb0lmbCPubD2Kthq6qA1XgQSgXjK1NNOV1S0mNBauN884fbRE9vMRC0OShDQm_Hnx'
    },
    {
      id: 'Facial',
      title: 'Gold Leaf Facials',
      subtitle: 'Anti-Aging & Deep Cleansing',
      icon: 'face',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8dD9E5o6AGYs2-PKsFdC-rSCqohKq_t7wy7CsLLKisJkROHttHFZHzfw8pd8izNxHFT1813omAnfmrIiMC0sSxyj1HxGwLcC1m3eTcr41v4A9wgGzsqBcaGI4mRUDNhCP0ILEwK8ib-gPPnc4FiV07Hrq8vtXRQ470mXrLjkupZSvXDseSf0ve5EebmvdgAfQVC3GB76gBuONrm4s7K4PZ8yfLf9Wyo2ldAkIC_kew9g5QuU91hnyxndHIG_6hGa4SxMHswsqRtJT'
    },
    {
      id: 'Coloring',
      title: 'Artisan Hair Color',
      subtitle: 'Balayage & Editorial Tones',
      icon: 'palette',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4gbRxuAW0dkNulCGoZofSYzUu84XmIBjKk6W_i0dCdTbdCHWwc-oFYpNeOcdvJALTc1nnqYfARD1PrfG2Jt5qj7c9El3o4ksKbImb2rucK8V7i8eRoOkKbhpmcQJnIQXBUgA3HfKyDxD6j3zTalTmUUiCFJnMmdHTmnH3MNPPzCq84EI4NCaPmN6VfWcUEzAcOJKLXoGh8RsTknBAgGQ7yMdKmg62KIIcqSgRuQuW_FONTN9ImvzOPw'
    },
    {
      id: 'Spa',
      title: 'Luxury Wellness Spa',
      subtitle: 'Hydrotherapy & Steam Suites',
      icon: 'bathtub',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeB-7Q1xdaX8Rvvoq7g8mrlIejSDRtS1ST04IAlFmbDGcGzJiiuDgcsu0kkZJ7qV-R4YjdiSYThxFFvEqMAhUAK4L3bRzrRZ1-fcRcFcSHLCbgSsgWNMDbhmFWZtP7fArhJ12DyjfOkdaBAHf8j4OtwAZYP4nw-9KFl0HOorIEWdZnpTSNJ8V-S9U4xvIn5MQ3i97sXDjle0RclDjnNuEjhcmufnWSLBqpBEgJWZ-W-eIkGlFXmViKr9Jdhngo3Rug428KrWJTRPYI'
    },
    {
      id: 'Nails',
      title: 'Manicure & Pedicure',
      subtitle: 'Executive Hand & Foot Grooming',
      icon: 'back_hand',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz-TJrkBLykX4MFtH6SjJw9EIJDD064ii6x5LXz2n2A662t90dbbRV02AKTnMmMDz-sIp0X0meTG5n9zZEKhZ9Rbcd62k_NRxrUPNc9Oi20vm1CrqLBa6F-8awdZmphf7vudeOjZZsNYmZ-YvRwt58nK49MRvCB2RB09drLMK4LI5NK9ayBQPK5ZvjScJxlWYpuPaTDLpwH7BWD-HZwMCVCdyqxCArIlZDgR1bX287W5kSBBU5RCURmw'
    }
  ];

  const toggleCategory = (cat: ServiceCategory) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] flex flex-col justify-between p-6">
      <div className="pt-2">
        <span className="text-xs font-semibold text-[#7b5900] tracking-widest uppercase block mb-1">
          PERSONALIZATION
        </span>
        <h1 className="font-serif-title text-3xl font-bold text-[#1f1b14]">
          What defines you?
        </h1>
        <p className="text-xs text-[#877868] mt-1">
          Select your favorite grooming domains to tailor your personal feed and concierge recommendations.
        </p>
      </div>

      {/* Grid of Bento Preference Cards */}
      <div className="grid grid-cols-2 gap-3.5 my-6">
        {categories.map((cat) => {
          const isSelected = selectedCategories.includes(cat.id);
          return (
            <div
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-200 ${
                isSelected
                  ? 'border-[#7b5900] ring-2 ring-[#7b5900]/30 shadow-lg scale-[1.02]'
                  : 'border-[#f0e4d2] hover:border-[#d2c5b1]'
              }`}
            >
              <div className="h-28 w-full relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <span className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[16px]">
                    {cat.icon}
                  </span>
                </span>
                {isSelected && (
                  <span className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#7b5900] text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </span>
                )}
              </div>
              <div className="p-3 bg-white">
                <h3 className="font-semibold text-xs text-[#1f1b14] truncate">
                  {cat.title}
                </h3>
                <p className="text-[10px] text-[#877868] truncate mt-0.5">
                  {cat.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => onNavigate('signup')}
        className="w-full py-4 rounded-2xl bg-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:bg-[#634700] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        <span>Save & Continue</span>
        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
      </button>
    </div>
  );
};
