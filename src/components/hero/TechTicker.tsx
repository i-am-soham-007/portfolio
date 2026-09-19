import React from 'react';
import { motion } from 'motion/react';
import { TECH_TICKER } from '../../data/portfolioData';

export const TechTicker: React.FC = () => {
  // Duplicate for seamless infinite loop
  const tickerItems = [...TECH_TICKER, ...TECH_TICKER, ...TECH_TICKER];

  return (
    <div className="relative w-full py-7 overflow-hidden border-y border-dashed border-white/10 bg-[#06080e]/60 backdrop-blur-md">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 inset-y-0 w-20 sm:w-36 bg-gradient-to-r from-[#06070a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 sm:w-36 bg-gradient-to-l from-[#06070a] to-transparent z-10 pointer-events-none" />

      <div className="flex select-none">
        <motion.div
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-3 shrink-0 hover:[animation-play-state:paused]"
        >
          {tickerItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/[0.025] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.05] transition-all group shrink-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/80 transition-colors" />
              <span className="text-xs sm:text-sm font-mono font-medium text-[#D8DCE2] group-hover:text-[#ECEFF2] transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-[#8C93A0] border border-white/[0.05]">
                {tech.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
