// app/layout.tsx (or layout.tsx in your root app folder)
import "./globals.css";
import { Press_Start_2P, Raleway } from "next/font/google";
import Footer from "./components/common/Footer";
import "@/app/lib/fontawesome";
import NavBar from "./components/common/NavBar";
import { MenuProvider } from "./context/MenuContent";
import MainWrapper from "./components/common/MainWrapper";

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

export const metadata = {
  title: "Nexus Quest",
  description: "Official olympiad of Elan & nVision",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  icons: {
    icon: "/favicon4.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${raleway.variable}`}>
      <body className="relative antialiased bg-[var(--background)] text-[var(--foreground)] w-screen min-h-screen flex flex-col">
        <MenuProvider>
          <NavBar />
          <MainWrapper children={children} />
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
