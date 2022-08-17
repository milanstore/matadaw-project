/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Blender Pro",
      },
      colors: {
        customWhite: "#ffffffb3",
        customBlack: "#010101",
      },
      content: {
        footerLeft: "url('assets/Footer/powerby.png')",
        footerRight: "url('assets/Footer/ticket.png')",
      },
      backgroundImage: {
        navBg: "url('assets/home/nav-bg.png')",
        navLogoBg: "url('assets/home/nav-logo-bg.png')",
        homeBg: "url('assets/home/bg.png')",
        myRaffleBg: "url('assets/common/My_Raffale_bg.png')",
        buttonTrBg: "url('assets/home/button-tr-bg.png')",
        buttonBg: "url('assets/home/button-bg.png')",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      screens: {
        custom1570: "1570px",
        custom1380: "1380px",
        custom1352: "1352px",
        custom1100: "1100px",
        custom900: "900px",
        custom550: "550px",
      },
    },
  },
  plugins: [],
};
