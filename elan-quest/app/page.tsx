"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import RegisterPopUp from "./components/common/RegisterPopUp";
import { ArrowUpRight } from "lucide-react";
import { EVENT_CONFIG, HOME_SECTIONS, THEME_ASSETS } from "@/app/lib/site-config";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="overflow-x-hidden">
        {showPopup && <RegisterPopUp setShowPopup={setShowPopup} />}

        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-auto md:h-[calc(100vh-80px)] flex flex-col md:flex-row gap-6 md:gap-10 px-5 md:px-25 py-6 md:py-10"
        >
          <motion.div
            className="flex flex-col justify-center gap-6 md:gap-10 w-full md:w-[1000px]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <img
                src={THEME_ASSETS.logo}
                alt="logo"
                className="w-[250px] md:w-[500px] h-auto mx-auto md:mx-0"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl md:text-3xl body-font">{EVENT_CONFIG.eventDate}</p>
              <p className="text-lg md:text-2xl body-font">{EVENT_CONFIG.eventName}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-6 md:gap-10"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-row items-center justify-center md:justify-start gap-3 group mt-0 md:mt-35">
              <img
                src={THEME_ASSETS.arrowRight}
                alt="Left Arrow"
                className="h-[40px] md:h-[50px] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div
                onClick={handleClick}
                className="w-fit cursor-pointer flex gap-2"
              >
                <div>
                  <img
                    src={THEME_ASSETS.registerNowBadge}
                    alt="Register Now"
                    className="md:h-[50px] md:w-auto"
                  />
                </div>
                <div>
                  <ArrowUpRight size={24} className="md:hidden block" />
                </div>
              </div>
              <img
                src={THEME_ASSETS.arrowLeft}
                alt="Right Arrow"
                className="h-[40px] md:h-[50px] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-base text-center md:text-2xl px-4 md:pl-15 body-font">
              {EVENT_CONFIG.tagline}
            </p>
          </motion.div>
        </motion.div>

        {/* Sections with hover arrow */}
        <motion.div
          className="flex flex-col gap-7 px-5 md:px-10 py-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {HOME_SECTIONS.map((section, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Link href={section.href}>
                <div className="flex flex-col gap-5 group cursor-pointer">
                  <div className="flex flex-row gap-5 md:gap-7 items-center">
                    <img
                      src={section.img}
                      alt="icon"
                      className="w-auto h-[35px] md:h-[40px]"
                    />
                    <img
                      src={THEME_ASSETS.hoverArrow}
                      alt="Go"
                      className="w-auto h-[35px] md:h-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <p className="text-base md:text-2xl text-justify body-font">
                    {section.text}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}