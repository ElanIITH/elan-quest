"use client";
import ExamDetails from "../components/ThreeOptions/ExamDetails"; // Pixel title
import Syllabus from "../components/ThreeOptions/Syllabus";
import Results from "../components/ThreeOptions/Results";
import DoubleArrow from "../components/ThreeOptions/DoubleArrow";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600"] });

export default function ThreeOptions() {
  return (
    <div className={`${raleway.className} bg-[#252525] text-[#E8E8C6] px-8 py-12`}>
      
      {/* Exam Details Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="flex items-center gap-4">
          <div className ="w-[700px] h-[70px]">
          <ExamDetails />
          </div>
          <div className="w-[80px] h-[80px]">
          <DoubleArrow />
          </div>
        </div>
        <div className="mt-4 text-[16px] leading-relaxed">
          <p>
            Elan & nVision is IIT Hyderabad’s annual techno-cultural fest, blending
            innovation with celebration. This vibrant celebration brings together the
            best of both worlds – the rich cultural heritage that connects us through
            stories, music, and shared experiences, alongside the cutting-edge
            technology and innovation that drives our future.
          </p>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="flex items-center gap-4">
          <div className="w-[500px] h-[70px]">
          <Syllabus />
          </div>
          <div className="w-[80px] h-[80px]">
          <DoubleArrow />
          </div>
        </div>
        <div className="mt-4 text-[16px] leading-relaxed">
          <p>
            Nexus Quest tests students across four core domains: Logical Reasoning,
            Mathematics, Physics, and Chemistry. The syllabus emphasizes deep
            conceptual understanding, analytical thinking, and real-world application
            of fundamental principles.
          </p>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="flex items-center gap-4">
          <div className="w-[450px] h-[70px]">
          <Results />
          </div>
          <div className="w-[80px] h-[80px]">
          <DoubleArrow />
          </div>
        </div>
        <div className="mt-4 text-[16px] leading-relaxed">
          <p>
            This section outlines how performance will be evaluated, from score
            calculation to tie-breakers. It also features details about awards,
            certificates, and exclusive goodies awaiting top performers.
          </p>
        </div>
      </div>
      
    </div>
  );
}