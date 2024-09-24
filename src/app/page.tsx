import SparklesPreview from "@/Component/Hero";
import Navbar from "@/Component/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col bg-black">
      <Navbar/>
      <SparklesPreview/>
    </div>
  )
}

export default Home;