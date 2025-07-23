"use client";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import rocket from "@/public/rocket.png";
import microscope from "@/public/microscope.png";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export default function ExamDetailsPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-900 text-[#E8E8C6] px-6 sm:px-10 py-12">
      {/* Heading */}
      <h1 className={`text-4xl sm:text-7xl mb-10 ${pressStart2P.className}`}>EXAM DETAILS</h1>

      {/* Eligibility */}
      <h2 className={`text-2xl sm:text-5xl mb-4 ${pressStart2P.className}`}>ELIGIBILITY</h2>
      <ul className="space-y-3 text-lg font-['Raleway']">
        <li className="flex gap-2 items-start">
          <Image src="/arrow.svg" alt=">" width={16} height={16} className="mt-1" />
          <span>Students currently enrolled in Classes 6th to 10th from any recognized school are eligible to participate in Nexus QUEST.</span>
        </li>
        <li className="flex gap-2 items-start">
          <Image src="/arrow.svg" alt=">" width={16} height={16} className="mt-1" />
          <span>Participants must be actively studying in their respective academic year during the examination period.</span>
        </li>
        <li className="flex gap-2 items-start">
          <Image src="/arrow.svg" alt=">" width={16} height={16} className="mt-1" />
          <span>Age-appropriate question sets will be provided based on the student's current class level to ensure fair assessment.</span>
        </li>
        <li className="flex gap-2 items-start">
          <Image src="/arrow.svg" alt=">" width={16} height={16} className="mt-1" />
          <span>Students from all educational boards (CBSE, ICSE, State boards) within the specified grade range can apply for the examination.</span>
        </li>
      </ul>

      {/* Dates */}
      <h2 className={`text-2xl sm:text-5xl mt-12 mb-4 ${pressStart2P.className}`}>DATES</h2>
      <div className="flex flex-row gap-6 items-start">
        <div className="w-[120px]">
          <Image src={rocket} alt="rocket" width={120} height={300} className="object-contain" />
        </div>
        <div className="flex flex-col justify-between py-2 gap-1 font-['Raleway']">
          {Array(4).fill(0).map((_, i) => (
            <div key={i}>
              <p className="text-xl">MONTH 00, 2025</p>
              <p className="text-sm">Registrations Open</p>
            </div>
          ))}
        </div>
      </div>

      {/* Duration */}
      <h2 className={`text-2xl sm:text-5xl mt-12 mb-2 ${pressStart2P.className}`}>DURATION</h2>
      <p className="text-lg font-['Raleway']">
        Participants will have a total of 90 minutes to complete the test. Make sure to manage your time wisely to attempt all sections.
      </p>

      {/* Marking Scheme */}
      <h2 className={`text-2xl sm:text-5xl mt-12 mb-2 ${pressStart2P.className}`}>MARKING SCHEME</h2>
      <ul className="space-y-2 text-lg font-['Raleway']">
        <li className="flex gap-2 items-start">
          <Image src="/arrow.svg" alt=">" width={16} height={16} className="mt-1" />
          <span>+1 mark for correct answers</span>
        </li>
        <li className="flex gap-2 items-start">
          <Image src="/arrow.svg" alt=">" width={16} height={16} className="mt-1" />
          <span>0 marks for incorrect responses</span>
        </li>
      </ul>
      <p className="mt-2 text-lg font-['Raleway']">There will be no negative marking.</p>

      {/* FORMAT Section with Microscope */}
<div className="relative min-h-[160px] mt-12">
  <h2 className={`text-2xl sm:text-3xl mb-2 ${pressStart2P.className}`}>FORMAT</h2>
  <p className="text-lg font-['Raleway'] mb-4">
    50 multiple-choice questions with single correct answers, promoting accuracy and efficient time management.
  </p>

  <ul className="space-y-2 text-lg font-['Raleway'] max-w-3xl">
    <li className="flex gap-2 items-start">
      <Image src="/arrow.svg" alt=">" width={16} height={16} className="mt-1" />
      <span>Logical Reasoning - 20</span>
    </li>
    <li className="flex gap-2 items-start">
      <Image src="/arrow.svg" alt=">" width={16} height={16} className="mt-1" />
      <span>Mathematics - 10</span>
    </li>
    <li className="flex gap-2 items-start">
      <Image src="/arrow.svg" alt=">" width={16} height={16} className="mt-1" />
      <span>Physics - 10</span>
    </li>
    <li className="flex gap-2 items-start">
      <Image src="/arrow.svg" alt=">" width={16} height={16} className="mt-1" />
      <span>
        Chemistry - 10. Questions based on basic principles and application-focused logic from daily life and classroom.
      </span>
    </li>
  </ul>

  {/* Microscope Image beside Chemistry */}
  <div className="absolute bottom-0 right-0">
    <Image src={microscope} alt="Microscope" width={300} height={400} />
  </div>
</div>
    </div>
  );
}
