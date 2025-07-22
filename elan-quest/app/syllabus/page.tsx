"use client";

import { useState } from "react";
import Books from "../components/syllabus/Books";
import Syllabus from "../components/syllabus/Syllabus";
import RenderNavBar from "../components/syllabus/NavBar/RenderNavBar";
import RenderClass from "../components/syllabus/NavBar/RenderClass";
import Syllabus6 from "../components/syllabus/Syllabi/Syllabus6";
import Syllabus7 from "../components/syllabus/Syllabi/Syllabus7";

export default function SyllabusPage() {
  const [activeNav, setActiveNav] = useState<number>(1);

  return (
    <div className="body-font">
      <Syllabus />
      <Books />
      <div className="relative">
        <div className="absolute top-45 left-10 w-[830px] text-justify">
          Nexus QUEST spans four key academic areas -{" "}
          <span className="font-semibold">Logical Reasoning</span>,{" "}
          <span className="font-semibold">Mathematics</span>,{" "}
          <span className="font-semibold">Physics</span>, and{" "}
          <span className="font-semibold">Chemistry</span>, testing students
          theoretical knowledge, problem-solving capabilities, and real-world
          application of basic concepts. The examination balances
          curriculum-aligned topics with analytical reasoning, delivering a
          complete evaluation of scholarly performance across varied subjects.
        </div>
        <div className="absolute top-90 left-10 w-[1200px] flex flex-col gap-10">
          <div>
            {<RenderNavBar activeNav={activeNav} setActiveNav={setActiveNav} />}
          </div>
          <div>{<RenderClass activeNav={activeNav} />}</div>
          <div>
            <Syllabus7 />
          </div>
        </div>
      </div>
    </div>
  );
}
