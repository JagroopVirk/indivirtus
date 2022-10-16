/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#002C5B",
      secondary: "#fff",
    },
    extend: {},
  },
  plugins: [],
}
