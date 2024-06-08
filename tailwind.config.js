/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "open-sans": '"Open Sans", sans-serif',
      playfair: '"Playfair Display", serif;',
    },
    backgroundImage: {
      bgImg1: "url('/banner1.jpg')",
      bgImg2: "url('/banner2.jpg')",
      bgImg3: "url('/banner3.jpg')",
    },
  },
  plugins: [require("daisyui")],
};
