"use client";
import Sidebar from "@/Component/Sidebar";
import { SparklesCore } from "@/Component/ui/sparkles";
import Ecom from "../../assets/Screenshot 2024-10-04 at 14.51.07.png";
import Food from "../../assets/Screenshot 2024-10-04 at 14.51.25.png";
import Parkly from "../../assets/Screenshot 2024-10-04 at 14.51.39.png";
import Blog from "../../assets/image.png";
import React from "react";

const Projects = () => {
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
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="h-screen overscroll-auto focus:overscroll-contain flex-grow mt-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white flex justify-center">
            Projects
          </h1>
          <div className="overflow-y-auto z-20 mt-12 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[ 
                {
                  img: Ecom.src,
                  title: "Ecommerce",
                  description: "The online shopping website was developed during my internship, allowing users to browse and order products. It includes a search function and the ability to leave comments under product listings. I was responsible for leading the frontend development.",
                  url: "https://ecommerce-mo.vercel.app/",
                  tags: ["Next JS", "TS", "Tailwind CSS", "MUI", "Shadcn"],
                },
                {
                  img: Food.src,
                  title: "Food Delivery",
                  description: "A platform that enables users to order food online from various restaurants, featuring a user-friendly interface and seamless navigation.",
                  url: "https://food-delivery-mo.vercel.app/",
                  tags: ["Next JS", "TS", "Tailwind CSS", "MUI", "Shadcn"],
                },
                {
                  img: Parkly.src,
                  title: "Parkly System",
                  description: "The parking system is a web page that dynamically solves all parking-related issues for residential complexes, such as calculating fees based on entry and exit times.",
                  url: "http://test.parkly.mn/",
                  tags: ["Next JS", "TS", "Tailwind CSS", "Shadcn", "Chart JS"],
                },
                {
                  img: Blog.src,
                  title: "Blog Page",
                  description: "A personal blog where users can share thoughts and insights, featuring a clean and intuitive layout for easy navigation.",
                  url: "https://blog-page-amber.vercel.app/",
                  tags: ["Next JS", "TS", "Tailwind CSS", "MUI", "Shadcn"],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="rounded-3xl flex flex-col p-6 cursor-pointer bg-black bg-opacity-40 transition-transform duration-300 hover:scale-105"
                  onClick={() => handleOpenInNewTab(project.url)}
                  style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
                >
                  <img src={project.img} alt={project.title} className="w-full h-[300px] object-cover rounded-t-3xl" />
                  <div className="flex flex-col items-center p-4">
                    <p className="text-white text-2xl font-medium">{project.title}</p>
                    <p className="w-full text-white text-sm font-light pt-4 text-center">{project.description}</p>
                    <div className="flex flex-wrap pt-4 items-center justify-center gap-2">
                      {project.tags.map((tag, idx) => (
                        <button key={idx} className="text-white text-sm px-4 py-1 rounded-xl border border-sky-500">
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
