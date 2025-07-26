"use client";

import AboutUs from "../components/AboutUs/AboutUs";
import AboutNexus from "../components/AboutUs/AboutNexus";
import AboutIIT from "../components/AboutUs/AboutIIT";
import SingleLink from "../components/AboutUs/singleLink";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function AboutPage() {
  return (
    <div className={`${raleway.className} bg-[#252525] text-[#E8E8C6] pt-16 w-full overflow-x-hidden`}>
      <div className="space-y-20">

        {/* ABOUT US */}
        <div className="px-6 md:px-20">
          <div className="w-full max-w-[700px] h-[90px]">
            <AboutUs />
          </div>
          <div className="w-full max-w-[1050px] h-[80px] mt-6">
            <AboutNexus />
          </div>
          
          <p className="mt-6 text-[20px] leading-relaxed text-justify">
            <strong>Nexus QUEST</strong> is a comprehensive nationwide academic Olympiad conducted during <strong>IIT Hyderabad</strong>’s prestigious annual techno-cultural fest <strong>Elan & nVision</strong>, designed to identify and celebrate exceptional scholastic talent from schools across the country. Unlike conventional curriculum-based Olympiads that rely on routine textbook questions, Nexus QUEST presents intellectually stimulating puzzles and challenges that encourage students to think creatively beyond traditional academic boundaries. The examination emphasizes analytical thinking, problem-solving skills, and multidisciplinary understanding while aligning with national educational standards. Beyond academic assessment, it serves as a prestigious platform for students to demonstrate their intellectual capabilities, gain valuable exposure to the IIT community, and develop clarity about their future educational and career pathways through meaningful networking opportunities.
          </p>
        </div>

        {/* ABOUT ELAN & NVISION */}
        <div className="px-6 md:px-20">
          <p className="text-[20px] leading-relaxed text-justify">
            <strong>Elan & nVision</strong> is <strong>IIT Hyderabad</strong>’s annual techno-cultural fest, blending innovation with celebration brings together the best of both worlds – the rich cultural heritage that connects us through stories, music, and shared experiences, alongside the cutting-edge technology and innovation that drives our future. Over three days, attendees enjoy performances, competitions, concerts, and networking with industry professionals and alumni, all while experiencing IITH’s vibrant research and entrepreneurial spirit
          </p>

          {/* Link + Hover Arrows */}
          <div className="flex justify-end w-full mt-2">
            <a
              href="https://elan.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <span className="text-sm  underline">visit elan.org.in</span>
              <div className="flex items-center gap-1 w-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-0 group-hover:translate-x-1">
                <SingleLink />
                <SingleLink />
              </div>
            </a>
          </div>
        </div>

        {/* ABOUT IIT HYDERABAD */}
        <div className="px-6 md:px-20">
          <div className="w-full max-w-[1200px] h-[70px]">
            <AboutIIT />
          </div>
          <p className="mt-6 text-[20px] leading-relaxed text-justify">
            <strong>The Indian Institute of Technology Hyderabad</strong> (IITH) is a premier institute known for its strong focus on research and innovation. It offers a holistic educational ecosystem that promotes interactive learning, flexible academic structures, cutting-edge research, robust industry collaborations, and active support for entrepreneurship. This dynamic environment enables students and faculty to turn visionary ideas into impactful realities.
          </p>
        </div>

      </div>
    </div>
  );
}