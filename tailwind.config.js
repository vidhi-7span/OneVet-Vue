/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {
      listStyleImage: {
        circle: 'url("./src/assets/images/ellipse.png")',
      },
    },
  },
  plugins: [],
};
