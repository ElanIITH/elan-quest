import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  menuOpen: boolean;
}

export default function Footer({ menuOpen }: Props) {
  return (
    <div
      className={
        menuOpen
          ? "blur-[3px] transition duration-300 ease select-none"
          : "transition duration-300 ease"
      }
    >
      <footer className="w-full box-border">
        <div className="relative box-border body-font bg-[var(--foreground)] text-[var(--background)] flex flex-col lg:items-end items-center lg:flex-row lg:gap-1 gap-7 p-4 md:p-8 min-h-[250px]">
          {/* corners */}
          <div className="absolute top-0 left-0">
            <img
              src="/footer/corner.svg"
              alt="corner"
              className="w-[20px] md:w-[30px] h-auto"
            />
          </div>
          <div className="absolute rotate-90 top-0 right-0">
            <img
              src="/footer/corner.svg"
              alt="corner"
              className="w-[20px] md:w-[30px] h-auto"
            />
          </div>

          {/* left block */}
          <div className="w-auto lg:w-[40%] flex flex-col gap-10 lg:gap-27 xl:gap-17 box-border">
            {/* logos */}
            <div className="flex gap-6 md:gap-7 lg:justify-start justify-center">
              <a
                href="https://www.elan.org.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/footer/elan.svg"
                  alt="Elan Logo"
                  className="w-[150px] md:w-[190px] h-auto transform hover:scale-105 transition-transform duration-300 ease"
                />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/footer/quest.svg"
                  alt="Quest Logo"
                  className="w-[130px] md:w-[170px] h-auto transform hover:scale-105 transition-transform duration-300 ease"
                />
              </a>
            </div>

            {/* contact us image */}
            <div className="">
              <img
                src="/footer/contact-us.svg"
                alt="contact us"
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>

          {/* center - emails */}
          <div className="px-4 w-full md:w-[40%] flex flex-col items-center md:items-end justify-end gap-1 box-border text-sm md:text-base">
            <div>elan.nvision@sa.iith.ac.in</div>
            <div>elan.nvision.outreach@sa.iith.ac.in</div>
          </div>

          {/* right block */}
          <div className="w-full lg:w-[20%] flex flex-col items-center lg:items-end justify-between gap-6 box-border">
            {/* heads */}
            <div className="w-full max-w-[210px] flex flex-col">
              <div className="text-xl lg:text-left text-center">
                PR & Outreach Heads
              </div>
              <div className="mt-2 lg:text-left text-center">
                <div className="mb-2">
                  <div>Saket Kashyap</div>
                  <div className="text-sm">+91 92341 68717</div>
                </div>
                <div>
                  <div>Naishadha Voruganti</div>
                  <div className="text-sm">+91 93900 27710</div>
                </div>
              </div>
            </div>

            {/* socials */}
            <div className="h-[50px] w-full flex justify-between items-center box-border max-w-[270px]">
              <img
                src="/footer/quest-socials.svg"
                alt="quest"
                className="md:w-[20px] w-[25px] h-auto"
              />
              <a
                href="https://www.instagram.com/elan_nvision.competitions?igsh=MTkybTI1ZzBwb25oNg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  // @ts-expect-error ignore
                  icon={faInstagram}
                  className="text-3xl md:text-2xl transform hover:scale-110 transition-transform duration-300 ease"
                />
              </a>
              <img
                src="/footer/dot-separator.svg"
                alt="separator"
                className="w-[7px] h-auto"
              />
              <img
                src="/footer/elan-socials.svg"
                alt="elan"
                className="md:w-[20px] w-[25px] h-auto"
              />
              <a
                href="https://www.instagram.com/elan_nvision.iith?igsh=bXUxeTE2OXVkM3lz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  // @ts-expect-error ignore
                  icon={faInstagram}
                  className="text-3xl md:text-2xl transform hover:scale-110 transition-transform duration-300 ease"
                />
              </a>
              <a
                href="https://m.facebook.com/elannvision.iithyderabad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  // @ts-expect-error ignore
                  icon={faFacebook}
                  className="text-3xl md:text-2xl text-[var(--background)] transform hover:scale-110 transition-transform duration-300 ease"
                />
              </a>
              <a
                href="https://in.linkedin.com/company/elan-nvision-iith"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  // @ts-expect-error ignore
                  icon={faLinkedin}
                  className="text-3xl md:text-2xl text-[var(--background)] transform hover:scale-110 transition-transform duration-300 ease"
                />
              </a>
              <a
                href="https://x.com/elan_nvision?t=iGkK7K9yfQB3t4nw4LGU1g&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  // @ts-expect-error ignore
                  icon={faXTwitter}
                  className="text-3xl md:text-2xl text-[var(--background)] transform hover:scale-110 transition-transform duration-300 ease"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
