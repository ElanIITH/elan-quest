"use client";
import ExamDetails from "../components/ExamDetails/ExamDetails";
import Eligibility from "../components/ExamDetails/Eligibility";
import Dates from "../components/ExamDetails/Dates";
import Duration from "../components/ExamDetails/Duration";
import MarkingScheme from "../components/ExamDetails/MarkingScheme";
import Format from "../components/ExamDetails/Format";
import Rocket from "../components/ExamDetails/Rocket";
import Microscope from "../components/ExamDetails/Microscope";
import ArrowPointer from "../components/ExamDetails/ArrowPointer";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600"] });

export default function ExamDetailsPage() {
  return (
    <div className={`${raleway.className} px-5 py-10 min-h-screen bg-[#252525] text-[#E8E8C6] relative overflow-hidden`}>
      
      {/* Exam Details */}
      <div className="w-full max-w-7xl h-auto py-10">
        <ExamDetails />
      </div>

      {/* Eligibility Section */}
      <div className="w-full max-w-4xl h-auto py-10">
        <Eligibility />
        <ul className="text-[17px] max-w-5xl mt-4">
          <li className="flex gap-2 py-2"><ArrowPointer /> Students currently enrolled in Classes 6th to 10th from any recognized school are eligible to participate in Nexus QUEST.</li>
          <li className="flex gap-2 py-2"><ArrowPointer /> Participants must be actively studying in their respective academic year during the examination period.</li>
          <li className="flex gap-2 py-2"><ArrowPointer /> Age-appropriate question sets will be provided based on the student’s current class level to ensure fair assessment.</li>
          <li className="flex gap-2 py-2"><ArrowPointer /> Students from all educational boards (CBSE, ICSE, State boards) within the specified grade range can apply for the examination.</li>
        </ul>
      </div>

      {/* Dates Section */}
      <div className="py-10">
        <div className="w-[400px] h-[100px]">
          <Dates />
        </div>

        <div className="relative flex mt-6">
          <div className="w-[160px]">
            <Rocket />
          </div>
          <div className="flex flex-col justify-between ml-4 py-2 h-[300px] body-font">
            {["MONTH 00, 2025", "MONTH 00, 2025", "MONTH 00, 2025", "MONTH 00, 2025"].map((month, idx) => (
              <div key={idx} className="mb-2">
                <div className="text-lg font-semibold">{month}</div>
                <div className="text-sm">Registrations Open</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Duration Section */}
      <div className="py-12">
        <div className="w-[650px] h-[100px]">
          <Duration />
        </div>
        <p className="text-[16px] max-w-4xl">
          Participants will have a total of 90 minutes to complete the test. Make sure to manage your time wisely to attempt all sections.
        </p>
      </div>

      {/* Marking Scheme Section */}
      <div className="py-12 w-[1100px]">
        <MarkingScheme />
        <ul className="text-[16px] max-w-4xl mt-2">
          <li className="flex gap-2 py-2"><ArrowPointer /> +1 mark for correct answers</li>
          <li className="flex gap-2 py-2"><ArrowPointer /> 0 marks for incorrect responses</li>
        </ul>
        <p className="mt-2 text-[16px]">There will be no negative marking.</p>
      </div>

      {/* Format Section */}
      <div className="relative flex justify-between py-12 items-start">
        <div className="w-[calc(100%-420px)]">
          <div className="w-[500px] h-[100px]">
            <Format />
          </div>
          <p className="text-[16px] max-w-4xl mt-2">
            50 multiple-choice questions with single correct answers, promoting accuracy and efficient time management.
          </p>
          <ul className="text-[16px] max-w-4xl mt-4">
            <li className="flex gap-2 py-1"><ArrowPointer /> Logical Reasoning - 20</li>
            <li className="flex gap-2 py-1"><ArrowPointer /> Mathematics - 10</li>
            <li className="flex gap-2 py-1"><ArrowPointer /> Physics - 10</li>
            <li className="flex gap-2 py-1"><ArrowPointer /> Chemistry - 10</li>
          </ul>
        </div>

        {/* Microscope aligned to bottom */}
        <div className="w-[380px] absolute bottom-12 right-0">
          <Microscope />
        </div>
      </div>
    </div>
  );
}
