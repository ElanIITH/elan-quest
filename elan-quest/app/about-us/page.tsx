"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export default function AboutPage() {
  return (
    <div className="w-full h-screen bg-[#f8f6e8] text-[#0f2438] font-sans flex flex-col overflow-hidden">
      
 <header className="w-full shrink-0 bg-[#f8f6e8] border-b border-black/10 z-30 relative">
<div className="mx-auto max-w-[1440px] px-5 md:px-16 flex items-center justify-between h-[80px] sm:h-[100px] md:h-[160px] relative">

    {/* ABOUT US TITLE */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f2438] shrink-0">
      ABOUT US
    </h1>

    {/* MEDAL IMAGE */}
    <div className="relative h-[80px] w-[120px] sm:h-[100px] sm:w-[160px] md:h-[160px] md:w-[400px] shrink-0">
      <Image
        src="/pics/medal.png"
        alt="Hand holding medal"
        fill
        priority
        className="object-contain object-right"
      />
    </div>

  </div>
</header>

      {/* ──────────────── 2. INDEPENDENTLY SCROLLABLE CONTENT ──────────────── */}
      <main className="flex-1 overflow-y-auto w-full">
        <div className="mx-auto max-w-5xl px-6 md:px-12 py-10 space-y-12 pb-24">
          
          {/* ABOUT NEXUS QUEST */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438]">
              About Nexus Quest
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#0f2438]/90">
              <strong>Nexus QUEST</strong> is a <strong>nationwide Talent Hunt Examination</strong> for school students, conducted as part of <strong>Elan & nVision</strong>, <strong>IIT Hyderabad</strong>&apos;s annual techno-cultural fest. It&apos;s designed to identify and celebrate exceptional scholastic talent from schools across the country.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#0f2438]/90">
              Unlike routine textbook based Olympiads, Nexus QUEST challenges students with thought-provoking, analytical and multidisciplinary problems beyond rote learning, while providing IIT exposure and opportunities to explore future academic and career paths.
            </p>
          </motion.section>

          {/* ABOUT ELAN & NVISION */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438]">
              About Elan & nVision
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#0f2438]/90">
              Elan & nVision is IIT Hyderabad&apos;s flagship techno-cultural fest — and the platform Nexus QUEST is held under. Now in its 17th edition, it&apos;s recognized as South India&apos;s largest student-run techno-cultural festival, drawing over 50,000 students, innovators, artists, and young entrepreneurs from across the country over three days.
            </p>
          </motion.section>

          {/* ABOUT IITH */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438]">
              About IITH
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#0f2438]/90">
              Nexus QUEST is conducted by the Indian Institute of Technology Hyderabad (IITH) — established in 2008 and now one of India&apos;s fastest-rising technical institutes.
            </p>

            <div className="pt-2">
              <p className="font-semibold text-base md:text-lg">
                Why that matters for participating students:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-2 text-base md:text-lg text-[#0f2438]/90 pl-2">
                <li>
                  <strong>NIRF 2025 rankings:</strong>
                  <ul className="pl-6 list-disc list-inside space-y-1 mt-1 text-sm md:text-base">
                    <li>Overall - 12th</li>
                    <li>Engineering - 7th</li>
                    <li>Innovation - 6th</li>
                    <li>Research Institutions - 15th</li>
                  </ul>
                </li>
                <li>
                  <strong>Research-driven campus:</strong> running &quot;Patent a Day: Mission 365,&quot; having already filed 580+ patents, including 210+ in the last year alone, across 30+ Centres and Centres of Excellence.
                </li>
                <li>
                  <strong>Strong innovation culture:</strong> has supported 320+ student startups, with dedicated programs like BUILD and BHARATI that get first-year students hands-on with real engineering problems.
                </li>
                <li>
                  <strong>Academic diversity:</strong> IIT Hyderabad offers programmes spanning engineering, science, design and liberal arts, including interdisciplinary programmes such as Artificial Intelligence and Computational Engineering.
                </li>
                <li>
                  <strong>Global connections:</strong> IIT Hyderabad has strategic academic and research partnerships across seven countries, including Japan, Australia, the USA and European nations.
                </li>
              </ul>
            </div>

            <p className="pt-3 text-base md:text-lg leading-relaxed text-[#0f2438]/90">
              For a school student, this means Nexus QUEST isn&apos;t just another Olympiad — it&apos;s a direct touchpoint with a nationally top-ranked IIT, its faculty, and its research culture.
            </p>
          </motion.section>

        </div>
      </main>
    </div>
  );
}