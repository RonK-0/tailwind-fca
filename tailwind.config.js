/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        bannah: "url('../dist/img/banner-img.png')",
        logo: "url('../dist/img/logo.png')"
      },
      colors:{
        dark: "#000",
        light: "#fff",
        gray1: "#4B5563",
        gray2: "#f2f2f2",
        accent: "#008542",
        accent_alt: "#28941e",
        yellow: "#daa625",
        facebook: "#3b5897",
        facebook_hover: "#1573e5"
      },
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
        // 'poppins': ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1_clamp: "clamp(2.4rem, 6vw, 5rem)",
      },
      // listStyleType: {
      //   none: 'none',
      //   disc: 'disc',
      //   decimal: 'decimal',
      //   square: 'square',
      //   roman: 'upper-roman',
      // },
    },
  },
  plugins: [],
}