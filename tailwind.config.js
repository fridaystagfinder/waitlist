/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-purple': '#7c3aed',
        'accent-gold': '#f59e0b',
        'accent-pink': '#ec4899',
        'primary': '#070710',
        'secondary': '#0f0f18',
        'tertiary': '#141420',
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
        'heading': ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem',
        'xl': '1.25rem',
        '3xl': '1.875rem',
        '5xl': '3rem',
      },
      spacing: {
        '4': '1rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
      },
      animation: {
        'neon-pulse': 'neonPulse 2.5s ease-in-out infinite',
        'logo-glow': 'logoGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'pulse-custom': 'pulse 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.25s ease-out',
        'parallax': 'parallax 20s linear infinite',
      },
    },
  },
  plugins: [],
};