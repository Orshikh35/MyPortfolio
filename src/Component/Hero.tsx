"use client";
import { useRouter } from 'next/navigation';
import { SparklesCore } from "./ui/sparkles";

export function Hero() {
  const router = useRouter();
  const title = "Front-End Web Developer";

  // Navigation handler
  const handleNavigation = (section: string) => {
    router.push(`/${section}`); // Navigate to /ABOUT, /SKILLS, etc.
  };

  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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
      <p className="md:text-3xl text-[14px] lg:text-3xl font-light text-center text-white relative z-20 pb-4">Hey! I'm</p>
      <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        Bat Orshikh
      </h1>
      <div className="w-[640px] relative mt-8">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>

      {/* Animated Title with Montserrat Font */}
      <div className="flex justify-center pt-12 relative z-20">
        {title.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="flex items-center">
            {word.split("").map((char, index) => (
              <span
                key={index}
                className="text-white font-light text-[12px] lg:text-3xl inline-block font-montserrat"
                style={{
                  animation: `fadeIn 0.5s ease forwards ${wordIndex * 0.5 + index * 0.1}s`,
                  opacity: 0,
                  marginRight: "5px", // Adjust the gap between letters
                }}
              >
                {char}
              </span>
            ))}
            <span className="text-transparent" style={{ width: "15px" }}></span>
          </span>
        ))}
      </div>

      <div className="flex justify-evenly w-screen pt-20">
        {["About", "Skills", "Experience", "Projects"].map((section, index) => (
          <div 
            key={index} 
            onClick={() => handleNavigation(section)} 
            className="relative h-[200px] w-[300px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer hover:bg-gradient-to-r hover:from-transparent hover:via-indigo-500 hover:to-transparent hover:border hover:border-sky-500"
          >
            <div className="absolute inset-0 bg-gray-400 opacity-20 rounded-3xl" />
            <div className="flex flex-col justify-center items-center h-full p-6 relative z-10 text-center">
              <p className="text-white font-bold text-[34px] font-sans pt-[6px]">{section}</p>
              <p className="text-white font-light text-[16px] font-sans pt-2">
                {section === "About" ? "My background, education, hobbies, and more." :
                 section === "Skills" ? "Languages, frameworks, tools, and libraries I'm experienced with." :
                 section === "Experience" ? "Previous jobs, internships, and programs I've participated in." :
                 "Cool stuff I've enjoyed tinkering with over the years."}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-[100px] justify-between">
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default Hero;
