"use client";

import { useState } from "react";
import {
  syllabus6,
  syllabus7,
  syllabus8,
  syllabus9,
  syllabus10,
  syllabus11,
  syllabus12,
} from "../components/syllabus/content";
import { ChevronDown, ChevronUp } from "lucide-react";

const CLASS_TABS = [
  { classNum: 6, label: "Class 6" },
  { classNum: 7, label: "Class 7" },
  { classNum: 8, label: "Class 8" },
  { classNum: 9, label: "Class 9" },
  { classNum: 10, label: "Class 10" },
  { classNum: 11, label: "Class 11" },
  { classNum: 12, label: "Class 12" },
];

export default function SyllabusPage() {
  const [activeNav, setActiveNav] = useState<number>(1);
  const [openDropdowns, setOpenDropdowns] = useState<Set<number>>(new Set());

  const toggleDropdown = (classNum: number) => {
    const newOpenDropdowns = new Set(openDropdowns);
    if (newOpenDropdowns.has(classNum)) {
      newOpenDropdowns.delete(classNum);
    } else {
      newOpenDropdowns.add(classNum);
    }
    setOpenDropdowns(newOpenDropdowns);
  };

  const getSyllabusData = (classNum: number) => {
    switch (classNum) {
      case 6:
        return syllabus6;
      case 7:
        return syllabus7;
      case 8:
        return syllabus8;
      case 9:
        return syllabus9;
      case 10:
        return syllabus10;
      case 11:
        return syllabus11;
      case 12:
        return syllabus12;
      default:
        return [];
    }
  };

  return (
    <main className="relative min-h-0 w-full overflow-x-hidden bg-[#F0ECCF] text-[#0F2851]">
      {/* =========================
          PATTERN BACKGROUND
          ========================= */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/pics/patternfinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* =========================
          PAGE CONTENT
          ========================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 md:px-[6.5%] md:py-12">
        {/* Heading */}
        <h1
          className="
            mb-8
            text-4xl
            font-black
            uppercase
            tracking-wide
            text-[#0F2851]
            sm:text-5xl
            md:text-[52px]
          "
        >
          SYLLABUS
        </h1>

        {/* Intro copy */}
        <div
          className="
            max-w-[1000px]
            text-sm
            font-medium
            leading-relaxed
            text-[#0F2851]
            sm:text-base
            md:text-lg
          "
        >
          Nexus QUEST spans four key academic areas -{" "}
          <span className="font-bold">Logical Reasoning</span>,{" "}
          <span className="font-bold">Mathematics</span>,{" "}
          <span className="font-bold">Physics</span>, and{" "}
          <span className="font-bold">Chemistry</span>, testing students&#39;
          theoretical knowledge, problem-solving capabilities, and real-world
          application of basic concepts. The examination balances
          curriculum-aligned topics with analytical reasoning, delivering a
          complete evaluation of scholarly performance across varied subjects.
        </div>

        {/* =========================
            CLASS TABS (desktop)
            ========================= */}
        <div className="mt-10 hidden md:flex gap-8 border-b border-[#0F2851]/30 w-full">
          {CLASS_TABS.map((tab, i) => (
            <button
              key={tab.classNum}
              onClick={() => setActiveNav(i + 1)}
              className={`pb-3 text-sm md:text-base font-bold uppercase tracking-wide transition-opacity ${
                activeNav === i + 1
                  ? "text-[#0F2851] border-b-2 border-[#0F2851]"
                  : "text-[#0F2851]/50 hover:text-[#0F2851]/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* =========================
            CLASS DROPDOWNS (mobile)
            ========================= */}
        <div className="mt-8 w-full space-y-4 md:hidden">
          {CLASS_TABS.map((classItem) => (
            <div
              key={classItem.classNum}
              className="overflow-hidden rounded-lg bg-[#0F2851] shadow-md"
            >
              <div
                className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-opacity-90"
                onClick={() => toggleDropdown(classItem.classNum)}
              >
                <span className="text-lg font-semibold text-[#F0ECCF]">
                  {classItem.label}
                </span>
                <div className="text-[#F0ECCF]">
                  {openDropdowns.has(classItem.classNum) ? (
                    <ChevronUp className="h-6 w-6" />
                  ) : (
                    <ChevronDown className="h-6 w-6" />
                  )}
                </div>
              </div>

              {openDropdowns.has(classItem.classNum) && (
                <div className="grid w-full auto-rows-max">
                  {getSyllabusData(classItem.classNum).map((item, rowIdx) => {
                    const bgOpacity =
                      rowIdx === 0 ? 1 : Math.max(0, 0.5 - 0.1 * rowIdx);
                    const fontColor = rowIdx !== 0 ? "#F0ECCF" : "#0F2851";

                    return (
                      <div
                        key={rowIdx}
                        className="grid h-fit w-full grid-cols-[1fr_20px_1fr] items-center gap-4 px-5 py-6"
                        style={{
                          background: `rgba(240, 236, 207, ${bgOpacity})`,
                          color: fontColor,
                        }}
                      >
                        <div
                          className={`text-left text-lg leading-relaxed ${
                            rowIdx === 0 ? "font-bold" : "font-medium"
                          }`}
                        >
                          {item.col1}
                        </div>
                        <div className="flex items-center justify-center">
                          •
                        </div>
                        <div
                          className={`text-left text-base leading-relaxed ${
                            rowIdx === 0 ? "font-bold" : "font-medium"
                          }`}
                        >
                          {item.col2}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* =========================
            SYLLABUS TABLE (desktop)
            ========================= */}
        <div className="relative mt-8 hidden w-full auto-rows-max md:grid">
          {getSyllabusData(activeNav + 5).map((item, rowIdx) => {
            const bgOpacity =
              rowIdx === 0 ? 1 : Math.max(0, 0.5 - 0.1 * rowIdx);
            const fontColor = rowIdx !== 0 ? "#0F2851" : "#F0ECCF";

            return (
              <div
                key={rowIdx}
                className="grid h-fit w-full grid-cols-[1fr_30px_3fr] items-center gap-4 px-6 py-6"
                style={{
                  background: `rgba(15, 40, 81, ${
                    rowIdx === 0 ? 1 : bgOpacity * 0.15
                  })`,
                  color: fontColor,
                }}
              >
                <div
                  className={`text-center text-lg leading-relaxed ${
                    rowIdx === 0 ? "font-bold uppercase tracking-wide" : "font-medium"
                  }`}
                >
                  {item.col1}
                </div>
                <div className="flex items-center justify-center">•</div>
                <div
                  className={`text-center text-lg leading-relaxed ${
                    rowIdx === 0 ? "font-bold uppercase tracking-wide" : "font-medium"
                  }`}
                >
                  {item.col2}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}