import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "UMAK Chat",
  description: "A platform where students can engage in conversation with other university students",
  icons: {
    icon: "/umak_logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
