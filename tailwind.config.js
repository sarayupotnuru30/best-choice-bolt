/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E91E63',
          50: '#FCE4EC',
          100: '#F8BBD0',
          200: '#F48FB1',
          300: '#F06292',
          400: '#EC407A',
          500: '#E91E63',
          600: '#D81B60',
          700: '#C2185B',
          800: '#AD1457',
          900: '#880E4F',
        },
        secondary: '#FCE4EC',
        brand: {
          bg: '#FFFFFF',
          section: '#FFF8FA',
          text: '#2D2D2D',
          muted: '#757575',
          border: '#F0E0E6',
        },
        success: {
          DEFAULT: '#2E7D32',
          light: '#E8F5E9',
        },
        warning: {
          DEFAULT: '#F57F17',
          light: '#FFF8E1',
        },
        error: {
          DEFAULT: '#C62828',
          light: '#FFEBEE',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
      },
      boxShadow: {
        soft: '0 2px 20px rgba(233,30,99,0.08)',
        card: '0 4px 24px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 40px rgba(233,30,99,0.15)',
        nav: '0 2px 20px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
