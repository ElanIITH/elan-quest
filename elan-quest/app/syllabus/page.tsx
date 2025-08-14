"use client";

import { useState } from "react";
import {
  syllabus6,
  syllabus7,
  syllabus8,
  syllabus9,
  syllabus10,
} from "../components/syllabus/content";
import { motion, Variants } from "framer-motion";
import RegisterPopUp from "../components/common/RegisterPopUp";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SyllabusPage() {
  const [activeNav, setActiveNav] = useState<number>(1);
  const [showPopup, setShowPopup] = useState(false);
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
        staggerChildren: 0.25, // delay between each child section
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
        {/* Mobile Books Illustration */}
        <motion.div
          variants={sectionVariants}
          className="absolute top-5 mx-auto"
        >
          <img
            src="/mobile/syllabus/books.svg"
            alt="books"
            className="md:hidden hidden w-[130px] md:w-[200px] lg:w-[270px] xl:w-[350px] h-auto max-w-[45vw] box-border"
          />
        </motion.div>

        {/* Books Illustration */}
        <motion.div
          variants={sectionVariants}
          className="absolute top-0 right-0"
        >
          <img
            src="/syllabus/books.svg"
            alt="books"
            className="hidden md:w-[200px] md:block lg:w-[270px] xl:w-[350px] h-auto max-w-[45vw] box-border"
          />
        </motion.div>

        {/* Top Section */}
        <motion.div
          variants={sectionVariants}
          className="mt-0 flex flex-col items-center md:mt-0 md:items-start gap-7 w-[300px] md:w-full box-border"
        >
          <img
            src="/syllabus/syllabus.svg"
            alt="syllabus"
            className="md:relative md:top-7 lg:relative lg:top-0 w-[1000px] md:w-[50vw] max-w-full h-auto box-border"
          />
          <div className="md:text-justify text-left text-lg leading-relaxed text-[var(--foreground)] md:pt-17 w-full  md:w-full lg:pt-0 lg:w-[67vw] box-border">
            Nexus QUEST spans four key academic areas -{" "}
            <span className="font-semibold">Logical Reasoning</span>,{" "}
            <span className="font-semibold">Mathematics</span>,{" "}
            <span className="font-semibold">Physics</span>, and{" "}
            <span className="font-semibold">Chemistry</span>, testing students'
            theoretical knowledge, problem-solving capabilities, and real-world
            application of basic concepts.{" "}
            <span className="md:block hidden">
              The examination balances curriculum-aligned topics with analytical
              reasoning, delivering a complete evaluation of scholarly
              performance across varied subjects.
            </span>
          </div>
        </motion.div>

        {/* NavBar */}
        <motion.div
          variants={sectionVariants}
          className="relative md:block hidden md:w-full w-[90vw] h-auto xl:mt-10 box-border"
        >
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
        </motion.div>

        {/* Class SVG */}
        <motion.div variants={sectionVariants} className="box-border xl:mt-5">
          <img
            src={`/syllabus/class${activeNav + 5}.svg`}
            alt={`class${activeNav + 5}`}
            className="md:block hidden md:w-auto md:h-[70px] w-full h-[30px] mx-auto md:mx-0 box-border"
          />
        </motion.div>

        {/* Class Dropdowns */}
        <motion.div
          variants={sectionVariants}
          className="w-full max-w-4xl mx-auto space-y-4"
        >
          {[
            {
              classNum: 6,
              link: "https://unstop.com/p/nexus-quest-for-grade-6-iit-hyderabad-1530540",
              img: "/popup/c6.svg",
            },
            {
              classNum: 7,
              link: "https://unstop.com/p/nexus-quest-for-grade-7-iit-hyderabad-1540529",
              img: "/popup/c7.svg",
            },
            {
              classNum: 8,
              link: "https://unstop.com/p/nexus-quest-for-grade-8-iit-hyderabad-1540532",
              img: "/popup/c8.svg",
            },
            {
              classNum: 9,
              link: "https://unstop.com/p/nexus-quest-for-grade-9-iit-hyderabad-1541230",
              img: "/popup/c9.svg",
            },
            {
              classNum: 10,
              link: "https://unstop.com/p/nexus-quest-for-grade-10-iit-hyderabad-1541233",
              img: "/popup/c10.svg",
            },
          ].map((classItem) => (
            <div
              key={classItem.classNum}
              className="md:hidden block bg-[var(--foreground)] rounded-lg shadow-lg overflow-hidden"
            >
              {/* Dropdown Header */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-opacity-90 transition-colors"
                onClick={() => toggleDropdown(classItem.classNum)}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={classItem.img}
                    alt={`class ${classItem.classNum}`}
                    className="w-auto h-[50px]"
                  />
                </div>
                <div className="text-[var(--background)]">
                  {openDropdowns.has(classItem.classNum) ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </div>

              {/* Dropdown Content - Syllabus Table */}
              {/* Dropdown Content - Syllabus Table */}
              {openDropdowns.has(classItem.classNum) && (
                <motion.div
                  variants={sectionVariants}
                  className="grid auto-rows-max xl:mt-5 relative text-[var(--background)] w-full box-border md:hidden"
                >
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
                        <div className="flex justify-center box-border">
                          <img
                            src="/syllabus/dot-separator.svg"
                            alt="separator"
                            className="w-[10px] h-auto box-border"
                          />
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

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out forwards;
          }
        `}</style>

        {/* Syllabus Table */}
        <motion.div
          variants={sectionVariants}
          className=" md:grid hidden auto-rows-max md:grid-rows-5 xl:mt-5 relative text-[var(--background)] w-full box-border"
        >
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
                <div className="flex justify-center box-border">
                  <img
                    src="/syllabus/dot-separator.svg"
                    alt="separator"
                    className="w-[10px] h-auto box-border"
                  />
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
