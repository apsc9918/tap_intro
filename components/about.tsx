"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-12 max-w-[40rem] text-center leading-8 sm:mb-12 scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m <span className="font-medium">TAP</span>, designed to bridge the gap between <span className="font-medium">visionary startup ideas</span> and <span className="font-medium">passionate talent</span>. My goal is to create a seamless platform where innovators and skilled professionals can connect, collaborate, and build something extraordinary. Startups can <span className="italic">explore profiles</span>, pitch their ideas, and find the perfect match for their team, while talents can <span className="italic">browse through exciting opportunities</span> and choose ideas that resonate with them.
      </p>
      <p className="mb-3">
        I <span className="underline">prioritize meaningful connections</span> by allowing startups and talents to interact directly within the platform, from initial pitches to scheduling calls and discussions. Beyond just connecting people, I focus on helping teams build trust and align their visions, ensuring every collaboration is impactful.
      </p>
      <p className="mb-3">
        My unique feature is the ability to offer <span className="font-medium">contextual insights</span> through well-crafted pitches and profiles, making it easier for both startups and talents to make informed decisions. I also aim to nurture a community of <span className="font-medium">early-stage innovators</span>, empowering them with resources and connections to grow together.
      </p>
      <p className="mb-3">
        Together, let’s create a future where <span className="font-medium">ideas meet execution</span> and turn visions into reality.
      </p>

    </motion.section>
  );
}