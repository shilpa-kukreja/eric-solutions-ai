"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const [slides, setSlides] = useState([]);

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

           
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}