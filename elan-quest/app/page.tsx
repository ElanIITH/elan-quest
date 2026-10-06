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
        <strong>Merit Recognition:</strong> Top 3 achievers from every
        class in each school will receive{" "}
        <strong>Merit Medals and Certificates of Recognition.</strong>
      </>
    ),
  },

  {
    id: 2,
    text: (
      <>
        <strong>Excellence Rewards:</strong> The Top 10 highest scorers
        in each class will receive{" "}
        <strong>
          Excellence Medals along with exclusive goodies and rewards.
        </strong>
      </>
    ),
  },

<<<<<<< HEAD
    {
      id: 3,
      text: (
        <>
          <strong>Top 10 highest scorers</strong> per class will be presented
          with{" "}
          <strong>
            Excellence Medals and receive exclusive goodies and rewards
          </strong>
        </>
      ),
    },
  ];
=======
  {
    id: 3,
    text: (
      <>
        <strong>Special School Incentive:</strong> Schools with 200+
        registered students will receive Elan & nVision festival passes
        for the top 2–3 performers from their school at IIT Hyderabad.
      </>
    ),
  },

  {
    id: 4,
    text: (
      <>
        <strong>IIT Hyderabad Campus Experience:</strong> Students will
        get an opportunity to visit IIT Hyderabad and explore its
        cutting-edge laboratories and state-of-the-art facilities
        through guided tours.
      </>
    ),
  },

  {
    id: 5,
    text: (
      <>
        <strong>Student Interaction & Mentorship:</strong> Participants
        will interact with current IIT Hyderabad students, gaining
        valuable insights, mentorship, and lasting connections.
      </>
    ),
  },

  {
    id: 6,
    text: (
      <>
        <strong>Grand Award Celebration:</strong> Winners will be
        felicitated at a grand award ceremony at IIT Hyderabad, with
        media coverage and recognition on official platforms.
      </>
    ),
  },
];
>>>>>>> origin/skeleton-base

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
  <div className="mx-auto w-full max-w-[1000px] text-center">

    <h2
      className="
        mb-5
        text-center
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[44px]
      "
    >
      WHAT IS QUEST?
    </h2>

    <p
      className="
        mx-auto
        max-w-[900px]
        text-center
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[21px]
      "
    >
      Nexus QUEST is a nationwide Talent Hunt Examination conducted
      by Elan & nVision, a student body of IIT Hyderabad.
    </p>

    <p
      className="
        mx-auto
        mt-5
        max-w-[900px]
        text-center
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[21px]
      "
    >
      <strong>Key date:</strong> Round 1 – November last week
    </p>

    <p
      className="
        mx-auto
        mt-3
        max-w-[900px]
        text-center
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[21px]
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
  <div className="mx-auto w-full max-w-[1000px] text-center">

    <h2
      className="
        mb-6
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[44px]
      "
    >
      EXAM STRUCTURE
    </h2>

    <p
      className="
        mx-auto
        max-w-[900px]
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[21px]
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
        max-w-[900px]
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[21px]
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
  <div className="mx-auto w-full max-w-[1000px] text-center">

    <h2
      className="
        mb-5
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[44px]
      "
    >
      SYLLABUS
    </h2>

    <p
      className="
        mx-auto
        max-w-[900px]
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[21px]
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
        text-center
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[44px]
      "
    >
      ELIGIBILITY
    </h2>

    <div
      className="
        mx-auto
        max-w-[900px]
        space-y-5
        text-[17px]
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[21px]
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
        text-center
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[44px]
      "
    >
      IMPORTANT DATES
    </h2>

    <div
      className="
        mx-auto
        max-w-[850px]
        space-y-4
        text-[17px]
        leading-[1.5]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[21px]
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
          <div className="mx-auto w-full max-w-[1100px] text-center">
            <h2
              className="
        mb-4
        text-center
        text-[32px]
        font-black
        uppercase
        tracking-wide
        text-[#0F2851]
        sm:text-[38px]
        md:text-[44px]
      "
            >
              PERKS AND PRIZES
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
        mx-auto
        mb-7
        max-w-[950px]
        text-center
        text-[17px]
        font-normal
        leading-[1.45]
        text-[#0F2851]
        sm:text-[19px]
        md:text-[21px]
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
      max-w-[938px]
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
          h-[385px]
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
<<<<<<< HEAD
                <div
                  className="
              h-[255px]
=======
                {perk.id <= 3 && (
                  <div
                    className="
              h-[180px]
>>>>>>> origin/skeleton-base
              w-full
              shrink-0
              overflow-hidden
              rounded-[15px]
              bg-[#F9F5E8]
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
              md:text-[16px]
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