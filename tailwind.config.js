/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#e4e4e4",
        secondary : "#3f3f3f",
        accent: "#0f0f0f"
      }
    },
  },
  plugins: [],
}

