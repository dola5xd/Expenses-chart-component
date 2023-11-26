/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1240px",
      // => @media (min-width: 1240px) { ... }
    },
    extend: {
      colors: {
        // ### Primary

        Soft_Red: ["hsl(10, 79%, 65%)"],
        Cyan: ["hsl(186, 34%, 60%)"],

        // ### Neutral

        DarkBrown: ["hsl(25, 47%, 15%)"],
        MediumBrown: ["hsl(28, 10%, 53%)"],
        Cream: ["hsl(27, 66%, 92%)"],
        paleOrange: ["hsl(33, 100%, 98%)"],
      },

      fontFamily: {
        DM_Sans: ["DM Sans"],
      },
    },
  },
  plugins: [],
};
