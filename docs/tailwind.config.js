/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./*.{html,js}",
	"./node_modules/tw-elements/dist/js/**/*.js"
],
theme: {
extend: {
  animation: {
    'infinite-scroll': 'infinite-scroll 30s linear infinite',
  },

  keyframes: {
    'infinite-scroll': {
      from: { transform: 'translateX(0)' },
      to: { transform: 'translateX(-100%)' },
    }
  }
},
},
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

