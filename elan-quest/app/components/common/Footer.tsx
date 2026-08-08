"use client";

import { ReactNode } from "react";
import { useMenu } from "@/app/context/MenuContent";

interface MainWrapperProps {
  children: ReactNode;
}

export default function MainWrapper({ children }: MainWrapperProps) {
  const { menuOpen, setMenuOpen } = useMenu();

  return (
    <div
      className={`flex-grow ${
        menuOpen
          ? "blur-[5px] transition duration-300 ease select-none"
          : "transition duration-300 ease"
      }`}
      onClick={() => {
        if (menuOpen) setMenuOpen(false);
      }}
    >
      <main className="w-full pt-[80px] md:pt-[0px]">{children}</main>
    </div>
  );
}