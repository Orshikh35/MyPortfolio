"use client";
import Sidebar from "@/Component/Sidebar";
import { SparklesCore } from "@/Component/ui/sparkles";
import Ecom from "../../assets/Screenshot 2024-10-04 at 14.51.07.png";
import Food from "../../assets/Screenshot 2024-10-04 at 14.51.25.png";
import Parkly from "../../assets/Screenshot 2024-10-04 at 14.51.39.png";
import Blog from "../../assets/image.png";
import React from "react";
export function Projects() {
  const handleOpenInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

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
        <div className="h-screen overscroll-none focus:overscroll-contain flex-grow mt-6 flex flex-col items-center">
          <div className="overflow-scroll z-20">
            <h1 className="md:text-7xl font-bold text-white flex justify-center">
              Projects
            </h1>
            <div
              className="w-[900px] h-[400px] rounded-3xl mt-12 flex px-6 py-12 justify-between cursor-pointer"
              style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
              onClick={() =>
                handleOpenInNewTab("https://ecommerce-mo.vercel.app/")
              }
            >
              <img
                src={Ecom.src}
                alt="Ecommerce"
                className="w-[450px] h-[300px]"
              />
              <div className="w-[450px] flex flex-col  items-center">
                <p className="text-white text-[26px] font-sans font-medium">
                  Ecommerce
                </p>
                <p className="w-[350px] text-white text-[14px] font-sans font-light pt-6 text-center">
                  The online shopping website was developed during my
                  internship, allowing users to browse and order products. It
                  includes a search function and the ability to leave comments
                  under product listings. I was responsible for leading the
                  frontend development.
                </p>
                <div className="w-[350px] flex flex-wrap pt-12 items-center justify-center gap-[8px] text-center">
                  <div className="flex justify-center gap-[12px]">
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      Next JS
                    </button>
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      TS
                    </button>
                    <button className="text-white text-[14px] px-3 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      Tailwind CSS
                    </button>
                  </div>

                  <div className="flex justify-center gap-[12px] mt-2">
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      MUI
                    </button>
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      Shadcn
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[900px] h-[400px] rounded-3xl mt-12 flex px-6 py-12 cursor-pointer"
              style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
              onClick={() =>
                handleOpenInNewTab("https://food-delivery-mo.vercel.app/")
              }
            >
              <img
                src={Food.src}
                alt="Food Delivery"
                className="w-[450px] h-[300px]"
              />
              <div className="w-[450px] flex flex-col  items-center">
                <p className="text-white text-[26px] font-sans font-medium">
                  Food Delivery
                </p>
                <p className="w-[350px] text-white text-[14px] font-sans font-light pt-6 text-center">
                  The online shopping website was developed during my
                  internship, allowing users to browse and order products. It
                  includes a search function and the ability to leave comments
                  under product listings. I was responsible for leading the
                  frontend development.
                </p>
                <div className="w-[350px] flex flex-wrap pt-12 items-center justify-center gap-[8px] text-center">
                  <div className="flex justify-center gap-[12px]">
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      Next JS
                    </button>
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      TS
                    </button>
                    <button className="text-white text-[14px] px-3 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      Tailwind CSS
                    </button>
                  </div>

                  <div className="flex justify-center gap-[12px] mt-2">
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      MUI
                    </button>
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      Shadcn
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[900px] h-[400px] rounded-3xl mt-12 flex px-6 py-12 justify-between cursor-pointer"
              style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
              onClick={() => handleOpenInNewTab("http://test.parkly.mn/")}
            >
              <img
                src={Parkly.src}
                alt="Parkly"
                className="w-[450px] h-[300px]"
              />
              <div className="w-[450px] flex flex-col  items-center">
                <p className="text-white text-[26px] font-sans font-medium">
                  Parkly System
                </p>
                <p className="w-[350px] text-white text-[14px] font-sans font-light pt-6 text-center">
                  The parking system is a web page that dynamically solves all
                  parking-related issues for residential complexes, such as
                  calculating fees based on entry and exit times, and
                  integrating with a payment system translate to Mongolia.
                </p>
                <div className="w-[350px] flex flex-wrap pt-12 items-center justify-center gap-[8px] text-center">
                  <div className="flex justify-center gap-[12px]">
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      Next JS
                    </button>
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      TS
                    </button>
                    <button className="text-white text-[14px] px-3 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      Tailwind CSS
                    </button>
                  </div>

                  <div className="flex justify-center gap-[12px] mt-2">
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      Shadcn
                    </button>
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      Chart JS
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[900px] h-[400px] rounded-3xl mt-12 flex px-6 py-12 justify-between mb-12 cursor-pointer"
              style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
              onClick={() =>
                handleOpenInNewTab("https://blog-page-amber.vercel.app/")
              }
            >
              <img src={Blog.src} alt="Blog" className="w-[450px] h-[300px]" />
              <div className="w-[450px] flex flex-col  items-center">
                <p className="text-white text-[26px] font-sans font-medium">
                  Blog Page
                </p>
                <p className="w-[350px] text-white text-[14px] font-sans font-light pt-6 text-center">
                  A website that allows users to read articles, choose by
                  category, and send emails.
                </p>
                <div className="w-[350px] flex flex-wrap pt-12 items-center justify-center gap-[8px] text-center">
                  <div className="flex justify-center gap-[12px]">
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      HTML5
                    </button>
                    <button className="text-white text-[14px] px-4 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      CSS
                    </button>
                    <button className="text-white text-[14px] px-3 py-1 rounded-xl border-[1px] font-extralight border-sky-500 w-[115px]">
                      JavaScript
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
