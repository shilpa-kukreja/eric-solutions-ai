"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useRouter } from "next/navigation";

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
    <section className="relative w-full min-h-[70vh] md:h-[85vh] bg-gradient-to-l from-[#024c9c] via-[#012a63] to-[#02103b] overflow-hidden">
      

      {/* Content */}
      <div className="relative z-20 flex items-center h-full mt-35 sm:mt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* VIDEO (First on mobile, second on desktop) */}
            <div className="order-1 md:order-2 flex justify-center pt-6 md:pt-0">
              {/* Wrapper added */}
              <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-xl">
                <video
                  src="/herosection/eric.mp4"
                  className="w-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                {/* 🔴 HOTSPOTS (7 AI Agents) */}

                <div
                  onClick={() => router.push("/agents/data-entry")}
                  className="absolute top-[13%] left-[28%] w-[90px] h-[80px] cursor-pointer"
                />

                <div
                  onClick={() => router.push("/agents/db-designer")}
                  className="absolute top-[33%] left-[10%] w-[80px] h-[90px] cursor-pointer"
                />


                 <div
                  onClick={() => router.push("/agents/project-manager")}
                  className="absolute top-[58%] left-[15%] w-[85px] h-[95px] cursor-pointer"
                />

                <div
                  onClick={() => router.push("/agents/document-manager")}
                  className="absolute top-[70%] left-[38%] w-[90px] h-[78px] cursor-pointer"
                />

                 <div
                  onClick={() => router.push("/agents/medical-writer")}
                  className="absolute top-[58%] left-[65%] w-[85px] h-[100px] cursor-pointer"
                />

                 <div
                  onClick={() => router.push("/agents/statistics")}
                  className="absolute top-[32%] left-[70%] w-[80px] h-[100px] cursor-pointer"
                />

                <div
                  onClick={() => router.push("/agents/cra")}
                  className="absolute top-[12%] left-[53%] w-[100px] h-[90px] cursor-pointer"
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
                <br/><span>  Intelligence deliberately to remove operational bottlenecks in clinical </span>
                 <br/><span>     trials — with humans firmly
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
