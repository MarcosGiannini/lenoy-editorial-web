/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#fdf5f2',
          100: '#fbe8e0',
          200: '#f6cfc0',
          300: '#eeae97',
          400: '#e4826a',
          500: '#c4603a',
          600: '#b04e2c',
          700: '#943f25',
          800: '#7b3523',
          900: '#682f22',
        },
        forest: {
          50: '#f2f7ec',
          100: '#e0ecd3',
          200: '#c4daab',
          300: '#9ec27a',
          400: '#7aa852',
          500: '#5d8c38',
          600: '#47702b',
          700: '#2d5016',
          800: '#264418',
          900: '#213a17',
        },
        sunset: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#e8863a',
          600: '#c86d22',
          700: '#a85420',
          800: '#8a4520',
          900: '#72391f',
        },
        cream: {
          50: '#fdfcf8',
          100: '#faf8f3',
          200: '#f5f0e8',
          300: '#ede5d5',
          400: '#ddd0b8',
          500: '#c8b898',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
