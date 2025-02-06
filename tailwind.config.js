/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.screen-wrapper': {
          '@apply bg-white flex-1 p-[12px]': {},
        },
      });
    },
  ],
};
