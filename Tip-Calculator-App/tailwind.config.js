/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "custom-background": "#c4e3e6",
        "custom-container": "#fcfdfe",
        "amt-container": "#01474b",
        "custom-hover": "#b7dbde",
        "custom-btn": "#2bbca9",
        "percentage-btn": "#000000",
      },
    },
  },
  plugins: [],
};
