const Navbar = () => {
  return (
    <div className="flex items-center mt-6 justify-end w-full absolute z-20 px-4 sm:px-8 md:px-14">
      <a href="/CV.pdf" download="Orshikh's CV.pdf">
        <button className="py-2 px-4 sm:px-6 bg-white text-black text-center font-light text-xs sm:text-sm md:text-base rounded-2xl transition-all duration-300 hover:bg-gray-200">
          Download CV
        </button>
      </a>
    </div>
  );
};

export default Navbar;
