import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  gradientWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  gradientWord,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#ECEFF2] bg-white/[0.04] border border-white/10 mb-4 shadow-[0_2px_12px_rgba(0,0,0,0.5)] ${
            isCentered ? 'mx-auto' : ''
          }`}
        >
          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-white/80" />}
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#ECEFF2] leading-[1.1] tracking-tight">
        {title}{' '}
        {gradientWord && (
          <span className="text-gradient-offwhite">
            {gradientWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-[#8C93A0] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
