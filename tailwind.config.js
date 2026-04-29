/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'darkroom-red': '#8B0000',
        'paper-cream': '#e8dcc8',
        'archive-brown': '#6b4c2a',
        'coal': '#0a0806',
      },
      fontFamily: {
        archive: ['"Special Elite"', 'monospace'],
        editorial: ['"EB Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
