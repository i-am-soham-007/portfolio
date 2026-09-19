import { DesignTemplate } from '../types/theme';

export const DESIGN_TEMPLATES: DesignTemplate[] = [
  {
    id: 'liquid-obsidian',
    name: 'Liquid Obsidian',
    tagline: 'Modern Dark Luxury & Organic Liquid Glass',
    badge: 'Default Production',
    archetype: 'Senior Full-Stack & Systems Engineer',
    vibe: 'Sophisticated, fluid, modern high-end software craftsmanship',
    description: 'Deep obsidian canvas layered with organic moving liquid blobs, translucent glassmorphic frosted panels, and electric violet with neon cyan accents.',
    bestFor: 'Modern full-stack web applications, SaaS platforms, high-end portfolio experiences.',
    tokens: {
      bgPrimary: '#050508',
      bgSurface: 'rgba(10, 10, 18, 0.75)',
      bgSurfaceElevated: '#11111f',
      accentPrimary: '#8b5cf6', // Violet 500
      accentSecondary: '#06b6d4', // Cyan 500
      accentHighlight: '#38bdf8', // Sky 400
      textPrimary: '#eceff2',
      textMuted: '#94a3b8',
      borderSubtle: 'rgba(255, 255, 255, 0.08)',
      borderActive: 'rgba(139, 92, 246, 0.45)',
      glowColor: 'rgba(139, 92, 246, 0.35)',
      blobColors: [
        'from-violet-600/60 via-purple-700/50 to-indigo-600/40',
        'from-cyan-500/50 via-sky-600/40 to-blue-700/30',
        'from-indigo-700/40 via-violet-800/30 to-purple-900/30',
        'from-cyan-600/35 via-violet-700/30 to-transparent'
      ],
      fontFamilyDisplay: 'Space Grotesk, Plus Jakarta Sans, sans-serif',
      fontFamilyMono: 'JetBrains Mono, Fira Code, monospace',
      borderRadiusCard: '16px',
      borderRadiusPill: '9999px',
      gridPatternOpacity: 0.6,
      noiseOpacity: 0.035,
    },
    palette: [
      { name: 'Obsidian Black', hex: '#050508', role: 'Primary Canvas Background' },
      { name: 'Electric Violet', hex: '#8B5CF6', role: 'Primary Accent & Focus Rings' },
      { name: 'Neon Cyan', hex: '#06B6D4', role: 'Secondary Accent & Data Highlights' },
      { name: 'Pure Frost White', hex: '#F5F5F7', role: 'High-Contrast Display Typography' },
      { name: 'Muted Zinc Slate', hex: '#94A3B8', role: 'Subtle Body Text & Metadata' },
    ],
    features: [
      'Multi-blob ambient liquid blur animations',
      'High-contrast backdrop blur frosted glass',
      'Dual-gradient text pairings (Violet + Sky)',
      'Subtle noise tactile grain finish',
      'Custom magnetic interactive cursor'
    ],
    codeSnippet: `:root[data-theme="liquid-obsidian"] {
  --bg-primary: #050508;
  --accent-primary: #8b5cf6;
  --accent-secondary: #06b6d4;
  --glass-bg: rgba(10, 10, 18, 0.75);
  --border-subtle: rgba(255, 255, 255, 0.08);
}`
  },

  {
    id: 'cyber-terminal',
    name: 'Cyber Neo-Terminal',
    tagline: 'High-Tech Hacker & Distributed CLI Systems',
    badge: 'Hacker / Systems CLI',
    archetype: 'Backend, DevOps & Low-Level Systems Architect',
    vibe: 'Raw technical horsepower, matrix telemetry, CRT phosphor command line',
    description: 'Ultra-dark pitch canvas featuring emerald matrix phosphor glow, amber signal warnings, CRT scanlines, and monospaced command-line telemetry.',
    bestFor: 'Backend engineering, high-throughput microservices, security & infrastructure tooling.',
    tokens: {
      bgPrimary: '#020408',
      bgSurface: 'rgba(5, 10, 16, 0.85)',
      bgSurfaceElevated: '#081420',
      accentPrimary: '#10b981', // Emerald 500
      accentSecondary: '#f59e0b', // Amber 500
      accentHighlight: '#22c55e', // Green 500
      textPrimary: '#e2e8f0',
      textMuted: '#64748b',
      borderSubtle: 'rgba(16, 185, 129, 0.15)',
      borderActive: 'rgba(16, 185, 129, 0.55)',
      glowColor: 'rgba(16, 185, 129, 0.35)',
      blobColors: [
        'from-emerald-600/50 via-green-700/40 to-teal-800/30',
        'from-amber-500/40 via-yellow-600/30 to-emerald-900/20',
        'from-teal-800/40 via-emerald-900/30 to-black',
        'from-emerald-500/30 via-amber-600/20 to-transparent'
      ],
      fontFamilyDisplay: 'JetBrains Mono, Fira Code, monospace',
      fontFamilyMono: 'JetBrains Mono, monospace',
      borderRadiusCard: '10px',
      borderRadiusPill: '6px',
      gridPatternOpacity: 0.85,
      noiseOpacity: 0.05,
    },
    palette: [
      { name: 'Pitch Void', hex: '#020408', role: 'Matrix Canvas Background' },
      { name: 'Phosphor Emerald', hex: '#10B981', role: 'Primary Command Glow & Prompts' },
      { name: 'Amber Telemetry', hex: '#F59E0B', role: 'Status Alarms & Secondary Tokens' },
      { name: 'Terminal Green', hex: '#22C55E', role: 'Active Signals & Verified Nodes' },
      { name: 'Matrix Slate', hex: '#64748B', role: 'Code Comments & Metadata' },
    ],
    features: [
      'High-contrast scanline & telemetry overlays',
      'Phosphor glowing border halos',
      'Sharp technical 10px corner radius',
      'Command prompt indicator animations',
      'CRT cathode-tube color grading'
    ],
    codeSnippet: `:root[data-theme="cyber-terminal"] {
  --bg-primary: #020408;
  --accent-primary: #10b981;
  --accent-secondary: #f59e0b;
  --glass-bg: rgba(5, 10, 16, 0.85);
  --border-subtle: rgba(16, 185, 129, 0.15);
}`
  },

  {
    id: 'aurora-slate',
    name: 'Aurora Slate',
    tagline: 'Nordic Oceanic Frost & Deep Cloud Architecture',
    badge: 'Calm Scandinavian Glass',
    archetype: 'Cloud Architect & Distributed Services Lead',
    vibe: 'Serene, crystal clear, oceanic depth with arctic teal & royal sapphire',
    description: 'Deep Nordic slate canvas illuminated by arctic teal and royal sapphire aurora light streams, paired with frosted glass cards and refined spacing.',
    bestFor: 'Cloud platforms, fintech architectures, analytics engines, scalable databases.',
    tokens: {
      bgPrimary: '#050b14',
      bgSurface: 'rgba(8, 18, 32, 0.7)',
      bgSurfaceElevated: '#0e2440',
      accentPrimary: '#14b8a6', // Teal 500
      accentSecondary: '#3b82f6', // Blue 500
      accentHighlight: '#38bdf8', // Sky 400
      textPrimary: '#f0fdf4',
      textMuted: '#94a3b8',
      borderSubtle: 'rgba(20, 184, 166, 0.12)',
      borderActive: 'rgba(20, 184, 166, 0.45)',
      glowColor: 'rgba(20, 184, 166, 0.3)',
      blobColors: [
        'from-teal-600/50 via-cyan-700/40 to-blue-800/30',
        'from-blue-600/40 via-sky-600/40 to-indigo-900/30',
        'from-cyan-800/40 via-teal-900/30 to-slate-950',
        'from-teal-500/30 via-blue-600/20 to-transparent'
      ],
      fontFamilyDisplay: 'Plus Jakarta Sans, sans-serif',
      fontFamilyMono: 'Fira Code, monospace',
      borderRadiusCard: '18px',
      borderRadiusPill: '9999px',
      gridPatternOpacity: 0.5,
      noiseOpacity: 0.025,
    },
    palette: [
      { name: 'Deep Nordic Slate', hex: '#050B14', role: 'Calm Night Canvas' },
      { name: 'Arctic Teal', hex: '#14B8A6', role: 'Primary Aurora Highlights' },
      { name: 'Royal Sapphire', hex: '#3B82F6', role: 'Secondary Flow Accent' },
      { name: 'Ice Sky', hex: '#38BDF8', role: 'Interactive Elements & Rings' },
      { name: 'Glacier White', hex: '#F0FDF4', role: 'Crisp Headings' },
    ],
    features: [
      'Nordic aurora borealis ambient color flows',
      'Ultra-smooth frosted glass refraction',
      'Deep oceanic depth elevation hierarchy',
      'Restful, low-fatigue dark palette',
      'Fluid interactive state transitions'
    ],
    codeSnippet: `:root[data-theme="aurora-slate"] {
  --bg-primary: #050b14;
  --accent-primary: #14b8a6;
  --accent-secondary: #3b82f6;
  --glass-bg: rgba(8, 18, 32, 0.7);
  --border-subtle: rgba(20, 184, 166, 0.12);
}`
  },

  {
    id: 'monochrome-swiss',
    name: 'Monochrome Swiss',
    tagline: 'Architectural Editorial & Ultra-Crisp Precision',
    badge: 'Pure Architectural Minimal',
    archetype: 'Principal Engineer & Clean Code Purist',
    vibe: 'Disciplined, typographic, razor-sharp geometric clarity',
    description: 'High-contrast pure black and crisp white palette inspired by International Swiss typographic design, with 1px hairline dividers and zero unnecessary flourishes.',
    bestFor: 'Executive engineering portfolios, design systems leads, architectural documentation.',
    tokens: {
      bgPrimary: '#08080a',
      bgSurface: 'rgba(16, 16, 20, 0.9)',
      bgSurfaceElevated: '#1a1a22',
      accentPrimary: '#ffffff', // Crisp White
      accentSecondary: '#a1a1aa', // Zinc 400
      accentHighlight: '#e4e4e7', // Zinc 200
      textPrimary: '#ffffff',
      textMuted: '#a1a1aa',
      borderSubtle: 'rgba(255, 255, 255, 0.12)',
      borderActive: 'rgba(255, 255, 255, 0.6)',
      glowColor: 'rgba(255, 255, 255, 0.15)',
      blobColors: [
        'from-zinc-700/25 via-zinc-800/20 to-transparent',
        'from-zinc-600/20 via-zinc-700/15 to-transparent',
        'from-zinc-800/20 via-zinc-900/15 to-transparent',
        'from-white/10 via-zinc-700/15 to-transparent'
      ],
      fontFamilyDisplay: 'Plus Jakarta Sans, sans-serif',
      fontFamilyMono: 'JetBrains Mono, monospace',
      borderRadiusCard: '8px',
      borderRadiusPill: '4px',
      gridPatternOpacity: 0.4,
      noiseOpacity: 0.02,
    },
    palette: [
      { name: 'Charcoal Black', hex: '#08080A', role: 'Pure Minimalist Background' },
      { name: 'Crisp White', hex: '#FFFFFF', role: 'High-Contrast Accent & Focus' },
      { name: 'Zinc Silver', hex: '#A1A1AA', role: 'Body Copy & Architecture Specs' },
      { name: 'Hairline Divider', hex: 'rgba(255,255,255,0.12)', role: '1px Structural Grid' },
      { name: 'Graphite Elevated', hex: '#1A1A22', role: 'Card & Surface Layers' },
    ],
    features: [
      'Strict Swiss typographic baseline grid',
      'Geometric 8px border-radius structure',
      'Hairline 1px contrast borders',
      'Zero distracting saturated glows',
      'Uncompromising content legibility'
    ],
    codeSnippet: `:root[data-theme="monochrome-swiss"] {
  --bg-primary: #08080a;
  --accent-primary: #ffffff;
  --accent-secondary: #a1a1aa;
  --glass-bg: rgba(16, 16, 20, 0.9);
  --border-subtle: rgba(255, 255, 255, 0.12);
}`
  },

  {
    id: 'sunset-nebula',
    name: 'Sunset Nebula',
    tagline: 'Vibrant Cosmic Flare & Creative AI Synergy',
    badge: 'Creative / AI Vibe',
    archetype: 'Creative Technologist & AI Pioneer',
    vibe: 'Warm, magnetic, vibrant synthwave and generative AI pulse',
    description: 'Cosmic deep-violet background illuminated with warm sunset fuchsia, fiery neon orange, and radiant purple blooms for high energy and creativity.',
    bestFor: 'Creative engineering, generative AI products, cutting-edge startup founders.',
    tokens: {
      bgPrimary: '#0a0512',
      bgSurface: 'rgba(20, 10, 30, 0.75)',
      bgSurfaceElevated: '#221035',
      accentPrimary: '#ec4899', // Pink 500
      accentSecondary: '#f97316', // Orange 500
      accentHighlight: '#a855f7', // Purple 500
      textPrimary: '#fdf4ff',
      textMuted: '#cbd5e1',
      borderSubtle: 'rgba(236, 72, 153, 0.15)',
      borderActive: 'rgba(236, 72, 153, 0.5)',
      glowColor: 'rgba(236, 72, 153, 0.35)',
      blobColors: [
        'from-pink-600/50 via-purple-700/40 to-indigo-800/30',
        'from-orange-500/40 via-amber-600/30 to-pink-800/20',
        'from-fuchsia-700/40 via-purple-800/30 to-slate-950',
        'from-rose-500/30 via-orange-600/25 to-transparent'
      ],
      fontFamilyDisplay: 'Plus Jakarta Sans, sans-serif',
      fontFamilyMono: 'Fira Code, monospace',
      borderRadiusCard: '20px',
      borderRadiusPill: '9999px',
      gridPatternOpacity: 0.5,
      noiseOpacity: 0.04,
    },
    palette: [
      { name: 'Cosmic Violet', hex: '#0A0512', role: 'Deep Space Background' },
      { name: 'Sunset Fuchsia', hex: '#EC4899', role: 'Vibrant Primary Glow' },
      { name: 'Neon Solar Orange', hex: '#F97316', role: 'Energy Accent & Highlights' },
      { name: 'Radiant Purple', hex: '#A855F7', role: 'Secondary Ambient Glow' },
      { name: 'Starlight White', hex: '#FDF4FF', role: 'Text Elements' },
    ],
    features: [
      'Warm sunset solar radial gradients',
      'High-vibrance neon glow shadows',
      'Smooth 20px organic pill curves',
      'Dynamic multi-color gradient text',
      'High creative velocity feel'
    ],
    codeSnippet: `:root[data-theme="sunset-nebula"] {
  --bg-primary: #0a0512;
  --accent-primary: #ec4899;
  --accent-secondary: #f97316;
  --glass-bg: rgba(20, 10, 30, 0.75);
  --border-subtle: rgba(236, 72, 153, 0.15);
}`
  },

  {
    id: 'blueprint-cad',
    name: 'Blueprint CAD',
    tagline: 'Technical Schematic & Distributed Drafting Board',
    badge: 'System Schematic CAD',
    archetype: 'System Designer & Cloud Enterprise Architect',
    vibe: 'Calculated, structural, technical blueprint with cyan drafting grids',
    description: 'Deep navy engineering drafting canvas overlaid with structural blueprint grid lines, technical CAD cyan lines, and coordinate crosshair markers.',
    bestFor: 'Enterprise system architecture, distributed databases, complex network topologies.',
    tokens: {
      bgPrimary: '#040d21',
      bgSurface: 'rgba(6, 20, 48, 0.8)',
      bgSurfaceElevated: '#0a2e68',
      accentPrimary: '#00e5ff', // CAD Cyan
      accentSecondary: '#38bdf8', // Sky 400
      accentHighlight: '#818cf8', // Indigo 400
      textPrimary: '#f8fafc',
      textMuted: '#94a3b8',
      borderSubtle: 'rgba(0, 229, 255, 0.15)',
      borderActive: 'rgba(0, 229, 255, 0.55)',
      glowColor: 'rgba(0, 229, 255, 0.3)',
      blobColors: [
        'from-cyan-600/40 via-blue-700/40 to-indigo-900/30',
        'from-sky-500/35 via-cyan-600/35 to-slate-900/30',
        'from-blue-800/40 via-cyan-900/30 to-black',
        'from-cyan-400/25 via-blue-600/20 to-transparent'
      ],
      fontFamilyDisplay: 'Fira Code, JetBrains Mono, monospace',
      fontFamilyMono: 'Fira Code, monospace',
      borderRadiusCard: '6px',
      borderRadiusPill: '4px',
      gridPatternOpacity: 0.9,
      noiseOpacity: 0.03,
    },
    palette: [
      { name: 'Drafting Board Navy', hex: '#040D21', role: 'CAD Technical Canvas' },
      { name: 'CAD Electric Cyan', hex: '#00E5FF', role: 'Vector Schematics & Data Pipes' },
      { name: 'Blueprint Sky Blue', hex: '#38BDF8', role: 'Secondary Dimensions' },
      { name: 'Drafting Grid Line', hex: '#1E3A8A', role: 'Structural Engineering Grid' },
      { name: 'Chalk White', hex: '#F8FAFC', role: 'Technical Annotation Text' },
    ],
    features: [
      'Technical engineering grid background',
      'Corner alignment crosshair coordinates (+)',
      'Sharp technical 6px blueprint borders',
      'Monospaced architectural specifications',
      'Precision system diagramming visual cues'
    ],
    codeSnippet: `:root[data-theme="blueprint-cad"] {
  --bg-primary: #040d21;
  --accent-primary: #00e5ff;
  --accent-secondary: #38bdf8;
  --glass-bg: rgba(6, 20, 48, 0.8);
  --border-subtle: rgba(0, 229, 255, 0.15);
}`
  }
];
