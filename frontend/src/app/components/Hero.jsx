"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {useRouter} from "next/navigation";

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
    <section className="relative w-full h-[80vh] md:h-screen">

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
    <img
      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${slide.image.url}`}
      className="absolute inset-0 w-full h-full object-cover"
      alt="Hero Slide"
    />

    {/* Overlay (optional but recommended for readability) */}
    <div className="absolute inset-0 bg-black/40 z-10"></div>

    {/* Content */}
    <div className="absolute inset-0 ml-10 md:ml-60 flex items-center z-20">
      <div className="max-w-2xl ml-6 md:ml-20 text-white">

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Clinical Trial <br /> Management Solutions
        </h1>

        <p className="mt-4 text-sm md:text-lg text-gray-200">
          We are <span className="font-semibold text-white">Eric Solutions</span>, The Clinical trial Expert- helping you optimize operations through digitization.
        </p>

        <div className="mt-6 flex gap-4">
          <button onClick={() => router.push("/contact")} className="bg-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition" >
            Register Now
          </button>

          <button onClick={()=> router.push("/why_eric")} className="bg-gray-200 text-black px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition">
            Why Eric?
          </button>
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