/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'p-red': 'rgba(255, 0, 114, 1)',
        's-red': 'rgba(255, 229, 241, 1)'
      },
      animation: {
        fadeMenu: 'fadeIn 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { backgroundColor: theme('rgba(0, 0, 0, .6)') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
};
