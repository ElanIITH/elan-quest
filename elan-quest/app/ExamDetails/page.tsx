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
      <h1 className={`text-4xl sm:text-5xl mb-10 ${pressStart2P.className}`}>EXAM DETAILS</h1>

      {/* Eligibility */}
      <h2 className={`text-2xl sm:text-3xl mb-4 ${pressStart2P.className}`}>ELIGIBILITY</h2>
      <ul className="list-disc list-inside space-y-3 text-lg font-['Raleway']">
        <li>Students currently enrolled in Classes 6th to 10th from any recognized school are eligible to participate in Nexus QUEST.</li>
        <li>Participants must be actively studying in their respective academic year during the examination period.</li>
        <li>Age-appropriate question sets will be provided based on the student's current class level to ensure fair assessment.</li>
        <li>Students from all educational boards (CBSE, ICSE, State boards) within the specified grade range can apply for the examination.</li>
      </ul>

      {/* Dates */}
      <h2 className={`text-2xl sm:text-3xl mt-12 mb-4 ${pressStart2P.className}`}>DATES</h2>
      <div className="space-y-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Image src={rocket} alt="rocket" width={40} height={40} />
            <div>
              <p className="text-xl font-['Raleway']">MONTH 00, 2025</p>
              <p className="text-sm font-['Raleway']">Registrations Open</p>
            </div>
          </div>
        ))}
      </div>

      {/* Duration */}
      <h2 className={`text-2xl sm:text-3xl mt-12 mb-2 ${pressStart2P.className}`}>DURATION</h2>
      <p className="text-lg font-['Raleway']">
        Participants will have a total of 90 minutes to complete the test. Make sure to manage your time wisely to attempt all sections.
      </p>

      {/* Marking Scheme */}
      <h2 className={`text-2xl sm:text-3xl mt-12 mb-2 ${pressStart2P.className}`}>MARKING SCHEME</h2>
      <ul className="list-disc list-inside space-y-2 text-lg font-['Raleway']">
        <li>+1 mark for correct answers</li>
        <li>0 marks for incorrect responses</li>
      </ul>
      <p className="mt-2 text-lg font-['Raleway']">There will be no negative marking.</p>

      {/* Format */}
      <h2 className={`text-2xl sm:text-3xl mt-12 mb-2 ${pressStart2P.className}`}>FORMAT</h2>
      <p className="text-lg font-['Raleway'] mb-4">
        50 multiple-choice questions with single correct answers, promoting accuracy and efficient time management.
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg font-['Raleway']">
        <li>Logical Reasoning - 20</li>
        <li>Mathematics - 10</li>
        <li>Physics - 10</li>
        <li>Chemistry - 10</li>
      </ul>

      {/* Microscope Illustration */}
      <div className="mt-8 flex justify-end">
        <Image src={microscope} alt="microscope" width={120} height={120} />
      </div>
    </div>
  );
}