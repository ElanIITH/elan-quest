"use client";

import { useState } from "react";
import Image from "next/image";
import RegisterPopUp from "./components/common/RegisterPopUp";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const perks = [{ id: 1 }, { id: 2 }, { id: 3 }];

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
      {showPopup && (
        <RegisterPopUp setShowPopup={setShowPopup} />
      )}

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
    src="/pics/runner.png"
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
    max-md:left-[7%]
    max-md:top-[45px]
    max-md:w-[190px]

    /* DESKTOP — RESPONSIVE */
    md:left-[6.5%]
    md:top-[clamp(40px,3.125vw,45px)]
    md:w-[clamp(360px,39vw,560px)]
  "
>
  <Image
    src="/pics/questColor.png"
    alt="Nexus Quest Logo"
    width={700}
    height={350}
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
    max-md:left-[25%]
    max-md:top-[165px]
    max-md:px-4
    max-md:py-2
    max-md:text-xs

    /* DESKTOP — RESPONSIVE */
    md:left-[25%]
    md:top-[clamp(240px,22.92vw,330px)]
    md:px-[clamp(24px,2.22vw,32px)]
    md:py-[clamp(12px,1.11vw,16px)]
    md:text-[clamp(16px,1.39vw,20px)]
  "
>
  REGISTER NOW!
</button>
          </div>
        </section>

        {/* =====================================================
            WHAT IS QUEST
            ===================================================== */}
        <section
          className="
            relative
            w-full
            px-6
            pt-[120px]
            sm:px-10
            md:px-[6.5%]
            md:pt-[120px]
          "
        >
          <div className="max-w-[620px]">

            <h2
              className="
                mb-4
                text-xl
                font-black
                uppercase
                tracking-wide
                text-[#0F2851]
                sm:text-2xl
                md:text-[28px]
              "
            >
              WHAT IS QUEST?
            </h2>

            <p
              className="
                text-sm
                font-semibold
                leading-[1.5]
                text-[#0F2851]/80
                sm:text-base
                md:text-lg
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
            sm:px-10
            md:px-[6.5%]
          "
        >

          <h2
            className="
              mb-7
              text-xl
              font-black
              uppercase
              tracking-wide
              text-[#0F2851]
              sm:text-2xl
              md:text-[28px]
            "
          >
            PERKS AND PRIZES
          </h2>

          <div
            className="
              grid
              w-full
              max-w-[900px]
              grid-cols-1
              gap-5
              sm:grid-cols-2
              md:grid-cols-3
              md:gap-6
            "
          >
            {perks.map((perk) => (
              <div
                key={perk.id}
                className="
                  h-[210px]
                  w-full
                  rounded-[22px]
                  bg-[#466B9E]
                  p-3.5
                  shadow-md
                  sm:h-[220px]
                "
              >
                <div
                  className="
                    h-full
                    w-full
                    rounded-[15px]
                    bg-[#F9F5E8]
                  "
                />
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