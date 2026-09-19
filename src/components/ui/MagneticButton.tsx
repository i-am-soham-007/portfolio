import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  className = '',
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    setPosition({ x: distanceX * 0.15, y: distanceY * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-3.5 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const variantClasses = {
    primary: 'bg-[#ECEFF2] text-zinc-950 hover:bg-[#DDE1E6] font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/60',
    secondary: 'bg-white/[0.035] text-[#D8DCE2] hover:bg-white/[0.07] hover:text-[#ECEFF2] font-medium border border-dashed border-white/15 backdrop-blur-md hover:border-white/25',
    ghost: 'bg-transparent text-[#9CA3AF] hover:text-[#ECEFF2] hover:bg-white/[0.04] font-medium border border-transparent hover:border-white/10',
    glow: 'bg-gradient-to-b from-white/[0.11] to-white/[0.035] hover:from-white/[0.16] hover:to-white/[0.06] text-[#ECEFF2] hover:text-white font-medium shadow-[0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] border border-white/20 hover:border-white/35 backdrop-blur-xl',
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      className="inline-block"
    >
      <div
        className={`inline-flex items-center justify-center rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick as any}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-block bg-transparent border-0 p-0 focus:outline-none"
      {...(props as any)}
    >
      {content}
    </button>
  );
};
