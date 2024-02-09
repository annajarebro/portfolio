


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
    'Manrope': ['Manrope'],
  }

},

colors: {
  'ash': '#3A3A3A',
  'cloud': '#888888',
  'pale': '#F0F0F0',
  'white':'#FFFFFF',
  'dark':'#181818',
  'stravito-tag':'#A04DFF',
  'gradient-left':'#FDC097',
  'gradient-right':'#DCE1EA',
  'returbo':"#3F86FF",
  
},

},
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",

  plugins: [
    require('tailwindcss-animated')
  ],

}



