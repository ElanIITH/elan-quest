// app/layout.tsx (or layout.tsx in your root app folder)
import "./globals.css";
import Footer from "./components/common/Footer";
import "@/app/lib/fontawesome";
import NavBar from "./components/common/NavBar";
import { MenuProvider } from "./context/MenuContent";
import MainWrapper from "./components/common/MainWrapper";

// ---- THEME FONTS ----
// No theme decided yet — running on the plain system font stack defined in
// globals.css. When a theme drops, import the two Google Fonts here again,
// e.g.:
//   import { Press_Start_2P, Raleway } from "next/font/google";
//   const themeHeading = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-heading-override", display: "swap" });
//   const themeBody = Raleway({ subsets: ["latin"], weight: ["400","700"], variable: "--font-body-override", display: "swap" });
// then update --font-body / --font-heading in globals.css to reference them,
// and add `${themeHeading.variable} ${themeBody.variable}` to the <html> className below.

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nexus Quest",
  description: "Official olympiad of Elan & nVision",
  icons: {
    icon: "/favicon4.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative antialiased bg-[var(--background)] text-[var(--foreground)] w-screen min-h-screen flex flex-col">
        <MenuProvider>
          <NavBar />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}