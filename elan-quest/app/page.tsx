


"use client";
import Link from "next/link";
import { useState } from "react";
import RegisterPopUp from "./components/common/RegisterPopUp";


export default function HomePage() {
  return (
    <>
      <div>

        {/* Popup */}
        {showPopup && <RegisterPopUp setShowPopup={setShowPopup} />}


        <div className="h-[calc(100vh-80px)] flex flex-row gap-10 px-25 py-10">
          <div className="flex flex-col justify-center gap-10 w-[1000px]">
            <div>
              <img
                src="/logo_light.svg"
                alt="logo"
                className="w-[500px] h-auto"
              />
            </div>

            <div>
              <p className="text-3xl body-font">October 12, 2025</p>
              <p className="text-2xl body-font">Quest Olympiad</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-row items-center gap-3 group mt-35">
  <img
    src="/RightArrow.svg"
    alt="Left Arrow"
    className="h-[50px] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  />
  <img
    src="/registerNow.svg"
    alt="Register Now"
    className="h-[50px] w-auto"
  />
  <img
    src="/LeftArrow.svg"
    alt="Right Arrow"
    className="h-[50px] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  />
</div>
            <p className="text-2xl pl-15 text-justify body-font">
              A national-level Olympiad for school students, organized by Elan&nVision, the annual techno-cultural fest of IIT Hyderabad.

            <div className="text-center">
              <p className="text-3xl body-font">MONTH 00, 2025</p>
              <p className="text-2xl body-font">Date of Exam</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-row items-center gap-3 group mt-35">
              <img
                src="/RightArrow.svg"
                alt="Left Arrow"
                className="h-[50px] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="/registerNow.svg"
                alt="Register Now"
                className="h-[50px] w-auto"
              />
              <img
                src="/LeftArrow.svg"
                alt="Right Arrow"
                className="h-[50px] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-2xl text-justify body-font">
              A national-level Olympiad for school students, organized by Elan &
              nVision, the annual techno-cultural fest of IIT Hyderabad.

            </p>
          </div>
        </div>

        {/* Sections with hover arrow */}
        <div className="h-[calc(100vh-250px)] flex flex-col gap-7 px-10 py-12">
          
          {/* Exam Details */}
          <Link href="/exam-details">
            <div className="flex flex-col gap-5 group cursor-pointer">
              <div className="flex flex-row gap-7 items-center">
                <img
                  src="/examDetails.svg"
                  alt="ExamDetails"
                  className="w-auto h-[40px]"
                />
                <img
                  src="/blackArrow.svg"
                  alt="Go"
                  className="w-auto h-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-2xl text-justify body-font">
The Nexus Quest Olympiad is designed to challenge intellect, precision, and problem-solving skills through a carefully structured examination process. From eligibility requirements to the format and marking scheme, every aspect is crafted to ensure a fair and rigorous assessment. This section provides an in-depth overview of the key particulars — including important dates, exam duration, and evaluation methods — equipping participants with the clarity and confidence needed to approach the competition at their best.              </p>
            </div>
          </Link>

          {/* Syllabus */}
          <Link href="/syllabus">
            <div className="flex flex-col gap-5 group cursor-pointer">
              <div className="flex flex-row gap-7 items-center">
                <img
                  src="/syllabus.svg"
                  alt="syllabus"
                  className="w-auto h-[40px]"
                />
                <img
                  src="/blackArrow.svg"
                  alt="Go"
                  className="w-auto h-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-2xl text-justify body-font">
                Nexus Quest tests students across four core domains: Logical
                Reasoning, Mathematics, Physics, and Chemistry. The syllabus
                emphasizes deep conceptual understanding, analytical thinking,
                and real-world application of fundamental principles.
              </p>
            </div>
          </Link>

          {/* Results */}
          <Link href="/results">
            <div className="flex flex-col gap-5 group cursor-pointer">
              <div className="flex flex-row gap-7 items-center">
                <img
                  src="/results.svg"
                  alt="results"
                  className="w-auto h-[40px]"
                />
                <img
                  src="/blackArrow.svg"
                  alt="Go"
                  className="w-auto h-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-2xl text-justify body-font">
                This section outlines how performance will be evaluated, from
                score calculation to tie-breakers. It also features details
                about awards, certificates, and exclusive goodies awaiting top
                performers.
              </p>
            </div>
          </Link>
        </div>
        <div className="h-[50px]">


        </div>
        <div className="h-[50px]"></div>
      </div>

    </>
  );
}