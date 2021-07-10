const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: "#f1f8f6",
        200: "#d4e9e2",
        300: "#008248",
        400: "#1e3932",
      },
      secondary: "#f3f1e7",
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    },
    extend: {
      fontSize: {
        22: "2.2rem",
        28: "2.8rem",
      },
      height: {
        11: "44px",
        18: "72px",
        26: "104px",
        42: "168px",
        150: "600px",
        160: "640px",
        180: "720px",
      },
      backgroundImage: (theme) => ({
        "hero-sm": "url('./hero-sm.webp')",
        "hero-xl": "url('./hero-xl.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
