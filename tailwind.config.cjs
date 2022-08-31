/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0a0039',
        'secondary': '#002f6b',
        'tri': '#005a94',
        'tetra': '#0086b0',
        'penta': '#00b3bc',
        'hexa': '#00e0bd'
      },
      fontFamily: {
        'comforta' : ['Comfortaa', 'cursive'],
        'popins' : ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
