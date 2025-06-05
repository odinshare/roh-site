// postcss.config.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},   // ← use the new adapter package
    autoprefixer: {},
  },
};