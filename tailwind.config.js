/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      primary: "#1B2559",
      secondary: "#422AFB",
      inactive: "#8F9BBA",
      background: "#F4F7FE",
      body: "#1A202C",
      input: "#2D3748",
      icon: "#A0AEC0",
      th: "#4A5568",
      primaryDark: "#0b1437",
    },
    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        dx: "rgba(112, 144, 176, 0.08) 14px 17px 40px 4px",
        rc: "rgba(112, 144, 176, 0.18) 14px 17px 40px 4px",
      },
      letterSpacing: {
        wider: "0.05rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        ".transition-custom": {
          transition: "top 0.2s linear, bottom 0.2s linear, width 0.35s",
        },
      });
    },
  ],
};
