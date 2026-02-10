/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF4500',    // Bright warm red
          yellow: '#FFD700', // Bright warm yellow
          orange: '#FFA500', // Bright warm orange
          dark: '#1A1A1A',   // Dark background
          darker: '#0F0F0F', // Darker background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'], // Assuming we might want a display font
      }
    },
  },
  plugins: [],
}
