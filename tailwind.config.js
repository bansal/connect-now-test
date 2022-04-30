/* eslint-disable no-undef */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#0e1a2b",
        primary: "#c1d1e8",
        secondary: "#182c47",
        accent: "#5692e8",
        "gradient-start": "#081221",
        "gradient-end": "#03080f",
      },
      fontFamily: {
        body: ["Mulish", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
