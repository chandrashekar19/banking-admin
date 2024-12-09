/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables dark mode based on class
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a202c", // Dark background color
        "light-bg": "#f7fafc", // Light background color
      },
    },
  },
  plugins: [],
};
