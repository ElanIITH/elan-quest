import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P, Raleway } from "next/font/google";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elan Quest",
  description: "Created by Elan & Nvision Web Team 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${raleway.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
