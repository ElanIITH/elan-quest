"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Bulb from "../components/menu/Bulb";
import Corner1 from "../components/menu/Corner1";
import Corner2 from "../components/menu/Corner2";
import Menu from "../components/menu/Menu";
import Pointer from "../components/menu/ArrowPointer";

export default function MenuPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number>(1);
  const router = useRouter();

  const menuList = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About Us", href: "/about-us" },
    { id: 3, title: "Exam Details", href: "/exam-details" },
    { id: 4, title: "Syllabus", href: "/syllabus" },
    { id: 5, title: "Results", href: "/results" },
    { id: 6, title: "Leaderboards", href: "/leaderboards" },
    { id: 7, title: "Blog", href: "/blog" },
    { id: 8, title: "FAQ's", href: "/faqs" },
    { id: 9, title: "Terms & Conditions", href: "/terms" },
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
    <div className="h-[200vh] px-10 py-10 bg-[var(--foreground)] text-[var(--background)]">
      <Corner1 />
      <Corner2 />
      <Bulb />
      <h1 className="pl-8 pt-10">
        <Menu />
      </h1>
      <div className="body-font mt-10 ml-15 text-5xl w-[500px]">
        <ul className="flex flex-col gap-3">
          {menuList.map((item) => (
            <div
              key={item.id}
              className="flex gap-7 items-center"
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
                <Pointer />
              </div>

              <Link href={item.href} className="flex items-center">
                <li>{item.title}</li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
