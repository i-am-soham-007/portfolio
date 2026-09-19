export type TemplateId = 
  | 'liquid-obsidian'
  | 'cyber-terminal'
  | 'aurora-slate'
  | 'monochrome-swiss'
  | 'sunset-nebula'
  | 'blueprint-cad';

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
}

export interface DesignTokens {
  bgPrimary: string;
  bgSurface: string;
  bgSurfaceElevated: string;
  accentPrimary: string;
  accentSecondary: string;
  accentHighlight: string;
  textPrimary: string;
  textMuted: string;
  borderSubtle: string;
  borderActive: string;
  glowColor: string;
  blobColors: [string, string, string, string];
  fontFamilyDisplay: string;
  fontFamilyMono: string;
  borderRadiusCard: string;
  borderRadiusPill: string;
  gridPatternOpacity: number;
  noiseOpacity: number;
}

export interface DesignTemplate {
  id: TemplateId;
  name: string;
  tagline: string;
  badge: string;
  archetype: string;
  description: string;
  bestFor: string;
  tokens: DesignTokens;
  palette: ColorSwatch[];
  features: string[];
  vibe: string;
  codeSnippet: string;
}
