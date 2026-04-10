import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Pricing from "./components/Pricing";
import AwardsMarquee from "./components/AwardsMarquee";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import SolutionsSection from "./components/SolutionSelection";
import ValuePillars from "./components/ValuePillars";
import HowEricAIWorks from "./components/HowEricAIWorks";
import EricAIAgents from "./components/EricAIAgents";
import TrustGovernance from "./components/TrustGovernance";
import CaseStudies from "./components/CaseStudies";
import Excellence from "./components/Excellence";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
  <SolutionsSection/>
  <Excellence/>

   {/* <AboutSection/> */}
   {/* <ValuePillars/> */}
   {/* <HowEricAIWorks/> */}
   <EricAIAgents/>
   <Pricing/>
   <TrustGovernance/>
   {/* <AwardsMarquee/> */}
   <CaseStudies/>
   <BlogSection/>
   <Newsletter/>
   <Footer/>
   </>
  );
}
