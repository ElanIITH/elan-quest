"use client";

import Image from "next/image";
import { Raleway } from "next/font/google";
import { motion, Variants } from "framer-motion";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export default function TermsPage() {
  return (
    <div
      className={`${raleway.className} bg-[#252525] text-[#E8E8C6] pt-16 w-full overflow-x-hidden`}
    >
      <div className="space-y-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="px-6 md:px-20"
        >
          <motion.div
            variants={fadeInUp}
            custom={1}
            className="w-full max-w-[1200px] h-[90px] mx-auto"
          >
            <Image
              src="/Terms-conditions.svg"
              alt="Terms & Conditions"
              width={1200}
              height={90}
              priority
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
          className="px-6 md:px-20 max-w-[1000px] mx-auto leading-relaxed text-lg space-y-6"
        >
          <p className="font-bold text-2xl">1. Acceptance of Terms</p>
          <p>
            By registering for, participating in, or accessing any part of Nexus
            QUEST organized by Elan &amp; nVision, you agree to be bound by
            these Terms and Conditions. If you do not agree to these Terms, you
            may not participate in the Olympiad.
          </p>

          <p className="font-bold text-2xl">2. Participant Conduct</p>
          <p className="font-semibold text-xl">2.1 Academic Integrity</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All work must be original and completed independently during the
              online examination.
            </li>
            <li>
              Any form of cheating, plagiarism, or academic dishonesty will
              result in immediate disqualification.
            </li>
            <li>
              Use of unauthorized materials, assistance, or communication during
              the online exam is strictly prohibited.
            </li>
            <li>
              Participants must comply with all online proctoring requirements
              and examination protocols.
            </li>
          </ul>

          <p className="font-semibold text-xl">2.2 Behavioral Standards</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Participants must maintain respectful and professional conduct
              throughout all interactions.
            </li>
            <li>
              Disruptive, inappropriate, or disrespectful behavior may result in
              disqualification.
            </li>
            <li>
              Participants represent their schools and communities and are
              expected to uphold these standards.
            </li>
            <li>
              Any form of harassment, discrimination, or misconduct will not be
              tolerated.
            </li>
          </ul>

          <p className="font-bold text-2xl">3. Participant Responsibilities</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide accurate and truthful information during registration.
            </li>
            <li>Comply with all online examination rules and procedures.</li>
            <li>Maintain confidentiality of examination content.</li>
            <li>
              Ensure technical preparedness for online participation with stable
              internet connection and compatible devices.
            </li>
          </ul>

          <p className="font-bold text-2xl">4. Intellectual Property</p>
          <p className="font-semibold text-xl">4.1 Examination Content</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All examination questions, materials, and content are proprietary
              to Elan &amp; nVision.
            </li>
            <li>
              Participants may not reproduce, share, or distribute examination
              content in any form.
            </li>
            <li>
              Violation of intellectual property rights may result in legal
              action and disqualification.
            </li>
          </ul>

          <p className="font-semibold text-xl">4.2 Participant Information</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Participants retain rights to their personal achievements and
              academic records.
            </li>
            <li>
              By participating, participants grant limited rights to use their
              names and achievements for promotional purposes related to Nexus
              QUEST and Elan &amp; nVision.
            </li>
          </ul>

          <p className="font-bold text-2xl">5. Privacy and Data Protection</p>
          <p className="font-semibold text-xl">5.1 Information Collection</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Personal information is collected only for examination
              administration and communication.
            </li>
            <li>
              Data is protected in accordance with applicable privacy laws and
              institutional policies.
            </li>
            <li>
              Information may be shared with schools for coordination purposes
              where applicable.
            </li>
          </ul>

          <p className="font-semibold text-xl">5.2 Data Usage</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Personal information will not be used for commercial purposes
              without explicit consent.
            </li>
            <li>
              Participants may request access to or correction of their personal
              information.
            </li>
            <li>Marketing communications require separate opt-in consent.</li>
          </ul>

          <p className="font-bold text-2xl">6. Liability and Disclaimers</p>
          <p className="font-semibold text-xl">6.1 Technical Issues</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Participants are responsible for ensuring stable internet
              connection and compatible devices for the online examination.
            </li>
            <li>
              Elan &amp; nVision is not liable for technical failures on the
              participant's end.
            </li>
            <li>
              System-wide technical issues will be addressed fairly with
              appropriate remedial measures.
            </li>
          </ul>

          <p className="font-semibold text-xl">6.2 Limitation of Liability</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Participation is voluntary and at the participant's own risk.
            </li>
            <li>
              Elan &amp; nVision's liability is limited to the extent permitted
              by applicable law.
            </li>
            <li>
              Prize distribution will be conducted during Elan &amp; nVision at
              IIT Hyderabad.
            </li>
          </ul>

          <p className="font-bold text-2xl">8. Modifications and Termination</p>
          <p className="font-semibold text-xl">8.1 Changes to Terms</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Elan &amp; nVision reserves the right to modify these Terms with
              reasonable notice.
            </li>
            <li>
              Continued participation after notification constitutes acceptance
              of changes.
            </li>
            <li>
              Significant changes will be communicated through official
              channels.
            </li>
          </ul>

          <p className="font-semibold text-xl">8.2 Payment and Registration</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All payments and registration fees, once made, are non-refundable.
            </li>
            <li>
              Registration confirmations are final and cannot be cancelled for
              refunds.
            </li>
          </ul>

          <p className="font-semibold text-xl">8.3 Disqualification</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Elan &amp; nVision reserves the right to disqualify participants
              for violation of these Terms.
            </li>
            <li>
              Disqualification decisions are final and not subject to appeal.
            </li>
            <li>
              Disqualified participants forfeit all rights to awards and
              recognition.
            </li>
          </ul>

          <p className="font-bold text-2xl">9. Communication</p>
          <p className="font-semibold text-xl">9.1 Official Channels</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All official communications will be made through registered email
              addresses and the official website.
            </li>
            <li>
              Participants are responsible for monitoring these channels and
              keeping contact information updated.
            </li>
            <li>
              Social media channels are supplementary and not primary means of
              official communication.
            </li>
          </ul>

          <p className="font-semibold text-xl">9.2 Contact Information</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>General inquiries: elan.nvision@sa.iith.ac.in</li>
            <li>Outreach: elan.nvision.outreach@sa.iith.ac.in</li>
          </ul>

          <p className="font-bold text-2xl">10. Miscellaneous</p>
          <p className="font-semibold text-xl">10.1 Severability</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              If any provision of these Terms is deemed invalid, the remainder
              shall continue in full force.
            </li>
            <li>
              Invalid provisions will be replaced with the closest valid
              alternative.
            </li>
          </ul>

          <p className="font-semibold text-xl">10.2 Entire Agreement</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              These Terms constitute the complete agreement between participants
              and Elan & nVision regarding Nexus QUEST.
            </li>
            <li>
              No verbal agreements or representations outside these Terms are
              binding.
            </li>
          </ul>

          <p>
            By participating in Nexus QUEST, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions.
          </p>
          <p>
            For questions regarding these Terms, please contact:
            elan.nvision@sa.iith.ac.in
          </p>
          <p>
            Nexus QUEST is organized by Elan & nVision, the annual
            techno-cultural fest of IIT Hyderabad.
          </p>
          <div className="h-10" />
        </motion.div>
      </div>
      <div className="w-[70px]"></div>
    </div>
  );
}
