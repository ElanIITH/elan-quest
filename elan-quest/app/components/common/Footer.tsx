import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-screen">
      <div className="relative h-[250px] p-8 box-border body-font bg-[var(--foreground)] text-[var(--background)] flex gap-3">
        {/* corners */}
        <div className="absolute top-0 left-0">
          <img
            src="/footer/corner.svg"
            alt="corner"
            className="w-[30px] h-auto"
          />
        </div>
        <div className="absolute rotate-90 top-0 right-0">
          <img
            src="/footer/corner.svg"
            alt="corner"
            className="w-[30px] h-auto"
          />
        </div>

        {/* left */}
        <div className="w-[500px] flex flex-col justify-between">
          {/* logos */}
          <div className="flex gap-7">
            <img
              src="/footer/elan.svg"
              alt="Elan Logo"
              className="w-[190px] h-auto"
            />
            <img
              src="/footer/quest.svg"
              alt="Quest Logo"
              className="w-[170px] h-auto"
            />
          </div>

          {/* contact us */}
          <div className="">
            <Link href={"#"}>
              <img
                src="/footer/contact-us.svg"
                alt="contact us"
                className="w-[500px] h-auto transform hover:scale-103 transition-transform duration-300 ease"
              />
            </Link>
          </div>
        </div>

        {/* center + emails */}
        <div className="w-[430px] flex flex-col justify-end items-end">
          <div>elan.nvision@sa.iith.ac.in</div>
          <div>elan.nvision.outreach@sa.iith.ac.in</div>
        </div>

        {/* right */}
        <div className="flex-grow flex flex-col items-end justify-between">
          {/* heads */}
          <div className="w-[210px] flex flex-col">
            <div className="text-xl">PR & Outreach Heads</div>
            <div>
              <div className="">
                <div>Saket Kashyap</div>
                <div>+91 92341 68717</div>
              </div>
              <div className="">
                <div>Naishadha Voruganti</div>
                <div>+91 93900 27710</div>
              </div>
            </div>
          </div>

          {/* socials */}
          <div className="h-[50px] w-full flex justify-around items-center px-1">
            <a href="#">
              <img
                src="/footer/quest-ig.svg"
                alt="quest instagram"
                className="w-[65px] h-auto transform hover:scale-110 transition-transform duration-300 ease"
              />
            </a>
            <a href="#">
              <img
                src="/footer/quest-ig.svg"
                alt="quest instagram"
                className="w-[65px] h-auto transform hover:scale-110 transition-transform duration-300 ease"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook as any}
                className="w-6 h-6 text-3xl text-[var(--background)] transform hover:scale-115 transition-transform duration-300 ease"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin as any}
                className="w-6 h-6 text-3xl text-[var(--background)] transform hover:scale-115 transition-transform duration-300 ease"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
