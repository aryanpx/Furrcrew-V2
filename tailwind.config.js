/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: { arialblack: "Arial Black", sfpro: "SF Pro" },
    extend: {
      boxShadow: {
        "3xl": "0px 3.912px 3.912px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: "#0515A7",
      },
    },
  },
  plugins: [],
};
