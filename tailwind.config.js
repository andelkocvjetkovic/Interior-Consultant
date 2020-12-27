const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        serif: ["Martel", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
