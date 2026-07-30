import React from 'react';

interface ScreenFrameProps {
  children: React.ReactNode;
  isSimulatorView: boolean;
}

export const ScreenFrame: React.FC<ScreenFrameProps> = ({ children, isSimulatorView }) => {
  if (!isSimulatorView) {
    return (
      <div className="min-h-screen bg-[#fff8f2] text-[#1f1b14] relative max-w-md mx-auto shadow-2xl overflow-x-hidden border-x border-[#f0e4d2]">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#191611] flex items-center justify-center p-2 sm:p-6 overflow-hidden select-none">
      {/* Outer Mobile Device Frame */}
      <div className="relative w-full max-w-[420px] h-[860px] max-h-[96vh] rounded-[48px] p-3 bg-gradient-to-b from-[#353028] via-[#1f1b14] to-[#353028] shadow-2xl shadow-black/80 ring-1 ring-[#7b5900]/40 flex flex-col overflow-hidden">
        {/* Notch & Status Bar */}
        <div className="h-7 w-full flex items-center justify-between px-6 z-40 bg-[#fff8f2] text-[#1f1b14] text-[11px] font-bold rounded-t-[36px]">
          <span>9:41</span>
          {/* Dynamic Island / Notch */}
          <div className="w-24 h-4 bg-[#1f1b14] rounded-full mx-auto shadow-inner flex items-center justify-end px-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="material-symbols-outlined text-[14px] leading-none">signal_cellular_alt</span>
            <span className="material-symbols-outlined text-[14px] leading-none">wifi</span>
            <span className="material-symbols-outlined text-[14px] leading-none">battery_full</span>
          </div>
        </div>

        {/* Screen Content Window */}
        <div className="flex-1 w-full bg-[#fff8f2] rounded-b-[36px] overflow-y-auto no-scrollbar relative flex flex-col">
          {children}
        </div>

        {/* Home Indicator Bar */}
        <div className="h-4 w-full bg-[#1f1b14] flex items-center justify-center pt-1 rounded-b-[40px]">
          <div className="w-32 h-1 bg-[#d2c5b1]/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
