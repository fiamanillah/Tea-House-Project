/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    

    extend: {
      fontFamily: {
        'Manrope': ['Manrope', ],
      },
      colors:{
        'color-1': '#FF8938',
        'color-2': '#FF0000'
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.color-1')}, ${theme('colors.color-2')})`,
      }),
    },
  },
  plugins: [],
}