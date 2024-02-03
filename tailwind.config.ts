import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      white: "#ffffff",
      pink: "hsl(322, 100%, 66%)",
      veryPaleCyan: "hsl(193, 100%, 96%)",
      veryDarkCyan: "hsl(192, 100%, 9%)",
      grayishBlue: "hsl(208, 11%, 55%)",
    },
    fontFamily: {
      poppins: "var(--poppins)",
      openSans: "var(--open-sans)",
    },
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    backgroundImage: {
      mobile: "url('/assets/bg-mobile.svg')",
      desktop: "url('/assets/bg-desktop.svg')",
    },
  },
};

export default config;
