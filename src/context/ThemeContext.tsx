import React, { createContext, useContext, useState, useEffect } from 'react';
import { TemplateId, DesignTemplate } from '../types/theme';
import { DESIGN_TEMPLATES } from '../data/designTemplates';

interface ThemeContextType {
  currentTemplateId: TemplateId;
  currentTemplate: DesignTemplate;
  setTemplate: (id: TemplateId) => void;
  isStudioOpen: boolean;
  openStudio: () => void;
  closeStudio: () => void;
  toggleStudio: () => void;
  allTemplates: DesignTemplate[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'soham_portfolio_theme_template';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTemplateId, setCurrentTemplateId] = useState<TemplateId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as TemplateId;
      if (saved && DESIGN_TEMPLATES.some(t => t.id === saved)) {
        return saved;
      }
    }
    return 'liquid-obsidian';
  });

  const [isStudioOpen, setIsStudioOpen] = useState(false);

  const currentTemplate = DESIGN_TEMPLATES.find(t => t.id === currentTemplateId) || DESIGN_TEMPLATES[0];

  useEffect(() => {
    // Apply CSS variables and dataset attribute to root
    const root = document.documentElement;
    root.setAttribute('data-theme', currentTemplate.id);
    
    // Apply CSS variables
    const { tokens } = currentTemplate;
    root.style.setProperty('--bg-primary', tokens.bgPrimary);
    root.style.setProperty('--bg-surface', tokens.bgSurface);
    root.style.setProperty('--bg-surface-elevated', tokens.bgSurfaceElevated);
    root.style.setProperty('--accent-primary', tokens.accentPrimary);
    root.style.setProperty('--accent-secondary', tokens.accentSecondary);
    root.style.setProperty('--accent-highlight', tokens.accentHighlight);
    root.style.setProperty('--text-primary', tokens.textPrimary);
    root.style.setProperty('--text-muted', tokens.textMuted);
    root.style.setProperty('--border-subtle', tokens.borderSubtle);
    root.style.setProperty('--border-active', tokens.borderActive);
    root.style.setProperty('--glow-color', tokens.glowColor);
    root.style.setProperty('--card-radius', tokens.borderRadiusCard);
    root.style.setProperty('--pill-radius', tokens.borderRadiusPill);

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, currentTemplate.id);
    }
  }, [currentTemplate]);

  const setTemplate = (id: TemplateId) => {
    setCurrentTemplateId(id);
  };

  const openStudio = () => setIsStudioOpen(true);
  const closeStudio = () => setIsStudioOpen(false);
  const toggleStudio = () => setIsStudioOpen(prev => !prev);

  return (
    <ThemeContext.Provider
      value={{
        currentTemplateId,
        currentTemplate,
        setTemplate,
        isStudioOpen,
        openStudio,
        closeStudio,
        toggleStudio,
        allTemplates: DESIGN_TEMPLATES
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
