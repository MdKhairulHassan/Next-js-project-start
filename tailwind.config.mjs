/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      // 'robo': ['Roboto'],
      'robo': ['var(--font-roboto)', 'sans-serif'],
      'lato': ['var(--font-lato)', 'sans-serif'],
      },
      colors: {
        mainbgColor: "#1E1E1E",
        menuTextsColor: "#959595",
        menuTHoverColor: "#FD6F00",
        bannerTColor: "#707070",
        iconColor: "#BABABA",
        iconBColor: "#575757",
        skillTextColor: "#DFDFDF",
      },
      maxWidth: {
        'mainContainer': '1170px',
      },
    },
  },
  plugins: [daisyui],
};
