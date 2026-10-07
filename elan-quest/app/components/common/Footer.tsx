"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Phone,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#A2C7FF] text-[#0F2851] py-8 px-6 font-sans">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* LOGOS SECTION */}
        <div className="flex items-center gap-6 shrink-0">
          <a
            href="https://elan.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/pics/elan-logo.png"
              alt="Elan & nVision IIT Hyderabad"
              width={140}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </a>

          <div className="h-12 w-[1.5px] bg-[#0F2851]/60" />

          <a
            href="https://www.iith.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/pics/iith-logo.png"
              alt="IIT Hyderabad"
              width={100}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* COMMUNITY & EMAIL SECTION */}
        <div className="flex flex-col gap-3 text-sm font-semibold tracking-wide">
          <div className="flex flex-col">
            <span className="uppercase text-[13px] tracking-wider">
              Join Whatsapp Community
            </span>
            <a
              href="#"
              className="flex items-center gap-2 text-xs hover:underline mt-0.5"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2851] text-white">
                <MessageCircle className="w-3 h-3 fill-current stroke-none" />
              </span>
              <span className="underline">Click Here To Join</span>
            </a>
          </div>

          <a
            href="mailto:elan.nvision.outreach@sa.iith.ac.in"
            className="flex items-center gap-2 text-xs font-normal tracking-normal hover:underline mt-1"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2851] text-white shrink-0">
              <Mail className="w-3 h-3" />
            </span>
            elan.nvision.outreach@sa.iith.ac.in
          </a>
        </div>

        {/* PHONE NUMBERS SECTION */}
        <div className="flex items-start gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0F2851] text-white shrink-0 mt-0.5">
            <Phone className="w-3.5 h-3.5" />
          </span>
          <div className="grid grid-cols-[auto_auto_auto] gap-x-3 gap-y-1 text-sm font-medium tracking-wide">
            <span>AASRITHA</span>
            <span>-</span>
            <span className="font-mono">93924 67033</span>

            <span>HIMANSHU</span>
            <span>-</span>
            <span className="font-mono">85450 60014</span>

            <span>SHRESTA</span>
            <span>-</span>
            <span className="font-mono">70326 66150</span>

            <span>SNEHITA</span>
            <span>-</span>
            <span className="font-mono">83097 46984</span>
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT, ADDRESS, SOCIALS & COPYRIGHT */}
        <div className="flex flex-col items-end text-right gap-3">
          <Link
            href="/contact"
            className="text-2xl font-bold tracking-tight hover:opacity-80 uppercase"
          >
            Contact Us
          </Link>

          <p className="text-[11px] leading-tight text-[#0F2851]/90 max-w-[280px]">
            Room No. 6, Ground Floor, Sports and
            <br />
            Cultural Complex (SNCC), IIT Hyderabad,
            <br />
            Sangareddy, Telangana.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-2 my-1">
            <a href="#" className="p-1.5 rounded-full bg-[#0F2851] text-white hover:opacity-80">
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="p-1.5 rounded-full bg-[#0F2851] text-white hover:opacity-80">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="p-1.5 rounded-full bg-[#0F2851] text-white hover:opacity-80">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="p-1.5 rounded-full bg-[#0F2851] text-white hover:opacity-80">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="p-1.5 rounded-full bg-[#0F2851] text-white hover:opacity-80">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* FOOTER LINKS / COPYRIGHT */}
          <div className="flex items-center gap-4 text-[10px] font-medium tracking-wide">
            <span className="underline">Copyright © 2026 All Rights Reserved</span>
            <Link href="/terms-conditions" className="underline">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}