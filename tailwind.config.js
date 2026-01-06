/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        cream: {
          50: '#FFFEF7',
          100: '#FFFBEB',
          200: '#FEF3C7',
        },
        spice: {
          50: '#FEF7F0',
          100: '#FDEDE3',
          200: '#FBDAC8',
          300: '#F7BA9A',
          400: '#F2916A',
          500: '#EA6B3F',
          600: '#D94F2A',
          700: '#B43D22',
          800: '#903322',
          900: '#752D20',
        },
        herb: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        wood: {
          50: '#FAF8F5',
          100: '#F3EFE9',
          200: '#E8DFD3',
          300: '#D4C4B0',
          400: '#BFA68A',
          500: '#A98B6C',
          600: '#957660',
          700: '#7C6050',
          800: '#665045',
          900: '#54433B',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

