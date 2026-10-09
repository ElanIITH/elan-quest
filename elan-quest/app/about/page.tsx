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
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-[#F0ECCF] font-sans text-[#0f2438]">
      {/* ──────────────── 0. BACKGROUND PATTERN LAYER ──────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: "url('/pics/pattern.png')",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      {/* ──────────────── 1. HEADER ──────────────── */}
      <header className="relative z-30 w-full shrink-0 border-b border-black/10 bg-[#F0ECCF]"
      style={{
          backgroundImage: "url('/pics/pattern.png')",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}>
        <div className="relative mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-5 sm:h-[100px] md:h-[160px] md:px-16">
          {/* ABOUT US TITLE */}
          <h1 className="shrink-0 text-3xl font-extrabold tracking-tight text-[#0f2438] sm:text-4xl md:text-5xl">
            ABOUT US
          </h1>

          {/* MEDAL IMAGE */}
          <div className="relative h-[80px] w-[120px] shrink-0 sm:h-[100px] sm:w-[160px] md:h-[160px] md:w-[400px]">
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
      <main className="relative z-10 w-full flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl space-y-12 px-6 py-10 pb-24 md:px-12">
          {/* ABOUT NEXUS QUEST */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-[#0f2438] md:text-3xl">
              About Nexus Quest
            </h2>
            <p className="text-base leading-relaxed text-[#0f2438]/90 md:text-lg">
              <strong>Nexus QUEST</strong> is a{" "}
              <strong>nationwide Talent Hunt Examination</strong> for school
              students, conducted as part of <strong>Elan & nVision</strong>,{" "}
              <strong>IIT Hyderabad</strong>&apos;s annual techno-cultural fest.
              It&apos;s designed to identify and celebrate exceptional scholastic
              talent from schools across the country.
            </p>
            <p className="text-base leading-relaxed text-[#0f2438]/90 md:text-lg">
            Unlike routine textbook-based Olympiads, Nexus QUEST offers:
            </p>
            <div className="space-y-5 pl-6 text-base leading-relaxed md:text-lg">
  <p className="list-item list-disc">
    <strong>Original, Non-Rote Problems:</strong>{" "}
    Puzzles that test how students think, not what they have memorized.
  </p>

  <p className="list-item list-disc">
    <strong>Analytical & Multidisciplinary Focus:</strong>{" "}
    Problem-solving skills over syllabus recall.
  </p>

  <p className="list-item list-disc">
    <strong>Alignment with National Educational Standards:</strong>{" "}
    Designed to encourage meaningful and holistic learning.
  </p>

  <p className="list-item list-disc">
    <strong>A Genuine Platform:</strong>{" "}
    Direct exposure to the IIT community, plus networking opportunities that
    help students think about future academic and career paths.
  </p>
</div>
 <p className="text-base leading-relaxed text-[#0f2438]/90 md:text-lg">
            It's run entirely by students and faculty of one of India's top-ranked technical institutes, giving participants a taste of the IIT ecosystem well before colleg
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
            <h2 className="text-2xl font-bold text-[#0f2438] md:text-3xl">
              About Elan & nVision
            </h2>
            <p className="text-base leading-relaxed text-[#0f2438]/90 md:text-lg">
             Elan & nVision is IIT Hyderabad's flagship techno-cultural fest and the platform Nexus QUEST is held under. Now in its 17th edition, it's recognized as South India's largest student-run techno-cultural festival, drawing over 30,000 students, innovators, artists, and young entrepreneurs from across the country over three days. 
            </p>
            
             <p className="text-base leading-relaxed text-[#0f2438]/90 md:text-lg">
What this means for Nexus QUEST participants and their families:            </p>
<div className="space-y-5 pl-6 text-base leading-relaxed md:text-lg">
  <p className="list-item list-disc">
    <strong>Performances by Major Artists:</strong>{" "}
    Recent editions have featured renowned artists such as singer Mohit Chauhan.
  </p>

  <p className="list-item list-disc">
    <strong>A Large, Energetic Campus Event:</strong>{" "}
    Experience a vibrant campus atmosphere rather than a quiet, isolated exam.
  </p>

  <p className="list-item list-disc">
    <strong>Beyond the Olympiad:</strong>{" "}
    Exposure to robotics contests, hackathons, and design challenges alongside
    the Olympiad.
  </p>
</div>
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
            <h2 className="text-2xl font-bold text-[#0f2438] md:text-3xl">
              About IITH
            </h2>
            <p className="text-base leading-relaxed text-[#0f2438]/90 md:text-lg">
              Nexus QUEST is conducted by the Indian Institute of Technology Hyderabad (IITH), established in 2008 and now one of India's fastest-rising technical institutes.
            </p>

            <div className="pt-2">
              <p className="text-base font-semibold md:text-lg">
                Why that matters for participating students:
              </p>
             <div className="space-y-5 pl-6 text-base leading-relaxed md:text-lg">
  <p className="list-item list-disc">
    <strong>NIRF 2025 Rankings:</strong>{" "}
    #12 Overall · #7 Engineering · #6 Innovation · #15 Research Institutions,
    placing IITH among the top technical institutes in the country.
  </p>

  <p className="list-item list-disc">
    <strong>Research-Driven Campus:</strong>{" "}
    Running "Patent a Day: Mission 365," with 580+ patents already filed,
    including 210+ in the last year alone, across 30+ Centres and Centres of
    Excellence.
  </p>

  <p className="list-item list-disc">
    <strong>Strong Innovation Culture:</strong>{" "}
    Supporting 320+ student startups, with dedicated programs like{" "}
    <strong>BUILD</strong> and <strong>BHARATI</strong> that give first-year
    students hands-on experience with real engineering problems.
  </p>

  <p className="list-item list-disc">
    For a school student, this means <strong>Nexus QUEST</strong> isn't just
    another Olympiad — it's a direct touchpoint with a nationally top-ranked
    IIT and its research culture.
  </p>
</div>
            </div>

          
          </motion.section>
        </div>
      </main>
    </div>
  );
}