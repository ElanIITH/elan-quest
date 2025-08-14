"use client";

import { useState } from "react";
import RegisterPopUp from "./components/common/RegisterPopUp";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

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
            <div className="text-center">
              <p className="text-3xl body-font">MONTH 00, 2025</p>
              <p className="text-2xl body-font">Date of Exam</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div
              className="cursor-pointer transform hover:scale-103 transition-all duration-400 ease-in-out"
              onClick={handleClick}
            >
              <img
                src="/registerNow.svg"
                alt="Register Now"
                className="w-auto h-[60px]"
              />
            </div>
            <p className="text-2xl text-justify body-font">
              A national-level Olympiad for school students, organized by Elan &
              nVision, the annual techno-cultural fest of IIT Hyderabad.
            </p>
          </div>
        </div>
        <div className="h-[calc(100vh-250px)] flex flex-col gap-7 px-10 py-12">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-7">
              <img
                src="/examDetails.svg"
                alt="ExamDetails"
                className="w-auto h-[40px]"
              />
              <img src="/blackArrow.svg" alt="Go" className="w-auto h-[40px]" />
            </div>
            <p className="text-2xl text-justify body-font">
              Elan & nVision is IIT Hyderabad's annual techno-cultural fest,
              blending innovation with celebration...
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-7">
              <img
                src="/syllabus.svg"
                alt="syllabus"
                className="w-auto h-[40px]"
              />
              <img src="/blackArrow.svg" alt="Go" className="w-auto h-[40px]" />
            </div>
            <p className="text-2xl text-justify body-font">
              Nexus Quest tests students across four core domains: Logical
              Reasoning, Mathematics, Physics, and Chemistry...
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-7">
              <img
                src="/results.svg"
                alt="results"
                className="w-auto h-[40px]"
              />
              <img src="/blackArrow.svg" alt="Go" className="w-auto h-[40px]" />
            </div>
            <p className="text-2xl text-justify body-font">
              This section outlines how performance will be evaluated...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
