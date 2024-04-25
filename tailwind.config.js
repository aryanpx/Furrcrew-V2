/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: { arialblack: "Arial Black", sfpro: "SF Pro" },
    extend: {
      boxShadow: {
        "3xl": "0px 3.912px 3.912px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: "#0515A7",
        darkbg: "#29292B",
        darkfont: "#D7D7D5",
        grayish: "#ECECEC14",
      },
    },
  },
  plugins: [],
};
