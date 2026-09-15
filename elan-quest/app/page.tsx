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
          <strong>Students will visit the IIT Hyderabad campus</strong>
        </>
      ),
    },

    {
      id: 2,
      text: (
        <>
          <strong>Top 3 achievers</strong> from every class in each school will
          be awarded <strong>Merit Medals and Certificates</strong> of
          Recognition
        </>
      ),
    },

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

    {
      id: 4,
      text: (
        <>
          Participants will{" "}
          <strong>interact with current students, gaining insights,</strong>{" "}
          mentorship, and lasting connections.
        </>
      ),
    },

    {
      id: 5,
      text: (
        <>
          Special School Incentive: Schools with more than 200 registered
          students will receive fest passes for top 2–3 toppers of that school
          to attend the Elan & nVision festival at IIT Hyderabad.
        </>
      ),
    },

    {
      id: 6,
      text: (
        <>
          Grand award celebration at IIT Hyderabad with media coverage — winners
          will be featured on official platforms to honor their success.
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

      {/* =====================================================
          WHOLE PAGE PATTERN BACKGROUND
          ===================================================== */}
      <div className="absolute top-0 left-0 z-0 h-[3309px] w-full pointer-events-none">
        <Image
          src="/pics/patternfinal.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
        />

        {/* Pattern becomes lighter as we move down */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(249,245,232,0.12) 0%, rgba(249,245,232,0.30) 30%, rgba(249,245,232,0.55) 65%, rgba(249,245,232,0.80) 100%)",
          }}
        />
      </div>

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
    sm:px-10
    md:px-[6.5%]
    md:pt-[300px]
  "
        >
          <div className="mx-auto w-full max-w-[1000px] text-center">
            {/* HEADING */}
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

            {/* DESCRIPTION */}
            <p
              className="
        mx-auto
        max-w-[850px]
        text-center
        text-[17px]
        font-normal
        leading-[1.5]
        text-[#0F2851]/80
        sm:text-[19px]
        md:text-[21px]
      "
            >
              A national-level Talent Hunt examination for school students,
              organized by Elan & nVision, the annual techno-cultural fest of
              IIT Hyderabad.
            </p>
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
                className={`
          flex
          w-full
          flex-col
          rounded-[22px]
          bg-[#A9CEFF]
          p-[16px]

          ${perk.id <= 3 ? "h-[385px]" : "h-[145px] justify-center"}
        `}
              >
                {/* =================================================
            IMAGE — ONLY FOR FIRST 3 CARDS
            ================================================= */}
                {perk.id <= 3 && (
                  <div
                    className="
              h-[255px]
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
                )}

                {/* =================================================
            DESCRIPTION
            ================================================= */}
                <div
                  className={`
            flex
            text-center
            text-[#0F2851]

            ${
              perk.id <= 3
                ? "flex-1 items-center justify-center pt-3"
                : "items-center justify-center"
            }
          `}
                >
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
        {/* =====================================================
            DARK PATTERN SECTION
            ===================================================== */}
        <section
          className="
            relative
            z-20
            mt-[50px]
            h-[700px]
            w-full
            overflow-hidden
          "
        >
          <Image
            src="/pics/patternfinal.png"
            alt=""
            fill
            className="object-cover object-top"
          />

          <div className="absolute inset-0 bg-[#D8D4B5]/35" />
        </section>
      </main>
    </div>
  );
}
