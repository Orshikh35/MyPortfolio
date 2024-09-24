const Navbar = () => {
  const page = ["Home", "Skills", "Projects"];
  const id = ["home", "skills", "projects"]
  return (
    <div className="flex items-center  mt-6 justify-end w-screen absolute z-20 px-14">
        <button className="py-2 px-6 bg-white text-black text-center font-light text-sm rounded-2xl">Download CV</button>
    </div>
  );
};

export default Navbar;
