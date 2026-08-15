"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, ChevronRight } from "lucide-react";

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
    { id: 8, title: "FAQs", href: "/faqs", comingSoon: false },
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
    <div className="relative z-100 right-0 w-full lg:w-[480px] h-full px-6 sm:px-8 lg:px-10 py-10 bg-[var(--surface)] text-[var(--surface-foreground)] flex flex-col box-border">
      {/* Close Button */}
      <button
        onClick={closeMenu}
        className="absolute top-3 right-3 text-[var(--surface-foreground)] z-50 cursor-pointer"
        aria-label="Close menu"
      >
        <X size={28} />
      </button>

      {/* Content area */}
      <div className="flex flex-1 gap-20 box-border mt-8">
        {/* Left: Menu */}
        <div className="flex flex-col text-lg lg:w-[315px] w-[250px] box-border">
          <div className="heading-font text-2xl mb-6">Menu</div>
          <ul className="flex flex-col gap-0 md:gap-3 lg:gap-3 box-border">
            {menuList.map((item) => {
              const isActive =
                (hoveredId === item.id && selectedId === item.id) ||
                (!hoveredId && selectedId === item.id);

              return (
                <div
                  key={item.id}
                  className="body-font h-[35px] lg:h-[30px] flex gap-3 items-center box-border"
                  onMouseEnter={() => {
                    setHoveredId(item.id);
                    setSelectedId(item.id);
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className={`transition-opacity duration-200 box-border ${
                      isActive ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <ChevronRight size={16} className="hidden lg:block" />
                  </div>
                  <Link
                    href={item.href}
                    className={`flex body-font md:text-2xl lg:text-xl text-lg transition-all duration-300 ease-in-out items-center gap-2 box-border ${
                      isActive ? "font-semibold underline" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    <li>{item.title}</li>
                  </Link>
                  {item.comingSoon ? (
                    <span className="ml-auto text-xs border border-[var(--surface-foreground)] rounded-full px-2 py-0.5 opacity-70">
                      Coming soon
                    </span>
                  ) : null}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}