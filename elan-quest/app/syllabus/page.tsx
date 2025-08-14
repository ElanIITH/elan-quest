"use client";

import { useState } from "react";
import {
  syllabus6,
  syllabus7,
  syllabus8,
  syllabus9,
  syllabus10,
} from "../components/syllabus/content";
import { motion } from "framer-motion";

export default function SyllabusPage() {
  const [activeNav, setActiveNav] = useState<number>(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col gap-15 w-full items-start body-font bg-[var(--background)] min-h-screen px-0 pt-1 box-border"
    >
      <div className="flex flex-col gap-15 items-start body-font bg-[var(--background)] min-h-screen px-5 pt-10 pb-20 box-border">
        {" "}
        {/* Books Illustration */}
        <div className="absolute top-0 right-0">
          <img
            src="/syllabus/books.svg"
            alt="books"
            className="hidden md:w-[200px] md:block lg:w-[270px] xl:w-[350px] h-auto max-w-[45vw] box-border"
          />
        </div>
        {/* Top Section */}
        <div className="flex flex-col items-center md:items-start gap-7 w-full box-border">
          {/* Title Image */}
          <img
            src="/syllabus/syllabus.svg"
            alt="syllabus"
            className="md:relative md:top-7 lg:relative lg:top-0 w-[82vw] md:w-[62vw] max-w-full h-auto box-border"
          />

          {/* Description Text */}
          <div className="md:text-justify text-center text-lg leading-relaxed text-[var(--foreground)] md:pt-17 md:w-full lg:pt-0 lg:w-[67vw] box-border">
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
        <div className="flex flex-col gap-10 w-full box-border">
          {/* NavBar SVG with clickable zones */}
          <div className="relative md:w-full w-[90vw] h-auto xl:mt-10 box-border">
            <img
              src={`/syllabus/s${activeNav + 5}.svg`}
              alt={`navbar s${activeNav + 5}`}
              className="w-full box-border"
            />
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="absolute top-0 h-full box-border"
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
          <div className="box-border xl:mt-5">
            <img
              src={`/syllabus/class${activeNav + 5}.svg`}
              alt={`class${activeNav + 5}`}
              className="md:w-auto md:h-[70px] w-full h-[30px] mx-auto md:mx-0 box-border"
            />
          </div>

          {/* Syllabus Table */}
          <div className="grid auto-rows-max md:grid-rows-5 xl:mt-5 relative text-[var(--background)] w-full box-border">
            {/* Corner SVGs */}
            {["", "rotate-90", "-rotate-90", "rotate-180"].map(
              (rotation, idx) => (
                <img
                  key={idx}
                  src="/syllabus/corner.svg"
                  alt="corner"
                  className={`absolute w-6 h-6 box-border ${
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
                  className="grid grid-cols-[1fr_20px_1fr] md:grid-cols-[1fr_30px_3fr] md:h-auto h-fit items-center md:px-6 px-5 py-6 gap-4 w-full box-border"
                  style={{
                    background: `rgba(${baseColor}, ${bgOpacity})`,
                    color: `${fontColor}`,
                  }}
                >
                  <div className="text-center md:text-left md:text-lg text-xl md:font-normal font-semibold leading-relaxed box-border">
                    {item.col1}
                  </div>
                  <div className="flex justify-center box-border">
                    <img
                      src="/syllabus/dot-separator.svg"
                      alt="separator"
                      className="w-[10px] h-auto box-border"
                    />
                  </div>
                  <div className="text-center md:text-left md:text-lg text-lg leading-relaxed box-border">
                    {item.col2}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
