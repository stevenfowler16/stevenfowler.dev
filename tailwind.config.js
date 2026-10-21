/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Rubik"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        accent: {
          light: '#c561f6',
          DEFAULT: '#7611a6',
          dark: '#1c0056',
        },
      },
    },
  },
  plugins: [],
};
