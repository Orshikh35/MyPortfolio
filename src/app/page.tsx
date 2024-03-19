import SparklesPreview from "@/Component/Hero";
import Navbar from "@/Component/Navbar";
import { InfiniteMovingCardsDemo } from "@/Component/Logo";
import { HeroParallaxDemo } from "@/Component/Projects";
import Footer from "@/Component/Footer";


const Home = () => {
  return (
    <div className="flex flex-col ">
      <Navbar/>
      <SparklesPreview/>
      <InfiniteMovingCardsDemo/>
      <HeroParallaxDemo/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home;