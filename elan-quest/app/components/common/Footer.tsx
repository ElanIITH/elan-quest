"use client";

import Image from "next/image";
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
}