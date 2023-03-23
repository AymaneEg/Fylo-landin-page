/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
           headings : ['Raleway']
      },
      colors : {
         WhiteColor: "hsl(0, 0%, 100%)" , 
         CyanColor : "hsl(176, 68%, 64%)" ,
         MainBackGround : 'hsl(218, 28%, 13%)'
      }


    },
  },
  plugins: [],
}
