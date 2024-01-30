import "@/style/globals.css";
import type { ReactNode } from "react";
import { openSans, poppins } from "./fonts";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" className={`${poppins.className} ${openSans.className}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
