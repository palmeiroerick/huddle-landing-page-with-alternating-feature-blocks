import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      pink: "hsl(322, 100%, 66%)",
      veryPaleCyan: "hsl(193, 100%, 96%)",
      veryDarkCyan: "hsl(192, 100%, 9%)",
      grayishBlue: "hsl(208, 11%, 55%)",
    },
    fontFamily: {
      poppins: "var(--poppins)",
      openSans: "var(--openSans)",
    },
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
  },
};

export default config;
