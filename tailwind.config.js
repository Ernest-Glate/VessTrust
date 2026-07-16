/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F8F6',
        foreground: '#0E1629',
        navy: {
          dark: '#F8F8F6',
          soft: '#FFFFFF',
        },
        gold: {
          DEFAULT: '#B59445',
          hover: '#A3833B',
        },
        mutedText: '#475569',
      },
      boxShadow: {
        'gold-glow': '0 10px 30px -10px rgba(181, 148, 69, 0.2)',
        'gold-glow-lg': '0 20px 40px -5px rgba(181, 148, 69, 0.25)',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
