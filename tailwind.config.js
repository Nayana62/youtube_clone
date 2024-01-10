/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "550px",

      md: "768px",

      lg: "1300px",

      xl: "1200px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
