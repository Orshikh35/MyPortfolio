import Logo from '../assets/ethereum-classic-logo-removebg-preview.png';
import { SparklesCore } from "../ui/sparkles";

const Navbar = () => {
  const page = ["Home", "Skills", "Projects"];
  const id = ["home", "skills", "projects"]
  return (
    <div className="flex items-center  mt-6 justify-around w-screen absolute z-20">
      <div className="flex gap-2 items-center">
        <img src="https://assets-global.website-files.com/64d1a97b791d8ca9bb004633/65cd7371a0f9b0515f337171_LogoWhite.svg" loading="lazy" alt="Pinecone Academy Logo" />
      </div>
      <div className="flex justify-center items-center gap-10 w-fit border-[0.5px] border-indigo-400 rounded-2xl py-2 px-6 ">
        {page.map((page, index) => (
          <li className="flex justify-center items-center" key={index}>
            <a className="font-light text-sm" href={id[index]}>{page}</a>
          </li>
        ))}
      </div>
      <div>
        <button className="py-2 px-6 bg-white text-black text-center font-light text-sm rounded-2xl">Download CV</button>
      </div>
    </div>
  );
};

export default Navbar;
