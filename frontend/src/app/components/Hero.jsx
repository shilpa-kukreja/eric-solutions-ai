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
    <section className="relative w-full h-[80vh] md:h-screen bg-[#2167ad]">

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >


        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="relative w-full h-[80vh] md:h-screen">

              {/* Background Image */}
              {/* <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${slide.image.url}`}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Hero Slide"
              /> */}

              {/* Overlay (optional but recommended for readability) */}
              <div className="absolute inset-0 bg-black/40 z-10"></div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">

                  <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white">

                      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        AI Agents Accelerating Clinical Trials - Responsibly
                      </h1>

                      <p className="mt-4 text-sm md:text-lg text-gray-200">
                        From protocol design to analysis-ready data,
                        <span className="font-semibold text-white"> Eric AI</span> applies Artificial Intelligence deliberately to remove operational bottlenecks in clinical trials — with humans firmly in control.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-4">
                        <button
                          onClick={() => router.push("/contact")}
                          className="bg-gray-200 text-black px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition"
                        >
                          Request Demo
                        </button>

                        <button
                          onClick={() => router.push("/why_eric")}
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

                    {/* RIGHT IMAGE */}
                    <div className="hidden md:flex justify-center">
                      <img
                        src="/chakara.png" // 👈 put your image in /public
                        alt="AI Illustration"
                        className="w-full max-w-md object-contain drop-shadow-2xl"
                      />
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}