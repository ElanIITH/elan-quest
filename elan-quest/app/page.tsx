// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import RegisterPopUp from "./components/common/RegisterPopUp";
// import { ArrowUpRight, FileText, BookOpen, Trophy, ChevronRight } from "lucide-react";
// import { EVENT_CONFIG, HOME_SECTIONS } from "@/app/lib/site-config";

// const SECTION_ICONS = {
//   FileText: FileText,
//   BookOpen: BookOpen,
//   Trophy: Trophy,
// };

// export default function HomePage() {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleClick = () => {
//     setShowPopup(!showPopup);
//   };

//   return (
//     <>
//       <div className="overflow-x-hidden">
//         {showPopup && <RegisterPopUp setShowPopup={setShowPopup} />}

//         {/* Top section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="h-auto md:h-[calc(100vh-80px)] flex flex-col md:flex-row gap-6 md:gap-10 px-5 md:px-25 py-6 md:py-10"
//         >
//           <motion.div
//             className="flex flex-col justify-center gap-6 md:gap-10 w-full md:w-[1000px]"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="text-center md:text-left">
//               <h1 className="heading-font text-3xl md:text-6xl">Nexus Quest</h1>
//             </div>
//             <div className="text-center md:text-left">
//               <p className="text-xl md:text-3xl body-font">{EVENT_CONFIG.eventDate}</p>
//               <p className="text-lg md:text-2xl body-font">{EVENT_CONFIG.eventName}</p>
//             </div>
//           </motion.div>

//           <motion.div
//             className="flex flex-col justify-center gap-6 md:gap-10"
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <div className="flex flex-row items-center justify-center md:justify-start gap-3 mt-0 md:mt-35">
//               <button
//                 onClick={handleClick}
//                 className="w-fit cursor-pointer flex items-center gap-2 border border-[var(--foreground)] rounded-md px-5 py-3 text-base md:text-xl body-font hover:opacity-80 transition-opacity"
//               >
//                 Register Now
//                 <ArrowUpRight size={22} />
//               </button>
//             </div>
//             <p className="text-base text-center md:text-2xl px-4 md:pl-15 body-font">
//               {EVENT_CONFIG.tagline}
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Sections with hover arrow */}
//         <motion.div
//           className="flex flex-col gap-7 px-5 md:px-10 py-12"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           {HOME_SECTIONS.map((section, index) => {
//             const Icon = SECTION_ICONS[section.icon as keyof typeof SECTION_ICONS];
//             return (
//               <motion.div
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Link href={section.href}>
//                   <div className="flex flex-col gap-5 group cursor-pointer">
//                     <div className="flex flex-row gap-5 md:gap-7 items-center">
//                       <Icon size={32} className="md:w-10 md:h-10" />
//                       <ChevronRight
//                         size={32}
//                         className="md:w-10 md:h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       />
//                     </div>
//                     <p className="text-base md:text-2xl text-justify body-font">
//                       {section.text}
//                     </p>
//                   </div>
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import RegisterPopUp from "./components/common/RegisterPopUp";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const perks = [
    { id: 1, title: "Prize 1" },
    { id: 2, title: "Prize 2" },
    { id: 3, title: "Prize 3" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF0] text-[#0F2851] flex flex-col justify-between relative overflow-x-hidden">
      {/* Registration Modal */}
      {showPopup && <RegisterPopUp setShowPopup={setShowPopup} />}

      {/* Hero & Body Content */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-12">
        {/* Background Line Art Illustration */}
        {/* <div className="absolute top-0 right-0 w-full md:w-[60%] h-full pointer-events-none opacity-90 z-0">
          <Image
            src="/runner-illustration.svg"
            alt="Hero Vector Illustration"
            fill
            className="object-contain object-right-top"
            priority
          />
        </div> */}

        {/* Hero Branding & Call to Action */}
        <div className="relative z-10 w-fit pt-6 md:pt-12 flex flex-col items-end">
          {/* Logo Image */}
          <Image
            src="/footer/quest.svg"
            alt="logo"
            width={340}
            height={120}
            className="object-contain"
            priority
          />

          {/* Button aligned to right edge */}
          <div className="mt-4 w-full flex justify-end">
            <button
              onClick={togglePopup}
              className="bg-[#FF7A7A] hover:bg-[#ff6565] text-white font-black px-8 py-3 rounded-full text-sm md:text-base tracking-wider uppercase shadow-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              REGISTER NOW!
            </button>
          </div>
        </div>

        {/* What is Quest Section */}
        <div className="relative z-10 mt-20 md:mt-32 max-w-xl">
          <h2 className="text-xl md:text-2xl font-black tracking-wider text-[#0F2851] uppercase mb-3">
            WHAT IS QUEST?
          </h2>
          <p className="text-sm md:text-lg leading-relaxed font-semibold text-[#0F2851]/80">
            A national-level Talent Hunt examination for school students,
            organized by Elan & nVision, the annual techno-cultural fest of IIT
            Hyderabad.
          </p>
        </div>
        {/* Section: Perks and Prizes */}
        <div className="relative z-10 mt-12 md:mt-16 w-full">
          <h2 className="text-xl md:text-2xl font-black tracking-wider text-[#0F2851] uppercase mb-6">
            PERKS AND PRIZES
          </h2>

          {/* Compact 3-column grid */}
          <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-5 md:gap-8 max-w-5xl">
            {perks.map((perk) => (
              <div
                key={perk.id}
                className="bg-[#466B9E] rounded-2xl p-3 flex flex-col items-center justify-between h-[350px] w-full shadow-md"
              >
                {/* Inner Cream Window */}
                <div className="bg-[#FDFBF0] w-full h-[80%] rounded-xl shadow-inner" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Brick/Puzzle Pattern Layer */}
      <div className="w-full h-48 bg-[radial-gradient(#d3cbbe_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-40 my-2" />
    </div>
  );
}
