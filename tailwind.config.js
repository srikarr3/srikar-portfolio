module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        kitsune: {
          50:  '#ffffff',   // white
          100: '#ffd7b5',   // peach
          200: '#ffb38a',   // light orange
          300: '#ff9248',   // orange
          400: '#ff6700',   // vivid orange
        },
      },
    },
  },
  plugins: [],
}; 