"use client";

import AboutUs from "../components/AboutUs/AboutUs";
import AboutNexus from "../components/AboutUs/AboutNexus";
import AboutIIT from "../components/AboutUs/AboutIIT";
import SingleLink from "../components/AboutUs/singleLink";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function AboutPage() {
  return (
    <div className={`${raleway.className} bg-[#252525] text-[#E8E8C6] px-8 py-16`}>
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ABOUT US */}
        <div>
          <div className="w-[700px] h-[140px]">
          <AboutUs />
          </div>
          <div>
          <AboutNexus />
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-justify">
            <strong>Nexus QUEST</strong> is a comprehensive nationwide academic Olympiad conducted during <strong>IIT Hyderabad</strong>’s prestigious annual techno-cultural fest <strong>Elan & nVision</strong>, designed to identify and celebrate exceptional scholastic talent from schools across the country. Unlike conventional curriculum-based Olympiads that rely on routine textbook questions, Nexus QUEST presents intellectually stimulating puzzles and challenges that encourage students to think creatively beyond traditional academic boundaries. The examination emphasizes analytical thinking, problem-solving skills, and multidisciplinary understanding while aligning with national educational standards. Beyond academic assessment, it serves as a prestigious platform for students to demonstrate their intellectual capabilities, gain valuable exposure to the IIT community, and develop clarity about their future educational and career pathways through meaningful networking opportunities.
          </p>
        </div>

        {/* ABOUT ELAN & NVISION */}
<div>
  <p className="text-[15px] leading-relaxed text-justify">
    <strong>Elan & nVision</strong> is <strong>IIT Hyderabad</strong>’s annual techno-cultural fest, blending innovation with celebration brings together the best of both worlds – the rich cultural heritage that connects us through stories, music, and shared experiences, alongside the cutting-edge technology and innovation that drives our future. Over three days, attendees enjoy performances, competitions, concerts, and networking with industry professionals and alumni, all while experiencing IITH’s vibrant research and entrepreneurial spirit
  </p>
  <div className="flex justify-end w-full mt-2">
    <div className="flex items-center gap-2">
      <span className="text-sm italic">visit elan.org.in</span>
      <div className="flex items-center gap-1 w-[50px]">
        <SingleLink />
        <SingleLink />
      </div>
    </div>
  </div>
</div>

        {/* ABOUT IIT HYDERABAD */}
        <div>
          <div className="w-[1200px] h-[125px]">
          <AboutIIT />
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-justify">
            <strong>The Indian Institute of Technology Hyderabad</strong> (IITH) is a premier institute known for its strong focus on research and innovation. It offers a holistic educational ecosystem that promotes interactive learning, flexible academic structures, cutting-edge research, robust industry collaborations, and active support for entrepreneurship. This dynamic environment enables students and faculty to turn visionary ideas into impactful realities.
          </p>
        </div>

      </div>
    </div>
  );
}