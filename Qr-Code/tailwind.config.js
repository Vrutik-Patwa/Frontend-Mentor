/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-light-grey": "#D5E1EF",
        "custom-grey": "#7D889E",
        "custom-dark-navy": "#1F314F",
        "custom-blue-shade": "#3685FF",
        "custom-blue": "#2C7DFA",
      },
    },
  },
  plugins: [],
};
