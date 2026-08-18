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

export default function ResultsPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#F0ECCF]">
      {/* Pattern Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/pics/patternfinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* Results Content */}
      <section className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 md:px-[6.5%] md:py-12">
        <h1 className="mb-8 text-4xl font-black uppercase tracking-wide text-[#0F2851] md:text-5xl">
          RESULTS
        </h1>

        <div className="grid w-full max-w-[1000px] grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-24 md:gap-y-7">
          {/* Exam Organizing Body */}
          <div className="text-base leading-relaxed text-black md:text-lg">
            Exam Organizing Body
          </div>

          <div className="text-base leading-relaxed text-black md:text-lg">
            Elan & nVision, IIT Hyderabad
          </div>

          {/* Eligibility */}
          <div className="text-base leading-relaxed text-black md:text-lg">
            Eligibility
          </div>

          <div className="text-base leading-relaxed text-black md:text-lg">
            Students from classes 6 - 12
          </div>

          {/* Exam Level */}
          <div className="text-base leading-relaxed text-black md:text-lg">
            Exam Level
          </div>

          <div className="text-base leading-relaxed text-black md:text-lg">
            Intermediate
          </div>

          {/* Application Process */}
          <div className="text-base leading-relaxed text-black md:text-lg">
            Application Process
          </div>

          <div className="text-base leading-relaxed text-black md:text-lg">
            Via Unstop
          </div>

          {/* Exam Dates */}
          <div className="text-base leading-relaxed text-black md:text-lg">
            Exam Dates
          </div>

          <div className="text-base leading-relaxed text-black md:text-lg">
            November 1st Week
          </div>

          {/* Exam Mode */}
          <div className="text-base leading-relaxed text-black md:text-lg">
            Exam Mode
          </div>

          <div className="text-base leading-relaxed text-black md:text-lg">
            Online
          </div>

          {/* Fee of registration */}
          <div className="text-base leading-relaxed text-black md:text-lg">
            Fee of registration
          </div>

          <div className="text-base leading-relaxed text-black md:text-lg">
            ₹ 350
          </div>

          {/* Objective */}
          <div className="text-base leading-relaxed text-black md:text-lg">
            Objective
          </div>

          <div className="text-base leading-relaxed text-black md:text-lg">
            To identify young academic talent
            <br />
            by promoting conceptual learning,
            <br />
            logical reasoning and creative
            <br />
            problem solving
          </div>

          {/* Languages */}
          <div className="text-base leading-relaxed text-black md:text-lg">
            Languages
          </div>

          <div className="text-base leading-relaxed text-black md:text-lg">
            English
          </div>
          {/* Dates */}
          <section className="mt-14 max-w-[900px]">
            <h2 className="mb-3 text-xl font-black uppercase tracking-wide text-[#0F2851] md:text-2xl">
              DATES
            </h2>

            <div className="space-y-1 text-base leading-relaxed text-black md:text-lg">
              <p>Registrations: August 23, 2026</p>
              <p>Registrations Close: October 15, 2026</p>
              <p>Quest Olympiad: 1st week of November(date TBA)</p>
              <p>Prize Distribution: January 8, 2027</p>
            </div>
          </section>

          {/* Eligibility */}
          <section className="mt-14 max-w-[900px]">
            <h2 className="mb-5 text-xl font-black uppercase tracking-wide text-[#0F2851] md:text-2xl">
              ELIGIBILITY
            </h2>

            <div className="space-y-7 text-base leading-relaxed text-black md:text-lg">
              <div className="flex gap-4">
                <span className="mt-1">•</span>
                <p>
                  Students currently enrolled in Classes 6th to 12th from any
                  recognized school are eligible to participate in Nexus QUEST.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="mt-1">•</span>
                <p>
                  Students from all educational boards (CBSE, ICSE, State
                  boards) within the specified grade range can apply for the
                  examination.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
