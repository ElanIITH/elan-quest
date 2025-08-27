"use client";

import { ReactNode } from "react";
import { useMenu } from "@/app/context/MenuContent";

interface MainWrapperProps {
  children: ReactNode;
}

export default function MainWrapper({ children }: MainWrapperProps) {
  const { menuOpen } = useMenu();

  return (
    <div
      className={`flex-grow ${
        menuOpen
          ? "blur-[3px] transition duration-300 ease select-none"
          : "transition duration-300 ease"
      }`}
    >
      <main className="w-full pt-[80px] md:pt-[0px]">{children}</main>
    </div>
  );
}
