"use client";

import { useState } from "react";
import {
  syllabus6,
  syllabus7,
  syllabus8,
  syllabus9,
  syllabus10,
} from "../components/syllabus/content";

export default function SyllabusPage() {
  const [activeNav, setActiveNav] = useState<number>(1);

  return (
    <div className="relative flex flex-col gap-15 items-start body-font bg-[var(--background)] min-h-screen px-5 pt-10 pb-20">
      {/* Books Illustration */}
      <div className="absolute top-0 right-0">
        <img
          src="/syllabus/books.svg"
          alt="books"
          className="w-[350px] h-auto"
        />
      </div>

      {/* Top Section */}
      <div className="flex flex-col gap-7 w-[67vw]">
        {/* Title Image */}
        <img
          src="/syllabus/syllabus.svg"
          alt="syllabus"
          className="w-[62vw] h-auto"
        />

        {/* Description Text */}
        <div className="text-justify text-lg leading-relaxed text-[var(--foreground)]">
          Nexus QUEST spans four key academic areas -{" "}
          <span className="font-semibold">Logical Reasoning</span>,{" "}
          <span className="font-semibold">Mathematics</span>,{" "}
          <span className="font-semibold">Physics</span>, and{" "}
          <span className="font-semibold">Chemistry</span>, testing students'
          theoretical knowledge, problem-solving capabilities, and real-world
          application of basic concepts. The examination balances
          curriculum-aligned topics with analytical reasoning, delivering a
          complete evaluation of scholarly performance across varied subjects.
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-10 w-full">
        {/* NavBar SVG with clickable zones */}
        <div className="relative w-full h-auto">
          <img
            src={`/syllabus/s${activeNav + 5}.svg`}
            alt={`navbar s${activeNav + 5}`}
            className="w-full"
          />
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute top-0 h-full"
              style={{
                left: `${i * 20}%`,
                width: "20%",
                cursor: "pointer",
              }}
              onClick={() => setActiveNav(i + 1)}
            />
          ))}
        </div>

        {/* Class SVG Display */}
        <div>
          <img
            src={`/syllabus/class${activeNav + 5}.svg`}
            alt={`class${activeNav + 5}`}
            className="w-auto h-[70px]"
          />
        </div>

        {/* Syllabus Table */}
        <div className="grid grid-rows-5 relative text-[var(--background)] w-full">
          {/* Corner SVGs */}
          {["", "rotate-90", "-rotate-90", "rotate-180"].map(
            (rotation, idx) => (
              <img
                key={idx}
                src="/syllabus/corner.svg"
                alt="corner"
                className={`absolute w-6 h-6 ${
                  idx === 0
                    ? "top-0 left-0"
                    : idx === 1
                    ? "top-0 right-0"
                    : idx === 2
                    ? "bottom-0 left-0"
                    : "bottom-0 right-0"
                } ${rotation}`}
              />
            )
          )}

          {/* Syllabus Rows */}
          {(activeNav === 1
            ? syllabus6
            : activeNav === 2
            ? syllabus7
            : activeNav === 3
            ? syllabus8
            : activeNav === 4
            ? syllabus9
            : activeNav === 5
            ? syllabus10
            : []
          ).map((item, rowIdx) => {
            const baseColor = "232, 232, 198";
            const bgOpacity =
              rowIdx === 0 ? 1 : Math.max(0, 0.5 - 0.1 * rowIdx); // 1, 0.4, 0.3, 0.2, 0.1
            const fontColor =
              rowIdx != 0 ? "var(--foreground)" : "var(--background)";

            return (
              <div
                key={rowIdx}
                className="grid grid-cols-[1fr_30px_3fr] items-center px-10 py-2 gap-10 w-full"
                style={{
                  background: `rgba(${baseColor}, ${bgOpacity})`,
                  color: `${fontColor}`,
                }}
              >
                <div className="text-left text-lg leading-relaxed">
                  {item.col1}
                </div>
                <div className="flex justify-center">
                  <img
                    src="/syllabus/dot-separator.svg"
                    alt="separator"
                    className="w-[10px] h-auto"
                  />
                </div>
                <div className="text-justify text-lg leading-relaxed">
                  {item.col2}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
