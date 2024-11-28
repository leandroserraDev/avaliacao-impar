/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'my_bg_pessoal_trabalhando' : "url('../src/pessoal_trabalhando.jpg')",
      }
    },
  },
  plugins: [],
}