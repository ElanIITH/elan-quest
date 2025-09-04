"use client";

import { useEffect, useRef, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import Menu from "./Menu";
import RegisterPopUp from "./RegisterPopUp";
import { useMenu } from "@/app/context/MenuContent";

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
        <nav className="fixed top-0 w-full px-4 py-3 shadow-md flex justify-between items-center bg-[var(--foreground)] md:relative z-10">
          <div className="text-xl font-bold text-[var(--background)] flex items-center">
            <Link href={"/"}>
              <img
                src="/footer/quest.svg"
                alt="logo"
                className="w-[100px] h-auto hover:content-[url('/NexusQuestAsh.svg')]"
              />
            </Link>
          </div>
          <div className="flex-1 hidden md:block">
            <ul className="flex flex-row px-10 justify-end gap-10">
              <li className="flex items-center">
                <div className="flex justify-center items-center relative group">
                  <img
                    src="/Subtract.svg"
                    alt="logo"
                    className="w-[170px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-12 pt-1"
                  />
                  <Link
                    href="/exam-details"
                    className="absolute flex items-center"
                  >
                    <p className="body-font group-hover:text-[var(--foreground)] transition-text duration-300 text-[var(--background)] font-semibold text-xl z-13">
                      EXAM DETAILS
                    </p>
                  </Link>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex justify-center items-center relative group">
                  <img
                    src="/Subtract.svg"
                    alt="logo"
                    className="w-[170px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-12 pt-1"
                  />
                  <Link href="/syllabus" className="absolute flex items-center">
                    <p className="body-font group-hover:text-[var(--foreground)] transition-text duration-300 text-[var(--background)] font-semibold text-xl z-13">
                      SYLLABUS
                    </p>
                  </Link>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex justify-center items-center relative group">
                  <img
                    src="/Subtract.svg"
                    alt="logo"
                    className="w-[170px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-12 pt-1"
                  />
                  <Link href="/results" className="absolute flex items-center">
                    <p className="body-font group-hover:text-[var(--foreground)] transition-text duration-300 text-[var(--background)] font-semibold text-xl z-13">
                      RESULTS
                    </p>
                  </Link>
                </div>
              </li>
              <li className="flex items-center">
                <div
                  className="relative pt-2 group cursor-pointer"
                  onClick={() => setShowPopup(true)}
                >
                  <img
                    src="/menu/register-bg.svg"
                    className="w-[260px] h-auto group-hover:opacity-0 transition-opacity duration-500"
                  />
                  <img
                    src="/Union.svg"
                    className="w-[260px] h-auto absolute flex inset-0 mt-2 transform scale-97 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-xl text-[var(--foreground)] font-extrabold group-hover:text-[var(--background)] transition-text duration-500">
                    REGISTER NOW
                  </p>
                </div>

                {showPopup && <RegisterPopUp setShowPopup={setShowPopup} />}
              </li>
            </ul>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--background)] cursor-pointer z-20"
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
