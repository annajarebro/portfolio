


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./*.{html,js}",
	"./node_modules/tw-elements/dist/js/**/*.js"
],
theme: {

  extend: {



  fontFamily: {
    'Aeonik': ['Aeonik', 'sans-serif'],
  }

},

cursor: {
  'figma': 'url(/home_img/cur.svg), default',
}
},
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",

  plugins: [
    require('tailwindcss-animated')
  ],

}



