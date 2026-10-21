/**
 * Centralized Color Palette for Portfolio
 * 
 * This file contains all colors used throughout the application
 * organized by semantic meaning and theme variants.
 */

export const colors = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Primary Pink Palette
  pink: {
    25:  '#FEF8FA', // Whisper Pink
    50:  '#FFF5F7', // Blush White
    100: '#FAE8ED', // Pale Blush
    200: '#F8BBD0', // Baby Pink
    300: '#F48FB1', // Rose Pink
    400: '#F06292', // Warm Pink
    500: '#D6336C', // Deep Rose
    600: '#C2185B', // Raspberry Pink
    700: '#AD1457', // Dark Raspberry
    800: '#8B5A65', // Muted Mauve
    900: '#6B4C57', // Dusty Plum
  },

  // Dark theme colors
  dark: {
    50: '#F8FAFC',        
    100: '#F1F5F9',       
    200: '#E2E8F0',       
    300: '#CBD5E1',      
    400: '#94A3B8',       
    500: '#64748B',       
    600: '#475569',       
    700: '#334155',       
    800: '#1E293B',       
    900: '#0F172A',       
    950: '#020617',       
  },

  // Semantic colors
  background: {
    light: {
      primary: '#FFFFFF',
      secondary: '#FFF5F7',
      gradient: 'linear-gradient(180deg, rgb(254 245 245) 0%, rgb(254 240 240) 50%, rgb(254 235 235) 100%)',
      gradientEnd: 'rgb(254 235 235)', // End color of the main gradient for seamless transitions
      overlay: 'rgba(255, 255, 255, 0.5)',
      // Section-specific gradients - mostly white with very light pink brush at edges
      sections: {
        about: 'linear-gradient(180deg, rgb(255 255 255) 0%, rgb(254 250 252) 30%, #FEF8FA 100%)',
        skills: 'linear-gradient(180deg, rgb(254 248 250) 0%, rgb(254 252 253) 30%, rgb(254 252 253) 70%, rgb(255 255 255) 100%)',
        projects: 'linear-gradient(180deg, rgb(254 248 250) 0%, rgb(255 255 255) 15%, rgb(255 255 255) 85%, rgb(254 248 250) 100%)',
        experience: 'linear-gradient(180deg, rgb(254 248 250) 0%, rgb(254 252 253) 25%, rgb(254 252 253) 75%, rgb(254 248 250) 100%)',
        certifications: 'linear-gradient(180deg, rgb(255 255 255) 0%, rgb(255 255 255) 60%, rgb(254 252 253) 100%)',
      },
    },
    dark: {
      primary: '#0F172A',
      secondary: '#1E293B',
      gradient: '#0A0F1B',
      gradientEnd: '#0A0F1B', // Consistent dark background for seamless transitions
      overlay: 'rgba(0, 0, 0, 0.7)',
      // Dark mode sections maintain consistent dark background
      sections: {
        about: '#0A0F1B',
        skills: '#0A0F1B',
        projects: '#0A0F1B',
        experience: '#0A0F1B',
        certifications: '#0A0F1B',
      },
    },
  },

  // Text colors
  text: {
    light: {
      primary: '#1F2937',     // rgb(31, 41, 55)
      secondary: '#4B5563',   // rgb(75, 85, 99)
      tertiary: '#6B7280',    // rgb(107, 114, 128)
      accent: '#8B5A65',      // Pink text
      pink: '#BE185D',        // rgb(190, 24, 93)
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#FDD5DF',
      tertiary: '#EABEC3',
      accent: '#D9A5AC',
      pink: '#EABEC3',
    },
  },

  // Interactive elements
  interactive: {
    light: {
      primary: 'rgba(234, 190, 195, 0.1)',
      hover: 'rgba(234, 190, 195, 0.2)',
      active: '#F06292',
      focus: 'rgba(234, 190, 195, 0.3)',
    },
    dark: {
      primary: 'rgba(234, 190, 195, 0.1)',
      hover: 'rgba(234, 190, 195, 0.2)',
      active: '#EABEC3',
      focus: 'rgba(234, 190, 195, 0.3)',
    },
  },

  // Navigation specific
  navigation: {
    light: {
      background: 'rgba(255, 232, 239, 0.4)',
      backgroundScrolled: 'rgba(255, 232, 239, 0.6)',
      border: 'rgba(255, 194, 209, 0.15)',
      borderScrolled: 'rgba(255, 194, 209, 0.2)',
      shadow: 'rgba(255, 194, 209, 0.08)',
      shadowScrolled: 'rgba(255, 194, 209, 0.12)',
      mobile: 'rgba(254, 248, 250, 0.95)',
    },
    dark: {
      background: 'rgba(10, 15, 27, 0.4)',
      backgroundScrolled: 'rgba(10, 15, 27, 0.6)',
      border: 'rgba(234, 190, 195, 0.1)',
      borderScrolled: 'rgba(234, 190, 195, 0.15)',
      shadow: 'rgba(0, 0, 0, 0.2)',
      shadowScrolled: 'rgba(0, 0, 0, 0.3)',
      mobile: 'rgba(10, 15, 27, 0.95)',
    },
  },

  // Button variants
  button: {
    primary: {
      light: {
        background: '#D6336C',
        text: '#FFFFFF',
        hover: '#C2185B',
        shadow: 'rgba(214, 51, 108, 0.25)',
      },
      dark: {
        background: '#EABEC3',
        text: '#1F2937',
        hover: '#F8BBD0',
        shadow: 'rgba(234, 190, 195, 0.25)',
      },
    },
    secondary: {
      light: {
        background: 'rgba(255, 245, 247, 0.9)',
        text: '#6B4C57',
        border: '#F8BBD0',
        hover: '#FAE8ED',
      },
      dark: {
        background: 'rgba(31, 41, 55, 0.9)',
        text: '#FFFFFF',
        border: '#374151',
        hover: 'rgba(234, 190, 195, 0.1)',
      },
    },
    outline: {
      light: {
        background: 'transparent',
        text: '#C2185B',
        border: '#F8BBD0',
        hover: '#FFF5F7',
      },
      dark: {
        background: '#1F2937',
        text: '#EABEC3',
        border: '#D9A5AC',
        hover: 'rgba(234, 190, 195, 0.1)',
      },
    },
  },
  // Card colors
  card: {
    light: {
      background: '#FFFFFF',
      border: 'rgba(234, 190, 195, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.1)',
    },
    dark: {
      background: '#1F2937',
      border: 'rgba(55, 65, 81, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.3)',
    },
  },

  // Special effects
  effects: {
    glow: 'rgba(255, 194, 209, 0.3)',
    dropShadow: 'rgba(234, 190, 195, 0.3)',
    textShadow: 'rgba(0, 0, 0, 0.1)',
    blur: 'rgba(255, 255, 255, 0.1)',
  },

  // Utility colors
  utility: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    neutral: '#6B7280',
  },

  // Special colors
  special: {
    dragMe: '#EC4999',       // Hot pink for drag me star (rgb(236, 73, 153))
    aurora: {
      dark: '#FF94B4',       // Pink aurora for dark mode
      light: {
        1: '#F8BBD0',        // Light pink aurora stop 1
        2: '#FAE8ED',        // Light pink aurora stop 2
        3: '#FFF5F7',        // Light pink aurora stop 3
      }
    }
  },

} as const;

// Type definitions for better TypeScript support
type ColorTheme = 'light' | 'dark';
type ColorVariant = keyof typeof colors;

export type { ColorTheme, ColorVariant };

// Helper function to get theme-specific colors
export const getThemeColors = (theme: ColorTheme) => ({
  background: colors.background[theme],
  text: colors.text[theme],
  interactive: colors.interactive[theme],
  navigation: colors.navigation[theme],
  button: {
    primary: colors.button.primary[theme],
    secondary: colors.button.secondary[theme],
    outline: colors.button.outline[theme],
  },
  card: colors.card[theme],
});