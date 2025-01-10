
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import picFourImg from "@/public/pic-four.jpg";
import picOneImg from "@/public/pic-one.jpg";
import picThreeImg from "@/public/pic-three.jpg";
import picTwoImg from "@/public/pic-two.jpg";

// import taplogoImg from "@/public/taplogo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Features",
    hash: "#features",
  },
  {
    name: "Survey",
    hash: "#survey",
  },
  {
    name: "Roadmap",
    hash: "#roadmap",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const roadmapData = [
  {
    title: "MPV",
    location: "Go to market",
    description:
      "I’ll be starting with basic features such as login, signup, and a user dashboard. The platform will have separate logins for startups and talents. A key feature will allow startups to pitch their ideas and connect with talents for potential collaboration.",
    icon: React.createElement(LuGraduationCap),
    date: "MVP",
  },
  {
    title: "PMF",
    location: "Ready for scale",
    description:
      "After the MVP, I’ll be focusing on the product-market fit. I’ll be adding more features such as a advanced chat system, video/audio calls and a team management system. The platform will be more user-friendly and will provide real-time updates.",
    icon: React.createElement(CgWorkAlt),
    date: "PMF",
  },
  {
    title: "Application",
    location: "Availablity over web&mobile",
    description:
      "After the PMF, I’ll be focusing on making the platform available over web and mobile. I'll be intoduicing features to scale a startup directly from the platform. The platform will be more interactive and will provide a seamless communication experience.",
    icon: React.createElement(FaReact),
    date: "Application",
  },
] as const;

export const featuresData = [
  {
    title: "Startup & Talents",
    description:
      "TAP will provide separate login for startups and talents. Startups can pitch their ideas, and talents can select the idea to work on according to their interest.",
    tags: ["Easy Login", "Separate UI", "Idea Pitching", "Personalized Matches", "Role-Specific Access"],
    imageUrl: picFourImg,
  },
  {
    title: "User Dashboard",
    description:
      "Both Startups and Talents will have dashboards to manage the pitches, conversations, and their profiles.",
    tags: ["Profile Management", "Conversation Tracking", "Pitch Management", "User-Friendly Interface", "Real-Time Updates"],
    imageUrl: picOneImg,
  },
  {
    title: "Talents",
    description:
      "TAP is a platform for talents to get hired by startups they are interested in. Talents can update their skills on the profile page.",
    tags: ["Skill Showcase", "Job Opportunities", "Profile Updates", "Interest-Based Selection", "Career Growth"],
    imageUrl: picThreeImg,
  },
  {
    title: "Easy Interactions",
    description:
      "Talents can easily interact with the startups and vice versa. They can chat, call, and share files.",
    tags: ["In-App Chat", "File Sharing", "Video/Audio Calls", "Instant Notifications", "Seamless Communication"],
    imageUrl: picTwoImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;