/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: "'Roboto',' sans-serif'",
    },
    extend: {
      colors: {
        body: "#F0F0F0",
        red: "#ff0000",
        orange: "#CD5C08",
        gray: "#7D7C7C",
      },
    },
  },
  plugins: [],
};
