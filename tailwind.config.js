/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111827',       // Deep Ink Charcoal
          charcoal: '#1A222E',   // Soft Charcoal
          slate: '#4B5563',      // Muted Slate
          muted: '#6B7280',      // Soft Muted Text
          border: '#E5E7EB',     // Border subtle
          borderDark: '#D1D5DB', // Border medium
          cream: '#FAF9F6',      // Warm Alabaster Background
          ivory: '#F4F1EA',      // Soft Ivory Surface
          sand: '#ECE7DE',       // Warm Sand Accent
          teal: {
            50: '#F0F7F6',
            100: '#E1F0EE',
            200: '#C2E0DC',
            500: '#2A7267',
            600: '#1E584F',
            700: '#174740',
            800: '#123933',
            900: '#0C2723',
          },
          gold: {
            50: '#FDFBF7',
            100: '#FAF6ED',
            200: '#F4ECD8',
            500: '#C5A880',
            600: '#B09164',
            700: '#947547',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03), 0 10px 30px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(17, 24, 39, 0.05), 0 2px 6px -1px rgba(17, 24, 39, 0.02)',
        'card-hover': '0 20px 35px -4px rgba(17, 24, 39, 0.08), 0 8px 16px -4px rgba(17, 24, 39, 0.04)',
        'elevated': '0 25px 50px -12px rgba(18, 57, 51, 0.15)',
        'floating': '0 12px 32px rgba(18, 57, 51, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        }
      }
    },
  },
  plugins: [],
}
