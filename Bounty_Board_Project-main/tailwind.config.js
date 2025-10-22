/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Poppins'],
        satoshi: ['Satoshi', 'sans-serif'],
        akatab: ['Akatab', 'sans-serif'],
        abeezee: ['Abeezee', 'san-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}