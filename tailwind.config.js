/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "seashell": {
          50: "#f8f8f8",
          100: "#f1f1f1",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        "persian-blue": {
          50: "#ecf3ff",
          100: "#dde9ff",
          200: "#c1d5ff",
          300: "#9cb8ff",
          400: "#7590ff",
          500: "#546aff",
          600: "#363ff5",
          700: "#252ad0",
          800: "#242aaf",
          900: "#262d89",
          950: "#161850",
        },
        "ebony-clay": {
          50: "#f0f5fd",
          100: "#e3eefc",
          200: "#cdddf8",
          300: "#aec7f3",
          400: "#8da8ec",
          500: "#7289e2",
          600: "#5767d4",
          700: "#4754bb",
          800: "#3c4797",
          900: "#374178",
          950: "#1b1f3b",
        }
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
