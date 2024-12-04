/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'my_bg_pessoal_trabalhando' : "url('../src/imagens/pessoal_trabalhando.jpg')",
      }
    },
  },
  plugins: [],
}