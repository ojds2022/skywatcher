/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-purple": "#6464ff",
        "pale-green": "#98fb98",
        "turquoise": "#00c8c8",
        "light-yellow": "#fffff4",
        "navy": "#000080",
      }
    },
  },
  plugins: [],
}

