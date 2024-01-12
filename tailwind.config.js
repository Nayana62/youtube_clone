/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "550px",

      md: "768px",

      lg: "1000px",

      xl: "1250px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
