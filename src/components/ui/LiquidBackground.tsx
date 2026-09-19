import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

interface LiquidBackgroundProps {
  intensity?: 'subtle' | 'medium' | 'vibrant';
}

export const LiquidBackground: React.FC<LiquidBackgroundProps> = ({ intensity = 'medium' }) => {
  const { currentTemplate } = useTheme();
  const { tokens } = currentTemplate;

  const opacityMap = {
    subtle: 'opacity-25',
    medium: 'opacity-40',
    vibrant: 'opacity-55'
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-700" aria-hidden="true">
      {/* Base Dark Mesh Layer */}
      <div 
        className="absolute inset-0 transition-colors duration-700" 
        style={{ backgroundColor: tokens.bgPrimary }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-grid-pattern transition-opacity duration-700" 
        style={{ opacity: tokens.gridPatternOpacity }}
      />

      {/* Ambient Liquid Gradient Blobs */}
      <div className={`absolute inset-0 ${opacityMap[intensity]} filter blur-[90px] sm:blur-[120px] md:blur-[140px]`}>
        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 50, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-[-10%] left-[10%] w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full bg-gradient-to-tr ${tokens.blobColors[0]} transition-all duration-700`}
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 80, -50, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className={`absolute top-[25%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br ${tokens.blobColors[1]} transition-all duration-700`}
        />

        {/* Blob 3 */}
        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -50, 40, 0],
            scale: [0.95, 1.2, 1, 0.95],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className={`absolute top-[65%] left-[20%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-t ${tokens.blobColors[2]} transition-all duration-700`}
        />

        {/* Blob 4 */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className={`absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full bg-gradient-to-tl ${tokens.blobColors[3]} transition-all duration-700`}
        />
      </div>

      {/* Subtle Radial Vignette to keep focus in center */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Subtle Noise Texture for high-end tactile finish */}
      <div 
        className="absolute inset-0 noise-overlay pointer-events-none transition-opacity duration-700" 
        style={{ opacity: tokens.noiseOpacity }}
      />
    </div>
  );
};
