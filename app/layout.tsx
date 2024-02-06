import "@/style/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { openSans, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Huddle landing page with alternating feature blocks",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
