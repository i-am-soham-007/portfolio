import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 origin-left pointer-events-none"
      style={{
        scaleX,
        opacity: isVisible ? 1 : 0,
        background: 'linear-gradient(90deg, #8b5cf6 0%, #38bdf8 50%, #6366f1 100%)',
        boxShadow: '0 0 10px rgba(56, 189, 248, 0.6)'
      }}
      transition={{ opacity: { duration: 0.2 } }}
      aria-hidden="true"
    />
  );
};
