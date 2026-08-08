"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

export const MotionUl = motion("ul");
export const MotionLi = motion("li");

export default function ResultsPage() {
  const processItems = [
    {
      id: 1,
      content:
        "Results will be declared within one month of the examination date and will be communicated through the official portal and registered email addresses.",
    },
    {
      id: 2,
      content:
        "Every participant will receive a detailed digital marksheet, outlining their scores in each section: Mental Ability (MAT), Mathematics, Physics, and Chemistry.",
    },
    {
      id: 3,
      content:
        "The overall performance will be assessed using the absolute scores from all sections combined.",
    },
    {
      id: 4,
      content:
        "In the event of tied scores, tie-breakers will be applied in the following order of section scores: Mathematics, followed by Mental Ability, Physics, and then Chemistry.",
    },
    {
      id: 5,
      content:
        "Top-performing students will be shortlisted for further honors based on standard-wise and school-wise performance segmentation.",
    },
    {
      id: 6,
      content:
        "Selected high achievers will receive formal invitations to the prestigious Elan & nVision festival at IIT Hyderabad, where they will be felicitated at a special award ceremony.",
    },
    {
      id: 7,
      content:
        "Final selections and merit lists will undergo a thorough validation process by the academic team before announcement.",
    },
    {
      id: 8,
      content:
        "Any changes or re-evaluation requests will be addressed through a formal review mechanism, details of which will be shared post result declaration.",
    },
  ];

  const awardsList = [
    {
      id: 1,
      content:
        "Top 3 achievers from every class in each school will be awarded Merit Medals and Certificates of Recognition.",
    },
    {
      id: 2,
      content:
        "Top 10 highest scorers per class will be presented with Excellence Medals and receive exclusive goodies and rewards.",
    },
    {
      id: 3,
      content:
        "Students will visit the IIT Hyderabad campus, exploring cutting-edge labs and state-of-the-art facilities on guided tours.",
    },
    {
      id: 4,
      content:
        "Participants will interact with current students, gaining insights, mentorship, and lasting connections.",
    },
    {
      id: 5,
      content:
        "Grand award celebration at IIT Hyderabad with media coverage — winners will be featured on official platforms to honor their success.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden box-border"
    >
      <div className="relative min-h-screen px-4 sm:px-5 py-8 sm:py-10 bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden pb-20 box-border">
        {/* Main Container */}
        <div className="flex flex-col items-center md:items-start body-font gap-6 sm:gap-10 max-w-7xl mx-auto box-border">
          <SectionHeading title="Results" />

          {/* Process Section */}
          <div className="w-full md:w-[90%] lg:w-[75%] flex flex-col mb-5 box-border">
            <div className="mb-4 sm:mb-[11px]">
              <SectionHeading title="Process" />
            </div>
            <MotionUl
              className="text-justify text-sm sm:text-base"
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {processItems.map((item) => (
                <MotionLi
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="py-2 sm:py-3 flex gap-5 sm:gap-3 items-start box-border"
                >
                  <ChevronRight size={18} className="flex-shrink-0 mt-1" />
                  <div>{item.content}</div>
                </MotionLi>
              ))}
            </MotionUl>
          </div>

          {/* Awards Section */}
          <div className="w-full md:w-[75%] lg:w-[75%] flex flex-col box-border">
            <div className="mb-4 sm:mb-[11px]">
              <SectionHeading title="Awards & Prizes" />
            </div>
            <p className="md:text-justify text-center py-2 mb-4 sm:mb-[11px] text-sm sm:text-base">
              The participating students stand to gain many prizes and goodies,
              as well as invaluable experience by participating in the Nexus
              QUEST examination:
            </p>
            <MotionUl
              className="text-justify text-sm sm:text-base"
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {awardsList.map((item) => (
                <MotionLi
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="py-2 sm:py-3 flex gap-5 sm:gap-3 items-start box-border"
                >
                  <ChevronRight size={18} className="flex-shrink-0 mt-1" />
                  <div>{item.content}</div>
                </MotionLi>
              ))}
            </MotionUl>
          </div>
        </div>
      </div>
    </motion.div>
  );
}