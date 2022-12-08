/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backgroundBlack: "#121212",
      },
    },
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
