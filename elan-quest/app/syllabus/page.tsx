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
import { motion, Variants } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

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

  // Framer Motion variants for staggered sections
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="relative flex flex-col gap-15 w-full items-start body-font bg-[var(--background)] min-h-screen px-0 pt-1 box-border"
    >
      <div className="flex flex-col gap-15 items-center md:items-start body-font bg-[var(--background)] min-h-screen px-5 pt-10 pb-20 box-border">
        {/* Top Section */}
        <motion.div
          variants={sectionVariants}
          className="mt-0 flex flex-col items-center md:mt-0 md:items-start gap-7 w-[300px] md:w-full box-border"
        >
          <SectionHeading title="Syllabus" />
          <div className="md:text-justify text-left text-lg leading-relaxed text-[var(--foreground)] w-full box-border">
            Nexus QUEST spans four key academic areas -{" "}
            <span className="font-semibold">Logical Reasoning</span>,{" "}
            <span className="font-semibold">Mathematics</span>,{" "}
            <span className="font-semibold">Physics</span>, and{" "}
            <span className="font-semibold">Chemistry</span>, testing students&#39;
            theoretical knowledge, problem-solving capabilities, and real-world
            application of basic concepts.{" "}
            <span className="md:block hidden">
              The examination balances curriculum-aligned topics with analytical
              reasoning, delivering a complete evaluation of scholarly
              performance across varied subjects.
            </span>
          </div>
        </motion.div>

        {/* Class Tabs — plain buttons instead of 5 image states + invisible click overlays */}
        <motion.div
          variants={sectionVariants}
          className="hidden md:flex gap-6 border-b border-[var(--foreground)] w-full box-border"
        >
          {CLASS_TABS.map((tab, i) => (
            <button
              key={tab.classNum}
              onClick={() => setActiveNav(i + 1)}
              className={`pb-3 body-font text-lg transition-opacity ${
                activeNav === i + 1
                  ? "font-semibold border-b-2 border-[var(--foreground)]"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Class Dropdowns (mobile) */}
        <motion.div
          variants={sectionVariants}
          className="w-full max-w-4xl mx-auto space-y-4"
        >
          {CLASS_TABS.map((classItem) => (
            <div
              key={classItem.classNum}
              className="md:hidden block bg-[var(--foreground)] rounded-lg shadow-lg overflow-hidden"
            >
              {/* Dropdown Header */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-opacity-90 transition-colors"
                onClick={() => toggleDropdown(classItem.classNum)}
              >
                <span className="text-[var(--background)] body-font text-lg font-semibold">
                  {classItem.label}
                </span>
                <div className="text-[var(--background)]">
                  {openDropdowns.has(classItem.classNum) ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </div>

              {/* Dropdown Content - Syllabus Table */}
              {openDropdowns.has(classItem.classNum) && (
                <motion.div
                  variants={sectionVariants}
                  className="grid auto-rows-max relative text-[var(--background)] w-full box-border md:hidden"
                >
                  {getSyllabusData(classItem.classNum).map((item, rowIdx) => {
                    const baseColor = "232, 232, 198";
                    const bgOpacity =
                      rowIdx === 0 ? 1 : Math.max(0, 0.5 - 0.1 * rowIdx);
                    const fontColor =
                      rowIdx !== 0 ? "var(--background)" : "var(--foreground)";

                    return (
                      <div
                        key={rowIdx}
                        className="grid grid-cols-[1fr_20px_1fr] h-fit items-center px-5 py-6 gap-4 w-full box-border"
                        style={{
                          background: `rgba(${baseColor}, ${bgOpacity})`,
                          color: `${fontColor}`,
                        }}
                      >
                        <div
                          className={`text-left text-xl leading-relaxed box-border ${
                            rowIdx === 0 ? "font-bold" : ""
                          }`}
                        >
                          {item.col1}
                        </div>
                        <div className="flex justify-center items-center box-border">
                          •
                        </div>
                        <div
                          className={`text-left text-lg leading-relaxed box-border ${
                            rowIdx === 0 ? "font-bold" : ""
                          }`}
                        >
                          {item.col2}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Syllabus Table (desktop) */}
        <motion.div
          variants={sectionVariants}
          className="md:grid hidden auto-rows-max md:grid-rows-5 relative text-[var(--background)] w-full box-border"
        >
          {getSyllabusData(activeNav + 5).map((item, rowIdx) => {
            const baseColor = "232, 232, 198";
            const bgOpacity =
              rowIdx === 0 ? 1 : Math.max(0, 0.5 - 0.1 * rowIdx);
            const fontColor =
              rowIdx !== 0 ? "var(--foreground)" : "var(--background)";

            return (
              <div
                key={rowIdx}
                className="grid grid-cols-[1fr_20px_1fr] md:grid-cols-[1fr_30px_3fr] md:h-auto h-fit items-center md:px-6 px-5 py-6 gap-4 w-full box-border"
                style={{
                  background: `rgba(${baseColor}, ${bgOpacity})`,
                  color: `${fontColor}`,
                }}
              >
                <div
                  className={`text-left md:text-center md:text-lg text-xl leading-relaxed box-border ${
                    rowIdx == 0 ? "font-bold" : ""
                  }`}
                >
                  {item.col1}
                </div>
                <div className="flex justify-center items-center box-border">
                  •
                </div>
                <div
                  className={`text-left md:text-center md:text-lg text-lg leading-relaxed box-border ${
                    rowIdx === 0 ? "font-bold" : ""
                  }`}
                >
                  {item.col2}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}