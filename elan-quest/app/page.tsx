"use client";

import { useState } from "react";
import Image from "next/image";
import RegisterPopUp from "./components/common/RegisterPopUp";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
const perks = [
  {
    id: 1,
    text: (
      <>
        <strong>Chance to visit IIT Hyderabad</strong>
      </>
    ),
  },

  {
    id: 2,
    text: (
      <>
       <strong>Exclusive goodies and rewards</strong>
       
      </>
    ),
  },

  {
    id: 3,
    text: (
      <>
        <strong>Merit Medals and Certificates</strong>
      </>
    ),
  },
];

  return (
    <div
      className="
        relative
        -mt-[100px]
        md:mt-0
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#F0ECCF]
        text-[#0F2851]
      "
    >
      {/* Registration Modal */}
      {showPopup && <RegisterPopUp setShowPopup={setShowPopup} />}

     <div
  className="absolute inset-0"
  style={{
    backgroundImage: "url('/pics/pattern.png')",
    backgroundRepeat: "repeat",
  }}
/>

      {/* =====================================================
          PAGE CONTENT
          ===================================================== */}
      <main className="relative z-10 w-full">
        {/* =====================================================
            HERO
            ===================================================== */}
        <section
          className="
            relative
            w-full
            min-h-[900px]
            max-md:min-h-[700px]
            overflow-visible
          "
        >
          {/* =================================================
              RUNNER
              Desktop stays exactly as before.
              Mobile gets a wider image so it doesn't squeeze.
              ================================================= */}
          {/* Runner - hero only */}
          <div
            className="
    absolute
    z-0
    pointer-events-none

    /* MOBILE */
    max-md:top-[120px]
    max-md:left-[-8%]
    max-md:w-[125%]
    max-md:max-w-none

    /* DESKTOP - UNCHANGED */
    md:top-0
    md:left-0
    md:w-full
  "
          >
            <Image
              src="/pics/newColored.png"
              alt="Runner Vector Illustration"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* =================================================
              HERO CONTENT
              ================================================= */}
          <div
            className="
              relative
              z-10
              mx-auto
              min-h-[900px]
              max-md:min-h-[700px]
              w-full
              max-w-[1440px]
            "
          >
            {/* =================================================
                QUEST LOGO
                ================================================= */}
            {/* Quest Logo */}
            <div
              className="
    absolute
    z-20

    /* MOBILE — UNCHANGED */
    max-md:left-[4%]
    max-md:top-[45px]
    max-md:w-[230px]

    /* DESKTOP — RESPONSIVE */
    md:left-[4.5%]
    md:top-[clamp(160px,5vw,240px)]
    md:w-[clamp(430px,45vw,650px)]
  "
            >
              <Image
                src="/pics/questColor.png"
                alt="Nexus Quest Logo"
                width={950}
                height={475}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Register Button */}
            <button
              onClick={togglePopup}
              className="
    absolute
    z-30
    rounded-[12px]
    bg-[#FF7779]
    text-white
    font-black
    uppercase
    tracking-wide
    shadow-md
    transition-all
    duration-200
    hover:scale-105
    hover:bg-[#ff6568]
    active:scale-95
    cursor-pointer
    whitespace-nowrap

    /* MOBILE — UNCHANGED */
    max-md:left-[23%]
    max-md:top-[165px]
    max-md:px-4
    max-md:py-2
    max-md:text-xs

    /* DESKTOP — RESPONSIVE */
    md:left-[28%]
    md:top-[clamp(480px,27vw,580px)]
md:px-[clamp(20px,2.8vw,34px)]
md:py-[clamp(13px,1.4vw,18px)]
md:text-[clamp(18px,1.6vw,23px)]
  "
            >
              REGISTER NOW!
            </button>
          </div>
        </section>

  {/* =====================================================
    WHAT IS QUEST?
===================================================== */}
<section
  className="
    relative
    w-full
    px-6
    pt-[300px]
    pb-[60px]
    sm:px-10
    md:px-[6.5%]
    md:pt-[300px]
  "
>
  <div className="mx-auto w-full max-w-[1000px] ">

    <h2
      className="
        mb-5
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[91px]
      "
    >
      WHAT IS QUEST?
    </h2>

    <p
      className="
        mx-auto
        max-w-[1178px]
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[28px]
      "
    >
      Nexus QUEST is a nationwide Talent Hunt Examination conducted
      by Elan & nVision, a student body of IIT Hyderabad.
    </p>

    <p
      className="
        mx-auto
        mt-5
        max-w-[1178px]
        text-center
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[28px]
      "
    >
      <strong>Key date:</strong> Round 1 – November last week
    </p>

    <p
      className="
        mx-auto
        mt-3
        max-w-[1178px]
        text-center
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[28px]
      "
    >
      Challenge yourself beyond rote learning and discover
      opportunities connected to IIT Hyderabad.
    </p>

  </div>
</section>
{/* =====================================================
    EXAM STRUCTURE
===================================================== */}
<section
  className="
    relative
    w-full
    px-6
    py-[60px]
    sm:px-10
    md:px-[6.5%]
  "
>
  <div className="mx-auto w-full max-w-[1000px] ">

    <h2
      className="
        mb-6
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[91px]
      "
    >
      EXAM STRUCTURE
    </h2>

    <p
      className="
        mx-auto
        max-w-[1178px]
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[28px]
      "
    >
      The competition will be conducted in two rounds: an online
      Round 1, followed by an offline Round 2. The top performers
      from each class will be selected for Round 2, which will be an
      offline exam at the IIT Hyderabad campus.
    </p>

    <p
      className="
        mx-auto
        mt-5
        max-w-[1178px]
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[28px]
      "
    >
      These students can enjoy exclusive campus experiences,
      including a detailed campus tour.
    </p>

  </div>
</section>


{/* =====================================================
    SYLLABUS
===================================================== */}
<section
  className="
    relative
    w-full
    px-6
    pb-[60px]
    sm:px-10
    md:px-[6.5%]
  "
>
  <div className="mx-auto w-full max-w-[1000px] ">

    <h2
      className="
        mb-5
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[91px]
      "
    >
      SYLLABUS
    </h2>

    <p
      className="
        mx-auto
        max-w-[1178px]
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[28px]
      "
    >
      The syllabus for each class is based exclusively on the
      relevant portions of the NCERT textbook prescribed for
      that class.
    </p>

  </div>
</section>
{/* =====================================================
    ELIGIBILITY
===================================================== */}
<section
  className="
    relative
    w-full
    px-6
    py-[60px]
    sm:px-10
    md:px-[6.5%]
  "
>
  <div className="mx-auto w-full max-w-[1000px]">

    <h2
      className="
        mb-6
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[91px]
      "
    >
      ELIGIBILITY
    </h2>

    <div
      className="
        mx-auto
        max-w-[1178px]
        space-y-5
        text-[17px]
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[28px]
      "
    >

      <p>
        Students currently enrolled in Classes 6 to 12 from any
        recognized school are eligible to participate in Nexus QUEST.
      </p>

      <p>
        Students from all educational boards (CBSE, ICSE, State boards)
        within the specified grade range can apply for the examination.
      </p>

    </div>

  </div>
</section>
{/* =====================================================
    IMPORTANT DATES
===================================================== */}
<section
  className="
    relative
    w-full
    px-6
    py-[60px]
    sm:px-10
    md:px-[6.5%]
  "
>
  <div className="mx-auto w-full max-w-[1000px]">

    <h2
      className="
        mb-8
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[91px]
      "
    >
      IMPORTANT DATES
    </h2>

    <div
      className="
        mx-auto
        max-w-[1178px]
        space-y-4
        text-[17px]
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[28px]
      "
    >

      <div className="flex flex-col gap-1 border-b border-[#0F2851]/30 pb-3 sm:flex-row sm:justify-between">
        <span className="font-bold">
          Registration Opens
        </span>
        <span>
          September 8, 2026
        </span>
      </div>

      <div className="flex flex-col gap-1 border-b border-[#0F2851]/30 pb-3 sm:flex-row sm:justify-between">
        <span className="font-bold">
          Registration Closes
        </span>
        <span>
          October 15, 2026
        </span>
      </div>

      <div className="flex flex-col gap-1 border-b border-[#0F2851]/30 pb-3 sm:flex-row sm:justify-between">
        <span className="font-bold">
          Quest Olympiad Round 1
        </span>
        <span>
          November 7, 2026
        </span>
      </div>

      <div className="flex flex-col gap-1 border-b border-[#0F2851]/30 pb-3 sm:flex-row sm:justify-between">
        <span className="font-bold">
          Quest Olympiad Round 2
        </span>
        <span>
          Date TBA
        </span>
      </div>

      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
        <span className="font-bold">
          Prize Distribution
        </span>
        <span>
          Date TBA
        </span>
      </div>

    </div>

  </div>
  <section className="w-full px-6 py-16 md:px-12 lg:px-20">
  <div className="mx-auto max-w-6xl">
     <h2
      className="
        mb-8
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[65px]
      "
    >
      Rewards & Opportunities
    </h2>

    <ul className="space-y-6 text-base leading-relaxed text-gray-700 md:text-[28px]">
      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
        <p>
          <span className="font-semibold text-black">Merit Recognition:</span>{" "}
          Top 3 achievers from every class in each school will receive Merit
          Medals and Certificates of Recognition.
        </p>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
        <p>
          <span className="font-semibold text-black">Excellence Rewards:</span>{" "}
          The Top 10 highest scorers in each class will receive Excellence
          Medals, exclusive goodies, and rewards.
        </p>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
        <p>
          <span className="font-semibold text-black">
            Special School Incentive:
          </span>{" "}
          Schools with 200+ registered students will receive Elan & nVision
          festival passes for their top 2–3 performers at IIT Hyderabad.
        </p>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
        <p>
          <span className="font-semibold text-black">
            IIT Hyderabad Campus Experience:
          </span>{" "}
          Winners will get an opportunity to visit IIT Hyderabad and explore
          its cutting-edge laboratories and state-of-the-art facilities through
          guided tours.
        </p>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
        <p>
          <span className="font-semibold text-black">
            Student Interaction & Mentorship:
          </span>{" "}
          Participants will interact with current IIT Hyderabad students,
          gaining valuable insights, mentorship, and lasting connections.
        </p>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
        <p>
          <span className="font-semibold text-black">
            Grand Award Celebration:
          </span>{" "}
          Winners will be felicitated at a grand award ceremony at IIT
          Hyderabad, with media coverage and recognition on official platforms.
        </p>
      </li>
    </ul>
  </div>
</section>
</section>
        {/* =====================================================
    PERKS AND PRIZES
    ===================================================== */}
        <section
          className="
    relative
    w-full
    px-6
    pt-[45px]
    pb-[60px]
    sm:px-10
    md:px-[6.5%]
  "
        >
          {/* HEADING */}
          <div className="mx-auto w-full max-w-[1100px] ">
            <h2
              className="
        text-[27px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[91px]
      "
            >
              PERKS AND PRIZES
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
        mb-7
        max-w-[1178px]
        text-[17px]
        font-normal
        leading-[1.45]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[28px]
      "
            >
              The participating students stand to gain many prizes and goodies,
              as well as invaluable experience by participating in the Nexus
              QUEST examination:
            </p>
          </div>

          {/* =====================================================
      CARDS
      ===================================================== */}
          <div
            className="
      mx-auto
      grid
      w-full
      max-w-[1178px]
      grid-cols-1
      gap-5
      sm:grid-cols-2
      md:grid-cols-3
      md:gap-x-[38px]
      md:gap-y-[22px]
    "
          >
            {perks.map((perk) => (
              <div
                key={perk.id}
                className="
          flex
          h-[355px]
          md:h-[492px]
          md:w-[367px]
          w-full
          flex-col
          rounded-[22px]
          bg-[#A9CEFF]
          p-[16px]
        "
              >
                {/* =================================================
            IMAGE
            ================================================= */}
                <div
                  className="
              h-[255px]
              w-full
              shrink-0
              overflow-hidden
              rounded-[15px]
              bg-[#F9F5E8]
              md:h-[351px]
              md:w-[333px]
            "
                >
                  <Image
                    src={`/pics/perk${perk.id}.png`}
                    alt={`Perk ${perk.id}`}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* =================================================
            DESCRIPTION
            ================================================= */}
                <div className="flex flex-1 items-center justify-center pt-3 text-center text-[#0F2851]">
                  <p
                    className="
              text-[14px]
              font-normal
              leading-[1.35]
              text-[#0F2851]
              md:text-[36px]
            "
                  >
                    {perk.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
       
      </main>
    </div>
  );
}