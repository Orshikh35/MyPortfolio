import SparklesPreview from "@/Component/Hero";
import Navbar from "@/Component/Navbar";
import { InfiniteMovingCardsDemo } from "@/Component/Logo";
import Footer from "@/Component/Footer";


const Home = () => {
  return (
    <div className="flex flex-col bg-black">
      <Navbar/>
      <SparklesPreview/>
      <InfiniteMovingCardsDemo/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home;