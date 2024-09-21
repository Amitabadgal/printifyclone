/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#9de067',
        customGreen1: '#c6fb9d',
        customPurple: '#7440d6',
        customBrown: '#434228',
        customBrown1:'#565547'
      },
      fontFamily: {
        'protest': ['Protest Guerrilla', 'sans-serif'], // Add your custom font here
      },
      
      
    },
  },
  plugins: [],
}
