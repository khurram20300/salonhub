import React, { useState } from 'react';
import { ScreenId } from '../types';

interface OnboardingScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Find Your Best Style',
      subtitle: 'DISCOVER EXCELLENCE',
      description: 'Explore hand-selected luxury salons, master barbers, and bespoke grooming services near you.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRbNYm-VttYUA5g_HOAG8GQniPaUE6DB1JnbE0lhkxiZvRofLiUTtUXJhD6j6CUvpxIkKqrd7802Rt_6PBy-diTqpx4LFGEz-Nk0Zdr6daaD7t7BPFV-xZj5T-isgWGqbm5tKwn6lxGdiumxUz9_bzfF6iDiBzCLe9UWblL9hJCCATgJrHH8gshRh6w9cLyqZm4sAu8oCYoVAYBBK22it2iITPs2GUUv0dtAiVxe5aQKHyjuclnmbyQpv6oG0HnjdQdp1JGyBfsaE_'
    },
    {
      title: 'Tailored to You',
      subtitle: 'BESPOKE EXPERIENCES',
      description: 'Customize your preferences, pick your ideal time slot, and enjoy VIP concierge service.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaAAOUVuhJBqXNtql9RBp5AuyDZ-PerCcg26JyWl95SJd9OocETmKxkHyU8v2CZByDhbx85FvBVxGU3Q6Wl4IsFJP5HCV4lB3WottGa0VzIBfaSlgvkXCmLmh8IVGCAk_WfeL4nQbXmJ7smT0Qf08WfgUYhB2i0JlhhdXpPdteEwGfiXhrtUvTngCG0JCeJBOejyG8d21pzKvxWQ8Q33KCd1OptbTxRD536MGFWsCXcvyBlne0s9eEY-NOlwEP5bqEQWqxZXF1Cpwb'
    },
    {
      title: 'Elite Artisans',
      subtitle: 'MASTER BARBERS & STYLISTS',
      description: 'Meet award-winning artisans dedicated to precision cuts, razor trims, and therapeutic treatments.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS3BFkLdCzQQmNAO2RbpFN7OKIfBRW_ohPyLnKLY6gjDtLBejFL4AxNoJJ93kQrA19kWGfHqrDLHNICMGpvIGZbHTNrIhBYzbB__8VsrWTMTa46Iu2L1adj_1YXePhSQ1PQz2myNKk99AfP4JWEhlO36uRBUtfwPJwSU90_TMWkpx01b7LpqcTB5QDF39wG7o7eCe05wbfq_EJH7fZ0i-S2DGo1AmW3PSJNp6u-aBqQZfojXeHTI2y6FcPeQnFVhEVn37zh26mijHb'
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onNavigate('preferences');
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] flex flex-col justify-between p-6">
      {/* Top Bar: Skip */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs font-semibold text-[#7b5900] tracking-widest uppercase">
          {slides[currentSlide].subtitle}
        </span>
        <button
          onClick={() => onNavigate('login')}
          className="text-xs font-medium text-[#877868] hover:text-[#1f1b14] px-3 py-1.5 rounded-full hover:bg-[#f6ece1] transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Hero Image Card */}
      <div className="my-6 relative w-full h-[360px] rounded-3xl overflow-hidden shadow-2xl shadow-[#7b5900]/15 border border-[#f0e4d2]">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
          <div className="text-white">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#7b5900]/90 text-white backdrop-blur-md mb-2">
              Step {currentSlide + 1} of 3
            </span>
            <h2 className="font-serif-title text-3xl font-bold leading-tight">
              {slides[currentSlide].title}
            </h2>
          </div>
        </div>
      </div>

      {/* Description & Controls */}
      <div className="space-y-6">
        <p className="text-sm text-[#52493d] leading-relaxed text-center px-4">
          {slides[currentSlide].description}
        </p>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-8 bg-[#7b5900]'
                  : 'w-2 bg-[#d2c5b1] hover:bg-[#a89983]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7b5900] via-[#c89b3c] to-[#7b5900] text-white font-semibold text-base shadow-lg shadow-[#7b5900]/25 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>{currentSlide === slides.length - 1 ? 'Get Started' : 'Continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
