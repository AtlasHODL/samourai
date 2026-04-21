/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/App.jsx",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",],
  theme: {
    // Guardar cuando haya acabado de poner las family fonts
    fontFamily: {
      'sans': ['Unison Pro', "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      // 'sansround': ['Unison Pro Round', "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'stranger': ['The Stranger', "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'mono': ["Cascadia","ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'red': '#ec3b26',
    },
    extend: {},
  },
  plugins: [],
}

