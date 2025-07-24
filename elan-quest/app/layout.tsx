"use client";

import "./globals.css";
import { Press_Start_2P, Raleway } from "next/font/google";
import Footer from "./components/common/Footer";
import "@/app/lib/fontawesome";
import NavBar from "./components/common/NavBar";
import { useState } from "react";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en" className={`${pressStart2P.variable} ${raleway.variable}`}>
      <head>
        <title>Elan Quest</title>
        <meta
          name="description"
          content="Created by Elan & Nvision Web Team 2026"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div
          className={`flex-grow + ${
            menuOpen
              ? "blur-[3px] transition duration-300 ease overflow-hidden select-none"
              : "transition duration-300 ease"
          }`}
        >
          <main className="flex-grow">{children}</main>
        </div>
        <Footer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </body>
    </html>
  );
}
