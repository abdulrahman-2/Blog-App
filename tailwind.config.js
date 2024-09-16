/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0c22",
        bgSoft: "#2d2b42",
        text: "white",
        textSoft: "#e5e5e5",
        btn: "#3673fd",
        btnHover: "#0650f8",
      },
    },
  },
  plugins: [],
};
