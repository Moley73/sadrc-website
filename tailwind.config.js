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
        'sadrc-orange': '#FF6B00',
        'sadrc-black': '#1A1A1A',
      },
      animation: {
        'subtle-zoom': 'subtle-zoom 30s ease-in-out infinite',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'fade-in-delayed': 'fade-in 1.2s ease-out 0.3s forwards',
        'pulse-grow': 'pulse-grow 2s ease-in-out infinite',
      },
      keyframes: {
        'subtle-zoom': {
          '0%, 100%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-grow': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
