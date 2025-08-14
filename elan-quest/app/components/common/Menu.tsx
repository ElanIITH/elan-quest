"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface Props {
  menuOpen: boolean;
  closeMenu: () => void;
}

export default function Menu({ closeMenu, menuOpen }: Props) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number>(1);
  const router = useRouter();

  const menuList = [
    { id: 1, title: "Home", href: "/", comingSoon: false },
    { id: 2, title: "About Us", href: "/about-us", comingSoon: false },
    { id: 3, title: "Exam Details", href: "/exam-details", comingSoon: false },
    { id: 4, title: "Syllabus", href: "/syllabus", comingSoon: false },
    { id: 5, title: "Results", href: "/results", comingSoon: false },
    { id: 6, title: "Leaderboards", href: "/", comingSoon: true },
    { id: 7, title: "Blog", href: "/", comingSoon: true },
    { id: 8, title: "FAQs", href: "/", comingSoon: true },
    {
      id: 9,
      title: "Terms & Conditions",
      href: "/terms-conditions",
      comingSoon: false,
    },
  ];

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const currentIndex = menuList.findIndex(
          (item) => item.id === selectedId
        );

        if (e.key === "ArrowDown") {
          const nextIndex = (currentIndex + 1) % menuList.length;
          setSelectedId(menuList[nextIndex].id);
        } else if (e.key === "ArrowUp") {
          const prevIndex =
            currentIndex === 0 ? menuList.length - 1 : currentIndex - 1;
          setSelectedId(menuList[prevIndex].id);
        }
      } else if (e.key === "Enter") {
        const selectedItem = menuList.find((item) => item.id === selectedId);
        if (selectedItem) {
          router.push(selectedItem.href);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId]);

  return (
    <div className="relative z-100 right-0 w-full lg:w-[480px] h-full px-6 sm:px-8 lg:px-10 py-10 bg-[var(--foreground)] text-[var(--background)] flex flex-col box-border">
      {/* Close Button */}
      <button
        onClick={closeMenu}
        className="absolute top-3 right-3 text-[var(--background)] z-50 cursor-pointer"
        aria-label="Close menu"
      >
        <X size={28} />
      </button>

      {/* Top left corner */}
      <div className="absolute top-0 left-0 box-border">
        <img src="/menu/corner.svg" alt="corner" className="w-[30px] h-auto" />
      </div>

      {/* Bottom left corner rotated */}
      <div className="absolute md:block hidden bottom-0 left-0 box-border">
        <img
          src="/menu/corner.svg"
          alt="corner"
          className="w-[30px] h-auto rotate-270"
        />
      </div>

      {/* Right: Bulb */}
      <div className="absolute top-0 right-2 md:right-5 lg:right-5 box-border">
        <img
          src="/menu/bulb.svg"
          alt="bulb"
          className="w-[170px] md:w-[160px] lg:w-[160px] h-auto"
        />
      </div>

      {/* Content area */}
      <div className="flex flex-1 gap-20 box-border">
        {/* Left: Menu */}
        <div className="flex flex-col text-lg lg:w-[315px] w-[250px] box-border">
          <img
            src="/menu/menu.svg"
            alt="menu"
            className="w-[200px] md:w-[350px] h-auto lg:w-[190px] lg:h-auto mb-4"
          />
          <ul className="flex flex-col gap-0 md:gap-3 lg:gap-3 box-border">
            {menuList.map((item) => (
              <div
                key={item.id}
                className="body-font h-[35px] lg:h-[20px] flex gap-3 items-center box-border"
                onMouseEnter={() => {
                  setHoveredId(item.id);
                  setSelectedId(item.id);
                }}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`transition-opacity duration-200 box-border ${
                    hoveredId === item.id && selectedId === item.id
                      ? "opacity-100 visible"
                      : hoveredId && hoveredId !== selectedId
                      ? "opacity-0 invisible"
                      : selectedId === item.id
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <img
                    src="/menu/pointer.svg"
                    alt="pointer"
                    className="w-[25px] hidden lg:block lg:w-[15px] h-auto"
                  />
                </div>
                <Link
                  href={item.href}
                  className="flex body-font md:text-2xl lg:text-xl text-lg transition-all duration-300 ease-in-out active:text-md items-center gap-2 box-border"
                  onClick={closeMenu}
                >
                  <li
                    className={`transition-shadow duration-200 box-border ${
                      hoveredId === item.id && selectedId === item.id
                        ? "text-shadow-[0_6px_3px_rgba(0,0,0,0.3)]"
                        : hoveredId && hoveredId !== selectedId
                        ? ""
                        : selectedId === item.id
                        ? "text-shadow-[0_6px_3px_rgba(0,0,0,0.3)]"
                        : ""
                    }`}
                  >
                    {item.title}
                  </li>
                </Link>
                {item.comingSoon ? (
                  <img
                    src="/menu/coming-soon.svg"
                    alt="coming soon"
                    className={`w-[70px] h-auto body-font ml-auto box-border transition-transform duration-200
      ${
        hoveredId === item.id && selectedId === item.id
          ? "scale-110"
          : hoveredId && hoveredId !== selectedId
          ? ""
          : selectedId === item.id
          ? "scale-110"
          : ""
      }
    `}
                  />
                ) : null}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
