/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#eff0f3',
        'secondary': '#002f6b',
        'tri': '#005a94',
        'tetra': '#0086b0',
        'penta': '#00b3bc',
        'hexa': '#00e0bd',
        'sarthi-1': '#eff0f3',
        'sarthi-2': '#094067',
        'sarthi-3': '#5F6C7B',
        'sarthi-4': '#FFFFFE',
        'sarthi-5': '#2a2a2a',
        'sarthi-6': '#d9376e',
        'sarthi-7': '#ff8e3c',
      },
      fontFamily: {
        'comforta' : ['Comfortaa', 'cursive'],
        'popins' : ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
