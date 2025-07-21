"use client";

import { useState } from "react";
import Link from "next/link";
import Bulb from "../components/menu/Bulb";
import Corner1 from "../components/menu/Corner1";
import Corner2 from "../components/menu/Corner2";
import Menu from "../components/menu/Menu";
import Pointer from "../components/menu/ArrowPointer";
import ComingSoon from "../components/menu/ComingSoon";

export default function MenuPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={hoveredId === item.id ? "visible" : "invisible"}>
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
