import React from "react";
import Gmail from "../assets/gmail.png";
import Ins from "../assets/instagram.png";
import Git from "../assets/github.png";

function Sidebar() {
  return (
    <div
      className="h-[730px] w-[300px] p-6 rounded-3xl flex justify-start items-start my-6 mx-6"
      style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
    >
      <ul className="space-y-4 relative z-20">
        {["Home", "About", "Skills", "Experience", "Projects"].map(
          (item, index) => (
            <li key={index}>
              <a
                href={`/${item}`}
                className="text-white relative z-20 block hover:bg-gray-800 w-[250px] px-3 py-3 rounded-lg transition duration-200"
              >
                {item}
              </a>
            </li>
          )
        )}
        <div className="flex gap-12 justify-center items-center pt-[300px]">
          <a href="mailto:batorshikh35@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={Gmail.src} className="w-[30px] h-[30px]" alt="Email" />
          </a>
          <a href="https://www.instagram.com/__orshikh/?__pwa=1" target="_blank" rel="noopener noreferrer">
            <img src={Ins.src} className="w-[30px] h-[30px]" alt="Instagram" />
          </a>
          <a href="https://github.com/Orshikh35" target="_blank" rel="noopener noreferrer">
            <img src={Git.src} className="w-[30px] h-[30px]" alt="GitHub" />
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
