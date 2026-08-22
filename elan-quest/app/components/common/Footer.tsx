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

export default function Footer() {
  return (
    <footer className="w-full bg-[#B2D5FF] px-6 py-4 md:px-12 flex items-center justify-between relative z-20">
      {/* Logos Container */}
      <div className="flex items-center gap-6 md:gap-8">
        
        <Image
          src="/pics/footer.png"
          alt="logo"
          width={200}
          height={200}
          className="object-contain py-3.5"
        />
      </div>
    </footer>
  );
}
