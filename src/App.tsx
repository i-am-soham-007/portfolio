import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LiquidBackground } from './components/ui/LiquidBackground';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { IntegrationsSection } from './components/integrations/IntegrationsSection';
import { GitHubSection } from './components/github/GitHubSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Suppress harmless motion/react layout list warnings
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('Each child in a list should have a unique') ||
         args[0].includes('framer-motion'))
      ) {
        return;
      }
      originalConsoleError(...args);
    };
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#06070a] text-[#ECEFF2] selection:bg-white/20 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-700">
        {/* Short Entrance Loading Screen */}
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

        {/* Ambient Liquid Gradients & Atmosphere */}
        <LiquidBackground intensity="low" />

        {/* Precision Desktop Magnetic Cursor */}
        <CustomCursor />

        {/* Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Floating Liquid-Glass Navigation */}
        <Navbar />

        {/* Main Sections Stream */}
        <main className="relative z-10">
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. About & Engineering Foundations */}
          <AboutSection />

          {/* 3. Technical Skills & Architecture Gauges */}
          <SkillsSection />

          {/* 4. Production Systems & Projects */}
          <ProjectsSection />

          {/* 5. Distributed Integrations & Pipelines */}
          <IntegrationsSection />

          {/* 6. Open Source & GitHub Repositories */}
          <GitHubSection />

          {/* 7. Contact & Direct Message Dispatch */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
