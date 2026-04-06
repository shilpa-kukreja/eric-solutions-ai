"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const [slides, setSlides] = useState([]);

  const router = useRouter();

  const API = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sliders`;

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const res = await axios.get(`${API}/active`);
      setSlides(res.data);
    } catch (error) {
      console.error("Failed to load hero slides");
    }
  };

  return (
    <section className="relative w-full  sm:py-10 xl:py-0 2xl:py-0 min-h-[70vh] md:h-[81.5vh] bg-gradient-to-l from-[#024c9c] via-[#012a63] to-[#02103b] overflow-hidden">


      {/* Content */}
      <div className="relative z-20 flex items-center h-full mt-35 sm:mt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* VIDEO (First on mobile, second on desktop) */}
            <div className="order-1 md:order-2 flex justify-center pt-6 md:pt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-xl">

                {/* ✅ 1. GIF (Bottom Layer) */}
                <img
                  src="/herosection/chakara.gif"
                  alt="animation"
                  autoPlay="flase"
                  className=" w-130 object-contain pr-1"
                />

                {/* ✅ 2. NEW IMAGE (Middle Layer) */}
                <img
                  src="/herosection/chakara/centerpart.png" // 👈 add your image here
                  alt="middle layer"
                  className="absolute top-[23.7%] left-[21.5%] inset-0 w-[275px] object-contain z-10 pointer-events-none"
                />




                {/* db designer */}
                <motion.img
                  src="/herosection/chakara/1.png"
                  alt="overlay"
                  onClick={() => router.push("/agents/db-designer")}
                  className="absolute w-[142px] object-contain z-20 
                 top-[18.9%] left-[6.4%] cursor-pointer"

                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}

                  whileHover={{ x: -3, y: -1 }}
                />

                {/* data entry */}
                <motion.img
                  src="/herosection/chakara/2.png"
                  alt="overlay"
                  onClick={() => router.push("/agents/data-entry")}
                  className="absolute w-[161.5px] object-contain z-20 
                 top-[6.2%] left-[18.1%] cursor-pointer"

                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}

                  whileHover={{ x: -1, y: -3 }}
                />


                {/* data monitor */}
                <motion.img
                  src="/herosection/chakara/3.png"
                  alt="overlay"
                  onClick={() => router.push("/agents/cra")}
                  className="absolute w-[161.5px] object-contain z-20 
                 top-[6.6%] left-[44.4%] cursor-pointer"

                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}

                  whileHover={{ x: 1, y: -3 }}
                />

                {/* statistics */}
                <motion.img
                  src="/herosection/chakara/4.png"
                  alt="overlay"
                  onClick={() => router.push("/agents/statistics")}
                  className="absolute w-[140.5px] object-contain z-20 
                 top-[19.3%] left-[59.5%] cursor-pointer"

                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}

                  whileHover={{ x: 3, y: -1 }}
                />

                {/* medical writer */}
                <motion.img
                  src="/herosection/chakara/5.png"
                  alt="overlay"
                  onClick={() => router.push("/agents/medical-writer")}
                  className="absolute w-[147.5px] object-contain z-20 
                 top-[49.8%] left-[58.1%] cursor-pointer"

                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}

                  whileHover={{ x: 3, y: 1 }}
                />


                {/* document manager */}
                <motion.img
                  src="/herosection/chakara/6.png"
                  alt="overlay"
                  onClick={() => router.push("/agents/document-manager")}
                  className="absolute w-[285.5px] object-contain z-20 
                 top-[68.4%] left-[20.4%] cursor-pointer"

                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}

                  whileHover={{ x: 0, y: 3 }}
                />

                {/* project manager */}
                <motion.img
                  src="/herosection/chakara/7.png"
                  alt="overlay"
                  onClick={() => router.push("/agents/project-manager")}
                  className="absolute w-[148.9px] object-contain z-20 
                 top-[49.8%] left-[6.5%] cursor-pointer"

                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}

                  whileHover={{ x: -3, y: 1 }}
                />

              </div>


            </div>

            {/* TEXT (Second on mobile, first on desktop) */}
            <div className="order-2 md:order-1 text-white">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                AI Agents Accelerating
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Clinical Trials - Responsibly
              </h1>

              <p className="mt-5 text-sm md:text-[15px] text-gray-400">
                From protocol design to analysis-ready data,
                <span className="font-bold text-white"> Eric AI</span>{" "} applies Artificial
                <br /><span>  Intelligence deliberately to remove operational bottlenecks in clinical </span>
                <br /><span>     trials — with humans firmly
                  in control. </span>


              </p>

              <div className="mt-7 flex flex-wrap gap-3 mb-6">
                <button
                  onClick={() => router.push("/contact")}
                  className="bg-gray-200 text-black px-6 py-3 rounded-sm font-medium hover:bg-gray-300 transition"
                >
                  Request Demo
                </button>

                <button
                  onClick={() => router.push("#ai-agents")}
                  className="bg-blue-800 px-6 py-3 rounded-sm font-medium hover:bg-[#1D4ED8] transition"
                >
                  View AI Agents
                </button>

                <button
                  onClick={() => router.push("#pricing")}
                  className="bg-gray-200 text-black px-6 py-3 rounded-sm font-medium hover:bg-gray-300 transition"
                >
                  See Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
