"use client";

import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  onRegisterClick?: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  return (
    <header className="w-full bg-[#B2D5FF] px-2 py-3 md:px-12 flex flex-wrap items-center justify-between gap-y-2 shadow-sm relative z-50">
      <div className="flex flex-shrink-0 items-center gap-2">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2">
          <Image
            src="/pics/navbar.png"
            alt="Elan and nVision logo"
            width={150}
            height={150}
            className="h-auto w-[90px] object-contain md:w-[150px]"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-4 pl-2 border-l border-[#0F2851]/20">
          <a
            href="https://www.iith.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/pics/iith-logo.png"
              alt="IIT Hyderabad"
              width={90}
              height={30}
              className="object-contain"
            />
          </a>

          <a
            href="https://elan.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/pics/elan-logo.png"
              alt="Elan and nVision logo"
              width={110}
              height={30}
              className="object-contain"
            />
          </a>
        </div>
      </div>

      <nav className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 md:flex-nowrap md:gap-x-10">
        <Link
          href="/exam-details"
          className="text-[#0F2851] font-extrabold whitespace-nowrap text-[10px] md:text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          EXAM DETAILS
        </Link>

        <Link
          href="/syllabus"
          className="text-[#0F2851] font-extrabold whitespace-nowrap text-[10px] md:text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          SYLLABUS
        </Link>

        <Link
          href="/results"
          className="text-[#0F2851] font-extrabold whitespace-nowrap text-[10px] md:text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          RESULTS
        </Link>

        <Link
          href="/about"
          className="text-[#0F2851] font-extrabold whitespace-nowrap text-[10px] md:text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
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