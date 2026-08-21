
export default function Results() {
  return (
    <main className="relative min-h-0 w-full overflow-x-hidden bg-[#F0ECCF] text-[#0F2851]">

      {/* =========================
          PATTERN BACKGROUND
          ========================= */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/pics/patternfinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* =========================
          PAGE CONTENT
          ========================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 md:px-[6.5%] md:py-12">

        {/* Heading */}
        <h1
          className="
            mb-8
            text-4xl
            font-black
            uppercase
            tracking-wide
            text-[#0F2851]
            sm:text-5xl
            md:text-[52px]
          "
        >
          EXAM DETAILS
        </h1>

        {/* YOUR SVG — KEEP EVERY PATH EXACTLY AS IT IS */}
       

        {/* =========================
            EXAM INFORMATION
            ========================= */}
        <div
          className="
            mt-8
            max-w-[1000px]
            space-y-5
            text-[#0F2851]
            text-sm
            font-medium
            leading-relaxed
            sm:text-base
            md:text-lg
          "
        >

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[260px_1fr] sm:gap-8">
            <p className="font-bold">Exam Organizing Body</p>
            <p>Elan &amp; nVision, IIT Hyderabad</p>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[260px_1fr] sm:gap-8">
            <p className="font-bold">Eligibility</p>
            <p>Students from classes 6 - 12</p>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[260px_1fr] sm:gap-8">
            <p className="font-bold">Exam Level</p>
            <p>Intermediate</p>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[260px_1fr] sm:gap-8">
            <p className="font-bold">Application Process</p>
            <p>Via Unstop</p>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[260px_1fr] sm:gap-8">
            <p className="font-bold">Exam Dates</p>
            <p>November 1st Week</p>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[260px_1fr] sm:gap-8">
            <p className="font-bold">Exam Mode</p>
            <p>Online</p>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[260px_1fr] sm:gap-8">
            <p className="font-bold">Fee of registration</p>
            <p>₹ 350</p>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[260px_1fr] sm:gap-8">
            <p className="font-bold">Objective</p>
            <p>
              To identify young academic talent by promoting conceptual
              learning, logical reasoning and creative problem solving
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[260px_1fr] sm:gap-8">
            <p className="font-bold">Languages</p>
            <p>English</p>
          </div>

        </div>

        {/* =========================
            DATES
            ========================= */}
        <section className="mt-12 max-w-[900px] text-[#0F2851]">

          <h2 className="mb-4 text-2xl font-black uppercase tracking-wide sm:text-3xl">
            DATES
          </h2>

          <div className="space-y-1 text-sm font-medium leading-relaxed sm:text-base md:text-lg">
            <p>Registrations: August 23, 2026</p>
            <p>Registrations Close: October 15, 2026</p>
            <p>Quest Olympiad: 1st week of November(date TBA)</p>
            <p>Prize Distribution: January 8, 2027</p>
          </div>

        </section>

        {/* =========================
            ELIGIBILITY
            ========================= */}
        <section className="mt-12 max-w-[950px] text-[#0F2851]">

          <h2 className="mb-5 text-2xl font-black uppercase tracking-wide sm:text-3xl">
            ELIGIBILITY
          </h2>

          <div className="space-y-5 text-sm font-medium leading-relaxed sm:text-base md:text-lg">

            <div className="flex items-start gap-3">
              <span>•</span>
              <p>
                Students currently enrolled in Classes 6th to 12th from any
                recognized school are eligible to participate in Nexus QUEST.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span>•</span>
              <p>
                Students from all educational boards (CBSE, ICSE, State boards)
                within the specified grade range can apply for the examination.
              </p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}