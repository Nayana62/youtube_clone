/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "300px",

      sm: "550px",

      md: "768px",

      lg: "1000px",

      xl: "1300px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
