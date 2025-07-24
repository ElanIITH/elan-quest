"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MenuPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number>(1);
  const router = useRouter();

  const menuList = [
    { id: 1, title: "Home", href: "/", comingSoon: false },
    { id: 2, title: "About Us", href: "/about-us", comingSoon: false },
    { id: 3, title: "Exam Details", href: "/exam-details", comingSoon: false },
    { id: 4, title: "Syllabus", href: "/syllabus", comingSoon: false },
    { id: 5, title: "Results", href: "/results", comingSoon: false },
    { id: 6, title: "Leaderboards", href: "/leaderboards", comingSoon: true },
    { id: 7, title: "Blog", href: "/blog", comingSoon: true },
    { id: 8, title: "FAQ's", href: "/faqs", comingSoon: true },
    { id: 9, title: "Terms & Conditions", href: "/terms", comingSoon: false },
  ];

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
    <div className="relative min-h-screen px-10 py-10 bg-[var(--foreground)] text-[var(--background)] flex flex-col">
      {/* Top left corner */}
      <div className="absolute top-0 left-0">
        <img src="/menu/corner.svg" alt="corner" className="w-[30px] h-auto" />
      </div>

      {/* Bottom left corner rotated */}
      <div className="absolute bottom-0 left-0">
        <img
          src="/menu/corner.svg"
          alt="corner"
          className="w-[30px] h-auto rotate-270"
        />
      </div>

      {/* Right: Bulb */}
      <div className="absolute top-0 right-65">
        <img src="/menu/bulb.svg" alt="bulb" className="w-[150px] h-auto" />
      </div>

      {/* Content area */}
      <div className="ml-10 flex flex-1 gap-20">
        {/* Left: Menu */}
        <div className="flex flex-col text-2xl w-[450px]">
          <img
            src="/menu/menu.svg"
            alt="menu"
            className="w-[300px] h-auto mb-4"
          />
          <ul className="flex flex-col gap-3">
            {menuList.map((item) => (
              <div
                key={item.id}
                className="h-[45px] flex gap-5 items-center"
                onMouseEnter={() => {
                  setHoveredId(item.id);
                  setSelectedId(item.id);
                }}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`transition-opacity duration-100 ${
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
                    className="w-[20px] h-auto"
                  />
                </div>
                <Link
                  href={item.href}
                  className="flex body-font items-center gap-2"
                >
                  <li
                    className={`${
                      hoveredId === item.id && selectedId === item.id
                        ? "font-semibold"
                        : hoveredId && hoveredId !== selectedId
                        ? ""
                        : selectedId === item.id
                        ? "font-semibold"
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
                    className="w-[100px] h-auto body-font ml-auto"
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
