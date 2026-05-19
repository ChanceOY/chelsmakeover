/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf6ee",
        porcelain: "#fffaf3",
        cocoa: "#241815",
        espresso: "#3a2923",
        blush: "#d6a99e",
        champagne: "#c6a35d",
        rosewood: "#8f5f55",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(58, 41, 35, 0.11)",
        glow: "0 20px 60px rgba(198, 163, 93, 0.18)",
      },
    },
  },
  plugins: [],
};
