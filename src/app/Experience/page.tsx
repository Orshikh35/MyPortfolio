"use client";
import Sidebar from "@/Component/Sidebar";
import { SparklesCore } from "@/Component/ui/sparkles";

export function Experience() {
  return (
    <div className="h-screen relative w-full bg-black flex  overflow-hidden rounded-md">
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
        <div className=" h-screen overscroll-auto focus:overscroll-contain flex-grow mt-6 flex flex-col items-center">
          <div className="overflow-scroll z-20 ">
            <h1 className="md:text-7xl font-bold text-white flex justify-center">
              Experience
            </h1>
            <div
              className="w-[900px] h-[400px] rounded-3xl mt-12 flex flex-col justify-center p-6"
              style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
            >
              <div className="w-full flex justify-between items-center text-white">
                <div className="flex flex-col p-6">
                  <p className="text-[24px]">Human resource system</p>
                  <p className="font-light text-[14px] italic">Front End developer, Intern</p>
                </div>
                <div className="flex flex-col p-6">
                  <p  className="text-[24px]">Pinecone LLC, UB</p>
                  <p className="font-light text-[14px]">April 2024 - June 2024 </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-white p-6 font-light text-[16px] font-sans">
                <p>
                  • The process of submitting leave requests in advance on the web and having them quickly approved by a supervisor was streamlined through the use of technology.
                </p>
                <p>
                  • If the accountant used to calculate employees' salaries manually, a system has been implemented where the web platform automatically calculates salaries based on the employee's data and the number of working days recorded on the web.
                </p>
              </div>
              <div></div>
            </div>
            <div
              className="w-[900px] h-[400px] rounded-3xl mt-12 flex flex-col justify-center p-6"
              style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
            >
              <div className="w-full flex justify-between items-center text-white">
                <div className="flex flex-col p-6">
                  <p className="text-[24px]">Smart Mongol Mobile App</p>
                  <p className="font-light text-[14px] italic">Front End developer, Intern</p>
                </div>
                <div className="flex flex-col p-6">
                  <p  className="text-[24px]">Khangal Systems, UB</p>
                  <p className="font-light text-[14px]">June 2024 - August 2024 </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-white p-6 font-light text-[16px]">
                <p>
                  • By allowing users to submit their feedback, it has contributed significantly to creating a pleasant environment for them to voice their concerns and resolve their issues.
                </p>
                <p>
                  • By adding a news and announcement section to the app, we were able to solve a major problem of users missing out on important information. This new feature ensures that users can access updates quickly and efficiently, keeping them informed without delays. 
                </p>
                <p>
                  • By clearly displaying their financial expenses through graphs on the app, users can intelligently see the amount of expenses incurred each month. This helps prevent of having to visit the bank for checks, ultimately saving time for the clients.
                </p>
              </div>
              <div></div>
            </div>
            <div
              className="w-[900px] h-[400px] rounded-3xl mt-12 flex flex-col justify-center p-6 mb-20"
              style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
            >
       <div className="w-full flex justify-between items-center text-white">
                <div className="flex flex-col p-6">
                  <p className="text-[24px]">Parkly System</p>
                  <p className="font-light text-[14px] italic">Front End developer, Fulltime</p>
                </div>
                <div className="flex flex-col p-6">
                  <p  className="text-[24px]">Khangal Systems, UB</p>
                  <p className="font-light text-[14px]">August 2024 - now</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-white p-6 font-light text-[16px]">
                <p>
                  • Parkly System's goal is to successfully organize parking planning and implementation challenges faced by users and to assist in developing a system that meets their needs.
                </p>
                <p>
                  • You can calculate your parking time and make payments accordingly.
                </p>
                <p>
                  • This is a comprehensive parking system that includes all information on entries and exits, as well as the total monthly revenue
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
