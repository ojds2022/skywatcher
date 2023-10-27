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
        "violet-purple": "rgb(153, 153, 255, 0.5)",
      }
    },
    screens: {
      'xxs': '330px',
      'xs': '413px',
      'sm': '640px',
      'md': '767px',
      'lg': '1023px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2560px',
    },
  },
  plugins: [],
}

