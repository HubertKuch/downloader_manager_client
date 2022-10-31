/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/components/**/*.tsx',
    'src/components/*.tsx',
    'src/views/**/*.tsx',
    'src/views/*.tsx',
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
