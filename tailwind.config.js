/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff1e1e",
        dark: "#0b0b0b",
        accent: "#ff3b3b"
      }
    },
  },
  plugins: [],
}