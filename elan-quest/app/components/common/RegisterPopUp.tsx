import { useEffect } from "react";

interface PopUpProps {
  setShowPopup: (val: boolean) => void;
}

export default function RegisterPopUp({ setShowPopup }: PopUpProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center body-font bg-black/70 z-50 animate-fadeIn">
      <div className="bg-[var(--foreground)] flex flex-col p-6 shadow-lg max-w-md w-fit animate-scaleIn">
        <h2 className="text-xl font-bold text-[var(--background)] text-center mb-4">
          Please select your class
        </h2>
        <div className="flex flex-col gap-5">
          {[
            {
              link: "https://unstop.com/p/nexus-quest-for-grade-6-iit-hyderabad-1530540",
              img: "/popup/c6.svg",
            },
            {
              link: "https://unstop.com/p/nexus-quest-for-grade-7-iit-hyderabad-1540529",
              img: "/popup/c7.svg",
            },
            {
              link: "https://unstop.com/p/nexus-quest-for-grade-8-iit-hyderabad-1540532",
              img: "/popup/c8.svg",
            },
            {
              link: "https://unstop.com/p/nexus-quest-for-grade-9-iit-hyderabad-1541230",
              img: "/popup/c9.svg",
            },
            {
              link: "https://unstop.com/p/nexus-quest-for-grade-10-iit-hyderabad-1541233",
              img: "/popup/c10.svg",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.img}
                alt={`popup c${idx + 6}`}
                className="w-auto h-[70px] cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </div>
        <button
          className="cursor-pointer mt-4 px-4 py-2 bg-[var(--foreground)] hover:bg-[#c6c6ab] transition-colors duration-300 font-semibold text-black rounded"
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
