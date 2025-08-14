"use client";
import { motion,Variants } from "framer-motion";
import ExamDetails from "../components/exam-details/ExamDetails";
import Eligibility from "../components/exam-details/Eligibility";
import Dates from "../components/exam-details/Dates";
import Duration from "../components/exam-details/Duration";
import MarkingScheme from "../components/exam-details/MarkingScheme";
import Format from "../components/exam-details/Format";
import Rocket from "../components/exam-details/Rocket";
import Microscope from "../components/exam-details/Microscope";
import ArrowPointer from "../components/exam-details/ArrowPointer";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600"] });

// fadeInUp animation
const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ExamDetailsPage() {
  return (
    <div
      className={`${raleway.className} relative bg-[#252525] text-[#E8E8C6] px-4 py-8`}
    >
      {/* Microscope aligned to bottom */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
        className="hidden md:block w-[380px] absolute bottom-0 right-0 z-0"
      >
        <Microscope />
      </motion.div>

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
          <ExamDetails />
        </motion.div>

        {/* Eligibility Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
          className="w-full max-w-4xl h-auto py-10"
        >
          <div className="w-[950px] h-[100px]">
            <Eligibility />
          </div>

          <ul className="text-[18px] max-w-5xl mt-4 space-y-3">
            {[
              "Students currently enrolled in Classes 6th to 10th from any recognized school are eligible to participate in Nexus QUEST.",
              "Participants must be actively studying in their respective academic year during the examination period.",
              "Age-appropriate question sets will be provided based on the student’s current class level to ensure fair assessment.",
              "Students from all educational boards (CBSE, ICSE, State boards) within the specified grade range can apply for the examination.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-[16px]">
                  <ArrowPointer />
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Dates Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={3}
          className="py-10"
        >
          <div className="w-[400px] h-[100px]">
            <Dates />
          </div>

          <div className="relative flex mt-6">
            <div className="w-[190px]">
              <Rocket />
            </div>
            <div className="flex flex-col justify-between ml-4 py-2 h-[40px] body-font">
              {[
      { date: "August 7, 2025", label: "Registrations Open" },
      { date: "October 11, 2025", label: "Registrations Close" },
      { date: "October 12, 2025", label: "Quest Olympiad" },
      { date: "Febraury, 2026", label: "Prize Distribution" },
    ].map((item, idx) => (
                <div key={idx} className="mb-2">
                  <div className="text-[34px] font-semibold">{item.date}</div>
                  <div className="text-[18px]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Duration Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={4}
          className="py-12"
        >
          <div className="w-[650px] h-[100px]">
            <Duration />
          </div>
          <p className="text-[16px] max-w-4xl">
            Participants will have a total of 90 minutes to complete the test.
            Make sure to manage your time wisely to attempt all sections.
          </p>
        </motion.div>

        {/* Marking Scheme Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={5}
          className="py-12 w-[1100px]"
        >
          <div className="w-[1150px] h-[100px]">
            <MarkingScheme />
          </div>

          <ul className="text-[16px] max-w-4xl mt-2 space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-[16px]">
                <ArrowPointer />
              </div>
              <span>+1 mark for correct answers</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-[16px]">
                <ArrowPointer />
              </div>
              <span>0 marks for incorrect responses</span>
            </li>
          </ul>
          <p className="mt-2 text-[16px]">There will be no negative marking.</p>
        </motion.div>

        {/* Format Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={6}
          className="flex justify-between py-12 items-start bottom-0 right-0 z-0"
        >
          <div className="w-[calc(100%-420px)]">
            <div className="w-[500px] h-[100px]">
              <Format />
            </div>
            <p className="text-[16px] max-w-4xl mt-2">
              50 multiple-choice questions with single correct answers,
              promoting accuracy and efficient time management.
            </p>
            <ul className="text-[16px] max-w-4xl mt-4 space-y-3">
              {[
                "Logical Reasoning - 20",
                "Mathematics - 10",
                "Physics - 10",
                "Chemistry - 10",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-[16px]">
                    <ArrowPointer />
                  </div>
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
        custom={7}
        className="block md:hidden"
      >
        <div className="space-y-10">
          <div className="w-[400px]">
            <ExamDetails />
          </div>

          <div>
            <div className="w-[350px] h-[40px]">
              <Eligibility />
            </div>
            <ul className="text-[14px] space-y-2 mt-2">
              <li className="flex items-start gap-2">
                <div className="w-[22px]">
                  <ArrowPointer />
                </div>
                <span>
                  Students currently enrolled in Classes 6th to 10th from any
                  recognized school are eligible to participate in Nexus QUEST.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-[20px]">
                  <ArrowPointer />
                </div>
                <span>
                  Participants must be actively studying in their respective
                  academic year during the examination period.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-[13px]">
                  <ArrowPointer />
                </div>
                <span>
                  Class-specific question sets will be provided to ensure fair
                  assessment.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-[15px]">
                  <ArrowPointer />
                </div>
                <span>
                  Students from all boards (CBSE, ICSE, State) within the grade
                  range can apply.
                </span>
              </li>
            </ul>

            <div className="py-10 space-y-6">
              <div className="w-[150px] h-[0px]">
                <Dates />
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="mt-4 md:mt-0 flex flex-col justify-between space-y-4">
                  {[
                    "MONTH 00, 2025",
                    "MONTH 00, 2025",
                    "MONTH 00, 2025",
                    "MONTH 00, 2025",
                  ].map((month, idx) => (
                    <div key={idx}>
                      <div className="text-[24px] md:text-[34px] font-semibold">
                        {month}
                      </div>
                      <div className="text-[16px] md:text-[18px]">
                        Registrations Open
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[400px] h-[40px]">
              <MarkingScheme />
            </div>
            <ul className="text-[14px] mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <div className="w-[12px]">
                  <ArrowPointer />
                </div>
                +1 mark per correct answer
              </li>
              <li className="flex items-start gap-2">
                <div className="w-[12px]">
                  <ArrowPointer />
                </div>
                No negative marking
              </li>
            </ul>
          </div>

          <div>
            <div className="w-[150px] h-[40px]">
              <Format />
            </div>

            <ul className="text-[14px] mt-2 space-y-1">
              {[
                "Logical Reasoning - 20",
                "Maths - 10",
                "Physics - 10",
                "Chemistry - 10",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-[12px]">
                    <ArrowPointer />
                  </div>
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