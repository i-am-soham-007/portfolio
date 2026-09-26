import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'motion/react';

export type SectionAnimationTheme = 
  | 'terminal'       // Cyber / Terminal scanline & grid glitch entry (About)
  | 'circuit'        // Digital circuit trace & binary pulse entry (Backend Specialization)
  | 'matrix'         // Particle stream & matrix data flow (Technical Skills)
  | 'hologram'       // Holographic card deployment & 3D tilt (Projects)
  | 'timeline'       // Pulse tracer wire & laser node expansion (Experience)
  | 'radar';         // Signal ping & beacon broadcast (Contact)

interface SectionWrapperProps {
  id?: string;
  theme?: SectionAnimationTheme;
  className?: string;
  children: React.ReactNode;
}

const themeVariants: Record<SectionAnimationTheme, Variants> = {
  terminal: {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: 'blur(8px)',
      scale: 0.97
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: { 
        duration: 0.85, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.12
      }
    }
  },
  circuit: {
    hidden: { 
      opacity: 0, 
      x: -30,
      filter: 'blur(6px)'
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.9, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  },
  matrix: {
    hidden: { 
      opacity: 0, 
      scale: 0.94,
      y: 30
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08
      }
    }
  },
  hologram: {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 12
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.95, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15
      }
    }
  },
  timeline: {
    hidden: { 
      opacity: 0, 
      x: 30,
      filter: 'blur(4px)'
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.85, 
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.12
      }
    }
  },
  radar: {
    hidden: { 
      opacity: 0, 
      scale: 0.96,
      y: 35
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    }
  }
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  theme = 'terminal',
  className = '',
  children
}) => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  const backgroundY = useTransform(smoothProgress, [0, 1], ['-6%', '6%']);
  const beamOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 0.7, 0.7, 0]);

  return (
    <motion.section
      ref={containerRef}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={themeVariants[theme]}
      className={`relative py-24 sm:py-32 overflow-hidden ${className}`}
    >
      {/* Dynamic Cyber Tech Ambient Elements per section theme */}
      
      {/* Theme 1: Terminal - Subtle Scanline & Grid HUD */}
      {theme === 'terminal' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            style={{ y: backgroundY }} 
            className="absolute -top-32 right-10 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-3xl" 
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </div>
      )}

      {/* Theme 2: Circuit - Backend Data Trace Lines */}
      {theme === 'circuit' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            style={{ y: backgroundY, opacity: beamOpacity }} 
            className="absolute -bottom-24 left-12 w-96 h-96 bg-indigo-500/[0.04] rounded-full blur-3xl" 
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent" />
          {/* Animated horizontal laser beam */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            className="absolute top-0 left-0 w-48 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-60"
          />
        </div>
      )}

      {/* Theme 3: Matrix - Technical Skill Grid Matrix Pulse */}
      {theme === 'matrix' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            style={{ y: backgroundY }} 
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/[0.02] rounded-full blur-3xl" 
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
      )}

      {/* Theme 4: Hologram - Project Showcase 3D Strobe Grid */}
      {theme === 'hologram' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            style={{ y: backgroundY }} 
            className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-3xl" 
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
          <motion.div 
            animate={{ x: ['200%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            className="absolute top-0 right-0 w-64 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60"
          />
        </div>
      )}

      {/* Theme 5: Timeline - Experience Chrono Node Guide */}
      {theme === 'timeline' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            style={{ y: backgroundY }} 
            className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/[0.03] rounded-full blur-3xl" 
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
        </div>
      )}

      {/* Theme 6: Radar - Contact Beacon Pulse */}
      {theme === 'radar' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            style={{ y: backgroundY }} 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/[0.03] rounded-full blur-3xl" 
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </div>
      )}

      {/* Main Section Content with smooth reactive container */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
};
