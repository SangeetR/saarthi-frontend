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
        'hexa': '#00e0bd',
        'sarthi-1': '#D8EEFE',
        'sarthi-2': '#094067',
        'sarthi-3': '#5F6C7B',
        'sarthi-4': '#FFFFFE',
        'sarthi-5': '#3DA9FC',
        'sarthi-6': '#EF4565',
        'sarthi-7': '#90B4CE',
      },
      fontFamily: {
        'comforta' : ['Comfortaa', 'cursive'],
        'popins' : ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
