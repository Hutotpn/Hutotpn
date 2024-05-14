/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "node_modules/preline/dist/*.js"],

  darkMode: "class",

  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
