import Pointer from "../components/results/ArrowPointer";
import Awards from "../components/results/Awards";
import Num1 from "../components/results/Num1";
import Num2 from "../components/results/Num2";
import Process from "../components/results/Process";
import Results from "../components/results/Results";
import Trophy from "../components/results/Trophy";

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
    <div className="px-5 py-10 min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* top half */}
      <div className="">
        <h1 className="pb-10">
          <Results />
        </h1>
        <h2 className="pb-3">
          <Process />
        </h2>
        <div className="body-font w-[870px] text-justify">
          <ul>
            {processItems.map((item) => {
              return (
                <li key={item.id} className="p-4 flex gap-3">
                  <div>
                    <Pointer />
                  </div>
                  <div>{item.content}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Num1 />
      <Num2 />
      {/* bottom half */}
      <div className="my-10 pl-50 relative">
        <h2 className="pb-3">
          <Awards />
        </h2>
        <div className="body-font w-[1000px] text-justify">
          The participating students stand to gain many prizes and goodies, as
          well as invaluable experience by participating in the Nexus QUEST
          examination:
        </div>
        <div className="body-font w-[1000px] text-justify">
          <ul>
            {awardsList.map((item) => {
              return (
                <li key={item.id} className="p-4 flex gap-3">
                  <div>
                    <Pointer />
                  </div>
                  <div>{item.content}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Trophy />
    </div>
  );
}
