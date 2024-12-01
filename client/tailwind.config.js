/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
      screens: {
        tablet: "768px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
