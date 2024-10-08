"use client";
import Sidebar from "@/Component/Sidebar";
import { SparklesCore } from "@/Component/ui/sparkles";
import React from "react";

const Experience = () => {
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
        {/* Hide Sidebar on small screens */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="h-screen overscroll-auto focus:overscroll-contain flex-grow mt-6 flex flex-col items-center">
          <div className="overflow-scroll z-20 ">
            <h1 className="text-4xl md:text-7xl font-bold text-white flex justify-center">
              Experience
            </h1>
            {/* Experience Card 1 */}
            <div
              className="w-full md:w-[900px] h-[400px] rounded-3xl mt-12 flex flex-col justify-center p-6"
              style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
            >
              <div className="w-full flex justify-between items-center text-white">
                <div className="flex flex-col p-3">
                  <p className="text-[16px] md:text-[24px]">
                    Human resource system
                  </p>
                  <p className="font-light text-[12px] md:text-[14px] italic">
                    Front End developer, Intern
                  </p>
                </div>
                <div className="flex flex-col p-3">
                  <p className="text-[16px] md:text-[24px]">Pinecone LLC, UB</p>
                  <p className="font-light text-[12px] md:text-[14px]">
                    April 2024 - June 2024
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-white p-6 font-light text-[14px] md:text-[16px]">
                <p>
                  • The process of submitting leave requests in advance on the
                  web and having them quickly approved by a supervisor was
                  streamlined through the use of technology.
                </p>
                <p>
                  • If the accountant used to calculate employees' salaries
                  manually, a system has been implemented where the web platform
                  automatically calculates salaries based on the employee's data
                  and the number of working days recorded on the web.
                </p>
              </div>
            </div>
            {/* Experience Card 2 */}
            <div
              className="w-full md:w-[900px] h-[500px] rounded-3xl mt-12 flex flex-col justify-center p-6"
              style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
            >
              <div className="w-full flex justify-between items-center text-white">
                <div className="flex flex-col p-3">
                  <p className="text-[16px] md:text-[24px]">
                    Smart Mongol Mobile App
                  </p>
                  <p className="font-light text-[12px] md:text-[14px] italic">
                    Front End developer, Intern
                  </p>
                </div>
                <div className="flex flex-col p-3">
                  <p className="text-[16px] md:text-[24px]">
                    Khangal Systems, UB
                  </p>
                  <p className="font-light text-[12px] md:text-[14px]">
                    June 2024 - August 2024
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-white p-6 font-light text-[14px] md:text-[16px]">
                <p>
                  • By allowing users to submit their feedback, it has
                  contributed significantly to creating a pleasant environment
                  for them to voice their concerns and resolve their issues.
                </p>
                <p>
                  • Adding a news and announcement section helped users access
                  important information quickly and efficiently, reducing the
                  risk of missing out on updates.
                </p>
                <p>
                  • The app displays financial expenses in graphs, saving
                  clients time by preventing unnecessary bank visits for
                  checking their expenses.
                </p>
              </div>
            </div>
            {/* Experience Card 3 */}
            <div
              className="w-full md:w-[900px] h-[400px] rounded-3xl mt-12 flex flex-col justify-center p-6 mb-20"
              style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
            >
              <div className="w-full flex  justify-between items-center text-white">

                <div className="flex flex-col p-3">
                  <p className="text-[16px] md:text-[22px]">Parkly System</p>
                  <p className="font-light text-[10px] md:text-[12px] italic">
                    Front End developer, Fulltime
                  </p>
                </div>
                <div className="flex flex-col p-3">
                  <p className="text-[16px] md:text-[22px]">
                    Khangal Systems, UB
                  </p>
                  <p className="font-light text-[10px] md:text-[12px]">
                    August 2024 - now
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-white p-6 font-light text-[14px] md:text-[16px]">
                <p>
                  • Parkly System aims to organize parking planning and
                  implementation to meet users' needs.
                </p>
                <p>
                  • It allows users to calculate parking time and make payments
                  accordingly.
                </p>
                <p>
                  • A comprehensive parking system that tracks entries, exits,
                  and total monthly revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
