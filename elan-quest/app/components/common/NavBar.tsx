"use client";

import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  onRegisterClick?: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  return (
    <header className="w-full bg-[#B2D5FF] px-2 py-3 md:px-12 flex items-center justify-between shadow-sm relative z-50">
      {/* Logos Left */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/pics/navbar.png"
            alt="logo"
            width={150}
            height={150}
            className="object-contain"
          />
          {/* <Image
            src="/iith-logo.svg" 
            alt="IIT Hyderabad Logo"
            width={28}
            height={28}
            className="object-contain"
          /> */}
        </Link>
      </div>

      {/* Navigation Links Right */}
      <nav className="flex items-center gap-3 md:gap-10">
        <Link
          href="/exam-details"
          className="text-[#0F2851] font-extrabold text-[10px] md:text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          EXAM DETAILS
        </Link>

        <Link
          href="/syllabus"
          className="text-[#0F2851] font-extrabold text-[10px]  md:text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          SYLLABUS
        </Link>

        <Link
          href="/results"
          className="text-[#0F2851] font-extrabold text-[10px]  md:text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          RESULTS
        </Link>

        <Link
          href="/about"
          className="text-[#0F2851] font-extrabold text-[10px]  md:text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          ABOUT
        </Link>

        <button
          onClick={onRegisterClick}
          className="bg-[#FF7A7A] hover:bg-[#ff6565] text-white font-black text-xs md:text-sm px-3 py-2.5 rounded-full uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
        >
          REGISTER NOW
        </button>
      </nav>
    </header>
  );
}