/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        poppins: 'Poppins',
        dm: 'DM Serif Display'
      }
    },
  },
  plugins: [],
}
