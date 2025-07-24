export default function ResultsPage() {
  const processItems = [
    {
      id: 1,
      content:
        "Results will be declared within 7 days of the examination date and will be communicated through the official portal and registered email addresses.",
    },
    {
      id: 2,
      content:
        "Every participant will receive a detailed digital marksheet, outlining their scores in each section: Mental Ability (MAT), Mathematics, Physics, and Chemistry.",
    },
    {
      id: 3,
      content:
        "The overall performance will be assessed using the absolute scores from all sections combined.",
    },
    {
      id: 4,
      content:
        "In the event of tied scores, tie-breakers will be applied in the following order of section scores: Mathematics, followed by Mental Ability, Physics, and then Chemistry.",
    },
    {
      id: 5,
      content:
        "Top-performing students will be shortlisted for further honors based on standard-wise and school-wise performance segmentation.",
    },
    {
      id: 6,
      content:
        "Selected high achievers will receive formal invitations to the prestigious Elan & nVision festival at IIT Hyderabad, where they will be felicitated at a special award ceremony.",
    },
    {
      id: 7,
      content:
        "Final selections and merit lists will undergo a thorough validation process by the academic team before announcement.",
    },
    {
      id: 8,
      content:
        "Any changes or re-evaluation requests will be addressed through a formal review mechanism, details of which will be shared post result declaration.",
    },
  ];

  const awardsList = [
    {
      id: 1,
      content:
        "Top 3 achievers from every class in each school will be awarded Merit Medals and Certificates of Recognition.",
    },
    {
      id: 2,
      content:
        "Top 10 highest scorers per class will be presented with Excellence Medals and receive exclusive goodies and rewards.",
    },
    {
      id: 3,
      content:
        "Students will visit the IIT Hyderabad campus, exploring cutting-edge labs and state-of-the-art facilities on guided tours.",
    },
    {
      id: 4,
      content:
        "Participants will interact with current students, gaining insights, mentorship, and lasting connections.",
    },
    {
      id: 5,
      content:
        "Grand award celebration at IIT Hyderabad with media coverage — winners will be featured on official platforms to honor their success.",
    },
  ];

  return (
    <div className="relative min-h-screen px-5 py-10 body-font bg-[var(--background)] text-[var(--foreground)]">
      {/* Absolutely Positioned Decorative SVGs */}
      <img
        src="/results/first.svg"
        alt="first"
        className="absolute top-0 right-0 w-[330px] h-auto"
      />
      <img
        src="/results/second.svg"
        alt="second"
        className="absolute top-[490px] right-0 w-[130px] h-auto"
      />
      <img
        src="/results/trophy.svg"
        alt="trophy"
        className="absolute bottom-0 left-0 w-[180px] h-auto"
      />

      {/* Main Content Container */}
      <div className="flex flex-col justify-center gap-10">
        <img
          src="/results/results.svg"
          alt="results"
          className="w-[500px] h-auto mb-5"
        />
        {/* Process Section */}
        <div className="w-[70vw] flex flex-col mr-auto">
          {/* header */}
          <div className="flex justify-start">
            <img
              src="/results/process.svg"
              alt="process"
              className="w-[300px] h-auto"
            />
          </div>

          {/* content */}
          <ul className="text-justify">
            {processItems.map((item) => (
              <li key={item.id} className="p-3 flex gap-3 items-start">
                <img
                  src="/results/pointer.svg"
                  alt="pointer"
                  className="w-[20px] h-auto"
                />
                <div className="">{item.content}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Awards Section */}
        <div className="w-[75vw] flex flex-col ml-auto">
          <div className="flex justify-start">
            <img
              src="/results/awards.svg"
              alt="awards"
              className="w-[300px] h-auto"
            />
          </div>
          <p className="text-justify p-2">
            The participating students stand to gain many prizes and goodies, as
            well as invaluable experience by participating in the Nexus QUEST
            examination:
          </p>
          <ul className="text-justify">
            {awardsList.map((item) => (
              <li key={item.id} className="p-3 flex gap-3 items-start">
                <img
                  src="/results/pointer.svg"
                  alt="pointer"
                  className="w-[20px] h-auto"
                />
                <div>{item.content}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
