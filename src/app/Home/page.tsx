import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col bg-black">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home;