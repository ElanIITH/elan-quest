"use client";

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#F0ECCF]">
      {/* Pattern Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/pics/patternfinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* About Content */}
      <section className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 md:px-[6.5%] md:py-12">
        
        {/* Heading */}
        <h1 className="mb-7 text-4xl font-black uppercase tracking-wide text-[#0F2851] md:text-5xl">
          ABOUT US
        </h1>

        <div className="max-w-[900px] text-[#0F2851]">

          {/* About Nexus Quest */}
          <h2 className="mb-2 text-lg font-black md:text-xl">
            About Nexus Quest
          </h2>

          <p className="mb-8 text-sm font-medium leading-relaxed md:text-base">
            Nexus QUEST is a nationwide Talent Hunt Examination for school
            students, conducted as part of Elan &amp; nVision — IIT Hyderabad&apos;s
            annual techno-cultural fest. It&apos;s designed to identify and
            celebrate exceptional scholastic talent from schools across the
            country.
          </p>

          <p className="mb-8 text-sm font-medium leading-relaxed md:text-base">
            Unlike routine textbook-based Olympiads, Nexus QUEST challenges
            students with thought-provoking, analytical and multidisciplinary
            problems beyond rote learning, while providing IIT exposure and
            opportunities to explore future academic and career paths.
          </p>

          {/* About Elan & nVision */}
          <h2 className="mb-2 text-lg font-black md:text-xl">
            About Elan &amp; nVision
          </h2>

          <p className="mb-8 text-sm font-medium leading-relaxed md:text-base">
            Elan &amp; nVision is IIT Hyderabad&apos;s flagship techno-cultural fest —
            and the platform Nexus QUEST is held under. Now in its 17th edition,
            it&apos;s recognized as South India&apos;s largest student-run techno-cultural
            festival, drawing over 50,000 students, innovators, artists, and
            young entrepreneurs from across the country over three days.
          </p>

          {/* About IITH */}
          <h2 className="mb-2 text-lg font-black md:text-xl">
            About IITH
          </h2>

          <p className="mb-5 text-sm font-medium leading-relaxed md:text-base">
            Nexus QUEST is conducted by the Indian Institute of Technology
            Hyderabad (IITH) — established in 2008 and now one of India&apos;s
            fastest-rising technical institutes.
          </p>

          <p className="mb-3 text-sm font-bold md:text-base">
            Why that matters for participating students:
          </p>

          <ul className="list-disc space-y-1 pl-5 text-sm font-medium leading-relaxed md:text-base">
            <li>NIRF 2025 rankings:</li>
            <li>Overall - 12th</li>
            <li>Engineering - 7th</li>
            <li>Innovation - 6th</li>
            <li>Research Institutions - 15th</li>

            <li>
              Research-driven campus: running &quot;Patent a Day: Mission 365,&quot;
              having already filed 580+ patents, including 210+ in the last
              year alone, across 30+ Centres and Centres of Excellence
            </li>

            <li>
              Strong innovation culture: has supported 320+ student startups,
              with dedicated programs like BUILD and BHARATI that get
              first-year students hands-on with real engineering problems
            </li>

            <li>
              Academic diversity: IIT Hyderabad offers programmes spanning
              engineering, science, design and liberal arts, including
              interdisciplinary programmes such as Artificial Intelligence and
              Computational Engineering.
            </li>

            <li>
              Global connections: IIT Hyderabad has strategic academic and
              research partnerships across seven countries, including Japan,
              Australia, the USA and European nations
            </li>
          </ul>

          <p className="mt-8 text-sm font-medium leading-relaxed md:text-base">
            For a school student, this means Nexus QUEST isn&apos;t just another
            Olympiad — it&apos;s a direct touchpoint with a nationally top-ranked
            IIT, its faculty, and its research culture
          </p>

        </div>
      </section>
    </main>
  );
}