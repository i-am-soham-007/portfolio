import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508]"
          aria-hidden="true"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" />

          {/* Monogram Box */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-20 h-20 rounded-2xl bg-zinc-900/90 border border-violet-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] backdrop-blur-xl"
            >
              <span className="text-2xl font-black tracking-wider text-gradient-accent font-mono">
                SR
              </span>

              {/* Orbiting particle ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-4px] rounded-2xl border border-dashed border-cyan-400/30 pointer-events-none"
              />
            </motion.div>

            {/* Subtext and Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mt-6 flex flex-col items-center"
            >
              <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-2">
                Initializing Systems
              </div>
              <div className="w-36 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-400"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
