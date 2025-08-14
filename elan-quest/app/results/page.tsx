"use client";

import { motion } from "framer-motion";

export const MotionUl = motion("ul");
export const MotionLi = motion("li");

export default function ResultsPage() {
  const processItems = [
    {
      id: 1,
      content:
        "Results will be declared within 7 days of the examination date and will be communicated through the official portal and registered email addresses.",
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
        {/* Decorative SVGs */}
        <img
          src="/results/first.svg"
          alt="first"
          className="absolute top-[7rem] right-0 w-[210px] sm:w-[310px] md:top-0 md:w-[140px] lg:w-[300px] xl:w-[340px] h-auto hidden md:block"
        />
        <img
          src="/results/second.svg"
          alt="second"
          className="absolute top-[40rem] right-0 w-[130px] sm:w-[150px] md:w-[70px] md:top-[30rem] lg:top-[28rem] lg:w-[150px] xl:top-[35rem] h-auto hidden md:block"
        />
        <img
          src="/results/trophy.svg"
          alt="trophy"
          className="absolute bottom-0 left-0 w-[200px] md:w-[170px] lg:w-[220px] xl:w-[200px] h-auto hidden md:block"
        />

        {/* Main Container */}
        <div className="flex flex-col items-center md:items-start gap-6 sm:gap-10 max-w-7xl mx-auto box-border">
          {/* Results Image */}
          <img
            src="/results/results.svg"
            alt="results"
            className="w-full max-w-[300px] sm:max-w-[500px] h-auto mb-4 sm:mb-[16px]"
          />

          {/* Process Section */}
          <div className="w-full md:w-[90%] lg:w-[75%] flex flex-col mb-5 box-border">
            <div className="flex md:justify-start justify-center mb-4 sm:mb-[11px]">
              <img
                src="/results/process.svg"
                alt="process"
                className="w-[200px] sm:w-[300px] h-auto"
              />
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
                  <img
                    src="/results/pointer.svg"
                    alt="pointer"
                    className="w-[15px] sm:w-[20px] h-auto flex-shrink-0 mt-1"
                  />
                  <div>{item.content}</div>
                </MotionLi>
              ))}
            </MotionUl>
          </div>

          {/* Awards Section */}
          <div className="w-full md:w-[75%] lg:w-[75%] flex flex-col xl:ml-55 md:ml-auto box-border">
            <div className="flex md:justify-start justify-center mb-4 sm:mb-[11px]">
              <img
                src="/results/awards.svg"
                alt="awards"
                className="w-[200px] sm:w-[300px] h-auto"
              />
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
                  <img
                    src="/results/pointer.svg"
                    alt="pointer"
                    className="w-[15px] sm:w-[20px] h-auto flex-shrink-0 mt-1"
                  />
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
