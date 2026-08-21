import { useEffect } from "react";

interface PopUpProps {
  setShowPopup: (val: boolean) => void;
}

const CLASS_OPTIONS = [
  { grade: 6, link: "https://unstop.com/p/nexus-quest-for-grade-6-iit-hyderabad-1530540" },
  { grade: 7, link: "https://unstop.com/p/nexus-quest-for-grade-7-iit-hyderabad-1540529" },
  { grade: 8, link: "https://unstop.com/p/nexus-quest-for-grade-8-iit-hyderabad-1540532" },
  { grade: 9, link: "https://unstop.com/p/nexus-quest-for-grade-9-iit-hyderabad-1541230" },
  { grade: 10, link: "https://unstop.com/p/nexus-quest-for-grade-10-iit-hyderabad-1541233" },
];

export default function RegisterPopUp({ setShowPopup }: PopUpProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center body-font bg-black/70 z-50 animate-fadeIn">
      <div className="bg-[var(--background)] flex flex-col p-6 shadow-lg max-w-md w-fit animate-scaleIn">
        <h2 className="text-xl font-bold text-[var(--foreground)] text-center mb-4">
          Please select your class
        </h2>
        <div className="flex flex-col gap-3">
          {CLASS_OPTIONS.map((option) => (
            <a
              key={option.grade}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-[var(--foreground)] rounded px-4 py-2 body-font font-semibold hover:opacity-70 transition-opacity duration-300"
            >
              Class {option.grade}
            </a>
          ))}
        </div>
        <button
          className="cursor-pointer mt-4 px-4 py-2 border border-[var(--foreground)] hover:opacity-70 transition-opacity duration-300 font-semibold rounded"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}