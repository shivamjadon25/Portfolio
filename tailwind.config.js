/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: {
          950: '#040507',
          900: '#08090d',
          850: '#0d0f15',
          800: '#12151e',
          700: '#1c202d',
        },
        accent: {
          emerald: '#10b981',
          teal: '#14b8a6',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
        }
      },
      animation: {
        'glow-pulse': 'glowPulse 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: 0.35, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.08)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
