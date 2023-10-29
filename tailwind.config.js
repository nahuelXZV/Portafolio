/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo': '#0f172a',
        'letra': '#f5f5f5',
        'fondo_claro': '#1d2c4a',
      }
    },
  },
  plugins: [],
}

