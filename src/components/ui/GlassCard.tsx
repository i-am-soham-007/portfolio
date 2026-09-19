import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  borderGlowColor?: 'violet' | 'cyan' | 'blue' | 'offwhite';
  dashedBorder?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowOnHover = true,
  borderGlowColor = 'offwhite',
  dashedBorder = false,
  onClick,
  interactive = false,
}) => {
  const glowStyles = {
    violet: 'hover:border-violet-500/30 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]',
    cyan: 'hover:border-cyan-500/30 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]',
    blue: 'hover:border-blue-500/30 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]',
    offwhite: 'hover:border-white/20 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.08)]',
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={interactive ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`
        relative rounded-2xl bg-[#0d0f18]/70 backdrop-blur-xl border 
        ${dashedBorder ? 'border-dashed border-white/15' : 'border-white/[0.08]'}
        shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.06)]
        transition-all duration-300
        ${glowOnHover ? glowStyles[borderGlowColor] : ''}
        ${interactive ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
