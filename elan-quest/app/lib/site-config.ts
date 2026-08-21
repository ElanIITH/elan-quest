// app/lib/site-config.ts
//
// Single source of truth for event details used on the home page. Editing
// THIS file (plus font imports in layout.tsx and the two color values in
// globals.css) should be ~90% of what next year's team needs to touch to
// apply a new theme.
//
// Icons currently come from lucide-react (see page.tsx) rather than custom
// images, so there are no theme image paths to manage here yet. If next
// year's theme wants custom illustrated icons instead of lucide icons,
// that's a page.tsx change (swap the lucide <Icon /> components for <img>
// tags pointing at files in public/theme-assets/).

export const EVENT_CONFIG = {
  eventDate: "December 21, 2025", // update each year
  eventName: "Quest Olympiad",
  tagline:
    "A national-level Olympiad for school students, organized by Elan & nVision, the annual techno-cultural fest of IIT Hyderabad.",
};

export const HOME_SECTIONS = [
  {
    href: "/exam-details",
    icon: "FileText",
    text: `Elan & nVision is IIT Hyderabad's annual techno-cultural fest, blending innovation with celebration. This vibrant celebration brings together the best of both worlds - the rich cultural heritage that connects us through stories, music, and shared experiences, alongside the cutting-edge technology and innovation that drives our future.`,
  },
  {
    href: "/syllabus",
    icon: "BookOpen",
    text: `Nexus Quest tests students across four core domains: Logical Reasoning, Mathematics, Physics, and Chemistry. The syllabus emphasizes deep conceptual understanding, analytical thinking, and real-world application of fundamental principles.`,
  },
  {
    href: "/results",
    icon: "Trophy",
    text: `This section outlines how performance will be evaluated, from score calculation to tie-breakers. It also features details about awards, certificates, and exclusive goodies awaiting top performers.`,
  },
];