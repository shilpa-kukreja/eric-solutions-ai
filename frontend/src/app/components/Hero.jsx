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
    <section className="relative w-full min-h-[80vh] md:h-screen bg-[#2167ad] overflow-hidden">
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 "></div>

      {/* Content */}
      <div className="relative z-20 flex items-center h-full mt-30 sm:mt-20">
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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                AI Agents Accelerating Clinical Trials - Responsibly
              </h1>

              <p className="mt-4 text-m md:text-lg text-gray-200">
                From protocol design to analysis-ready data,
                <span className="font-semibold text-white"> Eric AI</span>{" "}
                applies Artificial Intelligence deliberately to remove
                operational bottlenecks in clinical trials — with humans firmly
                in control.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 mb-6">
                <button
                  onClick={() => router.push("/contact")}
                  className="bg-gray-200 text-black px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition"
                >
                  Request Demo
                </button>

                <button
                  onClick={() => router.push("/about")}
                  className="bg-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition"
                >
                  View AI Agents
                </button>

                <button
                  onClick={() => router.push("/pricing")}
                  className="bg-gray-200 text-black px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition"
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
