/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PrincipalFont : [ "Raleway", 'sans-serif']
      },
      screens: {
        'xsm': '376px',
      },
    },
  },
  plugins: [],
}

