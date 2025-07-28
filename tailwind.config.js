/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bitcoin-orange': '#f7931a',
        'deep-black': '#0a0a0a',
        'warm-white': '#fafafa'
      }
    }
  },
  plugins: [],
}

