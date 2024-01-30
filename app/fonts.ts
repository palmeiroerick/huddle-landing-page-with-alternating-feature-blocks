import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Poppins, Open_Sans} from "next/font/google";

export const poppins: NextFontWithVariable = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--poppins",
});

export const openSans: NextFontWithVariable = Open_Sans({
  weight: ["400", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--open-sans",
});