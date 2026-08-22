"use client";
import { motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

// fadeInUp animation
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ELIGIBILITY_ITEMS = [
  "Students currently enrolled in Classes 6th to 12th from any recognized school are eligible to participate in Nexus QUEST.",
  "Participants must be actively studying in their respective academic year during the examination period.",
  "Standard-appropriate question sets will be provided based on the student's current class level to ensure fair assessment.",
  "Students from all educational boards (CBSE, ICSE, State boards) within the specified grade range can apply for the examination.",
];

const EXAM_DATES = [
  { date: "August 23, 2026", label: "Registrations Open" },
  { date: "October 15, 2026", label: "Registrations Close" },
  { date: "1st Week of November (date TBA)", label: "Quest Olympiad" },
  { date: "January 8, 2027", label: "Prize Distribution" },
];

const MARKING_SCHEME_ITEMS = [
  "+1 mark for correct answers",
  "-0.5 marks for incorrect responses",
  "0 marks for unattempted questions",
];

const FORMAT_610 = [
  "Logical Reasoning - 15",
  "Mathematics - 15",
  "Physics - 10",
  "Chemistry - 10",
];

const FORMAT_1112 = [
  "Logical Reasoning - 5",
  "Mathematics - 15",
  "Physics - 15",
  "Chemistry - 15",
];

export default function ExamDetailsPage() {
  return (
    <div className="overflow-x-hidden body-font relative bg-[var(--background)] text-[var(--foreground)] px-4 py-8">
      {/* Desktop Version */}
      <div className="hidden md:block">
        {/* Exam Details */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
          className="w-full max-w-7xl h-auto py-10"
        >
          <SectionHeading title="Exam Details" />
        </motion.div>

        {/* Eligibility Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
          className="w-full max-w-4xl h-auto py-10"
        >
          <SectionHeading title="Eligibility" />

          <ul className="text-[18px] max-w-5xl mt-4 space-y-3">
            {ELIGIBILITY_ITEMS.map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight size={18} className="flex-shrink-0 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Examination Mode Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={3}
          className="py-10"
        >
          <SectionHeading title="Examination Mode" />
          <p className="text-[16px] max-w-4xl mt-4">
            Online examination conducted on the Unstop platform with an
            integrated proctoring system, ensuring accessibility, security,
            and convenience for participants nationwide.
          </p>
        </motion.div>

        {/* Dates Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={4}
          className="py-10"
        >
          <SectionHeading title="Important Dates" />

          <div className="flex flex-col justify-between mt-6 py-2 body-font">
            {EXAM_DATES.map((item, idx) => (
              <div key={idx} className="mb-2">
                <div className="text-[34px] font-semibold">{item.date}</div>
                <div className="text-[18px]">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Duration Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={5}
          className="py-12"
        >
          <SectionHeading title="Duration" />
          <p className="text-[16px] max-w-4xl mt-4">
            Participants will have a total of 90 minutes for a comprehensive
            assessment across all subject areas. Make sure to manage your
            time wisely to attempt all sections.
          </p>
        </motion.div>

        {/* Marking Scheme Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={6}
          className="py-10 w-fit"
        >
          <SectionHeading title="Marking Scheme" />

          <ul className="text-[16px] max-w-4xl mt-4 space-y-3">
            {MARKING_SCHEME_ITEMS.map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight size={18} className="flex-shrink-0 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Format Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={7}
          className="flex justify-between py-12 items-start"
        >
          <div className="w-[calc(100%-420px)]">
            <SectionHeading title="Exam Format" />
            <p className="text-[16px] max-w-4xl mt-4">
              50 multiple-choice questions with single correct answers,
              promoting accuracy and efficient time management.
            </p>

            <p className="text-[16px] font-semibold mt-6">
              For Classes 6th to 10th:
            </p>
            <ul className="text-[16px] max-w-4xl mt-2 space-y-3">
              {FORMAT_610.map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight size={18} className="flex-shrink-0 mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <p className="text-[16px] font-semibold mt-6">
              For Classes 11th and 12th:
            </p>
            <ul className="text-[16px] max-w-4xl mt-2 space-y-3">
              {FORMAT_1112.map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight size={18} className="flex-shrink-0 mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Mobile Version */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={8}
        className="block md:hidden"
      >
        <div className="space-y-10">
          <SectionHeading title="Exam Details" />

          <div>
            <SectionHeading title="Eligibility" />
            <ul className="text-[14px] space-y-2 mt-2">
              {ELIGIBILITY_ITEMS.map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight size={16} className="flex-shrink-0 mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="py-6">
              <SectionHeading title="Examination Mode" />
              <p className="text-[14px] mt-2">
                Online examination conducted on the Unstop platform with an
                integrated proctoring system, ensuring accessibility,
                security, and convenience for participants nationwide.
              </p>
            </div>

            <div className="py-10 space-y-6">
              <SectionHeading title="Important Dates" />

              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="mt-4 md:mt-0 flex flex-col justify-between space-y-4">
                  {EXAM_DATES.map((item, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="text-[30px] font-semibold">
                        {item.date}
                      </div>
                      <div className="text-[15px]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <SectionHeading title="Marking Scheme" />
            <ul className="text-[14px] mt-2 space-y-1">
              {MARKING_SCHEME_ITEMS.map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight size={14} className="flex-shrink-0 mt-1" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading title="Exam Format" />
            <p className="text-[14px] mt-2">
              50 multiple-choice questions with single correct answers,
              promoting accuracy and efficient time management.
            </p>

            <p className="text-[14px] font-semibold mt-4">
              For Classes 6th to 10th:
            </p>
            <ul className="text-[14px] mt-2 space-y-1">
              {FORMAT_610.map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight size={14} className="flex-shrink-0 mt-1" />
                  {text}
                </li>
              ))}
            </ul>

            <p className="text-[14px] font-semibold mt-4">
              For Classes 11th and 12th:
            </p>
            <ul className="text-[14px] mt-2 space-y-1">
              {FORMAT_1112.map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight size={14} className="flex-shrink-0 mt-1" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}