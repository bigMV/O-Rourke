/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [ "class" ],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1020px',
        xl: '1440px'
      },
    },
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#060510',
        bodyText: '#000000',
        accent: '#40e0d0',

      },
      fontFamily: {
        primary: [ 'Fira Sans', 'sans-serif' ],
        secondary: [ 'Raleway', 'sans-serif' ]
      },
      backgroundImage: {
        'hero': `url('images/dataArchitect.webp')`
      },
    },
  },

}