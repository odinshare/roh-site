/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}", 
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "--primary-blue": "#0A2E5D",
        "--secondary-gold": "#F7C948",
      },
    },
  },
  plugins: [],
};
