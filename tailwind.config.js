/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: '#FF006E',
        'accent-light': '#E91E8C',
        'dark-btn': '#1a1a1a',
        'orange-cta': '#FF6B35',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF6B35 0%, #FF006E 50%, #8B5CF6 100%)',
      },
    },
  },
  plugins: [],
}