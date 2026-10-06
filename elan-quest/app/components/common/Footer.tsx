// "use client";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faLinkedin,
//   faXTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { useMenu } from "@/app/context/MenuContent";

// export default function Footer() {
//   const { menuOpen } = useMenu();

//   return (
//     <div
//       className={
//         menuOpen
//           ? "blur-[3px] transition duration-300 ease select-none"
//           : "transition duration-300 ease"
//       }
//     >
//       <footer className="w-full box-border">
//         <div className="relative box-border body-font bg-[var(--surface)] text-[var(--surface-foreground)] flex flex-col lg:items-end items-center lg:flex-row lg:gap-1 gap-7 p-4 md:p-8 min-h-[250px]">
//           {/* left block */}
//           <div className="w-auto lg:w-[40%] flex flex-col gap-6 lg:gap-10 box-border">
//             {/* names, plain text instead of themed logo art */}
//             <div className="flex flex-col gap-1 lg:items-start items-center">
//               <a
//                 href="https://www.elan.org.in/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="heading-font text-lg md:text-xl hover:opacity-70 transition-opacity"
//               >
//                 Elan &amp; nVision
//               </a>
//               <a
//                 href="/"
//                 className="body-font text-base md:text-lg hover:opacity-70 transition-opacity"
//               >
//                 Nexus Quest
//               </a>
//             </div>

//             <div className="heading-font text-2xl md:text-3xl lg:text-left text-center">
//               Contact Us
//             </div>
//           </div>

//           {/* center - emails */}
//           <div className="px-4 w-full md:w-[40%] flex flex-col items-center md:items-end justify-end gap-1 box-border text-sm md:text-base">
//             <div>elan.nvision@sa.iith.ac.in</div>
//             <div>elan.nvision.outreach@sa.iith.ac.in</div>
//           </div>

//           {/* right block */}
//           <div className="w-full lg:w-[20%] flex flex-col items-center lg:items-end justify-between gap-6 box-border">
//             {/* heads */}
//             <div className="w-full max-w-[210px] flex flex-col">
//               <div className="text-xl lg:text-left text-center">
//                 PR & Outreach Heads
//               </div>
//               <div className="mt-2 lg:text-left text-center">
//                 <div className="mb-2">
//                   <div>Saket Kashyap</div>
//                   <div className="text-sm">+91 92341 68717</div>
//                 </div>
//                 <div>
//                   <div>Naishadha Voruganti</div>
//                   <div className="text-sm">+91 93900 27710</div>
//                 </div>
//               </div>
//             </div>

//             {/* socials — plain text labels instead of themed separator/label images */}
//             <div className="w-full flex flex-col gap-3 items-center lg:items-end max-w-[270px]">
//               <div className="flex items-center gap-3">
//                 <span className="text-xs opacity-70">Quest</span>
//                 <a
//                   href="https://www.instagram.com/elan_nvision.competitions?igsh=MTkybTI1ZzBwb25oNg=="
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon
//                     // @ts-expect-error ignore
//                     icon={faInstagram}
//                     className="text-2xl text-[var(--surface-foreground)] transform hover:scale-110 transition-transform duration-300 ease"
//                   />
//                 </a>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="text-xs opacity-70">Elan</span>
//                 <a
//                   href="https://www.instagram.com/elan_nvision.iith?igsh=bXUxeTE2OXVkM3lz"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon
//                     // @ts-expect-error ignore
//                     icon={faInstagram}
//                     className="text-2xl text-[var(--surface-foreground)] transform hover:scale-110 transition-transform duration-300 ease"
//                   />
//                 </a>
//               </div>
//               <div className="flex items-center gap-4">
//                 <a
//                   href="https://m.facebook.com/elannvision.iithyderabad/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon
//                     // @ts-expect-error ignore
//                     icon={faFacebook}
//                     className="text-2xl text-[var(--surface-foreground)] transform hover:scale-110 transition-transform duration-300 ease"
//                   />
//                 </a>
//                 <a
//                   href="https://in.linkedin.com/company/elan-nvision-iith"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon
//                     // @ts-expect-error ignore
//                     icon={faLinkedin}
//                     className="text-2xl text-[var(--surface-foreground)] transform hover:scale-110 transition-transform duration-300 ease"
//                   />
//                 </a>
//                 <a
//                   href="https://x.com/elan_nvision?t=iGkK7K9yfQB3t4nw4LGU1g&s=08"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon
//                     // @ts-expect-error ignore
//                     icon={faXTwitter}
//                     className="text-2xl text-[var(--surface-foreground)] transform hover:scale-110 transition-transform duration-300 ease"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CONTACT_PERSONS = [
  { name: "ANSIKA", phone: "+91 97010 38745" },
  { name: "MANOGNA", phone: "+91 91544 20779" },
  { name: "AASRITHA", phone: "+91 93924 67033" },
  { name: "HIMANSHU", phone: "+91 85450 60014" },
  { name: "SHRESTA", phone: "+91 70326 66150" },
  { name: "SNEHITA", phone: "+91 83097 46984" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#A2C7FF] text-[#0B1E36] font-sans py-10 px-8">
      {/* Changed items-center -> items-start to lock top horizontal alignment */}
      <div className="mx-auto w-full max-w-[1350px] flex flex-col md:flex-row items-start justify-between gap-8 md:gap-6">

        {/* 1. BOTH LOGOS WITH SEPARATOR */}
        <div className="flex items-center gap-6 shrink-0 self-center">
          <a
            href="https://www.elan.org.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footer/footer2.png"
              alt="Elan & nVision"
              width={140}
              height={70}
              className="h-[65px] w-auto object-contain"
            />
          </a>

          {/* Thin vertical line divider */}
          {/* <div className="h-[50px] w-[1px] bg-[#0B1E36]/40" /> */}

          {/* <a
            href="https://www.iith.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/pics/iith-logo.png"
              alt="IIT Hyderabad"
              width={70}
              height={70}
              className="h-[65px] w-auto object-contain"
            />
          </a> */}
        </div>

        {/* 2. JOIN WHATSAPP COMMUNITY */}
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-[17px] font-semibold leading-[1.25] tracking-wide uppercase">
            JOIN WHATSAPP
            <br />
            COMMUNITY
          </h3>

          <a
            href="#"
            className="mt-3 flex items-center gap-2.5 text-[14px] font-normal transition-opacity hover:opacity-75"
          >
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0B1E36] text-white shrink-0">
              <FaWhatsapp className="text-[20px]" />
            </div>
            <span className="underline underline-offset-4 decoration-1">
              Click Here To Join
            </span>
          </a>
        </div>

        {/* 3. CONTACT US */}
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-[17px] font-semibold tracking-wide uppercase">
            CONTACT US
          </h3>

          <a
            href="mailto:elan.nvision.outreach@sa.iith.ac.in"
            className="mt-2 text-[14px] font-normal transition-opacity hover:opacity-75"
          >
            elan.nvision.outreach@sa.iith.ac.in
          </a>

          {/* Social Icons row */}
          <div className="mt-3 flex items-center gap-2.5">
            <SocialIcon href="https://www.youtube.com">
              <FaYoutube className="text-[15px]" />
            </SocialIcon>

            <SocialIcon href="https://x.com/elan_nvision">
              <FaXTwitter className="text-[14px]" />
            </SocialIcon>

            <SocialIcon href="https://www.instagram.com/elan_nvision.competitions">
              <FaInstagram className="text-[15px]" />
            </SocialIcon>

            <SocialIcon href="https://m.facebook.com/elannvision.iithyderabad/">
              <FaFacebookF className="text-[14px]" />
            </SocialIcon>

            <SocialIcon href="https://in.linkedin.com/company/elan-nvision-iith">
              <FaLinkedinIn className="text-[14px]" />
            </SocialIcon>
          </div>

          <a
            href="/terms"
            className="mt-2.5 text-[13px] font-normal underline underline-offset-4 decoration-1 transition-opacity hover:opacity-75"
          >
            Terms &amp; Conditions
          </a>
        </div>

        {/* 4. PR HEADS LIST (NAME LEFT, NUMBER RIGHT) */}
        <div className="flex items-start">
          <div className="grid grid-cols-[auto_auto] gap-x-12 gap-y-1.5 text-[13px] font-normal leading-[1.25]">
            {CONTACT_PERSONS.map((person) => (
              <div key={person.name} className="contents">
                <span className="text-left tracking-wide uppercase">
                  {person.name}
                </span>
                <a
                  href={`tel:${person.phone.replace(/\s+/g, "")}`}
                  className="text-right hover:underline"
                >
                  {person.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ───────────── CIRCULAR SOCIAL ICON COMPONENT ───────────── */

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex h-[32px] w-[32px]
        items-center justify-center
        rounded-full
        bg-[#0B1E36]
        text-white
        transition-transform duration-200
        hover:scale-110
      "
    >
      {children}
    </a>
  );
}