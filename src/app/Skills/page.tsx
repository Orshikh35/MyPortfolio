"use client";
import Sidebar from "@/Component/Sidebar";
import { SparklesCore } from "@/Component/ui/sparkles";
import Image from "next/image"; // Import Next.js Image component
import Logo from "../../assets/5968322.png";
import q from "../../assets/CSS3_logo_and_wordmark.svg";
import w from "../../assets/HTML5_logo_and_wordmark.svg.png";
import s from "../../assets/Typescript_logo_2020.svg.png";
import a from "../../assets/dango-inner-2.webp";
import d from "../../assets/download.png";
import p from "../../assets/0_Hdm7hBTZ-hKlbtlV.png";
import l from "../../assets/Tailwind_CSS_Logo.svg.png";
import F from "../../assets/Figma-logo.svg.png";
import React from "react";

const labels = [
  {
    name: "HTML",
    logo: w,
  },
  {
    name: "CSS",
    logo: q,
  },
  {
    name: "JavaScript",
    logo: d,
  },
  {
    name: "TypeScript",
    logo: s,
  },
  {
    name: "React JS",
    logo: p,
  },
  {
    name: "Next JS",
    logo: a,
  },
  {
    name: "Tailwind CSS",
    logo: l,
  },
  {
    name: "Node.js",
    logo: Logo,
  },
  {
    name: "Figma",
    logo: F,
  },
];

export function Skills() {
  return (
    <div className="h-screen relative w-full bg-black flex overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-screen"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex flex-row w-full">
        <Sidebar />
        <div className="flex-grow mt-6 flex flex-col items-center px-4">
          <h1 className="w-full md:text-7xl font-bold text-white text-center">Skills</h1>
          <div className="flex flex-col mt-16 items-center">
            <h1 className="w-full md:text-3xl font-bold text-white text-center">Languages</h1>
            <div className="flex flex-wrap justify-center gap-6 mt-12"> 
              {labels.map((label) => (
                <div
                  key={label.name}
                  className="flex gap-2 py-2 px-4 rounded-2xl border border-gray-200 items-center"
                >
                  <Image src={label.logo} alt={label.name} width={25} height={25} />
                  <p className="text-white">{label.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
