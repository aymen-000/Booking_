/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'nav_bg': "url('assets/bg1.jpg')",
        'nav_bg_2' : "url('assets/bg2.jpg')",
      },
    },
  },
  plugins: [],
}

