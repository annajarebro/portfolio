


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
  },

  backgroundImage: {
    'stravito-bg': "url('/stravito_img/gradient.webp')",
   
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

  'background':'#Fefefe',
  'menu':'#E9EAEB',
  'gradient-top':'#F1F3F4',
  'gradient-bottom':'#E9EAEB',
  'primary':'#000000',
  'secondary':'#181818',
  'tertiary':'#7A7A7A',
  'case-study-default':'#F5F5F5',
  'case-study-hover':'#DFDFDF',

  
},

},


}



