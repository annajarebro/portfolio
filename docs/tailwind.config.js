


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
  'pale': '#FEFEFE',
  'white':'#FFFFFF',
  'stravito-tag':'#A04DFF',
  'gradient-left':'#FDC097',
  'gradient-right':'#DCE1EA',
  'returbo':"#3F86FF",

  'dark':'#0E0E0E',

  'background':'#FEFEFE',
  'menu':'#E9EAEB',
  'gradient-top':'#F1F3F4',
  'gradient-bottom':'#E9EAEB',
  'primary':'#000000',
  'secondary':'#515151',
  'tertiary':'#AAAAAA',

  
},

},
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",

  plugins: [
    require('tailwindcss-animated')
  ],

}



