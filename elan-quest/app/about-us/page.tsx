"use client";

import AboutUs from "../components/about-us/AboutUs";
import AboutNexus from "../components/about-us/AboutNexus";
import AboutIIT from "../components/about-us/AboutIIT";
import SingleLink from "../components/about-us/singleLink";
import { Raleway } from "next/font/google";
import { motion, Variants } from "framer-motion";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

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

export default function AboutPage() {
  return (
    <div
      className={`body-font bg-[#252525] text-[#E8E8C6] pt-16 w-full overflow-x-hidden`}
    >
      <div className="space-y-8">
        {/* ABOUT US */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="px-6 md:px-20"
        >
          <motion.div
            variants={fadeInUp}
            custom={1}
            className="w-full max-w-[700px] h-[90px]"
          >
            <AboutUs />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="w-full max-w-[1050px] h-[80px] mt-6"
          >
            <AboutNexus />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            custom={3}
            className="mt-6 text-[20px] leading-relaxed md:text-justify text-left"
          >
            <strong>Nexus QUEST</strong> is a comprehensive nationwide academic
            Olympiad conducted during <strong>IIT Hyderabad</strong>’s
            prestigious annual techno-cultural fest{" "}
            <strong>Elan & nVision</strong>, designed to identify and celebrate
            exceptional scholastic talent from schools across the country.
          </motion.p>
        </motion.div>

        {/* ABOUT ELAN & NVISION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={4}
          className="px-6 md:px-20"
        >
          <motion.p
            variants={fadeInUp}
            custom={5}
            className="text-[20px] leading-relaxed md:text-justify text-left"
          >
            <strong>Elan & nVision</strong> is <strong>IIT Hyderabad</strong>’s
            annual techno-cultural fest, blending innovation with celebration
            brings together the best of both worlds – the rich cultural heritage
            that connects us through stories, music, and shared experiences,
            alongside the cutting-edge technology and innovation that drives our
            future.
          </motion.p>

          {/* Link + Hover Arrows */}
          <motion.div
            variants={fadeInUp}
            custom={6}
            className="flex justify-end w-full mt-2"
          >
            <a
              href="https://elan.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <span className="text-sm underline">visit elan.org.in</span>
              <div className="flex items-center gap-1 w-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-0 group-hover:translate-x-1">
                <SingleLink />
                <SingleLink />
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* ABOUT IIT HYDERABAD */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={7}
          className="px-6 md:px-20"
        >
          <motion.div
            variants={fadeInUp}
            custom={8}
            className="w-full max-w-[1200px] h-[70px]"
          >
            <AboutIIT />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            custom={9}
            className="mt-6 text-[20px] h-[200px] leading-relaxed md:text-justify text-left"
          >
            <strong>The Indian Institute of Technology Hyderabad</strong> (IITH)
            is a premier institute known for its strong focus on research and
            innovation. It offers a holistic educational ecosystem that promotes
            interactive learning, flexible academic structures, cutting-edge
            research, robust industry collaborations, and active support for
            entrepreneurship. This dynamic environment enables students and
            faculty to turn visionary ideas into impactful realities.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
