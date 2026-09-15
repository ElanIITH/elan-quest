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
            WHAT IS QUEST
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
          <div className="max-w-[620px]">
            <h2
              className="
                mb-4
                text-xl
                font-black
                uppercase
                md:ml-20
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
                md:ml-20
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
              md:ml-20
            "
          >
            PERKS AND PRIZES
          </h2>

          <div
            className="
    flex
    w-full
    gap-18
    flex-wrap
    justify-center
  "
          >
            {perks.map((perk) => (
              <div
                key={perk.id}
                className="
                 h-[300px]
        w-[250px]
        md:h-[450px]
        md:w-[350px]
        rounded-[22px]
        bg-[#466B9E]
        p-[12px]
        shadow-md
      "
              >
                <div
                  className="
                  h-[235px]
          md:h-[335px]
          w-full
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
