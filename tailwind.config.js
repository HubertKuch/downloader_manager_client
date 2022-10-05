/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/views/*.tsx',
    'src/components/*.tsx',
  ],
  theme: {
    extend: {
      textColor: {
        whiter: "#fefbff"
      }
    },
  },
  plugins: [],
}
