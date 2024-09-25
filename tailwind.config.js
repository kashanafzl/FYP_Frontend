

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgraycolor: '#235391', // Your custom color
       // #5ebec4
        // #a0aecd
        // #161f6d
        // 235391
        // 6dcffb
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'system-ui'],
      },
        
    },
  },
  plugins: [],
}
