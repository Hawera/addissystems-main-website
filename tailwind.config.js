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
        addisbg: "#454262",
        addishover: "#F60B65",
        gradientdark: "rgba(69, 66, 98, 1)",
        gradientlight: "rgba(69, 66, 98, 0.5)",
        gradientlightmobile: "rgba(69, 66, 98, 0.8)",
        addisgradient1: "rgba(45, 38, 111, 0.9)",
        addisgradient2: "rgba(215, 26, 98, 0.3)",
      },
      screens: {
        ssm: "440px",
        mmd: "900px",
        mdm: "1080px",
      },

      animation: {
        updown: "updown 3s ease-in-out infinite",
        updown1: "updown1 4s ease-in-out infinite",
        updown2: "updown1 3s ease-in-out infinite",
        updown3: "updown1 4s ease-in-out infinite",
      },

      keyframes: {
        updown: {
          0: {
            transform: "translateY(-30px)",
          },

          "50%": {
            transform: "translateY(15px)",
          },
        },
        updown1: {
          0: {
            transform: "translateY(-20px)",
          },

          "50%": {
            transform: "translateY(10px)",
          },
        },
        updown2: {
          0: {
            transform: "translateY(-10px)",
          },

          "50%": {
            transform: "translateY(5px)",
          },
        },
        updown3: {
          0: {
            transform: "translateY(-1px)",
          },

          "50%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
