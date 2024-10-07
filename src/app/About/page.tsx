"use client";
import { SparklesCore } from "@/Component/ui/sparkles";
import Sidebar from "@/Component/Sidebar";
import React from "react";

export function About() {

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
        <div className="flex-grow mt-6 flex flex-col items-center">
          <h1 className="w-full md:text-7xl font-bold text-white text-center">
            About
          </h1>
        <div className="flex flex-col gap-6 mt-24">
        <p className="text-white px-36 flex text-center font-light text-[16px] font-montserrat">
            For me, programming is not just a
            job, but my true passion. Coding allows me to use my logical
            thinking to solve problems creatively, and learning new things while
            keeping up with technological advancements motivates me every day.
            Working on programming tasks helps develop my creative thinking and
            pushes me to find innovative solutions to problems. Writing clean
            code and efficient algorithms feels like creating a work of art.
          </p>
          <p className="text-white px-36 flex text-center font-light text-[16px]">
            In my free time, I focus on my health by playing volleyball. This
            sport has taught me the importance of teamwork and has helped me
            develop speed and endurance. I also enjoy spending time in nature,
            hiking mountains, and exploring new places, which energizes me and
            provides a refreshing way to relax. Being close to nature and
            discovering new experiences adds vitality to my life.
          </p>
          <p className="text-white px-36 flex text-center font-light text-[16px]">
            I also have a strong interest in working with children. I used to
            teach kids, and this experience taught me responsibility, patience,
            and how valuable it is to share knowledge with others. Seeing
            children learn and grow inspires me, and I love sharing my knowledge
            and motivating them.
          </p>
          <p className="text-white px-36 flex text-center font-light text-[16px]">
            In my life, constantly learning new things, helping others, and
            developing my creativity are incredibly important. As I grow in the
            tech field, I aim to contribute to society by sharing my knowledge
            and making a positive impact."
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
