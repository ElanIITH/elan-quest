"use client";

import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#B2D5FF] px-6 py-8 md:px-16 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-20">
      {/* Logos — left */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <a
          href="https://www.iith.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/pics/iith-logo.png"
            alt="IIT Hyderabad"
            width={90}
            height={30}
            className="object-contain"
          />
        </a>

        <a
          href="https://elan.org.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/pics/elan-logo.png"
            alt="Elan and nVision logo"
            width={110}
            height={30}
            className="object-contain"
          />
        </a>
=======
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

>>>>>>> origin/skeleton-base
      </div>

      {/* Contact — right */}
      <div className="flex flex-col items-center md:items-end gap-3 text-[#0F2851]">
        <Link
          href="/contact"
          className="text-sm md:text-base font-semibold tracking-wide hover:opacity-70 transition-opacity"
        >
          CONTACT US
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="mailto:elan.nvision@sa.iith.ac.in"
            className="text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
          >
            elan.nvision@sa.iith.ac.in
          </a>

          <a
            href="https://www.instagram.com/elan_nvision.iith?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/pics/insta-logo.png"
              alt="Instagram"
              width={22}
              height={22}
              className="object-contain mix-blend-multiply"
            />
          </a>
        </div>
      </div>

      <Link
        href="/terms-conditions"
        className="absolute bottom-2 right-3 text-[10px] md:text-xs font-semibold tracking-wide text-[#0F2851] hover:opacity-70 transition-opacity"
      >
        TERMS & CONDITIONS
      </Link>
    </footer>
  );
<<<<<<< HEAD
=======
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
>>>>>>> origin/skeleton-base
}