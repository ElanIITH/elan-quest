"use client";

import { useEffect, useRef, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import Menu from "./Menu";
import RegisterPopUp from "./RegisterPopUp";
import { useMenu } from "@/app/context/MenuContent";

const NAV_LINKS = [
  { href: "/exam-details", label: "EXAM DETAILS" },
  { href: "/syllabus", label: "SYLLABUS" },
  { href: "/results", label: "RESULTS" },
];

export default function NavBar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const { menuOpen, setMenuOpen } = useMenu();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <>
      <div
        className={
          menuOpen
            ? "blur-[3px] w-screen transition duration-300 ease select-none"
            : "transition duration-300 ease"
        }
      >
        <nav className="fixed top-0 w-full px-4 py-3 shadow-md flex justify-between items-center bg-[var(--surface)] md:relative z-10">
          {/* Logo — kept exactly as the original image, per request */}
          <div className="flex items-center">
            <Link href="/">
              <img src="/footer/quest.svg" alt="logo" className="w-[100px] h-auto" />
            </Link>
          </div>

          {/* Desktop links — plain, in-flow Links (fixes the broken click target) */}
          <div className="flex-1 hidden md:flex justify-end items-center gap-10 px-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="body-font text-[var(--surface-foreground)] font-semibold text-lg hover:opacity-60 transition-opacity duration-300"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setShowPopup(true)}
              className="cursor-pointer border border-[var(--surface-foreground)] rounded-md px-5 py-2 text-base body-font font-semibold hover:opacity-70 transition-opacity duration-300"
            >
              REGISTER NOW
            </button>
            {showPopup && <RegisterPopUp setShowPopup={setShowPopup} />}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--surface-foreground)] cursor-pointer z-20"
            aria-label="Toggle menu"
          >
            {menuOpen ? null : <MenuIcon size={30} />}
          </button>
        </nav>
      </div>

      {/* Menu */}
      <div
        ref={menuRef}
        className={`fixed flex justify-end md:w-auto w-full top-0 right-0 h-full transition-transform duration-800 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Menu menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
      </div>
    </>
  );
}