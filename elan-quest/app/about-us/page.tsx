"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";

// Typed as Variants so TS knows it's valid
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // cubic-bezier for easeOut
    },
  }),
};

const QUEST_HIGHLIGHTS = [
  "Original, non-rote problems — puzzles that test how students think, not what they've memorized",
  "Analytical & multidisciplinary focus — problem-solving skills over syllabus recall",
  "Alignment with national educational standards",
  "A genuine platform — direct exposure to the IIT community, plus networking opportunities that help students think about future academic and career paths",
];

const ELAN_HIGHLIGHTS = [
  "A large, energetic campus event — not a quiet, isolated exam",
  "Exposure to robotics contests, hackathons, and design challenges alongside the Olympiad",
  "Performances by major artists (recent editions featured singer Mohit Chauhan)",
  "A chance to explore IITH's campus, culture, and research environment first-hand",
];

const IITH_HIGHLIGHTS = [
  "NIRF 2025 rankings: #12 Overall · #7 Engineering · #6 Innovation · #15 Research Institutions — placing IITH among the top technical institutes in the country",
  "Research-driven campus: running \"Patent a Day: Mission 365,\" having already filed 580+ patents, including 210+ in the last year alone, across 30+ Centres and Centres of Excellence",
  "Strong innovation culture: has supported 320+ student startups, with dedicated programs like BUILD and BHARATI that get first-year students hands-on with real engineering problems",
];

export default function AboutPage() {
  return (
    <div className="body-font bg-[var(--background)] text-[var(--foreground)] pt-16 w-full overflow-x-hidden">
      <div className="space-y-8">
        {/* ABOUT US */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="px-6 md:px-20"
        >
          <motion.div variants={fadeInUp} custom={1}>
            <SectionHeading title="About Us" />
          </motion.div>
          <motion.div variants={fadeInUp} custom={2} className="mt-6">
            <SectionHeading title="About Nexus Quest" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            custom={3}
            className="mt-6 text-[20px] leading-relaxed text-justify"
          >
            <strong>Nexus QUEST</strong> is a nationwide academic Olympiad for
            school students, conducted as part of <strong>Elan & nVision</strong>{" "}
            — IIT Hyderabad&apos;s annual techno-cultural fest. It&apos;s
            designed to identify and celebrate exceptional scholastic talent
            from schools across the country.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            custom={4}
            className="mt-4 text-[20px] leading-relaxed text-justify"
          >
            Unlike routine textbook-based Olympiads, Nexus QUEST offers:
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            custom={5}
            className="mt-3 space-y-2 text-[18px]"
          >
            {QUEST_HIGHLIGHTS.map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight size={18} className="flex-shrink-0 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeInUp}
            custom={6}
            className="mt-4 text-[20px] leading-relaxed text-justify"
          >
            It&apos;s run entirely by students and faculty of one of India&apos;s
            top-ranked technical institutes — giving participants a taste of
            the IIT ecosystem well before college.
          </motion.p>
        </motion.div>

        {/* ABOUT ELAN & NVISION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={7}
          className="px-6 md:px-20"
        >
          <motion.div variants={fadeInUp} custom={8}>
            <SectionHeading title="About Elan & nVision" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            custom={9}
            className="mt-6 text-[20px] leading-relaxed text-justify"
          >
            <strong>Elan & nVision</strong> is <strong>IIT Hyderabad</strong>
            &apos;s flagship techno-cultural fest — and the platform Nexus
            QUEST is held under. Now in its 17th edition, it&apos;s recognized
            as South India&apos;s largest student-run techno-cultural
            festival, drawing over 30,000 students, innovators, artists, and
            young entrepreneurs from across the country over three days.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            custom={10}
            className="mt-4 text-[20px] leading-relaxed text-justify"
          >
            What this means for Nexus QUEST participants and their families:
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            custom={11}
            className="mt-3 space-y-2 text-[18px]"
          >
            {ELAN_HIGHLIGHTS.map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight size={18} className="flex-shrink-0 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </motion.ul>

          {/* Link + Hover Arrow */}
          <motion.div
            variants={fadeInUp}
            custom={12}
            className="flex justify-end w-full mt-4"
          >
            <a
              href="https://elan.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <span className="text-sm underline">visit elan.org.in</span>
              <ArrowRight
                size={18}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-0 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* ABOUT IIT HYDERABAD */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={13}
          className="px-6 md:px-20"
        >
          <motion.div variants={fadeInUp} custom={14}>
            <SectionHeading title="About IITH" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            custom={15}
            className="mt-6 text-[20px] leading-relaxed text-justify"
          >
            Nexus QUEST is conducted by the{" "}
            <strong>Indian Institute of Technology Hyderabad</strong> (IITH) —
            established in 2008 and now one of India&apos;s fastest-rising
            technical institutes.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            custom={16}
            className="mt-4 text-[20px] leading-relaxed text-justify"
          >
            Why that matters for participating students:
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            custom={17}
            className="mt-3 space-y-2 text-[18px]"
          >
            {IITH_HIGHLIGHTS.map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight size={18} className="flex-shrink-0 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeInUp}
            custom={18}
            className="mt-4 text-[20px] leading-relaxed text-justify"
          >
            For a school student, this means Nexus QUEST isn&apos;t just
            another Olympiad — it&apos;s a direct touchpoint with a nationally
            top-ranked IIT, its faculty, and its research culture.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}