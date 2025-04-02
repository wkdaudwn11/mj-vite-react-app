import { colors, fontSize } from './src/app/styles/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors,
      fontSize,
    },
  },
  plugins: [],
};
