/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        addisblue: "#3222c6",
        addispink: "#d71a62",
        pinkhover: "#CE346F",
        white: "#ffffff",
      },
      screens: {
        mmd: "900px",
      },
    },
  },
  plugins: [],
};
