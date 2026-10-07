// "use client";

// import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";
// import SectionHeading from "../components/common/SectionHeading";

// export const MotionUl = motion("ul");
// export const MotionLi = motion("li");

// export default function ResultsPage() {
//   const processItems = [
//     {
//       id: 1,
//       content:
//         "Results will be declared within one month of the examination date and will be communicated through the official portal and registered email addresses.",
//     },
//     {
//       id: 2,
//       content:
//         "Every participant will receive a detailed digital marksheet, outlining their scores in each section: Mental Ability (MAT), Mathematics, Physics, and Chemistry.",
//     },
//     {
//       id: 3,
//       content:
//         "The overall performance will be assessed using the absolute scores from all sections combined.",
//     },
//     {
//       id: 4,
//       content:
//         "In the event of tied scores, tie-breakers will be applied in the following order of section scores: Mathematics, followed by Mental Ability, Physics, and then Chemistry.",
//     },
//     {
//       id: 5,
//       content:
//         "Top-performing students will be shortlisted for further honors based on standard-wise and school-wise performance segmentation.",
//     },
//     {
//       id: 6,
//       content:
//         "Selected high achievers will receive formal invitations to the prestigious Elan & nVision festival at IIT Hyderabad, where they will be felicitated at a special award ceremony.",
//     },
//     {
//       id: 7,
//       content:
//         "Final selections and merit lists will undergo a thorough validation process by the academic team before announcement.",
//     },
//     {
//       id: 8,
//       content:
//         "Any changes or re-evaluation requests will be addressed through a formal review mechanism, details of which will be shared post result declaration.",
//     },
//   ];

//   const awardsList = [
//     {
//       id: 1,
//       content:
//         "Top 3 achievers from every class in each school will be awarded Merit Medals and Certificates of Recognition.",
//     },
//     {
//       id: 2,
//       content:
//         "Top 10 highest scorers per class will be presented with Excellence Medals and receive exclusive goodies and rewards.",
//     },
//     {
//       id: 3,
//       content:
//         "Students will visit the IIT Hyderabad campus, exploring cutting-edge labs and state-of-the-art facilities on guided tours.",
//     },
//     {
//       id: 4,
//       content:
//         "Participants will interact with current students, gaining insights, mentorship, and lasting connections.",
//     },
//     {
//       id: 5,
//       content:
//         "Grand award celebration at IIT Hyderabad with media coverage — winners will be featured on official platforms to honor their success.",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden box-border"
//     >
//       <div className="relative min-h-screen px-4 sm:px-5 py-8 sm:py-10 bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden pb-20 box-border">
//         {/* Main Container */}
//         <div className="flex flex-col items-center md:items-start body-font gap-6 sm:gap-10 max-w-7xl mx-auto box-border">
//           <SectionHeading title="Results" />

//           {/* Process Section */}
//           <div className="w-full md:w-[90%] lg:w-[75%] flex flex-col mb-5 box-border">
//             <div className="mb-4 sm:mb-[11px]">
//               <SectionHeading title="Process" />
//             </div>
//             <MotionUl
//               className="text-justify text-sm sm:text-base"
//               initial="hidden"
//               animate="visible"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={{
//                 visible: {
//                   transition: {
//                     staggerChildren: 0.1,
//                   },
//                 },
//               }}
//             >
//               {processItems.map((item) => (
//                 <MotionLi
//                   key={item.id}
//                   variants={{
//                     hidden: { opacity: 0, y: 20 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                   className="py-2 sm:py-3 flex gap-5 sm:gap-3 items-start box-border"
//                 >
//                   <ChevronRight size={18} className="flex-shrink-0 mt-1" />
//                   <div>{item.content}</div>
//                 </MotionLi>
//               ))}
//             </MotionUl>
//           </div>

//           {/* Awards Section */}
//           <div className="w-full md:w-[75%] lg:w-[75%] flex flex-col box-border">
//             <div className="mb-4 sm:mb-[11px]">
//               <SectionHeading title="Awards & Prizes" />
//             </div>
//             <p className="md:text-justify text-center py-2 mb-4 sm:mb-[11px] text-sm sm:text-base">
//               The participating students stand to gain many prizes and goodies,
//               as well as invaluable experience by participating in the Nexus
//               QUEST examination:
//             </p>
//             <MotionUl
//               className="text-justify text-sm sm:text-base"
//               initial="hidden"
//               animate="visible"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={{
//                 visible: {
//                   transition: {
//                     staggerChildren: 0.1,
//                   },
//                 },
//               }}
//             >
//               {awardsList.map((item) => (
//                 <MotionLi
//                   key={item.id}
//                   variants={{
//                     hidden: { opacity: 0, y: 20 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                   className="py-2 sm:py-3 flex gap-5 sm:gap-3 items-start box-border"
//                 >
//                   <ChevronRight size={18} className="flex-shrink-0 mt-1" />
//                   <div>{item.content}</div>
//                 </MotionLi>
//               ))}
//             </MotionUl>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const MotionUl = motion("ul");
export const MotionLi = motion("li");

export default function ResultsPage() {
  const tableData = [
    { label: "Exam Organizing Body", value: "Elan & nVision, IIT Hyderabad" },
    { label: "Eligibility", value: "Students from classes 6 - 12" },
    { label: "Exam Level", value: "Intermediate" },
    { label: "Application Process", value: "Via Unstop" },
    { label: "Exam Dates", value: "November 1st Week" },
    { label: "Exam Mode", value: "Online" },
    { label: "Fee of registration", value: "₹ 350" },
    {
      label: "Objective",
      value:
        "To identify young academic talent by promoting conceptual learning, logical reasoning and creative problem solving",
    },
    { label: "Languages", value: "English" },
    { label: "Duration", value: "90 minutes" },
  ];

  const datesData = [
    { label: "Registrations", value: "August 23, 2026" },
    { label: "Registrations Close", value: "October 15, 2026" },
    { label: "Quest Olympiad", value: "1st week of November (date TBA)" },
    { label: "Prize Distribution", value: "January 8, 2027" },
  ];

  const eligibilityList = [
    "Students currently enrolled in Classes 6th to 12th from any recognized school are eligible to participate in Nexus QUEST.",
    "Students from all educational boards (CBSE, ICSE, State boards) within the specified grade range can apply for the examination.",
  ];

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
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full overflow-x-hidden bg-[#F0ECCF] text-[#0F2851]"
    >
      {/* Pattern Background Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: "url('/pics/patternfinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* Hero Header Banner */}
      <header className="relative z-10 w-full pt-12 pb-16 px-6 md:px-16 flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0F2851] uppercase">
            RESULTS
          </h1>
        </div>

        {/* Trophy Illustration Graphic */}
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 flex-shrink-0">
          <Image
            src="/pics/prize.png" // Ensure this image path matches your public folder
            alt="Trophy Celebration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 space-y-16">
        
        {/* Exam Overview Specifications Table */}
        <section className="relative bg-transparent">
          {/* Top Right Floating Medal Asset
          <div className="absolute -top-10 -right-4 w-20 h-20 sm:w-28 sm:h-28 z-20 pointer-events-none">
            <Image
              src="/pics/medal.png" // Ensure this image path matches your public folder
              alt="Medal"
              fill
              className="object-contain"
            />
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm sm:text-base leading-relaxed">
            {tableData.map((row, idx) => (
              <div key={idx} className="contents">
                <div className="font-semibold text-[#0F2851] py-1">
                  {row.label}
                </div>
                <div className="text-[#2D3748] py-1 md:pl-4">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dates Section */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#0F2851]">
            DATES
          </h2>
          <div className="space-y-2 text-sm sm:text-base text-[#111111]">
            {datesData.map((item, index) => (
              <p key={index} className="leading-relaxed">
                <span className="font-bold">{item.label}:</span> {item.value}
              </p>
            ))}
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#0F2851]">
            ELIGIBILITY
          </h2>
          <ul className="space-y-3 text-sm sm:text-base text-[#111111]">
            {eligibilityList.map((text, index) => (
              <li key={index} className="flex items-start gap-2 leading-relaxed">
                <span className="text-[#0F2851] font-bold text-lg">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Process Section */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#0F2851]">
            PROCESS
          </h2>

          <MotionUl
            className="space-y-3 text-sm sm:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {processItems.map((item) => (
              <MotionLi
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-start gap-3 leading-relaxed text-[#111111]"
              >
                <ChevronRight
                  size={18}
                  strokeWidth={3}
                  className="mt-1 flex-shrink-0 text-[#0F2851]"
                />
                <div>{item.content}</div>
              </MotionLi>
            ))}
          </MotionUl>
        </section>

        {/* Awards & Prizes Section */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#0F2851]">
            AWARDS & PRIZES
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-[#111111]">
            The participating students stand to gain many prizes and goodies, as
            well as invaluable experience by participating in the Nexus QUEST
            examination:
          </p>

          <MotionUl
            className="space-y-3 text-sm sm:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {awardsList.map((item) => (
              <MotionLi
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-start gap-3 leading-relaxed text-[#111111]"
              >
                <ChevronRight
                  size={18}
                  strokeWidth={3}
                  className="mt-1 flex-shrink-0 text-[#0F2851]"
                />
                <div>{item.content}</div>
              </MotionLi>
            ))}
          </MotionUl>
        </section>

      </div>
    </motion.main>
  );
}