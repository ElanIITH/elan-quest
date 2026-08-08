// lib/site-config.ts
//
// Single source of truth for event details and theme asset paths used on
// the home page. Editing THIS file (plus the two font imports in layout.tsx
// and the two color values in globals.css) should be ~90% of what next
// year's team needs to touch to apply a new theme.

export const EVENT_CONFIG = {
  eventDate: "December 21, 2025", // update each year
  eventName: "Quest Olympiad",
  tagline:
    "A national-level Olympiad for school students, organized by Elan & nVision, the annual techno-cultural fest of IIT Hyderabad.",
};

export const HOME_SECTIONS = [
  {
    href: "/exam-details",
    img: "/theme-assets/examDetails.svg",
    text: `Elan & nVision is IIT Hyderabad's annual techno-cultural fest, blending innovation with celebration. This vibrant celebration brings together the best of both worlds - the rich cultural heritage that connects us through stories, music, and shared experiences, alongside the cutting-edge technology and innovation that drives our future.`,
  },
  {
    href: "/syllabus",
    img: "/theme-assets/syllabus.svg",
    text: `Nexus Quest tests students across four core domains: Logical Reasoning, Mathematics, Physics, and Chemistry. The syllabus emphasizes deep conceptual understanding, analytical thinking, and real-world application of fundamental principles.`,
  },
  {
    href: "/results",
    img: "/theme-assets/results.svg",
    text: `This section outlines how performance will be evaluated, from score calculation to tie-breakers. It also features details about awards, certificates, and exclusive goodies awaiting top performers.`,
  },
];

// Purely decorative / illustrated assets — these are the ones that should
// visually change if next year's theme wants a different icon style.
export const THEME_ASSETS = {
  logo: "/theme-assets/logo_light.svg",
  arrowRight: "/theme-assets/RightArrow.svg",
  arrowLeft: "/theme-assets/LeftArrow.svg",
  registerNowBadge: "/theme-assets/registerNow.svg",
  hoverArrow: "/theme-assets/blackArrow.svg",
};