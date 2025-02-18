/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // বা 'media' ব্যবহার করতে পারো
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
