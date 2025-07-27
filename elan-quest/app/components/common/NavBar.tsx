"use client";

import { useEffect, useRef } from "react";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import Menu from "./Menu"; // Adjust path as needed

interface Props {
  menuOpen: boolean;
  setMenuOpen: (val: boolean) => void;
}

export default function NavBar({ menuOpen, setMenuOpen }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);

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
        <nav className="w-full px-4 py-3 shadow-md flex justify-between items-center bg-[var(--foreground)] relative z-10">
          <div className="text-xl font-bold text-[var(--background)] flex items-center">
            <Link href={"/"}>
              <img
                src="/footer/quest.svg"
                alt="logo"
                className="w-[40px] h-auto sm:w-[50px]"
              />
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="flex gap-6 items-center">
            <div className="hidden md:flex gap-6 items-center">
              <Link
                href="/"
                className="text-[var(--background)] hover:underline"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[var(--background)] hover:underline"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[var(--background)] hover:underline"
              >
                Contact
              </Link>
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[var(--background)] cursor-pointer z-20"
              aria-label="Toggle menu"
            >
              <MenuIcon size={28} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu slides in when open */}
      <div
        ref={menuRef}
        className={`fixed flex justify-end w-screen top-0 right-0 transition-transform duration-800 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Menu menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
