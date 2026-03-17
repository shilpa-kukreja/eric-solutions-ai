import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AwardsMarquee from "./components/AwardsMarquee";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import SolutionsSection from "./components/SolutionSelection";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <AboutSection/>
   <WhyChooseUs/>
   <SolutionsSection/>
   {/* <AwardsMarquee/> */}
   <BlogSection/>
   <Newsletter/>
   <Footer/>
   </>
  );
}
